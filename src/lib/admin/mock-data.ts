// In-browser mock store. Used when VITE_ADMIN_API_URL is not set.
// Persists to localStorage so edits survive reloads during development.

import type {
  AdminUser,
  AnalyticsSummary,
  BlogPost,
  Lead,
  PortfolioProject,
  Service,
  SitePage,
} from "./types";
import { BLOG_SEED } from "./blog-seed";

const KEY = "origami99-admin-mock-v3";
const SEED_VERSION_KEY = "origami99-admin-mock-seed-version";
// Bump this whenever BLOG_SEED changes to force reseeding of the blog collection
// in visitors' localStorage. Other collections (users, leads) stay editable.
const BLOG_SEED_VERSION = "2026-07-07-c";

interface Store {
  users: AdminUser[];
  leads: Lead[];
  services: Service[];
  portfolio: PortfolioProject[];
  blogs: BlogPost[];
  pages: SitePage[];
}

const now = () => new Date().toISOString();

function seed(): Store {
  return {
    users: [
      { id: "u1", name: "Admin User", email: "admin@origami99.com", role: "admin", status: "active", createdAt: now(), lastLoginAt: now() },
      { id: "u2", name: "Priya Sharma", email: "priya@origami99.com", role: "editor", status: "active", createdAt: now() },
      { id: "u3", name: "Marcus Lee", email: "marcus@origami99.com", role: "viewer", status: "invited", createdAt: now() },
    ],
    leads: [
      { id: "l1", name: "Sarah Chen", email: "sarah@acme.io", company: "Acme Corp", service: "SEO", message: "Need help ranking for enterprise SaaS keywords.", status: "new", source: "Website", createdAt: now() },
      { id: "l2", name: "Raj Patel", email: "raj@northwind.com", company: "Northwind", service: "Custom Software", message: "Looking to build a B2B portal.", status: "contacted", source: "Referral", createdAt: now() },
      { id: "l3", name: "Elena Ruiz", email: "elena@brightlabs.co", company: "BrightLabs", service: "AI Integration", message: "Want to add GPT to our support tool.", status: "qualified", source: "LinkedIn", createdAt: now() },
    ],
    services: [
      { id: "s1", slug: "seo", title: "Search Engine Optimization", category: "Growth", summary: "Technical + content SEO for measurable organic growth.", published: true, updatedAt: now() },
      { id: "s2", slug: "custom-software", title: "Custom Software Development", category: "Build", summary: "Enterprise-grade web & mobile applications.", published: true, updatedAt: now() },
      { id: "s3", slug: "ai-integration", title: "AI Integration", category: "Build", summary: "LLMs, agents, RAG, and AI-powered automation.", published: true, updatedAt: now() },
    ],
    portfolio: [
      { id: "p1", title: "FleetOps Dashboard", client: "Logistics Co.", industry: "Logistics", tags: ["Dashboard", "Realtime"], summary: "Realtime fleet tracking for 1,200+ vehicles.", published: true, updatedAt: now() },
      { id: "p2", title: "MedConnect EHR", client: "HealthGrid", industry: "Healthcare", tags: ["HIPAA", "Mobile"], summary: "HIPAA-compliant patient records app.", published: true, updatedAt: now() },
    ],
    blogs: BLOG_SEED,
    pages: [
      { id: "pg1", slug: "/", title: "Home", metaDescription: "Origami99, AI growth & custom software.", updatedAt: now() },
      { id: "pg2", slug: "/about", title: "About", metaDescription: "About Origami99.", updatedAt: now() },
      { id: "pg3", slug: "/contact", title: "Contact", metaDescription: "Get in touch with Origami99.", updatedAt: now() },
    ],
  };
}

function load(): Store {
  if (typeof window === "undefined") return seed();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      const s = seed();
      window.localStorage.setItem(KEY, JSON.stringify(s));
      window.localStorage.setItem(SEED_VERSION_KEY, BLOG_SEED_VERSION);
      return s;
    }
    const store = JSON.parse(raw) as Store;
    // If blog seed version changed, overwrite blogs but keep other collections
    const storedVersion = window.localStorage.getItem(SEED_VERSION_KEY);
    if (storedVersion !== BLOG_SEED_VERSION) {
      store.blogs = BLOG_SEED;
      window.localStorage.setItem(KEY, JSON.stringify(store));
      window.localStorage.setItem(SEED_VERSION_KEY, BLOG_SEED_VERSION);
    }
    // Safety net: ensure blogs never end up empty in mock mode
    if (!store.blogs || store.blogs.length === 0) {
      store.blogs = BLOG_SEED;
    }
    return store;
  } catch {
    return seed();
  }
}

function save(store: Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(store));
}

export const mock = {
  get: load,
  set: save,
  reset: () => {
    const s = seed();
    save(s);
    return s;
  },
};

export function mockAnalytics(): AnalyticsSummary {
  const series = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    return {
      date: d.toISOString().slice(0, 10),
      visitors: 200 + Math.round(Math.sin(i / 3) * 60 + i * 8),
      leads: 2 + Math.round(Math.abs(Math.cos(i / 4)) * 6),
    };
  });
  const visitors30d = series.reduce((a, x) => a + x.visitors, 0);
  const leads30d = series.reduce((a, x) => a + x.leads, 0);
  return {
    visitors30d,
    pageviews30d: visitors30d * 2.4 | 0,
    leads30d,
    conversionRate: leads30d / visitors30d,
    series,
    topPages: [
      { path: "/", views: 4820 },
      { path: "/services/seo", views: 2110 },
      { path: "/services/custom-software", views: 1740 },
      { path: "/contact", views: 980 },
      { path: "/work", views: 760 },
    ],
    topSources: [
      { source: "Organic Search", visits: 6200 },
      { source: "Direct", visits: 2100 },
      { source: "LinkedIn", visits: 1450 },
      { source: "Referral", visits: 920 },
    ],
  };
}

export const newId = () => Math.random().toString(36).slice(2, 10);
