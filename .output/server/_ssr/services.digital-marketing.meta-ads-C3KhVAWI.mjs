import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, S as SectionTitle, b as Chip, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { M as Megaphone, U as Users, H as Heart, d as ShoppingBag, L as Layers } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Digital Marketing", parentTo: "/services/digital-marketing", current: "Meta Ads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-3.5 w-3.5" }),
          " Meta · Instagram · Facebook"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Meta rewards creative volume.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "We build the volume machine." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Winning on Meta in 2026 is a creative testing problem, not a targeting problem. The algorithm finds the audience. Your job is to feed it enough shots on goal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Creative testing matrix, weekly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: Array.from({ length: 20 }, (_, i) => {
          const win = [2, 7, 14].includes(i);
          const kill = [1, 5, 9, 13, 17].includes(i);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `aspect-square rounded-lg flex flex-col items-center justify-center text-[10px] font-semibold ${win ? "bg-primary text-primary-foreground" : kill ? "bg-red-500/10 text-red-500/70 line-through" : "bg-muted"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Ad ",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-70 mt-0.5", children: win ? "scale" : kill ? "kill" : "learn" })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-muted-foreground", children: "Twenty creatives a week. Two winners scale. Five die by Tuesday. The rest inform next week's brief." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Full funnel on Meta", title: "Different objectives for different jobs. Not one campaign trying to do everything." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        { icon: Users, stage: "Cold", obj: "Traffic or reach", creative: "Hook first three seconds, story led, brand visible early" },
        { icon: Heart, stage: "Warm", obj: "Engagement or lead", creative: "Testimonial, comparison, tutorial, price transparency" },
        { icon: ShoppingBag, stage: "Hot", obj: "Sales or leads", creative: "Direct offer, urgency, retargeting only" }
      ].map(({ icon: Icon, stage, obj, creative }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: `Stage ${i + 1}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-lg font-semibold", children: stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Objective: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: obj })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: creative })
      ] }, stage)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Anatomy of a Meta ad that works.", sub: "Six frames, in this order, on nearly every winning ad we ship.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3 grid-cols-2 md:grid-cols-6", children: [
        { s: "Hook", d: "Face, motion or pattern break in first 1.2s" },
        { s: "Context", d: "Who this is for and why now" },
        { s: "Proof", d: "Result, testimonial or comparison" },
        { s: "Product", d: "Actual product in use, not a still" },
        { s: "Offer", d: "What they get, in plain words" },
        { s: "CTA", d: "One action, in bold text overlay" }
      ].map(({ s, d }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-3 aspect-[3/4] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold text-primary", children: [
          "Frame ",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mt-1", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1 flex-1", children: d })
      ] }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Audiences, honestly", title: "Advantage plus, broad, or lookalike. The map has changed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: [
        { n: "Advantage Plus Shopping", when: "Ecommerce, mature Pixel, 50+ purchases a week", risk: "Cannibalises brand and retargeting if not excluded" },
        { n: "Broad targeting", when: "Category with wide appeal, strong creative library", risk: "Waste at first, converges by week three" },
        { n: "Lookalikes", when: "Niche categories, small seed audiences", risk: "Getting less useful year over year" },
        { n: "Interest targeting", when: "Very specific niches or new markets", risk: "Overlaps and reach caps quickly" },
        { n: "Retargeting", when: "Always on, capped budget, exclusion first mindset", risk: "Chasing already convinced buyers wastes spend" }
      ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: r.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Best when: " }),
          r.when
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Watch: " }),
          r.risk
        ] })
      ] }, r.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "iOS 14+ era tracking, done properly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: [
        ["Conversions API", "Server side event stream that survives ITP and ATT."],
        ["Event dedup", "Client and server events matched by event ID."],
        ["CAPI Gateway", "For teams without a backend engineer to spare."],
        ["Attribution windows", "7 day click, 1 day view. Nothing longer for optimisation."]
      ].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Meta questions from founders and marketing leads.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "How many creatives do we need each month?", a: "Sixty is a healthy floor for a scaling ecommerce or app account. Twenty is minimum viable. Anything below and the algorithm cannot find a winner fast enough." },
        { q: "Do we still need lookalikes?", a: "Sometimes, in niches. Advantage Plus and broad have made lookalikes less central. We still test them where the seed data is strong." },
        { q: "Should we go video only?", a: "Yes, mostly. Static still works for certain categories. Static plus a subtle motion loop often outperforms both." },
        { q: "Can we use user generated content?", a: "Yes, and you should. UGC blends with the feed and outperforms polished ads in most direct response tests. We help brief creators without becoming a talent agency." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Send us your ad account. We will send back the three creative angles you are not testing.", cta: "Get a creative audit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/digital-marketing/tiktok-short-form-ads", label: "TikTok and Short Form", blurb: "The other half of the modern paid social plan." },
      { to: "/services/digital-marketing/video-editing-production", label: "Video Editing and Production", blurb: "The creative pipeline that feeds this machine." },
      { to: "/services/digital-marketing/full-funnel-digital-marketing", label: "Full Funnel Marketing", blurb: "Meta inside a wider growth plan." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
