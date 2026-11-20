import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, H as HeroWrap, C as Crumbs, S as SectionTitle, a as Panel, F as Faq, c as ContextCta, R as Related } from "../_shared-BAyAX_St.mjs";
import { B as Boxes, m as DollarSign, z as Package, Y as ShoppingCart, aC as Truck, aD as UsersRound, ap as Building2 } from "../_libs/lucide-react.mjs";
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
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HeroWrap, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crumbs, { parentLabel: "Software Development", parentTo: "/services/software", current: "ERP Development" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Boxes, { className: "h-3.5 w-3.5" }),
          " ERP"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "One system of record.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "Every department, one truth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "An ERP is not accounting software with modules bolted on. It is the shape of your company translated into a database. We build it around the way your operations actually run." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-3 md:grid-cols-6", children: [
        { icon: DollarSign, name: "Finance" },
        { icon: Package, name: "Inventory" },
        { icon: ShoppingCart, name: "Sales" },
        { icon: Truck, name: "Logistics" },
        { icon: UsersRound, name: "HR" },
        { icon: Building2, name: "Procurement" }
      ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-4 text-center hover:border-primary/40 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-semibold", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "shared ledger" })
      ] }, name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "How a real transaction moves", title: "Purchase order to goods receipt to invoice, without one person re typing anything." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[720px] grid grid-cols-6 gap-2 items-stretch", children: [
        { s: "PR", t: "Purchase requisition", d: "Warehouse raises need" },
        { s: "PO", t: "Purchase order", d: "Finance approves, supplier gets PDF" },
        { s: "ASN", t: "Advance ship notice", d: "Supplier confirms dispatch" },
        { s: "GRN", t: "Goods receipt", d: "Barcode scan matches PO" },
        { s: "3W", t: "Three way match", d: "PO, GRN and invoice reconcile automatically" },
        { s: "PAY", t: "Payment", d: "Scheduled and posted to ledger" }
      ].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-3 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold", children: n.s }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold text-sm", children: n.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: n.d })
        ] }),
        i < 5 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 text-primary z-10", children: "→" })
      ] }, n.s)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Roles and permissions, so audit stops being a fire drill." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Clerk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Controller" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Admin" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: [
          ["Raise PR", "✓", "✓", "✓", "✓"],
          ["Approve PO under 5k", "·", "✓", "✓", "✓"],
          ["Approve PO over 50k", "·", "·", "✓", "✓"],
          ["Post GRN", "✓", "✓", "✓", "✓"],
          ["Void invoice", "·", "·", "✓ (dual sign)", "✓"],
          ["Close month", "·", "·", "✓", "·"]
        ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: r[0] }),
          r.slice(1).map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `p-3 ${v.includes("✓") ? "text-primary font-semibold" : "text-muted-foreground"}`, children: v }, i))
        ] }, r[0])) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "The modules we typically build", title: "Assembled, not bolted. Every module writes to the same ledger." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        { t: "General ledger and multi entity", d: "Real double entry, multi currency, intercompany eliminations, and a close that finishes on time." },
        { t: "Inventory and warehouse", d: "Bin locations, cycle counts, serial and batch tracking, and mobile scanners the warehouse actually uses." },
        { t: "Sales and CRM", d: "Quotes, sales orders, backorders, and a pipeline your reps do not have to double enter." },
        { t: "Procurement", d: "Supplier catalogues, price agreements, approval workflows and blanket orders." },
        { t: "Manufacturing lite", d: "Bill of materials, work orders, WIP tracking and standard costing for light assembly." },
        { t: "HR and payroll", d: "People records, leave, time and integrations to local payroll providers." }
      ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: m.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: m.d })
      ] }, m.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-muted/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Cutover, without the horror stories you have heard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-4", children: [
        { p: "Phase 1", n: "Read only", d: "New ERP pulls from legacy, dashboards go live, no writes yet." },
        { p: "Phase 2", n: "Parallel", d: "One department dual writes for a full month end." },
        { p: "Phase 3", n: "Progressive", d: "Departments cut over on green metrics, not calendar dates." },
        { p: "Phase 4", n: "Legacy freeze", d: "Old system moved to archive only. Read for audit, no writes." }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary uppercase tracking-widest", children: p.p }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: p.d })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Finance and operations questions we get.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, { items: [
        { q: "Should we buy SAP, NetSuite or Odoo instead?", a: "Often yes. If your operations match the standard model in a package, buy it. We build custom when your process is a competitive asset, or when the price of forcing your ops into a vendor mould is higher than building your own." },
        { q: "How long does a real ERP build take?", a: "Six to twelve months for a first go live, one department at a time. Anyone quoting a big bang in ninety days is either quoting a very small business or setting you up for a very bad quarter." },
        { q: "Can you integrate with our existing tools?", a: "Yes. Payroll, banking, e invoicing, tax portals and marketplaces are integration territory. We keep them at the edge and treat the ERP as the source of truth." },
        { q: "What about compliance and e invoicing?", a: "We ship with country specific tax profiles and connect to local e invoicing gateways where required. Compliance is a first class module, not a plugin." }
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCta, { headline: "Walk us through your month end. We will show you where the ERP saves you weeks.", cta: "Book an ops discovery" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Related, { title: "Related capabilities", items: [
      { to: "/services/software/custom-software-development", label: "Custom Software Development", blurb: "For the operational tools that sit next to the ERP." },
      { to: "/services/software/custom-saas-products", label: "Custom SaaS Products", blurb: "For the products you sell to customers." },
      { to: "/services/software/mobile-app-development", label: "Mobile App Development", blurb: "Warehouse scanners, driver apps and field ops on mobile." }
    ] })
  ] });
}
const SplitComponent = Page;
export {
  SplitComponent as component
};
