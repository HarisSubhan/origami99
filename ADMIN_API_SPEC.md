# Origami99 Admin API — Node.js + MySQL Spec

The admin panel at `/admin`, the public **blog** (`/blog`, `/blog/:slug`), the **service** pages, and the website's **contact / lead-gen forms** all talk to **your** Node.js + MySQL backend through one client (`src/lib/admin/api.ts`).

While the backend is being built, every screen runs in **mock mode** (in-memory data persisted to `localStorage`). To flip the entire app to your real API, set:

```bash
# .env (project root)
VITE_ADMIN_API_URL=https://api.your-domain.com
```

Restart the dev server and every screen (admin + public blog + lead submissions + analytics dashboard) will start hitting your API. No UI changes needed.

---

## TL;DR — endpoints you must implement

| Method | Path | Auth | Used by |
|---|---|---|---|
| POST | `/auth/login` | public | Admin login |
| GET  | `/auth/me`    | JWT    | Admin session restore |
| POST | `/auth/logout`| JWT    | Admin sign-out |
| GET / POST / PATCH / DELETE | `/users` | JWT | Admin → Users |
| GET / PATCH / DELETE | `/leads` | JWT | Admin → Leads |
| **POST** | **`/leads`** | **PUBLIC** | **Public contact form on the website** |
| GET / POST / PATCH / DELETE | `/services` | JWT (writes); GET may be public for the site | Admin + public service pages |
| GET / POST / PATCH / DELETE | `/blogs` | JWT (writes); GET may be public for the site | Admin + public `/blog` |
| GET / POST / PATCH / DELETE | `/portfolio` | JWT | Admin → Portfolio |
| GET / POST / PATCH / DELETE | `/pages` | JWT | Admin → SEO Pages |
| POST | `/uploads` (multipart) | JWT | Admin image uploads (services, blog covers, portfolio) |
| GET  | `/analytics/summary` | JWT | Dashboard charts & stats |

---

## Auth

- **JWT** in the `Authorization: Bearer <token>` header.
- Issued by `POST /auth/login`, stored client-side in `localStorage` under `origami99-admin-token`.
- All admin endpoints require it. Return `401` if missing/invalid; UI redirects to login.
- `POST /leads` and the GET endpoints for `/blogs` and `/services` should be PUBLIC (no JWT) — they are called from the marketing site, which has no logged-in user.

### `POST /auth/login`
```json
// Request
{ "email": "admin@origami99.com", "password": "••••••••" }

// 200 Response
{ "token": "<jwt>", "user": { "id":"u1", "name":"Admin", "email":"...", "role":"admin", "status":"active", "createdAt":"ISO" } }
```

---

## Resources

Field names below MUST match `src/lib/admin/types.ts` exactly so the UI binds without remapping.

### Leads (`/leads`)
```ts
Lead {
  id: string; name: string; email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message: string;
  status: "new" | "contacted" | "qualified" | "won" | "lost";
  source?: string | null;   // e.g. "Website /#contact"
  pageUrl?: string | null;  // exact URL the form was submitted from
  referrer?: string | null;
  createdAt: string;        // ISO
}
```

`POST /leads` is PUBLIC. The website auto-captures `source`, `pageUrl`, and `referrer` on submit. The admin Leads table shows: name, email, phone, company, service, status, source, received date — plus full message in the detail modal.

### Services (`/services`)
```ts
Service {
  id: string; slug: string;
  title: string; category: string; summary: string;
  tagline?: string | null;       // one-liner under the title
  hero?: string | null;          // paragraph in the hero
  body?: string | null;          // long-form markdown / text
  heroImageUrl?: string | null;  // returned by POST /uploads
  published: boolean;
  updatedAt: string;
}
```

### Blogs (`/blogs`)
```ts
BlogPost {
  id: string; slug: string;
  title: string; excerpt: string;
  body: string;                  // markdown / plain text
  coverUrl?: string | null;      // returned by POST /uploads
  author: string;
  status: "draft" | "published";
  publishedAt?: string | null;
  updatedAt: string;
}
```

The public `/blog` page only shows posts where `status === "published"`.

### Portfolio, Users, Pages — same CRUD shape, fields per `src/lib/admin/types.ts`.

### Image uploads — `POST /uploads`

```
Content-Type: multipart/form-data
Authorization: Bearer <jwt>
Field: file=<binary>

200 OK
{ "url": "https://cdn.your-domain.com/uploads/2026/abc-hero.jpg" }
```

Recommendation: store in S3/R2/GCS, return a public CDN URL. Validate `image/*` MIME, reject >5MB, generate a UUID filename.

### Analytics — `GET /analytics/summary`
```ts
AnalyticsSummary {
  visitors30d: number;
  pageviews30d: number;
  leads30d: number;
  conversionRate: number; // 0..1, computed leads / visitors
  series:     { date: "YYYY-MM-DD"; visitors: number; leads: number }[]; // last 30 days
  topPages:   { path: string; views: number }[];
  topSources: { source: string; visits: number }[];
}
```

To make this real (not mock), log each public-site pageview to a `page_views` table from your frontend (or via a `POST /events` endpoint), and aggregate on this endpoint:

```sql
-- Daily series
SELECT DATE(viewed_at) date,
       COUNT(*) visitors,
       (SELECT COUNT(*) FROM leads WHERE DATE(created_at) = DATE(pv.viewed_at)) leads
FROM page_views pv
WHERE viewed_at >= NOW() - INTERVAL 30 DAY
GROUP BY DATE(viewed_at);
```

If you'd rather not roll your own, drop in Plausible/Umami/PostHog and proxy their summary through this endpoint — the UI doesn't care where the numbers come from.

---

## Starter MySQL schema

```sql
CREATE TABLE users (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin','editor','viewer') NOT NULL DEFAULT 'viewer',
  status ENUM('active','invited','disabled') NOT NULL DEFAULT 'invited',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_at DATETIME NULL
);

CREATE TABLE leads (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(40) NULL,
  company VARCHAR(190) NULL,
  service VARCHAR(120) NULL,
  message TEXT NOT NULL,
  status ENUM('new','contacted','qualified','won','lost') NOT NULL DEFAULT 'new',
  source VARCHAR(120) NULL,
  page_url VARCHAR(500) NULL,
  referrer VARCHAR(500) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX (status), INDEX (created_at)
);

CREATE TABLE services (
  id CHAR(36) PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(80) NOT NULL,
  summary TEXT,
  tagline VARCHAR(255) NULL,
  hero TEXT NULL,
  body LONGTEXT NULL,
  hero_image_url VARCHAR(500) NULL,
  published TINYINT(1) NOT NULL DEFAULT 0,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE blog_posts (
  id CHAR(36) PRIMARY KEY,
  slug VARCHAR(160) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  excerpt TEXT,
  body LONGTEXT,
  cover_url VARCHAR(500) NULL,
  author VARCHAR(120),
  status ENUM('draft','published') NOT NULL DEFAULT 'draft',
  published_at DATETIME NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX (status, published_at)
);

CREATE TABLE portfolio_projects (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(200), client VARCHAR(190), industry VARCHAR(120),
  tags JSON, summary TEXT, cover_url VARCHAR(500),
  published TINYINT(1) DEFAULT 0,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE site_pages (
  id CHAR(36) PRIMARY KEY,
  slug VARCHAR(160) UNIQUE,
  title VARCHAR(200),
  meta_description VARCHAR(320),
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE page_views (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  path VARCHAR(255) NOT NULL,
  referrer VARCHAR(500) NULL,
  source VARCHAR(120) NULL,   -- e.g. "Organic", "LinkedIn", derived from utm/referrer
  visitor_id CHAR(36) NULL,   -- hashed cookie id for uniqueness
  viewed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX (viewed_at), INDEX (path)
);
```

---

## CORS

Add `Access-Control-Allow-Origin` with your published Lovable domain (and `https://*.lovable.app` during preview), and allow `Authorization, Content-Type` headers.

## Node.js stack suggestion
- **Express** or **Fastify** + **mysql2/promise** or **Prisma**
- **jsonwebtoken** for JWT, **bcrypt** for passwords
- **multer** for `/uploads`
- **zod** for input validation
