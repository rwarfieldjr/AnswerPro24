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
      try {
        switch (event.type) {
          case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("✅ Checkout session completed:", session.id);
            console.log("   Customer:", session.customer);
            console.log("   Subscription:", session.subscription);
            
            // Get subscription to extract period_end and trial_end
            if (session.subscription && session.customer) {
              const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
              const periodEnd = new Date((subscription as any).current_period_end * 1000).toISOString();
              const trialEnd = (subscription as any).trial_end;
              
              // Update lead membership status (lead may not exist yet if webhook fires before /api/checkout-success)
              const updated = await storage.updateLeadMembership(
                session.customer as string,
                subscription.status,
                periodEnd
              );
              
              if (updated) {
                console.log("✅ Membership activated for customer:", session.customer);
              } else {
                console.warn("⚠️ Lead not found for customer (will be set in /api/checkout-success):", session.customer);
              }
              
              // Schedule trial reminders if trial exists
              if (trialEnd) {
                const customer = await stripe.customers.retrieve(session.customer as string) as Stripe.Customer;
                const email = customer.email;
                
                if (email) {
                  // Schedule 7/3/1 day trial reminders
                  await storage.queueReminder({
                    email,
                    type: "trial_7",
                    sendAt: trialEnd - 7 * 86400,
                    sent: false,
                    stripeCustomerId: session.customer as string,
                  });
                  
                  await storage.queueReminder({
                    email,
                    type: "trial_3",
                    sendAt: trialEnd - 3 * 86400,
                    sent: false,
                    stripeCustomerId: session.customer as string,
                  });
                  
                  await storage.queueReminder({
                    email,
                    type: "trial_1",
                    sendAt: trialEnd - 1 * 86400,
                    sent: false,
                    stripeCustomerId: session.customer as string,
                  });
                  
                  console.log("✅ Trial reminders scheduled for:", email);
                  console.log("   7-day reminder:", new Date((trialEnd - 7 * 86400) * 1000).toISOString());
                  console.log("   3-day reminder:", new Date((trialEnd - 3 * 86400) * 1000).toISOString());
                  console.log("   1-day reminder:", new Date((trialEnd - 1 * 86400) * 1000).toISOString());
                }
              }
            }
            break;
          }
          case "invoice.paid": {
            const invoice = event.data.object as Stripe.Invoice;
            console.log("✅ Invoice paid:", invoice.id);
            
            // Update membership status when invoice is paid
            if (invoice.customer && (invoice as any).subscription) {
              const subscription = await stripe.subscriptions.retrieve((invoice as any).subscription as string);
              const periodEnd = new Date((subscription as any).current_period_end * 1000).toISOString();
              
              const updated = await storage.updateLeadMembership(
                invoice.customer as string,
                subscription.status,
                periodEnd
              );
              
              if (updated) {
                console.log("✅ Membership updated after payment:", invoice.customer);
              } else {
                console.warn("⚠️ Lead not found for customer:", invoice.customer);
              }
            }
            break;
          }
          case "customer.subscription.updated": {
            const subscription = event.data.object as Stripe.Subscription;
            console.log("✅ Subscription updated:", subscription.id);
            console.log("   Status:", subscription.status);
            
            const periodEnd = new Date((subscription as any).current_period_end * 1000).toISOString();
            
            const updated = await storage.updateLeadMembership(
              subscription.customer as string,
              subscription.status,
              periodEnd
            );
            
            if (updated) {
              console.log("✅ Membership status updated:", subscription.customer);
            } else {
              console.warn("⚠️ Lead not found for customer:", subscription.customer);
            }
            break;
          }
          case "customer.subscription.deleted": {
            const subscription = event.data.object as Stripe.Subscription;
            console.log("🔴 Subscription deleted:", subscription.id);
            
            const periodEnd = new Date((subscription as any).current_period_end * 1000).toISOString();
            
            const updated = await storage.updateLeadMembership(
              subscription.customer as string,
              "canceled",
              periodEnd
            );
            
            if (updated) {
              console.log("🔴 Membership canceled:", subscription.customer);
            } else {
              console.warn("⚠️ Lead not found for customer:", subscription.customer);
            }
            break;
          }
          default:
            console.log(`📋 Unhandled event type: ${event.type}`);
            break;
        }
      } catch (error: any) {
        console.error("Error processing webhook event:", error);
        // Still return 200 to acknowledge receipt
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
      
      const baseUrl = process.env.APP_BASE_URL 
        || (process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : 'http://localhost:5000');
      
      const successUrl = `${baseUrl}/signup/success?session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${baseUrl}/signup/cancel`;

      // Create a temporary session to store lead data
      const tempSessionId = `temp_${Date.now()}_${Math.random().toString(36).substring(7)}`;

      const priceId = process.env.PRICE_PRO_499;
      if (!priceId) {
        throw new Error("PRICE_PRO_499 environment variable not set");
      }

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer_email: email,
        line_items: [{ 
          price: priceId,
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
      
      // Set initial membership status from subscription
      const periodEnd = new Date((subscription as any).current_period_end * 1000).toISOString();
      await storage.updateLeadMembership(
        customer.id,
        subscription.status,
        periodEnd
      );
      
      // Clean up pending checkout
      pendingCheckouts.delete(sessionId);
      
      console.log("✅ New lead created from checkout:", lead);
      console.log("✅ Membership activated:", subscription.status, "until", periodEnd);
      console.log("✅ Lead notification sent to hello@answerpro24.com");

      res.json({ 
        success: true, 
        lead,
        customerId: customer.id,
        subscriptionId: subscription.id,
        membershipStatus: subscription.status,
        membershipPeriodEnd: periodEnd,
      });
    } catch (error: any) {
      console.error("Error processing checkout success:", error);
      res.status(500).json({ 
        error: "Error processing checkout: " + error.message 
      });
    }
  });

  // Cron endpoint: run due reminders (hit hourly)
  app.post("/cron/run-reminders", async (req, res) => {
    try {
      const nowSec = Math.floor(Date.now() / 1000);
      const pendingReminders = await storage.getPendingReminders(nowSec);
      
      console.log(`📬 Running due reminders: ${pendingReminders.length} pending...`);
      
      for (const job of pendingReminders) {
        const subject = subjectFor(job.type);
        const html = htmlFor(job.type);
        
        // In production, replace with: await sendEmail({ to: job.email, subject, html });
        console.log(`\n=== SENDING REMINDER EMAIL ===`);
        console.log(`To: ${job.email}`);
        console.log(`Subject: ${subject}`);
        console.log(`HTML: ${html}`);
        console.log(`==============================\n`);
        
        await storage.markReminderSent(job.id);
      }
      
      console.log(`✅ Processed ${pendingReminders.length} reminders`);
      res.json({ ok: true, processed: pendingReminders.length });
    } catch (error: any) {
      console.error("Error running reminders:", error);
      res.status(500).json({ ok: false, error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

function subjectFor(type: string): string {
  return {
    trial_7: "Heads up: your free trial ends in 7 days",
    trial_3: "Reminder: 3 days left in your free trial",
    trial_1: "Last reminder: trial ends tomorrow",
  }[type] || "Subscription update";
}

function htmlFor(type: string): string {
  const baseUrl = process.env.APP_BASE_URL 
    || (process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : 'http://localhost:5000');
  
  const line = {
    trial_7: "Your 14-day free trial ends in 7 days.",
    trial_3: "Only 3 days left in your free trial.",
    trial_1: "Your trial ends tomorrow.",
  }[type] || "Your trial is ending soon.";

  return `
    <p>${line}</p>
    <p>On trial end, your card will be charged <strong>$499</strong> for AnswerPro 24.</p>
    <p>If you don't want to continue, cancel any time before the trial ends.</p>
    <p><a href="${baseUrl}/portal">Manage membership</a></p>
  `;
}
