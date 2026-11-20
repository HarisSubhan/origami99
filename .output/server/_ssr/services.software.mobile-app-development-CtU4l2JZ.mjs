import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, d as CtaButton, S as SectionTitle, a as Panel, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { S as Smartphone, Z as Zap, aE as Wifi, aF as Battery, aG as Bell, ab as Shield } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Software Development", parentTo: "/services/software", current: "Mobile App Development" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-3.5 w-3.5" }),
            " Mobile"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
            "Apps people actually open",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "on day thirty." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Retention is the only mobile metric that matters. Everything we design and build is judged by whether a user comes back a month later." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaButton, { as: "route", to: "/#contact", children: "Start with a prototype" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center gap-3", children: [
          { title: "Onboard", body: "Value in 15 seconds", accent: true },
          { title: "Habit", body: "Notification worth opening", accent: false },
          { title: "Depth", body: "The feature they tell friends", accent: false }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-24 sm:w-28 h-48 sm:h-56 rounded-[24px] border-4 ${s.accent ? "border-primary" : "border-border"} bg-card shadow-xl relative overflow-hidden ${i === 1 ? "translate-y-4" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-foreground/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 pt-6 h-full flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold uppercase tracking-widest text-primary", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-semibold", children: s.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded bg-muted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded bg-muted w-2/3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-6 rounded-md ${s.accent ? "bg-primary" : "bg-muted"}` })
            ] })
          ] })
        ] }, s.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "First real decision", title: "Native, React Native or Flutter. We pick based on your app, not our resume.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        { n: "Native Swift + Kotlin", when: "Games, video, AR, deep OS integration, hardware access.", team: "Two codebases, two teams" },
        { n: "React Native", when: "Content and workflow apps sharing a web codebase. Fastest to iterate.", team: "One codebase, native escape hatches" },
        { n: "Flutter", when: "Design led apps that need identical pixel behavior across platforms.", team: "One codebase, Dart ecosystem" }
      ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg", children: o.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Best when:" }),
          " ",
          o.when
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: o.team })
      ] }, o.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "The details users notice, even if they cannot name them." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        { icon: Zap, t: "Cold start under two seconds", d: "Every extra second doubles bounce rate on the first launch." },
        { icon: Wifi, t: "Offline first, sync later", d: "The subway is your worst production environment. Design for it." },
        { icon: Battery, t: "Background work with respect", d: "Push, geofence and sync work on a budget. Users will kill an app that drains a phone." },
        { icon: Bell, t: "Notifications people opt into", d: "Ask for permission after value, personalise content, and never batch generic marketing." },
        { icon: Shield, t: "Store review that passes first time", d: "We ship a review kit with reproducible steps, sample logins and a privacy manifest that matches reality." },
        { icon: Smartphone, t: "Deep links that actually deep link", d: "Universal Links, App Links and a fallback web route so email campaigns do not die at the App Store icon." }
      ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.d })
      ] }, f.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "How releases actually ship", title: "A weekly release train, with a staged rollout you can pause." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-6 h-0.5 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4 relative", children: [
          ["Mon", "Cut branch", "Feature freeze at 5pm"],
          ["Tue", "Internal", "TestFlight, Play internal, dogfooding"],
          ["Wed", "Beta", "Opt in users, live crash dashboard"],
          ["Thu", "10% rollout", "Watch retention deltas"],
          ["Fri", "Full or rollback", "Ship or kill switch"]
        ].map(([d, t, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3.5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-primary border-4 border-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary uppercase tracking-widest", children: d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mt-1", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s })
        ] }, d)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Metrics we watch, in this order." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: [
        ["D1 activation", "The percent of new users who complete the value moment in the first session."],
        ["D30 retention", "The only leading indicator of a healthy app."],
        ["Crash free sessions", "Below 99.5% and the App Store rating slides within a week."],
        ["Session depth", "How many meaningful screens per session, not raw screen count."],
        ["Notification opt in", "The permission that unlocks every re engagement play."]
      ].map(([m, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: m }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: d })
        ] })
      ] }, m)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Common questions before we build.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Should we launch on iOS or Android first?", a: "iOS if your buyers are US or Western Europe consumers. Android if you are global, or if the app is B2B in emerging markets. Ship the second platform six weeks behind the first, not in parallel." },
        { q: "How long is a real MVP?", a: "Twelve to sixteen weeks for something you can defensibly launch. Anything faster is either a prototype or a debt collection notice waiting to happen." },
        { q: "Do we need a backend from day one?", a: "Yes. Even a tiny app needs remote config, feature flags and a way to disable a broken feature without an app store update." },
        { q: "How do we handle app store rejections?", a: "We keep a review kit updated, resolve 90 percent of first submission issues before you file, and turn around a resubmission inside 24 hours if it happens." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Bring an idea and a target user. We will bring a prototype in three weeks." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/software/ui-ux-design", label: "UI and UX Design", blurb: "The design work that decides whether the app survives the first session." },
      { to: "/services/software/custom-saas-products", label: "Custom SaaS Products", blurb: "The backend the app plugs into." },
      { to: "/services/software/custom-software-development", label: "Custom Software Development", blurb: "For internal companion tools your ops team needs." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
