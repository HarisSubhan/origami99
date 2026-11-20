import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-BbcpjPO7.mjs";
import { o as openPreferences } from "./router-B0GDL2eA.mjs";
import { j as Cookie, k as Settings2 } from "../_libs/lucide-react.mjs";
import "../_libs/motion.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const UPDATED = "July 7, 2026";
function CookiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-28 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "h-4 w-4" }),
        " Legal"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl sm:text-5xl font-bold leading-tight", children: "Cookie Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
        "Last updated: ",
        UPDATED,
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-card border border-border p-5 flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Manage your cookie choices" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Change what you allow at any time." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openPreferences, className: "inline-flex items-center gap-2 bg-coral-grad text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4" }),
          " Open preferences"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-10 text-foreground/85 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "What is a cookie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: "A cookie is a small text file a website stores on your browser to remember information about your visit. Similar technologies (localStorage, pixels, SDKs) work the same way and are covered by this policy." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The four categories we use" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-4", children: [{
            name: "Strictly necessary",
            when: "Always on",
            desc: "Required for the site to function: session, security, load balancing, and remembering your cookie choice itself. No consent needed under GDPR."
          }, {
            name: "Preferences",
            when: "Off by default",
            desc: "Remember your theme (dark/light), language and layout choices between visits."
          }, {
            name: "Analytics",
            when: "Off by default",
            desc: "Anonymised usage statistics (e.g. Google Analytics) so we can see what content works. Fires only after consent."
          }, {
            name: "Marketing",
            when: "Off by default",
            desc: "Attribution and retargeting pixels for ads we run (e.g. Meta, LinkedIn). Fires only after consent."
          }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: row.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase text-coral", children: row.when })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: row.desc })
          ] }, row.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Third-party cookies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: "If enabled, third parties may set their own cookies when their scripts load: Google Analytics, Google Ads, Meta Pixel, LinkedIn Insight Tag. Their processing is governed by their own policies." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "How to withdraw consent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3", children: [
            "Click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: openPreferences, className: "text-coral hover:underline font-semibold", children: "manage cookie preferences" }),
            " at any time, or clear the origami99-cookie-consent-v1 entry from your browser's local storage. Your choice is respected the next time the site loads."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Do Not Track and GPC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: "We honour the Global Privacy Control (GPC) signal as a valid opt-out under CCPA/CPRA. If your browser sends GPC, we treat you as opted out of sale or sharing." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CookiesPage as component
};
