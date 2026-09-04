import nodemailer from 'nodemailer';

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || '587');
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP configuration is incomplete. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.'
    );
  }

  const from = process.env.EMAIL_FROM || 'DOHaD India <contact@dohadindia.org>';

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: {
      user,
      pass,
    },
  });

  try {
    return await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch {
    // Avoid leaking SMTP credentials or provider response details
    throw new Error('SMTP email sending failed');
  }
}
