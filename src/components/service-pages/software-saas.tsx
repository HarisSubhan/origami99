import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta, CtaButton } from "./_shared";
import { Database, Users, CreditCard, TrendingUp, RefreshCcw, LineChart, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Software Development" parentTo="/services/software" current="Custom SaaS Products" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Database className="h-3.5 w-3.5" /> Custom SaaS Products
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              A product that bills, provisions and scales
              <span className="block text-primary">without you in the loop.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build multi tenant SaaS products with the boring parts done right. Billing, trials, seats, permissions, admin. So you can spend your calendar on the thing that actually differentiates you.
            </p>
          </div>

          {/* Signature: plan matrix */}
          <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Plan matrix</div>
            <div className="grid grid-cols-4 gap-2 text-[11px]">
              <div />
              {["Starter", "Team", "Business"].map((p, i) => (
                <div key={p} className={`text-center font-semibold rounded-md py-1.5 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{p}</div>
              ))}
              {[
                ["Seats", "3", "15", "Unlimited"],
                ["Workspaces", "1", "3", "10"],
                ["SSO", "·", "·", "✓"],
                ["Audit log", "·", "30d", "1y"],
                ["API rate", "60/min", "600/min", "6k/min"],
                ["Support", "Email", "Priority", "Named"],
              ].map((row) => (
                <>
                  <div key={row[0]} className="py-1.5 text-muted-foreground">{row[0]}</div>
                  {row.slice(1).map((v, i) => <div key={i} className="py-1.5 text-center">{v}</div>)}
                </>
              ))}
            </div>
          </div>
        </div>
      </HeroWrap>

      {/* MULTI TENANCY visual */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="The hardest choice" title="One tenant per row, one tenant per schema, or one tenant per database." sub="We pick the isolation level that matches your buyers, not a blog post." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              { name: "Shared schema", when: "Freemium and SMB. Fast to iterate.", cost: "Cheap", risk: "Noisy neighbour risk without discipline" },
              { name: "Schema per tenant", when: "Mid market with data residency asks.", cost: "Medium", risk: "Migration ceremony grows with tenants" },
              { name: "Database per tenant", when: "Regulated or enterprise contracts.", cost: "Higher", risk: "You will need real provisioning automation" },
            ].map((o) => (
              <Panel key={o.name}>
                <Users className="h-6 w-6 text-primary" />
                <div className="mt-3 text-lg font-semibold">{o.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{o.when}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-muted-foreground">Cost:</span> <span className="font-semibold">{o.cost}</span></div>
                  <div><span className="text-muted-foreground">Watch:</span> <span className="font-semibold">{o.risk}</span></div>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING LIFECYCLE horizontal timeline */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle title="The billing lifecycle, honestly." sub="Every stage is a potential churn moment. This is where we spend most of the second half of the build." align="center" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3">
            {[
              { s: "Signup", d: "Frictionless email or SSO", icon: Users },
              { s: "Trial", d: "Value moment in first session", icon: Sparkles },
              { s: "Convert", d: "Stripe or Paddle checkout", icon: CreditCard },
              { s: "Expand", d: "Seat upgrades in product", icon: TrendingUp },
              { s: "Renew", d: "Dunning without drama", icon: RefreshCcw },
              { s: "Churn", d: "Cancel survey, win back", icon: LineChart },
            ].map(({ s, d, icon: Icon }, i) => (
              <div key={s} className="relative rounded-xl border border-border/60 bg-card p-4">
                <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</div>
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-2 font-semibold text-sm">{s}</div>
                <p className="text-xs text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMIN SUITE showcase */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionTitle eyebrow="Day two operations" title="Admin is a first class product, not an afterthought." />
              <p className="mt-4 text-muted-foreground">The most expensive tickets after launch are the ones your support team cannot resolve without a developer. Every SaaS we build ships with an internal console powerful enough that ops handles refunds, impersonation, plan changes and feature flags on their own.</p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Tenant switcher and safe impersonation with audit trail", "Feature flags per tenant, per plan, per user", "Manual invoice adjustments and credit notes", "Usage counters with hard and soft caps", "Webhook replay and delivery inspector"].map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary">·</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-6">
              <div className="rounded-xl bg-card border border-border/60 shadow-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/60"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" /><span className="ml-3 text-xs text-muted-foreground">admin.yourapp.com</span></div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between"><div><div className="font-semibold text-sm">Acme Inc</div><div className="text-[10px] text-muted-foreground">tenant · business plan · 47 seats</div></div><Chip tone="success">healthy</Chip></div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-md bg-muted p-2"><div className="text-lg font-bold">$4.2k</div><div className="text-[10px] text-muted-foreground">MRR</div></div>
                    <div className="rounded-md bg-muted p-2"><div className="text-lg font-bold">98%</div><div className="text-[10px] text-muted-foreground">Uptime 30d</div></div>
                    <div className="rounded-md bg-muted p-2"><div className="text-lg font-bold">312</div><div className="text-[10px] text-muted-foreground">API/hr</div></div>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between p-2 rounded bg-muted/50"><span>Feature flag: new dashboard</span><span className="text-primary font-semibold">ON</span></div>
                    <div className="flex justify-between p-2 rounded bg-muted/50"><span>SSO enforced</span><span className="text-primary font-semibold">ON</span></div>
                    <div className="flex justify-between p-2 rounded bg-muted/50"><span>Impersonation window</span><span className="font-semibold">15 min</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PSYCHOLOGY */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Pricing is a product decision, not a spreadsheet decision." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { h: "Per seat", body: "Simple to sell. Punishes wide teams. Great for tools individuals adopt bottom up." },
              { h: "Per active user", body: "Aligns your revenue with real value. Requires clean event tracking from day one." },
              { h: "Per usage", body: "Predictable for you, unpredictable for the buyer. Pair with a monthly commit." },
              { h: "Per outcome", body: "The most defensible model when the outcome is measurable. Hard to price early." },
            ].map((p) => (
              <Panel key={p.h}>
                <div className="text-lg font-semibold">{p.h}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="What SaaS founders ask us." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Should I build my own auth?", a: "No. Use a hosted identity provider like Supabase, Clerk or WorkOS. Own the user table and the audit trail, rent the login form. Rebuilding OAuth flows in 2026 is an antipattern." },
            { q: "Stripe or Paddle?", a: "Stripe if your buyers are technical and you want the widest API surface. Paddle if you want a merchant of record handling tax and compliance in exchange for a slightly higher take rate." },
            { q: "When should I go multi region?", a: "When a paying enterprise customer asks and no sooner. Multi region complicates every migration and doubles your infrastructure bill." },
            { q: "How do we handle the free plan?", a: "Cap it with hard limits, not soft ones. A permanently free tier that abuses your infrastructure is a product mistake, not a support problem." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Ship v1 in a quarter with billing that works on day one." cta="Plan the build" />

      <Related title="Related capabilities" items={[
        { to: "/services/software/custom-software-development", label: "Custom Software Development", blurb: "Internal tools and back office systems, not a product for external buyers." },
        { to: "/services/software/mobile-app-development", label: "Mobile App Development", blurb: "iOS and Android clients for your SaaS." },
        { to: "/services/software/ui-ux-design", label: "UI and UX Design", blurb: "Product design that reduces churn in the first session." },
      ]} />
    </PageShell>
  );
}
