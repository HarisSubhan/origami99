import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { u as useIsMobile } from "./use-mobile-BsFue-bT.mjs";
import { i as Sparkles, O as Pause, W as Play, E as ExternalLink } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
function BrowserFrame({ url, children, className = "", aspect = "16 / 10" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative rounded-xl overflow-hidden bg-card border border-border shadow-2xl ${className}`,
      style: { boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--foreground) 25%, transparent), 0 0 0 1px color-mix(in oklab, var(--foreground) 4%, transparent)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-muted border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
          url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 flex-1 truncate rounded-md bg-background/60 border border-border px-3 py-1 text-[11px] text-muted-foreground font-mono", children: url })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { aspectRatio: aspect }, className: "relative overflow-hidden", children })
      ]
    }
  );
}
function ShowroomStage({ project, index, total, autoAdvance, onToggleAuto, reduced }) {
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setShown(false);
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, [project.slug]);
  const still = project.shotUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { url: project.domain, aspect: "16 / 10", className: "shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-[#0b0f1a]", children: [
        still && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: still,
            alt: `${project.client} website`,
            className: "absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out",
            style: { opacity: shown ? 1 : 0, transform: reduced ? "none" : `scale(${shown ? 1.04 : 1})` },
            decoding: "async"
          },
          project.slug
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest text-coral", children: "Shipped build" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 top-3 z-10 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 border border-border text-[10px] font-mono text-muted-foreground", children: [
          String(index + 1).padStart(2, "0"),
          " / ",
          String(total).padStart(2, "0")
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-[3px] w-full overflow-hidden rounded-full bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-coral transition-[width] duration-150 ease-linear",
          style: { width: "100%" }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.28 },
        className: "mt-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg sm:text-xl font-bold truncate", children: project.client }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-coral", children: project.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: project.tagline })
            ] }),
            project.outcome && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-widest text-muted-foreground", children: "Outcome" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm sm:text-base font-black text-coral leading-tight", children: project.outcome })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
            project.region && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] font-semibold text-muted-foreground", children: project.region }),
            project.stack?.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] font-mono text-muted-foreground", children: s }, s)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: onToggleAuto,
                  className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-semibold hover:border-coral/50 transition-colors",
                  "aria-label": autoAdvance ? "Pause auto play" : "Resume auto play",
                  children: [
                    autoAdvance ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3" }),
                    autoAdvance ? "Playing all" : "Paused"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-mono text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                " ",
                project.domain
              ] })
            ] })
          ] })
        ]
      },
      project.slug
    ) })
  ] });
}
function Filmstrip({
  items,
  activeSlug,
  onPick
}) {
  const scroller = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scroller.current?.querySelector(`[data-slug="${activeSlug}"]`);
    if (!el || !scroller.current) return;
    const box = scroller.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (r.left < box.left + 8 || r.right > box.right - 8) {
      scroller.current.scrollTo({ left: el.offsetLeft - box.width / 2 + r.width / 2, behavior: "smooth" });
    }
  }, [activeSlug]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: scroller,
      className: "flex gap-2 overflow-x-auto no-scrollbar pb-1 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]",
      children: items.map((p, i) => {
        const isActive = p.slug === activeSlug;
        const still = p.shotUrl;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            "data-slug": p.slug,
            onClick: () => onPick(p.slug),
            "aria-label": `Show ${p.client}`,
            className: `group relative shrink-0 w-[104px] sm:w-[132px] overflow-hidden rounded-md border transition-all duration-300 ${isActive ? "border-coral shadow-glow scale-[1.03]" : "border-border/70 opacity-60 hover:opacity-100 hover:border-coral/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] bg-[#0b0f1a]", children: still && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: still,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: false,
                  className: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-center gap-1 bg-gradient-to-t from-black/85 to-transparent px-1.5 py-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-white/50", children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[9px] font-semibold text-white/90", children: p.client })
              ] })
            ]
          },
          p.slug
        );
      })
    }
  ) });
}
function MobileDeck({ items, reduced }) {
  const scroller = reactExports.useRef(null);
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll("[data-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            setActiveIdx(Number(e.target.dataset.card));
          }
        });
      },
      { root, threshold: [0.6] }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [items.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scroller,
        className: "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 no-scrollbar",
        children: items.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-card": i, className: "w-[86vw] shrink-0 snap-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeckCard, { p, active: i === activeIdx, reduced }) }, p.slug))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2 text-[11px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: String(activeIdx + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-28 overflow-hidden rounded-full bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full bg-coral transition-[width] duration-300",
          style: { width: `${(activeIdx + 1) / Math.max(items.length, 1) * 100}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: String(items.length).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "Swipe" })
    ] })
  ] });
}
function DeckCard({ p, active }) {
  const still = p.shotUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `overflow-hidden rounded-2xl border bg-card/60 transition-all duration-300 ${active ? "border-coral/50 shadow-glow" : "border-border opacity-70"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] bg-[#0b0f1a]", children: [
      still && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: still,
          alt: `${p.client} website`,
          loading: "lazy",
          decoding: "async",
          className: "absolute inset-0 h-full w-full object-cover object-top"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 top-0 flex items-center justify-between px-2.5 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-background/70 px-2 py-0.5 text-[9px] font-mono text-muted-foreground backdrop-blur", children: p.domain }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-coral backdrop-blur", children: p.category })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold", children: p.client }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] leading-snug text-muted-foreground", children: p.tagline }),
      p.outcome && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-black text-coral", children: p.outcome })
    ] })
  ] });
}
const pcDashboard = "/assets/powercabs-dashboard-D9z0G6JC.jpg";
const theductiblesShot = "/assets/theductibles-shot-D9SGasUI.jpg";
const silentedgecoShot = "/assets/silentedgeco-shot-6IMIXHrZ.jpg";
const caliprogarageShot = "/assets/caliprogarage-shot-C_IwnQ_e.jpg";
const caligaragedoorgatesShot = "/assets/caligaragedoorgates-shot-Bh8GfMLS.jpg";
const sanjoseheatcoolingShot = "/assets/sanjoseheatcooling-shot-CzNPnZMi.jpg";
const snzventuresShot = "/assets/snzventures-shot-Dff3qoEt.jpg";
const exposksaShot = "/assets/exposksa-shot-CPNfTjTH.jpg";
const albakirbarbershopShot = "/assets/albakirbarbershop-shot-yHL6olpy.jpg";
const thelongshotincShot = "/assets/thelongshotinc-shot-CQ1vD_FT.jpg";
const realtoratifShot = "/assets/realtoratif-shot-xkSf3KC8.jpg";
const enfieldroyalShot = "/assets/enfieldroyal-shot-k1A-UlBh.jpg";
const dubaisafariShot = "/assets/dubaisafari-shot-BFszq4vD.jpg";
const tamrsolutionsShot = "/assets/tamrsolutions-shot-D_1b_HBH.jpg";
const culturehijabShot = "/assets/culturehijab-shot-BUNTu7SV.jpg";
const susanShot = "/assets/susan-shot-Co1VNx0d.jpg";
const hazelbeautybarShot = "/assets/hazelbeautybar-shot-bF8ZXg3N.jpg";
const myexploreislamShot = "/assets/myexploreislam-shot-BRGqW3Qi.jpg";
const glowieShot = "/assets/glowie-shot-BYNlVIC2.jpg";
const luxmarkShot = "/assets/luxmark-shot-BanIeJdg.jpg";
const agogShot = "/assets/agog-shot-jS9womde.jpg";
const ambleShot = "/assets/amble-shot-DyC-yAmz.jpg";
const a1phoenixplumbingShot = "/assets/a1phoenixplumbing-shot-CwJknllO.jpg";
const cmjDoorShot = "/assets/cmj-door-Bfai63F5.jpg";
const axonposShot = "/assets/axonpos-DJSH1lRh.jpg";
const alayaNoirShot = "/assets/alaya-noir-C6fECzGz.jpg";
const thomasForumShot = "/assets/thomas-forum-B9grMXe3.jpg";
const ambientShot = "/assets/ambient-DNxeURN7.jpg";
const projF79cShot = "/assets/proj-f79c-lSolL8cK.jpg";
const agogTravelShot = "/assets/agog-travel-wNUzs70s.jpg";
const electroluxPowerShot = "/assets/electrolux-power-H5vBuifN.jpg";
const evolveLagreeShot = "/assets/evolve-lagree-D6V1KWey.jpg";
const mrPureWaterShot = "/assets/mr-pure-water-Ba4yWh3W.jpg";
const rxlUsaShot = "/assets/rxl-usa-BkRtggx6.jpg";
const snzStudentShot = "/assets/snz-student-lUI5mnuL.jpg";
const snzGatewayShot = "/assets/snz-gateway-DxUg2Qe8.jpg";
const LIVE_STILLS = {
  "cmj-door": cmjDoorShot,
  "axonpos": axonposShot,
  "alaya-noir": alayaNoirShot,
  "thomas-forum": thomasForumShot,
  "ambient": ambientShot,
  "proj-f79c": projF79cShot,
  "agog-travel": agogTravelShot,
  "electrolux-power": electroluxPowerShot,
  "evolve-lagree": evolveLagreeShot,
  "mr-pure-water": mrPureWaterShot,
  "rxl-usa": rxlUsaShot,
  "snz-student": snzStudentShot,
  "snz-gateway": snzGatewayShot
};
const liveClip = (slug) => ({ shotUrl: LIVE_STILLS[slug] });
const projects = [
  // Recorded live builds
  { slug: "cmj-door", client: "CMJ Door & Hardware", domain: "cmjdoor.com", category: "Web", tagline: "Commercial door catalog with instant quote requests.", outcome: "Quote requests up 3.2x", region: "Miami, USA", stack: ["React", "Tailwind", "Forms API"], ...liveClip("cmj-door"), featured: true },
  { slug: "axonpos", client: "AxonPOS", domain: "axonpos.io", category: "Software", tagline: "Point of sale and stock control with live store analytics.", outcome: "24 stores on one system", region: "Multi region", stack: ["React", "Node", "Postgres"], ...liveClip("axonpos") },
  { slug: "alaya-noir", client: "Alaya Noir", domain: "alayanoir.com", category: "Ecommerce", tagline: "Luxury footwear storefront with editorial product pages.", outcome: "Add to cart up 64%", region: "UAE", stack: ["Headless", "Stripe"], ...liveClip("alaya-noir"), discipline: "brand" },
  { slug: "thomas-forum", client: "Thomas Forum", domain: "thomasforum.com", category: "Web", tagline: "Investment platform site with a fast publishing workflow.", outcome: "Sub second page loads", region: "USA", stack: ["React", "CMS"], ...liveClip("thomas-forum") },
  { slug: "ambient-building", client: "Ambient Building Products", domain: "ambientbp.com", category: "Ecommerce", tagline: "Flooring and materials catalog with sample ordering.", outcome: "18M sq ft delivered", region: "USA", stack: ["Headless", "Search"], ...liveClip("ambient"), discipline: "brand" },
  { slug: "autoparts-pos", client: "AutoParts POS", domain: "autopartspos.app", category: "Software", tagline: "Counter billing and parts lookup for spare parts workshops.", outcome: "Billing time cut in half", region: "Pakistan", stack: ["React", "Node", "Postgres"], ...liveClip("proj-f79c") },
  { slug: "agog-travel", client: "AGOG Travel Solutions", domain: "agogtravel.com", category: "Web", tagline: "Curated journeys, umrah and visa services with guided search.", outcome: "2.6x enquiry volume", region: "Islamabad", stack: ["React", "Booking API"], ...liveClip("agog-travel") },
  { slug: "electrolux-power", client: "Electrolux Power", domain: "electroluxpower.com", category: "Web", tagline: "Solar and storage site with instant quote and savings proof.", outcome: "235kW installed base", region: "Islamabad", stack: ["React", "Quote engine"], ...liveClip("electrolux-power") },
  { slug: "evolve-lagree", client: "Evolve Lagree", domain: "evolvelagree.com", category: "Web", tagline: "Boutique fitness studio with class booking and intro offers.", outcome: "600+ member class base", region: "Katy, Texas", stack: ["React", "Booking"], ...liveClip("evolve-lagree"), discipline: "brand" },
  { slug: "mr-pure-water", client: "Mr. Pure Water", domain: "mrpurewater.com", category: "Ecommerce", tagline: "Whole home water systems with bundles and same day install.", outcome: "Online orders up 38%", region: "USA", stack: ["Ecommerce", "Scheduling"], ...liveClip("mr-pure-water") },
  { slug: "rxl-usa", client: "RXL USA", domain: "rxlusa.com", category: "Web", tagline: "Precision fabrication for data center infrastructure.", outcome: "Built to millimetre spec", region: "USA", stack: ["React", "Motion"], ...liveClip("rxl-usa") },
  { slug: "snz-student-services", client: "SnZ Student Services", domain: "snzventures.com/students", category: "Web", tagline: "Study abroad counselling with matching and visa support.", outcome: "1,200+ students placed", region: "Europe", stack: ["React", "CRM"], ...liveClip("snz-student") },
  { slug: "snz-europe-gateway", client: "SnZ Europe Gateway", domain: "snzventures.com/europe", category: "Web", tagline: "Company formation, fintech licensing and relocation funnel.", outcome: "400+ advisory clients", region: "Europe", stack: ["React", "CRM"], ...liveClip("snz-gateway") },
  // Shipped client platforms and sites
  { slug: "powercabs", client: "PowerCabs", domain: "dispatch.powercabs.ie", category: "Software", tagline: "Taxi dispatch with driver and passenger apps.", outcome: "500+ drivers, 24/7 dispatch", region: "Dublin", stack: ["React", "Node", "Maps"], shotUrl: pcDashboard, featured: true },
  { slug: "enfield-royal-clinics", client: "Enfield Royal Clinics", domain: "enfieldroyalclinics.com.pk", category: "Healthcare", tagline: "WordPress rebuild and technical SEO for a surgical group.", outcome: "Page 1 for 120+ terms", region: "Pakistan", stack: ["WordPress", "SEO"], shotUrl: enfieldroyalShot },
  { slug: "dubai-safari", client: "Dubai Safari Park", domain: "dubaisafari.ae", category: "Web", tagline: "Bilingual ticketing for a flagship wildlife destination.", outcome: "Delivered two weeks early", region: "Dubai", stack: ["Web", "Ticketing"], shotUrl: dubaisafariShot },
  { slug: "expos-ksa", client: "Expo's KSA", domain: "expos-ksa.com", category: "Web", tagline: "Bilingual events platform for a Saudi exhibitions agency.", outcome: "Bilingual, KSA ready", region: "Saudi Arabia", stack: ["Web", "RTL"], shotUrl: exposksaShot },
  { slug: "susan", client: "Susan", domain: "susan.fi", category: "Software", tagline: "AI assistant for newcomers navigating public services.", outcome: "AI first, Helsinki", region: "Finland", stack: ["AI", "React"], shotUrl: susanShot },
  { slug: "glowie", client: "Glowie", domain: "glowie.fi", category: "Software", tagline: "Voice first AI tutor for high school STEM subjects.", outcome: "Voice first edtech", region: "Finland", stack: ["AI", "Voice"], shotUrl: glowieShot },
  { slug: "tamr-solutions", client: "TAMR Solutions", domain: "tamrsolutions.com", category: "Software", tagline: "B2B SaaS site and partner portal for a data platform.", outcome: "5x inbound leads", region: "Saudi Arabia", stack: ["React", "Portal"], shotUrl: tamrsolutionsShot },
  { slug: "realtor-atif", client: "Realtor Atif", domain: "realtoratif.com", category: "WordPress", tagline: "Dubai real estate portal with listings and VR tours.", outcome: "Dubai luxury market", region: "Dubai", stack: ["WordPress", "Listings"], shotUrl: realtoratifShot },
  { slug: "the-longshot-inc", client: "The Longshot Inc.", domain: "thelongshotinc.ca", category: "Web", tagline: "Case study heavy agency site with a lean funnel.", outcome: "Toronto agency refresh", region: "Canada", stack: ["Web", "CRO"], shotUrl: thelongshotincShot },
  { slug: "hazel-beauty-bar", client: "Hazel Beauty Bar", domain: "hazelbeautybar.ca", category: "WordPress", tagline: "Brand forward booking site for a Toronto beauty bar.", outcome: "Bookings up 3.1x", region: "Canada", stack: ["WordPress", "Booking"], shotUrl: hazelbeautybarShot },
  { slug: "culture-hijab", client: "Culture Hijab", domain: "culturehijab.com", category: "Ecommerce", tagline: "Modest fashion storefront with lifecycle flows.", outcome: "Revenue up 218% in 120 days", region: "USA", stack: ["Shopify", "Klaviyo"], shotUrl: culturehijabShot, discipline: "brand" },
  { slug: "luxmark", client: "Luxmark", domain: "luxmark.pk", category: "Ecommerce", tagline: "Premium lifestyle store with a mobile first product page.", outcome: "Mobile first PDP", region: "Pakistan", stack: ["Shopify"], shotUrl: luxmarkShot, discipline: "brand" },
  { slug: "agog", client: "AGOG", domain: "agog.com.pk", category: "Ecommerce", tagline: "Fashion retailer with homepage storytelling and merchandising.", outcome: "Visual merch overhaul", region: "Pakistan", stack: ["Shopify"], shotUrl: agogShot, discipline: "brand" },
  { slug: "amble", client: "Amble", domain: "amble.com.pk", category: "Ecommerce", tagline: "Lookbook style store built around content commerce.", outcome: "Content commerce build", region: "Pakistan", stack: ["Shopify"], shotUrl: ambleShot, discipline: "brand" },
  { slug: "my-explore-islam", client: "My Explore Islam", domain: "myexploreislam.com", category: "Web", tagline: "Education platform with courses, articles and community.", outcome: "Courses, community, UGC", region: "Global", stack: ["Web", "LMS"], shotUrl: myexploreislamShot },
  { slug: "al-bakir-barbershop", client: "Al Bakir Barbershop", domain: "albakirbarbershop.com", category: "WordPress", tagline: "Booking first grooming site with appointments and gallery.", outcome: "Booking first funnel", region: "USA", stack: ["WordPress"], shotUrl: albakirbarbershopShot },
  { slug: "silent-edge-co", client: "Silent Edge Co.", domain: "silentedgeco.com", category: "WordPress", tagline: "Facility services site with a catalog and quote flow.", outcome: "Quote funnel and catalog", region: "USA", stack: ["WordPress"], shotUrl: silentedgecoShot },
  { slug: "the-ductibles", client: "The Ductibles", domain: "theductibles.com", category: "Local SEO", tagline: "Duct cleaning brand refresh with local SEO.", outcome: "Rank 1 in Calgary", region: "Canada", stack: ["SEO", "GBP"], shotUrl: theductiblesShot },
  { slug: "cali-pro-garage", client: "Cali Pro Garage", domain: "caliprogarage.com", category: "Local SEO", tagline: "Garage door service with booking and local SEO in 12 cities.", outcome: "Rank 1 in 12 cities", region: "California", stack: ["SEO", "GBP"], shotUrl: caliprogarageShot },
  { slug: "cali-garage-doors-gates", client: "Cali Garage Doors & Gates", domain: "caligaragedoorgates.com", category: "WordPress", tagline: "Sister brand with dedicated landing pages on one backend.", outcome: "Two brands, one backend", region: "California", stack: ["WordPress"], shotUrl: caligaragedoorgatesShot },
  { slug: "san-jose-heat-cooling", client: "San Jose Heat & Cooling", domain: "sanjoseheatandcooling.com", category: "Local SEO", tagline: "HVAC technical SEO built for Bay Area rankings.", outcome: "Top 3 map pack", region: "California", stack: ["SEO", "GBP"], shotUrl: sanjoseheatcoolingShot },
  { slug: "a1-phoenix-plumbing", client: "A1 Phoenix Plumbing", domain: "a1phoenixplumbing.com", category: "Local SEO", tagline: "Plumbing brand with local SEO and emergency funnels.", outcome: "412 extra calls a month", region: "Arizona", stack: ["SEO", "GBP"], shotUrl: a1phoenixplumbingShot },
  { slug: "snz-ventures", client: "SNZ Ventures", domain: "snzventures.com", category: "Web", tagline: "Holding company site with portfolio and investor relations.", outcome: "Portfolio and IR site", region: "Europe", stack: ["React"], shotUrl: snzventuresShot }
];
const CATEGORIES = ["All", "Software", "WordPress", "Ecommerce", "SEO", "Local SEO", "Web", "Healthcare"];
function projectDiscipline(p) {
  if (p.discipline) return p.discipline;
  if (p.category === "Software") return "software";
  if (p.category === "SEO" || p.category === "Local SEO") return "seo";
  return "web";
}
const COUNTERS = [
  { value: "480+", label: "Builds shipped" },
  { value: "5", label: "Countries on the team" },
  { value: "11", label: "Years building" },
  { value: "99.9%", label: "Uptime we hold" }
];
function Work({ initialFilter, lockFilter, discipline } = {}) {
  const [filter, setFilter] = reactExports.useState(initialFilter ?? "All");
  const isMobile = useIsMobile();
  const [reduced, setReduced] = reactExports.useState(false);
  const [autoAdvance, setAutoAdvance] = reactExports.useState(true);
  const [idx, setIdx] = reactExports.useState(0);
  const list = reactExports.useMemo(() => {
    const base = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return discipline ? base.filter((p) => projectDiscipline(p) === discipline) : base;
  }, [filter, discipline]);
  const total = list.length;
  const safeIdx = total ? Math.min(idx, total - 1) : 0;
  const active = list[safeIdx];
  const next = total ? list[(safeIdx + 1) % total] : void 0;
  reactExports.useEffect(() => {
    setIdx(0);
  }, [filter, discipline]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  }, []);
  const go = reactExports.useCallback((delta) => {
    setIdx((v) => total ? (v + delta + total) % total : 0);
  }, [total]);
  reactExports.useEffect(() => {
    if (!autoAdvance || reduced || isMobile || !active) return;
    const t = setTimeout(() => go(1), 5200);
    return () => clearTimeout(t);
  }, [autoAdvance, reduced, isMobile, active, go]);
  reactExports.useEffect(() => {
    if (isMobile) return;
    const onKey = (e) => {
      const el = document.getElementById("work");
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, isMobile]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "relative overflow-hidden bg-section-grad py-20 sm:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg-soft opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " The live showroom"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-6xl", children: [
          "Real builds, running right now.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Watch them work." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg", children: "Every frame below is a site or platform we shipped for a paying client, captured from the live product. Hundreds more sit behind NDAs and white label agreements." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4", children: COUNTERS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.6 },
          transition: { duration: 0.4 },
          className: "rounded-xl border border-border bg-card/50 px-4 py-3 backdrop-blur",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-black text-coral sm:text-3xl", children: c.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: c.label })
          ]
        },
        c.label
      )) }),
      !lockFilter && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(c),
          className: `shrink-0 snap-start rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${filter === c ? "border-coral bg-coral text-white" : "border-border bg-card/50 text-foreground/70 backdrop-blur hover:border-coral/50"}`,
          children: c
        },
        c
      )) }),
      total === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-sm text-muted-foreground", children: "No projects in this category yet." }) : isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDeck, { items: list, reduced }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-3xl border border-border bg-card/30 p-4 backdrop-blur sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex lg:flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: [
              "Index · ",
              total,
              " builds"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar max-h-[520px] space-y-0.5 overflow-y-auto pr-1", children: list.map((p, i) => {
              const on = i === safeIdx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIdx(i);
                  },
                  className: `flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${on ? "bg-coral/10 text-foreground" : "text-muted-foreground hover:bg-foreground/5"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] ${on ? "text-coral" : "opacity-50"}`, children: String(i + 1).padStart(2, "0") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate text-xs font-semibold", children: p.client }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 shrink-0 rounded-full ${on ? "bg-coral" : "bg-transparent"}` })
                  ]
                },
                p.slug
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShowroomStage,
            {
              project: active,
              next,
              index: safeIdx,
              total,
              autoAdvance: autoAdvance && !reduced,
              onToggleAuto: () => setAutoAdvance((v) => !v),
              onEnded: () => go(1),
              reduced
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "The archive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Click any frame to play it" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Filmstrip,
            {
              items: list,
              activeSlug: active?.slug,
              onPick: (slug) => setIdx(list.findIndex((p) => p.slug === slug))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold sm:text-base", children: "See something close to what you are building?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground sm:text-sm", children: "Fixed quote and a roadmap in your inbox inside 24 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full bg-coral-grad px-5 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105", children: "Start a project" })
      ] })
    ] })
  ] });
}
export {
  BrowserFrame as B,
  Work as W,
  pcDashboard as p
};
