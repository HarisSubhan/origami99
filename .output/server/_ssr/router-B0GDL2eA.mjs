import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { U as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { C as CodeXml, D as Database, S as Smartphone, P as Palette, B as Boxes, a as Brain, b as Cloud, c as Server, d as ShoppingBag, F as FileText, L as Layers, G as Globe, e as PanelsTopLeft, Z as Zap, T as Target, M as Megaphone, V as Video, f as PenTool, g as ChartColumn, h as Search, i as Sparkles, j as Cookie, X, k as Settings2 } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CAlFJpJv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const STORAGE_KEY = "origami99-cookie-consent-v1";
const CURRENT_VERSION = 1;
const EU_LANGS = /* @__PURE__ */ new Set([
  "de",
  "fr",
  "it",
  "es",
  "pt",
  "nl",
  "sv",
  "fi",
  "da",
  "no",
  "pl",
  "cs",
  "sk",
  "hu",
  "ro",
  "bg",
  "el",
  "hr",
  "sl",
  "lt",
  "lv",
  "et",
  "ga",
  "mt",
  "en-gb",
  "en-ie"
]);
function detectRegion() {
  if (typeof navigator === "undefined") return "other";
  const lang = (navigator.language || "").toLowerCase();
  if (EU_LANGS.has(lang) || EU_LANGS.has(lang.split("-")[0])) return "eu";
  if (lang === "en-us") {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz === "America/Los_Angeles") return "us-ca";
    } catch {
    }
  }
  return "other";
}
function read() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CURRENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}
const listeners = /* @__PURE__ */ new Set();
function emit() {
  for (const l of listeners) l();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cookie-consent-change"));
  }
}
function write(next) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  pushConsentMode(next);
  emit();
}
function pushConsentMode(state) {
  if (typeof window === "undefined") return;
  const w = window;
  w.dataLayer = w.dataLayer || [];
  const update = {
    ad_storage: state.categories.marketing ? "granted" : "denied",
    ad_user_data: state.categories.marketing ? "granted" : "denied",
    ad_personalization: state.categories.marketing ? "granted" : "denied",
    analytics_storage: state.categories.analytics ? "granted" : "denied",
    functionality_storage: state.categories.preferences ? "granted" : "denied",
    personalization_storage: state.categories.preferences ? "granted" : "denied",
    security_storage: "granted"
  };
  w.dataLayer.push({ event: "consent_update", ...update });
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
  }
}
function initConsentMode() {
  if (typeof window === "undefined") return;
  const w = window;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "consent_default",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500
  });
  const existing = read();
  if (existing) pushConsentMode(existing);
}
function acceptAll() {
  const state = {
    version: CURRENT_VERSION,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    region: detectRegion(),
    categories: { necessary: true, preferences: true, analytics: true, marketing: true }
  };
  write(state);
  return state;
}
function rejectAll() {
  const state = {
    version: CURRENT_VERSION,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    region: detectRegion(),
    categories: { necessary: true, preferences: false, analytics: false, marketing: false }
  };
  write(state);
  return state;
}
function saveCustom(cats) {
  const current = read();
  const state = {
    version: CURRENT_VERSION,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    region: current?.region ?? detectRegion(),
    categories: {
      necessary: true,
      preferences: !!cats.preferences,
      analytics: !!cats.analytics,
      marketing: !!cats.marketing
    }
  };
  write(state);
  return state;
}
function getConsent() {
  return read();
}
function hasDecided() {
  return read() !== null;
}
function hasConsent(cat) {
  const state = read();
  if (!state) return cat === "necessary";
  return !!state.categories[cat];
}
function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function useConsent() {
  return reactExports.useSyncExternalStore(subscribe, read, () => null);
}
function useConsentDecided() {
  const c = useConsent();
  return c !== null;
}
function useRegisterPreferencesOpener(open) {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    window.__openCookiePreferences = open;
    return () => {
      if (window.__openCookiePreferences === open) delete window.__openCookiePreferences;
    };
  }, [open]);
}
function openPreferences() {
  if (typeof window !== "undefined" && typeof window.__openCookiePreferences === "function") {
    window.__openCookiePreferences();
  }
}
const cookieConsent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  acceptAll,
  getConsent,
  hasConsent,
  hasDecided,
  initConsentMode,
  openPreferences,
  rejectAll,
  saveCustom,
  useConsent,
  useConsentDecided,
  useRegisterPreferencesOpener
}, Symbol.toStringTag, { value: "Module" }));
const CATEGORIES = [
  {
    key: "preferences",
    label: "Preferences",
    desc: "Remember your theme, language and site preferences."
  },
  {
    key: "analytics",
    label: "Analytics",
    desc: "Anonymised usage stats so we can improve the site (e.g. Google Analytics)."
  },
  {
    key: "marketing",
    label: "Marketing",
    desc: "Attribution and retargeting pixels for the ads we run (e.g. Meta, LinkedIn)."
  }
];
function CookieBanner() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  const [prefsOpen, setPrefsOpen] = reactExports.useState(false);
  const [custom, setCustom] = reactExports.useState({
    preferences: false,
    analytics: false,
    marketing: false
  });
  reactExports.useEffect(() => {
    setMounted(true);
    if (!hasDecided()) setVisible(true);
    else {
      const c = getConsent();
      if (c) setCustom({ preferences: c.categories.preferences, analytics: c.categories.analytics, marketing: c.categories.marketing });
    }
  }, []);
  useRegisterPreferencesOpener(() => {
    const c = getConsent();
    if (c) setCustom({ preferences: c.categories.preferences, analytics: c.categories.analytics, marketing: c.categories.marketing });
    setVisible(true);
    setPrefsOpen(true);
  });
  if (!mounted) return null;
  const closeAll = () => {
    setVisible(false);
    setPrefsOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    prefsOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm",
        onClick: () => setPrefsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        role: "dialog",
        "aria-label": "Cookie consent",
        initial: { opacity: 0, y: 40, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 40, scale: 0.98 },
        transition: { type: "spring", stiffness: 260, damping: 28 },
        className: `fixed z-[100] bottom-4 left-4 right-4 sm:right-auto sm:w-[400px] ${prefsOpen ? "sm:w-[520px]" : ""} rounded-3xl bg-navy-deep text-white border border-white/10 shadow-2xl overflow-hidden`,
        style: { boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-coral-grad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-10 w-10 rounded-2xl bg-coral/15 border border-coral/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "h-5 w-5 text-coral" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Cookies on Origami 99" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-white/70 leading-relaxed", children: [
                  "We use cookies to run this site, remember your preferences and measure what works. You can accept all, reject non-essential, or customise your choice. See our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", onClick: closeAll, className: "text-coral hover:underline", children: "Privacy Policy" }),
                  " and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookies", onClick: closeAll, className: "text-coral hover:underline", children: "Cookie Policy" }),
                  "."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: closeAll,
                  "aria-label": "Close cookie banner",
                  className: "text-white/50 hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            prefsOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "mt-5 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white/5 border border-white/10 p-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Strictly necessary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60 mt-0.5", children: "Required for the site to work (session, security, load balancing). Always on." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase text-coral", children: "Always on" })
                  ] }) }),
                  CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      className: "flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 cursor-pointer hover:border-coral/40 transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: custom[c.key],
                            onChange: (e) => setCustom((prev) => ({ ...prev, [c.key]: e.target.checked })),
                            className: "mt-1 h-4 w-4 accent-coral"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: c.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60 mt-0.5", children: c.desc })
                        ] })
                      ]
                    },
                    c.key
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-col sm:flex-row gap-2", children: prefsOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    saveCustom(custom);
                    closeAll();
                  },
                  className: "flex-1 inline-flex items-center justify-center gap-2 bg-coral-grad px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all",
                  children: "Save my choices"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPrefsOpen(false),
                  className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors",
                  children: "Back"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    acceptAll();
                    closeAll();
                  },
                  className: "flex-1 inline-flex items-center justify-center gap-2 bg-coral-grad px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all",
                  children: "Accept all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    rejectAll();
                    closeAll();
                  },
                  className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors",
                  children: "Reject non-essential"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setPrefsOpen(true),
                  className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors",
                  "aria-label": "Customise cookies",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4" }),
                    "Customise"
                  ]
                }
              )
            ] }) })
          ] })
        ]
      }
    )
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$D = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "fuBVtHl6RpW5ZnUuyCtK4y5nU2I0lpvQxFdhUDFuSCk" },
      { title: "Origami99, AI-Powered Digital Agency" },
      { name: "description", content: "Origami99 builds AI-driven software, websites and marketing campaigns for ambitious brands worldwide." },
      { property: "og:site_name", content: "Origami99" },
      { property: "og:title", content: "Origami99, AI-Powered Digital Agency" },
      { property: "og:description", content: "Origami99 builds AI-driven software, websites and marketing campaigns for ambitious brands worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Origami99, AI-Powered Digital Agency" },
      { name: "twitter:description", content: "Origami99 builds AI-driven software, websites and marketing campaigns for ambitious brands worldwide." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@500;700&family=Amiri:wght@400;700&display=swap" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Origami99",
          url: "https://ai-spark-engine-11.lovable.app",
          logo: "https://ai-spark-engine-11.lovable.app/__l5e/assets-v1/2762a917-4f05-40ca-a4bf-c42d6a117bf9/origami99-favicon.png",
          contactPoint: [{ "@type": "ContactPoint", telephone: "+92 315 5317998", contactType: "sales", email: "engage@origami99.com", areaServed: ["PK", "SA", "CA", "US"] }]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Origami99",
          url: "https://ai-spark-engine-11.lovable.app"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "light", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){try{localStorage.removeItem('origami99-theme');localStorage.removeItem('origami99-theme-v2');var t=sessionStorage.getItem('origami99-theme-session');if(t!=='dark')t='light';var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(t);}catch(e){}})();`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$D.useRouteContext();
  reactExports.useEffect(() => {
    Promise.resolve().then(() => cookieConsent).then((m) => m.initConsentMode());
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBanner, {})
  ] });
}
const $$splitComponentImporter$B = () => import("./index-CHZWI7I5.mjs");
const SITE_URL$7 = "https://ai-spark-engine-11.lovable.app";
const Route$C = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Origami99 · Brands that convert, engineered end to end"
    }, {
      name: "description",
      content: "One senior team, end to end. Hundreds of production platforms, AI-powered software, web and mobile apps, SEO and paid media, engineered for measurable ROI."
    }, {
      property: "og:title",
      content: "Origami99 · Brands that convert, engineered end to end"
    }, {
      property: "og:description",
      content: "One senior team, end to end. Hundreds of production platforms across four continents, built for measurable ROI."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: `${SITE_URL$7}/`
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Origami99 · Brands that convert, engineered end to end"
    }, {
      name: "twitter:description",
      content: "One senior team, end to end. Hundreds of production platforms, engineered for measurable ROI."
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL$7}/`
    }, {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "How fast can you start my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Discovery kicks off within 3 to 5 business days of signing. Most projects begin design or build the following week."
          }
        }, {
          "@type": "Question",
          name: "What does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every engagement is scoped and quoted individually. After a free 20-minute intro call we send a fixed, itemised proposal within 48 hours."
          }
        }, {
          "@type": "Question",
          name: "Where is Origami99 based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One senior team across Pakistan, Saudi Arabia, Germany, Canada and the USA, following the sun so your project moves 24/7."
          }
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./admin-kdx67tn5.mjs");
const Route$B = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin Panel, Origami99"
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const coverAi = "/assets/ai-integration-guide-2026-cover-CEGw1Lta.jpg";
const coverCustom = "/assets/custom-software-vs-saas-cover-DaX6iGZ3.jpg";
const coverEcom = "/assets/ecommerce-conversion-optimization-cover-CnvmBYA9.jpg";
const coverShopify = "/assets/shopify-vs-headless-cover-Di3-RyCV.jpg";
const coverSeoAi = "/assets/seo-for-ai-search-cover-CWIpHhA7.jpg";
const coverFunnel = "/assets/digital-marketing-funnel-2026-cover-CUUllh_Z.jpg";
const coverErp = "/assets/erp-implementation-guide-cover-CjBDMogv.jpg";
const coverCrm = "/assets/real-estate-crm-buyers-guide-cover-Cu599sNw.jpg";
const coverWms = "/assets/warehouse-management-automation-cover-DW0j3ef8.jpg";
const coverPos = "/assets/pos-and-loyalty-2026-cover-D8D6rPJZ.jpg";
const now = () => (/* @__PURE__ */ new Date()).toISOString();
const daysAgo = (n) => new Date(Date.now() - n * 864e5).toISOString();
const BLOG_COVERS = {
  "ai-integration-guide-2026": coverAi,
  "custom-software-vs-saas": coverCustom,
  "ecommerce-conversion-optimization": coverEcom,
  "shopify-vs-headless": coverShopify,
  "seo-for-ai-search": coverSeoAi,
  "digital-marketing-funnel-2026": coverFunnel,
  "erp-implementation-guide": coverErp,
  "real-estate-crm-buyers-guide": coverCrm,
  "warehouse-management-automation": coverWms,
  "pos-and-loyalty-2026": coverPos
};
const BLOG_SEED = [
  {
    id: "b-ai-integration-2026",
    slug: "ai-integration-guide-2026",
    title: "The 2026 Playbook for AI Integration in Production Apps",
    excerpt: "RAG, agents, evals and cost control. A senior engineer's field guide to shipping AI features that survive real users, real traffic and real finance reviews.",
    author: "Origami 99 Engineering",
    status: "published",
    coverUrl: coverAi,
    publishedAt: daysAgo(2),
    updatedAt: now(),
    body: [
      "TL;DR. Most AI features fail in production for three boring reasons: the retrieval layer is weak, evaluation is vibes-based, and the unit economics were never modelled. Fix those and you ship reliably.",
      "The 2026 stack is no longer a novelty. Foundation models are commoditised. What separates a demo from a durable product is the surrounding system: retrieval, orchestration, guardrails, evals and cost control.",
      "1. Start with the job, not the model. Write the exact user prompt, the exact expected output and the exact success metric before you pick a provider. If you cannot describe the output in one sentence, the feature is not ready to build.",
      "2. Retrieval is the moat. Nine out of ten hallucinations we audit are retrieval failures, not model failures. Invest in chunking strategy, embedding quality, hybrid search (BM25 plus vector) and a re-ranking pass. A well-tuned retrieval layer often beats a bigger model at a fraction of the cost.",
      "3. Structure the output. JSON mode, tool calls and typed schemas turn an LLM into a reliable component. Free-text outputs are a debugging nightmare at scale. Zod on the way in, Zod on the way out.",
      "4. Evals before ship. Build a golden dataset of 50 to 200 real examples with expected outputs. Run it on every prompt change. Without this you are shipping regressions blindfolded.",
      "5. Route by cost. Not every request needs your flagship model. A cheap model handles 70% of traffic; escalate only when confidence drops. This one pattern typically cuts inference spend by 60%.",
      "6. Cache aggressively. Semantic caching (embedding similarity on the prompt) plus response caching turns repeated questions into free responses. Users get faster answers, you get a lower bill.",
      "7. Guardrails are non-negotiable. Prompt injection, PII leakage and jailbreaks are all live threats. Layer input filtering, output filtering and rate limits per user.",
      "8. Observability from day one. Log every prompt, every response, every token count and every latency. You cannot improve what you cannot measure.",
      "9. Human-in-the-loop for anything financial, legal or medical. AI proposes, humans dispose. Regulators are already sharpening pencils.",
      "10. Ship narrow, then widen. The teams winning with AI ship one small, delightful feature (smart search, draft assistant, auto-summarisation) and iterate. The teams losing try to build an autonomous agent for everything on day one.",
      "How we help. Origami 99 builds production AI systems end to end: retrieval, orchestration, evals, dashboards and the boring plumbing that keeps them alive at 3am. If you want a system architected by senior engineers who have shipped this before, book a call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-custom-vs-saas",
    slug: "custom-software-vs-saas",
    title: "Custom Software vs SaaS: When Building Your Own Actually Wins",
    excerpt: "A no-nonsense decision framework. Total cost of ownership, competitive moat, integration debt and the five signals that mean it is time to build.",
    author: "Origami 99 Product",
    status: "published",
    coverUrl: coverCustom,
    publishedAt: daysAgo(5),
    updatedAt: now(),
    body: [
      "TL;DR. Buy when the problem is generic, build when the problem is your product. Most companies get this backwards and pay for it twice.",
      "The default advice, 'always buy, never build', made sense in 2015 when SaaS was cheap, undifferentiated and easy to swap. It is bad advice in 2026. Vendor lock-in is now the largest hidden line on most technology budgets.",
      "The five signals that mean build.",
      "1. The workflow is a competitive advantage. If the way you take an order, dispatch a driver or price a policy is what makes customers pick you, you cannot outsource it to a template.",
      "2. You are patching the SaaS with three other SaaS products. Every Zapier bridge and CSV export is technical debt with a monthly fee.",
      "3. Per-seat pricing punishes success. When adding a customer costs you more than the customer pays, you have bought a tax, not a tool.",
      "4. Compliance, sovereignty or on-prem is on the roadmap. Try renegotiating that with a US-listed vendor.",
      "5. Your data is your product. The moment your dataset becomes a moat, letting a vendor hold it is a strategic error.",
      "The five signals that mean buy.",
      "Payroll, accounting, email, CRM basics, help desk basics and video conferencing. Nobody wins by reinventing Gmail.",
      "How we cost it. We model total cost of ownership over five years, not first-year licence fees. Include integration work, training, vendor risk premium and the opportunity cost of the workflow you never get to change.",
      "The build path, done properly. Discovery in two weeks, a working slice in six, a production rollout in twelve. We build on modern web stacks (TanStack, Cloudflare Workers, Postgres) so the system stays fast, cheap and portable.",
      "Talk to us. If you want a hard, unemotional read on whether to build or buy, book a scoping call. We have said 'buy the SaaS' more times than we have said 'build it' and we will tell you which one applies."
    ].join("\n\n")
  },
  {
    id: "b-ecom-cro",
    slug: "ecommerce-conversion-optimization",
    title: "Ecommerce Conversion Optimization: 27 Proven Levers for 2026",
    excerpt: "The exact CRO checklist we run on Shopify and headless stores. Load speed, product pages, checkout, retention, ads. Ranked by average lift.",
    author: "Origami 99 Growth",
    status: "published",
    coverUrl: coverEcom,
    publishedAt: daysAgo(8),
    updatedAt: now(),
    body: [
      "TL;DR. Most stores lose money in the same seven places. Fix them in order and conversion typically climbs 30 to 80 percent inside a quarter.",
      "Speed and core web vitals. A one second delay on mobile drops conversion by roughly 7 percent. Compress images, defer third-party scripts, ship on a real CDN and remove chat widgets that block the main thread.",
      "Product page trust. Real photography, real reviews, real specifications. Stock images kill trust faster than a bad price.",
      "Above the fold clarity. Product name, price, one hero image, add to cart. Everything else earns its place.",
      "Reviews with photos. UGC review widgets outperform text-only reviews by roughly 2x. Ask for photos in the post-purchase email.",
      "Sticky add to cart on mobile. A single sticky bar recovers double digit conversion on long product pages.",
      "One-page checkout. Every extra step drops another 10 percent. Guest checkout, express wallets and address autofill are table stakes.",
      "Shipping transparency. Show the delivery date, not just the cost. Uncertainty kills more carts than price.",
      "Abandoned cart flows. Three emails, one SMS, spread across 24 hours. Personalise with the actual product image.",
      "Post-purchase upsell. The highest-converting page you own is the thank-you page. Use it.",
      "Bundles and quantity breaks. Average order value moves faster than conversion rate for most stores.",
      "Loyalty and subscribe and save. Repeat purchase is 5x cheaper than acquisition. Build the mechanism early.",
      "Meta and Google feed hygiene. Titles, GTINs, product categories. A clean feed makes ads 20 to 40 percent cheaper without touching creative.",
      "Server-side tracking. iOS restrictions and ad blockers eat 20 to 40 percent of your Meta data. GA4 plus a server-side container fixes it.",
      "Search on-site. If your search bar returns 'no results' for common queries, you are gifting revenue to Amazon.",
      "That is 15 of the 27. The rest, ranked and scored, live in the audit we run in week one of every ecommerce engagement.",
      "Talk to us. If you want a free 20-minute audit against this checklist, book at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-shopify-vs-headless",
    slug: "shopify-vs-headless",
    title: "Shopify vs Headless Commerce: A Founder's Decision Framework",
    excerpt: "When Shopify wins, when Hydrogen wins, when a fully custom headless stack wins. Real cost curves, real complexity curves, real answers.",
    author: "Origami 99 Product",
    status: "published",
    coverUrl: coverShopify,
    publishedAt: daysAgo(12),
    updatedAt: now(),
    body: [
      "TL;DR. Under 50 million revenue, stay on stock Shopify with obsession about theme speed. 50 to 250 million, go Hydrogen or a hybrid headless. Above 250 million or genuinely global, custom headless earns its keep.",
      "Stock Shopify. Fastest time to revenue, largest app ecosystem, weakest bespoke UX. Great for 90 percent of DTC brands. The trap: 40 apps loaded on every page, three seconds of blocking JavaScript and a checkout you cannot touch.",
      "Shopify Hydrogen. A React-based storefront on Shopify Oxygen. You keep the checkout, the admin and the payments, but the front-end is fully yours. Best of both worlds when you have a design team that can carry a real frontend.",
      "Fully headless (Commerce Layer, Medusa, Saleor, or custom on Postgres). Maximum control, maximum cost, maximum agility. Multi-brand, multi-currency, multi-warehouse, complex B2B logic. This is where enterprise wins.",
      "The cost curve nobody shows you. Stock Shopify starts cheap and gets expensive linearly. Headless starts expensive and gets cheap per order. The break-even is usually around 8 to 15 million in revenue depending on your custom needs.",
      "The three questions that decide. Do you need checkout customisation Shopify does not allow? Do you sell in more than three currencies or countries with different rules? Do you have a real product roadmap that Shopify Plus scripts cannot express?",
      "If two of three are yes, go headless. If none are yes, do not.",
      "How we help. We have built and rescued stores in all three architectures. Talk to us before you commit; migrations are expensive and reversible ones are rare."
    ].join("\n\n")
  },
  {
    id: "b-seo-ai-search",
    slug: "seo-for-ai-search",
    title: "SEO for AI Search: Ranking in ChatGPT, Perplexity and Google AI Overviews",
    excerpt: "The rules changed. Here is how to structure content so LLMs cite you, quote you and send you traffic in the age of AI-first search.",
    author: "Origami 99 Growth",
    status: "published",
    coverUrl: coverSeoAi,
    publishedAt: daysAgo(15),
    updatedAt: now(),
    body: [
      "TL;DR. AI-first search rewards clarity, structure, citations and topical authority. The old game of thin pages and exact-match keywords is over.",
      "Why AI search matters now. Roughly 15 percent of Google queries already trigger an AI overview. Perplexity and ChatGPT together send meaningful referral traffic to sites that get cited. In 2027 this will be the majority of top-of-funnel discovery.",
      "How LLMs pick sources. They favour pages that are unambiguous, well-structured, use semantic HTML, cite authoritative sources and answer the question in the first paragraph. Fluffy intros are actively penalised.",
      "The new content template. Question in the H1. Direct answer in the first 50 words. Structured sub-sections with H2s that mirror follow-up questions. Bulleted specifics, not prose walls.",
      "Structured data still matters. FAQPage, HowTo, Article, Product, Organization. Give crawlers, and by extension LLMs, the schema to attribute you correctly.",
      "llms.txt is real. A simple markdown file at your root that tells AI crawlers what your site is and where to find your best pages. Every serious brand should ship one.",
      "Author authority beats domain authority. LLMs weight named human authors with a track record. Ghost-written content ranks worse in AI search than SEO-friendly content did in 2020 Google.",
      "Freshness and recency. AI models pull recent content preferentially. Update your best posts quarterly with a visible 'Last updated' timestamp.",
      "Citations, both ways. Cite primary sources. Get cited by industry publications. The graph of who cites whom is the new PageRank.",
      "Technical foundations do not change. Fast pages, clean HTML, https, mobile-first, no cloaking. If your Core Web Vitals are red, nothing else matters.",
      "How we help. We audit sites specifically for AI search visibility (llms.txt, semantic HTML, JSON-LD, citation posture) and rewrite the content that matters most. Book a discovery call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-digital-marketing-2026",
    slug: "digital-marketing-funnel-2026",
    title: "The Full-Funnel Digital Marketing System That Actually Prints Revenue",
    excerpt: "Awareness, consideration, conversion, retention. The exact channel mix, attribution model and creative cadence we run for high-growth brands.",
    author: "Origami 99 Growth",
    status: "published",
    coverUrl: coverFunnel,
    publishedAt: daysAgo(18),
    updatedAt: now(),
    body: [
      "TL;DR. Great marketing is a system, not a stack. Get the four stages right, measure the right thing at each stage, and the campaigns start compounding.",
      "Awareness. Meta advantage plus TikTok for consumer, LinkedIn plus programmatic for B2B. Measure by branded search lift and direct traffic, not last-click ROAS.",
      "Consideration. Retargeting, email nurture, content marketing and organic social. Measure by qualified-lead cost and time-to-first-response.",
      "Conversion. Google Search, retargeting, comparison content, sales enablement. Measure by CAC payback and blended ROAS.",
      "Retention. Lifecycle email, SMS, loyalty programs, community. Measure by 90-day repeat rate and LTV.",
      "The one attribution model to trust. None of them in isolation. Blend a modelled MMM (media mix model) with post-purchase surveys ('how did you hear about us?') and platform-reported ROAS. Triangulate; do not worship any single number.",
      "Creative cadence. Ship 8 to 12 new creative concepts per week if you are spending over 100k a month. Below that, 3 to 5 is enough. Winners get scaled, losers get killed at 72 hours.",
      "Content velocity. One long-form asset a week, cut into 10 short-form pieces, repurposed across channels. The engine is the same on every account we run.",
      "Server-side tracking. If you are not running server-side tagging in 2026, you are flying blind. Meta and Google both need the signal.",
      "Team structure that works. One growth lead, one performance marketer, one creative strategist, one motion designer, one analyst. Below that scale, we run the pod for you.",
      "Talk to us. If you want the same operating system running on your account inside 30 days, book a call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-erp-implementation",
    slug: "erp-implementation-guide",
    title: "ERP Implementation Without the 18-Month Nightmare",
    excerpt: "The reason most ERP projects fail is not the software. It is the process. Here is how to ship in 90 days without ripping out your business.",
    author: "Origami 99 Product",
    status: "published",
    coverUrl: coverErp,
    publishedAt: daysAgo(22),
    updatedAt: now(),
    body: [
      "TL;DR. Scope narrow, keep the finance module last, integrate before you customise and pilot in one warehouse before you roll out to all of them.",
      "Why ERP projects fail. In our experience, 80 percent of failures trace to three causes: over-scoping in month one, customising the vendor product instead of the workflow, and skipping the change management with operations staff.",
      "The 90-day rule. If your first go-live is more than 90 days out, you have scoped wrong. Pick one business unit, one product line, one workflow. Ship it. Then expand.",
      "Modules in the right order. Inventory and warehouse first. Sales and CRM second. Manufacturing third. Finance last. Finance is where projects go to die because the accounting team correctly refuses to accept a system that is not perfect.",
      "Custom vs. vendor. Never customise the vendor for a workflow you can change. Always customise for a workflow that is a competitive advantage.",
      "Integration is not optional. Your ERP must talk to your shop floor scanners, your ecommerce store, your shipping provider and your bank. Budget 40 percent of the total project for integrations.",
      "Change management is 30 percent of the budget. Training, documentation, super-users, a hyper-care period. Skip this and users route around the system inside a month.",
      "Data migration is 20 percent. Old data is dirty. Clean it before you migrate, not after.",
      "How we build. We ship custom ERP modules on modern stacks (Postgres, TypeScript, edge deployment) that integrate with your existing SAP, Oracle or NetSuite where useful, and replace them where necessary. Full white-label under your brand.",
      "Book a scoping call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-real-estate-crm",
    slug: "real-estate-crm-buyers-guide",
    title: "Choosing a Real Estate CRM: A No-BS Buyer's Guide",
    excerpt: "WhatsApp-first, listings-aware, portal-integrated. What agencies actually need in a CRM and why the American giants do not fit.",
    author: "Origami 99 Product",
    status: "published",
    coverUrl: coverCrm,
    publishedAt: daysAgo(26),
    updatedAt: now(),
    body: [
      "TL;DR. If you are outside the US, most global real estate CRMs are the wrong shape. You need WhatsApp threading, portal syndication (Bayut, Property Finder, Dubizzle), Arabic UI, agent-level commission tracking and offline-first mobile. Build or pick regional.",
      "The 12 features that matter. WhatsApp Business inbox with lead threading. Automatic lead capture from every portal. Round-robin lead assignment with SLA timers. Agent leaderboards. Listing syndication with duplicate detection. Video walkthroughs stored per unit. Buyer preference matching with alerts. Commission and split tracking per deal. Offline-capable mobile for site visits. Multi-language (Arabic and English at minimum). Audit trail for compliance. WhatsApp broadcast segmented by preference.",
      "The features that sound good and do not matter. AI-generated listing descriptions (agents prefer their own voice). Fancy pipeline visualisations (Kanban is enough). Overly complex reporting (three numbers matter: pipeline value, response time, deals per agent).",
      "Build vs. buy. If you have more than 25 agents or you sell in more than two markets, custom pays for itself in year two. Below that, use a regional player.",
      "How we help. We build and white-label real estate CRMs used by top-10 agencies in the Gulf. Portal integrations, WhatsApp, commission engine, agent app, all under your brand. Book a call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-wms-automation",
    slug: "warehouse-management-automation",
    title: "Warehouse Management Automation: From Paper to Predictive",
    excerpt: "The five-phase upgrade path from clipboard chaos to a predictive WMS with slotting, cycle counts, dock scheduling and 3PL SLA monitoring.",
    author: "Origami 99 Engineering",
    status: "published",
    coverUrl: coverWms,
    publishedAt: daysAgo(29),
    updatedAt: now(),
    body: [
      "TL;DR. Skip the giant WMS rip and replace. Automate in five phases, each of which pays for itself before the next one starts.",
      "Phase 1: Scan everything. Barcode or RFID at receiving, put-away, pick, pack and ship. Nothing else matters until inventory accuracy is above 98 percent.",
      "Phase 2: Slotting intelligence. Fast movers to the golden zone. Heavy items low. Similar items apart to prevent mis-picks. A weekly re-slotting script recovers 15 to 25 percent of pick time.",
      "Phase 3: Wave planning. Group orders by zone, carrier and cut-off. Pickers walk once for many orders.",
      "Phase 4: Cycle counts. Continuous, not annual. A rolling 5 percent of SKUs per week keeps inventory clean without a shutdown.",
      "Phase 5: Predictive dock scheduling and SLA monitoring. Predict inbound arrivals from PO data plus carrier telemetry. Alert on likely late shipments before they cost you a customer.",
      "The tech. A modern WMS runs on the edge (offline-first scanners, sync when back online), a Postgres backbone, event-driven integrations to your carriers and a dashboard that answers three questions: what is late, what is missing and what is expensive to pick.",
      "How we build it. We ship WMS modules end to end, from mobile scanner apps to the 3PL SLA dashboard, under your brand. Talk to us at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-pos-loyalty",
    slug: "pos-and-loyalty-2026",
    title: "Modern POS + Loyalty: Turning Every Checkout Into a Retention Event",
    excerpt: "How the best retailers turn a 20-second transaction into a lifetime relationship. AI upsell, tiered loyalty, wallet integration and floor heatmaps.",
    author: "Origami 99 Product",
    status: "published",
    coverUrl: coverPos,
    publishedAt: daysAgo(33),
    updatedAt: now(),
    body: [
      "TL;DR. The POS is the highest-intent moment in retail. Ninety percent of stores waste it. Modernise the POS and you unlock the cheapest CRM channel you will ever have.",
      "The three POS upgrades that print money. AI copilot at the till suggesting bundles and upsells based on the current cart plus the customer history. Tiered loyalty enrolment in one tap, wallet-native (Apple Wallet, Google Wallet). Post-purchase receipts that carry the next visit incentive already personalised.",
      "The dashboards that decide. Floor heatmap by till, hour and day. Peak till alerts to redeploy staff before queues form. Loyalty tier mix trending weekly. Top spenders and their preferred categories.",
      "Wallet loyalty. Plastic cards are dead. Push a wallet pass on first purchase, update it live with points, tier and expiring rewards. Push notifications are the last remaining free retention channel.",
      "Fraud and shrink. Modern POS should flag anomalous voids, refunds and manager overrides in real time. Most shrink is procedural, not criminal, and dashboards catch it.",
      "White-label. Origami 99 ships PulsePOS as a fully white-labelled retail command centre: multi-store, multi-country, wallet-integrated, AI-copiloted. Deployed under your brand.",
      "Book a demo at /#contact."
    ].join("\n\n")
  },
  // ============= 4 new expert SEO articles =============
  {
    id: "b-local-seo-home-services",
    slug: "local-seo-for-home-services",
    title: "Local SEO for HVAC, Plumbing & Roofing: The 2026 Playbook",
    excerpt: "How home-services businesses win the map pack, ship 3x more calls, and stop bleeding budget on Google Local Service Ads that never convert.",
    author: "Origami 99 Growth",
    status: "published",
    publishedAt: daysAgo(1),
    updatedAt: now(),
    category: "SEO",
    tags: ["local-seo", "home-services", "hvac", "plumbing", "roofing", "gbp"],
    body: [
      "TL;DR. If you run an HVAC, plumbing, roofing or duct-cleaning company, 70% of your inbound revenue depends on three assets: your Google Business Profile, your service-area landing pages, and your review velocity. Fix those three, ignore the noise, and the phone rings.",
      `Why local SEO is a different game. Local intent ("emergency AC repair near me") triggers Google's Local Pack, the three-result map at the top of the results page. That pack captures roughly 44% of all clicks on a local query. Everything below it competes for scraps. If you are not in the top three for your primary city plus service, you are invisible.`,
      "1. Fix your Google Business Profile like your revenue depends on it, because it does. Complete every field. Add real photos monthly (Google favours active profiles). Use your exact business name (no keyword stuffing, it will get you suspended). Match your NAP (Name, Address, Phone) letter-for-letter with your website footer and every citation on the internet.",
      '2. Categories are the single most under-optimised field. Your primary category is a ranking signal. "HVAC contractor" ranks for different queries than "Air conditioning repair service." Pick the primary category that matches your highest-value service, then add every legitimate secondary category Google offers (up to 9). We routinely see a 30-40% rank lift from category clean-up alone.',
      '3. Service-area pages that actually rank. Every serviceable city needs its own dedicated URL, unique copy (never spun), local proof (job photos with GPS metadata, city-specific testimonials), embedded map, local schema markup and a click-to-call CTA above the fold. "HVAC Repair in Mesa, AZ" is not the same page as "HVAC Repair in Tempe, AZ." Cutting corners here is how agencies get you a Google penalty.',
      "4. Reviews are the growth engine you are underinvesting in. Volume, velocity, recency, response rate. All four matter. The winners in every market ask for a review after every completed job, via SMS, with a one-tap link, and reply to 100% of them within 24 hours. A profile with 400 reviews averaging 4.8 will outrank a profile with 40 reviews averaging 5.0 almost every time.",
      "5. Local schema markup is not optional. LocalBusiness, Service, and FAQPage JSON-LD on every service-area page. Include aggregateRating, areaServed, priceRange and telephone. This is how you show up as a rich result with stars in the SERP, and rich results get roughly 30% more clicks than plain blue links.",
      "6. NAP consistency across the top 30 citations. Yelp, Angi, HomeAdvisor, BBB, Facebook, Apple Maps, Bing Places, YellowPages, plus the industry-specific ones (NATE for HVAC, PHCC for plumbing, GAF for roofing). Every citation must use the same NAP, formatted identically. Inconsistent NAPs are a silent ranking killer and every agency that skips this step is stealing from you.",
      "7. GBP posts, Q&A and messaging. Post weekly (offers, seasonal reminders, job spotlights). Seed and answer your own FAQ in the Q&A section, Google shows these directly in the profile. Enable messaging and reply within 15 minutes; response time is a visible ranking factor.",
      "8. Build local backlinks the boring way. Sponsor a Little League team. Get on your city's Chamber of Commerce page. Guest post on the local news blog. Get quoted in a HomeAdvisor piece. Ten authoritative local backlinks beat a hundred generic guest posts every single time.",
      "9. Track calls, not clicks. Install call tracking (CallRail, WhatConverts) with dynamic number insertion so every source, GBP, organic, LSA, Meta, gets its own trackable number. Feed those calls into your CRM. Optimize against booked jobs, not phone rings.",
      `10. Google Local Service Ads (LSAs), treat them as a rented lead source, never a substitute for organic. LSAs charge per lead, not per click, and Google's "Google Guaranteed" badge lifts trust. But LSA-only businesses hit a ceiling: you cannot control which leads you get, and Google keeps raising the price. Rank organically in the map pack AND run LSAs, and your cost per booked job drops 40-60%.`,
      "The FAQ your competitors are not answering.",
      'How long until local SEO works? Realistic honest answer: 90-120 days for the map pack in a mid-competition city. 6-9 months in a top-10 metro. Anyone promising "page 1 in 30 days" is running a churn-and-burn agency.',
      "Should I hire a local SEO agency or do it in-house? If you are under $500k revenue, do it in-house with a checklist. Between $500k-$5M, hire a specialist agency. Above $5M, build an in-house SEO plus retain a technical partner for audits.",
      "Do reviews from Yelp help my Google ranking? Indirectly, they build citation authority. Directly, no, Google only counts reviews on its own profile.",
      "How Origami99 helps. We rebuilt local SEO for Cali Pro Garage (rank 1 in 12 California cities), San Jose Heat & Cooling (Bay Area top-3 GBP), A1 Phoenix Plumbing (+412 calls per month), and The Ductibles in Calgary (GBP rank 1). Same playbook, ruthlessly executed. If you want an audit against this checklist, book a call at /#contact or explore our /services/seo page."
    ].join("\n\n")
  },
  {
    id: "b-wp-webflow-custom",
    slug: "wordpress-vs-webflow-vs-custom",
    title: "WordPress vs Webflow vs Custom: The CMS Decision Matrix for 2026",
    excerpt: "Stop letting your web agency default to whatever they know. A hard-numbers decision framework across TCO, speed, SEO, editor UX and true portability.",
    author: "Origami 99 Product",
    status: "published",
    publishedAt: daysAgo(4),
    updatedAt: now(),
    category: "Product",
    tags: ["cms", "wordpress", "webflow", "custom", "decision-framework"],
    body: [
      "TL;DR. WordPress is the right answer when you need mature ecommerce, complex membership, or a team that already knows it. Webflow is right when design velocity matters more than backend flexibility and your site is under 500 pages. Custom (Next.js, TanStack Start, Astro) wins when the site IS your product, high traffic, deep integrations, or a moat you cannot buy off the shelf.",
      "The wrong reason to pick a CMS. Because the agency you hired only knows one. This is how most bad choices get made, and it is expensive to reverse. Insist on the decision matrix below before signing anything.",
      "The five axes that actually matter.",
      "1. Total Cost of Ownership over 3 years. WordPress: hosting + premium plugins + occasional dev fixes ≈ $3-8k/year for a real site. Webflow: workspace + CMS plan + third-party form/search plugins ≈ $5-15k/year. Custom: hosting (Cloudflare/Vercel) is nearly free, but you pay for the initial build ($20-80k) and ongoing engineering. Custom is cheapest at 5+ years for medium/large sites and most expensive at year 1.",
      "2. Editor UX. Non-technical marketers write and publish on this thing every day. WordPress with the Gutenberg block editor is genuinely good in 2026, better than most people remember. Webflow's editor is best-in-class for structural changes but confuses non-designers with class-based styling. Custom needs a headless CMS layer (Sanity, Contentful, Payload) to be usable by marketers, do not ship a custom site without one.",
      "3. Page speed & Core Web Vitals. Ranked best to worst on a like-for-like site with a real budget: Custom (Astro/Next.js on Cloudflare) → Webflow → WordPress. WordPress can hit green Core Web Vitals but requires disciplined dev work (Cloudways/Kinsta hosting, WP Rocket, minimal plugins). Webflow is fast by default up to about 500 pages. Custom is fastest by default and stays fast.",
      "4. SEO ceiling. All three can rank equally well up to the mid-market. Above that, custom wins because you control every render, every header, every route, every schema output. Webflow's SEO controls have improved but still have edge cases (dynamic OG images, complex hreflang, programmatic SEO at scale). WordPress with Yoast/RankMath is still the most familiar to SEO consultants.",
      "5. True portability. This is the axis most decision-makers ignore until year 4, when they need to leave. WordPress content is portable (WXR export, standardised database). Webflow content is stuck (their export is a static snapshot, not a working system). Custom is fully portable by definition, you own the code and the database.",
      "The decision matrix, in one paragraph.",
      "Marketing site, <500 pages, non-technical team, design velocity matters: Webflow. Marketing site + WooCommerce or membership + a dev team you already have: WordPress. High-traffic content platform, app-like performance, or a real product roadmap: Custom on TanStack Start / Next.js / Astro with a headless CMS.",
      'What we hear from clients who chose wrong. "We picked Webflow for the design and now our SEO team cannot ship programmatic pages." "We picked WordPress and 40 plugins are now our biggest security risk." "We built custom and marketing cannot update a blog post without a developer." Every one of these is avoidable with an honest scoping conversation up front.',
      "The migration escape hatches. WordPress → Custom is straightforward (WP REST API). Webflow → anything is painful (export limitations). Custom → anything is easy if you owned the database. Plan for the exit before you sign the entry.",
      'How Origami99 helps. We are opinionated but not religious. We have shipped WordPress builds (Enfield Royal Clinics, Hazel Beauty Bar, Realtor Atif), Webflow rebuilds, and custom TanStack Start platforms (PowerCabs, Susan, Glowie). Our first conversation is always "which one is right for you," not "buy what we know." Book that call at /#contact.'
    ].join("\n\n")
  },
  {
    id: "b-hiring-agency-checklist",
    slug: "hiring-a-development-agency-checklist",
    title: "How to Hire a Development Agency Without Getting Burned: The 25-Point RFP Checklist",
    excerpt: "The exact questions we would ask any agency before signing. Red flags, contract clauses, IP ownership, hidden costs and the five deal-breakers.",
    author: "Origami 99 Product",
    status: "published",
    publishedAt: daysAgo(9),
    updatedAt: now(),
    category: "Playbook",
    tags: ["hiring", "rfp", "agency", "contracts", "procurement"],
    body: [
      "TL;DR. The wrong agency is more expensive than no agency. This checklist is what we would use to hire us, and what we watch out for whenever a client asks us to audit a stalled project.",
      "The interview. Talk to at least three agencies. If the first agency you speak to also writes your RFP, that is a red flag and you already know how it ends.",
      "The 25 questions to ask, grouped.",
      "Team & seniority. 1) Who exactly is on my project, names, LinkedIn profiles, hours per week? 2) What is the average seniority of the people who will write my code (junior/mid/senior/lead)? 3) Is the person selling this project the same one delivering it? 4) What happens if my lead engineer leaves during the project? 5) Do you subcontract, and if so, where and to whom?",
      'Process & delivery. 6) Show me three timelines from real completed projects and how they compared to the original plan. 7) What is your definition of "done" for a milestone? 8) How do you handle scope changes, fixed change orders, T&M, or absorbed? 9) What is your QA process, manual, automated, both, neither? 10) What does week 1 look like day-by-day?',
      "Code & IP ownership. 11) Do I own 100% of the source code, in writing, from day one? 12) Do I get the git repository on my own GitHub/GitLab org from commit one, not on delivery? 13) Are you using any proprietary agency frameworks I cannot maintain without you? 14) What third-party dependencies will I be locked into?",
      "Post-launch. 15) What does support look like after launch, hourly, retainer, SLA-backed? 16) What is your bug-fix guarantee window and what qualifies as a bug vs. a change request? 17) Who owns and pays for hosting, monitoring, DNS, domains and cloud accounts? 18) Can I move the code to another provider, is there a documented runbook?",
      "Commercial. 19) Is this a fixed-price project, a not-to-exceed, or time and materials, and what are the trigger points to move between them? 20) What is your payment schedule and what happens if a milestone slips (yours or ours)? 21) Are there kill fees, and what are the exit terms? 22) Show me the three most common change-order categories on projects like mine, with average costs.",
      "Culture & communication. 23) What timezones will my project team work in and what are core overlap hours? 24) Which project management tool will we use and do I have real-time access? 25) Who is the executive sponsor if we hit a serious escalation?",
      "The five hard deal-breakers. Any single one of these should end the conversation.",
      "1) They refuse to name the actual engineers on the project. 2) They will not give you the git repo until final payment. 3) The contract has a non-compete or non-solicit clause that prevents you from hiring anyone else in your industry. 4) They cannot show you three real, live, working projects with references you can call. 5) The proposal has a fixed price with no scope document longer than 3 pages, this is a bait-and-switch waiting to happen.",
      "Contract clauses to insist on. Full IP transfer on payment of each milestone (not the whole project). Source code escrow if it is a large engagement. Data ownership and export clause. Clear termination-for-convenience clause with kill fees defined up front. Warranty period of 60-90 days post-launch for defects.",
      "How to test them cheaply. Buy a small scoping engagement ($3-8k) before you commit to the big build. You will learn more from three weeks of working together than from three months of pitches and case studies.",
      "How Origami99 approaches this. We publish our engineer names, hand over the git repo on day one, work on fixed scopes with defined change orders, and offer a paid discovery week before you commit to build. That is our answer to every question above. If it is the answer you are looking for from your next agency, we should talk, /#contact."
    ].join("\n\n")
  },
  {
    id: "b-google-ads-lead-gen",
    slug: "google-ads-for-lead-gen-2026",
    title: "Google Ads for Lead Gen in 2026: Smart Bidding, Offline Conversions & The CRM Feedback Loop",
    excerpt: "The lead-gen Google Ads playbook that separates the top 5% of accounts from the rest. Smart bidding done right, GCLID-to-close-rate feedback, and the mistakes killing your ROAS.",
    author: "Origami 99 Growth",
    status: "published",
    publishedAt: daysAgo(14),
    updatedAt: now(),
    category: "Paid Media",
    tags: ["google-ads", "paid-media", "lead-gen", "smart-bidding", "ppc"],
    body: [
      "TL;DR. If Google Ads is optimising toward form submissions and not toward closed revenue, you are paying Google to bring you the worst leads in your market. Fix the feedback loop, teach smart bidding to chase revenue, and watch cost per closed deal drop 40-60% in a quarter.",
      `Why most lead-gen accounts stall. Because they measure the wrong thing. Google's algorithms are shockingly good at finding whatever you tell them to find. If your "conversion" is a form fill, you will get plenty of form fills, from tire-kickers, students, competitors, and bots. Your ROAS on paper will look fine while your sales team burns out chasing garbage.`,
      'The one shift that changes everything: offline conversion imports. Instead of optimising to "form submitted," you optimise to "lead marked qualified," "deal closed," or better yet "revenue value." You do this by capturing the Google Click ID (GCLID) on every form submission, storing it against the lead in your CRM, then pushing back to Google when that lead progresses (qualified → proposal → closed-won) with the actual deal value.',
      "The pipe. 1) Add GCLID as a hidden form field on every landing page. 2) Store GCLID against every lead in HubSpot/Salesforce/Pipedrive/Zoho. 3) On stage change (or via a weekly export), push offline conversion events back to Google Ads with GCLID + conversion action + value. 4) Wait 4-6 weeks for the algorithm to relearn. 5) Watch smart bidding find the leads that actually close.",
      "Smart bidding, which strategy, and when. Maximize Conversions: fine only when you cannot yet feed value data back. Maximize Conversion Value: correct default for lead gen once offline conversions are wired up. Target ROAS: only when you have >30 conversions per campaign per month with reliable value data. Manual CPC: still useful for brand campaigns and low-volume test learnings, otherwise obsolete.",
      "The Performance Max question. PMax is powerful for ecommerce and lethal for lead gen if you feed it bad conversion data. Only run PMax after offline conversions are firing, and always exclude your brand terms via account-level negative keywords (or you will pay for traffic that would have converted anyway).",
      "Landing page hygiene that Google Ads accounts consistently ignore. One clear offer above the fold. Mobile load under 2 seconds (test on 3G, not your office wifi). Form under 5 fields, every extra field drops conversion 8-10%. Trust signals near the CTA (reviews, logos, security badges). A phone number that clicks-to-call on mobile.",
      'Search terms report, read it weekly. This is where the money hides. Every week, sort by cost, look at the top 50 queries, and add negatives ruthlessly. Common cash-burn queries in lead-gen accounts: "free," "salary," "jobs," "reviews," "vs," "how to," "login," your competitor names when you are on a broad match campaign.',
      "Ad extensions in 2026. Callouts, structured snippets, sitelinks, table stakes. Lead form extension, an underused goldmine for high-intent mobile queries. Image extensions, big lift in CTR on service categories. Promotion extensions, only if the promotion is real; Google will disapprove synthetic ones.",
      "The 5 mistakes that quietly kill accounts.",
      "1) Broad match without smart bidding + tROAS + offline conversions. This trio is the safety net. Without it, broad match is the fastest way to burn budget.",
      "2) One massive campaign covering 50 keywords across 5 services. Split by intent and service line so bidding can optimise per audience.",
      "3) No brand campaign. Competitors will bid on your brand. A cheap brand campaign at $50/day defends the SERP and stops them.",
      "4) Ignoring device bid adjustments. Mobile behaves differently. If your data shows mobile converts at half the rate of desktop, adjust, do not average.",
      "5) Not talking to sales. The best PPC managers we have hired sit in on sales calls monthly. Listen to what closed clients say, feed that language back into ads.",
      "Budget benchmarks for honest lead gen. B2B services: expect $80-250 cost per qualified lead depending on category. Home services: $30-120 CPQL, higher in top-10 metros. SaaS: $150-600 CPQL for mid-market, $500-2000 for enterprise. If your numbers are wildly outside these ranges either you have found a moat, or the data is lying, audit before you scale.",
      "How Origami99 helps. We rebuild lead-gen accounts around the CRM feedback loop, then hand back an account that any decent in-house marketer can run. No lock-in, no monthly retainer required if you would rather graduate. If you want an audit of your account against this framework, book a call at /#contact."
    ].join("\n\n")
  },
  {
    id: "b-what-is-an-ai-agency",
    slug: "what-is-an-ai-agency",
    title: "What Is an AI Agency? A 2026 Field Guide for Founders and CMOs",
    excerpt: "AI agencies do not just run ads or ship websites, they engineer intelligence into every step of your business. Here is what that actually means, how they differ from traditional digital agencies, and how to pick one that ships.",
    author: "Origami 99 Strategy",
    status: "published",
    coverUrl: coverAi,
    publishedAt: daysAgo(1),
    updatedAt: now(),
    body: [
      "TL;DR. An AI agency is a modern digital agency that uses artificial intelligence as its core execution layer. Instead of paying a traditional agency to run manual campaigns, hand code websites and staff spreadsheets, you hire an AI agency to design systems where models, automation and human strategists work together to grow the business.",
      "Definition. An AI agency is a professional services firm that combines strategy, design, engineering and marketing with production grade AI. It ships software, websites, campaigns, content and workflows where machine learning, large language models, retrieval augmented generation, generative design and predictive analytics do the heavy lifting, supervised by senior humans.",
      "What an AI agency actually does. Five capabilities separate an AI agency from a traditional one.",
      "1. AI native product engineering. Custom software and SaaS built with LLMs, embeddings, agents and structured tool calling as first class citizens, not afterthoughts. Think AI powered support desks, underwriting engines, recommendation systems, document processing, internal copilots and vertical SaaS with intelligence at the core.",
      "2. Predictive and generative marketing. Media buying informed by machine learning bid models, creative generated and iterated with generative AI, personalization powered by first party data plus embeddings, and forecasting that tells the CMO which channel to double down on before the quarter ends.",
      "3. Generative design and content at scale. Design systems, ad creative, product photography, video, landing pages and long form content produced by a hybrid pipeline of senior designers, writers and AI models. Volume without the sludge, quality without the timeline of a boutique studio.",
      "4. Automation and agent workflows. Repetitive back office work handled by AI agents that read email, update the CRM, book meetings, generate proposals, monitor competitors and file reports. Every hour saved is a compounding operational advantage.",
      "5. Data foundations. Warehouses, event tracking, identity resolution, feature stores and evaluation harnesses so the AI actually has something intelligent to be intelligent about. No data foundation, no real AI.",
      "AI agency vs traditional digital agency. A traditional agency sells hours of human labour. An AI agency sells outcomes powered by systems that keep improving after delivery. A traditional agency scales linearly with headcount. An AI agency scales exponentially with data, models and workflows. A traditional agency ships a website. An AI agency ships a website that personalises itself, writes its own landing pages and hands qualified leads to sales while your team sleeps.",
      "AI agency vs in house AI team. In house AI teams are powerful once they exist, but hiring senior AI engineers, ML platform leads, prompt engineers and MLOps specialists takes twelve to twenty four months and a seven figure budget. A good AI agency plugs a senior, cross disciplinary squad into your business in a week, ships production systems in weeks not quarters, and can either transfer the system to your team later or keep running it for you. Most Origami99 clients use us for the first two years, then graduate the workflows they want to own and keep us on the ones they do not.",
      "Signals you actually need an AI agency. You are a founder or CMO and you keep hearing that competitors are using AI to move faster. Your team is drowning in repetitive tasks that a well designed workflow could automate tomorrow. Your product roadmap has AI features on it that keep slipping. Your paid media is plateauing because the creative refresh cycle is too slow. Your website converts poorly on mobile because personalization is generic. Your data lives in five tools and nobody has a unified view. Any two of these and the ROI on an AI agency is almost always positive inside a quarter.",
      "How to evaluate an AI agency in 2026. Ask five questions and demand hard answers.",
      "1. Show me three production AI systems you built, live, in the wild, that we can log into. If the answer is a slide deck and a promise, walk away.",
      "2. Who on your team owns retrieval, evals and cost control? These are the three levers that separate a demo from a durable product. If nobody owns them by name, the system will not survive real users.",
      "3. What does your evaluation harness look like? Golden datasets, offline evals, A B tests in production and per model dashboards are the minimum. Vibes based evaluation is a red flag.",
      "4. How do you keep the AI on budget? Semantic caching, model routing, prompt compression and per feature cost dashboards should be table stakes. If the answer is we monitor it, you are the risk manager.",
      "5. Do we own the code, the prompts and the data? The correct answer is yes. If the agency wants to keep your prompts and infrastructure hostage, you are buying vendor lock in, not intelligence.",
      "Deliverables you should expect. A twelve month AI roadmap tied to specific business KPIs. A production AI feature or workflow live in six to nine weeks. An evaluation harness with a golden dataset for every model touchpoint. Cost dashboards per feature and per model. Prompt libraries checked into your own repository. Retrieval infrastructure your team can inspect. Playbooks for handover so nothing is a black box.",
      "Common pitfalls when hiring an AI agency. Choosing on price. AI systems are not commoditised yet and the cheap ones almost always ship prototypes dressed up as products. Skipping data foundations. Every agency will happily ship a chatbot on your messy data. Only the good ones will refuse until the foundations are right. Buying capability instead of outcomes. If the pitch is we do agents, RAG and evals with no anchor to a business result, that is technology tourism, not strategy. Ignoring change management. Even the best AI system fails if the humans around it do not know how to use it. A serious AI agency spends real hours training your team.",
      "Where the industry is going. By 2027 most mid market companies will operate with AI native software, AI accelerated marketing and AI powered internal workflows as the default. The companies that started the transition in 2025 and 2026 will look at the ones that waited the way ecommerce natives looked at the retailers who ignored the internet in 2003. The gap will be permanent.",
      "How Origami99 fits. Origami99 is an AI agency built from the ground up. One senior team across strategy, product design, software engineering, growth marketing, SEO and brand. Everything we ship is engineered with AI as a first class citizen, from the ERP module that reads your invoices to the paid media stack that generates creative in your brand voice. If you want a hard, unemotional read on whether an AI agency is right for your business, and what the first ninety days would look like, book a scoping call at /#contact."
    ].join("\n\n")
  }
];
const blogSeed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BLOG_COVERS,
  BLOG_SEED
}, Symbol.toStringTag, { value: "Module" }));
const $$splitComponentImporter$z = () => import("./blog-CYm_8qmI.mjs");
const SITE_URL$6 = "https://ai-spark-engine-11.lovable.app";
const Route$A = createFileRoute()({
  head: () => {
    const published = BLOG_SEED.filter((p) => p.status === "published");
    const blogLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Origami 99 Blog",
      url: `${SITE_URL$6}/blog`,
      description: "Expert writing on AI integration, custom software, ecommerce, SEO, digital marketing and enterprise systems from Origami 99.",
      blogPost: published.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL$6}/blog/${p.slug}`,
        image: BLOG_COVERS[p.slug] ? `${SITE_URL$6}${BLOG_COVERS[p.slug]}` : void 0,
        datePublished: p.publishedAt,
        author: {
          "@type": "Organization",
          name: p.author
        }
      }))
    };
    return {
      meta: [{
        title: "Blog, Origami99, AI, Growth & Engineering"
      }, {
        name: "description",
        content: "Expert insights on AI integration, custom software, ecommerce, SEO and digital marketing from the Origami99 senior team."
      }, {
        property: "og:title",
        content: "Blog, Origami99, AI, Growth & Engineering"
      }, {
        property: "og:description",
        content: "Expert insights on AI integration, custom software, ecommerce, SEO and digital marketing from the Origami99 senior team."
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: `${SITE_URL$6}/blog`
      }],
      links: [{
        rel: "canonical",
        href: `${SITE_URL$6}/blog`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(blogLd)
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./cookies-BlXYDS0y.mjs");
const SITE_URL$5 = "https://ai-spark-engine-11.lovable.app";
const Route$z = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Cookie Policy, Origami 99"
    }, {
      name: "description",
      content: "The cookies Origami 99 uses, why we use them, and how to withdraw consent at any time."
    }, {
      property: "og:title",
      content: "Cookie Policy, Origami 99"
    }, {
      property: "og:description",
      content: "The cookies Origami 99 uses, why we use them, and how to withdraw consent at any time."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: `${SITE_URL$5}/cookies`
    }, {
      name: "robots",
      content: "index, follow"
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL$5}/cookies`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./privacy-CsLDLZuq.mjs");
const SITE_URL$4 = "https://ai-spark-engine-11.lovable.app";
const Route$y = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Privacy Policy, Origami 99"
    }, {
      name: "description",
      content: "How Origami 99 collects, uses and protects personal data. GDPR, CCPA/CPRA and global privacy rights explained plainly."
    }, {
      property: "og:title",
      content: "Privacy Policy, Origami 99"
    }, {
      property: "og:description",
      content: "How Origami 99 collects, uses and protects personal data. GDPR, CCPA/CPRA and global privacy rights explained plainly."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: `${SITE_URL$4}/privacy`
    }, {
      name: "robots",
      content: "index, follow"
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL$4}/privacy`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const LEGACY_REDIRECTS = {
  "software-development": "software",
  "mobile-app-development": "software",
  "ui-ux-design": "software",
  "custom-saas": "software",
  "erp-development": "software",
  "ai-solutions": "software",
  "industrial-deployment": "software",
  "cloud-solutions": "software",
  "analytics-cro": "digital-marketing",
  "google-meta-ads": "digital-marketing",
  "video-editing": "digital-marketing",
  "branding": "brand-identity"
};
const SERVICES = [
  {
    slug: "software",
    icon: CodeXml,
    title: "Software Development",
    tagline: "Software, apps, SaaS and ERP, built end to end by one senior team.",
    hero: "One team builds the whole thing. Apps for phones, systems for your office, products you sell to customers. We plan it, build it, launch it, and keep it running as you grow.",
    category: "Build",
    benefits: [
      { title: "One team for the whole build", desc: "Design, code, testing and hosting handled in house. No handoffs between vendors, no one to blame but us." },
      { title: "Senior people only", desc: "Every line of code is written or checked by a senior engineer. No juniors learning on your budget." },
      { title: "Built to run in the real world", desc: "Monitoring, backups, tests and documentation are part of the build, not an extra you pay for later." }
    ],
    process: [
      { step: "01", title: "Understand", desc: "We learn how your business works, agree what success looks like, and write the plan before any code." },
      { step: "02", title: "Plan the build", desc: "Data, security and hosting decisions made up front, in plain language, so there are no surprises later." },
      { step: "03", title: "Design", desc: "Clickable screens you can try before we build them, tested with the people who will use them daily." },
      { step: "04", title: "Build", desc: "Two week cycles with a working demo at the end of each one. You see real software, not status decks." },
      { step: "05", title: "Launch and grow", desc: "A smooth release with no downtime, then a roadmap and a team that stays with you after go live." }
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "Go", "Python", "React Native", "Swift", "Kotlin", "PostgreSQL", "Redis", "AWS", "GCP", "Kubernetes"],
    subServices: [
      { icon: CodeXml, title: "Custom Software Development", desc: "Bespoke platforms, internal tools and industrial systems engineered for performance and scale.", href: "/services/software/custom-software-development" },
      { icon: Database, title: "Custom SaaS Products", desc: "Multi tenant SaaS with auth, billing, entitlements and observability, MVP in six weeks.", href: "/services/software/custom-saas-products" },
      { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross platform iOS and Android apps with offline first architecture and store ready pipelines.", href: "/services/software/mobile-app-development" },
      { icon: Palette, title: "UI and UX Design", desc: "Research led product design and design systems that convert while feeling inevitable.", href: "/services/software/ui-ux-design" },
      { icon: Boxes, title: "ERP Development", desc: "Modular finance, inventory, HR and operations modules that integrate with your existing stack.", href: "/services/software/erp-development" },
      { icon: Brain, title: "AI Solutions", desc: "RAG pipelines, chatbots, custom LLM integrations and workflow automation tied to your KPIs." },
      { icon: Cloud, title: "Cloud and Infrastructure", desc: "AWS, GCP and Cloudflare architecture, cost tuned, multi region, 99.99 percent uptime." },
      { icon: Server, title: "DevOps and Deployment", desc: "CI CD, Kubernetes, blue green and canary releases engineered for industrial reliability." }
    ],
    tools: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "React Native" },
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Stripe" },
      { name: "Figma" },
      { name: "OpenAI" }
    ],
    faqs: [
      { q: "Can you take a product from zero to launch?", a: "Yes. Most greenfield builds go from kickoff to a live MVP in six to nine weeks, then scale from there." },
      { q: "Do you work with our existing team?", a: "Often. We embed with in house product and engineering as a senior squad, or we run the whole build. Your call." },
      { q: "Who owns the code?", a: "You do. Full IP transfer, all repositories, credentials and documentation handed over from day one." },
      { q: "What about long term support?", a: "SLA backed maintenance, on call rotation and a continuous improvement backlog. We stay after launch." },
      { q: "How do you keep the build on budget?", a: "Fixed price roadmap, weekly demos, and a change log every Friday. No surprise invoices." },
      { q: "What if we already have a design system?", a: "Perfect. We extend it, document it and ship inside your existing tokens instead of forcing a rebuild." }
    ],
    caseSpotlight: {
      client: "Power Cabs",
      story: "A full dispatch, driver and finance platform rebuilt from scratch. Native driver app, live map, real time ride events, admin dashboards and payout automation, delivered in nine weeks.",
      metrics: [
        { k: "9 wks", v: "Kickoff to live" },
        { k: "42%", v: "Faster dispatch" },
        { k: "0", v: "Rollback releases" }
      ]
    },
    deliverables: [
      "Discovery, tech blueprint and roadmap",
      "Design system in Figma with tokens",
      "Native iOS and Android builds",
      "Web app with role based access",
      "Admin dashboard and reporting",
      "CI CD pipeline and observability",
      "Full documentation and handover",
      "90 days of post launch support"
    ],
    guarantees: [
      { title: "Fixed price roadmap", body: "You get a written scope and estimate before we start. No surprise invoices." },
      { title: "Weekly working demos", body: "Every Friday you see real software, not screenshots or status decks." },
      { title: "You own everything", body: "Repos, cloud accounts, design files, IP. Full handover from day one." }
    ]
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    tagline: "Custom sites, ecommerce and CMS builds that convert on every device.",
    hero: "From hand coded React platforms to Shopify, WordPress, Webflow, Wix, Framer and AI assisted builds, we ship websites that load fast, rank well and turn visitors into revenue.",
    category: "Build",
    benefits: [
      { title: "Core Web Vitals green", desc: "Sub second loads with edge delivery, smart caching and image pipelines." },
      { title: "SEO ready by default", desc: "Semantic markup, structured data and clean URLs, tuned for search from day one." },
      { title: "Built for your team", desc: "A CMS your marketers actually use. No WordPress chaos, no locked in templates." }
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Audience, goals, information architecture and conversion mapping before any pixels move." },
      { step: "02", title: "Design", desc: "Wireframes, design system and conversion led prototypes reviewed in Figma." },
      { step: "03", title: "Build", desc: "Component driven development with accessibility, analytics and CMS baked in." },
      { step: "04", title: "Launch", desc: "QA, performance budget, SEO migration and structured data validation." },
      { step: "05", title: "Optimize", desc: "A B tests, heatmaps and ongoing CRO improvements owned by a dedicated squad." }
    ],
    tech: ["React", "Next.js", "Astro", "Shopify", "WordPress", "Webflow", "Framer", "Wix", "Sanity", "Contentful", "Vercel", "Cloudflare"],
    subServices: [
      { icon: CodeXml, title: "Custom Web Development", desc: "Hand coded React and Next.js sites and web apps for brands that need every millisecond.", href: "/services/web-development/custom-web-development" },
      { icon: ShoppingBag, title: "Shopify and Ecommerce", desc: "Custom Shopify themes, headless storefronts, subscriptions and international commerce.", href: "/services/web-development/shopify-ecommerce" },
      { icon: FileText, title: "WordPress Development", desc: "Editorial and enterprise WordPress builds with headless architecture and speed budgets.", href: "/services/web-development/wordpress-development" },
      { icon: Layers, title: "Webflow and Framer", desc: "Design led marketing sites your team can update without ever opening a ticket.", href: "/services/web-development/webflow-framer" },
      { icon: Globe, title: "Wix and No Code", desc: "For lean brands that need to move today, launched fast, built to convert, not to look generic.", href: "/services/web-development/wix-no-code" },
      { icon: Brain, title: "AI Assisted Website Builds", desc: "AI generated first drafts, hand tuned by senior designers and engineers before launch." },
      { icon: PanelsTopLeft, title: "Landing Pages and Funnels", desc: "Purpose built pages for launches, campaigns and paid traffic, engineered for conversion." },
      { icon: Zap, title: "Web App Interfaces", desc: "Dashboards, admin panels and internal tools with premium UX and a real design system." }
    ],
    tools: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Astro" },
      { name: "Tailwind CSS" },
      { name: "Shopify" },
      { name: "WordPress" },
      { name: "Webflow" },
      { name: "Framer" },
      { name: "Wix" },
      { name: "Sanity" },
      { name: "Contentful" },
      { name: "Vercel" },
      { name: "Cloudflare" },
      { name: "Figma" },
      { name: "GA4" },
      { name: "GSC" }
    ],
    faqs: [
      { q: "Which platform is right for us?", a: "It depends on your team, traffic and roadmap. Discovery is where we recommend Shopify vs headless, WordPress vs Sanity, Webflow vs custom React." },
      { q: "How fast can you launch a website?", a: "A high converting landing page in one to two weeks. A full custom site typically ships in four to eight weeks depending on scope." },
      { q: "Will the site rank on Google?", a: "SEO is baked in. Every build passes technical SEO, structured data and Core Web Vitals checks before it goes live." },
      { q: "Do you migrate from our current platform?", a: "Yes. WordPress to Next.js, Wix to Shopify, custom to Webflow. We plan redirects, preserve rankings and cut over without downtime." },
      { q: "What about ongoing updates?", a: "Your marketers own the CMS. We stay available for a monthly retainer covering iteration, testing and new pages." },
      { q: "Do you support ADA and WCAG accessibility?", a: "Every build ships to WCAG 2.2 AA. We run automated and manual audits before launch." }
    ],
    caseSpotlight: {
      client: "The Longshot Inc",
      story: "A custom Next.js marketing site with a headless CMS, integrated CRM and paid landing pages. Launch to first six figure month in seventy days.",
      metrics: [
        { k: "312%", v: "Traffic lift in 6 mo" },
        { k: "0.9s", v: "Median LCP" },
        { k: "100", v: "Lighthouse SEO" }
      ]
    },
    deliverables: [
      "Wireframes and design system in Figma",
      "Custom or CMS build to spec",
      "Analytics, GA4 and GTM setup",
      "Technical SEO, schema and redirects",
      "Core Web Vitals under 1s LCP",
      "WCAG 2.2 AA accessibility pass",
      "CRM and marketing tool integrations",
      "Post launch iteration and CRO support"
    ],
    guarantees: [
      { title: "Green Core Web Vitals", body: "If your site does not pass Core Web Vitals at launch, we fix it on our time." },
      { title: "No traffic loss on migration", body: "Full redirect map, structured data and preserved link equity, monitored for 90 days." },
      { title: "Your team runs the CMS", body: "No agency dependency. Your marketers publish without opening a ticket." }
    ]
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Growth Marketing",
    tagline: "Paid, organic and creative, orchestrated against revenue.",
    hero: "Google and Meta Ads, TikTok, YouTube, email, influencer, video and content, run by one senior team against a single revenue dashboard. Every dollar traced to pipeline, every creative tested to profit.",
    category: "Growth",
    benefits: [
      { title: "Profit, not impressions", desc: "We optimize against contribution margin and MER, not clicks or vanity engagement." },
      { title: "Creative that ships weekly", desc: "In house editors and motion designers producing new ads every week, tested against control." },
      { title: "Full funnel attribution", desc: "Server side tracking, GA4 and platform conversion APIs so you see the real numbers." }
    ],
    process: [
      { step: "01", title: "Audit", desc: "Account structure, tracking, creative and funnel teardown, benchmarked against the top five in your category." },
      { step: "02", title: "Strategy", desc: "ICP mapping, offer stack, channel mix and creative concepts, tied to revenue targets." },
      { step: "03", title: "Launch", desc: "Restructured campaigns, server side tracking, creative production and landing pages, live in weeks." },
      { step: "04", title: "Scale", desc: "Daily optimization, budget reallocation and creative rotation to profitably increase spend." },
      { step: "05", title: "Report", desc: "Weekly performance reviews, monthly business reviews and quarterly forecast updates." }
    ],
    tech: ["Google Ads", "Meta Ads", "TikTok Ads", "YouTube Ads", "GA4", "HubSpot", "Klaviyo", "Segment", "Triple Whale", "After Effects", "Premiere Pro"],
    subServices: [
      { icon: Target, title: "Google Ads", desc: "Search, Performance Max, YouTube and Display campaigns optimized daily for CPA and ROAS.", href: "/services/digital-marketing/google-ads" },
      { icon: Target, title: "Meta Ads", desc: "Facebook and Instagram Advantage plus, creative testing frameworks and retention funnels.", href: "/services/digital-marketing/meta-ads" },
      { icon: Target, title: "TikTok and Short Form Ads", desc: "Hook first creative built for the feed, tested to profit in seven day windows.", href: "/services/digital-marketing/tiktok-short-form-ads" },
      { icon: Megaphone, title: "Full Funnel Digital Marketing", desc: "Content, email, social and influencer working as one orchestrated funnel, not silos.", href: "/services/digital-marketing/full-funnel-digital-marketing" },
      { icon: Video, title: "Video Editing and Production", desc: "Reels, YouTube ads, brand films and motion graphics engineered for retention and conversion.", href: "/services/digital-marketing/video-editing-production" },
      { icon: PenTool, title: "Creative Strategy", desc: "Concepting, storyboarding and hook engineering. We produce the ideas as well as the ads." },
      { icon: ChartColumn, title: "Analytics and CRO", desc: "Server side tracking, A B testing, heatmaps and data driven UX improvements that compound." },
      { icon: FileText, title: "Email and Lifecycle", desc: "Klaviyo and HubSpot flows that turn one time buyers into recurring revenue." }
    ],
    tools: [
      { name: "Google Ads" },
      { name: "Meta Ads" },
      { name: "TikTok" },
      { name: "YouTube" },
      { name: "GA4" },
      { name: "GTM" },
      { name: "HubSpot" },
      { name: "Klaviyo" },
      { name: "Segment" },
      { name: "Triple Whale" },
      { name: "Hyros" },
      { name: "After Effects" },
      { name: "Premiere Pro" },
      { name: "DaVinci" },
      { name: "Figma" },
      { name: "Notion" }
    ],
    faqs: [
      { q: "How soon do you launch?", a: "Kickoff to first campaign in ten to fourteen days on average, including tracking, creative and landing pages." },
      { q: "Do you require long contracts?", a: "No. Month to month after a ninety day foundation phase. We earn the relationship every month." },
      { q: "Can you handle video production in house?", a: "Yes. Concept, script, edit, motion, color and multi format exports all live under one roof." },
      { q: "How do you report performance?", a: "Live dashboards, weekly loom updates, monthly business reviews. Every metric tied to pipeline and revenue." },
      { q: "What is the minimum ad spend?", a: "We recommend at least ten thousand dollars per month in media to unlock proper testing velocity across platforms." },
      { q: "Do you build the landing pages too?", a: "Yes. Every campaign ships with purpose built pages, A B tested, tuned to hit CPA and ROAS targets." }
    ],
    caseSpotlight: {
      client: "Enfield Royal Clinic",
      story: "A full funnel overhaul for a premium aesthetics clinic. Server side tracking, weekly creative testing, landing pages per procedure and a Klaviyo lifecycle engine.",
      metrics: [
        { k: "4.8x", v: "Meta ROAS" },
        { k: "58%", v: "Lower CPL" },
        { k: "3x", v: "Booked calls" }
      ]
    },
    deliverables: [
      "Full account audit and rebuild",
      "Server side tracking and GA4",
      "Weekly creative production",
      "Campaign strategy and roadmap",
      "Landing pages per offer",
      "Email and lifecycle flows",
      "Live revenue dashboard",
      "Weekly and monthly reporting"
    ],
    guarantees: [
      { title: "No long contracts", body: "Month to month after a 90 day foundation phase. We earn the relationship every month." },
      { title: "Every dollar tracked", body: "Server side tracking and conversion APIs so you see the real numbers, not platform inflated ones." },
      { title: "You own the accounts", body: "Ad accounts, pixels, tracking, creative files. All yours from day one." }
    ]
  },
  {
    slug: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank on page one for the keywords that actually pay.",
    hero: "Technical SEO, on page optimization, content engines and link acquisition, built to compound month after month.",
    category: "Growth",
    benefits: [
      { title: "Buyer intent keywords", desc: "We target queries that convert, not just queries that rank." },
      { title: "Technical fixes first", desc: "Crawlability, Core Web Vitals, schema and IA, all dialed in before content spend." },
      { title: "Content engine", desc: "Programmatic, editorial and refresh strategies, planned in one roadmap." }
    ],
    process: [
      { step: "01", title: "Audit", desc: "Technical, content and backlink teardown benchmarked against your top competitors." },
      { step: "02", title: "Strategy", desc: "Keyword universe, topical maps and a prioritized roadmap tied to revenue." },
      { step: "03", title: "Implementation", desc: "Technical fixes, content production and on page optimization." },
      { step: "04", title: "Authority", desc: "Digital PR, link building and brand mentions from real, relevant publications." },
      { step: "05", title: "Reporting", desc: "Monthly rankings, traffic and revenue dashboards with a clear next quarter plan." }
    ],
    tech: ["Ahrefs", "Semrush", "GSC", "Screaming Frog", "Schema.org", "GA4", "PageSpeed Insights", "Surfer SEO", "Clearscope", "Sitebulb"],
    subServices: [
      { icon: Search, title: "Technical SEO Audit", desc: "Full crawl, index, schema, Core Web Vitals and site architecture review with a prioritized fix list." },
      { icon: FileText, title: "On Page Optimization", desc: "Title tags, meta, headings, internal links, schema and content depth rewritten to match search intent." },
      { icon: Target, title: "Keyword and Content Strategy", desc: "Buyer intent keyword universe, topical maps and a 12 month editorial calendar tied to revenue." },
      { icon: PenTool, title: "SEO Content Production", desc: "Editorial and programmatic pages written by senior writers, briefed by SEO strategists, edited to rank." },
      { icon: Layers, title: "Link Building and Digital PR", desc: "Placements from real, relevant publications. No PBNs, no spam, only links that move the needle." },
      { icon: ShoppingBag, title: "Local and Ecommerce SEO", desc: "Google Business Profile, local citations, category page optimization and structured data for retail." },
      { icon: ChartColumn, title: "Analytics and Reporting", desc: "GA4, Search Console and rank tracking rolled into one monthly dashboard tied to pipeline." },
      { icon: Zap, title: "Core Web Vitals Fixes", desc: "LCP, INP, CLS and TTFB engineered under Google thresholds by senior front end devs." }
    ],
    tools: [
      { name: "Ahrefs" },
      { name: "Semrush" },
      { name: "GSC" },
      { name: "Screaming Frog" },
      { name: "Sitebulb" },
      { name: "Surfer SEO" },
      { name: "Clearscope" },
      { name: "Schema.org" },
      { name: "GA4" },
      { name: "GTM" },
      { name: "PageSpeed" },
      { name: "Looker Studio" }
    ],
    faqs: [
      { q: "How long until we see results?", a: "Technical wins land in the first 30 days. Meaningful ranking shifts show between month 3 and 6. Compounding revenue lift starts around month 6." },
      { q: "What if we already have an SEO agency?", a: "We start with a free teardown of your current work. If they are doing the job, we say so. If not, we show exactly where the gaps are." },
      { q: "Do you build backlinks?", a: "Yes. Digital PR, resource pages, guest features and unlinked mention reclamation. All from real, relevant publications. Zero PBNs." },
      { q: "How do you report progress?", a: "Monthly dashboard with rankings, traffic, conversions and revenue attribution. Plus a written narrative on what changed and why." },
      { q: "Can you help with local SEO?", a: "Yes. Google Business Profile, local citations, review systems, location pages and structured data for multi location brands." },
      { q: "Do you write the content too?", a: "Yes. Senior writers briefed by SEO strategists, edited against ranking pages. No AI slop, no template blogs." }
    ],
    caseSpotlight: {
      client: "A1 Phoenix Plumbing",
      story: "A local service business ranked page 5 for every buyer intent keyword. Twelve months of technical fixes, city landing pages and a review engine took them to the map pack for 40+ terms.",
      metrics: [
        { k: "+280%", v: "Organic leads" },
        { k: "40+", v: "Page 1 keywords" },
        { k: "4.9★", v: "Avg review score" }
      ]
    },
    deliverables: [
      "Technical SEO audit and fix list",
      "Keyword universe and topical map",
      "12 month editorial roadmap",
      "On page optimization sweep",
      "Schema markup implementation",
      "Backlink and digital PR campaigns",
      "Core Web Vitals engineering",
      "Monthly ranking and revenue dashboard"
    ],
    guarantees: [
      { title: "Real reporting, not vanity", body: "Every metric tied to revenue and pipeline. No inflated impression counts." },
      { title: "No PBNs, no spam", body: "Every link from a real, relevant publication. If Google penalizes it, we replace it." },
      { title: "Month to month", body: "No 12 month lock in. We earn the relationship with results, not contracts." }
    ]
  },
  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand and Identity",
    tagline: "Identity systems that turn companies into category leaders.",
    hero: "Brand strategy, visual identity, voice and guidelines, built for differentiation across every touchpoint your customers will ever see.",
    category: "Create",
    benefits: [
      { title: "Strategy first", desc: "Positioning, narrative and competitive frame before pixels ever move." },
      { title: "Systems, not logos", desc: "Tokens, motion and applications across product, packaging and marketing." },
      { title: "Guidelines that ship", desc: "Documented, opinionated and easy for your team to extend without us." }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Stakeholder workshops, competitive audit and market landscape." },
      { step: "02", title: "Strategy", desc: "Positioning, narrative and naming." },
      { step: "03", title: "Identity", desc: "Logo, color, type, photography and motion system." },
      { step: "04", title: "Application", desc: "Web, packaging, product, social and campaign systems." },
      { step: "05", title: "Guidelines", desc: "Brand book, tokens and on brand AI prompts for your team." }
    ],
    tech: ["Figma", "Illustrator", "After Effects", "Notion"],
    subServices: [
      { icon: Target, title: "Brand Strategy", desc: "Positioning, audience insight, market mapping and the sharp idea your category can remember." },
      { icon: Palette, title: "Visual Identity", desc: "Logo systems, color, typography, layout rules and art direction built to scale across every channel." },
      { icon: FileText, title: "Messaging and Voice", desc: "Narrative, value proposition, tone of voice, campaign lines and sales language your team can use immediately." },
      { icon: PanelsTopLeft, title: "Brand Applications", desc: "Pitch decks, social systems, print collateral, packaging, website direction and product interface styling." },
      { icon: PenTool, title: "Guidelines and Governance", desc: "A practical brand book with rules, examples and decision logic so the identity stays consistent after launch." },
      { icon: Sparkles, title: "Motion and Launch Assets", desc: "Animated marks, reveal systems, launch graphics and premium presentation assets for the first public impression." }
    ],
    tools: [
      { name: "Figma" },
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "After Effects" },
      { name: "Cinema 4D" },
      { name: "Spline" },
      { name: "Notion" },
      { name: "Pitch" },
      { name: "Canva Systems" },
      { name: "Brand Tokens" },
      { name: "Motion Guidelines" },
      { name: "Print Specs" }
    ],
    faqs: [
      { q: "Do you only design logos?", a: "No. The logo is one asset inside a larger system. We define positioning, voice, identity rules, launch assets and practical guidelines so the brand works across sales, product and marketing." },
      { q: "Can you refresh an existing brand?", a: "Yes. We preserve the equity worth keeping, remove the parts causing confusion, then rebuild the identity around a clearer commercial position." },
      { q: "Will our team be able to use the brand without you?", a: "Yes. Every engagement includes practical guidelines, reusable templates and rules your internal team can follow without waiting on an agency for every decision." },
      { q: "What deliverables do we receive?", a: "Strategy deck, logo system, type and color system, image direction, application examples, social and presentation templates, export files and a brand book." },
      { q: "How long does a full brand build take?", a: "Six to ten weeks depending on scope. A refresh can land in four weeks; a full identity from scratch runs eight to twelve." },
      { q: "Will you work with our in house designers?", a: "Yes. We hand off tokens, source files and guidelines built to be extended by your team, not to lock you in." }
    ],
    caseSpotlight: {
      client: "Hazel Beauty Bar",
      story: "A regional beauty studio positioned as a luxury category leader. New name direction, wordmark, packaging system, social identity and launch campaign, all live in eight weeks.",
      metrics: [
        { k: "8 wks", v: "Discovery to launch" },
        { k: "+63%", v: "Bookings post launch" },
        { k: "3x", v: "Social engagement" }
      ]
    },
    deliverables: [
      "Brand strategy and positioning deck",
      "Logo system with all lockups",
      "Full color and type system with tokens",
      "Photography and art direction rules",
      "Packaging and print application",
      "Social and pitch deck templates",
      "Motion identity and launch assets",
      "Practical brand book and governance"
    ],
    guarantees: [
      { title: "Strategy before pixels", body: "Every visual decision is defended by a written strategy. No mood boards without meaning." },
      { title: "Systems built to extend", body: "Tokens, rules and templates so your team scales the identity without us." },
      { title: "You own all source files", body: "Figma, Illustrator, After Effects, exports. Full ownership, no reseller trap." }
    ]
  }
];
function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
const customSoftware = {
  slug: "software/custom-software-development",
  parent: "software",
  icon: CodeXml,
  category: "Custom Software",
  title: "Custom software that fits your business",
  accent: "not the other way round.",
  lede: "Bespoke web platforms, internal tools and back-office systems engineered around the way your team actually works.",
  intro: {
    heading: "Off the shelf gets you 80 percent of the way. That last 20 percent is where the money is.",
    body: [
      "Every growing company hits the same wall. A generic CRM cannot model your commission structure. Your ERP does not understand the way your warehouse actually receives goods. The spreadsheet holding your operations together is now three thousand rows and one leaver away from disaster. That gap between what off the shelf tools do and what your business actually does is where custom software pays for itself, usually within twelve months.",
      "We build software that fits. Not clever software. Not fashionable software. Software your operations team logs into on a Monday morning and stops thinking about because it just works."
    ]
  },
  whatItIs: {
    heading: "What custom software really is",
    body: [
      "A custom software project is not just an app. It is a working system: a database that matches your real world entities, an API surface that other tools can plug into, a set of workflows that mirror how decisions actually get made, an interface each user role can move through without a manual, and the observability to know when something breaks before your users tell you.",
      "The best builds are almost invisible. They remove the ten small frictions your team has learned to tolerate, then get out of the way. That is the standard we hold ourselves to."
    ],
    bullets: [
      "A domain model that reflects your business, not a template",
      "Role based access that mirrors your org chart",
      "Automations that replace manual copy paste between tools",
      "Reporting that answers the questions your leadership actually asks",
      "Integrations that pull data from what you already run"
    ]
  },
  architecture: {
    heading: "A stack we can defend, layer by layer",
    body: "Every layer below is chosen for stability, hiring pool and long term maintainability. We do not chase frameworks. We pick what will still be a good decision in five years.",
    layers: [
      { name: "Client", items: ["React", "TypeScript", "Tailwind", "TanStack Query"] },
      { name: "Edge and BFF", items: ["Vite SSR", "Cloudflare Workers", "Server functions", "Zod validation"] },
      { name: "API", items: ["Node.js or Go", "REST plus tRPC", "Auth via JWT and refresh", "Idempotent mutations"] },
      { name: "Data", items: ["PostgreSQL", "Row Level Security", "Migrations in code", "Point in time restore"] },
      { name: "Infra", items: ["Terraform", "Docker", "Kubernetes or serverless", "Blue green releases"] },
      { name: "Observability", items: ["Structured logs", "Distributed tracing", "Uptime and SLO alerts", "Error budgets"] }
    ]
  },
  features: {
    heading: "What lives inside a well built custom system",
    body: "The specifics vary by industry. The scaffolding does not. Nine features below show up in almost every serious internal platform we ship.",
    items: [
      { title: "Multi tenant architecture", desc: "Data isolation between clients or business units, without spinning up a separate database for every account." },
      { title: "Fine grained permissions", desc: "Roles, groups and per record ownership. A branch manager sees their branch. A regional director sees their region. No one sees everything unless you say so." },
      { title: "Audit log for every write", desc: "Who changed what, when, and from what device. Non negotiable in finance, healthcare and any regulated domain." },
      { title: "Reporting and export", desc: "Native dashboards for the questions your team asks weekly. CSV and API export for the ones they ask once a quarter." },
      { title: "Import and migration tools", desc: "The system arrives with a way to bring your existing spreadsheets in cleanly, not a promise that we will handle it manually later." },
      { title: "Background jobs", desc: "Long running exports, external syncs and scheduled work handled by a proper queue, not a fragile setTimeout." },
      { title: "Notifications the users actually want", desc: "Email, in app and mobile push, with per user preferences and quiet hours built in from day one." },
      { title: "Real integrations", desc: "Webhooks in, webhooks out, plus native connectors for the two or three tools you cannot get rid of." },
      { title: "A design system", desc: "Not a Figma library that rots. Living tokens, documented components and a page that shows every state of every widget." }
    ]
  },
  approaches: {
    heading: "Three ways to build. We help you pick.",
    body: "Not every problem needs a full custom platform. Sometimes a smart configuration of existing tools is faster, cheaper and better. We say so before we quote.",
    options: [
      { name: "Full custom build", best: "Complex domain logic, differentiating workflows, high scale, strict compliance", watch: "Higher up front cost, longer time to first release" },
      { name: "Custom app on a low code core", best: "Internal tools where speed to launch matters more than perfect UX", watch: "Ceiling on complexity, vendor lock in over time" },
      { name: "Configure and extend an existing product", best: "Standard workflows with light customization, small team", watch: "You pay per seat forever, edge cases cost more than the license" }
    ]
  },
  mistakes: {
    heading: "The five mistakes that kill most custom projects",
    items: [
      { title: "Building the wrong thing", desc: "Skipping discovery to save two weeks. Every dollar not spent understanding the domain is spent three times over during build." },
      { title: "Modeling the current process, not the ideal one", desc: "Custom software is the moment to fix the workaround, not to encode it in TypeScript." },
      { title: "Choosing the shiny framework", desc: "The team that has to maintain this in three years will hate you for it. Pick what has a big hiring pool and a boring changelog." },
      { title: "No observability from day one", desc: "You cannot fix what you cannot see. Logs, traces and error alerts are day one work, not launch week bolt ons." },
      { title: "Big bang launches", desc: "Six months of building in the dark, then a two week rollout. Ship a thin slice in six weeks, roll to one team, learn, expand." }
    ]
  },
  considerations: {
    heading: "The things buyers forget to ask about",
    body: "A working demo is easy. A system that still runs cleanly two years later is a different animal. These are the questions we recommend you ask any vendor, us included.",
    items: [
      { title: "Who owns the code and the cloud accounts?", desc: "You do. From day one. Full IP transfer, root access to your AWS or GCP org, every credential in your vault, not ours." },
      { title: "What happens on the day we take it in house?", desc: "Documented runbooks, onboarding for your new engineer, a handover call series and a 90 day paid support window." },
      { title: "How is the database backed up and restored?", desc: "Continuous point in time backups, tested restore drills at least quarterly, retention policy in writing." },
      { title: "How are secrets managed?", desc: "A managed secrets store, no keys in code, quarterly rotation, revocation runbook." },
      { title: "How do you handle security?", desc: "Threat model in discovery, OWASP top ten covered in review, dependency scans in CI, annual pen test recommended for anything with sensitive data." }
    ]
  },
  fit: {
    good: [
      "Operations, sales or finance workflows that cost more than the software would",
      "A domain your team knows better than any vendor",
      "A five to seven figure improvement to unlock, not a nice to have",
      "A stakeholder who can make decisions in the room"
    ],
    notFor: [
      "A CRM that Salesforce or HubSpot already solves for you",
      "A vague hope that software will fix an unresolved strategy problem",
      "A three month deadline for a two year project"
    ]
  },
  scenarios: [
    { role: "50 person logistics company", body: "Dispatch board, driver mobile app, customer portal, tied into your finance system for automatic invoicing. First slice live in eight weeks, replaces four spreadsheets and one Whatsapp group." },
    { role: "Regional healthcare group", body: "Patient intake, clinician notes, prescription workflow and reporting for the medical director. HIPAA style audit log and role based access from day one." },
    { role: "B2B distributor with 300 SKUs", body: "Custom order desk with per customer pricing, credit limits and integrated warehouse pick lists. Removes twelve hours of order entry per rep per week." }
  ],
  faqs: [
    { q: "How long does a real custom build take?", a: "A useful first release in six to twelve weeks. A full multi module platform in six to twelve months. We prefer to ship a small slice fast, then compound from there." },
    { q: "Fixed price or time and materials?", a: "Fixed price for the discovery and the first release. Retainer for the ongoing roadmap. That way you know exactly what you commit before you sign." },
    { q: "Can we start with a prototype?", a: "Yes. A clickable prototype in Figma or a small technical spike, usually one to two weeks. It answers the two or three questions the team cannot agree on before code exists." },
    { q: "Do you work with our in house engineers?", a: "Often. We pair, we review, we hand over. Many of our best engagements end with your team owning the product and us stepping back to consulting." },
    { q: "What if requirements change mid build?", a: "They will. Our contracts price change explicitly with a weekly change log. No surprise invoices, no scope creep dressed up as goodwill." },
    { q: "Who runs the servers after launch?", a: "You do, or we do on a retainer. Either way the infrastructure lives in your cloud account, deploys are automated, and there is a runbook for every recurring task." },
    { q: "How do you keep older builds maintainable?", a: "Boring dependencies, high test coverage on the pieces that matter, quarterly upgrade budget for the language and framework." },
    { q: "Can you take over a build from another vendor?", a: "Yes, once we have done a code review and are honest with you about what is salvageable. Sometimes the answer is rewrite. Sometimes it is a six week stabilisation pass." }
  ],
  seo: {
    title: "Custom Software Development, honest expert build partner | Origami99",
    description: "Bespoke custom software, internal tools and back office platforms engineered around how your business actually works. Senior team, full IP handover, no lock in."
  }
};
const saas = {
  slug: "software/custom-saas-products",
  parent: "software",
  icon: Database,
  category: "Custom SaaS",
  title: "SaaS products people renew",
  accent: "not just install.",
  lede: "Multi tenant SaaS platforms with auth, billing, entitlements and observability engineered right the first time.",
  intro: {
    heading: "Most SaaS products fail on plumbing, not features.",
    body: [
      "Founders spend the first month arguing about the killer feature. The next six months they discover their entire product velocity is bottlenecked by things that were supposed to be trivial: signup, billing, invitation flows, feature flags, admin tools, refunds, seat management. Every one is a two week rabbit hole. Together they are the reason so many promising SaaS ideas die in beta.",
      "We build SaaS the way experienced founders wish they had. The unglamorous plumbing gets shipped in the first sprint. That way you spend month two building the thing your customers actually pay for."
    ]
  },
  whatItIs: {
    heading: "Custom SaaS is a system, not a screen",
    body: [
      "A real SaaS product is a coordinated set of services: identity, tenants, permissions, billing, entitlements, notifications, admin, reporting and support tooling. Miss any one of them and you feel it every day.",
      "Our first release always includes the full spine of that system, even if the feature set is narrow. It is easier to add features to a healthy skeleton than to bolt a skeleton onto a pile of features."
    ]
  },
  architecture: {
    heading: "The reference SaaS stack we ship on",
    body: "Every choice below is picked to be boring, safe and easy to hire for.",
    layers: [
      { name: "Auth and identity", items: ["Email magic link", "OAuth (Google, Microsoft, GitHub)", "SSO ready via SAML or OIDC", "Session revocation"] },
      { name: "Tenancy", items: ["Row level tenancy", "Per tenant feature flags", "Tenant scoped audit log", "Data export per tenant"] },
      { name: "Billing", items: ["Stripe or Paddle", "Per seat, per usage, hybrid", "Prorated upgrades and downgrades", "Dunning and grace periods"] },
      { name: "Entitlements", items: ["Plan feature matrix", "Server side gates", "Trial and grandfather logic", "Overrides for enterprise"] },
      { name: "Ops", items: ["Admin impersonation with audit", "Refund and credit tools", "Health dashboards", "Ticket integration"] }
    ]
  },
  features: {
    heading: "The unglamorous eight that decide whether you scale",
    body: "Every SaaS founder underestimates these. Getting them right in month one is the single highest leverage engineering decision we make.",
    items: [
      { title: "Invitation and team management", desc: "Invite by email, role at invite time, resend, revoke, seat cap enforced." },
      { title: "Impersonation with a paper trail", desc: "Support can log in as a user to reproduce a bug, and every action is stamped with who did what on behalf of whom." },
      { title: "Feature flags", desc: "Ship features to one tenant, one region, or a percentage of users, from an admin UI, without a deploy." },
      { title: "Metered usage", desc: "Real counters, idempotent event ingestion, monthly reset, correct invoicing." },
      { title: "Subscription lifecycle", desc: "Trial, active, past due, cancelled, reactivated. Every transition triggers the right email and the right in product state." },
      { title: "Data export", desc: "The customer can leave with their data at any time. Trust, not lock in, is the moat." },
      { title: "In app onboarding", desc: "A first run flow the product manager can edit without a deploy." },
      { title: "Status page and incident tooling", desc: "Public status page, an incident channel, and a template your on call actually uses at 3am." }
    ]
  },
  approaches: {
    heading: "Three billing models we can build cleanly",
    body: "Pick the pricing model that matches how value is delivered, not the one that looked cool on a competitor's site.",
    options: [
      { name: "Per seat, per month", best: "Collaboration tools, dashboards, anything where every user is a decision maker", watch: "Punishes teams for adding read only viewers, slows adoption" },
      { name: "Usage based", best: "APIs, AI tokens, infrastructure, anything where value scales linearly with volume", watch: "Harder to forecast, needs strong usage visibility for the customer" },
      { name: "Hybrid platform fee plus usage", best: "Enterprise ready SaaS, gives predictability plus upside", watch: "More complex billing, needs a clear plan matrix" }
    ]
  },
  mistakes: {
    heading: "The five SaaS mistakes we see monthly",
    items: [
      { title: "Rolling your own auth", desc: "It is the single most common security incident. Use a proven library or a hosted provider, always." },
      { title: "Storing prices in the code", desc: "The pricing page has to change without a deploy. Plans, features and prices belong in a database or in Stripe." },
      { title: "Ignoring tenants until enterprise arrives", desc: "Retrofitting tenancy after launch takes months and breaks in production. Bake it in on day one." },
      { title: "One giant admin god page", desc: "Admin tools grow faster than customer features. Design them properly from the start or they become the biggest source of accidental data loss." },
      { title: "No plan for churn", desc: "Cancel flow, reactivate flow, downgrade flow, data retention policy. Ship these before the first paid customer." }
    ]
  },
  considerations: {
    heading: "Enterprise readiness, without the enterprise price tag",
    body: "Even bootstrapped SaaS eventually meets a procurement team. The below is what saves you a lost six figure deal.",
    items: [
      { title: "SSO from an early stage", desc: "SAML or OIDC support unlocks mid market and enterprise deals. Wire the plumbing early, sell it as a paid feature later." },
      { title: "Audit log the customer can see", desc: "Not just an internal one. Enterprise security teams will ask." },
      { title: "Configurable data retention", desc: "Per tenant retention policy, right to delete, exportable audit log." },
      { title: "IP allow list and forced 2FA", desc: "Small controls that unblock big deals." },
      { title: "SOC2 aware architecture", desc: "You do not need the certificate on day one. You do need to not paint yourself into a corner." }
    ]
  },
  fit: {
    good: [
      "You have found a paying niche and need to build fast without breaking things",
      "You are graduating from a no code prototype and hitting its limits",
      "You have raised or bootstrapped and want the ARR machine built right"
    ],
    notFor: [
      "You do not have any paying users and are hoping the product will find the market",
      "You need a landing page and a waitlist, not a SaaS platform",
      "You want to avoid billing complexity by making everything free forever"
    ]
  },
  scenarios: [
    { role: "Vertical SaaS founder", body: "You know the industry cold. We build the multi tenant spine, billing and admin. You focus on the workflows that only you know." },
    { role: "Agency spinning out a product", body: "You have a manual service that clients love. We productise it, put it behind a login and turn services revenue into ARR." },
    { role: "Enterprise team building an internal tool that will spin out", body: "Build it multi tenant from day one so the eventual carve out is a config change, not a rebuild." }
  ],
  faqs: [
    { q: "Do we need to build our own billing?", a: "No. Stripe or Paddle handles the money movement. We build the entitlement, plan and lifecycle layer on top." },
    { q: "How fast can we launch a paid MVP?", a: "Six to nine weeks for a real, billable product with the spine we described. Ten to sixteen weeks for a richer first release." },
    { q: "Can you handle SOC2 or ISO27001?", a: "We build to be ready. Certification itself is a separate engagement with a specialist auditor. We can recommend partners." },
    { q: "What if we already have users on a prototype?", a: "We plan the migration inside the build so the cutover is a single, tested step, not a scramble." },
    { q: "How do we handle a big enterprise custom request?", a: "Feature flag it, price it as an enterprise add on, ship it in a way that does not fork your codebase." },
    { q: "Who supports the customers?", a: "You do. We build the tooling to make that possible without becoming a bottleneck." }
  ],
  seo: {
    title: "Custom SaaS Development, multi tenant products built right | Origami99",
    description: "Multi tenant SaaS platforms with auth, tenancy, billing, entitlements and admin engineered in the first sprint. Enterprise ready, no lock in."
  }
};
const mobile = {
  slug: "software/mobile-app-development",
  parent: "software",
  icon: Smartphone,
  category: "Mobile Apps",
  title: "Mobile apps people keep on their home screen",
  accent: "not screenshot and delete.",
  lede: "Native and cross platform iOS and Android apps with offline first architecture, store ready pipelines and analytics built in.",
  intro: {
    heading: "A mobile app is a promise about how present you will be in your users life.",
    body: [
      "Users forgive a slow website. They do not forgive a slow app. If your app takes three seconds to open, drops out of the network without warning or wakes them at 2am with a promo push, it is off the home screen within a week. Every future release becomes an uphill battle.",
      "We build mobile apps that respect the medium. Fast start, offline capable, quiet by default, respectful of battery, storage and attention."
    ]
  },
  whatItIs: {
    heading: "What a real mobile build actually includes",
    body: [
      "A mobile project is much more than the app binary. It is a release train, a signing and provisioning setup, an analytics pipeline, a crash reporting tool, a feature flag system, a way to force upgrade when a security fix ships, and a store presence that gets approved without three review rejections.",
      "We build all of that alongside the product. It is what makes the difference between an app that ships once and an app that keeps improving for years."
    ]
  },
  architecture: {
    heading: "Native versus cross platform, the real trade off",
    body: "There is no universal right answer. There is a right answer for your product, your team and your roadmap. We help you pick.",
    layers: [
      { name: "Native iOS (Swift, SwiftUI)", items: ["Best when platform APIs matter", "Best performance and animation quality", "Two codebases to maintain"] },
      { name: "Native Android (Kotlin, Compose)", items: ["Best when platform APIs matter", "Access to every new OS feature", "Two codebases to maintain"] },
      { name: "React Native", items: ["One team, both platforms", "Excellent for content and workflow apps", "Native modules when you need them"] },
      { name: "Flutter", items: ["Consistent UI across platforms", "Great for design led apps", "Growing but smaller hiring pool"] },
      { name: "Web wrapped", items: ["Fastest for internal tools", "Not appropriate for consumer facing apps", "Store review risk"] }
    ]
  },
  features: {
    heading: "The eight capabilities every serious app needs",
    body: "Underneath every polished experience is a set of unglamorous systems working correctly. These are the ones we build in every project.",
    items: [
      { title: "Offline first data", desc: "Reads and writes work without a network. Sync reconciles when it returns. No blank screens, ever." },
      { title: "Push notifications with preferences", desc: "APNs and FCM, respectful defaults, per user quiet hours, deep linking into the right screen." },
      { title: "Deep and universal links", desc: "A shared link opens the right screen in the app if installed, else the web equivalent. Attribution preserved." },
      { title: "Auth flow", desc: "Email, phone OTP, Sign in with Apple or Google. Session refresh handled invisibly. Biometrics unlock." },
      { title: "Analytics with events that mean something", desc: "Screen views, funnel steps, feature usage, event schema documented in code, one source of truth." },
      { title: "Crash and ANR reporting", desc: "Every crash grouped, symbolicated and prioritised. Session replay for the hardest ones." },
      { title: "Feature flags and remote config", desc: "Toggle features without a store release. Emergency kill switch for a broken flow." },
      { title: "Force upgrade", desc: "When a critical fix ships, users can be nudged or blocked from continuing on old versions." }
    ]
  },
  approaches: {
    heading: "Three release strategies. We plan yours in discovery.",
    body: "Store review is a schedule, not a suggestion. Every launch plan below accounts for it.",
    options: [
      { name: "TestFlight and internal Play track", best: "Small audience, tight feedback loop, weekly releases", watch: "Users get email invites, not organic discovery" },
      { name: "Public beta on both stores", best: "Growing user base, want feedback but also organic installs", watch: "Reviews count against your public rating" },
      { name: "Staged rollout to production", best: "Mature app, want to catch regressions before 100 percent", watch: "Requires good analytics and a rollback plan" }
    ]
  },
  mistakes: {
    heading: "Six mistakes that keep costing app teams money",
    items: [
      { title: "Building web UI on a phone screen", desc: "Mobile navigation, gestures and feedback are their own discipline. Do not port a dashboard, redesign it." },
      { title: "No offline story", desc: "A user on a subway or in an elevator will churn if the app freezes. Design for zero bars from day one." },
      { title: "Ignoring battery and data", desc: "Chatty background sync, unbatched network calls and always on GPS drain users trust and phones." },
      { title: "Push spam", desc: "Every unnecessary notification is a notification the user will disable, then delete." },
      { title: "Underestimating store review", desc: "Sign in requirements, privacy policy links, subscription rules. All of these have to be right or you lose a week." },
      { title: "Skipping accessibility", desc: "Dynamic type, VoiceOver, TalkBack, contrast. It costs a fraction of the total build and doubles your addressable market." }
    ]
  },
  considerations: {
    heading: "The operational things founders forget",
    body: "Shipping the app is the start. Everything below is what makes it a product that grows.",
    items: [
      { title: "Store accounts and signing", desc: "Your Apple Developer and Google Play accounts, not ours. Certificates and provisioning profiles handed over from day one." },
      { title: "Privacy manifests and data safety", desc: "Both stores now require detailed data usage disclosures. We write them accurately and update them per release." },
      { title: "App Tracking Transparency", desc: "iOS attribution reality since 14.5. We plan measurement without depending on IDFA." },
      { title: "In app purchases and subscriptions", desc: "StoreKit and Google Play Billing done correctly, receipts validated server side, restore purchases handled." },
      { title: "Regional pricing and languages", desc: "Multi region price tiers, localised copy, right to left layout when needed." }
    ]
  },
  fit: {
    good: [
      "Frequent use cases where phone is the primary context (delivery, field service, health, on the go commerce)",
      "Existing product with strong retention that now needs a native surface",
      "Push, camera, location or biometrics are core to the experience"
    ],
    notFor: [
      "Low frequency use where a good mobile web page would do",
      "Testing whether a product idea works, before web validation",
      "Content that could just as easily live in a browser tab"
    ]
  },
  scenarios: [
    { role: "Field service business", body: "Native tech app with offline job cards, photo upload, signature capture, live route from dispatch and clock in and out." },
    { role: "Consumer marketplace", body: "React Native buyer and seller apps sharing 80 percent of the code, native maps and camera, push into deep links." },
    { role: "Fintech companion app", body: "Native Swift and Kotlin for biometric unlock, secure enclave key storage and platform grade transaction lists." }
  ],
  faqs: [
    { q: "Native or React Native?", a: "React Native for content and workflow apps, native when hardware or performance is core. We tell you which in discovery, honestly." },
    { q: "Can you handle the store submission?", a: "We build the binaries, write the store metadata, prepare the screenshots and submit under your developer account with you." },
    { q: "How do updates work after launch?", a: "Weekly or fortnightly release trains, staged rollouts, remote config for the flags. Emergency patches shipped within 24 hours." },
    { q: "Do you handle subscriptions?", a: "Yes. StoreKit 2 and Play Billing done properly, plus server side receipt validation so you can trust the state." },
    { q: "What happens if Apple or Google rejects the app?", a: "We fix and resubmit under our engagement, no extra invoice for standard review issues. We plan for it." },
    { q: "Do you build both iOS and Android?", a: "Almost always. Shipping one platform and not the other in 2026 leaves half your market on the table." }
  ],
  seo: {
    title: "Mobile App Development, iOS and Android done properly | Origami99",
    description: "Native and cross platform iOS and Android apps with offline first architecture, store ready pipelines and analytics built in. Senior team, full IP handover."
  }
};
const uiux = {
  slug: "software/ui-ux-design",
  parent: "software",
  icon: Palette,
  category: "UI and UX Design",
  title: "Product design that pays for itself",
  accent: "in the first quarter.",
  lede: "Research led product design and design systems that convert while feeling inevitable to your users.",
  intro: {
    heading: "Good design is not a coat of paint. It is the shortest path between your product and your customer's job.",
    body: [
      "Design that wins awards is easy. Design that ships and moves your key metric is not. The two are almost never the same thing. Every project we run starts with two questions: what job is the user hiring this screen to do, and how do we remove every step between them and that outcome.",
      "The result is UI that feels unremarkable in the best way. Nothing to admire. Nothing to complain about. Users get what they came for and forget the interface existed."
    ]
  },
  whatItIs: {
    heading: "What product design actually covers",
    body: [
      "Research, information architecture, interaction design, visual design, prototyping, design system engineering and handover. In some projects usability testing, in some accessibility audit, in some motion and micro interaction craft. Not every project needs every phase. Every project needs the phases relevant to it done properly."
    ]
  },
  architecture: {
    heading: "How we structure a design engagement",
    body: "Six phases. Every one has a concrete deliverable. Every deliverable is signed off before we spend money on the next phase.",
    layers: [
      { name: "Discovery", items: ["Stakeholder interviews", "User interviews when possible", "Success metrics agreed"] },
      { name: "IA and flows", items: ["Sitemap", "Task flows", "Content model"] },
      { name: "Wireframes", items: ["Low fi in Figma", "Reviewed in one hour sessions", "Sign off before visuals"] },
      { name: "Visual and interaction design", items: ["Design system as we go", "Prototype for key flows", "Handover ready components"] },
      { name: "Usability testing", items: ["Five user protocol", "Recorded sessions", "Iterate on findings"] },
      { name: "Handover and support", items: ["Documented tokens", "Storybook or living docs", "Design office hours during build"] }
    ]
  },
  features: {
    heading: "What a mature design system contains",
    body: "A design system is not a Figma library. It is a shared language for the whole product team. The below is the minimum for one that will still make sense in two years.",
    items: [
      { title: "Design tokens", desc: "Colour, spacing, radius, elevation, motion. Named semantically, shipped in JSON and consumed by code." },
      { title: "Typography scale", desc: "A capped set of type styles, chosen for legibility across screen sizes, documented with when to use each." },
      { title: "Component library", desc: "Every state of every widget: default, hover, focus, active, disabled, loading, error. In Figma and in code." },
      { title: "Layout primitives", desc: "Stacks, grids and containers with defined gaps. Removes the debate about spacing forever." },
      { title: "Iconography rules", desc: "Line weight, corner radius, sizing scale, when to use fill versus outline." },
      { title: "Content patterns", desc: "Empty states, error states, loading, success. Written once, reused everywhere." },
      { title: "Accessibility rules", desc: "Contrast, focus rings, keyboard behaviour and screen reader labels documented per component." },
      { title: "A living documentation site", desc: "One URL where designers, engineers and PMs can settle every argument." }
    ]
  },
  approaches: {
    heading: "Three design engagement shapes we run",
    body: "Pick the one that matches where your product is today. We will tell you honestly.",
    options: [
      { name: "Design sprint", best: "New feature or new product, one to two weeks, need alignment fast", watch: "Not a substitute for a full build" },
      { name: "End to end product design", best: "New product, feature area or serious redesign, four to twelve weeks", watch: "Requires a real research phase, do not skip it" },
      { name: "Embedded design partner", best: "Ongoing roadmap, quarterly retainer, design pairs with product weekly", watch: "Only works if you have engineering capacity to keep up" }
    ]
  },
  mistakes: {
    heading: "Six product design mistakes we still see everywhere",
    items: [
      { title: "Skipping the wireframe", desc: "Jumping straight to visual costs three times as much when the flow is wrong." },
      { title: "Designing for stakeholders, not users", desc: "The screen that pleases the CEO in the review is often the one that confuses the customer at 8pm." },
      { title: "Ignoring the empty state", desc: "The very first thing every new user sees is a blank screen. Design it deliberately." },
      { title: "Death by micro interaction", desc: "Every hover animation costs a millisecond of attention. Spend that budget where it earns interest." },
      { title: "One giant Figma file", desc: "Slow, brittle, unshareable. Break the system into modules from the start." },
      { title: "No handover ritual", desc: "The Figma is finished, the engineer builds something else, everyone is unhappy. Weekly design reviews during build fix this permanently." }
    ]
  },
  considerations: {
    heading: "Accessibility is a product feature, not a compliance checkbox",
    body: "Designing accessibly costs a small fraction of the total build. Retrofitting it costs many multiples of that. We build to WCAG 2.2 AA as a baseline in every project.",
    items: [
      { title: "Contrast", desc: "Text and interactive states pass 4.5:1 minimum. Tools in the Figma library make this automatic." },
      { title: "Focus indicators", desc: "Every focusable element has a visible focus ring. Keyboard users see where they are." },
      { title: "Semantic structure", desc: "Headings, landmarks and roles used correctly. Screen readers actually work." },
      { title: "Motion respect", desc: "Prefers reduced motion respected. No animation that flashes or shakes without an opt in." },
      { title: "Content clarity", desc: "Plain language, sensible defaults, error messages that say what to do next." }
    ]
  },
  fit: {
    good: [
      "You are building or rebuilding a product where conversion or retention matters",
      "You have engineering capacity to implement what design ships",
      "You are ready to make decisions based on user research, not internal opinion"
    ],
    notFor: [
      "You need a logo or a marketing site, not a product design partner",
      "You want a Figma file to hand to freelancers without design guidance",
      "You are not willing to test with real users"
    ]
  },
  scenarios: [
    { role: "SaaS onboarding rescue", body: "Activation is stalling. We audit the current flow, redesign the first ten minutes, prototype, test with five users, ship in three weeks." },
    { role: "Ecommerce PDP redesign", body: "Add to cart rate is flat. We test hypotheses on 100 users, ship the winner and instrument the whole funnel." },
    { role: "Internal tool that no one uses", body: "Ops team ignores it. We shadow the team for a day, redesign around actual tasks, ship in six weeks and get real adoption." }
  ],
  faqs: [
    { q: "Do you do brand design too?", a: "Full brand identity lives in a separate engagement. We collaborate closely with brand and often work with an existing identity, extending it into product." },
    { q: "How much research is enough?", a: "For a first release, five to eight qualitative interviews and a competitive audit. Ongoing, one usability round every two weeks is a healthy cadence." },
    { q: "Can you work with our engineers directly?", a: "Yes. Weekly design reviews, an async Figma channel and office hours. That is how designs actually ship correctly." },
    { q: "Do you deliver in Figma?", a: "Figma is our primary tool. We can adapt to Sketch or XD if your team already lives there." },
    { q: "How do you measure success?", a: "Against the metrics agreed in discovery. Activation rate, task completion time, conversion, retention. Not opinions in a review meeting." },
    { q: "What about motion and prototypes?", a: "Prototypes for the flows that matter, motion specs for the interactions worth animating. Both delivered as part of the design system." }
  ],
  seo: {
    title: "UI and UX Design, research led product design | Origami99",
    description: "Research led UI and UX design and design systems that convert while feeling inevitable. Discovery, prototyping, testing and engineered handover."
  }
};
const erp = {
  slug: "software/erp-development",
  parent: "software",
  icon: Boxes,
  category: "ERP Development",
  title: "ERP that fits your operation",
  accent: "not the other way round.",
  lede: "Modular finance, inventory, HR and operations platforms that integrate with the systems you already run.",
  intro: {
    heading: "Off the shelf ERP is a straitjacket. Custom ERP done wrong is worse.",
    body: [
      "The big brand ERPs are impressive on a slide deck. In the wild, most implementations end in one of three places: heavy customisation that costs more than a bespoke build, painful process changes to fit the tool, or an expensive shelf ornament nobody uses.",
      "The alternative is not to build a monolithic bespoke ERP from scratch. It is to build the two or three modules where you are truly different, integrate cleanly with best in class tools for the rest, and treat the whole thing as a living system rather than a one off project."
    ]
  },
  whatItIs: {
    heading: "Modular ERP, not a monolith",
    body: [
      "Modern ERP is a set of connected services: finance, inventory, procurement, sales, HR, projects, reporting. You do not need all of them custom. You need the ones that make you money customised, the ones that are commoditised bought or subscribed, and clean interfaces between them so data flows without human copy paste.",
      "We design your ERP as that mix, honestly."
    ]
  },
  architecture: {
    heading: "The modules that show up in almost every build",
    body: "Not every business needs all of them from day one. Sequencing matters as much as scope.",
    layers: [
      { name: "Finance", items: ["Chart of accounts", "Invoicing and AR", "Bills and AP", "GL, journals, reconciliation"] },
      { name: "Inventory and warehousing", items: ["SKU master", "Locations and bins", "Stock movements", "Cycle counts and adjustments"] },
      { name: "Procurement", items: ["Purchase orders", "Supplier scorecards", "Approval workflows", "Goods receipt"] },
      { name: "Sales and CRM", items: ["Quotes and orders", "Per customer pricing", "Credit limits", "Pipeline where appropriate"] },
      { name: "HR and payroll integration", items: ["Employee master", "Attendance and shifts", "Leave workflows", "Payroll export"] },
      { name: "Reporting and BI", items: ["Native dashboards", "Scheduled reports", "Ad hoc SQL for finance", "BI tool integration"] }
    ]
  },
  features: {
    heading: "What separates a real ERP from a spreadsheet with a login",
    body: "These are the differences you feel on day 400, not day 1.",
    items: [
      { title: "Immutable transactions", desc: "Every financial event is a journal entry. Corrections happen as new entries, never as edits. Auditors love this." },
      { title: "Approval workflows", desc: "Purchase orders over a threshold, discounts over a margin, refunds over an amount, all routed to the right approver with a paper trail." },
      { title: "Multi entity and multi currency", desc: "Group consolidation, intercompany transactions, foreign exchange handled correctly." },
      { title: "Costing methods", desc: "FIFO, weighted average or standard cost, applied consistently across every stock movement." },
      { title: "Period close", desc: "Monthly close checklist inside the system, with a lock so no one edits a closed period." },
      { title: "Integrations", desc: "Bank feeds, payment gateways, shipping providers, marketplaces. All with retries, dead letter queues and monitoring." },
      { title: "Row level permissions", desc: "A branch manager sees their branch. A regional director sees their region. Data scoped to the org chart, not just the login." }
    ]
  },
  approaches: {
    heading: "Three ERP paths. We pick the honest one for you.",
    body: "The right answer often is a mix.",
    options: [
      { name: "Full custom ERP", best: "Highly differentiated operation, existing tools force expensive workarounds", watch: "Multi year commitment, needs an internal champion" },
      { name: "Extend an existing ERP", best: "A modern ERP like Odoo or NetSuite covers 80 percent, you build the missing 20 as modules", watch: "Vendor lock in and licence costs grow with scale" },
      { name: "Hub and spoke", best: "Keep best in class tools per function, build a middleware and reporting layer that unifies them", watch: "Requires strong integration engineering" }
    ]
  },
  mistakes: {
    heading: "The seven ERP mistakes we help clients avoid",
    items: [
      { title: "Rebuilding everything", desc: "Even the modules that were fine. Scope discipline saves years." },
      { title: "Big bang cutover", desc: "One weekend to go live is where dreams go to die. Parallel run every core process for at least a month." },
      { title: "Skipping master data cleanup", desc: "Bad SKU codes and duplicate customers make every future report a lie. Clean before you migrate." },
      { title: "Forgetting the humans", desc: "The best system in the world fails if the team is not trained. Change management is not optional." },
      { title: "Reporting as an afterthought", desc: "Reporting is what makes ERP valuable. Design the reports before the data model." },
      { title: "No period close discipline", desc: "If any user can edit last month, your accounts are not really accounts." },
      { title: "Ignoring integrations", desc: "Data that has to be manually re entered will be, wrongly, forever." }
    ]
  },
  considerations: {
    heading: "The questions to ask before you sign anything",
    body: "Any serious ERP conversation should answer all of these before code starts.",
    items: [
      { title: "Where is our real bottleneck?", desc: "The module that unlocks the most value first. Everything else waits." },
      { title: "What is the master data plan?", desc: "How do we clean, migrate and govern the data going in? This is often half the total effort." },
      { title: "Who owns the change?", desc: "One senior operator on your side who can decide on the fly. Without this, nothing ships." },
      { title: "How do we train and support?", desc: "Onboarding, in system help, a short weekly office hour with the vendor during rollout." },
      { title: "What is the phased rollout?", desc: "One branch, then a region, then everyone. Not one weekend." }
    ]
  },
  fit: {
    good: [
      "Multi entity or multi region operations where existing tools do not scale",
      "Complex costing, pricing or approval rules that generic tools cannot model",
      "You have an internal champion who can lead the rollout"
    ],
    notFor: [
      "Under 20 people with simple processes, use an off the shelf tool",
      "You want to skip discovery to save time and money",
      "You have no one internally who can own the project"
    ]
  },
  scenarios: [
    { role: "Regional distributor", body: "Custom order desk, per customer pricing, credit checks and warehouse integration. Ships in three modules over six months, each replacing a spreadsheet." },
    { role: "Multi brand retailer", body: "Central inventory, per brand storefronts, unified finance and BI. Odoo core, custom pricing and promotion engine on top." },
    { role: "Contract manufacturer", body: "Job costing, materials planning, quality control and shipping documents. Fully custom, integrated with the finance package they already run." }
  ],
  faqs: [
    { q: "Do you replace SAP or NetSuite?", a: "Sometimes. Often we extend or integrate. We do not sell a rebuild that does not save you real money." },
    { q: "How long does a real ERP project take?", a: "The first module in three to five months. A full core in twelve to eighteen. Never a big bang." },
    { q: "Can we start small?", a: "Yes, always. Pick the module that hurts most. Ship it. Learn. Extend." },
    { q: "What about compliance?", a: "GAAP, IFRS, VAT, GST, e invoicing, local tax rules. Everything designed to the regime your business operates under." },
    { q: "Who owns the data?", a: "You do. Your cloud, your database, your backups, your keys." },
    { q: "What if we outgrow you?", a: "You should. Handover to your in house team is part of every retainer. We do not build dependency into the contract." }
  ],
  seo: {
    title: "ERP Development, modular finance and operations platforms | Origami99",
    description: "Modular ERP for finance, inventory, procurement and HR that integrates cleanly with the systems you already run. No big bang. No vendor lock in."
  }
};
const customWeb = {
  slug: "web-development/custom-web-development",
  parent: "web-development",
  icon: CodeXml,
  category: "Custom Web",
  title: "Hand coded web experiences",
  accent: "engineered to convert.",
  lede: "React and Next.js websites and web apps built for speed, SEO and marketers who do not want to file a ticket.",
  intro: {
    heading: "Custom is not a luxury. For most serious brands it is the cheapest option over three years.",
    body: [
      "Off the shelf website builders charge modest amounts per month, and every feature is a subscription. Add commerce, a CMS, a form builder, analytics, A B tests, personalisation, and the monthly cost quietly overtakes a hand coded site inside 24 months. Then it keeps climbing.",
      "The bigger cost is subtler. Every marketing idea that is not built in becomes a compromise, a hack or a request the engineering team quietly deprioritises. Custom builds remove that ceiling."
    ]
  },
  whatItIs: {
    heading: "What we mean by custom",
    body: [
      "Hand written React or Next.js, an intentional CMS choice, edge delivery, real analytics, structured data by default, an accessibility baseline, and a CI pipeline that catches regressions before they ship. Not a stack of plugins on top of a template."
    ]
  },
  architecture: {
    heading: "Our reference custom stack",
    body: "Chosen for speed to launch, long term hiring pool and how well each piece plays with the others.",
    layers: [
      { name: "Framework", items: ["React", "TanStack Start or Next.js", "TypeScript", "Tailwind"] },
      { name: "Content", items: ["Sanity", "Contentful", "Payload", "MDX for docs"] },
      { name: "Commerce (optional)", items: ["Shopify Storefront API", "Stripe or Paddle", "Headless cart"] },
      { name: "Edge", items: ["Cloudflare Workers", "Vercel or Netlify", "Image CDN"] },
      { name: "Marketing", items: ["GA4 with GTM", "Meta CAPI server side", "Landing page A B toolkit"] }
    ]
  },
  features: {
    heading: "What comes standard in every custom build",
    body: "The absence of these is what makes template sites feel cheap over time.",
    items: [
      { title: "Sub one second LCP", desc: "Image pipeline, code splitting and edge caching engineered together. Not a checkbox at the end." },
      { title: "SEO ready", desc: "Semantic HTML, structured data, per page metadata, sitemap, robots and internal links designed with intent." },
      { title: "CMS your team actually uses", desc: "Editorial roles, previews, scheduled publishing, image uploads with responsive delivery." },
      { title: "Accessibility baseline", desc: "WCAG 2.2 AA. Colour contrast, focus, keyboard flow, semantic landmarks." },
      { title: "Analytics done right", desc: "GA4 with a clean event taxonomy, GTM for tag management, server side events where privacy allows." },
      { title: "Forms that work", desc: "Spam protection, honeypots, server validation, delivery to your CRM and email, plus a stored audit trail." },
      { title: "Redirect and 404 hygiene", desc: "Every migration ships with a full redirect map. Errors monitored." },
      { title: "Ready for A B tests", desc: "First class feature flag and split test integration from day one." }
    ]
  },
  approaches: {
    heading: "SSG, SSR, ISR. When to use what.",
    body: "Rendering strategy is the single decision that most affects speed and SEO. We pick per page, not per site.",
    options: [
      { name: "Static generation", best: "Marketing pages, blog, product listings that change daily not hourly", watch: "Not great for personalisation" },
      { name: "Server side rendering", best: "Logged in dashboards, personalised experiences, dynamic pricing", watch: "Higher hosting cost, needs caching plan" },
      { name: "Incremental static regeneration", best: "Product pages, editorial content, mostly static but frequently updated", watch: "Cache invalidation must be understood and monitored" }
    ]
  },
  mistakes: {
    heading: "Five expensive custom build mistakes",
    items: [
      { title: "Rebuilding without a migration plan", desc: "Losing rankings and revenue because the redirects were an afterthought." },
      { title: "Choosing a headless CMS marketers hate", desc: "If the editor experience is bad, nothing gets updated, and the whole site rots." },
      { title: "Ignoring Core Web Vitals until launch", desc: "Retrofitting performance is 5x the cost of building for it from day one." },
      { title: "Skipping schema", desc: "Structured data is free traffic that most sites leave on the table." },
      { title: "Analytics as an afterthought", desc: "If you cannot measure it, you cannot improve it. Instrument the funnel before you ship." }
    ]
  },
  considerations: {
    heading: "Long term ownership beats short term flash",
    body: "Every choice below is about the site still working, still ranking and still shipping easily two years after launch.",
    items: [
      { title: "You own the code", desc: "Full IP, in your repository, deployable from your CI." },
      { title: "Your team runs the CMS", desc: "No agency tickets required to add a page." },
      { title: "The stack is hireable", desc: "React, Node, Postgres. Not an obscure framework the last person on the project loved." },
      { title: "There is a performance budget", desc: "In the CI, checked on every PR. Regressions blocked automatically." },
      { title: "Content model is stable", desc: "Pages, sections, components. Marketers can build new pages without engineering help." }
    ]
  },
  fit: {
    good: [
      "Brands where site performance and content velocity are direct revenue drivers",
      "Companies with a marketing team that will actually use a good CMS",
      "Products with a growing set of custom features the template builders cannot support"
    ],
    notFor: [
      "A five page brochure site for a two person business, use Framer or a template",
      "A brand new company still validating the offer, use Wix or Webflow to test first",
      "A team that has no capacity to maintain content weekly"
    ]
  },
  scenarios: [
    { role: "Series A SaaS site", body: "Marketing site with a docs subdomain, blog, careers, changelog. Ships to a green Lighthouse in six weeks, editable by marketing without engineering." },
    { role: "Multi region enterprise", body: "Localised marketing across three regions, one component library, one CMS, three domains, one performance budget." },
    { role: "Migration from a bloated WordPress", body: "Preserved every high traffic URL, cut LCP from 4.2 to 0.9 seconds, improved conversions on the top ten pages measurably." }
  ],
  faqs: [
    { q: "Why custom instead of Webflow?", a: "Once your marketing site needs auth, dashboards, complex commerce or a growing docs product, hand coded scales further and cheaper. For a pure marketing site under 30 pages, Webflow is often the right call." },
    { q: "How long does a custom site take?", a: "Six to eight weeks for a mid size marketing site. Twelve or more for large content operations or bespoke web apps." },
    { q: "Do you provide hosting?", a: "We deploy to your Vercel, Cloudflare or AWS account. Costs and access stay with you." },
    { q: "Can our marketers still edit content?", a: "Yes. The CMS is designed for editors. Scheduled publishing, previews, image handling, all included." },
    { q: "What about migrating an existing site?", a: "Full redirect map, structured data preserved, content migrated in a scripted way, launch monitored for 30 days." },
    { q: "How do you handle ongoing improvements?", a: "Monthly retainer or ad hoc. Weekly analytics review, prioritised backlog, and a fast lane for landing pages and campaigns." }
  ],
  seo: {
    title: "Custom Web Development, React and Next.js sites that convert | Origami99",
    description: "Hand coded React and Next.js websites and web apps built for sub second speed, first class SEO and a CMS your marketers actually use."
  }
};
const shopify = {
  slug: "web-development/shopify-ecommerce",
  parent: "web-development",
  icon: ShoppingBag,
  category: "Shopify and Ecommerce",
  title: "Shopify stores built to sell",
  accent: "not just to launch.",
  lede: "Custom Shopify themes, headless storefronts, subscription and international commerce engineered for growth.",
  intro: {
    heading: "Shopify is the right ecommerce platform for 90 percent of brands. What separates the winners is what you do on top of it.",
    body: [
      "The platform itself is world class. The stores built on it are wildly uneven. A great Shopify build is not a theme swap. It is an opinionated set of decisions about product architecture, PDP structure, cart mechanics, checkout, subscriptions, upsells, apps, tags and reporting.",
      "We build stores that convert on the first visit and retain by the second order."
    ]
  },
  whatItIs: {
    heading: "What great Shopify development covers",
    body: [
      "Theme architecture, custom sections your merchandiser can rearrange, PDP that answers every objection, cart and checkout tuned for the fewest steps, a curated app stack that does not slow the site down, and reporting that tells your merchandiser what to do next."
    ]
  },
  architecture: {
    heading: "The Shopify decisions that matter",
    body: "Most Shopify mistakes are structural. Get these five right and everything else is optimisation.",
    layers: [
      { name: "Theme approach", items: ["Custom Liquid theme", "Theme from a proven base (Dawn, Impulse)", "Headless with Hydrogen or custom"] },
      { name: "PDP", items: ["Above the fold: name, price, add to cart", "Variant UX designed per product type", "Trust, delivery, returns immediately visible"] },
      { name: "Cart and checkout", items: ["Drawer or side cart", "Shopify Checkout extensions", "Shop Pay enabled", "Delivery methods rationalised"] },
      { name: "Apps", items: ["Reviews, subscriptions, upsell, loyalty", "Every app auditable for speed", "Redundant apps removed"] },
      { name: "Data", items: ["Product taxonomy", "Metafields for structured product data", "Customer tags for segmentation"] }
    ]
  },
  features: {
    heading: "The eight decisions that lift store revenue",
    body: "Small in isolation. Compounding when done together.",
    items: [
      { title: "PDP information architecture", desc: "The order and prominence of information matches how buyers actually decide. Not a copy paste template." },
      { title: "Real trust signals", desc: "Reviews near price, shipping and returns explicit, secure checkout signals in the right place." },
      { title: "Sensible upsells", desc: "Cross sell relevant, not spammy. Post purchase and in cart, split tested." },
      { title: "Subscription mechanics", desc: "Skip, swap, pause, gift, cancel. Every one done in the customer portal, not by emailing support." },
      { title: "Search and filter", desc: "Fast, faceted, mobile first. Sorted by conversion by default." },
      { title: "Speed budget", desc: "Every app measured for its JS weight. Store passes Core Web Vitals on 4G." },
      { title: "Structured product data", desc: "Metafields properly named, exported to Google Merchant Centre and used for schema." },
      { title: "Analytics that map to margin", desc: "GA4 plus server side events, product level margin surfaced in reporting." }
    ]
  },
  approaches: {
    heading: "Custom theme, base theme extension, or headless",
    body: "Every path is legitimate. The right pick depends on scale, editorial ambition and roadmap.",
    options: [
      { name: "Custom Liquid theme from scratch", best: "Brands that want a distinctive experience and have merchandising talent", watch: "Higher build cost, needs a maintenance retainer" },
      { name: "Extend a great base theme", best: "Fast to launch, easy to hire for, most brands should start here", watch: "Ceiling on how bespoke you can go" },
      { name: "Headless with Hydrogen or a custom stack", best: "Very high traffic stores, complex content and product needs, editorial commerce", watch: "Higher engineering cost, plan for staffing to maintain" }
    ]
  },
  mistakes: {
    heading: "The seven Shopify mistakes we fix every month",
    items: [
      { title: "App bloat", desc: "Twelve apps loading on every page. Half unused. Store speed dies. Audit ruthlessly." },
      { title: "Fake urgency", desc: "Countdown timers that reset. Buyers see through it, and it costs you long term trust." },
      { title: "PDP by committee", desc: "Every stakeholder gets a section. The buyer scrolls past all of them." },
      { title: "Ignoring mobile", desc: "70 percent of the traffic, often the last thing tested." },
      { title: "No abandoned cart flow", desc: "The single highest ROI email sequence, missing on more stores than not." },
      { title: "Untagged customers", desc: "You cannot segment what you do not tag. Tags are your primary lifecycle marketing tool." },
      { title: "Not using Shopify Markets", desc: "International selling with domain, currency and language done correctly. Free revenue for many brands." }
    ]
  },
  considerations: {
    heading: "The Shopify ecosystem is a partner, not just a vendor",
    body: "Use it that way and it pays back.",
    items: [
      { title: "Shopify Plus versus core", desc: "Plus unlocks checkout extensibility, wholesale, more scripts and better support. Worth it above roughly $2M annual GMV." },
      { title: "Shop Pay", desc: "Highest converting checkout on the internet. Turn it on. Do not hide it." },
      { title: "Klaviyo or similar", desc: "Email and SMS with proper flows: welcome, abandoned cart, post purchase, winback, VIP." },
      { title: "Google Merchant Centre", desc: "Feeds tied to Shopify with product data enriched by metafields." },
      { title: "Meta and TikTok integration", desc: "CAPI for server side event tracking, catalogs for dynamic product ads." }
    ]
  },
  fit: {
    good: [
      "You have a real product, real photography and something to say",
      "You want to scale internationally on one platform",
      "You need speed to launch or replatform without a two year migration"
    ],
    notFor: [
      "Highly complex B2B with heavy negotiated pricing (BigCommerce or custom often fit better)",
      "Products with intense configurator needs beyond variants",
      "Purely marketplace models"
    ]
  },
  scenarios: [
    { role: "DTC brand launching internationally", body: "Shopify Markets, per region storefronts, local payment methods and language. Ships in six to eight weeks, ready for paid media." },
    { role: "Subscription first brand", body: "Custom PDP with subscribe first pricing, full customer portal for skip and swap, and lifecycle emails per subscription state." },
    { role: "Editorial commerce brand", body: "Content commerce hybrid on Hydrogen, magazine style landing pages, product pages tightly integrated with story." }
  ],
  faqs: [
    { q: "Custom theme or extend Dawn?", a: "For most first stores, extend Dawn or a great base. For distinctive brands past a certain scale, custom pays off." },
    { q: "Do we need Shopify Plus?", a: "Not until roughly $2M GMV. Below that, the added cost rarely pays back." },
    { q: "Can you migrate from WooCommerce or Magento?", a: "Yes. Full product, customer and order migration, plus redirects and SEO preservation." },
    { q: "What about B2B?", a: "Shopify B2B on Plus works well for many wholesalers. For heavy negotiated pricing, we recommend evaluating alternatives honestly." },
    { q: "How do you handle apps?", a: "Fewer, better, audited. Every app measured for speed impact." },
    { q: "Do you build custom apps?", a: "When a public app cannot do the job. We build them in your Shopify org, hand over the code and the app credentials." }
  ],
  seo: {
    title: "Shopify Development, custom stores and headless commerce | Origami99",
    description: "Custom Shopify themes, headless storefronts, subscriptions and international commerce engineered to convert on the first visit and retain by the second order."
  }
};
const wordpress = {
  slug: "web-development/wordpress-development",
  parent: "web-development",
  icon: FileText,
  category: "WordPress",
  title: "WordPress the way it was meant to be built",
  accent: "not the way it usually is.",
  lede: "Fast, secure, editorially rich WordPress builds with headless architecture and speed budgets, engineered for real editors.",
  intro: {
    heading: "WordPress powers 40 percent of the web. Most of those sites are slow and insecure. It does not have to be that way.",
    body: [
      "The problem with most WordPress sites is not WordPress. It is the accumulation of themes, page builders and plugins layered on top of it by well meaning teams over years. The right way to run WordPress in 2026 is opinionated: a lean theme or a headless front end, a curated plugin set, managed hosting, and a real deployment pipeline.",
      "Done that way, WordPress is a formidable content platform. Editors love it, engineers can maintain it, and the site is fast and safe."
    ]
  },
  whatItIs: {
    heading: "Two modern shapes for WordPress in 2026",
    body: [
      "First, classic monolithic WordPress with a lean custom theme, minimal plugins, managed hosting and a proper CI pipeline. Second, headless WordPress where WordPress is the editor and a React or Next.js front end delivers the site. Both are valid. We help you pick."
    ]
  },
  architecture: {
    heading: "How we structure a WordPress build",
    body: "Every layer chosen to be maintainable in five years, not just clever today.",
    layers: [
      { name: "Hosting", items: ["Kinsta, WP Engine or managed", "Object cache", "Edge CDN", "Daily backups tested"] },
      { name: "Theme", items: ["Custom block theme or lean starter", "Blocks, not page builders", "Design tokens in code"] },
      { name: "Plugins", items: ["ACF Pro for structured content", "Yoast or Rank Math for SEO", "Wordfence or equivalent security", "As few extras as possible"] },
      { name: "Editor", items: ["Custom blocks per pattern", "Reusable blocks for campaigns", "Role based publishing workflow"] },
      { name: "Delivery", items: ["Optimised images", "Lazy loaded video", "Critical CSS", "HTTP2 or 3"] }
    ]
  },
  features: {
    heading: "What editors get in a proper WordPress build",
    body: "The features below are what turn WordPress from a blog into a serious content platform.",
    items: [
      { title: "Custom blocks", desc: "The editor drags in patterns designed for your brand. No random Divi widgets. No off brand layouts." },
      { title: "Structured content with ACF", desc: "Fields per content type. Not just a big rich text field with hopes." },
      { title: "Editorial workflow", desc: "Draft, review, schedule, publish. Roles that mean something." },
      { title: "SEO baked in", desc: "Sitemaps, schema, redirects, canonical tags, per page controls." },
      { title: "Multilingual", desc: "WPML or Polylang set up cleanly for multi region publishing." },
      { title: "Membership or paywall (optional)", desc: "For editorial businesses that need subscriber revenue." },
      { title: "Managed hosting", desc: "PHP updates, WordPress core updates, plugin updates on a schedule, no surprises." },
      { title: "Real backups", desc: "Off site, tested restore drills, retention policy in writing." }
    ]
  },
  approaches: {
    heading: "Monolithic, headless, or hybrid",
    body: "Pick the one that matches your team and roadmap.",
    options: [
      { name: "Monolithic WordPress", best: "Content led site, marketing team already knows WordPress, need speed to launch", watch: "Performance ceiling depends on hosting and theme discipline" },
      { name: "Headless WordPress", best: "High traffic content sites, want a React front end with a WordPress editor", watch: "More moving parts, needs a real engineering owner" },
      { name: "Hybrid", best: "Main site headless, blog or docs on monolithic, best of both", watch: "More surface area to secure and monitor" }
    ]
  },
  mistakes: {
    heading: "Seven WordPress mistakes we constantly clean up",
    items: [
      { title: "Page builder tax", desc: "Elementor, Divi and WPBakery add DOM weight and slow every page. Move to blocks." },
      { title: "Plugin sprawl", desc: "Every plugin is a potential security incident and a maintenance liability. Audit twice a year." },
      { title: "Shared cheap hosting", desc: "The single biggest cause of slow WordPress. Move to managed." },
      { title: "No staging environment", desc: "Editing plugins on production live. It fails, always, eventually." },
      { title: "Ignoring security updates", desc: "WordPress vulnerabilities are almost always in outdated plugins. Update on a schedule." },
      { title: "Uncontrolled image weight", desc: "The main reason WordPress feels slow. Fix with optimisation pipeline and lazy loading." },
      { title: "No redirect discipline on redesigns", desc: "Every relaunch loses rankings when redirects are an afterthought." }
    ]
  },
  considerations: {
    heading: "Security is not optional",
    body: "The below is the minimum baseline in every WordPress engagement we run.",
    items: [
      { title: "Two factor for admin", desc: "Non negotiable." },
      { title: "Least privilege", desc: "Editors are editors. Only one or two administrators, ever." },
      { title: "Login rate limiting", desc: "Brute force attempts blocked at the edge and in the app." },
      { title: "Firewall and malware scan", desc: "Wordfence, Sucuri or equivalent. Weekly scans." },
      { title: "Regular backups tested", desc: "Restore drills quarterly. A backup you have not tested is not a backup." }
    ]
  },
  fit: {
    good: [
      "Content led businesses with a serious editorial operation",
      "Marketing teams already trained on WordPress",
      "Media companies, education, non profits, professional services"
    ],
    notFor: [
      "Highly transactional ecommerce (Shopify usually wins)",
      "SaaS product marketing sites (custom or Webflow often better)",
      "Very small brochure sites (Framer or Wix are faster)"
    ]
  },
  scenarios: [
    { role: "Publisher", body: "Custom block theme, tight editorial workflow, membership paywall, ranked for thousands of terms without an SEO plugin doing the heavy lifting." },
    { role: "Regional professional services group", body: "Multi language, multi region WordPress with per branch pages, unified content model and a fast front end." },
    { role: "Legacy WordPress rescue", body: "Site inherited with 47 plugins, four page builders, three languages. Audit, consolidation and headless migration completed in stages." }
  ],
  faqs: [
    { q: "Is WordPress still a good choice?", a: "Yes, for content led sites, done right. It is the wrong choice for SaaS product sites and transactional ecommerce." },
    { q: "Headless or monolithic?", a: "Headless if you have engineering capacity and a large content operation. Monolithic if speed to launch and editor familiarity matter more." },
    { q: "Do you use page builders?", a: "No. Custom blocks give the editor freedom without the performance and lock in tax." },
    { q: "Can you take over an existing WordPress site?", a: "Yes. Full audit, security cleanup, performance pass and often plugin consolidation as the first engagement." },
    { q: "What about hosting?", a: "We deploy to your Kinsta, WP Engine or managed WordPress account. We do not resell hosting." },
    { q: "Multilingual?", a: "WPML or Polylang configured properly for your language and market strategy." }
  ],
  seo: {
    title: "WordPress Development, editorial and enterprise builds | Origami99",
    description: "Fast, secure, editorially rich WordPress builds with headless architecture and speed budgets. No page builders. No plugin sprawl. Editors love it."
  }
};
const webflowFramer = {
  slug: "web-development/webflow-framer",
  parent: "web-development",
  icon: Layers,
  category: "Webflow and Framer",
  title: "Webflow and Framer",
  accent: "for teams that ship weekly.",
  lede: "Design led marketing sites your team can update without ever opening a ticket, launched in weeks, not months.",
  intro: {
    heading: "The best marketing team beats the biggest one. Webflow and Framer are how small marketing teams beat big ones.",
    body: [
      "There is a category of website that does not need a CMS, a backend, a product engineer or a devops on call. It needs to look excellent, load fast, rank on Google, run experiments and update on the marketer's schedule, not the engineer's. Webflow and Framer are the two best tools in the world for building exactly that.",
      "We use them not to save money on the build. We use them to give marketing teams velocity for years after launch."
    ]
  },
  whatItIs: {
    heading: "Which tool for which site",
    body: [
      "Framer is best for beautiful, motion rich marketing sites with light structured content. Webflow is best for larger content operations, richer CMS needs and complex components. Both produce production sites that rank, convert and ship weekly."
    ]
  },
  architecture: {
    heading: "Our reference structure",
    body: "A Webflow or Framer build is not just a project file. It is a discipline.",
    layers: [
      { name: "Design system", items: ["Named colour and type styles", "Reusable components", "Documented spacing scale"] },
      { name: "CMS", items: ["Content model designed with the editor", "Reference fields for related content", "Filter and sort where useful"] },
      { name: "Interactions", items: ["Purposeful only", "Reduced motion respected", "Performance budget"] },
      { name: "SEO", items: ["Per page metadata", "Structured data via embed or Webflow native", "Sitemap and robots"] },
      { name: "Analytics", items: ["GA4 and GTM", "Conversion events tied to CRM", "Form submissions to CRM directly"] }
    ]
  },
  features: {
    heading: "What we bake into every no code build",
    body: "The difference between a beautiful demo and a site that earns its keep.",
    items: [
      { title: "Editable everything", desc: "Every headline, image, card, testimonial is CMS driven. Marketers change without touching the design." },
      { title: "Fast on 4G", desc: "Image optimisation, video treated carefully, third party scripts audited." },
      { title: "Real forms", desc: "Direct integration with HubSpot, Salesforce or your CRM. Not just an email notification." },
      { title: "A B ready", desc: "Framer variants or Webflow native, plus a plan for real experimentation." },
      { title: "SEO baked in", desc: "Titles, descriptions, canonical, schema, sitemap, redirects." },
      { title: "Motion with purpose", desc: "Scroll animation, page transitions, micro interactions that support the message, never distract from it." }
    ]
  },
  approaches: {
    heading: "When Webflow. When Framer. When neither.",
    body: "Both tools are excellent. Neither is right for every project.",
    options: [
      { name: "Framer", best: "Motion heavy startup sites, portfolios, product launches under 40 pages", watch: "CMS is lighter than Webflow. Complex content models get tight." },
      { name: "Webflow", best: "Content rich marketing sites, up to a few hundred pages, complex components", watch: "Cost scales with CMS items and traffic" },
      { name: "Neither", best: "Product SaaS marketing sites past a certain size, editorial businesses, ecommerce, custom apps", watch: "Custom or headless will serve you better long term" }
    ]
  },
  mistakes: {
    heading: "Five things people get wrong with Webflow and Framer",
    items: [
      { title: "Treating them like Photoshop", desc: "They are design systems, not one off canvases. Reusable components matter." },
      { title: "Ignoring the CMS on day one", desc: "Retrofitting CMS after visual design triples the work." },
      { title: "Uncontrolled animation", desc: "Every animation costs performance and attention. Budget both." },
      { title: "No SEO plan", desc: "Framer especially: default settings will not rank. Every page needs deliberate SEO." },
      { title: "Skipping the handover doc", desc: "Two years later, your marketer will not remember what the components were for. Document them." }
    ]
  },
  considerations: {
    heading: "Long term ownership",
    body: "Do this right and the site keeps compounding.",
    items: [
      { title: "You own the workspace", desc: "Full account access, billing under your control." },
      { title: "Design tokens and naming", desc: "So the next designer or agency can pick up cleanly." },
      { title: "Documented components", desc: "A short Loom per major pattern. Two hours of work, saved a hundred times." },
      { title: "A migration plan if you outgrow it", desc: "Content is portable. Design is not. We tell you upfront when you will hit the ceiling." }
    ]
  },
  fit: {
    good: [
      "Marketing sites under 100 pages",
      "Design led brands where visual quality matters",
      "Teams with strong marketers and no dedicated dev capacity"
    ],
    notFor: [
      "Product SaaS with heavy custom features on the marketing site",
      "Editorial businesses publishing multiple times a day",
      "Ecommerce beyond a few products"
    ]
  },
  scenarios: [
    { role: "Seed stage startup marketing site", body: "Framer, twelve pages, motion rich, ranks and converts, marketing runs it entirely after launch." },
    { role: "B2B agency", body: "Webflow, 40 pages, case study CMS, blog, careers, all editable by the marketing lead." },
    { role: "Event or launch site", body: "Framer, three weeks from brief to live, motion first, analytics tied to registration flow." }
  ],
  faqs: [
    { q: "Framer or Webflow?", a: "Framer for smaller, motion heavy sites. Webflow for content rich sites with real CMS needs." },
    { q: "How fast can you launch?", a: "Two to four weeks for Framer, four to eight for Webflow, depending on scope." },
    { q: "Can we edit after launch?", a: "Yes, that is the point. We hand over a documented workspace and a short training." },
    { q: "Will it rank on Google?", a: "Yes, with the right setup. Both tools produce fast, semantic HTML if you configure them properly." },
    { q: "What about hosting?", a: "Both tools host under their own infrastructure. You own the account and the billing." },
    { q: "When would you say no to Webflow or Framer?", a: "When the roadmap requires product features, auth, complex commerce or heavy custom logic. Then we recommend custom." }
  ],
  seo: {
    title: "Webflow and Framer, design led marketing sites that ship | Origami99",
    description: "Webflow and Framer builds for teams that need a beautiful, fast, SEO ready site their marketers actually update every week."
  }
};
const wix = {
  slug: "web-development/wix-no-code",
  parent: "web-development",
  icon: Globe,
  category: "Wix and No Code",
  title: "Wix, WordPress.com and lean no code",
  accent: "for brands that need to move today.",
  lede: "Fast to launch, easy to update, honestly scoped no code and low code sites for early stage brands and small businesses.",
  intro: {
    heading: "Not every business needs a custom build. Some need to be live by Friday.",
    body: [
      "Wix, WordPress.com, Squarespace, Framer templates, Shopify starter themes. All of them are tools that can produce a serious, professional web presence in days rather than months. The trick is to know their limits and design within them, not against them.",
      "We build a lot of these sites for early stage brands, local service businesses and campaigns where speed matters more than uniqueness. Done well they are respectable, ranked, and revenue generating."
    ]
  },
  whatItIs: {
    heading: "The honest place of no code",
    body: [
      "A great no code site can carry a business from zero to seven figures in revenue. Beyond that, most brands outgrow the tools and migrate. That is fine. Fast to launch, cheap to run, honest about the ceiling."
    ]
  },
  architecture: {
    heading: "How we scope a no code build",
    body: "Small, focused, honest.",
    layers: [
      { name: "Discovery", items: ["Two page brief", "Content and photography ready", "Domain and email in your control"] },
      { name: "Design", items: ["Template chosen carefully", "Brand tokens applied consistently", "Mobile designed first"] },
      { name: "Build", items: ["Editable structure for your team", "Forms wired to your inbox and CRM", "Analytics installed"] },
      { name: "SEO baseline", items: ["Titles, descriptions", "Sitemap and robots", "Google Business profile if local"] },
      { name: "Handover", items: ["Editor training", "Short Loom per page type", "Migration plan if and when you outgrow"] }
    ]
  },
  features: {
    heading: "What we insist on even in a no code build",
    body: "Cheap does not have to mean sloppy.",
    items: [
      { title: "Your own domain", desc: "Never a subdomain of the builder." },
      { title: "Analytics from day one", desc: "GA4 configured, not the builder's opaque dashboard." },
      { title: "Real forms", desc: "Delivered to your CRM and inbox, spam protected." },
      { title: "Mobile first", desc: "Most traffic is on phones. The site is designed there first." },
      { title: "Local SEO if relevant", desc: "Google Business Profile, structured data, service area pages." },
      { title: "Editable, not fragile", desc: "Your team can update copy without breaking layout." }
    ]
  },
  approaches: {
    heading: "Which no code tool for which project",
    body: "Every tool has a sweet spot.",
    options: [
      { name: "Wix", best: "Small business, service business, straightforward CMS needs", watch: "Design flexibility limited compared to Webflow" },
      { name: "WordPress.com hosted", best: "Editorial focused, want familiar editor without hosting worries", watch: "Fewer plugins available than self hosted" },
      { name: "Squarespace", best: "Design led personal brands, photographers, small commerce", watch: "Global scale sites outgrow it quickly" },
      { name: "Framer templates", best: "Beautiful startup sites with a small budget", watch: "Complex CMS needs will hit ceilings" }
    ]
  },
  mistakes: {
    heading: "Six mistakes early stage brands make with no code",
    items: [
      { title: "Choosing the tool before the content", desc: "The tool serves the content. Not the other way round." },
      { title: "Trying to look bigger than you are", desc: "Simple, honest and specific beats grand and vague, every time." },
      { title: "No analytics", desc: "You cannot improve what you cannot measure. Install GA4 on day one." },
      { title: "Skipping the domain email", desc: "A gmail contact address on your website is a trust killer." },
      { title: "Ignoring local SEO", desc: "For any local business, Google Business Profile is more important than the website." },
      { title: "Overbuying features", desc: "You do not need a booking system, a chatbot and a rewards program on day one. Ship the essentials." }
    ]
  },
  considerations: {
    heading: "Plan for the ceiling",
    body: "Every no code tool has one. Knowing it upfront saves a stressful migration later.",
    items: [
      { title: "Content is exportable", desc: "Copy, images, structured content in a format you can migrate later." },
      { title: "Domain is yours", desc: "So a migration is a DNS change, not a rebuild." },
      { title: "Email is yours", desc: "Kept independent of the site builder." },
      { title: "Payments are yours", desc: "If you sell, keep the Stripe or payment account in your name from day one." }
    ]
  },
  fit: {
    good: [
      "Local service businesses",
      "Early stage brands validating an offer",
      "Campaign sites and short lived promotions",
      "Small ecommerce experimenting with a first collection"
    ],
    notFor: [
      "Brands past a certain revenue where the tools cap growth",
      "Complex commerce or subscription businesses",
      "Editorial businesses with high publishing volume"
    ]
  },
  scenarios: [
    { role: "Local trade business", body: "Wix site with service area pages, quote forms and Google Business Profile fully optimised. Live in a week. Ranking locally in a month." },
    { role: "Newsletter with a website", body: "WordPress.com or Ghost hosted for the writer, editorial workflow, subscribe form, analytics." },
    { role: "Pop up brand launch", body: "Framer template customised, Shopify starter theme for commerce, analytics tied to paid media." }
  ],
  faqs: [
    { q: "Is no code really professional?", a: "Yes, when it is done deliberately. The tool matters less than the discipline behind the choices." },
    { q: "How fast can we launch?", a: "One to two weeks for a small business site, three to four for a richer template based build." },
    { q: "When do we outgrow it?", a: "Usually when the CMS gets too complex, custom features become critical or performance ceilings hurt paid media. Then we migrate." },
    { q: "Do you handle migration to custom later?", a: "Yes, that is often the second engagement. We plan for it from the start so the handoff is clean." },
    { q: "Can you help with content and photography?", a: "We can guide, refer photographers and write copy on a separate engagement. Content quality is often the difference between a good and a bad no code build." },
    { q: "Do you host?", a: "The tool hosts. You own the account and the billing." }
  ],
  seo: {
    title: "Wix and No Code Web Development, honest fast launches | Origami99",
    description: "Fast to launch, easy to update, honestly scoped no code sites for early stage brands, service businesses and campaigns."
  }
};
const googleAds = {
  slug: "digital-marketing/google-ads",
  parent: "digital-marketing",
  icon: Target,
  category: "Google Ads",
  title: "Google Ads run against revenue",
  accent: "not clicks and impressions.",
  lede: "Search, Performance Max, YouTube and Display campaigns structured, tracked and optimised weekly against profit, not vanity metrics.",
  intro: {
    heading: "Most Google Ads accounts are burning money in ways their owners cannot see.",
    body: [
      "Broken conversion tracking, keyword themes fighting each other, brand traffic bought at retail prices, Performance Max hoovering the credit of every other channel and taking the credit for the conversions those channels caused. Every one of these is a leak. Together they compound to accounts that look busy on the surface and lose ground month over month.",
      "Our first ninety days on a new account is almost always a rebuild disguised as an optimisation. The account works only when the plumbing works."
    ]
  },
  whatItIs: {
    heading: "What Google Ads should actually be doing for you",
    body: [
      "Google Ads is not one channel. It is at least six: brand search, non brand search, shopping and Performance Max, YouTube, display and remarketing. Each has a different job in your funnel, a different measurement discipline and a different profit ceiling. A serious account treats them accordingly."
    ]
  },
  architecture: {
    heading: "The auction, plainly explained",
    body: "Google Ads is a real time auction. Understanding what you are actually buying is the first step to spending well.",
    layers: [
      { name: "Query", items: ["What the user typed", "Match type controls how loosely it maps", "Search terms report shows what really matched"] },
      { name: "Ad rank", items: ["Bid times quality score times expected impact", "You do not pay per click, you pay per next competitor's ad rank plus one cent", "Quality score is under your control"] },
      { name: "Placement", items: ["Search partners", "Display partners", "YouTube surfaces", "Discover and Gmail"] },
      { name: "Conversion", items: ["Client side gtag", "Server side via GA4 or CAPI", "Enhanced conversions for match rate", "Offline conversion upload for CRM tied wins"] }
    ]
  },
  features: {
    heading: "How a well run Google Ads account looks under the hood",
    body: "The below is a checklist we use every week on client accounts.",
    items: [
      { title: "Conversion tracking that tells the truth", desc: "Server side conversion API, enhanced conversions, offline conversion import from CRM. Match rate above 70 percent." },
      { title: "Account structure by intent", desc: "Brand, non brand, competitor, prospecting, retargeting, YouTube. Separate campaigns, separate budgets, separate bid strategies." },
      { title: "Negative keyword hygiene", desc: "Reviewed weekly, shared negative lists at account level, close variants controlled." },
      { title: "Performance Max managed intentionally", desc: "Fed structured product data, asset groups per intent, brand terms excluded, campaign level results monitored against baseline." },
      { title: "Landing pages tuned to each campaign", desc: "Every ad group has a page that answers its query. Not a generic homepage." },
      { title: "Bid strategies that make sense", desc: "Target CPA or ROAS with enough conversion volume, manual CPC when volume is low, portfolio strategies rarely." },
      { title: "Weekly optimisations tied to a hypothesis", desc: "Every change is a documented test with expected impact. No random tweaking." },
      { title: "Monthly deep dives", desc: "Query analysis, geo performance, day parting, device performance, competitor auction insights." }
    ]
  },
  approaches: {
    heading: "Manual, smart bidding, or Performance Max",
    body: "There is no universal right answer. There is a right mix per account.",
    options: [
      { name: "Manual CPC", best: "Low conversion volume, learning phase, tight control", watch: "Does not scale, misses opportunities smart bidding catches" },
      { name: "Smart bidding (tCPA, tROAS)", best: "Steady conversion volume, clear CPA or ROAS target", watch: "Needs accurate conversion tracking to work" },
      { name: "Performance Max", best: "Product retailers with strong Merchant Centre data, retail led brands", watch: "Opaque, can cannibalise other campaigns, must be managed with brand exclusions and structured asset groups" }
    ]
  },
  mistakes: {
    heading: "The nine expensive Google Ads mistakes we fix constantly",
    items: [
      { title: "Bidding on your own brand at auction prices", desc: "Competitors bidding on your brand can be worth defending. Always? No. It depends on organic dominance and competitor pressure." },
      { title: "Performance Max eating credit for organic wins", desc: "Bad attribution setup lets PMax claim conversions that would have happened anyway." },
      { title: "One conversion action, everything counts", desc: "A form fill and a purchase are not the same conversion. Track and value them differently." },
      { title: "Broad match with no negatives", desc: "You end up paying for queries your business cannot serve." },
      { title: "Ignoring search terms report", desc: "The single most valuable weekly view in Google Ads." },
      { title: "Copy that ignores the query", desc: "Ads that repeat the search query win the click. Ads that ignore it get skipped." },
      { title: "Landing page mismatch", desc: "Ad promises a specific outcome, page delivers a generic message. Bounce, wasted spend." },
      { title: "Not using audience signals", desc: "Even in Performance Max, first party audience signals meaningfully improve targeting." },
      { title: "Optimising against inflated conversion counts", desc: "iOS and browser privacy have distorted client side conversions. Server side or you flying blind." }
    ]
  },
  considerations: {
    heading: "Attribution in 2026, plainly",
    body: "The single most misunderstood topic in paid media. The reality is that all attribution is wrong, some is useful.",
    items: [
      { title: "GA4 data driven attribution", desc: "Better than last click. Still relies on the same tracking limitations." },
      { title: "Enhanced conversions", desc: "Sends hashed customer data with the event. Improves match rate materially." },
      { title: "Offline conversion import", desc: "Ties CRM outcomes back to the click. The only way to optimise long sales cycles." },
      { title: "Media mix modelling for scale", desc: "Once spend is meaningful, MMM beats platform reported metrics for strategic decisions." },
      { title: "Incrementality testing", desc: "Geo splits or holdouts occasionally to check whether the spend is really moving the needle." }
    ]
  },
  fit: {
    good: [
      "Businesses with clear demand where users search for what you sell",
      "Retailers with strong Merchant Centre data and margins that support paid",
      "Service businesses with clear geographic coverage and defined offers",
      "SaaS with a sales cycle short enough to instrument end to end"
    ],
    notFor: [
      "Brand new categories where nobody is searching for the problem yet (Meta or TikTok make sense first)",
      "Products with margins that cannot support paid acquisition even at scale",
      "Businesses without any conversion tracking discipline"
    ]
  },
  scenarios: [
    { role: "DTC retailer", body: "Rebuilt Merchant Centre feed, restructured Performance Max with brand exclusions, added enhanced conversions and server side CAPI. Cost per purchase visibility improved within eight weeks." },
    { role: "B2B SaaS", body: "Non brand search targeting high intent problem queries, LinkedIn Ads for warm audiences, CRM tied offline conversion import so bid strategies optimise against pipeline value, not form fills." },
    { role: "Multi location service business", body: "Geo split campaigns per market, local landing pages, call tracking with dynamic number insertion, weekly optimisation per city." }
  ],
  faqs: [
    { q: "What is a fair minimum media spend?", a: "For meaningful learning across campaigns, roughly ten thousand USD a month or equivalent. Below that, focus on one campaign type." },
    { q: "How long before results show?", a: "Signals within two to four weeks, stable performance within eight to twelve. Serious accounts compound over months, not days." },
    { q: "Do you require long contracts?", a: "No. After a 90 day foundation phase we go month to month." },
    { q: "Do you handle creative?", a: "Yes. Ad copy, image ads, video ads all produced in house or with vetted partners." },
    { q: "Who owns the ad account?", a: "You do. We work in your Google Ads account under manager access." },
    { q: "Can you audit our existing account first?", a: "Yes. Paid audit with a written report and specific recommendations, deliverable in one week." }
  ],
  seo: {
    title: "Google Ads Management, run against real revenue | Origami99",
    description: "Search, Performance Max, YouTube and Display campaigns structured, tracked and optimised weekly against profit. Senior team, honest reporting, no lock in."
  }
};
const metaAds = {
  slug: "digital-marketing/meta-ads",
  parent: "digital-marketing",
  icon: Target,
  category: "Meta Ads",
  title: "Meta Ads that scale",
  accent: "without imploding.",
  lede: "Facebook and Instagram campaigns built on a real creative testing framework, server side tracking and Advantage plus done properly.",
  intro: {
    heading: "The Meta ecosystem still has the largest and most engaged addressable audience on the internet. Making it profitable is a craft.",
    body: [
      "Meta is a creative auction. The best creative wins the lowest costs. The measurement environment is harder than it was in 2020, but not impossible. Server side tracking, conversion API, disciplined attribution and a real creative operation are what separate the accounts that scale from the ones that stall.",
      "Every serious Meta account we run is really a creative machine wearing a media planner costume."
    ]
  },
  whatItIs: {
    heading: "How Meta Ads actually work in 2026",
    body: [
      "Advantage plus shopping campaigns and Advantage plus creative dominate. Manual targeting is largely a signal, not a rule. The auction rewards ads that hold attention. Which means creative quality, not audience picking, is the primary lever. Everything downstream (bidding, budgets, attribution) is table stakes."
    ]
  },
  architecture: {
    heading: "The Meta stack that works today",
    body: "Chosen for what actually moves the needle right now.",
    layers: [
      { name: "Tracking", items: ["Meta Pixel client side", "Conversions API server side", "Deduplication with event ID", "Consent mode integrated"] },
      { name: "Account structure", items: ["One or two Advantage plus shopping campaigns", "Prospecting broad", "Retargeting warm audiences", "Retention campaigns for buyers"] },
      { name: "Creative", items: ["Weekly hooks", "UGC and studio in a mix", "Motion, static and carousel tested against each other", "Iterated on the winners"] },
      { name: "Landing pages", items: ["Fast, on message", "Mobile first", "Match the promise in the ad exactly"] },
      { name: "Measurement", items: ["Blended ROAS as primary metric", "Platform reported for direction", "Incrementality for strategy"] }
    ]
  },
  features: {
    heading: "What a functional Meta account looks like inside",
    body: "Every account we manage runs against a version of this checklist.",
    items: [
      { title: "CAPI and deduplication", desc: "Server side events matched to client side, dedup keys, offline events for the CRM tied wins." },
      { title: "Real creative pipeline", desc: "New hooks every week, studio and UGC in a mix, motion and static variants of every angle." },
      { title: "Hook first thinking", desc: "First one to two seconds decide the fate of every ad. Design them ruthlessly." },
      { title: "Advantage plus intentionally used", desc: "Not as an excuse to abandon structure, but as the workhorse for scale once creative is proven." },
      { title: "Warm and cold separated for measurement", desc: "So you know how your retargeting is actually performing against baseline." },
      { title: "Post purchase attribution", desc: "Offline conversion for the CRM tied conversions, so the algorithm optimises for the right outcome." },
      { title: "Iteration cadence", desc: "Weekly creative reviews with the client, hypothesis driven testing, winners scaled, losers retired without ego." },
      { title: "Budgets moved on evidence, not vibes", desc: "Advantage plus shopping campaigns get most of the paid budget once proven; new tests get a protected budget." }
    ]
  },
  approaches: {
    heading: "Three testing frameworks that work in 2026",
    body: "Pick the one that fits your creative volume and budget.",
    options: [
      { name: "Creator concept testing", best: "New brands, need to find angles that work", watch: "Requires meaningful test budget and creative volume" },
      { name: "Iterative winner scaling", best: "Established brands with proven angles, focused on refresh cadence", watch: "Creative fatigue is real, plan the refresh schedule" },
      { name: "Full funnel with lifecycle", best: "Ecommerce and DTC brands with strong AOV and email programs", watch: "Requires tight coordination between paid and lifecycle teams" }
    ]
  },
  mistakes: {
    heading: "Eight Meta mistakes we still see monthly",
    items: [
      { title: "Client side tracking only", desc: "Missing 30 to 50 percent of events. CAPI is not optional anymore." },
      { title: "Judging ads on 24 hour data", desc: "Attribution windows have widened. Give ads 3 to 7 days before killing them." },
      { title: "Chasing platform ROAS", desc: "Platform ROAS ignores incrementality. Blended ROAS or MER is a truer North Star." },
      { title: "One creative angle per campaign", desc: "The account is one bad news cycle away from disaster. Diversify angles." },
      { title: "No hook variation", desc: "Same ad, different thumbnail is not creative testing." },
      { title: "Complex audience targeting on Advantage plus", desc: "Advantage plus works because it is broad. Do not fight it." },
      { title: "Ignoring the landing page", desc: "The best ad in the world cannot save a bad landing experience." },
      { title: "No retention play", desc: "Acquisition is expensive. Retaining a buyer through post purchase and lifecycle is where the margin lives." }
    ]
  },
  considerations: {
    heading: "The iOS and privacy reality",
    body: "This is the single biggest source of confusion in Meta accounts. Here is what actually matters.",
    items: [
      { title: "Signal loss is real", desc: "Attribution is materially worse than pre 2021. Every serious brand has adjusted expectations." },
      { title: "Server side events help", desc: "CAPI and offline events recover a meaningful chunk of the lost signal." },
      { title: "Modelled conversions", desc: "Meta models what it cannot measure directly. Not perfect, but better than blindness." },
      { title: "Aggregated Event Measurement", desc: "Cap of 8 events per domain. Prioritise them by business value." },
      { title: "Blended reporting", desc: "Comparing platform reported ROAS to blended MER tells you how much overreporting is happening." }
    ]
  },
  fit: {
    good: [
      "DTC brands with visual products and clear positioning",
      "Consumer services with strong social proof",
      "B2B brands willing to invest in creative for LinkedIn or Meta hybrid campaigns"
    ],
    notFor: [
      "Brands with weak creative capacity and no interest in building it",
      "Products with tiny margins that cannot absorb paid CAC",
      "Services with very small addressable audiences (LinkedIn or search may fit better)"
    ]
  },
  scenarios: [
    { role: "Growth stage DTC brand", body: "Advantage plus shopping as core, three creative testing campaigns feeding the winners, CAPI plus enhanced customer info for match rate, blended MER dashboard for strategic decisions." },
    { role: "Consumer service", body: "Warm retargeting from web visitors, look alike prospecting layered on top, dynamic creative with hook variation, call to book directly in ad." },
    { role: "SaaS with a self serve motion", body: "Meta plus LinkedIn hybrid, conversion optimised for demo requests, server side tracking to Rev Ops, iterated creative around specific ICPs." }
  ],
  faqs: [
    { q: "How much budget do we need to test properly?", a: "Ten thousand USD or equivalent per month unlocks proper creative testing velocity across audiences and angles." },
    { q: "Do you produce the creative?", a: "Yes. Static, motion, UGC and studio, produced in house or with vetted partners." },
    { q: "How fast do you scale spend?", a: "As fast as creative performance and blended profit allow. Scale is a consequence of winning creative, not a target in itself." },
    { q: "What is the reporting cadence?", a: "Live dashboard, weekly Loom, monthly business review." },
    { q: "Do you handle TikTok too?", a: "Yes, in a separate but coordinated engagement." },
    { q: "Can you audit our current account?", a: "Yes. Free 30 minute review, paid full audit with written recommendations." }
  ],
  seo: {
    title: "Meta Ads Management, Facebook and Instagram at scale | Origami99",
    description: "Meta Ads engineered for profit: CAPI, Advantage plus done properly, a real creative pipeline and blended ROAS reporting."
  }
};
const tiktokAds = {
  slug: "digital-marketing/tiktok-short-form-ads",
  parent: "digital-marketing",
  icon: Video,
  category: "TikTok and Short Form",
  title: "TikTok and short form ads",
  accent: "that earn attention.",
  lede: "Hook first creative built for the feed, tested to profit inside seven day windows.",
  intro: {
    heading: "TikTok and Reels are their own auction, their own language and their own culture. Copying your Meta strategy will fail you.",
    body: [
      "Short form is not a placement. It is a medium. The ads that win look like the content around them, not like ads pretending to be content. They earn a second of trust, then a second more, then a click. Every creative decision compounds or destroys that trust.",
      "We treat short form as a creative discipline with a media budget attached, not the other way round."
    ]
  },
  whatItIs: {
    heading: "How short form actually works",
    body: [
      "The algorithm decides in the first two to three seconds whether to keep serving the ad or dropping it. Every subsequent second is a decision point. Watch time, replay rate, saves and shares outweigh every classic audience signal. Creative wins or loses everything else."
    ]
  },
  architecture: {
    heading: "The short form creative stack",
    body: "What consistently works in the feed today.",
    layers: [
      { name: "Hook", items: ["Pattern break in the first frame", "Text overlay reinforces spoken hook", "Native platform aesthetic"] },
      { name: "Delivery", items: ["Vertical 9:16", "Fast cuts", "Captions burned in", "Music from platform library"] },
      { name: "Payoff", items: ["Product in context, not on a plinth", "Real problem, real result", "Social proof shown, not told"] },
      { name: "Call to action", items: ["Specific and singular", "Reason to act now", "Match the landing page tone"] }
    ]
  },
  features: {
    heading: "What a mature short form program looks like",
    body: "The below is what separates volume that works from volume that noise.",
    items: [
      { title: "Weekly hook production", desc: "Three to ten new hooks per week, tested cheap, winners scaled." },
      { title: "Creator ecosystem", desc: "A roster of creators producing organic style ads, briefed tightly, iterated weekly." },
      { title: "UGC library", desc: "Your customers filming, coached lightly, edited into ad format." },
      { title: "Studio backstop", desc: "In house studio for the ads UGC cannot cover: demos, features, high production spots." },
      { title: "Testing framework", desc: "Every ad has a hypothesis and a kill criteria. No creative sits in the account without a job." },
      { title: "Landing pages that match tone", desc: "The whiplash from a casual ad to a corporate landing page kills conversion." },
      { title: "Sound design intentional", desc: "Music, voiceover and audio hooks are as important as visuals." },
      { title: "Trend awareness without cringe", desc: "Not every trend is your brand. Discipline about what to jump on." }
    ]
  },
  approaches: {
    heading: "Three creative operations, three budgets",
    body: "Match the operation to the ambition.",
    options: [
      { name: "UGC only", best: "New brand testing waters, small budget, willing to iterate scrappy", watch: "Quality control is the hardest thing to enforce" },
      { name: "UGC plus studio", best: "Growth stage brand, needs volume and range", watch: "Requires creative producer capacity" },
      { name: "Creator partnerships plus studio plus UGC", best: "Mature brand ready to build a real content engine", watch: "Coordination overhead, needs a strong creative lead" }
    ]
  },
  mistakes: {
    heading: "Seven short form mistakes we untangle constantly",
    items: [
      { title: "Repurposing TV or square social ads", desc: "The feed rejects them within two seconds." },
      { title: "Overproduced hero content", desc: "The polished spot is often the worst performer. Native beats slick." },
      { title: "Weak hooks", desc: "The first frame decides everything. Do not bury the hook." },
      { title: "No sound plan", desc: "80 percent of watchers hear the ad. Music and voice are half the message." },
      { title: "Testing too few concepts", desc: "Short form is a volume game. Five ads a month is not enough." },
      { title: "Ignoring saves and shares", desc: "The best long term indicators of a working ad." },
      { title: "Landing page mismatch", desc: "Casual ad to corporate page is a conversion killer." }
    ]
  },
  considerations: {
    heading: "Measurement in short form",
    body: "The platform level metrics tell part of the story. Blended is the truth.",
    items: [
      { title: "Blended MER is king", desc: "TikTok reported ROAS is not enough. Compare it to blended over 7 and 30 days." },
      { title: "Attribution windows matter", desc: "7 day click plus 1 day view is a fair starting point. Adjust by category." },
      { title: "Delayed conversions are real", desc: "Some categories see conversions days after the last click. Plan measurement windows accordingly." },
      { title: "Incrementality tests periodically", desc: "Geo splits or brand lift studies to make sure the spend is really moving the needle." }
    ]
  },
  fit: {
    good: [
      "Consumer products with visual appeal",
      "Brands willing to build a real creative operation",
      "Products with hooks a creator can naturally demonstrate",
      "B2B with founders willing to be on camera"
    ],
    notFor: [
      "Brands unwilling to iterate creative weekly",
      "Products with no visual story to tell",
      "Highly regulated categories with tight creative constraints (still possible, just harder)"
    ]
  },
  scenarios: [
    { role: "DTC beauty brand", body: "Ten creators producing weekly, in house studio for hero content, three test hooks per week, winners scaled to TikTok, Reels and Shorts simultaneously." },
    { role: "Consumer app", body: "UGC first, product demonstrated in real scenarios, hooks around specific problems, retargeting sequence built around app install to activation." },
    { role: "Founder led B2B", body: "Founder on camera weekly, three educational hooks a week, retargeting anyone who watches 50 percent with a specific offer." }
  ],
  faqs: [
    { q: "How much do we need to spend?", a: "For meaningful testing on TikTok, at least five thousand USD a month in media plus a real creative production budget." },
    { q: "Do you produce the ads?", a: "Yes. UGC network, in house studio and creator partnerships." },
    { q: "Can you run TikTok Shop?", a: "Yes, if your product fits and TikTok Shop is available in your market." },
    { q: "What about YouTube Shorts and Instagram Reels?", a: "Winning short form creative usually works across all three surfaces. We plan cross platform." },
    { q: "How fast do we see results?", a: "First signals in two to four weeks, scaled winners in six to twelve." },
    { q: "Do we need to be on camera as a founder?", a: "Not required, but often useful in B2B and challenger brands." }
  ],
  seo: {
    title: "TikTok and Short Form Ads, hook first creative that converts | Origami99",
    description: "TikTok, Instagram Reels and YouTube Shorts creative and media engineered for the feed, tested to profit inside seven day windows."
  }
};
const fullFunnel = {
  slug: "digital-marketing/full-funnel-digital-marketing",
  parent: "digital-marketing",
  icon: Megaphone,
  category: "Full Funnel",
  title: "Full funnel digital marketing",
  accent: "orchestrated against revenue.",
  lede: "Paid, organic, content, email, influencer and lifecycle working as one system, tied to a single revenue dashboard.",
  intro: {
    heading: "Channels are inputs. Revenue is the output. Most marketing teams optimise the inputs and lose sight of the output.",
    body: [
      "Google Ads, Meta, TikTok, SEO, content, email, influencer, lifecycle. Every one is a specialism. Most agencies sell you one and pretend the others do not exist. Which is why so many brands end up with five vendors, five dashboards, five conflicting reports and no clear picture of what is actually moving the business.",
      "Full funnel means one team, one strategy, one revenue dashboard. Channels are hired and fired against contribution to blended growth, not against their own vanity metrics."
    ]
  },
  whatItIs: {
    heading: "The shape of a proper full funnel program",
    body: [
      "Top of funnel that captures demand you have not yet earned, mid funnel that nurtures and educates, bottom of funnel that converts, and lifecycle that retains and expands. Each stage measured by the metric that matters at that stage, and stitched together by a single view of contribution to revenue."
    ]
  },
  architecture: {
    heading: "The four layers we build in every engagement",
    body: "Each layer has different channels, metrics and cadence.",
    layers: [
      { name: "Top of funnel", items: ["Meta and TikTok prospecting", "YouTube", "Content and SEO for awareness terms", "Influencer and PR"] },
      { name: "Mid funnel", items: ["Non brand search", "Retargeting", "Email for warm leads", "Case studies and demos"] },
      { name: "Bottom of funnel", items: ["Brand search", "Direct traffic optimisation", "Sales enablement", "Landing pages per offer"] },
      { name: "Lifecycle", items: ["Onboarding sequences", "Cross sell and upsell", "Winback and reactivation", "Loyalty and referral"] }
    ]
  },
  features: {
    heading: "What a real full funnel program includes",
    body: "The connective tissue that most agencies skip.",
    items: [
      { title: "Unified data model", desc: "Sessions, users, conversions and revenue in one place, tied together with server side tracking." },
      { title: "Blended reporting", desc: "MER, blended CAC, blended ROAS across all paid and organic. Platform ROAS relegated to a supporting metric." },
      { title: "Media mix framework", desc: "Budget allocated across channels based on incremental contribution, not platform reported ROAS." },
      { title: "Creative brief system", desc: "One brief system feeds paid, organic and lifecycle so the brand and story stay consistent." },
      { title: "CRO baseline", desc: "Landing pages, PDPs and checkout continuously tested and improved. Not a one off." },
      { title: "Lifecycle engine", desc: "Email and SMS flows tuned to specific customer states, not batch and blast." },
      { title: "Cross channel calendar", desc: "Every launch, promotion or announcement coordinated so paid, organic, email and influencer amplify each other." },
      { title: "Executive dashboard", desc: "One dashboard, the leadership team sees the same numbers as the marketers." }
    ]
  },
  approaches: {
    heading: "Three engagement models",
    body: "Pick the shape that matches how integrated you are ready to be.",
    options: [
      { name: "Fractional CMO plus execution", best: "Growth stage brands without a senior marketing leader in house", watch: "Only works if leadership is ready to trust one team with strategy" },
      { name: "Channel led with strategic overlay", best: "Brands with a marketing lead who wants execution across paid and lifecycle", watch: "Requires clear ownership of strategy internally" },
      { name: "Project by project", best: "Established teams needing specific execution support", watch: "Loses the integration benefit that makes full funnel worth it" }
    ]
  },
  mistakes: {
    heading: "The full funnel mistakes we help fix",
    items: [
      { title: "Fragmenting across vendors", desc: "Five agencies, five reports, no accountability for the number that matters." },
      { title: "Optimising per channel", desc: "Meta wins, Google loses, blended revenue flat. Nothing improved." },
      { title: "Ignoring lifecycle", desc: "The cheapest revenue in your business, treated as an afterthought." },
      { title: "No content muscle", desc: "Paid alone gets expensive fast. Organic and content compound the base." },
      { title: "Reporting theater", desc: "Colourful dashboards that no one uses to make decisions." },
      { title: "Not building brand", desc: "Every performance ad borrows against brand. Brand starves. Performance costs climb." }
    ]
  },
  considerations: {
    heading: "The organisational realities that determine success",
    body: "Full funnel does not work without the right internal setup.",
    items: [
      { title: "One decision maker on your side", desc: "Someone with authority to trade budget across channels weekly." },
      { title: "Real access to data", desc: "The revenue database, not just Shopify or Stripe reports." },
      { title: "A commitment to iteration", desc: "Nothing works out of the box. Compounding requires patience." },
      { title: "Creative capacity", desc: "Every serious full funnel program is a creative operation with a media budget." },
      { title: "Executive alignment", desc: "The leadership team must understand blended metrics, not platform ROAS." }
    ]
  },
  fit: {
    good: [
      "Growth stage brands ready to consolidate marketing under one team",
      "Multi channel businesses where paid and organic already exist but are siloed",
      "Executives who want a single number to hold marketing accountable to"
    ],
    notFor: [
      "Early stage brands not yet spending meaningful media",
      "Teams that want channel specific execution only",
      "Businesses without any conversion tracking infrastructure"
    ]
  },
  scenarios: [
    { role: "DTC brand at eight figures", body: "Meta, Google, TikTok, SEO, lifecycle and influencer under one strategy, one blended dashboard, weekly cross channel review." },
    { role: "B2B SaaS scaling to Series B", body: "Content and SEO for TOFU, paid nurture with LinkedIn and retargeting, sales enablement content and lifecycle for onboarding and expansion." },
    { role: "Regional consumer brand", body: "Local paid, regional SEO, influencer and event driven campaigns coordinated to local calendars per market." }
  ],
  faqs: [
    { q: "Can we start with just one channel?", a: "Yes. Many engagements start there and expand as trust is built and results compound." },
    { q: "How do you report on blended metrics?", a: "A live dashboard with MER, blended CAC, blended ROAS by cohort, and platform level breakdowns for diagnostics." },
    { q: "Do we need to give you access to our CRM and revenue data?", a: "Yes. Otherwise blended reporting is impossible and we would be guessing." },
    { q: "How long is a typical engagement?", a: "Ninety day foundation phase, then month to month with a quarterly strategic review." },
    { q: "What does staffing look like?", a: "A senior strategist, channel specialists and a creative operations lead, all senior." },
    { q: "How do you avoid becoming yet another vendor?", a: "By taking responsibility for the outcome number. If MER does not move, we do not stay." }
  ],
  seo: {
    title: "Full Funnel Digital Marketing, integrated growth teams | Origami99",
    description: "Paid, organic, content, email, influencer and lifecycle working as one system, tied to a single revenue dashboard. One senior team, one number."
  }
};
const video = {
  slug: "digital-marketing/video-editing-production",
  parent: "digital-marketing",
  icon: Video,
  category: "Video and Motion",
  title: "Video and motion production",
  accent: "engineered for retention.",
  lede: "Ads, brand films, product videos and motion graphics produced by an in house studio, briefed against performance.",
  intro: {
    heading: "Video is the highest leverage medium in marketing. It is also the easiest to spend money on badly.",
    body: [
      "A great video ad can generate seven figures of revenue. A bad one costs the same to produce. The difference is not budget. It is process. Every video we produce is briefed against a specific job (top of funnel hook, product demo, testimonial, retargeting angle, launch film) and measured against a specific metric.",
      "Creative directed by intent, not by aesthetic preference. That is what makes video pay for itself."
    ]
  },
  whatItIs: {
    heading: "The video work our studio actually does",
    body: [
      "Short form performance ads for Meta, TikTok, Reels and Shorts. Long form YouTube content. Brand films for launches and about pages. Product demos and explainers. Customer stories and case study videos. Motion graphics for social and product marketing. All produced with a shared brief system that connects every asset to a business outcome."
    ]
  },
  architecture: {
    heading: "How we run a production",
    body: "Six phases, each with a deliverable, each signed off before we move on.",
    layers: [
      { name: "Brief", items: ["What job the video does", "Audience and channel", "Success metric", "Creative direction"] },
      { name: "Concept", items: ["Two or three angles", "Storyboards", "Script or beat sheet"] },
      { name: "Pre production", items: ["Casting", "Locations", "Props and wardrobe", "Shot list"] },
      { name: "Production", items: ["Direction", "Cinematography", "Sound", "B roll"] },
      { name: "Post", items: ["Edit", "Colour", "Sound design", "Motion graphics", "Localised versions"] },
      { name: "Delivery", items: ["Aspect ratios per channel", "Caption files", "Master and archive", "Handover pack"] }
    ]
  },
  features: {
    heading: "What comes with every production",
    body: "The details that separate a good asset from an expensive one.",
    items: [
      { title: "Multi format delivery", desc: "9:16, 1:1, 16:9, plus channel specific durations. One shoot, many assets." },
      { title: "Native captions", desc: "Burned in and SRT files. 80 percent of social video is watched muted." },
      { title: "Localisation ready", desc: "Voiceovers, subtitles and text overlays swappable per region." },
      { title: "Variation testing", desc: "Every hero ad shot with three hook variants for creative testing." },
      { title: "Sound design intentional", desc: "Original score or licensed music, sound effects and voice all mixed to spec." },
      { title: "Colour and grade discipline", desc: "Consistent look across your library, not a random palette per shoot." },
      { title: "Motion identity", desc: "Consistent transitions, lower thirds and animation across every video." },
      { title: "Archive and handover", desc: "All project files, raw footage and licences delivered to you at the end." }
    ]
  },
  approaches: {
    heading: "Three production models",
    body: "Match the model to the ambition.",
    options: [
      { name: "Weekly ads engine", best: "Performance driven brands needing constant creative refresh", watch: "Requires disciplined brief and rapid iteration" },
      { name: "Project based hero content", best: "Launches, brand films, campaign centrepieces", watch: "Longer timelines, higher unit cost" },
      { name: "Hybrid engine plus hero", best: "Mature brands wanting weekly ads plus quarterly hero content", watch: "Needs a senior creative lead to keep the two aligned" }
    ]
  },
  mistakes: {
    heading: "Six video mistakes that quietly waste budgets",
    items: [
      { title: "Skipping the brief", desc: "Producing video without a clear job wastes everything downstream." },
      { title: "Overshooting", desc: "Endless coverage produces mediocre edits. Shoot to the storyboard." },
      { title: "Ignoring the platform", desc: "A TV ad on TikTok is a scroll. Native format matters." },
      { title: "Weak first three seconds", desc: "The hook is 80 percent of the outcome. Design it deliberately." },
      { title: "One version per shoot", desc: "You should leave every shoot with three to five distinct variants." },
      { title: "No measurement plan", desc: "Video that is not measured is not learned from." }
    ]
  },
  considerations: {
    heading: "The realities most teams underestimate",
    body: "Great video is a system, not a shoot.",
    items: [
      { title: "Creative direction is a discipline", desc: "The best videos have one voice, not a committee's compromise." },
      { title: "Consistency beats one hero", desc: "A steady library outperforms a single expensive spot for most brands." },
      { title: "Editing is where the ad wins", desc: "A great cut can save mediocre footage. A bad cut cannot save great footage." },
      { title: "Music and pace are half the ad", desc: "Sound design decisions are as important as visuals." },
      { title: "Casting matters more than budget", desc: "The right face and voice beats the biggest lighting kit." }
    ]
  },
  fit: {
    good: [
      "Brands running weekly paid social",
      "Businesses needing hero brand films for launches",
      "Ecommerce needing consistent product and demo video",
      "SaaS with product demos, explainers and customer stories"
    ],
    notFor: [
      "Teams unwilling to brief creative properly",
      "Projects seeking cheap templated stock video (better handled by internal or freelance)",
      "One off unrelated to any broader marketing strategy"
    ]
  },
  scenarios: [
    { role: "Weekly ad engine for a DTC brand", body: "Studio produces 20 to 40 assets per month across UGC style, hero and motion, iterating against paid social performance." },
    { role: "Launch film for a SaaS product", body: "Brand film, product demo, three vertical cut downs, plus a series of feature explainers, all shipped for a launch week." },
    { role: "Customer story series", body: "Six customer stories filmed over a quarter, edited for LinkedIn, YouTube and sales enablement." }
  ],
  faqs: [
    { q: "Do you handle everything from script to delivery?", a: "Yes. Brief, concept, script, production, edit, motion, colour, sound, delivery." },
    { q: "Can you shoot internationally?", a: "Yes, with local partners in most major markets, or by flying our team." },
    { q: "How fast can you turn around ads?", a: "Weekly ad engines produce first cuts within days of shoot. Hero content follows a longer cycle." },
    { q: "Do you provide UGC style creators?", a: "Yes, both dedicated UGC creators and larger creator partnerships." },
    { q: "Who owns the footage and files?", a: "You do. All rushes, project files, licences and cleared music transferred at delivery." },
    { q: "Can you work with our existing brand guidelines?", a: "Yes. We adapt to what exists or extend it into motion, whichever the brand needs." }
  ],
  seo: {
    title: "Video Editing and Production, ads and brand films that convert | Origami99",
    description: "Performance ads, brand films, product videos and motion graphics produced by an in house studio, briefed against retention and revenue."
  }
};
const SUB_SERVICES = [
  customSoftware,
  saas,
  mobile,
  uiux,
  erp,
  customWeb,
  shopify,
  wordpress,
  webflowFramer,
  wix,
  googleAds,
  metaAds,
  tiktokAds,
  fullFunnel,
  video
];
function getSubServicesFor(parent) {
  return SUB_SERVICES.filter((s) => s.parent === parent);
}
const BASE_URL = "https://ai-spark-engine-11.lovable.app";
const Route$x = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/guides/ai-for-small-business", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/services/seo", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/software", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/web-development", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/digital-marketing", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/brand-identity", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/privacy", changefreq: "monthly", priority: "0.3", lastmod: today },
          { path: "/cookies", changefreq: "monthly", priority: "0.3", lastmod: today },
          ...SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: today
          })),
          ...SUB_SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly",
            priority: "0.75",
            lastmod: today
          })),
          ...BLOG_SEED.filter((b) => b.status === "published").map((b) => ({
            path: `/blog/${b.slug}`,
            changefreq: "monthly",
            priority: "0.6",
            lastmod: (b.publishedAt ?? today).slice(0, 10)
          }))
        ];
        const seen = /* @__PURE__ */ new Set();
        const unique = entries.filter((e) => seen.has(e.path) ? false : (seen.add(e.path), true));
        const urls = unique.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$w = () => import("./admin.index-DaMEekoS.mjs");
const Route$w = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./admin.blogs-DsOLZ-OL.mjs");
const Route$v = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./admin.leads-CYOEFnel.mjs");
const Route$u = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./admin.pages-C2H9_fB1.mjs");
const Route$t = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./admin.portfolio-EEHm8xjC.mjs");
const Route$s = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./admin.services-Bwfe75Tn.mjs");
const Route$r = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./admin.users-DIynhufR.mjs");
const Route$q = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./blog._slug-Ohu_nJCD.mjs");
const $$splitErrorComponentImporter$1 = () => import("./blog._slug-eRKLk7vw.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./blog._slug-ChpPopdi.mjs");
const SITE_URL$3 = "https://ai-spark-engine-11.lovable.app";
function humanize(slug) {
  return slug.split(/[-_]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
const Route$p = createFileRoute()({
  head: ({
    params
  }) => {
    const seed = BLOG_SEED.find((p) => p.slug === params.slug);
    const title2 = seed ? `${seed.title}, Origami99 Blog` : `${humanize(params.slug)}, Origami99 Blog`;
    const description2 = (seed?.excerpt ?? `Read "${humanize(params.slug)}" on the Origami99 blog, insights on AI, growth, design and engineering from a senior team shipping production software.`).slice(0, 158);
    const url2 = `${SITE_URL$3}/blog/${params.slug}`;
    const cover = BLOG_COVERS[params.slug];
    const image = cover ? `${SITE_URL$3}${cover}` : void 0;
    const published = seed?.publishedAt;
    const meta = [{
      title: title2
    }, {
      name: "description",
      content: description2
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:title",
      content: title2
    }, {
      property: "og:description",
      content: description2
    }, {
      property: "og:url",
      content: url2
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: title2
    }, {
      name: "twitter:description",
      content: description2
    }];
    if (image) {
      meta.push({
        property: "og:image",
        content: image
      });
      meta.push({
        name: "twitter:image",
        content: image
      });
    }
    if (published) {
      meta.push({
        property: "article:published_time",
        content: published
      });
      meta.push({
        property: "article:author",
        content: seed?.author ?? "Origami 99"
      });
    }
    const wordCount = seed ? seed.body.split(/\s+/).filter(Boolean).length : void 0;
    const article = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: seed?.title ?? humanize(params.slug),
      description: description2,
      url: url2,
      image: image ? [image] : void 0,
      datePublished: published,
      dateModified: seed?.updatedAt ?? published,
      wordCount,
      articleSection: seed?.category,
      keywords: seed?.tags,
      author: {
        "@type": "Organization",
        name: seed?.author ?? "Origami 99"
      },
      publisher: {
        "@type": "Organization",
        name: "Origami 99",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL$3}/__l5e/assets-v1/2762a917-4f05-40ca-a4bf-c42d6a117bf9/origami99-favicon.png`
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url2
      }
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL$3}/`
      }, {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL$3}/blog`
      }, {
        "@type": "ListItem",
        position: 3,
        name: seed?.title ?? humanize(params.slug),
        item: url2
      }]
    };
    return {
      meta,
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(article)
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./guides.ai-for-small-business-CNmr46cR.mjs");
const SITE_URL$2 = "https://ai-spark-engine-11.lovable.app";
const Route$o = createFileRoute()({
  head: () => ({
    meta: [{
      title: "AI Marketing for Small Businesses · The 2026 Guide by Origami99"
    }, {
      name: "description",
      content: "What a modern digital marketing agency actually does for small businesses in 2026. How AI-powered SEO, ads, content and automation cut cost per lead and compound revenue. A practical guide from Origami99."
    }, {
      property: "og:title",
      content: "AI Marketing for Small Businesses · The 2026 Guide"
    }, {
      property: "og:description",
      content: "How AI-driven marketing helps small businesses scale. Real workflows, real numbers, no fluff."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `${SITE_URL$2}/guides/ai-for-small-business`
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AI Marketing for Small Businesses · The 2026 Guide"
    }, {
      name: "twitter:description",
      content: "How AI-driven marketing helps small businesses scale. Real workflows, real numbers, no fluff."
    }, {
      name: "keywords",
      content: "digital marketing for small businesses, ai marketing agency, what does a digital marketing agency do, small business seo, ai marketing 2026"
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL$2}/guides/ai-for-small-business`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI Marketing for Small Businesses · The 2026 Guide",
        description: "How AI-driven marketing helps small businesses scale in 2026, from a practitioner agency.",
        author: {
          "@type": "Organization",
          name: "Origami99"
        },
        publisher: {
          "@type": "Organization",
          name: "Origami99"
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-14",
        mainEntityOfPage: `${SITE_URL$2}/guides/ai-for-small-business`
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "What does a digital marketing agency do for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A modern agency runs the four levers that move revenue: SEO and local search, paid media, content and email, and the website itself. In 2026 the work is executed through AI-assisted workflows, so a small business gets senior-level output at a fraction of legacy agency cost."
          }
        }, {
          "@type": "Question",
          name: "How much does AI marketing cost for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical monthly retainers for AI-first agencies range from USD 1,500 to USD 6,000 depending on scope. Project-based site builds range from USD 4,000 to USD 25,000. Compare that to the USD 80,000 to USD 150,000 a year of a single in-house marketer."
          }
        }, {
          "@type": "Question",
          name: "How fast do results show up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paid media and Google Business Profile work usually show measurable lift inside 30 days. Organic SEO compounds from month three. AI automations that recover abandoned carts or re-engage cold leads often pay for the retainer in the first month."
          }
        }, {
          "@type": "Question",
          name: "Do I still need my own team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most small businesses under USD 10M revenue, no. A senior agency team plus AI workflows outperforms a junior in-house hire at lower cost. Once you cross USD 10M, blend the two."
          }
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./services._slug-DLYJgO8m.mjs");
const $$splitErrorComponentImporter = () => import("./services._slug-eRKLk7vw.mjs");
const $$splitNotFoundComponentImporter = () => import("./services._slug-0AmEC6CH.mjs");
const Route$n = createFileRoute()({
  beforeLoad: ({
    params
  }) => {
    const target = LEGACY_REDIRECTS[params.slug];
    if (target) throw redirect({
      to: "/services/$slug",
      params: {
        slug: target
      },
      replace: true
    });
  },
  head: ({
    params
  }) => {
    const s = getService(params.slug);
    const url2 = `https://ai-spark-engine-11.lovable.app/services/${params.slug}`;
    if (!s) return {
      meta: [{
        title: "Service, Origami99"
      }],
      links: [{
        rel: "canonical",
        href: url2
      }]
    };
    const desc = (s.hero || "").slice(0, 158);
    const title2 = `${s.title}, Origami99`.slice(0, 60);
    return {
      meta: [{
        title: title2
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title2
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: url2
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title2
      }, {
        name: "twitter:description",
        content: desc
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: desc,
          provider: {
            "@type": "Organization",
            name: "Origami99",
            url: "https://ai-spark-engine-11.lovable.app"
          },
          areaServed: ["PK", "SA", "AE", "CA", "US"],
          url: url2
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./services.brand-identity-Cze3FdCj.mjs");
const Route$m = createFileRoute()({
  head: () => {
    const url2 = "https://ai-spark-engine-11.lovable.app/services/brand-identity";
    const title2 = "Brand Identity Services, Origami99";
    const description2 = "Premium brand strategy, visual identity, messaging, launch assets and brand guidelines for ambitious companies.";
    return {
      meta: [{
        title: title2
      }, {
        name: "description",
        content: description2
      }, {
        property: "og:title",
        content: title2
      }, {
        property: "og:description",
        content: description2
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: url2
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Brand Identity Services",
          description: description2,
          provider: {
            "@type": "Organization",
            name: "Origami99",
            url: "https://ai-spark-engine-11.lovable.app"
          },
          url: url2
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./services.digital-marketing-BFsOu0JM.mjs");
const Route$l = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const faqs = [{
  q: "How long until I see SEO results?",
  a: "Most clients see meaningful keyword movement within 60 to 90 days and material traffic and lead growth between months 4 and 6. SEO compounds, month 12 typically delivers 3 to 5 times the traffic of month 4."
}, {
  q: "Do you guarantee #1 rankings?",
  a: "No serious SEO agency does because Google does not allow guarantees. We do guarantee transparent reporting, senior execution, and measurable progress against the KPIs we set together."
}, {
  q: "What is included in the monthly retainer?",
  a: "Technical SEO, on page optimization, content production, link acquisition, conversion tracking, dashboards, monthly reviews and dedicated support. Scope is tailored per client."
}, {
  q: "Will you work with my internal team?",
  a: "Absolutely. We frequently embed with internal marketing, content and dev teams, providing strategy, specialist execution and review capacity without replacing your team."
}, {
  q: "Do you handle content writing?",
  a: "Yes. We have internal editors and subject matter writers. Every piece is briefed for intent, fact checked, optimized and reviewed before publishing."
}, {
  q: "What industries do you specialize in?",
  a: "SaaS, B2B services, ecommerce, healthcare, real estate, fintech and enterprise. We are industry agnostic on execution, strategy is tailored per vertical."
}, {
  q: "Can I cancel anytime?",
  a: "Yes. Retainers are monthly after the initial three month strategy and foundation phase. We earn the relationship every month."
}];
const $$splitComponentImporter$k = () => import("./services.seo-BTKEEOL1.mjs");
const Route$k = createFileRoute()({
  head: () => {
    const url2 = "https://ai-spark-engine-11.lovable.app/services/seo";
    const title2 = "SEO Services, Origami99";
    const description2 = "Technical SEO, content, authority building, local search and ecommerce SEO. Rank higher, generate qualified leads and grow revenue with Origami99.";
    return {
      meta: [{
        title: title2
      }, {
        name: "description",
        content: description2
      }, {
        property: "og:title",
        content: title2
      }, {
        property: "og:description",
        content: description2
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: url2
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title2
      }, {
        name: "twitter:description",
        content: description2
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SEO Services",
          description: description2,
          provider: {
            "@type": "Organization",
            name: "Origami99",
            url: "https://ai-spark-engine-11.lovable.app"
          },
          areaServed: ["PK", "SA", "AE", "CA", "US"],
          url: url2
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a
            }
          }))
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./services.software-BFsOu0JM.mjs");
const Route$j = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./services.web-development-BFsOu0JM.mjs");
const Route$i = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const service$2 = getService("digital-marketing");
const $$splitComponentImporter$h = () => import("./services.digital-marketing.index-C9FZKGGm.mjs");
const Route$h = createFileRoute()({
  head: () => ({
    meta: [{
      title: `${service$2.title} | Origami 99`
    }, {
      name: "description",
      content: service$2.tagline
    }, {
      property: "og:title",
      content: `${service$2.title} | Origami 99`
    }, {
      property: "og:description",
      content: service$2.tagline
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./services.digital-marketing.full-funnel-digital-marketing-BGnuU7lj.mjs");
const url$e = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/full-funnel-digital-marketing";
const title$e = "Full Funnel Digital Marketing, Origami99";
const description$e = "One plan across every channel, budget allocated by stage of business and measured without kidding yourself.";
const Route$g = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$e
    }, {
      name: "description",
      content: description$e
    }, {
      property: "og:title",
      content: title$e
    }, {
      property: "og:description",
      content: description$e
    }, {
      property: "og:url",
      content: url$e
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$e
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$e,
        description: description$e,
        url: url$e
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./services.digital-marketing.google-ads-drTbsbNv.mjs");
const url$d = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/google-ads";
const title$d = "Google Ads Management, Origami99";
const description$d = "Search, Performance Max and conversion tracking done by a team that treats Google Ads as intent, offer and data.";
const Route$f = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$d
    }, {
      name: "description",
      content: description$d
    }, {
      property: "og:title",
      content: title$d
    }, {
      property: "og:description",
      content: description$d
    }, {
      property: "og:url",
      content: url$d
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$d
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$d,
        description: description$d,
        url: url$d
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./services.digital-marketing.meta-ads-C3KhVAWI.mjs");
const url$c = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/meta-ads";
const title$c = "Meta Ads Management, Origami99";
const description$c = "Facebook and Instagram ads run as a creative testing machine, with proper Conversions API tracking underneath.";
const Route$e = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$c
    }, {
      name: "description",
      content: description$c
    }, {
      property: "og:title",
      content: title$c
    }, {
      property: "og:description",
      content: description$c
    }, {
      property: "og:url",
      content: url$c
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$c
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$c,
        description: description$c,
        url: url$c
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./services.digital-marketing.tiktok-short-form-ads-C-MlcOW5.mjs");
const url$b = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/tiktok-short-form-ads";
const title$b = "TikTok and Short Form Ads, Origami99";
const description$b = "TikTok, Reels and Shorts as a retention game, briefed and shot for the first three seconds.";
const Route$d = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$b
    }, {
      name: "description",
      content: description$b
    }, {
      property: "og:title",
      content: title$b
    }, {
      property: "og:description",
      content: description$b
    }, {
      property: "og:url",
      content: url$b
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$b
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$b,
        description: description$b,
        url: url$b
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./services.digital-marketing.video-editing-production-DGtcx3lM.mjs");
const url$a = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/video-editing-production";
const title$a = "Video Editing and Production, Origami99";
const description$a = "Ads, brand films, tutorials and short form, shot and edited by a team that thinks in retention curves.";
const Route$c = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$a
    }, {
      name: "description",
      content: description$a
    }, {
      property: "og:title",
      content: title$a
    }, {
      property: "og:description",
      content: description$a
    }, {
      property: "og:url",
      content: url$a
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$a
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$a,
        description: description$a,
        url: url$a
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const service$1 = getService("software");
const $$splitComponentImporter$b = () => import("./services.software.index-BJ0P3x7b.mjs");
const SITE_URL$1 = "https://ai-spark-engine-11.lovable.app";
const PAGE_URL$1 = `${SITE_URL$1}/services/software`;
const Route$b = createFileRoute()({
  head: () => ({
    meta: [{
      title: `${service$1.title} | Origami 99`
    }, {
      name: "description",
      content: service$1.tagline
    }, {
      property: "og:title",
      content: `${service$1.title} | Origami 99`
    }, {
      property: "og:description",
      content: service$1.tagline
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: PAGE_URL$1
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: `${service$1.title} | Origami 99`
    }, {
      name: "twitter:description",
      content: service$1.tagline
    }],
    links: [{
      rel: "canonical",
      href: PAGE_URL$1
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service$1.title,
        description: service$1.tagline,
        url: PAGE_URL$1,
        provider: {
          "@type": "Organization",
          name: "Origami99",
          url: SITE_URL$1
        },
        areaServed: ["PK", "SA", "AE", "CA", "US"],
        serviceType: "Custom software, SaaS, mobile apps and ERP engineering"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (service$1.faqs ?? []).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./services.software.custom-saas-products-CETXgLyQ.mjs");
const url$9 = "https://ai-spark-engine-11.lovable.app/services/software/custom-saas-products";
const title$9 = "Custom SaaS Product Development, Origami99";
const description$9 = "Multi tenant SaaS products with billing, trials, seats, permissions and admin from day one.";
const Route$a = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$9
    }, {
      name: "description",
      content: description$9
    }, {
      property: "og:title",
      content: title$9
    }, {
      property: "og:description",
      content: description$9
    }, {
      property: "og:url",
      content: url$9
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$9
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$9,
        description: description$9,
        url: url$9
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./services.software.custom-software-development-DKuf8NIt.mjs");
const url$8 = "https://ai-spark-engine-11.lovable.app/services/software/custom-software-development";
const title$8 = "Custom Software Development, Origami99";
const description$8 = "Bespoke web platforms, internal tools and back office systems engineered around the way your team actually works.";
const Route$9 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$8
    }, {
      name: "description",
      content: description$8
    }, {
      property: "og:title",
      content: title$8
    }, {
      property: "og:description",
      content: description$8
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: url$8
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$8
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$8,
        description: description$8,
        provider: {
          "@type": "Organization",
          name: "Origami99"
        },
        url: url$8
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.software.erp-development-CUw-O9c9.mjs");
const url$7 = "https://ai-spark-engine-11.lovable.app/services/software/erp-development";
const title$7 = "ERP Development, Origami99";
const description$7 = "Custom ERP built around your operations, with finance, inventory, sales and HR on one shared ledger.";
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$7
    }, {
      name: "description",
      content: description$7
    }, {
      property: "og:title",
      content: title$7
    }, {
      property: "og:description",
      content: description$7
    }, {
      property: "og:url",
      content: url$7
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$7
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$7,
        description: description$7,
        url: url$7
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services.software.mobile-app-development-CtU4l2JZ.mjs");
const url$6 = "https://ai-spark-engine-11.lovable.app/services/software/mobile-app-development";
const title$6 = "Mobile App Development, Origami99";
const description$6 = "iOS and Android apps built for day thirty retention, not launch day metrics.";
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$6
    }, {
      name: "description",
      content: description$6
    }, {
      property: "og:title",
      content: title$6
    }, {
      property: "og:description",
      content: description$6
    }, {
      property: "og:url",
      content: url$6
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$6
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$6,
        description: description$6,
        url: url$6
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services.software.ui-ux-design-DhbV6j8v.mjs");
const url$5 = "https://ai-spark-engine-11.lovable.app/services/software/ui-ux-design";
const title$5 = "UI and UX Design, Origami99";
const description$5 = "Product design that removes friction, ships in code, and is measured against real metrics.";
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$5
    }, {
      name: "description",
      content: description$5
    }, {
      property: "og:title",
      content: title$5
    }, {
      property: "og:description",
      content: description$5
    }, {
      property: "og:url",
      content: url$5
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$5
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$5,
        description: description$5,
        url: url$5
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const service = getService("web-development");
const $$splitComponentImporter$5 = () => import("./services.web-development.index-DsDWc3rk.mjs");
const SITE_URL = "https://ai-spark-engine-11.lovable.app";
const PAGE_URL = `${SITE_URL}/services/web-development`;
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: `${service.title} | Origami 99`
    }, {
      name: "description",
      content: service.tagline
    }, {
      property: "og:title",
      content: `${service.title} | Origami 99`
    }, {
      property: "og:description",
      content: service.tagline
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: PAGE_URL
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: `${service.title} | Origami 99`
    }, {
      name: "twitter:description",
      content: service.tagline
    }],
    links: [{
      rel: "canonical",
      href: PAGE_URL
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.tagline,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          name: "Origami99",
          url: SITE_URL
        },
        areaServed: ["PK", "SA", "AE", "CA", "US"],
        serviceType: "Custom web, Shopify, WordPress, Webflow, Framer, Wix and AI assisted website development"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (service.faqs ?? []).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.web-development.custom-web-development-CotFXOhp.mjs");
const url$4 = "https://ai-spark-engine-11.lovable.app/services/web-development/custom-web-development";
const title$4 = "Custom Web Development, Origami99";
const description$4 = "Hand coded websites tuned for Core Web Vitals, wired to a headless CMS your team can actually run.";
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$4
    }, {
      name: "description",
      content: description$4
    }, {
      property: "og:title",
      content: title$4
    }, {
      property: "og:description",
      content: description$4
    }, {
      property: "og:url",
      content: url$4
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$4
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$4,
        description: description$4,
        url: url$4
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.web-development.shopify-ecommerce-Cd_elBQT.mjs");
const url$3 = "https://ai-spark-engine-11.lovable.app/services/web-development/shopify-ecommerce";
const title$3 = "Shopify and Ecommerce Development, Origami99";
const description$3 = "Shopify stores built for purchase intent, from PDP anatomy through checkout to app stack discipline.";
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$3
    }, {
      name: "description",
      content: description$3
    }, {
      property: "og:title",
      content: title$3
    }, {
      property: "og:description",
      content: description$3
    }, {
      property: "og:url",
      content: url$3
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$3
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$3,
        description: description$3,
        url: url$3
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./services.web-development.webflow-framer-DIRb_WE9.mjs");
const url$2 = "https://ai-spark-engine-11.lovable.app/services/web-development/webflow-framer";
const title$2 = "Webflow and Framer Development, Origami99";
const description$2 = "Marketing sites on Webflow and Framer that your team can move without engineering.";
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$2
    }, {
      name: "description",
      content: description$2
    }, {
      property: "og:title",
      content: title$2
    }, {
      property: "og:description",
      content: description$2
    }, {
      property: "og:url",
      content: url$2
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$2
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$2,
        description: description$2,
        url: url$2
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.web-development.wix-no-code-4poP4asf.mjs");
const url$1 = "https://ai-spark-engine-11.lovable.app/services/web-development/wix-no-code";
const title$1 = "Wix and No Code Development, Origami99";
const description$1 = "The fastest route from idea to live URL, without giving up on brand or measurement.";
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: title$1
    }, {
      name: "description",
      content: description$1
    }, {
      property: "og:title",
      content: title$1
    }, {
      property: "og:description",
      content: description$1
    }, {
      property: "og:url",
      content: url$1
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url$1
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title$1,
        description: description$1,
        url: url$1
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./services.web-development.wordpress-development-BvlOKFuC.mjs");
const url = "https://ai-spark-engine-11.lovable.app/services/web-development/wordpress-development";
const title = "WordPress Development, Origami99";
const description = "Fast, secure, block editor first WordPress sites your marketing team owns.";
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title
    }, {
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:url",
      content: url
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: url
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description,
        url
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$C.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$D
});
const AdminRoute = Route$B.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$D
});
const BlogRoute = Route$A.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$D
});
const CookiesRoute = Route$z.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$D
});
const PrivacyRoute = Route$y.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$D
});
const SitemapDotxmlRoute = Route$x.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$D
});
const AdminIndexRoute = Route$w.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const AdminBlogsRoute = Route$v.update({
  id: "/blogs",
  path: "/blogs",
  getParentRoute: () => AdminRoute
});
const AdminLeadsRoute = Route$u.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => AdminRoute
});
const AdminPagesRoute = Route$t.update({
  id: "/pages",
  path: "/pages",
  getParentRoute: () => AdminRoute
});
const AdminPortfolioRoute = Route$s.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => AdminRoute
});
const AdminServicesRoute = Route$r.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => AdminRoute
});
const AdminUsersRoute = Route$q.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AdminRoute
});
const BlogSlugRoute = Route$p.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const GuidesAiForSmallBusinessRoute = Route$o.update({
  id: "/guides/ai-for-small-business",
  path: "/guides/ai-for-small-business",
  getParentRoute: () => Route$D
});
const ServicesSlugRoute = Route$n.update({
  id: "/services/$slug",
  path: "/services/$slug",
  getParentRoute: () => Route$D
});
const ServicesBrandIdentityRoute = Route$m.update({
  id: "/services/brand-identity",
  path: "/services/brand-identity",
  getParentRoute: () => Route$D
});
const ServicesDigitalMarketingRoute = Route$l.update({
  id: "/services/digital-marketing",
  path: "/services/digital-marketing",
  getParentRoute: () => Route$D
});
const ServicesSeoRoute = Route$k.update({
  id: "/services/seo",
  path: "/services/seo",
  getParentRoute: () => Route$D
});
const ServicesSoftwareRoute = Route$j.update({
  id: "/services/software",
  path: "/services/software",
  getParentRoute: () => Route$D
});
const ServicesWebDevelopmentRoute = Route$i.update({
  id: "/services/web-development",
  path: "/services/web-development",
  getParentRoute: () => Route$D
});
const ServicesDigitalMarketingIndexRoute = Route$h.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesDigitalMarketingFullFunnelDigitalMarketingRoute = Route$g.update({
  id: "/full-funnel-digital-marketing",
  path: "/full-funnel-digital-marketing",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesDigitalMarketingGoogleAdsRoute = Route$f.update({
  id: "/google-ads",
  path: "/google-ads",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesDigitalMarketingMetaAdsRoute = Route$e.update({
  id: "/meta-ads",
  path: "/meta-ads",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesDigitalMarketingTiktokShortFormAdsRoute = Route$d.update({
  id: "/tiktok-short-form-ads",
  path: "/tiktok-short-form-ads",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesDigitalMarketingVideoEditingProductionRoute = Route$c.update({
  id: "/video-editing-production",
  path: "/video-editing-production",
  getParentRoute: () => ServicesDigitalMarketingRoute
});
const ServicesSoftwareIndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesSoftwareCustomSaasProductsRoute = Route$a.update({
  id: "/custom-saas-products",
  path: "/custom-saas-products",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesSoftwareCustomSoftwareDevelopmentRoute = Route$9.update({
  id: "/custom-software-development",
  path: "/custom-software-development",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesSoftwareErpDevelopmentRoute = Route$8.update({
  id: "/erp-development",
  path: "/erp-development",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesSoftwareMobileAppDevelopmentRoute = Route$7.update({
  id: "/mobile-app-development",
  path: "/mobile-app-development",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesSoftwareUiUxDesignRoute = Route$6.update({
  id: "/ui-ux-design",
  path: "/ui-ux-design",
  getParentRoute: () => ServicesSoftwareRoute
});
const ServicesWebDevelopmentIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const ServicesWebDevelopmentCustomWebDevelopmentRoute = Route$4.update({
  id: "/custom-web-development",
  path: "/custom-web-development",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const ServicesWebDevelopmentShopifyEcommerceRoute = Route$3.update({
  id: "/shopify-ecommerce",
  path: "/shopify-ecommerce",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const ServicesWebDevelopmentWebflowFramerRoute = Route$2.update({
  id: "/webflow-framer",
  path: "/webflow-framer",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const ServicesWebDevelopmentWixNoCodeRoute = Route$1.update({
  id: "/wix-no-code",
  path: "/wix-no-code",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const ServicesWebDevelopmentWordpressDevelopmentRoute = Route.update({
  id: "/wordpress-development",
  path: "/wordpress-development",
  getParentRoute: () => ServicesWebDevelopmentRoute
});
const AdminRouteChildren = {
  AdminBlogsRoute,
  AdminLeadsRoute,
  AdminPagesRoute,
  AdminPortfolioRoute,
  AdminServicesRoute,
  AdminUsersRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const ServicesDigitalMarketingRouteChildren = {
  ServicesDigitalMarketingFullFunnelDigitalMarketingRoute,
  ServicesDigitalMarketingGoogleAdsRoute,
  ServicesDigitalMarketingMetaAdsRoute,
  ServicesDigitalMarketingTiktokShortFormAdsRoute,
  ServicesDigitalMarketingVideoEditingProductionRoute,
  ServicesDigitalMarketingIndexRoute
};
const ServicesDigitalMarketingRouteWithChildren = ServicesDigitalMarketingRoute._addFileChildren(
  ServicesDigitalMarketingRouteChildren
);
const ServicesSoftwareRouteChildren = {
  ServicesSoftwareCustomSaasProductsRoute,
  ServicesSoftwareCustomSoftwareDevelopmentRoute,
  ServicesSoftwareErpDevelopmentRoute,
  ServicesSoftwareMobileAppDevelopmentRoute,
  ServicesSoftwareUiUxDesignRoute,
  ServicesSoftwareIndexRoute
};
const ServicesSoftwareRouteWithChildren = ServicesSoftwareRoute._addFileChildren(ServicesSoftwareRouteChildren);
const ServicesWebDevelopmentRouteChildren = {
  ServicesWebDevelopmentCustomWebDevelopmentRoute,
  ServicesWebDevelopmentShopifyEcommerceRoute,
  ServicesWebDevelopmentWebflowFramerRoute,
  ServicesWebDevelopmentWixNoCodeRoute,
  ServicesWebDevelopmentWordpressDevelopmentRoute,
  ServicesWebDevelopmentIndexRoute
};
const ServicesWebDevelopmentRouteWithChildren = ServicesWebDevelopmentRoute._addFileChildren(
  ServicesWebDevelopmentRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  BlogRoute: BlogRouteWithChildren,
  CookiesRoute,
  PrivacyRoute,
  SitemapDotxmlRoute,
  GuidesAiForSmallBusinessRoute,
  ServicesSlugRoute,
  ServicesBrandIdentityRoute,
  ServicesDigitalMarketingRoute: ServicesDigitalMarketingRouteWithChildren,
  ServicesSeoRoute,
  ServicesSoftwareRoute: ServicesSoftwareRouteWithChildren,
  ServicesWebDevelopmentRoute: ServicesWebDevelopmentRouteWithChildren
};
const routeTree = Route$D._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BLOG_SEED as B,
  Route$p as R,
  SERVICES as S,
  Route$n as a,
  getSubServicesFor as b,
  service$1 as c,
  service as d,
  blogSeed as e,
  faqs as f,
  getService as g,
  openPreferences as o,
  router as r,
  service$2 as s
};
