import { type User, type InsertUser, type Lead, type InsertLead, type Reminder, type InsertReminder, users, leads, reminders } from "@shared/schema";
import { randomUUID } from "crypto";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq, and, lte } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadByStripeCustomerId(customerId: string): Promise<Lead | undefined>;
  updateLeadMembership(
    stripeCustomerId: string,
    status: string,
    periodEnd: string
  ): Promise<Lead | undefined>;
  queueReminder(reminder: InsertReminder): Promise<Reminder>;
  getPendingReminders(currentTime: number): Promise<Reminder[]>;
  markReminderSent(id: string): Promise<Reminder | undefined>;
}

export class DbStorage implements IStorage {
  private db;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    const sql = neon(process.env.DATABASE_URL);
    this.db = drizzle(sql);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const result = await this.db.insert(leads).values(insertLead).returning();
    return result[0];
  }

  async getLeads(): Promise<Lead[]> {
    return await this.db.select().from(leads);
  }

  async getLeadByStripeCustomerId(customerId: string): Promise<Lead | undefined> {
    const result = await this.db.select().from(leads).where(eq(leads.stripeCustomerId, customerId));
    return result[0];
  }

  async updateLeadMembership(
    stripeCustomerId: string,
    status: string,
    periodEnd: string
  ): Promise<Lead | undefined> {
    const result = await this.db
      .update(leads)
      .set({
        membershipStatus: status,
        membershipPeriodEnd: periodEnd,
      })
      .where(eq(leads.stripeCustomerId, stripeCustomerId))
      .returning();
    return result[0];
  }

  async queueReminder(insertReminder: InsertReminder): Promise<Reminder> {
    const result = await this.db.insert(reminders).values(insertReminder).returning();
    return result[0];
  }

  async getPendingReminders(currentTime: number): Promise<Reminder[]> {
    return await this.db
      .select()
      .from(reminders)
      .where(
        and(
          eq(reminders.sent, false),
          lte(reminders.sendAt, currentTime)
        )
      );
  }

  async markReminderSent(id: string): Promise<Reminder | undefined> {
    const result = await this.db
      .update(reminders)
      .set({
        sent: true,
        sentAt: new Date().toISOString(),
      })
      .where(eq(reminders.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DbStorage();
