import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, S as SectionTitle, a as Panel, b as Chip, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { D as Database, U as Users, i as Sparkles, av as CreditCard, n as TrendingUp, aw as RefreshCcw, am as ChartLine } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./Footer-BbcpjPO7.mjs";
import "../_libs/motion.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./router-B0GDL2eA.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./Contact-CTgd-mc8.mjs";
import "./api-BO2MH7X_.mjs";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HeroWrap, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Software Development", parentTo: "/services/software", current: "Custom SaaS Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-3.5 w-3.5" }),
            " Custom SaaS Products"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
            "A product that bills, provisions and scales",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "without you in the loop." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "We build multi tenant SaaS products with the boring parts done right. Billing, trials, seats, permissions, admin. So you can spend your calendar on the thing that actually differentiates you." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Plan matrix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
            ["Starter", "Team", "Business"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-center font-semibold rounded-md py-1.5 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`, children: p }, p)),
            [
              ["Seats", "3", "15", "Unlimited"],
              ["Workspaces", "1", "3", "10"],
              ["SSO", "·", "·", "✓"],
              ["Audit log", "·", "30d", "1y"],
              ["API rate", "60/min", "600/min", "6k/min"],
              ["Support", "Email", "Priority", "Named"]
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1.5 text-muted-foreground", children: row[0] }, row[0]),
              row.slice(1).map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1.5 text-center", children: v }, i))
            ] }))
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "The hardest choice", title: "One tenant per row, one tenant per schema, or one tenant per database.", sub: "We pick the isolation level that matches your buyers, not a blog post." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 lg:grid-cols-3", children: [
        { name: "Shared schema", when: "Freemium and SMB. Fast to iterate.", cost: "Cheap", risk: "Noisy neighbour risk without discipline" },
        { name: "Schema per tenant", when: "Mid market with data residency asks.", cost: "Medium", risk: "Migration ceremony grows with tenants" },
        { name: "Database per tenant", when: "Regulated or enterprise contracts.", cost: "Higher", risk: "You will need real provisioning automation" }
      ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-lg font-semibold", children: o.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: o.when }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Cost:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: o.cost })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Watch:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: o.risk })
          ] })
        ] })
      ] }, o.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "The billing lifecycle, honestly.", sub: "Every stage is a potential churn moment. This is where we spend most of the second half of the build.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-6 gap-3", children: [
        { s: "Signup", d: "Frictionless email or SSO", icon: Users },
        { s: "Trial", d: "Value moment in first session", icon: Sparkles },
        { s: "Convert", d: "Stripe or Paddle checkout", icon: CreditCard },
        { s: "Expand", d: "Seat upgrades in product", icon: TrendingUp },
        { s: "Renew", d: "Dunning without drama", icon: RefreshCcw },
        { s: "Churn", d: "Cancel survey, win back", icon: ChartLine }
      ].map(({ s, d, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -left-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold text-sm", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: d })
      ] }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Day two operations", title: "Admin is a first class product, not an afterthought." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The most expensive tickets after launch are the ones your support team cannot resolve without a developer. Every SaaS we build ships with an internal console powerful enough that ops handles refunds, impersonation, plan changes and feature flags on their own." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm", children: ["Tenant switcher and safe impersonation with audit trail", "Feature flags per tenant, per plan, per user", "Manual invoice adjustments and credit notes", "Usage counters with hard and soft caps", "Webhook replay and delivery inspector"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "·" }),
          i
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card border border-border/60 shadow-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-2 border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "admin.yourapp.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "Acme Inc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "tenant · business plan · 47 seats" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { tone: "success", children: "healthy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "$4.2k" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "MRR" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "98%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Uptime 30d" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "312" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "API/hr" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-muted/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Feature flag: new dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "ON" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-muted/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SSO enforced" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "ON" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-muted/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Impersonation window" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "15 min" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Pricing is a product decision, not a spreadsheet decision." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: [
        { h: "Per seat", body: "Simple to sell. Punishes wide teams. Great for tools individuals adopt bottom up." },
        { h: "Per active user", body: "Aligns your revenue with real value. Requires clean event tracking from day one." },
        { h: "Per usage", body: "Predictable for you, unpredictable for the buyer. Pair with a monthly commit." },
        { h: "Per outcome", body: "The most defensible model when the outcome is measurable. Hard to price early." }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: p.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.body })
      ] }, p.h)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "What SaaS founders ask us.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Should I build my own auth?", a: "No. Use a hosted identity provider like Supabase, Clerk or WorkOS. Own the user table and the audit trail, rent the login form. Rebuilding OAuth flows in 2026 is an antipattern." },
        { q: "Stripe or Paddle?", a: "Stripe if your buyers are technical and you want the widest API surface. Paddle if you want a merchant of record handling tax and compliance in exchange for a slightly higher take rate." },
        { q: "When should I go multi region?", a: "When a paying enterprise customer asks and no sooner. Multi region complicates every migration and doubles your infrastructure bill." },
        { q: "How do we handle the free plan?", a: "Cap it with hard limits, not soft ones. A permanently free tier that abuses your infrastructure is a product mistake, not a support problem." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Ship v1 in a quarter with billing that works on day one.", cta: "Plan the build" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/software/custom-software-development", label: "Custom Software Development", blurb: "Internal tools and back office systems, not a product for external buyers." },
      { to: "/services/software/mobile-app-development", label: "Mobile App Development", blurb: "iOS and Android clients for your SaaS." },
      { to: "/services/software/ui-ux-design", label: "UI and UX Design", blurb: "Product design that reduces churn in the first session." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
