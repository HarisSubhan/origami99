import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { q } from "./db.js";
import "dotenv/config";

const SECRET = process.env.JWT_SECRET || "dev-only-change-me";
const EXPIRES = process.env.JWT_EXPIRES_IN || "12h";

const rowToUser = (r) => ({
  id: r.id,
  name: r.name,
  email: r.email,
  role: r.role,
  status: r.status,
  createdAt: r.created_at,
  lastLoginAt: r.last_login_at || null,
});

export function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, SECRET, {
    expiresIn: EXPIRES,
  });
}

export function requireAuth(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing token" });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

export const requireRole = (...allowed) => (req, res, next) => {
  if (!req.user || !allowed.includes(req.user.role)) {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
};

export function mountAuth(app) {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  app.post("/auth/login", async (req, res) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Invalid credentials" });
    const { email, password } = parsed.data;
    const rows = await q("SELECT * FROM admin_users WHERE email = :email LIMIT 1", { email });
    const row = rows[0];
    if (!row || row.status !== "active") return res.status(401).json({ error: "Invalid credentials" });
    const ok = await bcrypt.compare(password, row.password_hash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });
    await q("UPDATE admin_users SET last_login_at = NOW() WHERE id = :id", { id: row.id });
    const user = rowToUser(row);
    res.json({ token: signToken(user), user });
  });

  app.get("/auth/me", requireAuth, async (req, res) => {
    const rows = await q("SELECT * FROM admin_users WHERE id = :id LIMIT 1", { id: req.user.sub });
    if (!rows[0]) return res.status(401).json({ error: "Session invalid" });
    res.json(rowToUser(rows[0]));
  });

  app.post("/auth/logout", requireAuth, (_req, res) => res.status(204).end());
}
