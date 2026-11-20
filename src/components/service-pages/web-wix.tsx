import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Sparkles, Clock, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Web Development" parentTo="/services/web-development" current="Wix and No Code" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> No Code
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            The fastest route from
            <span className="block text-primary">idea to live URL.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            When speed and independence matter more than absolute control, no code is the correct answer. We ship credible sites in days, not months, and stay honest about the ceiling.
          </p>
        </div>

        {/* Signature: continuum */}
        <div className="mt-14 rounded-2xl border border-border/60 bg-card p-6">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Template to custom continuum</div>
          <div className="relative h-16">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary" />
            {[
              { pct: 0, label: "Template", sub: "1 day" },
              { pct: 25, label: "Wix + branding", sub: "3 days" },
              { pct: 50, label: "Wix custom", sub: "2 weeks" },
              { pct: 75, label: "Webflow", sub: "4 weeks" },
              { pct: 100, label: "Custom code", sub: "8+ weeks" },
            ].map((s) => (
              <div key={s.label} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-center" style={{ left: `${s.pct}%` }}>
                <div className="h-4 w-4 rounded-full bg-primary border-4 border-background mx-auto" />
                <div className="mt-2 text-xs font-semibold whitespace-nowrap">{s.label}</div>
                <div className="text-[10px] text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </HeroWrap>

      {/* WHEN NO CODE FITS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Where no code is the right answer" title="Four situations where no code wins on tradeoffs." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, t: "Launch this week", d: "Local business, event site, campaign page. Speed beats sophistication." },
              { icon: TrendingUp, t: "Validate a hypothesis", d: "Pre revenue, testing a market. Do not build a codebase for a maybe." },
              { icon: Sparkles, t: "Small brochure site", d: "Under seven pages, mostly static. Overhead of custom is not justified." },
              { icon: Sparkles, t: "In house independence", d: "Team wants to edit without briefs. No code gives them the keys." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border/60 bg-card p-5">
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-semibold">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM SHOWDOWN */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Wix, Squarespace, Carrd or Notion sites. A quick honest map." align="center" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50"><tr className="text-left"><th className="p-3">Platform</th><th className="p-3">Best for</th><th className="p-3">Ceiling</th></tr></thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Wix", "Local businesses, booking, small stores", "Design flexibility on complex layouts"],
                  ["Squarespace", "Portfolios, small commerce, elegant defaults", "Custom interactions"],
                  ["Carrd", "Single page product launches", "Anything with routes or CMS"],
                  ["Notion sites", "Docs, changelogs, internal knowledge", "Marketing polish"],
                ].map((r) => (
                  <tr key={r[0]}><td className="p-3 font-semibold">{r[0]}</td><td className="p-3 text-muted-foreground">{r[1]}</td><td className="p-3 text-muted-foreground">{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT WE DO DIFFERENTLY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Where we earn our fee" title="Anyone can drag blocks. Here is what we bring." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Real information architecture", "Two hours planning saves ten hours of dragging."],
              ["A brand system that fits the platform", "Colour, type and spacing tokens locked so it stays on brand as pages get added."],
              ["Copy that converts", "The words are the design when the platform limits the visuals."],
              ["Analytics and tracking", "GA4, Meta Pixel, event map. Not just installed, actually wired."],
              ["A migration path", "The moment you outgrow no code, we know how to move you without losing SEO."],
              ["Training", "One recorded session and one live one so the team owns it after launch."],
            ].map(([t, d]) => (
              <Panel key={t}>
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Questions we get from founders." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Is Wix good for SEO?", a: "Yes. Modern Wix ranks. The old myths about Wix and SEO are out of date. Set up matters more than platform choice at this size." },
            { q: "Can I migrate later?", a: "Yes. When you outgrow it, the content moves to WordPress, Webflow or custom code without losing rankings if the migration is planned." },
            { q: "What about custom code inside Wix?", a: "Possible with Velo. We use it sparingly. Once you need real code, you probably need a real platform." },
            { q: "How fast is fast?", a: "A five page Wix site can go live in three working days including copy and imagery for existing brands." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Need a site live before your next campaign?" sub="A three day sprint gets you to a shareable URL." cta="Book a launch sprint" />

      <Related title="Related capabilities" items={[
        { to: "/services/web-development/webflow-framer", label: "Webflow and Framer", blurb: "The next step up when no code gets tight." },
        { to: "/services/web-development/wordpress-development", label: "WordPress Development", blurb: "For content teams with more than five editors." },
        { to: "/services/web-development/custom-web-development", label: "Custom Web Development", blurb: "When performance and control matter." },
      ]} />
    </PageShell>
  );
}
