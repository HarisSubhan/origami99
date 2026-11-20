import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Palette, Compass, PenTool, Ruler, Eye } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Software Development" parentTo="/services/software" current="UI and UX Design" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Palette className="h-3.5 w-3.5" /> Product Design
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Design that removes friction,
            <span className="block text-primary">not just decoration.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We design software the way engineers ship it. Small, testable, honest about tradeoffs, and always tied to a metric that actually moves.
          </p>
        </div>

        {/* Signature: fidelity progression */}
        <div className="mt-14 grid gap-3 md:grid-cols-4">
          {[
            { label: "Research", tone: "Sketchy", content: <div className="space-y-1.5"><div className="h-1.5 bg-foreground/30 rounded w-3/4" /><div className="h-1.5 bg-foreground/20 rounded w-1/2" /><div className="h-1.5 bg-foreground/20 rounded w-2/3" /></div> },
            { label: "Wireframe", tone: "Structural", content: <div className="space-y-1"><div className="h-3 bg-foreground/10 border border-foreground/20 rounded" /><div className="grid grid-cols-3 gap-1"><div className="h-6 bg-foreground/5 border border-foreground/20 rounded" /><div className="h-6 bg-foreground/5 border border-foreground/20 rounded" /><div className="h-6 bg-foreground/5 border border-foreground/20 rounded" /></div></div> },
            { label: "Hi fi", tone: "Visual", content: <div className="space-y-1"><div className="h-3 bg-primary/60 rounded" /><div className="grid grid-cols-3 gap-1"><div className="h-6 bg-primary/20 rounded" /><div className="h-6 bg-primary/30 rounded" /><div className="h-6 bg-primary/40 rounded" /></div></div> },
            { label: "Shipped", tone: "Real", content: <div className="space-y-1"><div className="h-3 bg-gradient-to-r from-primary to-primary/60 rounded" /><div className="grid grid-cols-3 gap-1"><div className="h-6 bg-card border border-border rounded shadow-sm" /><div className="h-6 bg-card border border-border rounded shadow-sm" /><div className="h-6 bg-card border border-border rounded shadow-sm" /></div></div> },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="text-sm font-semibold mb-3">{s.tone}</div>
              {s.content}
            </div>
          ))}
        </div>
      </HeroWrap>

      {/* PROCESS SPINE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How we work" title="Five moves, in this order, every time." />
          <div className="mt-10 space-y-4">
            {[
              { icon: Compass, s: "Frame", d: "One session to name the audience, the job, the metric and the constraint." },
              { icon: Eye, s: "Learn", d: "Five to seven customer conversations, tagged and quoted. Never a survey." },
              { icon: PenTool, s: "Sketch", d: "Twenty low fidelity flows in three days. Kill fifteen. Test five." },
              { icon: Ruler, s: "System", d: "Build the tokens, spacing, type and components the shipped app will actually use." },
              { icon: Palette, s: "Ship + measure", d: "High fidelity in code, not Figma. The design lives in the codebase from week three." },
            ].map((p, i) => (
              <div key={p.s} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><p.icon className="h-5 w-5" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3"><span className="text-xs font-semibold text-primary uppercase tracking-widest">Step {i + 1}</span><span className="font-semibold">{p.s}</span></div>
                  <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM tokens tree */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle title="A design system your engineers actually use." sub="A design system is not a Figma library. It is a token pipeline that ends in production CSS variables and typed component props." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { level: "Tokens", items: ["color.brand.500", "space.4 = 16px", "radius.lg = 12px", "font.body = Inter"] },
              { level: "Primitives", items: ["Button", "Input", "Dialog", "Toast"] },
              { level: "Patterns", items: ["EmptyState", "PageHeader", "DataTable", "OnboardingChecklist"] },
            ].map((c) => (
              <div key={c.level} className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.level}</div>
                <ul className="mt-3 space-y-1.5 font-mono text-xs">
                  {c.items.map((i) => <li key={i} className="p-2 rounded bg-muted/50">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEURISTICS AUDIT */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Design review criteria" title="Ten heuristics we grade every screen against." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Where am I", "What can I do here", "What just happened", "How do I go back", "What is loading",
              "What is required", "What did I break", "Can I recover", "Is this fast enough", "Would I do this at 2am",
            ].map((h, i) => (
              <div key={h} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-semibold text-sm">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Design questions we hear on the first call." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Do you deliver Figma files or code?", a: "Both. Figma is a shared language for the team. Code is the deliverable. From week three, the design system lives in your repository and Figma tracks it, not the other way round." },
            { q: "How long is a redesign?", a: "Six to ten weeks for a focused product surface. Longer projects are a red flag. If the scope is bigger, we cut it into two." },
            { q: "Can you work with our existing brand?", a: "Yes. We extend brand systems into product tokens without repainting the marketing site." },
            { q: "Do you do user research?", a: "Yes. Five to seven interviews at the start, unmoderated tests during the sprint, and one full usability study before major launches." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Bring a screen you know is hurting you. We will redesign it in one working session." cta="Book a design working session" />

      <Related title="Related capabilities" items={[
        { to: "/services/software/mobile-app-development", label: "Mobile App Development", blurb: "Design and build a mobile product together." },
        { to: "/services/software/custom-saas-products", label: "Custom SaaS Products", blurb: "The product this design ships inside." },
        { to: "/services/brand-identity", label: "Brand Identity", blurb: "For the layer above product design." },
      ]} />
    </PageShell>
  );
}
