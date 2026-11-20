import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SERVICES, o as openPreferences, b as getSubServicesFor } from "./router-B0GDL2eA.mjs";
import { e as useScroll, f as useMotionValueEvent, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { q as ChevronDown, r as ChevronRight, A as ArrowRight, s as Phone, X, t as Menu, u as ArrowUpRight, v as Mail, w as Clock, Z as Zap, x as CircleCheck, j as Cookie, y as MapPin, z as Package, E as ExternalLink, I as Moon, J as Sun } from "../_libs/lucide-react.mjs";
const logoDark = "/assets/origami99-logo-Cp3nFqPZ.png";
const logoWhite = "/assets/origami99-logo-white-DbBl43xP.png";
const SESSION_KEY = "origami99-theme-session";
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = sessionStorage.getItem(SESSION_KEY);
  return stored === "dark" ? "dark" : "light";
}
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}
function ThemeToggle({ compact = false }) {
  const [theme, setTheme] = reactExports.useState("light");
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      localStorage.removeItem("origami99-theme");
      localStorage.removeItem("origami99-theme-v2");
    } catch {
    }
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
    setMounted(true);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      sessionStorage.setItem(SESSION_KEY, next);
    } catch {
    }
  };
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: compact ? "h-9 w-9" : "h-10 w-10", "aria-hidden": true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      className: `relative ${compact ? "h-9 w-9" : "h-10 w-10"} rounded-full flex items-center justify-center border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 hover:border-coral/50 transition-all overflow-hidden`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { y: -18, opacity: 0, rotate: -90 },
          animate: { y: 0, opacity: 1, rotate: 0 },
          exit: { y: 18, opacity: 0, rotate: 90 },
          transition: { duration: 0.25 },
          className: "absolute inset-0 flex items-center justify-center",
          children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4 text-coral" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 text-coral" })
        },
        theme
      ) })
    }
  );
}
const nav = [
  { label: "Projects Delivered", href: "/#work" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Contact", href: "/#contact" }
];
function subsFor(slug) {
  if (slug === "software" || slug === "web-development" || slug === "digital-marketing") {
    return getSubServicesFor(slug);
  }
  return [];
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [servicesOpen, setServicesOpen] = reactExports.useState(false);
  const [activeService, setActiveService] = reactExports.useState(SERVICES[0].slug);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));
  reactExports.useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);
  const active = SERVICES.find((s) => s.slug === activeService) ?? SERVICES[0];
  const activeSubs = subsFor(active.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-5 lg:px-8 flex items-center justify-between h-16 sm:h-18 py-2 sm:py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoWhite,
                alt: "Origami 99",
                className: "h-9 sm:h-10 w-auto light:hidden"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoDark,
                alt: "Origami 99",
                className: "h-9 sm:h-10 w-auto hidden light:block"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: nav.map(
            (n) => n.dropdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setServicesOpen(true),
                onMouseLeave: () => setServicesOpen(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      "aria-expanded": servicesOpen,
                      onClick: () => setServicesOpen((v) => !v),
                      className: "flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full text-foreground/90 hover:text-coral transition-colors",
                      children: [
                        n.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: servicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 8 },
                      transition: { duration: 0.16 },
                      className: "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[860px] max-w-[92vw]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-glow p-3 grid grid-cols-[260px_1fr] gap-2 overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 p-1", children: SERVICES.map((s) => {
                          const isActive = s.slug === active.slug;
                          const count = subsFor(s.slug).length;
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Link,
                            {
                              to: "/services/$slug",
                              params: { slug: s.slug },
                              onMouseEnter: () => setActiveService(s.slug),
                              onFocus: () => setActiveService(s.slug),
                              onClick: () => setServicesOpen(false),
                              className: `group relative flex items-center gap-3 p-3 rounded-2xl transition-colors ${isActive ? "bg-coral/10" : "hover:bg-foreground/5"}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: `h-9 w-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-coral-grad border-transparent" : "bg-foreground/5 border-border"}`,
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-4 w-4 ${isActive ? "text-white" : "text-coral"}` })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-semibold ${isActive ? "text-coral" : "text-foreground"}`, children: s.title }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground line-clamp-1", children: count > 0 ? `${count} services` : "Explore" })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronRight,
                                  {
                                    className: `h-4 w-4 shrink-0 transition-transform ${isActive ? "text-coral translate-x-0.5" : "text-muted-foreground"}`
                                  }
                                )
                              ]
                            },
                            s.slug
                          );
                        }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-foreground/[0.03] border border-border/70 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, x: 8 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: -8 },
                            transition: { duration: 0.14 },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: active.title }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: active.tagline })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Link,
                                  {
                                    to: "/services/$slug",
                                    params: { slug: active.slug },
                                    onClick: () => setServicesOpen(false),
                                    className: "shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-coral hover:gap-2 transition-all",
                                    children: [
                                      "View all ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                                    ]
                                  }
                                )
                              ] }),
                              activeSubs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-1.5", children: activeSubs.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Link,
                                {
                                  to: `/services/${sub.slug}`,
                                  onClick: () => setServicesOpen(false),
                                  className: "group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-coral/10 transition-colors",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(sub.icon, { className: "h-4 w-4 text-coral mt-0.5 shrink-0" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold text-foreground group-hover:text-coral transition-colors leading-snug", children: sub.category }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground line-clamp-1", children: sub.title })
                                    ] })
                                  ]
                                },
                                sub.slug
                              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-xl border border-border/70 bg-background/60 p-4", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: active.hero }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Link,
                                  {
                                    to: "/services/$slug",
                                    params: { slug: active.slug },
                                    onClick: () => setServicesOpen(false),
                                    className: "mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral",
                                    children: [
                                      "Open ",
                                      active.title,
                                      " ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                                    ]
                                  }
                                )
                              ] })
                            ]
                          },
                          active.slug
                        ) }) })
                      ] })
                    }
                  ) })
                ]
              },
              n.label
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: n.href,
                className: "relative px-4 py-2 text-sm font-semibold rounded-full text-foreground/90 hover:text-coral transition-colors",
                children: n.label
              },
              n.href
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+923155317998",
                className: "flex items-center gap-2 text-sm font-semibold text-foreground hover:text-coral transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-coral" }),
                  "+92 315 5317998"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/#contact",
                className: "relative inline-flex items-center gap-2 bg-coral-grad text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform animate-pulse-ring",
                children: "Book Growth Call"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { compact: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(!open),
                className: "p-2 text-foreground",
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedMobile, { open, onClose: () => setOpen(false) })
      ]
    }
  );
}
function AnimatedMobile({ open, onClose }) {
  const [expanded, setExpanded] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      className: "lg:hidden bg-background border-t border-border px-5 py-4 flex flex-col gap-1 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain pb-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold tracking-widest uppercase text-muted-foreground px-2 pb-1", children: "Services" }),
        SERVICES.map((s) => {
          const subs = subsFor(s.slug);
          const isOpen = expanded === s.slug;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services/$slug",
                  params: { slug: s.slug },
                  onClick: onClose,
                  className: "flex-1 flex items-center gap-2.5 py-3 px-2 text-foreground font-semibold",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-coral shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: s.title })
                  ]
                }
              ),
              subs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  "aria-label": `Show ${s.title} services`,
                  "aria-expanded": isOpen,
                  onClick: () => setExpanded(isOpen ? null : s.slug),
                  className: "p-3 text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-[10px] font-bold text-coral bg-coral/10 border border-coral/25 rounded-full px-2 py-0.5", children: subs.length }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `inline h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}` })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && subs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.22 },
                className: "overflow-hidden pl-3 border-l-2 border-coral/30 ml-2 mb-2",
                children: subs.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: `/services/${sub.slug}`,
                    onClick: onClose,
                    className: "flex items-center gap-2 py-2.5 px-2 text-sm text-foreground/85 active:text-coral",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(sub.icon, { className: "h-3.5 w-3.5 text-coral shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: sub.category })
                    ]
                  },
                  sub.slug
                ))
              }
            ) })
          ] }, s.slug);
        }),
        nav.filter((n) => !n.dropdown).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: n.href,
            onClick: onClose,
            className: "py-3 px-2 text-foreground font-medium border-b border-border/50 last:border-0",
            children: n.label
          },
          n.href
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/#contact",
            onClick: onClose,
            className: "mt-3 bg-coral-grad text-white text-center py-3 rounded-full font-semibold shadow-glow",
            children: "Book Growth Call"
          }
        )
      ]
    }
  ) });
}
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/origami99.agency/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/origami99.official",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/origami99/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }
];
const locations = [
  { country: "Islamabad, Pakistan", flag: "🇵🇰", tz: "Asia/Karachi" },
  { country: "Riyadh, KSA", flag: "🇸🇦", tz: "Asia/Riyadh" },
  { country: "Berlin, Germany", flag: "🇩🇪", tz: "Europe/Berlin" },
  { country: "Toronto, Canada", flag: "🇨🇦", tz: "America/Toronto" },
  { country: "Austin, Texas", flag: "🇺🇸", tz: "America/Chicago" }
];
const contactStats = [
  { icon: Clock, label: "Avg reply", value: "< 2 hrs" },
  { icon: Zap, label: "Kickoff", value: "This week" },
  { icon: CircleCheck, label: "NDA on request", value: "Signed same day" }
];
const particles = Array.from({ length: 18 }).map((_, i) => ({
  left: i * 53 % 100,
  top: i * 37 % 100,
  size: 2 + i % 4,
  delay: i * 0.4 % 6,
  duration: 8 + i % 6
}));
function Footer() {
  const sceneRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = sceneRef.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--tilt-x", `${(-cy * 8).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(cx * 10).toFixed(2)}deg`);
      el.style.setProperty("--px", `${(cx * 24).toFixed(2)}px`);
      el.style.setProperty("--py", `${(cy * 18).toFixed(2)}px`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 6e4);
    return () => clearInterval(id);
  }, []);
  const formatTime = (tz) => {
    if (!now) return "";
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true }).format(now);
    } catch {
      return "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "footer3d relative overflow-hidden pt-24 pb-8 border-t border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: sceneRef, className: "footer3d-scene pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer3d-mesh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer3d-mesh footer3d-mesh--b" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "footer3d-origami", viewBox: "0 0 800 500", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "f3d-a", x1: "0", x2: "1", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "var(--coral)", stopOpacity: "0.55" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "var(--coral)", stopOpacity: "0.05" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "f3d-b", x1: "0", x2: "1", y1: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "var(--foreground)", stopOpacity: "0.18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "var(--foreground)", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "f3d-c", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "var(--coral)", stopOpacity: "0.28" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "var(--coral)", stopOpacity: "0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { className: "f3d-fold f3d-fold--1", points: "0,420 220,300 420,500 0,500", fill: "url(#f3d-a)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { className: "f3d-fold f3d-fold--2", points: "220,300 480,180 620,360 420,500", fill: "url(#f3d-b)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { className: "f3d-fold f3d-fold--3", points: "480,180 800,80 800,340 620,360", fill: "url(#f3d-c)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { className: "f3d-fold f3d-fold--4", points: "620,360 800,340 800,500 420,500", fill: "url(#f3d-a)", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { className: "f3d-fold f3d-fold--5", points: "0,180 260,60 480,180 220,300 0,420", fill: "url(#f3d-c)", opacity: "0.6" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer3d-particles", children: particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "footer3d-particle",
          style: {
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer3d-grid" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "footer3d-wordmark pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap", children: "ORIGAMI 99" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center text-center pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:hidden rounded-2xl bg-foreground/5 border border-border/60 px-5 py-3 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoDark, alt: "Origami 99", width: 180, height: 56, className: "h-12 w-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Origami 99", width: 180, height: 56, className: "h-14 w-auto hidden dark:block drop-shadow-[0_10px_30px_rgba(255,120,80,0.35)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-sm md:text-base text-foreground/70", children: "Design, code and marketing. Shipped like clockwork." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/#contact",
              className: "footer3d-cta group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "footer3d-cta-glow", "aria-hidden": true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Book a growth call" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-12 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer3d-glass lg:col-span-5 rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-coral", children: "Talk to us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-coral opacity-70 animate-ping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-coral" })
              ] }),
              "Studio open now"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:engage@origami99.com", className: "flex items-center gap-2.5 hover:text-coral transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-coral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "engage@origami99.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+923155317998", className: "flex items-center gap-2.5 hover:text-coral transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-coral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+92 315 5317998" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+923377771527", className: "flex items-center gap-2.5 hover:text-coral transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-coral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+92 337 7771527" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-2", children: contactStats.map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/70 bg-background/40 backdrop-blur px-2.5 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-coral mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-foreground/60 font-semibold leading-tight", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground leading-tight mt-0.5", children: value })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-3", children: socials.map(({ label, href, path }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "footer3d-social h-12 w-12 rounded-2xl flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-current", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: path }) })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer3d-glass lg:col-span-3 rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-4", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#services", className: "hover:text-coral transition-colors", children: "Services" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#work", className: "hover:text-coral transition-colors", children: "Projects delivered" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-coral transition-colors", children: "Journal" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contact", className: "hover:text-coral transition-colors", children: "Contact" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-coral mt-6 mb-4", children: "Legal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-coral transition-colors", children: "Privacy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookies", className: "hover:text-coral transition-colors", children: "Cookies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: openPreferences, className: "inline-flex items-center gap-1.5 hover:text-coral transition-colors text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "h-3.5 w-3.5" }),
              " Preferences"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer3d-glass lg:col-span-4 rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-coral flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
              " Global presence"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-foreground/60 font-semibold", children: "5 studios" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs", children: locations.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "footer3d-loc flex items-center justify-between gap-2 rounded-xl px-3 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: l.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 font-medium truncate", children: l.country })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { suppressHydrationWarning: true, className: "text-[10px] font-mono tabular-nums text-foreground/60 shrink-0", children: formatTime(l.tz) })
          ] }, l.country)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/50 text-[10px] text-foreground/60 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-coral animate-pulse" }),
            "Follow the sun coverage across 5 time zones"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://gso.origami99.com",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Visit GSO by Origami 99, general supply order service in Pakistan",
          className: "gso-crosslink group mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:px-6 sm:py-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-coral", children: "Also by Origami 99" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-semibold text-foreground sm:text-base truncate", children: "General Supply Order (Pakistan)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/60 truncate", children: "Industrial, office and event supplies delivered." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex shrink-0 items-center justify-center rounded-full border border-coral/30 bg-coral/10 p-2 text-coral transition-colors group-hover:bg-coral group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Origami 99. Creative and digital marketing agency."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tracking-wide", children: "Built in studio. Shipped worldwide." })
      ] })
    ] })
  ] });
}
export {
  Footer as F,
  Header as H
};
