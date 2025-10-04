import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  industry: text("industry").notNull(),
  serviceArea: text("service_area").notNull(),
  transactionalConsent: text("transactional_consent").notNull(),
  marketingConsent: text("marketing_consent").notNull(),
  website: text("website").notNull(),
  onCallScheduleLink: text("on_call_schedule_link"),
  currentVolume: text("current_volume").notNull(),
  afterHoursTimeFrame: text("after_hours_time_frame").notNull(),
  afterHoursNumber: text("after_hours_number").notNull(),
  urgentPhoneNumber: text("urgent_phone_number"),
  notes: text("notes"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  membershipStatus: text("membership_status"),
  membershipPeriodEnd: text("membership_period_end"),
  createdAt: text("created_at").default(sql`NOW()`),
});

export const reminders = pgTable("reminders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  type: text("type").notNull(),
  sendAt: integer("send_at").notNull(),
  sent: boolean("sent").notNull().default(false),
  sentAt: text("sent_at"),
  stripeCustomerId: text("stripe_customer_id"),
  createdAt: text("created_at").default(sql`NOW()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const insertReminderSchema = createInsertSchema(reminders).omit({
  id: true,
  createdAt: true,
  sentAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertReminder = z.infer<typeof insertReminderSchema>;
export type Reminder = typeof reminders.$inferSelect;