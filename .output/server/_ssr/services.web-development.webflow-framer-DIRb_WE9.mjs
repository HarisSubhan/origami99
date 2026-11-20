import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, b as Chip, S as SectionTitle, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { L as Layers, D as Database, aK as MousePointer2 } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Web Development", parentTo: "/services/web-development", current: "Webflow and Framer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }),
          " Webflow · Framer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Marketing sites your team can move,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "without waiting for engineering." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "The right platform for teams who ship landing pages weekly, run campaigns constantly, and want interactions that feel premium without a JavaScript bill." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2", children: [
        { name: "Webflow", best: "Structured content, larger sites, CMS collections, ecommerce lite.", tag: "Systematic" },
        { name: "Framer", best: "Motion first landing pages, product launches, single flow storytelling.", tag: "Cinematic" }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { tone: "primary", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-bold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.best })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "How to pick between them, in five questions.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: [
        { q: "Do you publish content weekly?", a: "Webflow. CMS is stronger." },
        { q: "Is the site under 15 pages, mostly a launch story?", a: "Framer. Faster to design, easier to iterate." },
        { q: "Do you sell products directly on the site?", a: "Webflow. Ecommerce is native." },
        { q: "Do you need advanced scroll interactions?", a: "Framer. Motion is first class." },
        { q: "Do you have a marketing team of five or more?", a: "Webflow. Multi seat editor scales." }
      ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/60 bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: r.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-primary mt-1", children: [
            "→ ",
            r.a
          ] })
        ] })
      ] }) }, r.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Content modelling that survives your third campaign.", sub: "Most Webflow projects die at content model debt. We start with the model, not the visual." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        { c: "Authors", fields: ["name", "bio", "avatar", "role"] },
        { c: "Posts", fields: ["title", "slug", "hero", "body", "author (ref)", "category (ref)"] },
        { c: "Categories", fields: ["name", "slug", "color"] }
      ].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: col.c })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 font-mono text-xs space-y-1.5", children: col.fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between p-1.5 rounded bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[10px]", children: f.includes("ref") ? "reference" : "text" })
        ] }, f)) })
      ] }, col.c)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Motion, done tastefully", title: "Interactions on a timeline, not sprinkled on top." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-2xl border border-border/60 bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-4", children: "Hero enter · 1400ms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 font-mono text-xs", children: [
          { t: "Backdrop fade", s: 0, e: 60 },
          { t: "Headline lines rise", s: 20, e: 80 },
          { t: "Subhead fade in", s: 45, e: 90 },
          { t: "CTA scale from 0.9", s: 60, e: 95 },
          { t: "Ambient parallax loop", s: 90, e: 100 }
        ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[160px_1fr] items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-4 rounded bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full bg-primary", style: { left: `${r.s}%`, width: `${r.e - r.s}%` } }) })
        ] }, r.t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "What we hand marketing on launch day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
        "A design system inside the platform, with locked spacing, colours and type",
        "Reusable page sections marketing can drag into any new landing page",
        "A CMS with sensible required fields so no broken article ships",
        "Redirect table, robots and sitemap wired to the CMS",
        "A launch checklist and a 30 minute recorded walk through",
        "Named engineer available for month one for the odd question"
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointer2, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: s })
      ] }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Questions we hear from marketing leads.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Can Framer really replace code?", a: "For a launch site or a five page marketing story, yes. Framer produces clean production output and Vitals that compete with hand written React." },
        { q: "Will we outgrow Webflow?", a: "Sometimes. Enterprise content needs, complex localisation and advanced ecommerce still push teams to headless. Most companies do not hit that ceiling." },
        { q: "Can we self host?", a: "No. Both are hosted platforms. That is the tradeoff for the productivity you gain." },
        { q: "Do you provide ongoing design in Webflow or Framer?", a: "Yes. Monthly retainers cover new campaign pages, section updates, and CMS additions." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Give us a launch date. We will ship the site the week before.", cta: "Book a scoping call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/web-development/custom-web-development", label: "Custom Web Development", blurb: "When platform limits become project limits." },
      { to: "/services/web-development/wix-no-code", label: "Wix and No Code", blurb: "For smaller sites and rapid prototypes." },
      { to: "/services/brand-identity", label: "Brand Identity", blurb: "The layer above the marketing site." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
