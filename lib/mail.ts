import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.",
    );
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

/** Singleton Nodemailer transporter backed by SMTP env vars. */
export function getMailTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(getSmtpConfig());
  }
  return transporter;
}

export type SendMailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from?: string;
};

/** Send an email via the configured SMTP transport. */
export async function sendMail(options: SendMailOptions) {
  const from =
    options.from ??
    process.env.SMTP_FROM ??
    process.env.SMTP_USER ??
    "noreply@localhost";

  return getMailTransporter().sendMail({
    from,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
  });
}
