import { db } from "../db";
import { sendEmail } from "./sendEmail";

const insertJob = db.prepare(`
  INSERT OR IGNORE INTO reminder_jobs (email, type, send_at, payload)
  VALUES (@email, @type, @sendAt, @payload)
`);

const selectDue = db.prepare(`
  SELECT * FROM reminder_jobs
  WHERE sent = 0 AND send_at <= @now
  ORDER BY send_at ASC
  LIMIT 200
`);

const markSent = db.prepare(`
  UPDATE reminder_jobs
  SET sent = 1, sent_at = @sentAt, attempts = attempts + 1
  WHERE id = @id
`);

const bumpAttempts = db.prepare(`
  UPDATE reminder_jobs
  SET attempts = attempts + 1
  WHERE id = @id
`);

export async function queueReminder({ email, type, sendAt, payload = {} }: { 
  email: string; 
  type: string; 
  sendAt: number; 
  payload?: any 
}) {
  if (!email || !sendAt) return;
  insertJob.run({
    email,
    type,
    sendAt: Math.floor(sendAt),
    payload: JSON.stringify(payload),
  });
}

export async function queueTrialSeries({ email, trialEnd }: { email: string; trialEnd: number }) {
  if (!email || !trialEnd) return;
  const now = Math.floor(Date.now() / 1000);
  const times = [
    { type: "trial_7", sendAt: trialEnd - 7 * 86400 },
    { type: "trial_3", sendAt: trialEnd - 3 * 86400 },
    { type: "trial_1", sendAt: trialEnd - 1 * 86400 },
  ]
  // Ensure we don't schedule in the past; push to now+60s if needed
  .map(j => ({ ...j, sendAt: Math.max(j.sendAt, now + 60) }));

  for (const t of times) await queueReminder({ email, ...t });
}

export async function runDueReminders(nowSec: number) {
  const due = selectDue.all({ now: nowSec }) as any[];
  let sentCount = 0;

  for (const job of due) {
    const subject = {
      trial_7: "Heads up: your free trial ends in 7 days",
      trial_3: "Reminder: 3 days left in your free trial",
      trial_1: "Last reminder: trial ends tomorrow",
    }[job.type as string] || "Subscription update";

    const html = `
      <p>${subject.replace("Heads up: ", "")}</p>
      <p>On trial end, your card will be charged <strong>$499</strong> for Answer Pro 24 (monthly).</p>
      <p>If you don't want to continue, cancel before the trial ends.</p>
      <p><a href="${process.env.APP_BASE_URL || 'http://localhost:5000'}/portal">Manage membership</a></p>
    `;

    try {
      await sendEmail({ to: job.email, subject, html });
      markSent.run({ id: job.id, sentAt: nowSec });
      sentCount++;
    } catch (err: any) {
      console.error("Email send failed job", job.id, err.message);
      bumpAttempts.run({ id: job.id });
      // leave it unsent; next cron will retry
    }
  }

  return { processed: due.length, sent: sentCount };
}
