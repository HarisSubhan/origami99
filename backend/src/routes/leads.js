import { Router } from "express";
import { z } from "zod";
import { q } from "../db.js";
import { newId } from "../id.js";
import { requireAuth, requireRole } from "../auth.js";
import { sendLeadEmail } from "../email.js";

const router = Router();

const createSchema = z.object({
  name: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(190),
  phone: z.string().trim().max(60).nullish(),
  company: z.string().trim().max(190).nullish(),
  service: z.string().trim().max(120).nullish(),
  message: z.string().trim().min(1).max(4000),
  source: z.string().trim().max(190).nullish(),
  pageUrl: z.string().trim().max(500).nullish(),
  referrer: z.string().trim().max(500).nullish(),
  // Honeypot: bots often fill hidden fields. Silently drop.
  website: z.string().max(0).optional(),
  status: z.enum(["new", "contacted", "qualified", "won", "lost"]).optional(),
});

// Naive per-IP rate limit — 20 submissions per 10 minutes.
const buckets = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const rec = buckets.get(ip) || { count: 0, reset: now + 10 * 60_000 };
  if (now > rec.reset) { rec.count = 0; rec.reset = now + 10 * 60_000; }
  rec.count += 1;
  buckets.set(ip, rec);
  return rec.count > 20;
}

const rowToLead = (r) => ({
  id: r.id,
  name: r.name,
  email: r.email,
  phone: r.phone,
  company: r.company,
  service: r.service,
  message: r.message,
  status: r.status,
  source: r.source,
  pageUrl: r.page_url,
  referrer: r.referrer,
  createdAt: r.created_at,
});

// PUBLIC — website contact/lead-gen forms.
router.post("/", async (req, res) => {
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString().split(",")[0].trim();
  if (rateLimited(ip)) return res.status(429).json({ error: "Too many submissions, try again later." });

  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
  if (parsed.data.website) return res.status(202).json({ ok: true }); // honeypot

  const id = newId();
  const ua = (req.headers["user-agent"] || "").toString().slice(0, 500);
  await q(
    `INSERT INTO leads (id,name,email,phone,company,service,message,status,source,page_url,referrer,ip,user_agent)
     VALUES (:id,:name,:email,:phone,:company,:service,:message,:status,:source,:pageUrl,:referrer,:ip,:ua)`,
    {
      id,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      service: parsed.data.service || null,
      message: parsed.data.message,
      status: parsed.data.status || "new",
      source: parsed.data.source || null,
      pageUrl: parsed.data.pageUrl || null,
      referrer: parsed.data.referrer || null,
      ip,
      ua,
    },
  );

  const rows = await q("SELECT * FROM leads WHERE id = :id", { id });
  const lead = rowToLead(rows[0]);

  // Fire and forget — never block the response on SMTP.
  sendLeadEmail(lead).catch((err) => console.error("[email] failed to send lead notification:", err.message));

  res.status(201).json(lead);
});

// --- Admin ---
router.use(requireAuth);

router.get("/", requireRole("admin", "editor", "viewer"), async (req, res) => {
  const rows = await q("SELECT * FROM leads ORDER BY created_at DESC LIMIT 500");
  res.json(rows.map(rowToLead));
});

router.patch("/:id", requireRole("admin", "editor"), async (req, res) => {
  const patchSchema = z.object({
    status: z.enum(["new", "contacted", "qualified", "won", "lost"]).optional(),
    name: z.string().max(160).optional(),
    email: z.string().email().max(190).optional(),
    phone: z.string().max(60).nullish(),
    company: z.string().max(190).nullish(),
    service: z.string().max(120).nullish(),
    message: z.string().max(4000).optional(),
  });
  const parsed = patchSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid patch" });
  const fields = Object.entries(parsed.data);
  if (!fields.length) return res.status(400).json({ error: "Empty patch" });
  const sets = fields.map(([k]) => `${k} = :${k}`).join(", ");
  await q(`UPDATE leads SET ${sets} WHERE id = :id`, { ...parsed.data, id: req.params.id });
  const rows = await q("SELECT * FROM leads WHERE id = :id", { id: req.params.id });
  if (!rows[0]) return res.status(404).json({ error: "Not found" });
  res.json(rowToLead(rows[0]));
});

router.delete("/:id", requireRole("admin"), async (req, res) => {
  await q("DELETE FROM leads WHERE id = :id", { id: req.params.id });
  res.status(204).end();
});

export default router;
