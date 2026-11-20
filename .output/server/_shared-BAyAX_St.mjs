import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./_ssr/Footer-BbcpjPO7.mjs";
import { C as Contact } from "./_ssr/Contact-CTgd-mc8.mjs";
import { A as ArrowRight } from "./_libs/lucide-react.mjs";
const base = "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base"
};
const variants = {
  primary: "bg-coral-grad text-white shadow-glow hover:scale-[1.04] active:scale-[0.98] hover:shadow-[0_20px_50px_-10px_color-mix(in_oklab,var(--coral)_60%,transparent)]",
  secondary: "bg-card/80 backdrop-blur border border-border text-foreground hover:border-coral/50 hover:text-coral hover:bg-card",
  ghost: "border border-border/60 text-foreground hover:bg-foreground/5 hover:border-coral/40"
};
const CtaButton = reactExports.forwardRef(function CtaButton2(props, ref) {
  const {
    variant = "primary",
    size = "lg",
    className = "",
    children,
    arrow = true
  } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
    arrow && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" })
  ] });
  if (props.as === "route") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: props.to,
        params: props.params,
        className: cls,
        ref,
        children: inner
      }
    );
  }
  if (props.as === "button") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: props.type ?? "button", onClick: props.onClick, className: cls, ref, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: props.href, className: cls, ref, children: inner });
});
function PageShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Crumbs({ parentLabel, parentTo, current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-2 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: parentTo, className: "hover:text-foreground", children: parentLabel }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: current })
  ] });
}
function SectionTitle({ eyebrow, title, sub, align = "left" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight", children: title }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: sub })
  ] });
}
function Panel({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 sm:p-8 ${className}`, children });
}
function Chip({ children, tone = "muted" }) {
  const map = {
    muted: "bg-muted text-foreground/70",
    primary: "bg-primary/10 text-primary",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${map[tone]}`, children });
}
function Faq({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40", children: items.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group px-5 py-4 sm:px-6 sm:py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer items-start justify-between gap-4 text-left text-base sm:text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-muted-foreground transition group-open:rotate-45", children: "+" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed", children: f.a })
  ] }, i)) });
}
function Related({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold tracking-tight", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: it.to, className: "group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 hover:shadow-md transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: it.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.blurb })
    ] }, it.to)) })
  ] }) });
}
function ContextCta({ headline, sub, cta = "Book a working call" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 p-8 sm:p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight", children: headline }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: sub }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaButton, { as: "route", to: "/#contact", children: cta }) })
  ] }) }) });
}
function HeroWrap({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-section-grad", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children })
  ] });
}
export {
  Crumbs as C,
  Faq as F,
  HeroWrap as H,
  PageShell as P,
  Related as R,
  SectionTitle as S,
  Panel as a,
  Chip as b,
  ContextCta as c,
  CtaButton as d
};
