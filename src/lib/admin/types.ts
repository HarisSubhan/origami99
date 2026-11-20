// Shared types for the Admin Panel. Mirror these field names in your
// Node.js + MySQL API responses so the UI binds without remapping.

export type Role = "admin" | "editor" | "viewer";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "invited" | "disabled";
  createdAt: string;
  lastLoginAt?: string | null;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message: string;
  status: "new" | "contacted" | "qualified" | "won" | "lost";
  source?: string | null; // e.g. "Website /contact", "Service page /services/seo"
  pageUrl?: string | null; // exact page the form was submitted from
  referrer?: string | null;
  createdAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  // Optional rich content that overrides static defaults on the public service page.
  tagline?: string | null;
  hero?: string | null;
  body?: string | null; // markdown / plain text long-form
  heroImageUrl?: string | null;
  published: boolean;
  updatedAt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  summary: string;
  coverUrl?: string | null;
  published: boolean;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string; // markdown / plain text
  coverUrl?: string | null;
  author: string;
  status: "draft" | "published";
  publishedAt?: string | null;
  updatedAt: string;
  tags?: string[];
  category?: string;
}

export interface SitePage {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  updatedAt: string;
}

export interface AnalyticsSummary {
  visitors30d: number;
  pageviews30d: number;
  leads30d: number;
  conversionRate: number;
  series: { date: string; visitors: number; leads: number }[];
  topPages: { path: string; views: number }[];
  topSources: { source: string; visits: number }[];
}

export interface AuthResponse {
  token: string;
  user: AdminUser;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
