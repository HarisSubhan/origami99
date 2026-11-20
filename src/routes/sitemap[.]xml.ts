import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/lib/services-data";
import { SUB_SERVICES } from "@/lib/sub-services";
import { BLOG_SEED } from "@/lib/admin/blog-seed";

const BASE_URL = "https://ai-spark-engine-11.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/guides/ai-for-small-business", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/services/seo", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/software", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/web-development", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/digital-marketing", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/brand-identity", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/privacy", changefreq: "monthly", priority: "0.3", lastmod: today },
          { path: "/cookies", changefreq: "monthly", priority: "0.3", lastmod: today },
          ...SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: today,
          })),
          ...SUB_SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.75",
            lastmod: today,
          })),
          ...BLOG_SEED.filter((b) => b.status === "published").map((b) => ({
            path: `/blog/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: (b.publishedAt ?? today).slice(0, 10),
          })),
        ];

        // Dedupe by path (SERVICES may overlap explicit service routes above).
        const seen = new Set<string>();
        const unique = entries.filter((e) => (seen.has(e.path) ? false : (seen.add(e.path), true)));

        const urls = unique.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
