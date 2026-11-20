import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, C as Crumbs, d as CtaButton, S as SectionTitle, a as Panel, b as Chip, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { G as Globe, D as Database, L as Layers, c as Server, az as Gauge, N as ShieldCheck, aA as GitBranch, h as Search, aJ as Terminal } from "../_libs/lucide-react.mjs";
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
function BuildBackdrop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.35]",
        style: {
          backgroundImage: "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full", viewBox: "0 0 1200 620", preserveAspectRatio: "xMidYMid slice", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "color-mix(in oklab, var(--primary) 22%, transparent)", strokeWidth: "1", fill: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M600 60 L320 180 M600 60 L600 180 M600 60 L880 180" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M320 180 L200 320 M320 180 L420 320 M600 180 L600 320 M880 180 L780 320 M880 180 L1000 320" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M200 320 L140 460 M420 320 L470 460 M600 320 L600 460 M780 320 L730 460 M1000 320 L1060 460" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("g", { fill: "color-mix(in oklab, var(--primary) 45%, transparent)", children: [
        [600, 60],
        [320, 180],
        [600, 180],
        [880, 180],
        [200, 320],
        [420, 320],
        [600, 320],
        [780, 320],
        [1e3, 320],
        [140, 460],
        [470, 460],
        [600, 460],
        [730, 460],
        [1060, 460]
      ].map(([cx, cy], i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: i % 3 === 0 ? 4 : 2.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          attributeName: "opacity",
          values: "0.25;1;0.25",
          dur: `${3 + i % 5 * 0.7}s`,
          begin: `${i * 0.24}s`,
          repeatCount: "indefinite"
        }
      ) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" })
  ] });
}
const CONSOLE_LINES = [
  { label: "resolve routes", value: "34 routes, 6 templates", state: "ok" },
  { label: "content model", value: "9 types, 41 fields", state: "ok" },
  { label: "bundle", value: "82 KB js on first paint", state: "ok" },
  { label: "prerender", value: "28 static, 6 streamed", state: "ok" },
  { label: "vitals", value: "LCP 1.4s, INP 78ms, CLS 0.02", state: "run" }
];
function BuildConsole() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-xl shadow-primary/5 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5" }),
        " origami build"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/50", children: CONSOLE_LINES.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `h-1.5 w-1.5 shrink-0 rounded-full ${l.state === "ok" ? "bg-primary" : "bg-primary/50 animate-pulse"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground truncate", children: l.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] sm:text-xs text-foreground/90 text-right", children: l.value })
    ] }, l.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-muted/40 border-t border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Performance budget" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "within limits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[72%] rounded-full bg-primary" }) })
    ] })
  ] });
}
function Stat({ k, v }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card/70 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-lg font-semibold text-primary", children: v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground", children: k })
  ] });
}
function Layer({
  icon: Icon,
  name,
  decision,
  risk
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border/60 bg-card p-5 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Decision. " }),
      decision
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "If it goes wrong. " }),
      risk
    ] })
  ] });
}
function Step({ n, t, d, note }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8 lg:pl-0 lg:pt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1 lg:left-0 lg:top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-[11px] text-primary", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: d }),
    note && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { tone: "warning", children: note }) })
  ] });
}
function Block({ title, children, tone = "muted" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-2xl border p-5 sm:p-6 ${tone === "primary" ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children })
      ]
    }
  );
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BuildBackdrop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Web Development", parentTo: "/services/web-development", current: "Custom Web Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              " Custom Web Development"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.03]", children: [
              "A website is not a page.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "It is a system that has to hold." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed", children: "Most sites are assembled once and then quietly decay. A custom build treats content, rendering, delivery and measurement as four separate decisions, each one made on purpose, each one owned by you afterwards." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base text-muted-foreground leading-relaxed", children: "Below is exactly how we think about that work. Read it as a walkthrough, not a pitch. If it matches how you want your site built, the conversation is easy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CtaButton, { as: "route", to: "/#contact", children: "Have your current site reviewed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#anatomy",
                  className: "inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition",
                  children: "See how a build is structured"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "js budget", v: "90 KB" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "lcp target", v: "1.5s" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "cls target", v: "0.05" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "ownership", v: "100%" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BuildConsole, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Start with the honest part",
          title: "Custom is not always the right answer, and we will tell you when it is not.",
          sub: "A template is a perfectly good decision under the right conditions. The problem is that most teams outgrow those conditions without noticing."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "A template is genuinely fine when", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          "Your site is under roughly twenty pages and the structure is stable.",
          "Content changes are copy edits, not new content types.",
          "Nobody is running experiments against the page.",
          "Traffic is modest and organic search is not the main channel."
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "It stops being fine the moment", tone: "primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          "Marketing waits on a developer to publish anything meaningful.",
          "Every new page type needs a plugin, and every plugin needs another plugin.",
          "Page speed became a recurring agenda item rather than a one time fix.",
          "You want to test a hypothesis and the honest estimate is next quarter."
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto", children: "If your situation sits firmly in the left column, we will say so and point you at the faster route. There is no version of this where we sell you a build you do not need." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "anatomy", className: "py-16 sm:py-24 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Anatomy of the build",
          title: "Four layers. Four decisions. Each one has a failure mode.",
          sub: "Almost every slow, awkward or unmaintainable website can be traced back to one of these four being chosen by accident."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Layer,
          {
            icon: Database,
            name: "Content layer",
            decision: "Which CMS, and more importantly what the content model looks like inside it. Types, fields, relationships, validation.",
            risk: "Editors start pasting layout into rich text fields. Two years later the content cannot be reused anywhere else."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Layer,
          {
            icon: Layers,
            name: "Render layer",
            decision: "Which pages are static, which are streamed, which hydrate at all. Chosen per template, based on how the content behaves.",
            risk: "Everything renders on the client. The first paint waits for JavaScript, and search engines see an empty shell."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Layer,
          {
            icon: Server,
            name: "Edge layer",
            decision: "Where responses are cached and how long each URL stays fresh. Cache rules follow how often content actually changes.",
            risk: "Either stale pages your team cannot flush, or nothing cached at all and every visitor pays full cost."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Layer,
          {
            icon: Gauge,
            name: "Measurement layer",
            decision: "What counts as a conversion, what fires the event, and how field vitals are collected from real visitors.",
            risk: "You optimise against a lab score while real users on real phones keep bouncing, and nobody can prove why."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground", children: "How they connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-4", children: ["Content layer", "Render layer", "Edge layer", "Measurement layer"].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-primary/25 bg-primary/5 px-4 py-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] text-primary", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold", children: n }),
          i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-primary/60", children: "›" })
        ] }, n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground leading-relaxed", children: "Measurement feeds back into content. That loop is the whole point. A site that cannot tell you which page earned the enquiry is a brochure with a hosting bill." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Where the seconds actually go",
          title: "From request to interactive, step by step.",
          sub: "Speed is rarely one big problem. It is five small ones stacked on top of each other, and each has a specific fix."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute left-0 right-0 top-3 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-5 lg:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: "1", t: "Request lands", d: "A visitor on a mid range phone asks for the page. Nothing has been drawn yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Step,
            {
              n: "2",
              t: "Server responds",
              d: "Cached at the edge and returned as ready HTML, so the first meaningful content does not wait on a round trip to origin.",
              note: "Most sites lose a second here"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Step,
            {
              n: "3",
              t: "Fonts and images",
              d: "One family, preloaded, with a metrics matched fallback. Images sized and served as AVIF with a WEBP fallback.",
              note: "Layout shift starts here"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Step,
            {
              n: "4",
              t: "Hydration",
              d: "Only the parts that need behaviour become interactive. A static section stays static and costs nothing."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Step,
            {
              n: "5",
              t: "Field data returns",
              d: "Real vitals from real visitors flow back in, split by device and template, so the next fix targets the worst page rather than the average."
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "The budget is a contract",
          title: "Every commit is measured against these ceilings, with a reason attached to each.",
          sub: "A number without a reason gets negotiated away in week six. A number with a reason survives the whole project."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: [
        {
          l: "HTML",
          v: "under 20 KB gzipped",
          why: "Keeps the critical response inside the first network round trip, which is where the first paint is won or lost."
        },
        {
          l: "JavaScript",
          v: "under 90 KB per page",
          why: "Parsing cost, not download cost, is what stalls mid range Android devices. Less script means a faster time to interactive."
        },
        {
          l: "Fonts",
          v: "one family, two weights",
          why: "Every extra weight is another blocking request and another opportunity for text to reflow after paint."
        },
        {
          l: "Images",
          v: "AVIF with WEBP fallback, explicit dimensions",
          why: "Modern formats cut weight substantially, and declared dimensions remove the layout shift that hurts the score most."
        }
      ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: b.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-primary", children: b.v })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: b.why })
      ] }, b.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "The budget runs in the pipeline, not in someone's head. A pull request that pushes a page over its ceiling fails the check and has to justify itself before it merges. That is the only way a fast site stays fast after launch." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "The part nobody plans",
          title: "Your content model decides how your team will feel every single week.",
          sub: "Two CMS setups can look identical in a demo and be completely different to live with. The difference is whether content is structured or just stored."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/50 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Modelled badly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 font-mono text-[12px] leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "Page" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "title : string" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "body : rich text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4 text-primary/80", children: "/* everything lives in here */" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 px-5 py-4 text-sm text-muted-foreground", children: "Every layout choice is buried inside one field. Nothing can be listed, filtered, syndicated or reused. Adding a new page type means copying an old page and hoping." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-primary/20 bg-primary/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary", children: "Modelled properly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 font-mono text-[12px] leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "title, slug, summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "proofPoints : Metric[]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "faqs : Question[]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "related : Service[]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-foreground", children: "CaseStudy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "service : Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4", children: "sector, outcomeSummary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary/20 px-5 py-4 text-sm text-muted-foreground", children: "Content becomes queryable. Related items, breadcrumbs, structured data and landing pages generate themselves from relationships that already exist." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-3", children: [
        ["Publishing without a ticket", "Marketing ships a new page type without opening a developer request."],
        ["Reuse without duplication", "One piece of content appears in listings, feeds and structured data at once."],
        ["Migration without pain", "Structured content moves to a new front end. Rich text soup does not."]
      ].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Search architecture",
          title: "Some of it is authored. Most of it should generate itself.",
          sub: "Anything a person has to remember to do on every page eventually stops happening. Systems do not forget."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Authored per route", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Title and description written for the page, not the brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Canonical declared explicitly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Social preview text and image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Heading structure that matches the actual argument" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Generated from content", tone: "primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sitemap built from the CMS, never a stale static file" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Structured data derived from the content type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Breadcrumbs from the route tree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Related links from real relationships" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Owned as a system", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Redirects as an editable list, not buried config" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Internal linking rules with clean anchor text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Crawl rules reviewed when templates change" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Index coverage watched after every release" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: ["Per template head", "Dynamic sitemap", "Structured data", "Redirect registry", "Breadcrumbs", "Canonical logic"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { tone: "primary", children: t }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "How the work runs",
          title: "Four phases, each one ending in something you can hold.",
          sub: "No phase closes on a status update. Every phase closes on an artefact you keep whether or not we continue."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        {
          p: "Phase one",
          t: "Map",
          you: "Whoever owns the message",
          out: "Content inventory, page types, the argument each template has to make"
        },
        {
          p: "Phase two",
          t: "Model and design",
          you: "Marketing plus one decision maker",
          out: "Content model, key templates designed, the performance budget agreed in writing"
        },
        {
          p: "Phase three",
          t: "Build",
          you: "Weekly review, nothing more",
          out: "Working templates on a preview URL from the first week, updated continuously"
        },
        {
          p: "Phase four",
          t: "Launch and hand over",
          you: "Everyone who will touch the site",
          out: "Migration, redirect map, CMS training and the repository in your organisation"
        }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-primary", children: s.p }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-lg font-semibold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-[11px] uppercase tracking-widest text-muted-foreground", children: "You bring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.you }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-[11px] uppercase tracking-widest text-muted-foreground", children: "You receive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: s.out })
      ] }, s.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "The repository, the pipeline, the CMS account and the analytics property are yours from day one, not transferred at the end. Nothing about the arrangement depends on you being unable to leave." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Asked before every engagement",
          title: "The questions worth answering directly.",
          align: "center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Faq,
        {
          items: [
            {
              q: "Why would we pay for this when a platform costs a fraction?",
              a: "For a small stable site you should not. The cost comparison only changes when the platform starts charging you in developer time, plugin licences and page speed. Compare the total for two years, including the hours your team spends working around the tool, and then decide."
            },
            {
              q: "Who edits the site after launch?",
              a: "Your marketing team, in a CMS shaped around your content rather than a generic page builder. Day to day publishing needs no developer. We train the team during handover and leave written documentation behind."
            },
            {
              q: "What happens if we stop working with you?",
              a: "Nothing breaks. The code sits in your repository, the pipeline runs under your account, and the stack is mainstream enough that any competent team can pick it up. We will run a handover session with whoever takes over."
            },
            {
              q: "Can we run A/B tests without ruining performance?",
              a: "Yes, if the assignment happens before the page renders rather than in a blocking client script. We handle it at the edge with a lightweight cookie, or integrate a testing platform in a way that keeps it off the critical path."
            },
            {
              q: "How do you handle a migration from an existing site?",
              a: "Content is exported and remapped into the new model rather than pasted across. Every existing URL is accounted for in a redirect map that we test before launch, so search equity survives the move."
            },
            {
              q: "What does the timeline actually depend on?",
              a: "Content readiness, almost always. Build work is predictable. Waiting on copy, approvals and asset access is what stretches a project. We plan around that honestly rather than quoting a week count we cannot control."
            }
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Before you commit to anything" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "Send us the URL of your current site. We will come back with what the field data says, where the seconds are going, and the two or three structural issues worth fixing first. If the answer is that you do not need a rebuild, that is what we will tell you." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ContextCta,
      {
        headline: "Start with a review, not a proposal.",
        sub: "A short conversation about how your site is built and where it is holding you back.",
        cta: "Book a working call"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Related,
      {
        title: "Related capabilities",
        items: [
          { to: "/services/web-development/shopify-ecommerce", label: "Shopify and Ecommerce", blurb: "When the site has to take payment, not just make the case." },
          { to: "/services/web-development/webflow-framer", label: "Webflow and Framer", blurb: "When marketing needs to move without waiting on engineering." },
          { to: "/services/seo", label: "SEO", blurb: "The demand layer that makes a fast site worth having." }
        ]
      }
    )
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
