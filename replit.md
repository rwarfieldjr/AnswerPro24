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
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Type-safe database operations with generated TypeScript types
- Structured schema for users, leads, and reminders with proper validation
- Migration system for database version control (npm run db:push)

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
- Automated 7/3/1 day trial reminder scheduling
- Reminders queued on checkout.session.completed webhook
- Idempotent reminder creation with unique constraint on (stripeCustomerId, type)
- Database table tracks email, type, sendAt timestamp, and sent status
- POST /cron/run-reminders endpoint to send pending reminders
- Designed for hourly cron job execution (UptimeRobot, Replit Cron, etc.)

**Planned Integrations:**
- Email services (SendGrid/Mailgun) for lead notifications and trial reminders
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
- Ready to integrate with Resend, SendGrid, or Mailgun

**Production Notes:**
- Currently logs reminder HTML to console (development mode)
- Replace console.log with actual email service (Resend recommended)
- Endpoint should be protected with authentication/secret token
- Can be triggered by UptimeRobot, Replit Cron, or similar services
- Consider adding composite index on (sent, sendAt) for performance