// Admin API client.
// - When VITE_ADMIN_API_URL is set, all calls go to your Node.js + MySQL backend.
// - When not set, calls resolve against an in-browser mock store so the UI is
//   fully usable for design + demo without a backend.
//
// SECURITY: The JWT is held in a module-scoped variable (in-memory only) and
// is NEVER written to localStorage/sessionStorage. This prevents an XSS
// payload from silently exfiltrating a persisted token. The trade-off is
// that a full page reload requires re-login, which is the correct behaviour
// for a privileged admin surface.
//
// For production the real backend SHOULD issue the session via a
// `Set-Cookie: HttpOnly; Secure; SameSite=Strict` header on /auth/login and
// drop the Authorization header entirely.

import { mock, mockAnalytics, newId } from "./mock-data";
import type {
  AdminUser,
  AnalyticsSummary,
  AuthResponse,
  BlogPost,
  Lead,
  PortfolioProject,
  Role,
  Service,
  SitePage,
} from "./types";

const BASE = (import.meta.env.VITE_ADMIN_API_URL as string | undefined)?.replace(/\/$/, "") || "";
export const USE_MOCK = !BASE;

// In-memory token — cleared on reload. Not reachable via localStorage/document.cookie.
let _token: string | null = null;
// In-memory role snapshot used to enforce client-side authorization on mock writes.
// The real backend MUST re-check the role on every request; this is defence in depth only.
let _role: Role | null = null;

export const tokenStore = {
  get: () => _token,
  set: (t: string) => { _token = t; },
  clear: () => { _token = null; _role = null; },
};

export const roleStore = {
  get: () => _role,
  set: (r: Role | null) => { _role = r; },
};

function requireRole(...allowed: Role[]) {
  const r = _role;
  if (!r || !allowed.includes(r)) {
    throw new Error("Forbidden: insufficient role");
  }
}

async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = tokenStore.get();
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText}${text ? `, ${text}` : ""}`);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

// ---------- Auth ----------
export const authApi = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    if (USE_MOCK) {
      await delay();
      if (password.length < 4) throw new Error("Invalid credentials");
      const store = mock.get();
      const user =
        store.users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || store.users[0];
      return { token: `mock.${user.id}.${Date.now()}`, user };
    }
    return http<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  me: async (): Promise<AdminUser> => {
    if (USE_MOCK) {
      await delay();
      const token = tokenStore.get() || "";
      const id = token.split(".")[1];
      const store = mock.get();
      return store.users.find((u) => u.id === id) || store.users[0];
    }
    return http<AdminUser>("/auth/me");
  },
  logout: async () => {
    tokenStore.clear();
    if (!USE_MOCK) await http("/auth/logout", { method: "POST" }).catch(() => {});
  },
};

// ---------- Users ----------
export const usersApi = {
  list: async (): Promise<AdminUser[]> => {
    if (USE_MOCK) { await delay(); return mock.get().users; }
    return http<AdminUser[]>("/users");
  },
  create: async (input: Omit<AdminUser, "id" | "createdAt">): Promise<AdminUser> => {
    if (USE_MOCK) {
      requireRole("admin");
      await delay();
      const store = mock.get();
      const u: AdminUser = { ...input, id: newId(), createdAt: new Date().toISOString() };
      store.users.unshift(u); mock.set(store);
      return u;
    }
    return http<AdminUser>("/users", { method: "POST", body: JSON.stringify(input) });
  },
  update: async (id: string, patch: Partial<AdminUser>): Promise<AdminUser> => {
    if (USE_MOCK) {
      requireRole("admin");
      await delay();
      const store = mock.get();
      const i = store.users.findIndex((x) => x.id === id);
      if (i < 0) throw new Error("Not found");
      store.users[i] = { ...store.users[i], ...patch };
      mock.set(store);
      return store.users[i];
    }
    return http<AdminUser>(`/users/${id}`, { method: "PATCH", body: JSON.stringify(patch) });
  },
  remove: async (id: string): Promise<void> => {
    if (USE_MOCK) {
      requireRole("admin");
      await delay();
      const store = mock.get();
      store.users = store.users.filter((x) => x.id !== id);
      mock.set(store);
      return;
    }
    await http<void>(`/users/${id}`, { method: "DELETE" });
  },
  setRole: async (id: string, role: Role) => usersApi.update(id, { role }),
};

// ---------- Leads ----------
export const leadsApi = {
  list: async (): Promise<Lead[]> => {
    if (USE_MOCK) { await delay(); return mock.get().leads; }
    return http<Lead[]>("/leads");
  },
  // Public submission from the website's contact / lead-gen forms.
  // On real backend, POST /leads should be PUBLIC (no JWT) so the marketing site can call it directly.
  create: async (
    input: Omit<Lead, "id" | "createdAt" | "status"> & { status?: Lead["status"] },
  ): Promise<Lead> => {
    if (USE_MOCK) {
      await delay();
      const store = mock.get();
      const lead: Lead = {
        ...input,
        status: input.status ?? "new",
        id: newId(),
        createdAt: new Date().toISOString(),
      };
      store.leads.unshift(lead);
      mock.set(store);
      return lead;
    }
    // Public endpoint, no Authorization header needed.
    const res = await fetch(`${BASE}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return (await res.json()) as Lead;
  },
  update: async (id: string, patch: Partial<Lead>): Promise<Lead> => {
    if (USE_MOCK) {
      requireRole("admin", "editor");
      await delay();
      const store = mock.get();
      const i = store.leads.findIndex((x) => x.id === id);
      if (i < 0) throw new Error("Not found");
      store.leads[i] = { ...store.leads[i], ...patch };
      mock.set(store);
      return store.leads[i];
    }
    return http<Lead>(`/leads/${id}`, { method: "PATCH", body: JSON.stringify(patch) });
  },
  remove: async (id: string): Promise<void> => {
    if (USE_MOCK) {
      requireRole("admin");
      await delay();
      const store = mock.get();
      store.leads = store.leads.filter((x) => x.id !== id);
      mock.set(store);
      return;
    }
    await http<void>(`/leads/${id}`, { method: "DELETE" });
  },
};

// ---------- Uploads ----------
// POST /uploads (multipart/form-data, field name "file") -> { url: string }
// Admin needs JWT. Returns the public URL that can be stored on a Service/Blog/Portfolio item.
export const uploadsApi = {
  upload: async (file: File): Promise<{ url: string }> => {
    if (USE_MOCK) {
      await delay();
      const url = URL.createObjectURL(file);
      return { url };
    }
    const fd = new FormData();
    fd.append("file", file);
    const token = tokenStore.get();
    const res = await fetch(`${BASE}/uploads`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: fd,
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return (await res.json()) as { url: string };
  },
};

// ---------- Generic content CRUD helpers (services, portfolio, blogs, pages) ----------
function makeContentApi<T extends { id: string; updatedAt: string }>(
  key: "services" | "portfolio" | "blogs" | "pages",
  path: string,
) {
  return {
    list: async (): Promise<T[]> => {
      if (USE_MOCK) { await delay(); return (mock.get()[key] as unknown as T[]); }
      return http<T[]>(path);
    },
    create: async (input: Omit<T, "id" | "updatedAt">): Promise<T> => {
      if (USE_MOCK) {
        requireRole("admin", "editor");
        await delay();
        const store = mock.get();
        const item = { ...(input as object), id: newId(), updatedAt: new Date().toISOString() } as T;
        (store[key] as unknown as T[]).unshift(item);
        mock.set(store);
        return item;
      }
      return http<T>(path, { method: "POST", body: JSON.stringify(input) });
    },
    update: async (id: string, patch: Partial<T>): Promise<T> => {
      if (USE_MOCK) {
        requireRole("admin", "editor");
        await delay();
        const store = mock.get();
        const arr = store[key] as unknown as T[];
        const i = arr.findIndex((x) => x.id === id);
        if (i < 0) throw new Error("Not found");
        arr[i] = { ...arr[i], ...patch, updatedAt: new Date().toISOString() } as T;
        mock.set(store);
        return arr[i];
      }
      return http<T>(`${path}/${id}`, { method: "PATCH", body: JSON.stringify(patch) });
    },
    remove: async (id: string): Promise<void> => {
      if (USE_MOCK) {
        requireRole("admin");
        await delay();
        const store = mock.get();
        (store[key] as unknown as T[]) = (store[key] as unknown as T[]).filter((x) => x.id !== id);
        mock.set(store);
        return;
      }
      await http<void>(`${path}/${id}`, { method: "DELETE" });
    },
  };
}

export const servicesApi = makeContentApi<Service>("services", "/services");
export const portfolioApi = makeContentApi<PortfolioProject>("portfolio", "/portfolio");
export const pagesApi = makeContentApi<SitePage>("pages", "/pages");

// Blogs: same shape, plus a mock-mode safety net that ensures every
// published seed post is always reachable even if a stale localStorage
// store is missing entries. Fixes broken /blog/<slug> pages for users
// whose store was frozen before newer seeds were added.
const _blogsBase = makeContentApi<BlogPost>("blogs", "/blogs");
export const blogsApi = {
  ..._blogsBase,
  list: async (): Promise<BlogPost[]> => {
    if (USE_MOCK) {
      // Import lazily to avoid circular init issues.
      const { BLOG_SEED } = await import("./blog-seed");
      const raw = await _blogsBase.list();
      const bySlug = new Map<string, BlogPost>();
      for (const p of raw) bySlug.set(p.slug, p);
      for (const seed of BLOG_SEED) {
        if (!bySlug.has(seed.slug)) bySlug.set(seed.slug, seed);
      }
      return Array.from(bySlug.values()).sort((a, b) => {
        const at = new Date(a.publishedAt ?? a.updatedAt).getTime();
        const bt = new Date(b.publishedAt ?? b.updatedAt).getTime();
        return bt - at;
      });
    }
    return _blogsBase.list();
  },
};

// ---------- Analytics ----------
export const analyticsApi = {
  summary: async (): Promise<AnalyticsSummary> => {
    if (USE_MOCK) { await delay(); return mockAnalytics(); }
    return http<AnalyticsSummary>("/analytics/summary");
  },
};

function delay(ms = 180) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
