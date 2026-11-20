// Minimal generic CRUD builder for the remaining admin resources.
// Each resource maps snake_case DB rows to the camelCase shape the frontend expects.

import { Router } from "express";
import { z } from "zod";
import { q } from "../db.js";
import { newId } from "../id.js";
import { requireAuth, requireRole } from "../auth.js";

function crud({ table, publicList = false, columns, toRow, fromRow, publicItem = false }) {
  const router = Router();

  const list = async (_req, res) => {
    const rows = await q(`SELECT * FROM ${table} ORDER BY updated_at DESC`);
    res.json(rows.map(fromRow));
  };
  const getOne = async (req, res) => {
    const rows = await q(`SELECT * FROM ${table} WHERE id = :id`, { id: req.params.id });
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json(fromRow(rows[0]));
  };

  if (publicList) router.get("/", list);
  if (publicItem) router.get("/:id", getOne);

  router.use(requireAuth);
  if (!publicList) router.get("/", requireRole("admin", "editor", "viewer"), list);
  if (!publicItem) router.get("/:id", requireRole("admin", "editor", "viewer"), getOne);

  router.post("/", requireRole("admin", "editor"), async (req, res) => {
    const id = newId();
    const dbRow = toRow({ id, ...req.body });
    const cols = Object.keys(dbRow);
    const placeholders = cols.map((c) => `:${c}`).join(", ");
    await q(
      `INSERT INTO ${table} (${cols.join(",")}) VALUES (${placeholders})`,
      dbRow,
    );
    const rows = await q(`SELECT * FROM ${table} WHERE id = :id`, { id });
    res.status(201).json(fromRow(rows[0]));
  });

  router.patch("/:id", requireRole("admin", "editor"), async (req, res) => {
    const dbRow = toRow({ ...req.body });
    delete dbRow.id;
    const keys = Object.keys(dbRow);
    if (!keys.length) return res.status(400).json({ error: "Empty patch" });
    const sets = keys.map((k) => `${k} = :${k}`).join(", ");
    await q(`UPDATE ${table} SET ${sets} WHERE id = :id`, { ...dbRow, id: req.params.id });
    const rows = await q(`SELECT * FROM ${table} WHERE id = :id`, { id: req.params.id });
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json(fromRow(rows[0]));
  });

  router.delete("/:id", requireRole("admin"), async (req, res) => {
    await q(`DELETE FROM ${table} WHERE id = :id`, { id: req.params.id });
    res.status(204).end();
  });

  return router;
}

const parseJson = (v) => {
  if (v == null) return null;
  if (typeof v === "object") return v;
  try { return JSON.parse(v); } catch { return null; }
};

// --- Services ---
export const servicesRouter = crud({
  table: "services",
  publicList: true,
  publicItem: true,
  toRow: (o) => ({
    id: o.id,
    slug: o.slug,
    title: o.title,
    category: o.category,
    summary: o.summary,
    tagline: o.tagline ?? null,
    hero: o.hero ?? null,
    body: o.body ?? null,
    hero_image_url: o.heroImageUrl ?? null,
    published: o.published ? 1 : 0,
  }),
  fromRow: (r) => ({
    id: r.id, slug: r.slug, title: r.title, category: r.category, summary: r.summary,
    tagline: r.tagline, hero: r.hero, body: r.body, heroImageUrl: r.hero_image_url,
    published: !!r.published, updatedAt: r.updated_at,
  }),
});

// --- Blogs ---
export const blogsRouter = crud({
  table: "blogs",
  publicList: true,
  publicItem: true,
  toRow: (o) => ({
    id: o.id, slug: o.slug, title: o.title, excerpt: o.excerpt, body: o.body,
    cover_url: o.coverUrl ?? null, author: o.author, status: o.status || "draft",
    published_at: o.publishedAt ?? null,
    tags: o.tags ? JSON.stringify(o.tags) : null,
    category: o.category ?? null,
  }),
  fromRow: (r) => ({
    id: r.id, slug: r.slug, title: r.title, excerpt: r.excerpt, body: r.body,
    coverUrl: r.cover_url, author: r.author, status: r.status,
    publishedAt: r.published_at, updatedAt: r.updated_at,
    tags: parseJson(r.tags) || [], category: r.category,
  }),
});

// --- Portfolio ---
export const portfolioRouter = crud({
  table: "portfolio",
  toRow: (o) => ({
    id: o.id, title: o.title, client: o.client, industry: o.industry,
    tags: o.tags ? JSON.stringify(o.tags) : null,
    summary: o.summary, cover_url: o.coverUrl ?? null,
    published: o.published ? 1 : 0,
  }),
  fromRow: (r) => ({
    id: r.id, title: r.title, client: r.client, industry: r.industry,
    tags: parseJson(r.tags) || [], summary: r.summary, coverUrl: r.cover_url,
    published: !!r.published, updatedAt: r.updated_at,
  }),
});

// --- SEO pages ---
export const pagesRouter = crud({
  table: "pages",
  toRow: (o) => ({ id: o.id, slug: o.slug, title: o.title, meta_description: o.metaDescription }),
  fromRow: (r) => ({ id: r.id, slug: r.slug, title: r.title, metaDescription: r.meta_description, updatedAt: r.updated_at }),
});
