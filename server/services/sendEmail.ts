import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  if (!resend || !process.env.FROM_EMAIL) {
    console.warn("⚠️ Resend not configured - skipping email send");
    console.log(`Would send email to ${to}: ${subject}`);
    return null;
  }
  
  return resend.emails.send({
    from: process.env.FROM_EMAIL,
    to,
    subject,
    html,
  });
}
