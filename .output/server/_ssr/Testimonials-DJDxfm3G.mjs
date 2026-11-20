import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { l as Star, U as Users, K as Award, N as ShieldCheck, n as TrendingUp, A as ArrowRight, Q as Quote } from "../_libs/lucide-react.mjs";
function useMobileAutoScroll(ref, { intervalMs = 3500, breakpoint = 640 } = {}) {
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mql.matches || reduced.matches) return;
    let paused = false;
    let inView = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    const onTouchStart = () => paused = true;
    const onTouchEnd = () => {
      window.setTimeout(() => paused = false, 2500);
    };
    const onVisibility = () => paused = document.visibilityState === "hidden";
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    const timer = window.setInterval(() => {
      if (paused || !inView) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const first = el.firstElementChild;
      const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.85;
      const next = el.scrollLeft + step;
      const target = next > max - 4 ? 0 : next;
      el.scrollTo({ left: target, behavior: "smooth" });
    }, intervalMs);
    return () => {
      window.clearInterval(timer);
      io.disconnect();
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ref, intervalMs, breakpoint]);
}
const t1 = "/assets/t1-sara-CSkDOztZ.jpg";
const t2 = "/assets/t2-james-rDRNdij6.jpg";
const t3 = "/assets/t3-priya-9vjPIcyw.jpg";
const t4 = "/assets/t4-david-BFCOJcUp.jpg";
const t5 = "/assets/t5-mariam-D8XvIach.jpg";
const t6 = "/assets/t6-antti-xUbOj62i.jpg";
const t7 = "/assets/t7-rachel-p1J6oJL3.jpg";
const t8 = "/assets/t8-michael-DHS3NAp4.jpg";
const t9 = "/assets/t9-ahmed-CbEDAung.jpg";
const t10 = "/assets/t10-fahad-CXJ6Woh0.jpg";
const t11 = "/assets/t11-layla-DNw_QoZw.jpg";
const t12 = "/assets/t12-ben-Co-OtvgW.jpg";
const items = [
  { q: "Origami99 rebuilt our storefront and ran our ads. Revenue tripled in four months. The only agency I've ever recommended without hesitation.", n: "Sara Khan", r: "Founder", c: "Nora Skincare", tag: "Ecommerce", metric: "3.1x revenue in 120 days", region: "🇵🇰 Karachi", avatar: t1 },
  { q: "Their AI integration cut our support tickets by 60%. ROI was clear inside the first month. Genuine, brilliant team.", n: "James O'Connor", r: "CTO", c: "FinTrack", tag: "SaaS · AI", metric: "−60% support tickets", region: "🇮🇪 Dublin", avatar: t2 },
  { q: "We've worked with six agencies. None came close. Weekly demos, zero scope creep, and SEO results that finally moved revenue.", n: "Priya Mehta", r: "Marketing Director", c: "Apex Legal", tag: "SEO", metric: "18k organic clicks / mo", region: "🇬🇧 London", avatar: t3 },
  { q: "Shipped a production grade app in nine weeks. The code quality is the best we've ever audited. Hire them before your competitor does.", n: "David Chen", r: "VP Engineering", c: "PortLogix", tag: "Custom Software", metric: "9 week ship", region: "🇺🇸 Austin", avatar: t4 },
  { q: "Beautiful brand work AND it converted. Inbound leads jumped 5x within 90 days of the relaunch. Worth every penny.", n: "Mariam Yusuf", r: "CEO", c: "Halcyon Studios", tag: "Branding", metric: "5x inbound leads", region: "🇦🇪 Dubai", avatar: t5 },
  { q: "They took over an abandoned codebase, stabilised it in a week, and shipped features the previous team said were impossible.", n: "Antti Virtanen", r: "Head of Product", c: "Susan.fi", tag: "Rescue · AI", metric: "0 downtime handover", region: "🇫🇮 Helsinki", avatar: t6 },
  { q: "Our Google Ads spend was hemorrhaging. They restructured everything in two weeks and dropped our CAC by 42%.", n: "Rachel Thompson", r: "Growth Lead", c: "BrightPath Health", tag: "Paid Media", metric: "−42% CAC", region: "🇨🇦 Toronto", avatar: t7 },
  { q: "The dispatch platform they built runs our entire fleet 24/7. Driver churn is down, order fulfilment is up, and it just works.", n: "Michael O'Sullivan", r: "Operations Director", c: "PowerCabs", tag: "Custom Software", metric: "24/7 uptime, 500+ drivers", region: "🇮🇪 Dublin", avatar: t8 },
  { q: "They rebuilt our WordPress site and technical SEO from scratch. We now rank page one for terms competitors pay thousands to bid on.", n: "Dr. Ahmed Raza", r: "Managing Director", c: "Enfield Royal Clinics", tag: "SEO · WordPress", metric: "Page 1 for 120+ terms", region: "🇵🇰 Islamabad", avatar: t9 },
  { q: "Bilingual, government-grade, delivered under a tight deadline. Their attention to Arabic UX was unlike any western agency we've hired.", n: "Fahad Al Otaibi", r: "Marketing Lead", c: "Expo's KSA", tag: "Web · Bilingual", metric: "Delivered 2 weeks early", region: "🇸🇦 Riyadh", avatar: t10 },
  { q: "We interviewed twelve agencies. Origami99 was the only one that showed working prototypes on the discovery call. That's who we hired.", n: "Layla Karim", r: "Founder", c: "Culture Hijab", tag: "Shopify", metric: "+220% AOV vs old site", region: "🇨🇦 Vancouver", avatar: t11 },
  { q: "Senior team from day one. No account managers to filter through, no juniors learning on our budget. Just people who ship.", n: "Ben Whitaker", r: "COO", c: "The Longshot Inc.", tag: "Retainer", metric: "18 months retainer, still going", region: "🇨🇦 Calgary", avatar: t12 }
];
const trustBadges = [
  { icon: Star, label: "4.9 average", sub: "80+ verified reviews" },
  { icon: Users, label: "97% retention", sub: "clients past 12 months" },
  { icon: Award, label: "Featured on Clutch", sub: "& GoodFirms top lists" },
  { icon: ShieldCheck, label: "NDA-friendly", sub: "since 2019" }
];
function Testimonials() {
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 right-1/4 w-[35rem] h-40 bg-coral/10 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 text-center mb-10 sm:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
        " In our clients' words"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
        "Founders, CTOs and CMOs ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "bet their quarter on us." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto", children: "Twelve unedited stories from twelve industries. Real names, real companies, real numbers we can back up on request." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto", children: trustBadges.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: "flex items-center gap-3 rounded-xl bg-card/60 backdrop-blur border border-border px-3 py-2.5 text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-coral/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-4 w-4 text-coral" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-bold text-foreground truncate", children: b.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: b.sub })
            ] })
          ]
        },
        b.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, { items: rowA, direction: "left", duration: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, { items: rowB, direction: "right", duration: 95 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCarousel, { items }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-5 lg:px-8 mt-12 sm:mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-coral mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
          " Your story next"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl font-bold", children: "Book a free 20-minute intro." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: "No pitch deck. We diagnose the bottleneck and send a plan within 48 hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-coral/50 transition-colors", children: "See case studies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center justify-center gap-2 rounded-full bg-coral-grad px-5 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform", children: [
          "Book intro call ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] });
}
function Card({ t }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 w-[320px] sm:w-[400px] rounded-3xl border border-border bg-card/70 backdrop-blur p-6 sm:p-7 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-2 -right-2 h-24 w-24 text-coral/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-coral", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-coral bg-coral/10 border border-coral/20 rounded-full px-2 py-0.5", children: t.tag })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/90 leading-relaxed mb-4 text-sm sm:text-[15px]", children: [
      '"',
      t.q,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-coral/10 border border-coral/20 px-3 py-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-coral", children: "Outcome" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: t.metric })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: t.avatar,
          alt: `${t.n}, ${t.r} at ${t.c}`,
          loading: "lazy",
          width: 40,
          height: 40,
          className: "h-10 w-10 rounded-full object-cover ring-2 ring-coral/40 shrink-0"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm truncate", children: t.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
          t.r,
          " · ",
          t.c,
          " · ",
          t.region
        ] })
      ] })
    ] })
  ] });
}
function MarqueeRow({ items: items2, direction, duration }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "flex gap-5 w-max",
      animate: { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] },
      transition: { duration, repeat: Infinity, ease: "linear" },
      children: items2.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { t }, `${t.n}-${i}`))
    }
  ) });
}
function MobileCarousel({ items: items2 }) {
  const ref = reactExports.useRef(null);
  const [active, setActive] = reactExports.useState(0);
  useMobileAutoScroll(ref, { intervalMs: 4e3 });
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / items2.length;
      setActive(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items2.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: "flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 pb-4",
        style: { scrollbarWidth: "none" },
        children: items2.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { t }) }, i))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1.5 mt-2", children: items2.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-coral" : "w-1.5 bg-foreground/20"}`
      },
      i
    )) })
  ] });
}
export {
  Testimonials as T,
  useMobileAutoScroll as u
};
