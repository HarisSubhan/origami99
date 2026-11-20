import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Boxes, DollarSign, Package, Users2, Truck, ShoppingCart, Building2 } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Software Development" parentTo="/services/software" current="ERP Development" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Boxes className="h-3.5 w-3.5" /> ERP
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            One system of record.
            <span className="block text-primary">Every department, one truth.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            An ERP is not accounting software with modules bolted on. It is the shape of your company translated into a database. We build it around the way your operations actually run.
          </p>
        </div>

        {/* Signature: connected departments hub */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { icon: DollarSign, name: "Finance" },
            { icon: Package, name: "Inventory" },
            { icon: ShoppingCart, name: "Sales" },
            { icon: Truck, name: "Logistics" },
            { icon: Users2, name: "HR" },
            { icon: Building2, name: "Procurement" },
          ].map(({ icon: Icon, name }) => (
            <div key={name} className="rounded-2xl border border-border/60 bg-card p-4 text-center hover:border-primary/40 transition">
              <Icon className="h-6 w-6 text-primary mx-auto" />
              <div className="mt-2 text-sm font-semibold">{name}</div>
              <div className="text-[10px] text-muted-foreground">shared ledger</div>
            </div>
          ))}
        </div>
      </HeroWrap>

      {/* DOCUMENT FLOW */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How a real transaction moves" title="Purchase order to goods receipt to invoice, without one person re typing anything." />
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[720px] grid grid-cols-6 gap-2 items-stretch">
              {[
                { s: "PR", t: "Purchase requisition", d: "Warehouse raises need" },
                { s: "PO", t: "Purchase order", d: "Finance approves, supplier gets PDF" },
                { s: "ASN", t: "Advance ship notice", d: "Supplier confirms dispatch" },
                { s: "GRN", t: "Goods receipt", d: "Barcode scan matches PO" },
                { s: "3W", t: "Three way match", d: "PO, GRN and invoice reconcile automatically" },
                { s: "PAY", t: "Payment", d: "Scheduled and posted to ledger" },
              ].map((n, i) => (
                <div key={n.s} className="relative">
                  <div className="rounded-xl border border-border/60 bg-card p-3 h-full">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">{n.s}</div>
                    <div className="mt-2 font-semibold text-sm">{n.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{n.d}</div>
                  </div>
                  {i < 5 && <div className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 text-primary z-10">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROLE PERMISSION MATRIX */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Roles and permissions, so audit stops being a fire drill." />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left"><th className="p-3">Action</th><th className="p-3">Clerk</th><th className="p-3">Manager</th><th className="p-3">Controller</th><th className="p-3">Admin</th></tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Raise PR", "✓", "✓", "✓", "✓"],
                  ["Approve PO under 5k", "·", "✓", "✓", "✓"],
                  ["Approve PO over 50k", "·", "·", "✓", "✓"],
                  ["Post GRN", "✓", "✓", "✓", "✓"],
                  ["Void invoice", "·", "·", "✓ (dual sign)", "✓"],
                  ["Close month", "·", "·", "✓", "·"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="p-3 font-medium">{r[0]}</td>
                    {r.slice(1).map((v, i) => <td key={i} className={`p-3 ${v.includes("✓") ? "text-primary font-semibold" : "text-muted-foreground"}`}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="The modules we typically build" title="Assembled, not bolted. Every module writes to the same ledger." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "General ledger and multi entity", d: "Real double entry, multi currency, intercompany eliminations, and a close that finishes on time." },
              { t: "Inventory and warehouse", d: "Bin locations, cycle counts, serial and batch tracking, and mobile scanners the warehouse actually uses." },
              { t: "Sales and CRM", d: "Quotes, sales orders, backorders, and a pipeline your reps do not have to double enter." },
              { t: "Procurement", d: "Supplier catalogues, price agreements, approval workflows and blanket orders." },
              { t: "Manufacturing lite", d: "Bill of materials, work orders, WIP tracking and standard costing for light assembly." },
              { t: "HR and payroll", d: "People records, leave, time and integrations to local payroll providers." },
            ].map((m) => (
              <Panel key={m.t}>
                <div className="font-semibold">{m.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION PLAYBOOK */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Cutover, without the horror stories you have heard." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { p: "Phase 1", n: "Read only", d: "New ERP pulls from legacy, dashboards go live, no writes yet." },
              { p: "Phase 2", n: "Parallel", d: "One department dual writes for a full month end." },
              { p: "Phase 3", n: "Progressive", d: "Departments cut over on green metrics, not calendar dates." },
              { p: "Phase 4", n: "Legacy freeze", d: "Old system moved to archive only. Read for audit, no writes." },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold text-primary uppercase tracking-widest">{p.p}</div>
                <div className="mt-1 font-semibold">{p.n}</div>
                <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Finance and operations questions we get." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Should we buy SAP, NetSuite or Odoo instead?", a: "Often yes. If your operations match the standard model in a package, buy it. We build custom when your process is a competitive asset, or when the price of forcing your ops into a vendor mould is higher than building your own." },
            { q: "How long does a real ERP build take?", a: "Six to twelve months for a first go live, one department at a time. Anyone quoting a big bang in ninety days is either quoting a very small business or setting you up for a very bad quarter." },
            { q: "Can you integrate with our existing tools?", a: "Yes. Payroll, banking, e invoicing, tax portals and marketplaces are integration territory. We keep them at the edge and treat the ERP as the source of truth." },
            { q: "What about compliance and e invoicing?", a: "We ship with country specific tax profiles and connect to local e invoicing gateways where required. Compliance is a first class module, not a plugin." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Walk us through your month end. We will show you where the ERP saves you weeks." cta="Book an ops discovery" />

      <Related title="Related capabilities" items={[
        { to: "/services/software/custom-software-development", label: "Custom Software Development", blurb: "For the operational tools that sit next to the ERP." },
        { to: "/services/software/custom-saas-products", label: "Custom SaaS Products", blurb: "For the products you sell to customers." },
        { to: "/services/software/mobile-app-development", label: "Mobile App Development", blurb: "Warehouse scanners, driver apps and field ops on mobile." },
      ]} />
    </PageShell>
  );
}
