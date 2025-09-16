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
- Dedicated page components for each route (Home, Pricing, Industries, etc.)
- Business logic components (LeadFormModal, SEOHead, ThemeProvider)
- Example components for development and testing

**Backend Architecture:**
- Express.js server with TypeScript for API endpoints
- RESTful API design for lead management (/api/leads)
- Modular route registration system
- In-memory storage with interface-based design for easy database migration
- Middleware for request logging and error handling

**Data Layer:**
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Type-safe database operations with generated TypeScript types
- Structured schema for users and leads with proper validation
- Migration system for database version control

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

**Planned Integrations:**
- Email services (SendGrid/Mailgun) for lead notifications
- SMS services (Twilio) for customer communications
- CRM webhooks for lead distribution
- Analytics platforms for user tracking
- Payment processing for subscription management