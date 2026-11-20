import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { l as leadsApi } from "./api-BO2MH7X_.mjs";
import { C as CodeXml, S as Smartphone, Y as ShoppingCart, h as Search, T as Target, M as Megaphone, a as Brain, P as Palette, _ as CircleQuestionMark, s as Phone, v as Mail, G as Globe, y as MapPin, x as CircleCheck, $ as LoaderCircle, a0 as Send } from "../_libs/lucide-react.mjs";
const locations = [
  { country: "Pakistan", city: "Islamabad", flag: "🇵🇰" },
  { country: "Saudi Arabia", city: "Kingdom of Saudi Arabia", flag: "🇸🇦" },
  { country: "Germany", city: "Berlin", flag: "🇩🇪" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦" },
  { country: "USA", city: "Austin, Texas", flag: "🇺🇸" }
];
const SERVICE_OPTIONS = [
  { value: "Custom Software", icon: CodeXml },
  { value: "Web / Mobile App", icon: Smartphone },
  { value: "E-commerce", icon: ShoppingCart },
  { value: "SEO & Content", icon: Search },
  { value: "Google Ads", icon: Target },
  { value: "Meta Ads", icon: Megaphone },
  { value: "AI Integration", icon: Brain },
  { value: "Brand & Design", icon: Palette },
  { value: "Not sure yet", icon: CircleQuestionMark }
];
const empty = { name: "", email: "", phone: "", company: "", service: SERVICE_OPTIONS[0].value, message: "" };
function Contact() {
  const [form, setForm] = reactExports.useState(empty);
  const [sent, setSent] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and a short message.");
      return;
    }
    setSubmitting(true);
    try {
      await leadsApi.create({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
        source: "Website /#contact",
        pageUrl: typeof window !== "undefined" ? window.location.href : null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null
      });
      setSent(true);
      setForm(empty);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-20 sm:py-24 lg:py-32 surface-cta text-foreground overflow-hidden noise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        animate: { rotate: 360 },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute -top-32 -right-32 w-96 h-96 bg-coral/20 diamond rounded-[5rem] blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " Two ways to start"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
          "Book a call, or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "send the brief." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-lg", children: "Tell us where you are stuck. We come back with a fixed price roadmap, timeline and exactly who on our team is on it, inside 24 hours. No decks, no pressure." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 sm:mt-10 space-y-3", children: [
          { i: Phone, l: "+92 315 5317998", h: "tel:+923155317998" },
          { i: Phone, l: "+92 337 7771527", h: "tel:+923377771527" },
          { i: Mail, l: "engage@origami99.com", h: "mailto:engage@origami99.com" }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.h, className: "flex items-center gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl surface-cta-card flex items-center justify-center group-hover:bg-coral group-hover:border-coral group-hover:text-primary-foreground transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.i, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: c.l })
        ] }, c.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-coral" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Global Presence" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: locations.map((loc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              className: "flex items-center gap-3 surface-cta-card rounded-2xl px-3 py-2.5 hover:border-coral/40 hover:shadow-glow transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", children: loc.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate", children: loc.country }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0" }),
                    " ",
                    loc.city
                  ] })
                ] })
              ]
            },
            loc.country
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.form,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          onSubmit,
          className: "surface-cta-card rounded-3xl p-6 sm:p-8 shadow-glow",
          children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-coral mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "Thanks, we're on it." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A strategist will reach out within 24 hours with your custom plan." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSent(false),
                className: "mt-6 text-sm text-coral underline-offset-4 hover:underline",
                children: "Send another message"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-6", children: "Start your project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true, value: form.name, onChange: (v) => setForm({ ...form, name: v }), placeholder: "Jane Doe" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, value: form.email, onChange: (v) => setForm({ ...form, email: v }), placeholder: "you@company.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", value: form.phone, onChange: (v) => setForm({ ...form, phone: v }), placeholder: "+1 555 0100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", value: form.company, onChange: (v) => setForm({ ...form, company: v }), placeholder: "Acme Inc." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "service-label", className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "What can we help with?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    role: "radiogroup",
                    "aria-labelledby": "service-label",
                    className: "mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2",
                    children: SERVICE_OPTIONS.map((opt) => {
                      const active = form.service === opt.value;
                      const Icon = opt.icon;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          role: "radio",
                          "aria-checked": active,
                          onClick: () => setForm({ ...form, service: opt.value }),
                          className: `group relative flex items-center gap-2 p-3 rounded-xl border text-left text-sm font-semibold transition-all ${active ? "bg-coral/20 border-coral text-foreground shadow-glow scale-[1.02]" : "bg-background/40 border-border text-foreground/85 hover:border-coral/50 hover:bg-card/80"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${active ? "bg-coral-grad text-primary-foreground" : "bg-card text-coral"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight", children: opt.value }),
                            active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                layoutId: "svc-check",
                                className: "absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-coral text-primary-foreground flex items-center justify-center",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" })
                              }
                            )
                          ]
                        },
                        opt.value
                      );
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Tell us about your project *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 4,
                  required: true,
                  value: form.message,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  placeholder: "What are you trying to build or grow?",
                  className: "mt-2 w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral resize-none"
                }
              )
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-coral bg-coral/10 border border-coral/30 rounded-lg px-3 py-2", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: submitting,
                className: "mt-6 w-full inline-flex items-center justify-center gap-2 bg-coral-grad px-6 py-4 rounded-full font-semibold shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100",
                children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                  " Sending…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  " Get My Free Quote"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground text-center", children: "We respect your privacy. No spam, ever." })
          ] })
        }
      )
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: name,
        name,
        type,
        required,
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "mt-2 w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral"
      }
    )
  ] });
}
export {
  Contact as C
};
