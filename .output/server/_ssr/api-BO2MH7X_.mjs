import { B as BLOG_SEED } from "./router-B0GDL2eA.mjs";
const KEY = "origami99-admin-mock-v3";
const SEED_VERSION_KEY = "origami99-admin-mock-seed-version";
const BLOG_SEED_VERSION = "2026-07-07-c";
const now = () => (/* @__PURE__ */ new Date()).toISOString();
function seed() {
  return {
    users: [
      { id: "u1", name: "Admin User", email: "admin@origami99.com", role: "admin", status: "active", createdAt: now(), lastLoginAt: now() },
      { id: "u2", name: "Priya Sharma", email: "priya@origami99.com", role: "editor", status: "active", createdAt: now() },
      { id: "u3", name: "Marcus Lee", email: "marcus@origami99.com", role: "viewer", status: "invited", createdAt: now() }
    ],
    leads: [
      { id: "l1", name: "Sarah Chen", email: "sarah@acme.io", company: "Acme Corp", service: "SEO", message: "Need help ranking for enterprise SaaS keywords.", status: "new", source: "Website", createdAt: now() },
      { id: "l2", name: "Raj Patel", email: "raj@northwind.com", company: "Northwind", service: "Custom Software", message: "Looking to build a B2B portal.", status: "contacted", source: "Referral", createdAt: now() },
      { id: "l3", name: "Elena Ruiz", email: "elena@brightlabs.co", company: "BrightLabs", service: "AI Integration", message: "Want to add GPT to our support tool.", status: "qualified", source: "LinkedIn", createdAt: now() }
    ],
    services: [
      { id: "s1", slug: "seo", title: "Search Engine Optimization", category: "Growth", summary: "Technical + content SEO for measurable organic growth.", published: true, updatedAt: now() },
      { id: "s2", slug: "custom-software", title: "Custom Software Development", category: "Build", summary: "Enterprise-grade web & mobile applications.", published: true, updatedAt: now() },
      { id: "s3", slug: "ai-integration", title: "AI Integration", category: "Build", summary: "LLMs, agents, RAG, and AI-powered automation.", published: true, updatedAt: now() }
    ],
    portfolio: [
      { id: "p1", title: "FleetOps Dashboard", client: "Logistics Co.", industry: "Logistics", tags: ["Dashboard", "Realtime"], summary: "Realtime fleet tracking for 1,200+ vehicles.", published: true, updatedAt: now() },
      { id: "p2", title: "MedConnect EHR", client: "HealthGrid", industry: "Healthcare", tags: ["HIPAA", "Mobile"], summary: "HIPAA-compliant patient records app.", published: true, updatedAt: now() }
    ],
    blogs: BLOG_SEED,
    pages: [
      { id: "pg1", slug: "/", title: "Home", metaDescription: "Origami99, AI growth & custom software.", updatedAt: now() },
      { id: "pg2", slug: "/about", title: "About", metaDescription: "About Origami99.", updatedAt: now() },
      { id: "pg3", slug: "/contact", title: "Contact", metaDescription: "Get in touch with Origami99.", updatedAt: now() }
    ]
  };
}
function load() {
  if (typeof window === "undefined") return seed();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      const s = seed();
      window.localStorage.setItem(KEY, JSON.stringify(s));
      window.localStorage.setItem(SEED_VERSION_KEY, BLOG_SEED_VERSION);
      return s;
    }
    const store = JSON.parse(raw);
    const storedVersion = window.localStorage.getItem(SEED_VERSION_KEY);
    if (storedVersion !== BLOG_SEED_VERSION) {
      store.blogs = BLOG_SEED;
      window.localStorage.setItem(KEY, JSON.stringify(store));
      window.localStorage.setItem(SEED_VERSION_KEY, BLOG_SEED_VERSION);
    }
    if (!store.blogs || store.blogs.length === 0) {
      store.blogs = BLOG_SEED;
    }
    return store;
  } catch {
    return seed();
  }
}
function save(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(store));
}
const mock = {
  get: load,
  set: save,
  reset: () => {
    const s = seed();
    save(s);
    return s;
  }
};
function mockAnalytics() {
  const series = Array.from({ length: 30 }).map((_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (29 - i));
    return {
      date: d.toISOString().slice(0, 10),
      visitors: 200 + Math.round(Math.sin(i / 3) * 60 + i * 8),
      leads: 2 + Math.round(Math.abs(Math.cos(i / 4)) * 6)
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
      { path: "/work", views: 760 }
    ],
    topSources: [
      { source: "Organic Search", visits: 6200 },
      { source: "Direct", visits: 2100 },
      { source: "LinkedIn", visits: 1450 },
      { source: "Referral", visits: 920 }
    ]
  };
}
const newId = () => Math.random().toString(36).slice(2, 10);
let _token = null;
let _role = null;
const tokenStore = {
  get: () => _token,
  set: (t) => {
    _token = t;
  },
  clear: () => {
    _token = null;
    _role = null;
  }
};
const roleStore = {
  get: () => _role,
  set: (r) => {
    _role = r;
  }
};
function requireRole(...allowed) {
  const r = _role;
  if (!r || !allowed.includes(r)) {
    throw new Error("Forbidden: insufficient role");
  }
}
const authApi = {
  login: async (email, password) => {
    {
      await delay();
      if (password.length < 4) throw new Error("Invalid credentials");
      const store = mock.get();
      const user = store.users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || store.users[0];
      return { token: `mock.${user.id}.${Date.now()}`, user };
    }
  },
  me: async () => {
    {
      await delay();
      const token = tokenStore.get() || "";
      const id = token.split(".")[1];
      const store = mock.get();
      return store.users.find((u) => u.id === id) || store.users[0];
    }
  },
  logout: async () => {
    tokenStore.clear();
  }
};
const usersApi = {
  list: async () => {
    {
      await delay();
      return mock.get().users;
    }
  },
  create: async (input) => {
    {
      requireRole("admin");
      await delay();
      const store = mock.get();
      const u = { ...input, id: newId(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
      store.users.unshift(u);
      mock.set(store);
      return u;
    }
  },
  update: async (id, patch) => {
    {
      requireRole("admin");
      await delay();
      const store = mock.get();
      const i = store.users.findIndex((x) => x.id === id);
      if (i < 0) throw new Error("Not found");
      store.users[i] = { ...store.users[i], ...patch };
      mock.set(store);
      return store.users[i];
    }
  },
  remove: async (id) => {
    {
      requireRole("admin");
      await delay();
      const store = mock.get();
      store.users = store.users.filter((x) => x.id !== id);
      mock.set(store);
      return;
    }
  },
  setRole: async (id, role) => usersApi.update(id, { role })
};
const leadsApi = {
  list: async () => {
    {
      await delay();
      return mock.get().leads;
    }
  },
  // Public submission from the website's contact / lead-gen forms.
  // On real backend, POST /leads should be PUBLIC (no JWT) so the marketing site can call it directly.
  create: async (input) => {
    {
      await delay();
      const store = mock.get();
      const lead = {
        ...input,
        status: input.status ?? "new",
        id: newId(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      store.leads.unshift(lead);
      mock.set(store);
      return lead;
    }
  },
  update: async (id, patch) => {
    {
      requireRole("admin", "editor");
      await delay();
      const store = mock.get();
      const i = store.leads.findIndex((x) => x.id === id);
      if (i < 0) throw new Error("Not found");
      store.leads[i] = { ...store.leads[i], ...patch };
      mock.set(store);
      return store.leads[i];
    }
  },
  remove: async (id) => {
    {
      requireRole("admin");
      await delay();
      const store = mock.get();
      store.leads = store.leads.filter((x) => x.id !== id);
      mock.set(store);
      return;
    }
  }
};
const uploadsApi = {
  upload: async (file) => {
    {
      await delay();
      const url = URL.createObjectURL(file);
      return { url };
    }
  }
};
function makeContentApi(key, path) {
  return {
    list: async () => {
      {
        await delay();
        return mock.get()[key];
      }
    },
    create: async (input) => {
      {
        requireRole("admin", "editor");
        await delay();
        const store = mock.get();
        const item = { ...input, id: newId(), updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        store[key].unshift(item);
        mock.set(store);
        return item;
      }
    },
    update: async (id, patch) => {
      {
        requireRole("admin", "editor");
        await delay();
        const store = mock.get();
        const arr = store[key];
        const i = arr.findIndex((x) => x.id === id);
        if (i < 0) throw new Error("Not found");
        arr[i] = { ...arr[i], ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        mock.set(store);
        return arr[i];
      }
    },
    remove: async (id) => {
      {
        requireRole("admin");
        await delay();
        const store = mock.get();
        store[key] = store[key].filter((x) => x.id !== id);
        mock.set(store);
        return;
      }
    }
  };
}
const servicesApi = makeContentApi("services");
const portfolioApi = makeContentApi("portfolio");
const pagesApi = makeContentApi("pages");
const _blogsBase = makeContentApi("blogs");
const blogsApi = {
  ..._blogsBase,
  list: async () => {
    {
      const { BLOG_SEED: BLOG_SEED2 } = await import("./router-B0GDL2eA.mjs").then((n) => n.e);
      const raw = await _blogsBase.list();
      const bySlug = /* @__PURE__ */ new Map();
      for (const p of raw) bySlug.set(p.slug, p);
      for (const seed2 of BLOG_SEED2) {
        if (!bySlug.has(seed2.slug)) bySlug.set(seed2.slug, seed2);
      }
      return Array.from(bySlug.values()).sort((a, b) => {
        const at = new Date(a.publishedAt ?? a.updatedAt).getTime();
        const bt = new Date(b.publishedAt ?? b.updatedAt).getTime();
        return bt - at;
      });
    }
  }
};
const analyticsApi = {
  summary: async () => {
    {
      await delay();
      return mockAnalytics();
    }
  }
};
function delay(ms = 180) {
  return new Promise((r) => setTimeout(r, ms));
}
export {
  authApi as a,
  blogsApi as b,
  analyticsApi as c,
  portfolioApi as d,
  usersApi as e,
  leadsApi as l,
  pagesApi as p,
  roleStore as r,
  servicesApi as s,
  tokenStore as t,
  uploadsApi as u
};
