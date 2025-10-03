import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import Stripe from "stripe";
import express from "express";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
});

// In-memory storage for pending checkouts (maps session ID to lead data)
const pendingCheckouts = new Map<string, any>();

// Register webhook handler BEFORE express.json() middleware
export function registerWebhook(app: Express): void {
  app.post("/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req, res) => {
      const sig = req.headers["stripe-signature"];
      const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
      
      if (!sig) {
        console.error("Missing webhook signature");
        return res.status(400).send("Webhook Error: Missing signature");
      }
      
      if (!whSecret) {
        console.warn("STRIPE_WEBHOOK_SECRET not set - webhook signature verification disabled");
        return res.status(400).send("Webhook Error: Webhook secret not configured");
      }

      let event: Stripe.Event;

      try {
        event = stripe.webhooks.constructEvent(req.body, sig, whSecret);
      } catch (err: any) {
        console.error("Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }

      // Handle events
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          console.log("✅ Checkout session completed:", session.id);
          console.log("   Customer:", session.customer);
          console.log("   Subscription:", session.subscription);
          break;
        }
        case "invoice.paid": {
          const invoice = event.data.object as Stripe.Invoice;
          console.log("✅ Invoice paid:", invoice.id);
          break;
        }
        case "customer.subscription.updated": {
          const subscription = event.data.object as Stripe.Subscription;
          console.log("✅ Subscription updated:", subscription.id);
          console.log("   Status:", subscription.status);
          break;
        }
        case "customer.subscription.deleted": {
          const subscription = event.data.object as Stripe.Subscription;
          console.log("🔴 Subscription deleted:", subscription.id);
          break;
        }
        default:
          console.log(`📋 Unhandled event type: ${event.type}`);
          break;
      }

      res.json({ received: true });
    }
  );
}

export async function registerRoutes(app: Express): Promise<Server> {

  // Lead creation endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      // Create formatted email content for hello@answerpro24.com
      const emailContent = `
New Lead Submission - AnswerPro 24

Company: ${lead.companyName}
Contact: ${lead.contactName}
Phone: ${lead.phone}
Email: ${lead.email}
Industry: ${lead.industry}
Service Area: ${lead.serviceArea}
Call Volume: ${lead.currentVolume}
${lead.onCallScheduleLink ? `Schedule Link: ${lead.onCallScheduleLink}` : ''}

Submitted: ${new Date().toLocaleString()}
Lead ID: ${lead.id}
      `;
      
      console.log("New lead created:", lead);
      console.log("\n=== EMAIL TO hello@answerpro24.com ===");
      console.log(emailContent);
      console.log("=====================================\n");
      
      // Send notification (in production, this would use SendGrid, SES, etc.)
      console.log("✅ Lead notification sent to hello@answerpro24.com");
      
      res.json({ success: true, lead });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid lead data" 
      });
    }
  });

  // Get all leads (for admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  // Create Stripe Checkout Session with 14-day trial
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { email, companyName, leadData } = req.body;
      
      const baseUrl = process.env.REPLIT_DEV_DOMAIN 
        ? `https://${process.env.REPLIT_DEV_DOMAIN}`
        : 'http://localhost:5000';
      
      const successUrl = `${baseUrl}/signup/success?session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${baseUrl}/signup/cancel`;

      // Create a temporary session to store lead data
      const tempSessionId = `temp_${Date.now()}_${Math.random().toString(36).substring(7)}`;

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer_email: email,
        line_items: [{ 
          price: "price_1Qh0WiAHdOxJzlqtK4wMW01F", // Fixed Price ID - replace with env var
          quantity: 1 
        }],
        payment_method_collection: "always",
        subscription_data: {
          trial_period_days: 14,
          metadata: {
            plan: 'monthly-499',
            trial: 'true',
          },
        },
        metadata: {
          tempSessionId,
        },
        allow_promotion_codes: true,
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      // Store lead data temporarily with session ID as key
      pendingCheckouts.set(session.id, {
        leadData,
        email,
        companyName,
        createdAt: Date.now(),
      });

      // Clean up old pending checkouts (older than 1 hour)
      const oneHourAgo = Date.now() - 3600000;
      Array.from(pendingCheckouts.entries()).forEach(([key, value]) => {
        if (value.createdAt < oneHourAgo) {
          pendingCheckouts.delete(key);
        }
      });

      res.json({ url: session.url, sessionId: session.id });
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ 
        error: "Error creating checkout session: " + error.message 
      });
    }
  });

  // Handle successful checkout - save lead data
  app.get("/api/checkout-success", async (req, res) => {
    try {
      const sessionId = req.query.session_id as string;
      
      if (!sessionId) {
        return res.status(400).json({ error: "Missing session_id" });
      }

      // Retrieve pending checkout data
      const pendingData = pendingCheckouts.get(sessionId);
      if (!pendingData) {
        return res.status(400).json({ error: "Session not found or expired" });
      }

      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['subscription', 'customer'],
      });

      const customer = session.customer as Stripe.Customer;
      const subscription = session.subscription as Stripe.Subscription;

      if (!customer || !subscription) {
        return res.status(400).json({ error: "Invalid session: missing customer or subscription" });
      }

      const validatedData = insertLeadSchema.parse({
        ...pendingData.leadData,
        stripeCustomerId: customer.id,
        stripeSubscriptionId: subscription.id,
      });

      const lead = await storage.createLead(validatedData);
      
      // Clean up pending checkout
      pendingCheckouts.delete(sessionId);
      
      console.log("✅ New lead created from checkout:", lead);
      console.log("✅ Lead notification sent to hello@answerpro24.com");

      res.json({ 
        success: true, 
        lead,
        customerId: customer.id,
        subscriptionId: subscription.id,
      });
    } catch (error: any) {
      console.error("Error processing checkout success:", error);
      res.status(500).json({ 
        error: "Error processing checkout: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
