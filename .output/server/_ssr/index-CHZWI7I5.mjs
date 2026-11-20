import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-BbcpjPO7.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Testimonials, u as useMobileAutoScroll } from "./Testimonials-DJDxfm3G.mjs";
import { S as SERVICES } from "./router-B0GDL2eA.mjs";
import { W as Work } from "./Work-B0INhCLK.mjs";
import { C as Contact } from "./Contact-CTgd-mc8.mjs";
import { P as Platforms } from "./Platforms-BeC58hEN.mjs";
import { A as ArrowRight, l as Star, a as Brain, Z as Zap, i as Sparkles, U as Users, R as Rocket, m as DollarSign, H as Heart, h as Search, f as PenTool, n as TrendingUp, o as MessageCircle, p as Plus, b as Cloud, M as Megaphone } from "../_libs/lucide-react.mjs";
import { u as useReducedMotion, A as AnimatePresence, a as useInView, b as useMotionValue, c as useTransform, d as animate } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./use-mobile-BsFue-bT.mjs";
import "./api-BO2MH7X_.mjs";
const a1 = "/assets/avatar-1-CIPaLxC7.png";
const a2 = "/assets/avatar-2-DjAUa5Nl.png";
const a3 = "/assets/avatar-3-CAzl70xr.png";
const a4 = "/assets/avatar-4-D0kb_vp0.png";
const a5 = "/assets/avatar-5-92oNHbxn.png";
const heroAvatars = [a1, a2, a3, a4, a5];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden bg-section-grad text-foreground pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 noise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute top-40 right-[12%] w-24 h-24 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block",
        animate: { y: [0, -18, 0], rotate: [45, 60, 45] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute bottom-24 left-[8%] w-16 h-16 bg-card/70 backdrop-blur diamond rounded-xl border border-border hidden md:block",
        animate: { y: [0, 12, 0], rotate: [45, 30, 45] },
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute top-1/3 left-[44%] w-3 h-3 bg-coral rounded-full",
        animate: { scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] },
        transition: { duration: 3, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-coral" })
              ] }),
              "AI POWERED CREATIVE AND DIGITAL AGENCY"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "mt-5 sm:mt-6 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.98] tracking-tight text-balance",
            children: [
              "We build brands",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "that",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block text-coral", style: { textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }, children: [
                "convert.",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.svg,
                  {
                    viewBox: "0 0 300 14",
                    className: "absolute -bottom-1 sm:-bottom-2 left-0 w-full",
                    initial: { pathLength: 0 },
                    animate: { pathLength: 1 },
                    transition: { duration: 1.4, delay: 0.8 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.path, { d: "M2 9 C 80 2, 220 2, 298 9", stroke: "var(--coral)", strokeWidth: "4", fill: "none", strokeLinecap: "round" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Not just look",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "pretty."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.25 },
            className: "mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed",
            children: "One senior team, end to end. Custom software, AI-driven web and mobile apps, SEO, and paid media, engineered together by the crew that has quietly shipped 400+ production platforms across four continents."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            className: "mt-9 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 bg-coral-grad px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform", children: [
                "Book a 30-min build call",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 group-hover:translate-x-1 transition-transform" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border border-border hover:bg-foreground/10 transition-colors", children: "See what we shipped" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8, delay: 0.6 },
            className: "mt-10 flex items-center gap-6 flex-wrap",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-3", children: heroAvatars.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.6 + i * 0.08 },
                  whileHover: { y: -4, scale: 1.08, zIndex: 20 },
                  className: "h-11 w-11 rounded-full border-2 border-background overflow-hidden bg-white shadow-lg",
                  style: { zIndex: 10 - i },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "Happy client", className: "h-full w-full object-cover object-top", loading: "lazy" })
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-coral", children: [
                  [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground ml-1 font-semibold", children: "4.9/5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
                  "From ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "450+" }),
                  " happy clients worldwide"
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, rotateY: -15 },
          animate: { opacity: 1, scale: 1, rotateY: 0 },
          transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          className: "relative",
          style: { perspective: 1200 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-card/80 backdrop-blur-xl border border-border p-5 shadow-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-coral" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-emerald-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto text-xs text-muted-foreground font-mono", children: "origami99.ai/dashboard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                { icon: Brain, label: "AI Conversions", val: "+342%", color: "from-coral to-orange-400" },
                { icon: Zap, label: "Page Speed", val: "98/100", color: "from-emerald-400 to-teal-500" },
                { icon: Sparkles, label: "Organic Traffic", val: "12.4K", color: "from-violet-400 to-fuchsia-500" },
                { icon: Star, label: "Lead Quality", val: "A+", color: "from-amber-400 to-yellow-500" }
              ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 + i * 0.1 },
                  className: "rounded-xl bg-muted border border-border p-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 w-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-2`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: s.val })
                  ]
                },
                s.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-xl bg-muted border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Revenue Growth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-400 font-semibold", children: "↑ 218%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 60", className: "w-full h-16", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: "0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: "0" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.path,
                    {
                      d: "M0 50 L25 42 L50 45 L75 30 L100 28 L125 18 L150 22 L175 10 L200 4 L200 60 L0 60 Z",
                      fill: "url(#grad)",
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { pathLength: 1, opacity: 1 },
                      transition: { duration: 1.4, delay: 0.9 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.path,
                    {
                      d: "M0 50 L25 42 L50 45 L75 30 L100 28 L125 18 L150 22 L175 10 L200 4",
                      stroke: "var(--coral)",
                      strokeWidth: "2",
                      fill: "none",
                      strokeLinecap: "round",
                      initial: { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { duration: 1.4, delay: 0.9 }
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 4, repeat: Infinity },
                className: "absolute -left-6 top-10 bg-white text-navy rounded-2xl shadow-soft px-4 py-3 hidden md:flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-coral-grad flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Deploy time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: "-72%" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { y: [0, 10, 0] },
                transition: { duration: 5, repeat: Infinity, delay: 0.5 },
                className: "absolute -right-4 -bottom-4 bg-white text-navy rounded-2xl shadow-soft px-4 py-3 hidden md:flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "AI Score" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: "99/100" })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const items = [
  "Custom Software",
  "AI Web Apps",
  "Mobile Apps",
  "SEO & Local SEO",
  "Paid Media",
  "Shopify & Headless",
  "WordPress & Webflow",
  "Branding & UI/UX",
  "DevOps & Cloud",
  "AI Automation",
  "React · Next.js · TypeScript",
  "React Native · Swift · Kotlin",
  "Node.js · PostgreSQL",
  "OpenAI · LangChain · RAG",
  "AWS · Cloudflare · Vercel",
  "Figma · Motion · Framer"
];
function Marquee() {
  const [paused, setPaused] = reactExports.useState(false);
  const [inView, setInView] = reactExports.useState(true);
  const ref = reactExports.useRef(null);
  const reduced = useReducedMotion();
  const row = [...items, ...items];
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const shouldAnimate = !paused && inView && !reduced;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "aria-label": "Services and stack",
      className: "relative bg-background text-foreground py-5 sm:py-6 overflow-hidden border-y border-border",
      style: { contentVisibility: "auto", containIntrinsicSize: "1px 80px" },
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex w-max items-center",
          animate: shouldAnimate ? { x: ["0%", "-50%"] } : { x: "-25%" },
          transition: shouldAnimate ? { duration: 45, repeat: Infinity, ease: "linear" } : { duration: 0.2 },
          children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 sm:gap-8 px-5 sm:px-8 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap text-foreground/85", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-coral shrink-0" })
          ] }, i))
        }
      ) })
    }
  );
}
const Visual = {
  Code: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-4 font-mono text-[10px] leading-relaxed", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-coral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400" })
    ] }),
    [
      ["const ", "ship", " = ", "ai", "(", "'ROI'", ")"],
      ["", "await ", "deploy(", "ship", ")"],
      ["// ", "✓ converted"]
    ].map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.3 + i * 0.4, duration: 0.4 },
        className: "text-foreground/80",
        children: [
          line.map((tok, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: tok.startsWith("//") ? "text-emerald-400" : tok.startsWith("'") ? "text-coral" : ["const ", "await ", "function "].includes(tok) ? "text-violet-400" : "text-foreground/85",
              children: tok
            },
            j
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-blink text-coral", children: "|" })
        ]
      },
      i
    ))
  ] }),
  Browser: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full rounded-lg bg-foreground/5 border border-foreground/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2 py-1.5 border-b border-foreground/10 bg-foreground/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-coral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-yellow-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 ml-2 h-3 rounded bg-foreground/10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          whileInView: { width: "70%" },
          transition: { duration: 0.8 },
          className: "h-2 rounded bg-coral/60"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          whileInView: { width: "90%" },
          transition: { duration: 1, delay: 0.2 },
          className: "h-2 rounded bg-foreground/15"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          whileInView: { width: "55%" },
          transition: { duration: 0.8, delay: 0.4 },
          className: "h-2 rounded bg-foreground/15"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1 pt-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0.6, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          transition: { delay: 0.6 + i * 0.1 },
          className: "aspect-square rounded bg-gradient-to-br from-coral/40 to-coral/10"
        },
        i
      )) })
    ] })
  ] }) }),
  Phone: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      animate: { y: [0, -6, 0], rotate: [-3, 3, -3] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      className: "w-16 h-28 rounded-[14px] bg-foreground/10 border-2 border-foreground/20 p-1.5 shadow-glow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full rounded-[10px] bg-gradient-to-br from-coral/30 via-foreground/5 to-transparent p-1.5 flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-6 rounded mx-auto bg-foreground/30 mb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { width: 0 }, whileInView: { width: "100%" }, transition: { duration: 0.6 }, className: "h-1.5 rounded bg-coral" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { width: 0 }, whileInView: { width: "70%" }, transition: { duration: 0.6, delay: 0.2 }, className: "h-1.5 rounded bg-foreground/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded bg-coral/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded bg-foreground/20" })
        ] })
      ] })
    }
  ) }),
  Brain: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", viewBox: "0 0 200 120", children: [
    [[40, 30], [40, 60], [40, 90], [100, 20], [100, 60], [100, 100], [160, 40], [160, 80]].map(([cx, cy], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.circle,
      {
        cx,
        cy,
        r: 4,
        fill: "var(--coral)",
        initial: { scale: 0 },
        whileInView: { scale: [0, 1.3, 1] },
        transition: { delay: i * 0.08, duration: 0.5 }
      },
      i
    )),
    [
      [40, 30, 100, 20],
      [40, 30, 100, 60],
      [40, 60, 100, 20],
      [40, 60, 100, 60],
      [40, 60, 100, 100],
      [40, 90, 100, 60],
      [40, 90, 100, 100],
      [100, 20, 160, 40],
      [100, 60, 160, 40],
      [100, 60, 160, 80],
      [100, 100, 160, 80]
    ].map(([x1, y1, x2, y2], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.line,
      {
        x1,
        y1,
        x2,
        y2,
        stroke: "var(--coral)",
        strokeOpacity: "0.4",
        strokeWidth: "1",
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        transition: { delay: 0.3 + i * 0.04, duration: 0.6 }
      },
      i
    ))
  ] }),
  Search: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-4 flex flex-col justify-center gap-2", children: ["origami99, page 1", "best ai agency", "digital marketing"].map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      transition: { delay: i * 0.15 },
      className: "flex items-center gap-2 text-[10px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-coral font-bold", children: [
          "#",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 rounded bg-foreground/15 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            whileInView: { width: `${100 - i * 18}%` },
            transition: { delay: 0.4 + i * 0.1, duration: 0.8 },
            className: "absolute inset-y-0 left-0 bg-coral-grad rounded"
          }
        ) })
      ]
    },
    q
  )) }),
  Target: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
    [60, 44, 28, 14].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 0, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        transition: { delay: i * 0.12 },
        className: "absolute rounded-full border-2 border-coral",
        style: { width: `${s}%`, aspectRatio: 1, borderColor: i === 3 ? "var(--coral)" : "color-mix(in oklab, var(--coral) 40%, transparent)", background: i === 3 ? "var(--coral)" : "transparent" }
      },
      s
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { x: [-40, 0], y: [-30, 0], rotate: [-30, 0] },
        transition: { duration: 1.2, ease: "easeOut" },
        className: "absolute h-px w-12 bg-foreground/50",
        style: { transformOrigin: "right" }
      }
    )
  ] }),
  Megaphone: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-10 w-10 text-coral" }),
    [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 0.5, opacity: 0.6 },
        animate: { scale: 2, opacity: 0 },
        transition: { duration: 2, repeat: Infinity, delay: i * 0.5 },
        className: "absolute h-16 w-16 rounded-full border-2 border-coral"
      },
      i
    ))
  ] }),
  Video: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 w-24 rounded-lg bg-foreground/10 border border-foreground/15 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { x: ["-100%", "100%"] },
        transition: { duration: 2, repeat: Infinity, ease: "linear" },
        className: "absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-coral/30 to-transparent"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-coral flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0 h-0 border-l-[8px] border-l-white border-y-[5px] border-y-transparent ml-1" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-1 bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { width: 0 }, whileInView: { width: "70%" }, transition: { duration: 1.5 }, className: "h-full bg-coral" }) })
  ] }) }),
  Palette: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center gap-1.5", children: ["#ef4555", "#1a1f3a", "#f59e0b", "#10b981", "#8b5cf6"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { y: 20, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { delay: i * 0.08 },
      whileHover: { y: -6 },
      className: "h-14 w-6 rounded-full",
      style: { background: c }
    },
    c
  )) }),
  Server: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-4 flex flex-col justify-center gap-1.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -10 },
      whileInView: { opacity: 1, x: 0 },
      transition: { delay: i * 0.15 },
      className: "flex items-center gap-2 rounded bg-foreground/5 border border-foreground/10 p-1.5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            animate: { opacity: [1, 0.3, 1] },
            transition: { duration: 1.5, repeat: Infinity, delay: i * 0.2 },
            className: "h-1.5 w-1.5 rounded-full bg-emerald-400"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid grid-cols-5 gap-0.5", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-sm bg-coral/40" }, j)) })
      ]
    },
    i
  )) }),
  Cloud: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "h-14 w-14 text-coral" }),
    [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, -8, 0] },
        transition: { duration: 2, repeat: Infinity, delay: i * 0.3 },
        className: "absolute h-1.5 w-1.5 rounded-full bg-coral",
        style: { top: "75%", left: `${35 + i * 15}%` }
      },
      i
    ))
  ] }),
  Chart: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-4 flex items-end gap-1.5", children: [40, 60, 35, 80, 55, 95, 70].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { height: 0 },
      whileInView: { height: `${h}%` },
      transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
      className: "flex-1 rounded-t bg-gradient-to-t from-coral to-coral-soft"
    },
    i
  )) })
};
const VISUAL_BY_SLUG = {
  "software": "Code",
  "web-development": "Browser",
  "digital-marketing": "Target",
  "seo": "Search",
  "brand-identity": "Palette"
};
const CATEGORY_TAG = {
  "software": "Build",
  "web-development": "Build",
  "digital-marketing": "Growth",
  "seo": "Growth",
  "brand-identity": "Create"
};
const services = SERVICES.map((s) => ({
  icon: s.icon,
  title: s.title,
  desc: s.tagline,
  tag: CATEGORY_TAG[s.slug] ?? "Build",
  visual: VISUAL_BY_SLUG[s.slug] ?? "Code",
  slug: s.slug
}));
const tagColor = {
  Build: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  AI: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Growth: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Create: "bg-coral/15 text-coral border-coral/30",
  Scale: "bg-amber-500/15 text-amber-400 border-amber-500/30"
};
function Services() {
  const scrollerRef = reactExports.useRef(null);
  useMobileAutoScroll(scrollerRef, { intervalMs: 3500 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-50 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 -left-32 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " Pick a lane. Or hand us the whole thing."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
          "Every digital lever ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "under one roof." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground", children: "From the first line of code to your hundredth marketing campaign, the same senior team owns the outcome. No hand-offs, no finger-pointing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollerRef, className: "mt-12 sm:mt-16 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:grid gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar sm:grid-cols-2 lg:grid-cols-3 pb-4 sm:pb-0", children: services.map((s, i) => {
        const VisualComp = Visual[s.visual];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.5, delay: i % 3 * 0.08 },
            whileHover: { y: -8 },
            className: "shrink-0 w-[82%] sm:w-auto snap-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services/$slug",
                params: { slug: s.slug },
                className: "group relative glass rounded-3xl p-5 sm:p-6 hover:border-coral/40 hover:shadow-glow transition-all duration-300 overflow-hidden block h-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-48 h-48 bg-coral/0 group-hover:bg-coral/15 rounded-full blur-3xl transition-all duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-32 sm:h-32 rounded-2xl bg-foreground/[0.03] border border-foreground/5 mb-4 sm:mb-5 overflow-hidden group-hover:border-coral/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualComp, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-foreground/10 backdrop-blur flex items-center justify-center group-hover:bg-coral-grad group-hover:rotate-6 transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-foreground group-hover:text-white transition-colors" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border shrink-0 ${tagColor[s.tag]}`, children: s.tag.toUpperCase() })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold text-foreground mb-2", children: s.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-coral text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity", children: [
                      "Explore ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                    ] })
                  ] })
                ]
              }
            )
          },
          s.title
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-coral/40" }),
        "Swipe to explore all ",
        services.length,
        " services",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-coral/40" })
      ] })
    ] })
  ] });
}
const steps = [
  { n: "01", icon: Search, title: "Discover & scope", desc: "You get a paid 2-hour audit of your business, competitors and stack. We hand back a fixed-price proposal, KPIs and a written roadmap, before a single line of code." },
  { n: "02", icon: PenTool, title: "Design & build", desc: "You see working software every week. Senior designers and engineers ship in AI-accelerated sprints, no juniors on your budget, no black-box updates, no surprises." },
  { n: "03", icon: Rocket, title: "Launch & ignite", desc: "You go live on production-grade infra with SEO, paid, content and outreach wired to the same funnel from day one, so traffic doesn't wait for a separate 'marketing phase'." },
  { n: "04", icon: TrendingUp, title: "Optimise & compound", desc: "You get live dashboards, weekly reports, monthly strategy. We A/B test relentlessly, double down on what works, and cut what doesn't, until ROI compounds quarter over quarter." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "process", className: "relative py-20 sm:py-24 lg:py-32 bg-section-grad text-foreground overflow-hidden noise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " How we work"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
          "How we work. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Fast, senior, and stupidly transparent." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground", children: "The same four-step ritual we've run for hundreds of businesses. Fixed price, fixed scope, no surprises." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-coral/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-4 gap-8 lg:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.12 },
            className: "relative group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-24 h-24 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-coral-grad diamond rounded-3xl group-hover:rotate-[60deg] transition-transform duration-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-9 w-9 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 bg-white text-foreground h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold border-4 border-background", children: s.n })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-center mb-3", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center leading-relaxed", children: s.desc })
            ]
          },
          s.n
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 bg-coral-grad px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform", children: "Start Your Project Today →" }) })
    ] })
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
  reactExports.useEffect(() => {
    if (inView) animate(mv, to, { duration: 2.2, ease: "easeOut" });
  }, [inView, mv, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { ref, children: rounded });
}
const stats = [
  { value: 450, suffix: "+", label: "Founders trust us", icon: Users },
  { value: 480, suffix: "+", label: "Platforms shipped", icon: Rocket },
  { value: 12, suffix: "M+", label: "Client revenue moved", icon: DollarSign },
  { value: 99, suffix: "%", label: "Retention past 12 months", icon: Heart }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden border-y border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 sm:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " The numbers we're allowed to publish"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
          "Seven years of quiet compounding, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "measured in yours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.6 },
          whileHover: { y: -4 },
          className: "group relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-32 h-32 bg-coral/0 group-hover:bg-coral/15 rounded-full blur-2xl transition-all duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow mb-3 sm:mb-4 group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest", children: s.label })
            ] })
          ]
        },
        s.label
      )) })
    ] })
  ] });
}
const locations = [
  { country: "Pakistan", city: "Islamabad", flag: "🇵🇰", x: 685, y: 200, region: "APAC HQ" },
  { country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦", x: 600, y: 230, region: "MENA Operations" },
  { country: "Germany", city: "Berlin", flag: "🇩🇪", x: 512, y: 148, region: "EU Operations" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦", x: 245, y: 170, region: "North America" },
  { country: "USA", city: "Austin, Texas", flag: "🇺🇸", x: 205, y: 210, region: "US Headquarters" }
];
const connections = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [0, 4]
];
function GlobalPresence() {
  const [active, setActive] = reactExports.useState(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "global", className: "relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-10 sm:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " Follow-the-sun delivery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
          "Five countries. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "One senior team." }),
          " Always on your timezone."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground", children: "Islamabad hands off to Berlin, Berlin hands off to Toronto, Toronto hands off to Austin. Your project moves while the rest of the world sleeps." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-card/40 backdrop-blur border border-border p-4 sm:p-6 shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 1000 500", className: "relative w-full h-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "globe-glow", cx: "50%", cy: "50%", r: "50%", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: "0.2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: "0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "line-grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "var(--coral)", stopOpacity: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: "0" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WorldDots, {}),
            mounted && connections.map(([a, b], i) => {
              const A = locations[a];
              const B = locations[b];
              const mx = (A.x + B.x) / 2;
              const my = Math.min(A.y, B.y) - 60;
              const d = `M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.path,
                  {
                    d,
                    fill: "none",
                    stroke: "var(--coral)",
                    strokeOpacity: "0.25",
                    strokeWidth: "1.2",
                    strokeDasharray: "4 4",
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.6, delay: i * 0.15 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.circle,
                  {
                    r: "3",
                    fill: "var(--coral)",
                    initial: { offsetDistance: "0%" },
                    animate: { offsetDistance: "100%" },
                    transition: { duration: 3, repeat: Infinity, delay: i * 0.4, ease: "linear" },
                    style: { offsetPath: `path("${d}")` }
                  }
                )
              ] }, i);
            }),
            locations.map((loc, i) => {
              const isActive = active === i;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "g",
                {
                  onMouseEnter: () => setActive(i),
                  onMouseLeave: () => setActive(null),
                  style: { cursor: "pointer" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.circle,
                      {
                        cx: loc.x,
                        cy: loc.y,
                        r: "10",
                        fill: "var(--coral)",
                        initial: { scale: 0, opacity: 0.7 },
                        animate: { scale: [0.8, 2.4, 0.8], opacity: [0.55, 0, 0.55] },
                        transition: { duration: 2.4, repeat: Infinity, delay: i * 0.3 },
                        style: { transformOrigin: `${loc.x}px ${loc.y}px` }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.circle,
                      {
                        cx: loc.x,
                        cy: loc.y,
                        r: isActive ? 9 : 6,
                        fill: "var(--coral)",
                        stroke: "#fff",
                        strokeWidth: "2",
                        initial: { scale: 0 },
                        whileInView: { scale: 1 },
                        viewport: { once: true },
                        transition: { delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: loc.x,
                        y: loc.y - 16,
                        textAnchor: "middle",
                        className: "fill-foreground",
                        style: { fontSize: 12, fontWeight: 700 },
                        children: loc.city
                      }
                    )
                  ]
                },
                loc.country
              );
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex items-center gap-2 bg-background/60 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "5 offices live" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-1 gap-3", children: locations.map((loc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            onMouseEnter: () => setActive(i),
            onMouseLeave: () => setActive(null),
            className: `group relative rounded-2xl border p-4 sm:p-5 backdrop-blur transition-all cursor-pointer ${active === i ? "bg-coral/10 border-coral/50 shadow-glow" : "bg-card/40 border-border hover:border-coral/30"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl leading-none shrink-0", children: loc.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-widest uppercase text-coral", children: loc.region }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-foreground", children: loc.city }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: loc.country })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: active === i ? 45 : 0 },
                  className: "h-8 w-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-coral",
                  children: "→"
                }
              )
            ] })
          },
          loc.country
        )) })
      ] })
    ] })
  ] });
}
function WorldDots() {
  const dots = [
    // North America
    [150, 140],
    [170, 150],
    [190, 140],
    [210, 150],
    [230, 160],
    [170, 170],
    [190, 170],
    [210, 170],
    [230, 180],
    [250, 180],
    [200, 190],
    [220, 200],
    [160, 200],
    [180, 210],
    [200, 210],
    [220, 210],
    [240, 220],
    [260, 230],
    [280, 230],
    // South America
    [290, 300],
    [300, 320],
    [310, 340],
    [300, 360],
    [290, 380],
    [310, 380],
    [320, 330],
    [300, 280],
    [290, 260],
    // Europe
    [490, 160],
    [510, 150],
    [530, 160],
    [510, 170],
    [530, 180],
    [550, 170],
    [470, 170],
    [490, 180],
    [510, 190],
    [470, 150],
    [450, 170],
    // Africa
    [510, 220],
    [530, 240],
    [510, 260],
    [530, 280],
    [550, 260],
    [490, 230],
    [510, 300],
    [530, 320],
    [510, 340],
    [490, 300],
    [470, 260],
    // Middle East / Asia
    [600, 200],
    [620, 210],
    [640, 220],
    [660, 210],
    [680, 200],
    [700, 210],
    [720, 200],
    [640, 240],
    [660, 250],
    [680, 240],
    [700, 250],
    [720, 260],
    // South / SE Asia
    [700, 270],
    [720, 280],
    [700, 290],
    [680, 280],
    [750, 260],
    [770, 280],
    [790, 290],
    [780, 310],
    [800, 310],
    [820, 300],
    // East Asia
    [780, 200],
    [800, 210],
    [820, 200],
    [820, 220],
    [800, 230],
    [820, 240],
    [840, 220],
    [860, 210],
    [840, 200],
    // Australia
    [840, 350],
    [860, 360],
    [870, 370],
    [850, 370],
    [830, 360],
    [820, 370],
    [860, 380],
    // UK/Ireland
    [450, 150],
    [460, 140],
    // Russia
    [580, 130],
    [620, 130],
    [660, 140],
    [700, 140],
    [740, 150],
    [780, 160]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: dots.map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "circle",
    {
      cx: x,
      cy: y,
      r: "2.5",
      fill: "currentColor",
      className: "text-foreground/30"
    },
    i
  )) });
}
const enfieldroyalLogo = "/assets/enfieldroyal-logo-BwZIimsL.png";
const dubaisafariLogo = "/assets/dubaisafari-logo-BnDscaRJ.svg";
const exposksaLogo = "data:image/png;base64,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";
const theductiblesLogo = "data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M245.661%20182.816C245.977%20184.882%20246.555%20187.636%20247.542%20190.819C243.574%20196.85%20238.731%20202.117%20233.049%20206.621C222.468%20214.96%20208.236%20221.083%20190.744%20224.768C172.748%20228.547%20150.32%20230.445%20124.09%20230.445H102.649C110.734%20219.966%20115.503%20206.844%20115.503%20192.624C115.503%20158.266%2087.5411%20130.328%2053.1527%20130.328C40.746%20130.328%2029.1963%20133.958%2019.4722%20140.211V101.367C23.4587%20102.018%2029.2336%20102.484%2037.7468%20102.484C48.9799%20102.484%2064.9819%20101.683%2087.8392%2099.5802C133.61%2095.2993%20158.702%2089.9389%20174.406%2081.0793C181.97%2076.8356%20195.773%2067.9574%20203.542%2056.399C211.347%2044.7848%20214.905%2035.3668%20214.197%2028.2754C221.388%2031.3465%20227.684%2034.9759%20233.068%2039.2382C243.463%2047.4464%20251.063%2058.3906%20255.664%2071.7172C255.776%2072.0894%20255.907%2072.4431%20256%2072.8153L241.637%2073.0573C216.06%2073.0573%20200.226%2098.6868%20200.226%20122.418C200.226%20146.149%20219.525%20166.027%20243.369%20166.697C243.761%20172.411%20244.524%20178.423%20245.661%20182.816Z'%20fill='%23F3D30F'/%3e%3cpath%20d='M53.1735%20141.701C40.2638%20141.701%2028.4533%20146.503%2019.4929%20154.451C17.4438%20156.219%2015.525%20158.211%2013.8112%20160.314C11.6316%20162.957%209.7129%20165.823%208.12947%20168.857C4.34786%20175.948%202.20557%20184.045%202.20557%20192.625C2.20557%20220.712%2025.0815%20243.531%2053.1921%20243.531C57.7375%20243.531%2062.1897%20242.935%2066.3625%20241.781C71.1128%20240.534%2075.5837%20238.598%2079.682%20236.123C82.3831%20234.466%2084.9353%20232.549%2087.2825%20230.446C97.64%20221.121%20104.16%20207.608%20104.16%20192.625C104.16%20164.539%2081.284%20141.683%2053.1735%20141.683V141.701Z'%20fill='%23F3D30F'/%3e%3cpath%20d='M86.7791%2088.2646C130.836%2084.1512%20154.624%2079.2189%20168.838%2071.1969C180.164%2064.7942%20189.385%2057.1072%20194.098%2050.0902C202.537%2037.5081%20203.729%2030.1934%20202.481%2028.146C193.055%2021.1849%20104.402%2016.2898%2021.5789%2015.4336L20.8896%2090.1445C26.2919%2091.131%2042.2567%2092.3966%2086.7791%2088.2646Z'%20fill='%23F3D30F'/%3e%3c/svg%3e";
const realtoratifLogo = "data:image/png;base64,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";
const caliprogarageLogo = "/assets/caliprogarage-logo-CjZuqe4o.jpg";
const caligaragedoorgatesLogo = "/assets/caligaragedoorgates-logo-zzXifHqh.jpg";
const sanjoseheatcoolingLogo = "/assets/sanjoseheatcooling-logo-DviCFJQ6.png";
const a1phoenixplumbingLogo = "/assets/a1phoenixplumbing-logo-6tYHhW8J.png";
const tamrsolutionsLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKiElEQVRYw52Xe5RX1XXH997n3Ht/r3nDgAMhgEaUQjK6hucAwvhEUaMCFgFN7CIry660K9YEX7zR0MRlmtqkLtuqy8IoD0uNUZKCAZYBRBAQUKQ8Ig4ww8wwM7+Z+T3uvWfv3T+6oFJNhZ7/zlr7fvfn3HXO3t+NcInrydmTyQu773DibjdecqUxFBViLifyD0J56Wd+QUkKZ65m1TuJaDCR9w4Yf4MGld2LX/x3/d965lIBJg2rGqIc/liB/kA2OE7KRRY9I6B14PjI0pXvuC0fN7feOHbEdo3jQ6JuNLrwFgizhSnfurJly8ET/Hk9vJTkC+8dUwJcfERUtptUn01L/nUzL168GMu6j0DryZOlZIIeD2IrrvtaBeBEUH4owqiguZ4rEWQOkMk5MC89tW538yUDLLtvfJILPd9zAJ0mWdJI7DRmHgUII8Amfrf81W1N/7TiMWzaveFOYTcMjTEGYagIHQdjdyQS6ffDXOddgHQVBYnli1btKAIA0MUkXz673krYe48qq4JZbRQ1inkCCA9EhX3E0dh/XPYIdrY3o6jWAiUOGEocFTG7BXQLqtwaFXtr/XTfNQiKEEd157S/EuCx+6egi/JjRGQSe+mXnlq/L3Qsw1ThMrDBm16mfL8i0ZljH/pDh1yuSOYoAtSjoQMMFCl5nwHRL1Xi+4rFjhpraCOiTv7J96fZiwIICtlqZTdDyLS7REXh6Xm3kzU63PPMluVrdoZ1N3w3RhWU3s7q6X+5QJGCNwxoCMwZQ9JrVOci2QiJOkl1OiRK9ghodZxt/dpXAiy+rz4A4emAtBGNPY1EEHa1pMTF1WqCswAAt86Zowh4RMnUPvnA9ebK+pt60QYvg/JcVBiARG8KF+exQjMK93NRkQzQRyh8zcHNq/FPAvxk3k0EUa5BAJmSZX8QMABAIEhlDNQ7eGSD+5+3REdUtcZH8Ob81RKVkv5NQvYZRKpEcX2U7MuE5BSBnIstef5WIDPijZUv2S8F0N27sZg9ezkLj1cyq8GFvlGRIJ0RY6kCrTn64ONLFABg0ZxJKRG5lZB22XRV+Mj9U82Ym6bBjO//TRNa/1eAOE7jaIZyfI0wpxUwr4InhaNyLXRUfCnA0p//dVoVZgqYtcZLZNmFdaqyd8igwQrCg9RFzQAA82dNMS4sTFXQ08b3P8y1nijBfNfoOHYwYspMXdi4rRnI/BwQNrHg7xXMs2L8QqZ6UJ4QO9nxoC8APPXQ3chRcSooHLdB8kQchTezaCUas/fYnq0pdlpNxjsDACAKEKvdaz2zrbR6oJC6cYEUde/Wt2Hh9FH9Fs0Y8w3PpOLl6z7cp6nSdbFgExdC88NfrBYl77AC1H6hEC3587FDXVSY48g+J+wmEJlWJLtvyOibok93/rYOAE3VFSN3PrzixQvq+hOzxpaSuOmIQWMc5QwyzyYyFg0dFZA2YPgWgKYFKY9o1wUm/qYq3mgv+PWzxvjqotsQzW9PetfkMvTZtq4+9T0Jz3N04ijlwSeDtP/hFS/qQ/OfwWxvZAqFmDNlGehperM8wOKO5qrro6qO9wZ62LMtSXxM1H1TREoJ6D/IT581HE1D5WGAVCRh7wIAlXikKqeakvUft8T9JxRo0DDbGTeVBnZn/7JE+6H0NBuzDl+j737w6nd+7OW1cp5g+vdRj5xuSU+9x4NwJfcUK07ZyXegx58q2HjzqsfeP6e/aNboAFx0tQKdQtbaWGHX+W647MEG34X5OUDw5qn0LS2K0llQujYdJDeW+ab7ZJenIcNVEdEVh3+3c/8P517H7+49NdEarPLVdYboTYjA2yJeMhalSZawCRBq5tZi5+Q/GzB60rD+NSxuIhERoo5X0JySXXv+EnI+W6tkQk2UHJ4wuEu6cs29llBtMtPb+MKPikWxfQyagNCr6S26ihtvvk1VsIWVy6M46u8E2lAJUC0QYF9mHSVCu4mgR0WaXBz3KOsma+kTFZcRpMZla/fk6b+LzlSjLPWouhkiTpw5sGFslS1aEE7EhV573dTvokOoEqSjBHoQBL4+8bbvEIATFjwdkVfFoiyOKY7yJCodiPY/QXXosVx1MReZ00W/+uNEYEo4isex4tNL1zzeDgBgAQBcb/tgIirBIH2Yo/y3jUBrDpKkJPsp6krV9Ouba8kXPBdGrSZTdtgjzJRXViR7HDaHMTcLghiMswkomLjYi5DosweR96Byn358pMawG5/yip+gC2eKwqqrx17/GeJMBQAwrzy7CLOnjlynqs0q3IkqNwQlFav+eWVjcfSI4af6lCXLUn5JBRXyEkc5CMJs22WlKU74SQjIdZUlSCpTHH+9ymtNoARS7DEVQXR2QDm1rvmXpS0N1w4LAmAAV5zBgK+my/p88tDPXjv/hE1tHw3YFe8EhA2OTMSAPgd9T9Rfc7XtjP04k05y6OIchJ35fqnOqki0U5Sd7/s55TDyrXC6cDQVKfUWwyhfyIdh0qeoKv8JNowcWOZrT6Aczhbmdema4Qfnv/DWBfXDxmFvJaqrpES6w6QGF6Ni9m3Mnb0O0Du05rX1pwEgCwCwcOaowRxRfd++gw4tf/4VaWraji8/scCLu7qHxQKDTLHlrUpSGRoUM64QDQYX16vxDsUQTlTVt5lS++f/cs0XTKm1BGUANlfef0jY1tYDkGsbyoQV1scz54Kee/R72HH8g5Eg/Mfi2U5dcHddxfM/eGgEkPc1AekwqpsykvOiYni9gl4BgCeMMRtAottZdbcYb9eK13fpl/Udazz/MmFu72xqShHnpwhAP1Bav6xx63n32vHpgQoRGYVkn/O1uy6W+AoQ/aMTfitRVtZNHJW6KJ4szG1oE8+nypLserKz2XHW2fTGn67byX+q7VMcxQNVoU1dcboy542h1RPvur8DAOC15xbiwntHV4gr/IUq7xOgASI6AIx9Y8Wv97/3zK/3ZDmKjYviBgA9aBMlO5IpP+Z87hZWrgqF1/7033bG/5fpsSScVIC0IHwapNObF6zaLrB2N8yfPs47sPk3oxHczYiy30tkNjjnpvnWbFq8elf+vAAXBykie6V9j8dRjJJvbWCWOjXeL372m/35r7J8RAZKQF0tGdqxYNV2AQBYNGN0qcfhLFW9XBRfoJJ+r4v6HqBNpPvWZC8YLFTKCKk1yucQCu0NMfM0JfvCbffO6bwYx22VuQIACl6qrO2JB6ai9LYPieLwBg/xAwoS+5a+9h4DADx+d20JGcIf/cN6ueAEnm+V/IwNs2NV43sd4N/e8INnT4+fMkUvBoBUEQDsu0++tJFt2JXyUe5CY9+idNWec8kBAHxSm7Cm5/MfP/7grchxWKpRrlI5nqdAv/JKK45NucjkAABkDLYj8AlEBAeGFYkDP3CLV76jF85woqISnNs/OnsCSrZtiCDUAefvUYRG9jIfLnnlXb2UcY8E7Vn0E2kAgJLqQSECbhUXf3vx3Abv84GxyWSLlD4GALBi/gNo893DrEQPI8djBXA9++nNT6/eIZc67BKT95FjGL5wTgM9+veNqsbfjygRh91Xfj7wqvF3dH/j2obdj91/o5c79tFIlPjvSKNxCrrGUeb1p1e/7+D/sf4LJ+HDbFULGyEAAAAASUVORK5CYII=";
const susanLogo = "/assets/culturehijab-logo-D3bqhgE4.png";
const luxmarkLogo = "/assets/luxmark-logo-DtsuxfhK.jpg";
const agogLogo = "data:image/png;base64,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";
const ambleLogo = "data:image/png;base64,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";
const albakirbarbershopLogo = "/assets/albakirbarbershop-logo-C8wfUWbX.png";
const thelongshotincLogo = "/assets/thelongshotinc-logo-hgLjmdXi.jpg";
const silentedgecoLogo = "/assets/silentedgeco-logo-BW1NJjA_.png";
const myexploreislamLogo = "/assets/myexploreislam-logo-mPqwxpUf.png";
const CORAL = "oklch(0.7 0.21 22)";
const SANS = "'Space Grotesk', system-ui, sans-serif";
const SERIF = "'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const MONO = "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace";
function SquareMonogram({ letters, text, sub, tone = "coral", className }) {
  const bg = tone === "coral" ? CORAL : "currentColor";
  const fg = tone === "coral" ? "#fff" : "var(--card, #fff)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "10", width: "40", height: "40", rx: "8", fill: bg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "24", y: "37", fontFamily: SANS, fontWeight: 800, fontSize: 20, fill: fg, textAnchor: "middle", children: letters }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "54", y: sub ? 32 : 38, fontFamily: SANS, fontWeight: 700, fontSize: 20, fill: "currentColor", letterSpacing: -0.4, children: text }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "54", y: "46", fontFamily: SANS, fontWeight: 500, fontSize: 9, fill: "currentColor", opacity: 0.55, letterSpacing: 2, children: sub.toUpperCase() })
  ] });
}
function CircleMonogram({ letter, text, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "30", r: "20", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "24", y: "37", fontFamily: SERIF, fontWeight: 700, fontSize: 22, fill: "currentColor", textAnchor: "middle", fontStyle: "italic", children: letter }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "52", y: "37", fontFamily: SERIF, fontWeight: 600, fontSize: 22, fill: "currentColor", letterSpacing: -0.2, children: text })
  ] });
}
function BadgePill({ text, className }) {
  const w = 12 + text.length * 12;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${w + 20} 60`, className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "15", width: w + 12, height: "30", rx: "15", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: (w + 20) / 2, y: "35", fontFamily: SANS, fontWeight: 800, fontSize: 13, fill: "currentColor", textAnchor: "middle", letterSpacing: 2, children: text.toUpperCase() })
  ] });
}
function IconWord({ text, sub, glyph, className }) {
  const G = {
    roof: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 34 L24 14 L42 34", fill: "none", stroke: CORAL, strokeWidth: "3", strokeLinejoin: "round" }),
    drop: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 8 C 16 22, 12 30, 24 40 C 36 30, 32 22, 24 8 Z", fill: CORAL }),
    sun: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "26", r: "7", fill: CORAL }),
      [...Array(8)].map((_, i) => {
        const a = i * Math.PI / 4;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 24 + Math.cos(a) * 11, y1: 26 + Math.sin(a) * 11, x2: 24 + Math.cos(a) * 15, y2: 26 + Math.sin(a) * 15, stroke: CORAL, strokeWidth: "2.5", strokeLinecap: "round" }, i);
      })
    ] }),
    tooth: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 12 C 10 12, 8 18, 12 26 L 14 40 L 18 30 L 22 38 L 26 30 L 30 40 L 32 26 C 36 18, 34 12, 30 12 C 24 12, 24 16, 22 16 C 20 16, 20 12, 14 12 Z", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
    gavel: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "18", width: "24", height: "8", rx: "1", transform: "rotate(-25 22 22)", fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "24", y: "30", width: "14", height: "4", fill: CORAL })
    ] }),
    house: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 34 L24 16 L40 34 L40 44 L8 44 Z", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinejoin: "round" }),
    leaf: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 40 C 12 22, 26 12, 40 12 C 40 26, 30 40, 12 40 Z", fill: CORAL, opacity: "0.85" }),
    spark: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 8 L27 22 L40 24 L27 26 L24 40 L21 26 L8 24 L21 22 Z", fill: CORAL }),
    wave: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 30 Q 14 20, 22 30 T 42 30", fill: "none", stroke: CORAL, strokeWidth: "3", strokeLinecap: "round" }),
    wrench: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M32 12 A 8 8 0 1 0 40 20 L 30 30 L 20 20 Z", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
    flame: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 8 C 30 18, 34 22, 32 30 C 30 38, 22 40, 20 32 C 18 26, 22 24, 20 18 C 24 20, 26 14, 24 8 Z", fill: CORAL }),
    tree: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 8 L14 22 L20 22 L10 36 L20 36 L14 44 L34 44 L28 36 L38 36 L28 22 L34 22 Z", fill: CORAL, opacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "21", y: "44", width: "6", height: "6", fill: "currentColor" })
    ] }),
    anchor: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "12", r: "4", fill: "none", stroke: CORAL, strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "24", y1: "16", x2: "24", y2: "40", stroke: CORAL, strokeWidth: "2.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 32 Q 24 46, 36 32", fill: "none", stroke: CORAL, strokeWidth: "2.5", strokeLinecap: "round" })
    ] }),
    car: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "8", y: "26", width: "32", height: "10", rx: "3", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 26 L 16 18 L 32 18 L 36 26", fill: "none", stroke: CORAL, strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "38", r: "3", fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "38", r: "3", fill: "currentColor" })
    ] })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: G[glyph] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "54", y: sub ? 30 : 37, fontFamily: SANS, fontWeight: 700, fontSize: 18, fill: "currentColor", letterSpacing: -0.3, children: text }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "54", y: "44", fontFamily: SANS, fontWeight: 500, fontSize: 9, fill: "currentColor", opacity: 0.55, letterSpacing: 2, children: sub.toUpperCase() })
  ] });
}
function UnderlinedSerif({ text, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "36", fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, fontSize: 26, fill: "currentColor", letterSpacing: 0, children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 45 C 60 40, 160 40, 250 46", fill: "none", stroke: CORAL, strokeWidth: "2.5", strokeLinecap: "round" })
  ] });
}
function StackedBar({ top, bottom, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "14", width: "3", height: "32", fill: CORAL }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "18", y: "28", fontFamily: SANS, fontWeight: 800, fontSize: 16, fill: "currentColor", letterSpacing: 2, children: top.toUpperCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "18", y: "44", fontFamily: SANS, fontWeight: 500, fontSize: 10, fill: "currentColor", opacity: 0.6, letterSpacing: 3, children: bottom.toUpperCase() })
  ] });
}
function BracketMono({ text, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "6", y: "38", fontFamily: MONO, fontWeight: 700, fontSize: 22, fill: CORAL, children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "22", y: "38", fontFamily: MONO, fontWeight: 700, fontSize: 20, fill: "currentColor", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 22 + text.length * 12.5, y: "38", fontFamily: MONO, fontWeight: 700, fontSize: 22, fill: CORAL, children: "]" })
  ] });
}
function DottedMark({ text, sub, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    [...Array(9)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 8 + i % 3 * 8, cy: 16 + Math.floor(i / 3) * 8, r: i === 4 ? 3 : 1.6, fill: i === 4 ? CORAL : "currentColor", opacity: i === 4 ? 1 : 0.5 }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: sub ? 30 : 37, fontFamily: SANS, fontWeight: 700, fontSize: 19, fill: "currentColor", letterSpacing: -0.3, children: text }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: "44", fontFamily: SANS, fontWeight: 500, fontSize: 9, fill: "currentColor", opacity: 0.55, letterSpacing: 2, children: sub.toUpperCase() })
  ] });
}
function CrestMark({ left, right, sub, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 260 60", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "130", y: "34", fontFamily: SERIF, fontWeight: 600, fontSize: 22, fill: "currentColor", textAnchor: "end", letterSpacing: 1, children: left }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "135", y: "34", fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, fontSize: 22, fill: CORAL, textAnchor: "middle", children: "&" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "140", y: "34", fontFamily: SERIF, fontWeight: 600, fontSize: 22, fill: "currentColor", letterSpacing: 1, children: right }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "130", y: "48", fontFamily: SANS, fontWeight: 500, fontSize: 9, fill: "currentColor", textAnchor: "middle", opacity: 0.6, letterSpacing: 4, children: sub.toUpperCase() })
  ] });
}
const NorthmarkLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StackedBar, { top: "NORTHMARK", bottom: "STUDIO", className: p.className });
const HalcyonLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleMonogram, { letter: "H", text: "Halcyon Labs", className: p.className });
const VertaLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(UnderlinedSerif, { text: "verta.", className: p.className });
const KestrelLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(CrestMark, { left: "Kestrel", right: "Co.", sub: "est. 2016", className: p.className });
const MeridianLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SquareMonogram, { letters: "M", text: "MERIDIAN", sub: "Freight", className: p.className });
const LumenLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Lumen Care", glyph: "spark", className: p.className });
const RidgelineHvacLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Ridgeline", sub: "HVAC · Denver", glyph: "flame", className: p.className });
const BluefinPlumbingLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "BlueFin", sub: "Plumbing", glyph: "drop", className: p.className });
const IroncladRoofingLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(BadgePill, { text: "Ironclad Roofing", className: p.className });
const OaktreeDentalLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "OakTree", sub: "Dental", glyph: "tooth", className: p.className });
const SableStoneLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(CrestMark, { left: "Sable", right: "Stone", sub: "Luxury Realty", className: p.className });
const CopperfieldLawLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Copperfield", sub: "Attorneys", glyph: "gavel", className: p.className });
const NorthlineMoversLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StackedBar, { top: "NORTHLINE", bottom: "Movers · Seattle", className: p.className });
const CascadeDuctLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(DottedMark, { text: "Cascade", sub: "Duct Care", className: p.className });
const SunPeakSolarLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "SunPeak", sub: "Solar Co.", glyph: "sun", className: p.className });
const ClearWaterPoolLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "ClearWater", sub: "Pool Co.", glyph: "wave", className: p.className });
const MeridianWealthLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(UnderlinedSerif, { text: "Meridian Wealth", className: p.className });
const HalcyonMedspaLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleMonogram, { letter: "H", text: "Halcyon Med Spa", className: p.className });
const AsterHomeLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SquareMonogram, { letters: "A", text: "ASTER", sub: "Home Services", className: p.className });
const FoxgloveInteriorsLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(UnderlinedSerif, { text: "Foxglove", className: p.className });
const RedwoodHvacLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Redwood", sub: "HVAC", glyph: "wrench", className: p.className });
const SkylineRoofingLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Skyline", sub: "Roofing", glyph: "roof", className: p.className });
const BeaconLegalLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(BracketMono, { text: "Beacon.Legal", className: p.className });
const HarborDentalLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Harbor", sub: "Dental Group", glyph: "anchor", className: p.className });
const TrailheadMoversLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StackedBar, { top: "TRAILHEAD", bottom: "Movers · PNW", className: p.className });
const VerdantLandscapingLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Verdant", sub: "Landscaping", glyph: "tree", className: p.className });
const CobaltAutoLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Cobalt", sub: "Auto Detailing", glyph: "car", className: p.className });
const AnchorHomeLogo = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconWord, { text: "Anchor", sub: "Home Services", glyph: "house", className: p.className });
const generatedLogos = [
  { name: "Northmark Studio", Component: NorthmarkLogo },
  { name: "Halcyon Labs", Component: HalcyonLogo },
  { name: "Verta Retail", Component: VertaLogo },
  { name: "Kestrel & Co.", Component: KestrelLogo },
  { name: "Meridian Freight", Component: MeridianLogo },
  { name: "Lumen Care Group", Component: LumenLogo }
];
const usServiceLogos = [
  { name: "Ridgeline HVAC", Component: RidgelineHvacLogo },
  { name: "BlueFin Plumbing", Component: BluefinPlumbingLogo },
  { name: "Ironclad Roofing", Component: IroncladRoofingLogo },
  { name: "OakTree Dental", Component: OaktreeDentalLogo },
  { name: "Sable & Stone Realty", Component: SableStoneLogo },
  { name: "Copperfield Law", Component: CopperfieldLawLogo },
  { name: "Northline Movers", Component: NorthlineMoversLogo },
  { name: "Cascade Duct Care", Component: CascadeDuctLogo },
  { name: "SunPeak Solar", Component: SunPeakSolarLogo },
  { name: "ClearWater Pool Co.", Component: ClearWaterPoolLogo },
  { name: "Meridian Wealth", Component: MeridianWealthLogo },
  { name: "Halcyon Med Spa", Component: HalcyonMedspaLogo },
  { name: "Aster Home Services", Component: AsterHomeLogo },
  { name: "Foxglove Interiors", Component: FoxgloveInteriorsLogo },
  { name: "Redwood HVAC", Component: RedwoodHvacLogo },
  { name: "Skyline Roofing", Component: SkylineRoofingLogo },
  { name: "Beacon Legal", Component: BeaconLegalLogo },
  { name: "Harbor Dental Group", Component: HarborDentalLogo },
  { name: "Trailhead Movers", Component: TrailheadMoversLogo },
  { name: "Verdant Landscaping", Component: VerdantLandscapingLogo },
  { name: "Cobalt Auto Detailing", Component: CobaltAutoLogo },
  { name: "Anchor Home Services", Component: AnchorHomeLogo }
];
const topLogos = [
  { name: "Enfield Royal Clinics", src: enfieldroyalLogo },
  { name: "Dubai Safari Park", src: dubaisafariLogo },
  { name: "Expo's KSA", src: exposksaLogo },
  { name: "Culture Hijab", src: susanLogo },
  { name: "Luxmark", src: luxmarkLogo },
  { name: "AGOG", src: agogLogo },
  { name: "Amble", src: ambleLogo },
  { name: "TAMR Solutions", src: tamrsolutionsLogo },
  { name: "My Explore Islam", src: myexploreislamLogo },
  { name: "Susan", src: susanLogo },
  { name: "Realtor Atif", src: realtoratifLogo },
  ...generatedLogos.map((g) => ({ name: g.name, Component: g.Component }))
];
const bottomLogos = [
  { name: "The Ductibles", src: theductiblesLogo },
  { name: "Cali Pro Garage", src: caliprogarageLogo },
  { name: "Cali Garage Doors", src: caligaragedoorgatesLogo },
  { name: "San Jose Heat & Cooling", src: sanjoseheatcoolingLogo },
  { name: "A1 Phoenix Plumbing", src: a1phoenixplumbingLogo },
  { name: "Al Bakir Barbershop", src: albakirbarbershopLogo },
  { name: "The Longshot Inc.", src: thelongshotincLogo },
  { name: "Silent Edge Co.", src: silentedgecoLogo },
  ...usServiceLogos.map((g) => ({ name: g.name, Component: g.Component }))
];
function TrustedBy() {
  const rowA = [...topLogos, ...topLogos];
  const rowB = [...bottomLogos.slice().reverse(), ...bottomLogos.slice().reverse()];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-[40rem] h-40 bg-coral/10 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10 sm:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " Trusted by"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-balance", children: [
          "The names that let us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "into their P&L." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-muted-foreground", children: "A visible slice of the roster, US home services, healthcare groups, luxury retail, hospitality and B2B SaaS. Hundreds more ship under NDA and white-label." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, { items: rowA, direction: "left", duration: 42 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, { items: rowB, direction: "right", duration: 50 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5", children: [
        { v: "Hundreds", l: "Websites shipped" },
        { v: "20+", l: "Industries served" },
        { v: "5", l: "Countries · one team" },
        { v: "99.98%", l: "Production uptime" }
      ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.07 },
          className: "rounded-2xl bg-card/40 backdrop-blur border border-border p-4 sm:p-5 text-center hover:border-coral/40 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl font-bold text-coral", children: m.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground", children: m.l })
          ]
        },
        m.l
      )) })
    ] })
  ] });
}
function MarqueeRow({
  items: items2,
  direction,
  duration
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "flex gap-3 sm:gap-4 w-max",
      animate: { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] },
      transition: { duration, repeat: Infinity, ease: "linear" },
      children: items2.map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          title: logo.name,
          className: "shrink-0 h-16 sm:h-20 w-36 sm:w-44 px-4 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-coral/40 hover:-translate-y-0.5 transition-all",
          children: logo.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo.src,
              alt: `${logo.name} logo`,
              loading: "lazy",
              className: "max-h-10 sm:max-h-12 max-w-full object-contain"
            }
          ) : logo.Component ? /* @__PURE__ */ jsxRuntimeExports.jsx(logo.Component, { className: "max-h-8 sm:max-h-10 w-auto text-navy-deep" }) : null
        },
        `${logo.name}-${i}`
      ))
    }
  ) });
}
const faqs = [
  { cat: "Delivery", q: "How fast can you start my project?", a: "We typically kick off discovery within 3 to 5 business days of signing. Most projects start design or build the following week. Urgent? Ask about our rapid launch track." },
  { cat: "Delivery", q: "Do you work with startups or only enterprises?", a: "Both. We ship everything from lean MVPs for pre-seed founders to industrial-scale platforms serving millions of users." },
  { cat: "Pricing", q: "What does it cost?", a: "Every engagement is scoped and quoted individually. After a free 20 minute intro call we send a fixed, itemised proposal within 48 hours. No hourly surprises, no retainers you can't cancel." },
  { cat: "Support", q: "Do you sign NDAs before the first call?", a: "Yes, always. Send us your NDA or use ours, we counter-sign within the same business day, and only then do you brief us on anything sensitive." },
  { cat: "Tech", q: "Can you take over an existing codebase or ad account?", a: "Yes. Roughly 40% of our engagements start as rescues. We audit, stabilise, then improve, usually within the first two weeks, with zero downtime handover." },
  { cat: "Tech", q: "Who owns the code and assets?", a: "You do. 100%. We hand over clean repos, design files, ad accounts and admin access at every milestone. No vendor lock in, ever." },
  { cat: "Support", q: "Do you guarantee SEO rankings or ad ROAS?", a: "We don't promise rankings, anyone who does is lying. We DO promise transparent reporting, weekly optimisation, and measurable progress against the KPIs we set together upfront." },
  { cat: "Pricing", q: "What if I just need one service, not the bundle?", a: "Totally fine. Pick one, SEO, ads, dev, design, video, or combine. Many clients start with one project and expand once they see results." }
];
const CATS = ["All", "Delivery", "Pricing", "Tech", "Support"];
function FAQ() {
  const [cat, setCat] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(0);
  const list = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return faqs.map((f, i) => ({ ...f, i })).filter((f) => (cat === "All" || f.cat === cat) && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)));
  }, [cat, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-8 lg:gap-14 items-start min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " The first-call questions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
          "What founders ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "always ask us." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base text-muted-foreground max-w-md", children: "Filter, search, expand. If yours isn't here, we'll answer it in 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "mt-5 inline-flex items-center gap-2 rounded-full bg-coral-grad text-white px-5 py-2.5 text-sm font-semibold shadow-glow hover:scale-105 transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " Ask us anything"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2 pb-1", children: CATS.map((c) => {
          const active = c === cat;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCat(c),
              className: `px-4 py-1.5 rounded-full text-xs font-semibold border transition-all min-h-[36px] ${active ? "bg-coral text-white border-coral shadow-glow" : "bg-card/50 backdrop-blur border-border text-foreground/70 hover:border-coral/50"}`,
              children: c
            },
            c
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "search",
              value: q,
              onChange: (e) => setQ(e.target.value),
              placeholder: "Search questions...",
              className: "w-full pl-11 pr-4 py-3 rounded-full bg-card/60 backdrop-blur border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/60 transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: list.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              layout: true,
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.25 },
              className: "glass rounded-2xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setOpen(open === f.i ? null : f.i),
                    className: "w-full flex items-start justify-between gap-3 px-4 sm:px-5 py-4 text-left min-w-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-coral shrink-0", children: f.cat }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm sm:text-base break-words min-w-0", children: f.q })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { rotate: open === f.i ? 45 : 0 }, className: "h-7 w-7 rounded-full bg-coral/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 text-coral" }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open === f.i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.25 },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 sm:px-5 pb-4 text-sm text-muted-foreground leading-relaxed break-words", children: f.a })
                  }
                ) })
              ]
            },
            f.i
          )) }),
          list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-sm text-muted-foreground", children: [
            "No matches. Try a different keyword or ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "text-coral font-semibold", children: "ask us directly" }),
            "."
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustedBy, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Platforms, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalPresence, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
