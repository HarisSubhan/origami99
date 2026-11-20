import { useEffect, useRef, useState } from "react";
import { PageShell, HeroWrap, Crumbs, SectionTitle, Chip, Faq, Related, ContextCta, CtaButton } from "./_shared";
import { Code2, Database, Cog, Shield, Layers, GitBranch, Gauge, FileSpreadsheet, Boxes, Workflow, ArrowRight, Check, X } from "lucide-react";

/* ---------------------------------------------------------------- */
/* Small primitives kept local and cheap: no 3D, no heavy libraries. */
/* ---------------------------------------------------------------- */

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Signature: spreadsheet to system ---------------- */

const MODEL_STEPS = [
  {
    key: "sheet",
    label: "Today",
    caption: "One shared spreadsheet, four versions of the truth, and a person whose job is to reconcile them.",
    chips: ["Manual entry", "No audit trail", "Breaks at scale"],
  },
  {
    key: "entities",
    label: "Model",
    caption: "We name the real objects your business already works with, and the rules that connect them.",
    chips: ["Orders", "Inventory", "Customers", "Invoices"],
  },
  {
    key: "services",
    label: "Services",
    caption: "Each rule becomes an owned service with validation, permissions and a record of who did what.",
    chips: ["Typed contracts", "Role based access", "Audit log"],
  },
  {
    key: "system",
    label: "System",
    caption: "The same work, now automated, observable and safe to change on a Tuesday afternoon.",
    chips: ["Automated jobs", "Live dashboards", "One command rollback"],
  },
] as const;

function SheetStage({ step }: { step: number }) {
  const cells = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 420 260" className="h-full w-full text-foreground" role="img" aria-label="A spreadsheet resolving into a modelled software system">
      {/* spreadsheet grid, fades out as the model forms */}
      <g style={{ opacity: step === 0 ? 1 : step === 1 ? 0.25 : 0.08, transition: "opacity .5s ease" }}>
        {cells.map((_, i) => {
          const c = i % 6, r = Math.floor(i / 6);
          return (
            <g key={i}>
              <rect x={30 + c * 60} y={40 + r * 44} width={58} height={42} rx={4}
                fill="color-mix(in oklab, currentColor 4%, transparent)"
                stroke="color-mix(in oklab, currentColor 16%, transparent)" strokeWidth={0.8} />
              <rect x={38 + c * 60} y={56 + r * 44} width={(i * 13) % 34 + 8} height={5} rx={2.5}
                fill="color-mix(in oklab, currentColor 22%, transparent)" />
            </g>
          );
        })}
      </g>

      {/* entities */}
      <g style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity .5s ease" }}>
        {[
          { x: 34, y: 34, t: "Orders" },
          { x: 232, y: 34, t: "Inventory" },
          { x: 34, y: 176, t: "Customers" },
          { x: 232, y: 176, t: "Invoices" },
        ].map((n, i) => (
          <g key={n.t} style={{ transform: step >= 1 ? "none" : "scale(.96)", transition: `transform .45s ease ${i * 60}ms` }}>
            <rect x={n.x} y={n.y} width={154} height={50} rx={12}
              fill="color-mix(in oklab, var(--coral) 12%, transparent)"
              stroke="color-mix(in oklab, var(--coral) 55%, transparent)" strokeWidth={1.2} />
            <text x={n.x + 77} y={n.y + 30} textAnchor="middle" fill="currentColor" style={{ fontSize: 12, fontWeight: 700 }}>{n.t}</text>
          </g>
        ))}
      </g>

      {/* service core and links */}
      <g style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity .5s ease" }}>
        {[
          "M 111 84 L 210 118", "M 309 84 L 210 118", "M 111 176 L 210 142", "M 309 176 L 210 142",
        ].map((d, i) => (
          <path key={d} d={d} stroke="var(--coral)" strokeWidth={1.4} fill="none" strokeOpacity={0.7}
            strokeDasharray={130} strokeDashoffset={step >= 2 ? 0 : 130}
            style={{ transition: `stroke-dashoffset .6s ease ${i * 90}ms` }} />
        ))}
        <rect x={150} y={106} width={120} height={48} rx={14}
          fill="color-mix(in oklab, var(--coral) 22%, transparent)" stroke="var(--coral)" strokeWidth={1.4} />
        <text x={210} y={135} textAnchor="middle" fill="currentColor" style={{ fontSize: 11.5, fontWeight: 800 }}>Domain services</text>
      </g>

      {/* system telemetry */}
      <g style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity .45s ease" }}>
        <path d="M 34 244 L 74 232 L 114 238 L 154 214 L 194 220 L 234 200 L 274 208 L 314 186 L 354 192 L 388 172"
          fill="none" stroke="var(--coral)" strokeWidth={2} strokeLinecap="round"
          strokeDasharray={420} strokeDashoffset={step >= 3 ? 0 : 420} style={{ transition: "stroke-dashoffset .9s ease" }} />
        <circle cx={388} cy={172} r={4} fill="var(--coral)" />
      </g>
    </svg>
  );
}

function OperationsMap() {
  const [step, setStep] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  useEffect(() => {
    if (!inView) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(3); return; }
    let i = 0;
    const id = setInterval(() => { i = Math.min(i + 1, MODEL_STEPS.length - 1); setStep(i); if (i === MODEL_STEPS.length - 1) clearInterval(id); }, 1500);
    return () => clearInterval(id);
  }, [inView]);

  const s = MODEL_STEPS[step];

  return (
    <section id="model" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="The signature move" title="We do not digitise the spreadsheet. We model the business underneath it." sub="Watch the same operation move from a shared file that nobody trusts to a system that enforces its own rules." />
        <div ref={ref} className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <div className="rounded-3xl border border-border/60 bg-card p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Operations map</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{s.label}</span>
            </div>
            <div className="mt-3 h-[16rem] sm:h-[19rem]">
              <SheetStage step={step} />
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-5 sm:p-7 flex flex-col">
            <div className="flex gap-2">
              {MODEL_STEPS.map((m, i) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setStep(i)}
                  aria-current={i === step}
                  className={`flex-1 rounded-xl border px-2 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${i === step ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed">{s.caption}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {s.chips.map((c) => <Chip key={c} tone={step === 0 ? "warning" : "primary"}>{c}</Chip>)}
            </div>
            <div className="mt-auto pt-8">
              <CtaButton as="route" to="/#contact">Map your operation with us</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Page ---------------------------- */

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Software Development" parentTo="/services/software" current="Custom Software Development" />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Code2 className="h-3.5 w-3.5" /> Custom Software
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Software that fits the shape of your business,
              <span className="block text-primary">not the other way round.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Internal tools, operations platforms and back office systems for teams that have outgrown spreadsheets and off the shelf suites. Senior engineers only, one accountable team, and every line of it yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton as="route" to="/#contact">Scope a build</CtaButton>
              <a href="#model" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
                See how we model it <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { v: "450+", k: "Products shipped" },
                { v: "6wk", k: "First release" },
                { v: "100%", k: "IP handed over" },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="text-2xl sm:text-3xl font-bold text-primary">{m.v}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{m.k}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Reference architecture</div>
            <svg viewBox="0 0 400 260" className="w-full h-auto text-foreground" role="img" aria-label="Layered architecture from client to database">
              {[
                { x: 118, y: 12, w: 164, t: "Web and mobile clients", tone: 1 },
                { x: 118, y: 74, w: 164, t: "API gateway", tone: 1 },
                { x: 12, y: 140, w: 150, t: "Workers and jobs", tone: 0 },
                { x: 238, y: 140, w: 150, t: "Integrations", tone: 0 },
                { x: 118, y: 206, w: 164, t: "Postgres and cache", tone: 2 },
              ].map((n) => (
                <g key={n.t}>
                  <rect x={n.x} y={n.y} width={n.w} height={42} rx={11}
                    fill={n.tone === 2 ? "color-mix(in oklab, var(--coral) 18%, transparent)" : n.tone === 1 ? "color-mix(in oklab, var(--coral) 8%, transparent)" : "color-mix(in oklab, currentColor 5%, transparent)"}
                    stroke={n.tone ? "color-mix(in oklab, var(--coral) 45%, transparent)" : "color-mix(in oklab, currentColor 20%, transparent)"} strokeWidth={1.1} />
                  <text x={n.x + n.w / 2} y={n.y + 26} textAnchor="middle" fill="currentColor" style={{ fontSize: 11.5, fontWeight: 700 }}>{n.t}</text>
                </g>
              ))}
              {["M 200 54 L 200 74", "M 200 116 L 200 206", "M 160 116 L 90 140", "M 240 116 L 310 140", "M 90 182 L 160 206", "M 310 182 L 240 206"].map((d) => (
                <path key={d} d={d} stroke="color-mix(in oklab, var(--coral) 55%, transparent)" strokeWidth={1.3} fill="none" />
              ))}
            </svg>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Chip tone="primary">Typed end to end</Chip>
              <Chip>Audit logs</Chip>
              <Chip>SSO ready</Chip>
              <Chip>Blue green deploy</Chip>
            </div>
          </div>
        </div>
      </HeroWrap>

      {/* REALITY */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="The situation" title="You already know where the hours go." sub="None of this is a crisis. It is the ordinary cost of running a growing company on tools that were never built for it." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileSpreadsheet, t: "The master file", d: "One workbook holds the real numbers. Two people are allowed to touch it and both are busy." },
              { icon: Workflow, t: "The copy paste bridge", d: "Two systems that should talk are connected by a person moving rows between tabs every morning." },
              { icon: Boxes, t: "The vendor ceiling", d: "The suite does eighty percent. The last twenty is quoted as a custom module you never receive." },
              { icon: Gauge, t: "The invisible leak", d: "Nobody can answer margin by product line this week without three exports and an afternoon." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-5">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
                  <div className="mt-4 font-semibold">{c.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <OperationsMap />

      {/* PROCESS SPINE */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How we build" title="Six stages, and you see working software in every one of them." />
          <div className="mt-10 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="space-y-4">
              {[
                { icon: Layers, s: "Discovery", w: "Week 1", d: "We sit with the people doing the work, record the real process, and write down every rule that lives in someone's head." },
                { icon: Database, s: "Domain model", w: "Week 1 to 2", d: "Entities, relationships, states and permissions on one page you can read without an engineering degree." },
                { icon: Code2, s: "Vertical slice", w: "Week 2 to 3", d: "One complete workflow shipped end to end, in your environment, on real data. Not a prototype." },
                { icon: GitBranch, s: "Build in sprints", w: "Week 3 onwards", d: "Two week cycles, a live demo at the end of each, and a backlog you can reorder at any point." },
                { icon: Shield, s: "Harden", w: "Pre launch", d: "Load tests, penetration review, backup and restore rehearsal, and a runbook your team can follow." },
                { icon: Cog, s: "Handover", w: "Launch", d: "Repository, infrastructure as code, documentation and two weeks of paired support. You can leave us at any time." },
              ].map((p, i) => (
                <Reveal key={p.s} delay={i * 60}>
                  <div className="relative flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
                    <div className="relative z-10 h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><p.icon className="h-5 w-5" /></div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Stage {i + 1}</span>
                        <span className="font-semibold">{p.s}</span>
                        <span className="text-xs text-muted-foreground">{p.w}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Under the hood" title="The standards we hold ourselves to, whether or not you ask." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: "Engineering", items: ["TypeScript end to end", "Postgres as the source of truth", "Migrations reviewed and reversible", "No shared mutable state without a lock"] },
              { t: "Operations", items: ["Infrastructure as code", "Structured logs and traces", "Alerting tied to user impact", "Restore rehearsed, not assumed"] },
              { t: "Security", items: ["Role based access from day one", "Secrets in a managed vault", "Dependency scanning on every merge", "Audit trail on every write"] },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{g.t}</div>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Fit" title="When custom is the right call, and when it is not." sub="We turn work down for these reasons often enough that it is worth putting them in writing." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary"><Check className="h-4 w-4" /> Build custom when</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "The process is a genuine advantage and no product models it.",
                  "Licence and per seat costs already exceed a build budget.",
                  "Three or more systems need one shared source of truth.",
                  "Compliance or data residency rules out the obvious vendor.",
                ].map((t) => <li key={t} className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{t}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><X className="h-4 w-4" /> Do not build custom when</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "A mature product covers it and the gap is a preference, not a constraint.",
                  "The process changes every quarter and nobody owns it yet.",
                  "There is no internal owner to make decisions during the build.",
                  "The real problem is a policy your team has not agreed on.",
                ].map((t) => <li key={t} className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="What clients ask before they commit." align="center" />
          <div className="mt-10">
            <Faq items={[
              { q: "Who owns the code?", a: "You do, from the first commit. The repository sits in your organisation, the infrastructure runs in your cloud account, and the handover pack includes everything needed to continue without us." },
              { q: "How long does a first release take?", a: "A focused operations system reaches a usable first release in about six weeks. A complete platform runs three to six months, but you see a working vertical slice in week three either way." },
              { q: "What happens to our existing data?", a: "We migrate in stages with a reversible plan. The old system stays available in read only mode until the new one has run a full cycle without surprises." },
              { q: "Can our own developers work alongside you?", a: "Yes. We pair, review each other's pull requests, and write the codebase so that your team can take it over. Several clients run their product internally within a year." },
              { q: "What does support look like after launch?", a: "Two weeks of paired support are included. After that you can stay on a monthly retainer with response targets, or take the runbook and run it yourself." },
            ]} />
          </div>
        </div>
      </section>

      <ContextCta headline="Bring the process that costs you the most hours. We will model it on the first call." sub="No slide deck. One session, your real workflow, and a written view of what a system would replace." cta="Book a scoping call" />

      <Related title="Related capabilities" items={[
        { to: "/services/software/custom-saas-products", label: "Custom SaaS Products", blurb: "When the system you need is the product you sell." },
        { to: "/services/software/erp-development", label: "ERP Development", blurb: "For finance, inventory and HR on one ledger." },
        { to: "/services/software/ui-ux-design", label: "UI and UX Design", blurb: "The design layer your internal tools deserve." },
      ]} />
    </PageShell>
  );
}
