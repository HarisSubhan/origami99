import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Layers, MousePointer2, Database, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Web Development" parentTo="/services/web-development" current="Webflow and Framer" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Layers className="h-3.5 w-3.5" /> Webflow · Framer
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Marketing sites your team can move,
            <span className="block text-primary">without waiting for engineering.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The right platform for teams who ship landing pages weekly, run campaigns constantly, and want interactions that feel premium without a JavaScript bill.
          </p>
        </div>

        {/* Signature: split webflow vs framer */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            { name: "Webflow", best: "Structured content, larger sites, CMS collections, ecommerce lite.", tag: "Systematic" },
            { name: "Framer", best: "Motion first landing pages, product launches, single flow storytelling.", tag: "Cinematic" },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-6">
              <Chip tone="primary">{p.tag}</Chip>
              <div className="mt-3 text-2xl font-bold">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.best}</p>
            </div>
          ))}
        </div>
      </HeroWrap>

      {/* DECISION TREE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="How to pick between them, in five questions." align="center" />
          <div className="mt-10 space-y-3">
            {[
              { q: "Do you publish content weekly?", a: "Webflow. CMS is stronger." },
              { q: "Is the site under 15 pages, mostly a launch story?", a: "Framer. Faster to design, easier to iterate." },
              { q: "Do you sell products directly on the site?", a: "Webflow. Ecommerce is native." },
              { q: "Do you need advanced scroll interactions?", a: "Framer. Motion is first class." },
              { q: "Do you have a marketing team of five or more?", a: "Webflow. Multi seat editor scales." },
            ].map((r, i) => (
              <div key={r.q} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div><div className="font-semibold">{r.q}</div><div className="text-sm text-primary mt-1">→ {r.a}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS COLLECTIONS DIAGRAM */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Content modelling that survives your third campaign." sub="Most Webflow projects die at content model debt. We start with the model, not the visual." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { c: "Authors", fields: ["name", "bio", "avatar", "role"] },
              { c: "Posts", fields: ["title", "slug", "hero", "body", "author (ref)", "category (ref)"] },
              { c: "Categories", fields: ["name", "slug", "color"] },
            ].map((col) => (
              <div key={col.c} className="rounded-2xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-2 pb-3 border-b border-border/60"><Database className="h-4 w-4 text-primary" /><span className="font-semibold">{col.c}</span></div>
                <ul className="mt-3 font-mono text-xs space-y-1.5">
                  {col.fields.map((f) => <li key={f} className="flex justify-between p-1.5 rounded bg-muted/50"><span>{f}</span><span className="text-muted-foreground text-[10px]">{f.includes("ref") ? "reference" : "text"}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTION TIMELINE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Motion, done tastefully" title="Interactions on a timeline, not sprinkled on top." />
          <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Hero enter · 1400ms</div>
            <div className="space-y-2 font-mono text-xs">
              {[
                { t: "Backdrop fade", s: 0, e: 60 },
                { t: "Headline lines rise", s: 20, e: 80 },
                { t: "Subhead fade in", s: 45, e: 90 },
                { t: "CTA scale from 0.9", s: 60, e: 95 },
                { t: "Ambient parallax loop", s: 90, e: 100 },
              ].map((r) => (
                <div key={r.t} className="grid grid-cols-[160px_1fr] items-center gap-3">
                  <span>{r.t}</span>
                  <div className="relative h-4 rounded bg-muted overflow-hidden">
                    <div className="absolute h-full bg-primary" style={{ left: `${r.s}%`, width: `${r.e - r.s}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HANDOFF */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="What we hand marketing on launch day." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "A design system inside the platform, with locked spacing, colours and type",
              "Reusable page sections marketing can drag into any new landing page",
              "A CMS with sensible required fields so no broken article ships",
              "Redirect table, robots and sitemap wired to the CMS",
              "A launch checklist and a 30 minute recorded walk through",
              "Named engineer available for month one for the odd question",
            ].map((s) => (
              <div key={s} className="rounded-xl border border-border/60 bg-card p-4">
                <MousePointer2 className="h-5 w-5 text-primary" />
                <p className="text-sm mt-2">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Questions we hear from marketing leads." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Can Framer really replace code?", a: "For a launch site or a five page marketing story, yes. Framer produces clean production output and Vitals that compete with hand written React." },
            { q: "Will we outgrow Webflow?", a: "Sometimes. Enterprise content needs, complex localisation and advanced ecommerce still push teams to headless. Most companies do not hit that ceiling." },
            { q: "Can we self host?", a: "No. Both are hosted platforms. That is the tradeoff for the productivity you gain." },
            { q: "Do you provide ongoing design in Webflow or Framer?", a: "Yes. Monthly retainers cover new campaign pages, section updates, and CMS additions." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Give us a launch date. We will ship the site the week before." cta="Book a scoping call" />

      <Related title="Related capabilities" items={[
        { to: "/services/web-development/custom-web-development", label: "Custom Web Development", blurb: "When platform limits become project limits." },
        { to: "/services/web-development/wix-no-code", label: "Wix and No Code", blurb: "For smaller sites and rapid prototypes." },
        { to: "/services/brand-identity", label: "Brand Identity", blurb: "The layer above the marketing site." },
      ]} />
    </PageShell>
  );
}
