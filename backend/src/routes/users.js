import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import { q } from "../db.js";
import { newId } from "../id.js";
import { requireAuth, requireRole } from "../auth.js";

const router = Router();
router.use(requireAuth);

const rowToUser = (r) => ({
  id: r.id, name: r.name, email: r.email, role: r.role, status: r.status,
  createdAt: r.created_at, lastLoginAt: r.last_login_at || null,
});

router.get("/", requireRole("admin"), async (_req, res) => {
  const rows = await q("SELECT * FROM admin_users ORDER BY created_at DESC");
  res.json(rows.map(rowToUser));
});

router.post("/", requireRole("admin"), async (req, res) => {
  const schema = z.object({
    name: z.string().min(1).max(120),
    email: z.string().email().max(190),
    password: z.string().min(8),
    role: z.enum(["admin", "editor", "viewer"]).default("viewer"),
    status: z.enum(["active", "invited", "disabled"]).default("active"),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid user" });
  const id = newId();
  const hash = await bcrypt.hash(parsed.data.password, 10);
  await q(
    "INSERT INTO admin_users (id,name,email,password_hash,role,status) VALUES (:id,:name,:email,:hash,:role,:status)",
    { id, ...parsed.data, hash },
  );
  const rows = await q("SELECT * FROM admin_users WHERE id = :id", { id });
  res.status(201).json(rowToUser(rows[0]));
});

router.patch("/:id", requireRole("admin"), async (req, res) => {
  const schema = z.object({
    name: z.string().max(120).optional(),
    email: z.string().email().max(190).optional(),
    role: z.enum(["admin", "editor", "viewer"]).optional(),
    status: z.enum(["active", "invited", "disabled"]).optional(),
    password: z.string().min(8).optional(),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid patch" });
  const patch = { ...parsed.data };
  if (patch.password) {
    patch.password_hash = await bcrypt.hash(patch.password, 10);
    delete patch.password;
  }
  const keys = Object.keys(patch);
  if (!keys.length) return res.status(400).json({ error: "Empty patch" });
  const sets = keys.map((k) => `${k} = :${k}`).join(", ");
  await q(`UPDATE admin_users SET ${sets} WHERE id = :id`, { ...patch, id: req.params.id });
  const rows = await q("SELECT * FROM admin_users WHERE id = :id", { id: req.params.id });
  if (!rows[0]) return res.status(404).json({ error: "Not found" });
  res.json(rowToUser(rows[0]));
});

router.delete("/:id", requireRole("admin"), async (req, res) => {
  await q("DELETE FROM admin_users WHERE id = :id", { id: req.params.id });
  res.status(204).end();
});

export default router;
