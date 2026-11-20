import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, S as SectionTitle, a as Panel, b as Chip, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { n as TrendingUp } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Digital Marketing", parentTo: "/services/digital-marketing", current: "Full Funnel Digital Marketing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
          " Full Funnel"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "One plan across every channel.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "One dashboard you actually read." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Point solutions optimise for last click. Real growth needs a plan that sees the whole funnel and moves budget across it every week." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-3 md:grid-cols-4", children: [
        { stage: "Awareness", channels: ["YouTube", "TikTok organic", "Podcast sponsorships"], goal: "Reach + brand search lift", color: "bg-primary/10" },
        { stage: "Consideration", channels: ["Meta", "SEO", "Retargeting"], goal: "Site visits + email captures", color: "bg-primary/20" },
        { stage: "Conversion", channels: ["Google Search", "Email flows", "Landing pages"], goal: "Leads and purchases", color: "bg-primary/40" },
        { stage: "Retention", channels: ["Lifecycle email", "SMS", "Community"], goal: "Repeat and referral", color: "bg-primary" }
      ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border border-border/60 ${s.color} p-4`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest", children: [
          "Stage ",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: s.stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-1", children: s.channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs bg-background/70 rounded px-2 py-1", children: c }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-[11px] text-muted-foreground", children: [
          "Goal: ",
          s.goal
        ] })
      ] }, s.stage)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "How we allocate", title: "Channel budget by stage of business, not by fashion." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Awareness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Consideration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Conversion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Retention" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: [
          ["Zero to 1m ARR", "10%", "20%", "60%", "10%"],
          ["1m to 10m ARR", "20%", "30%", "35%", "15%"],
          ["10m+ ARR", "35%", "25%", "20%", "20%"]
        ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: r[0] }),
          r.slice(1).map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-primary font-mono", children: v }, i))
        ] }, r[0])) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Measurement without kidding yourself." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        { h: "Last click", body: "Useful for optimising a single channel. Useless for a plan." },
        { h: "MMM lite", body: "Weekly regression against spend by channel. Directional truth for teams under 10m in spend." },
        { h: "Incrementality tests", body: "Geo holdouts, ghost bidding, pre and post studies for the channels that matter most." }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg", children: c.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.body })
      ] }, c.h)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "How we run a retainer", title: "A week in the life of a growth engagement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3 md:grid-cols-5", children: [
        ["Mon", "Numbers", "One dashboard, three questions"],
        ["Tue", "Creative", "Brief the next batch"],
        ["Wed", "Experiments", "Ship two new tests"],
        ["Thu", "Learnings", "Kill the losers, scale the winners"],
        ["Fri", "Plan", "Next week's bets, one page memo"]
      ].map(([d, s, n]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { tone: "primary", children: d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold text-sm", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: n })
      ] }, d)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Common questions.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Do you commit to a specific ROAS?", a: "No. Anyone promising a specific number before seeing your account is selling you a story. We commit to a process, a weekly rhythm and an evidence trail. The number falls out of that." },
        { q: "Do you take a percentage of ad spend?", a: "No. Percentage of spend rewards the wrong behaviour. We charge a monthly retainer scoped to the work." },
        { q: "Can you replace our in house team?", a: "Sometimes. More often we work alongside an in house lead as senior support and creative capacity." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Bring your last 90 days of numbers. We will bring the plan.", cta: "Book a growth call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/digital-marketing/google-ads", label: "Google Ads", blurb: "Search intent as the conversion engine." },
      { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Creative led demand generation." },
      { to: "/services/seo", label: "SEO", blurb: "Compounding organic traffic underneath the paid layer." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
