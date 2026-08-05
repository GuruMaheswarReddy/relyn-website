import type { ContactPayload } from "@/types";
import { siteConfig } from "@/constants/site";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** HTML email sent to the agency when a contact form is submitted. */
export function contactNotificationEmail(payload: ContactPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const company = payload.company?.trim() || "—";
  const subject = `New inquiry from ${payload.name} · ${payload.service}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 16px;">New contact inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `.trim();

  const text = [
    "New contact inquiry",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Company: ${company}`,
    `Service: ${payload.service}`,
    "",
    payload.message,
  ].join("\n");

  return { subject, html, text };
}

/** Confirmation HTML email sent back to the visitor. */
export function contactConfirmationEmail(payload: ContactPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = `Thanks for contacting ${siteConfig.name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 16px;">Thanks, ${escapeHtml(payload.name)}!</h2>
      <p>
        We received your message about
        <strong>${escapeHtml(payload.service)}</strong>
        and will get back to you shortly.
      </p>
      <p style="margin-top: 24px;">— ${escapeHtml(siteConfig.name)}</p>
    </div>
  `.trim();

  const text = [
    `Thanks, ${payload.name}!`,
    "",
    `We received your message about ${payload.service} and will get back to you shortly.`,
    "",
    `— ${siteConfig.name}`,
  ].join("\n");

  return { subject, html, text };
}
