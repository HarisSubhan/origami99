import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, S as SectionTitle, a as Panel, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { ar as Film, V as Video, as as Camera, at as Scissors, au as Music } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Digital Marketing", parentTo: "/services/digital-marketing", current: "Video Editing and Production" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "h-3.5 w-3.5" }),
          " Video"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Video that earns its slot,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "not decorates a feed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Ads, brand films, tutorials and short form, shot and edited by a team that thinks in retention curves before they think in colour grades." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-border/60 bg-[#0b0d12] p-4 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/60 mb-3", children: "Edit timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 text-[10px] font-mono", children: [
          { t: "V2", segs: [{ s: 0, w: 20, c: "bg-blue-500" }, { s: 55, w: 25, c: "bg-blue-500" }] },
          { t: "V1", segs: [{ s: 0, w: 100, c: "bg-primary/70" }] },
          { t: "A1", segs: [{ s: 0, w: 100, c: "bg-emerald-500/70" }] },
          { t: "A2", segs: [{ s: 30, w: 45, c: "bg-amber-500/70" }] }
        ].map((track) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[30px_1fr] gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: track.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-6 rounded bg-white/5", children: track.segs.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute h-full rounded ${s.c}`, style: { left: `${s.s}%`, width: `${s.w}%` } }, i)) })
        ] }, track.t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-between text-[9px] text-white/40 font-mono px-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "00:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "00:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "00:30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "00:45" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01:00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "What we produce", title: "Five video formats, briefed differently, edited differently.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5", children: [
        { icon: Video, n: "Short form ads", d: "9:16 for TikTok, Reels, Shorts. Hook in 1.2s, cut every 1 to 2s." },
        { icon: Camera, n: "Founder pieces", d: "Talking head with b roll. For LinkedIn and About pages." },
        { icon: Film, n: "Brand films", d: "60 to 120 second stories. For campaigns and homepage heroes." },
        { icon: Scissors, n: "Product demos", d: "Screen capture with voice over. For SaaS and marketplaces." },
        { icon: Music, n: "Case studies", d: "Interview led. Customer voice with data overlays." }
      ].map(({ icon: Icon, n, d }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: d })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Three phases, each with its own trap." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        { p: "Pre production", trap: "Under briefed. A day on set costs the same whether the script is ready or not.", days: "3 to 7 days" },
        { p: "Production", trap: "Under shot. We plan five extra angles per scene so post has options.", days: "1 to 3 days" },
        { p: "Post production", trap: "Over polished. Iteration and cuts matter more than a hero grade.", days: "5 to 10 days" }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: p.p }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: p.days }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Common trap: " }),
          p.trap
        ] })
      ] }, p.p)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "From one shoot", title: "How one shoot day becomes 30 pieces of content." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3 grid-cols-2 md:grid-cols-4", children: [
        { r: "9:16", uses: "TikTok, Reels, Shorts, Stories", count: "12 cuts" },
        { r: "1:1", uses: "Feed posts, LinkedIn", count: "6 cuts" },
        { r: "16:9", uses: "YouTube, site hero, sales deck", count: "4 cuts" },
        { r: "Static", uses: "Thumbnails, quote cards, ad statics", count: "10 assets" }
      ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full aspect-square bg-primary/10 rounded flex items-center justify-center font-bold text-primary", children: f.r }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-muted-foreground", children: f.uses }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold", children: f.count })
      ] }, f.r)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Video questions we get on discovery.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Do you shoot or just edit?", a: "Both. In studio in our locations, on location for shoots that need it, and edit only when clients already have footage." },
        { q: "How many revisions?", a: "Two rounds included on ads, three on brand films. Anything beyond usually points to an unclear brief on our side. We fix that upstream." },
        { q: "Can you match our brand?", a: "Yes. We work from a brand kit or build one from your site if needed. Grade, motion and type stay consistent across formats." },
        { q: "Do you handle voice over and music?", a: "Yes. In house voice over pool, licensed music library and original composition when the project justifies it." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Send us a script or a rough idea. We will send back a shot list.", cta: "Start a video project" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Where most of these edits are distributed." },
      { to: "/services/digital-marketing/tiktok-short-form-ads", label: "TikTok and Short Form", blurb: "The format short form was built for." },
      { to: "/services/brand-identity", label: "Brand Identity", blurb: "The visual system video should extend." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
