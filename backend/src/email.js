import nodemailer from "nodemailer";
import "dotenv/config";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_HOST) {
    console.warn("[email] SMTP_HOST not set — lead notifications will be skipped.");
    return null;
  }
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
      : undefined,
  });
  return transporter;
}

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]),
  );

function renderLeadHtml(lead) {
  const row = (label, value) =>
    value
      ? `<tr><td style="padding:6px 10px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.05em;">${label}</td><td style="padding:6px 10px;color:#0f172a;font-size:14px;">${esc(value)}</td></tr>`
      : "";
  return `<!doctype html>
<html><body style="margin:0;background:#f8fafc;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
  <div style="max-width:640px;margin:24px auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
    <div style="padding:20px 24px;background:linear-gradient(135deg,#ef4555,#f97316);color:#fff;">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:.15em;opacity:.85;">New lead · Origami99</div>
      <div style="font-size:22px;font-weight:700;margin-top:4px;">${esc(lead.name)}</div>
      <div style="font-size:13px;opacity:.9;margin-top:2px;">${esc(lead.service || "General inquiry")}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Email", lead.email)}
      ${row("Phone", lead.phone)}
      ${row("Company", lead.company)}
      ${row("Source", lead.source)}
      ${row("Page", lead.pageUrl)}
      ${row("Referrer", lead.referrer)}
      ${row("Received", new Date(lead.createdAt || Date.now()).toLocaleString())}
    </table>
    <div style="padding:16px 24px 24px;">
      <div style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Message</div>
      <div style="white-space:pre-wrap;font-size:14px;color:#0f172a;line-height:1.6;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px 14px;">${esc(lead.message)}</div>
    </div>
    <div style="padding:12px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;">
      Reply to this email to reach ${esc(lead.name)} directly.
    </div>
  </div>
</body></html>`;
}

export async function sendLeadEmail(lead) {
  const t = getTransporter();
  if (!t) return { skipped: true };
  const to = process.env.LEAD_NOTIFY_TO || "engage@origami99.com";
  const from = process.env.SMTP_FROM || `Origami99 Leads <${process.env.SMTP_USER}>`;
  const subject = `New lead: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`;
  await t.sendMail({
    from,
    to,
    replyTo: lead.email,
    subject,
    html: renderLeadHtml(lead),
    text: `New lead from ${lead.name} <${lead.email}>\n\n${lead.message}\n\nSource: ${lead.source || "-"}\nPage: ${lead.pageUrl || "-"}`,
  });
  return { ok: true };
}
