# AnswerPro 24 - AI-Powered After-Hours Answering Service

## Overview

AnswerPro 24 is a comprehensive marketing website and lead generation platform for an AI-powered after-hours answering service targeting home service professionals (plumbers, electricians, HVAC technicians, garage door specialists). The system features intelligent call screening, emergency escalation, and automated lead management designed to help service professionals capture opportunities while maintaining work-life balance.

The application serves as both a marketing site to attract potential customers and a lead capture system with form submissions, CRM integrations, and customer onboarding workflows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture:**
- Built with React 18 and TypeScript using Vite as the build tool
- Implements client-side routing with Wouter for lightweight navigation
- Uses shadcn/ui component library with Radix UI primitives for accessibility
- Tailwind CSS for styling with custom design system and dark/light theme support
- React Hook Form with Zod validation for robust form handling
- TanStack Query for server state management and API communication

**Component Structure:**
- Modular component architecture with reusable UI components
- Dedicated page components for each route (Home, Pricing, Industries, How It Works, FAQ, About, Contact)
- Business logic components (LeadFormModal, SEOHead, ThemeProvider)
- Reusable content components (FAQAccordion, FeatureGrid, CallToAction, etc.)

**Backend Architecture:**
- Express.js server with TypeScript for API endpoints
- RESTful API design for lead management (/api/leads)
- Modular route registration system
- PostgreSQL database with DbStorage implementation for persistent data
- Middleware for request logging and error handling

**Data Layer:**
- **PostgreSQL (Neon)** - Primary database for leads and membership data
  - Drizzle ORM configured with schema-first approach
  - Type-safe database operations with generated TypeScript types
  - Structured schema for users and leads with proper validation
  - Migration system for database version control (npm run db:push)
- **SQLite (better-sqlite3)** - Secondary database for reminder queue
  - File-based storage at data/app.db with WAL mode
  - Idempotent job queuing with unique constraints
  - Prepared statements for performance
  - Automatic retry logic for failed email sends

**Styling and Design:**
- Custom design system inspired by Linear and Notion aesthetics
- Comprehensive color palette with CSS custom properties
- Responsive design with mobile-first approach
- Professional typography using Inter font family
- Consistent spacing system using Tailwind utilities

**SEO and Performance:**
- Dynamic SEO management with meta tags, OpenGraph, and structured data
- Sitemap and robots.txt for search engine optimization
- Performance optimized with proper asset handling and code splitting
- Accessibility compliance with WCAG standards

## External Dependencies

**UI and Styling:**
- Radix UI component primitives for accessibility and behavior
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Inter font from Google Fonts

**Form Management:**
- React Hook Form for form state management
- Zod for schema validation and type safety
- @hookform/resolvers for validation integration

**Database and ORM:**
- Neon Database (PostgreSQL) as the primary database
- Drizzle ORM for type-safe database operations
- Drizzle Kit for migrations and schema management

**Development Tools:**
- Vite for fast development and building
- ESBuild for server-side bundling
- TypeScript for type safety across the stack
- Replit-specific plugins for development environment

**Payment Processing:**
- Stripe integration for subscription management with hosted Checkout
- 14-day free trial with payment_method_collection: "always" to collect card upfront
- Trial subscriptions with automatic conversion to paid after trial period
- Webhook handling for subscription lifecycle events
- In-memory pending checkout storage for lead data during checkout flow
- Persistent membership status tracking in PostgreSQL database

**Trial Reminder System:**
- SQLite-based reminder queue (data/app.db) with better-sqlite3
- Automated 7/3/1 day trial reminder scheduling via queueTrialSeries()
- Reminders queued on checkout.session.completed webhook
- Idempotent reminder creation with unique constraint on (email, type, send_at)
- Database table tracks email, type, send_at timestamp, sent status, attempts, and payload
- POST /cron/run-reminders endpoint processes pending reminders with retry logic
- Designed for hourly cron job execution (Cloudflare Worker, UptimeRobot, Replit Cron, etc.)
- WAL mode enabled for concurrent read/write performance

**Customer Portal:**
- Stripe Billing Portal integration for subscription management
- POST /billing/portal endpoint creates portal session
- Customers can update payment methods, cancel subscriptions, view invoices
- Returns redirect URL to Stripe-hosted portal

**Planned Integrations:**
- SMS services (Twilio) for customer communications
- CRM webhooks for lead distribution
- Analytics platforms for user tracking

## Stripe Checkout Flow

**Implementation:**
1. User completes 2-step lead form (Step 1: Contact info, Step 2: Company details)
2. Backend creates Stripe Checkout Session with 14-day trial ($499/month)
3. Lead data stored temporarily in memory (pendingCheckouts Map) keyed by session ID
4. User redirected to Stripe's hosted checkout page
5. After payment, Stripe redirects to /signup/success with session_id
6. Success page calls /api/checkout-success to save lead with Stripe IDs and membership status
7. Webhooks handle subscription lifecycle and update membership status in database

**Webhook Handlers:**
- checkout.session.completed: Updates membership, schedules 7/3/1 day trial reminders
- customer.subscription.trial_will_end: Sends immediate 3-day trial reminder email
- invoice.paid: Updates membership status after payment
- customer.subscription.updated: Syncs membership status changes
- customer.subscription.deleted: Marks membership as canceled

**Key Features:**
- Webhook handler registered before express.json() middleware for raw body access
- Automatic cleanup of expired pending checkouts (>1 hour old)
- Success and cancel pages with clear messaging and next steps
- Membership status persisted in /api/checkout-success as primary source of truth
- Webhooks provide backup updates and handle ongoing subscription changes
- Idempotent reminder scheduling with unique database constraints

## Trial Reminder System

**Reminder Scheduling:**
- 7-day reminder: Sent 7 days before trial ends
- 3-day reminder: Sent 3 days before trial ends
- 1-day reminder: Sent 1 day before trial ends

**Database Schema:**
```typescript
reminders table:
- id: varchar (UUID primary key)
- email: text (recipient)
- type: text ("trial_7", "trial_3", "trial_1")
- sendAt: integer (Unix timestamp when to send)
- sent: boolean (default false)
- sentAt: text (ISO timestamp when sent)
- stripeCustomerId: text (for correlation)
- createdAt: text (tracking)
- UNIQUE INDEX on (stripeCustomerId, type) for idempotency
```

**Processing Flow:**
1. Webhook fires on checkout.session.completed
2. System retrieves subscription.trial_end from Stripe
3. Queues 3 reminders with calculated sendAt timestamps
4. Unique constraint prevents duplicates from webhook retries
5. Cron job calls POST /cron/run-reminders hourly
6. Endpoint fetches pending reminders (sendAt <= currentTime, sent = false)
7. Sends reminder emails and marks as sent

**Email Content:**
- Subject lines: "Heads up: your free trial ends in 7 days" (and variations)
- HTML includes: trial end warning, $499 price, cancellation option, link to /portal
- Resend integration for email delivery

**Production Notes:**
- Resend package installed and integrated
- sendEmail() function checks for RESEND_API_KEY and FROM_EMAIL environment variables
- Falls back to console logging if environment variables not set (development mode)
- Endpoint should be protected with authentication/secret token
- Can be triggered by UptimeRobot, Replit Cron, or similar services
- Consider adding composite index on (sent, sendAt) for performance

## Production Setup Checklist

**Environment Variables Required:**
- `STRIPE_SECRET_KEY` - Live Stripe secret key (sk_live_...)
- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret from Stripe Dashboard
- `PRICE_PRO_499` - Live Stripe price ID for $499/month subscription
- `APP_BASE_URL` - Production domain (e.g., https://answerpro24.com)
- `RESEND_API_KEY` - Resend API key for sending trial reminder emails
- `FROM_EMAIL` - Email address to send from (e.g., billing@answerpro24.com)
- `ADMIN_TOKEN` - Secret token to protect cron endpoints from unauthorized access (required for production)
- `SLACK_WEBHOOK_URL` - (Optional) Slack incoming webhook URL for notifications

**1. Resend Email Setup:**
- Verify domain in Resend dashboard: https://resend.com/domains
- Add DNS records (SPF, DKIM, DMARC) to domain provider
- Set `FROM_EMAIL=billing@answerpro24.com` in environment
- Set `RESEND_API_KEY` from Resend dashboard

**2. Stripe Webhook Configuration:**
- In Stripe Dashboard → Developers → Webhooks, add endpoint: `https://answerpro24.com/api/stripe/webhook`
- Select events: `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`, `customer.subscription.trial_will_end`
- Copy signing secret to `STRIPE_WEBHOOK_SECRET` environment variable
- Test webhook delivery using Stripe CLI or dashboard test mode

**3. Cloudflare Worker for Hourly Reminder Cron:**

Create a Cloudflare Worker to hit the reminder endpoint hourly:

```javascript
export default {
  async scheduled(event, env, ctx) {
    const response = await fetch('https://answerpro24.com/cron/run-reminders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.ADMIN_TOKEN}` // Optional: protect endpoint
      }
    });
    
    const result = await response.json();
    console.log('Reminder cron result:', result);
  }
};
```

Set cron trigger: `0 * * * *` (every hour at minute 0)

**Alternative Cron Services:**
- **UptimeRobot**: Create HTTP monitor hitting `https://answerpro24.com/cron/run-reminders` every hour
- **Replit Cron**: Use Replit's scheduled tasks feature
- **EasyCron**: Free tier supports hourly jobs
- **cron-job.org**: Free cron service with 1-hour minimum interval

**4. Slack Notifications Setup (Optional):**
- Create Slack app or use incoming webhook: https://api.slack.com/messaging/webhooks
- Copy webhook URL to `SLACK_WEBHOOK_URL` environment variable
- Notifications sent for: new trial signups, payment failures

**5. Stripe Customer Portal:**
- Configure portal settings in Stripe Dashboard → Settings → Billing → Customer Portal
- Enable features: Update payment method, View invoices, Cancel subscription
- Portal link appears on success page after checkout

**6. Production Deployment:**
- Verify all environment variables are set in production
- Test checkout flow end-to-end in Stripe test mode first
- Switch to live mode keys when ready
- Monitor webhook logs for successful 200 responses
- Check `/cron/pending` endpoint to verify reminders are queued
- Test portal access from success page

**7. Monitoring:**
- Watch webhook logs for event.type and subscription.status
- Monitor Slack channel for signup and payment failure notifications
- Check Resend dashboard for email delivery rates
- Review SQLite reminder queue at `/cron/pending`