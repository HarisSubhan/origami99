import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { V as notFound } from "../_libs/tanstack__router-core.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { H as Header, F as Footer } from "./Footer-BbcpjPO7.mjs";
import { T as Testimonials } from "./Testimonials-DJDxfm3G.mjs";
import { C as Contact } from "./Contact-CTgd-mc8.mjs";
import { a as Route$n, g as getService, S as SERVICES } from "./router-B0GDL2eA.mjs";
import { aj as ArrowLeft, i as Sparkles, N as ShieldCheck, w as Clock, K as Award, A as ArrowRight, x as CircleCheck, U as Users, Z as Zap, n as TrendingUp, al as Minus, p as Plus, R as Rocket, am as ChartLine } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, u as useReducedMotion, e as useScroll, c as useTransform } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./api-BO2MH7X_.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const panels = [
  {
    Icon: Sparkles,
    kicker: "Discover",
    title: "We map the opportunity in 3D.",
    body: "Immersive workshops, journey audits and live prototypes. You see the product, the funnel and the growth loop before a single line of code ships.",
    accent: "from-coral/40 to-transparent"
  },
  {
    Icon: Rocket,
    kicker: "Build",
    title: "Realistic lighting, real materials, real code.",
    body: "Design systems, WebGL storytelling and production apps. Every interaction rendered with the same care as a AAA game, wired to a system your team can actually run.",
    accent: "from-purple-500/40 to-transparent"
  },
  {
    Icon: ChartLine,
    kicker: "Scale",
    title: "Scrollytelling that sells, dashboards that decide.",
    body: "AI copilots, predictive dashboards and campaigns that compound. Immersive, interactive environments that turn attention into pipeline, and pipeline into revenue.",
    accent: "from-emerald-500/40 to-transparent"
  }
];
function ScrollPanel({
  panel,
  progress,
  start,
  end,
  reduce
}) {
  const y = useTransform(progress, [start, end], reduce ? [0, 0] : [80, -80]);
  const rotateX = useTransform(progress, [start, end], reduce ? [0, 0] : [18, -8]);
  const scale = useTransform(progress, [start, end], reduce ? [1, 1] : [0.94, 1.02]);
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.1, end - 0.05, end + 0.05],
    [0.35, 1, 1, 0.35]
  );
  const { Icon } = panel;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      style: { y, rotateX, scale, opacity, transformStyle: "preserve-3d" },
      className: "relative mx-auto max-w-4xl mb-10 lg:mb-14 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${panel.accent} opacity-60 pointer-events-none` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid sm:grid-cols-[auto,1fr] gap-5 sm:gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-coral-grad grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono tracking-widest uppercase text-coral", children: panel.kicker }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance", children: panel.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl", children: panel.body })
          ] })
        ] })
      ]
    }
  );
}
function ScrollStory() {
  const ref = reactExports.useRef(null);
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      id: "scrollstory",
      className: "relative bg-section-grad text-foreground overflow-hidden py-24 sm:py-32",
      "aria-label": "How we work, in three dimensions",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Immersive delivery"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
              "Interactive by default. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Three-dimensional" }),
              " by design."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl", children: "Scrollytelling, realistic materials and immersive virtual environments, engineered so every visitor feels the product before they buy it." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 lg:mt-20 relative", style: { perspective: 1600 }, children: mounted ? panels.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScrollPanel,
            {
              panel: p,
              progress: scrollYProgress,
              start: i / panels.length,
              end: (i + 1) / panels.length,
              reduce
            },
            p.title
          )) : panels.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative mx-auto max-w-4xl mb-10 lg:mb-14 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 pointer-events-none` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid sm:grid-cols-[auto,1fr] gap-5 sm:gap-8 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-coral-grad grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.Icon, { className: "h-6 w-6 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono tracking-widest uppercase text-coral", children: p.kicker }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance", children: p.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl", children: p.body })
                  ] })
                ] })
              ]
            },
            p.title
          )) })
        ] })
      ]
    }
  );
}
function ClientScrollStory() {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollStory, {});
}
const CATEGORY_METRICS = {
  Build: [{
    value: "9 wks",
    label: "Average time to launch"
  }, {
    value: "99.98%",
    label: "Production uptime"
  }, {
    value: "180+",
    label: "Products shipped"
  }, {
    value: "4.9/5",
    label: "Client satisfaction"
  }],
  AI: [{
    value: "+312%",
    label: "Workflow efficiency"
  }, {
    value: "−60%",
    label: "Support ticket volume"
  }, {
    value: "30 days",
    label: "Time to first value"
  }, {
    value: "24/7",
    label: "Always-on automation"
  }],
  Growth: [{
    value: "+248%",
    label: "Qualified leads"
  }, {
    value: "4.2x",
    label: "Average ROAS"
  }, {
    value: "−38%",
    label: "Cost per acquisition"
  }, {
    value: "90 days",
    label: "To measurable lift"
  }],
  Create: [{
    value: "5x",
    label: "Inbound after relaunch"
  }, {
    value: "+220%",
    label: "Engagement uplift"
  }, {
    value: "2 wks",
    label: "First concepts"
  }, {
    value: "100%",
    label: "Brand consistency"
  }],
  Scale: [{
    value: "99.99%",
    label: "SLA reliability"
  }, {
    value: "−42%",
    label: "Cloud spend saved"
  }, {
    value: "10M+",
    label: "Daily requests handled"
  }, {
    value: "Zero",
    label: "Downtime migrations"
  }]
};
const DEFAULT_FAQS = [{
  q: "How quickly can we get started?",
  a: "Most engagements kick off within a week. We run a paid 2-hour scoping session, then move into discovery on day one."
}, {
  q: "Who actually does the work?",
  a: "Senior specialists only. The people on your calls are the people writing the code, designing the screens, and running the campaigns, no juniors hidden behind account managers."
}, {
  q: "How do you price projects?",
  a: "Fixed-scope for defined deliverables, monthly retainers for ongoing work, and hybrid models for product builds. You'll always see a written estimate before anything starts."
}, {
  q: "Do you sign NDAs and DPAs?",
  a: "Yes, mutual NDA, DPA, and IP assignment are signed before any sensitive material is shared. Enterprise-friendly contracts are our default."
}, {
  q: "What happens after launch?",
  a: "We offer SLA-backed support, quarterly reviews, and dedicated growth squads. You own all code, assets, and accounts from day one."
}];
function ServicePage() {
  const {
    slug
  } = Route$n.useParams();
  const service = getService(slug);
  if (!service) throw notFound();
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const metrics = CATEGORY_METRICS[service.category];
  const faqs = service.faqs && service.faqs.length > 0 ? service.faqs : DEFAULT_FAQS;
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const deliverables = ["Discovery workshop & scoping document", "Detailed roadmap with weekly milestones", "Senior team dedicated to your account", "Live demos every two weeks", "Production handover with documentation", "Post-launch SLA & quarterly reviews"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden surface-cta text-white pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 noise", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute top-32 right-[8%] w-28 h-28 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block", animate: {
          y: [0, -20, 0],
          rotate: [45, 60, 45]
        }, transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute bottom-20 left-[6%] w-20 h-20 bg-white/10 border border-white/20 rounded-full hidden md:block", animate: {
          y: [0, 16, 0],
          scale: [1, 1.1, 1]
        }, transition: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-white/70 hover:text-coral text-sm font-semibold mb-6 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            " Back to home"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 12
              }, animate: {
                opacity: 1,
                y: 0
              }, className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-coral" }),
                service.category,
                " · Premium Service"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.1
              }, className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.2
              }, className: "mt-5 text-lg sm:text-xl text-coral font-semibold", children: service.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.3
              }, className: "mt-4 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed", children: service.hero }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.4
              }, className: "mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-coral" }),
                  " NDA & DPA signed before kickoff"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-coral" }),
                  " First demo within 2 weeks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-coral" }),
                  " Senior team, no hand-offs"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.5
              }, className: "mt-8 flex flex-wrap gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 bg-coral-grad px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform", children: [
                  "Get a Free Quote",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", className: "inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors", children: "See Our Process" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              scale: 0.85,
              rotate: -6
            }, animate: {
              opacity: 1,
              scale: 1,
              rotate: 0
            }, transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-md mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-8 shadow-glow flex items-center justify-center overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: {
                rotate: 360
              }, transition: {
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }, className: "absolute inset-0 grid-bg opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
                scale: [1, 1.15, 1]
              }, transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }, className: "absolute inset-12 rounded-2xl bg-coral/25 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
                rotate: [0, 6, -6, 0],
                y: [0, -8, 0]
              }, transition: {
                duration: 6,
                repeat: Infinity
              }, className: "relative h-36 w-36 sm:h-44 sm:w-44 rounded-3xl bg-coral-grad flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-20 w-20 sm:h-24 sm:w-24 text-white", strokeWidth: 1.5 }) }),
              service.tech.slice(0, 4).map((t, i) => {
                const positions = [{
                  top: "8%",
                  left: "8%"
                }, {
                  top: "10%",
                  right: "6%"
                }, {
                  bottom: "12%",
                  left: "6%"
                }, {
                  bottom: "8%",
                  right: "8%"
                }];
                return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                  opacity: 0,
                  scale: 0
                }, animate: {
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0]
                }, transition: {
                  delay: 0.6 + i * 0.1,
                  y: {
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }, className: "absolute bg-background/90 backdrop-blur border border-border text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-soft", style: positions[i], children: t }, t);
              })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16 sm:py-20 bg-background border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8", children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.1
      }, transition: {
        delay: i * 0.08
      }, className: "text-center sm:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-coral font-display leading-none", children: m.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-0.5 w-10 mx-auto sm:mx-0 bg-coral-grad rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm sm:text-base text-muted-foreground font-medium", children: m.label })
      ] }, m.label)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-24 bg-section-grad overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Why it matters"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
              "Business impact, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "not buzzwords." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: service.benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.1
          }, className: "group glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground mb-2", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: b.desc })
          ] }, b.title)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-24 bg-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " What you get"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "Everything required to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "ship and scale." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "Every engagement includes the scoping, delivery, and post-launch coverage your team needs. No surprises, no scope creep, no upsells half-way through." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-coral" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Dedicated squad" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Senior specialists only" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-coral" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "Weekly demos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Always shippable progress" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-coral" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: "ROI tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Tied to business KPIs" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.06
        }, className: "flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/50 hover:border-coral/40 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-coral shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: d })
        ] }, d)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "process", className: "relative py-20 sm:py-24 bg-section-grad overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Our Process"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
              "A clear ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-coral", children: [
                service.process.length,
                "-step roadmap"
              ] }),
              " from kickoff to launch."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid md:grid-cols-2 lg:grid-cols-5 gap-5", children: service.process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.1
          }, className: "relative glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 h-10 w-10 rounded-2xl bg-coral-grad flex items-center justify-center text-white text-xs font-bold shadow-glow", children: p.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-2 mt-2 pr-8", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: p.desc })
          ] }, p.step)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-24 bg-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " Technologies"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "Tools & frameworks we ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "work with." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Best-in-class, battle-tested stacks chosen to fit your team, never the other way around." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: service.tech.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          scale: 0.8
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.04
        }, whileHover: {
          y: -4
        }, className: "px-5 py-2.5 rounded-full bg-card/60 backdrop-blur border border-border text-foreground font-semibold text-sm hover:border-coral/50 hover:text-coral transition-colors cursor-default", children: t }, t)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      service.slug === "web-development" && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientScrollStory, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " Frequently Asked"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "Questions, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "answered." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
          const open = openFaq === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(open ? null : i), className: "w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-card/40 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-coral" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 text-coral" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              height: 0,
              opacity: 0
            }, animate: {
              height: "auto",
              opacity: 1
            }, exit: {
              height: 0,
              opacity: 0
            }, transition: {
              duration: 0.25,
              ease: "easeInOut"
            }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-muted-foreground leading-relaxed", children: f.a }) }) })
          ] }, f.q);
        }) })
      ] }) }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-24 bg-section-grad overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-8", children: "Related services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
          slug: r.slug
        }, className: "group glass rounded-3xl p-5 hover:border-coral/40 hover:shadow-glow transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-coral-grad flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground group-hover:text-coral transition-colors", children: r.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: r.tagline })
        ] }, r.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServicePage as component
};
