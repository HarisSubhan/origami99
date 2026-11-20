import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Video, Zap, Repeat, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Digital Marketing" parentTo="/services/digital-marketing" current="TikTok and Short Form" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Video className="h-3.5 w-3.5" /> TikTok · Reels · Shorts
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Short form is a
            <span className="block text-primary">retention game, not a reach game.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The platforms optimise for watch time. Every second of retention buys you more distribution. That is the entire game and it changes how creative is briefed.
          </p>
        </div>

        {/* Signature: retention curve */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-6">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Retention curve, first 15 seconds</div>
          <svg viewBox="0 0 400 120" className="w-full h-40">
            <defs><linearGradient id="rc" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.4" /><stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" /></linearGradient></defs>
            <path d="M 0 20 L 30 25 L 60 55 L 100 65 L 160 72 L 240 80 L 320 88 L 400 95 L 400 120 L 0 120 Z" fill="url(#rc)" />
            <path d="M 0 20 L 30 25 L 60 55 L 100 65 L 160 72 L 240 80 L 320 88 L 400 95" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            {[{ x: 30, l: "Hook" }, { x: 90, l: "Payoff hint" }, { x: 200, l: "Value" }, { x: 350, l: "CTA" }].map((p) => (
              <g key={p.l}><circle cx={p.x} cy={p.x < 100 ? 25 : 80} r="4" fill="hsl(var(--primary))" /><text x={p.x} y={p.x < 100 ? 15 : 105} textAnchor="middle" style={{ fontSize: 10, fill: "hsl(var(--foreground))" }}>{p.l}</text></g>
            ))}
          </svg>
          <div className="text-xs text-muted-foreground text-center">Losing 40 percent in the first three seconds kills reach. That is the only rule.</div>
        </div>
      </HeroWrap>

      {/* HOOK LIBRARY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Hooks we test" title="Ten hook archetypes, rotated weekly." align="center" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Direct address", "POV", "Green screen react", "Before and after", "List with number", "Controversial take", "Behind the scenes", "Question to camera", "Product first frame", "Result upfront"].map((h, i) => (
              <div key={h} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-semibold text-sm">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITERATION LOOP */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="The weekly iteration loop." align="center" />
          <div className="mt-10 relative">
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Zap, s: "Brief", d: "Ten concepts from what worked last week" },
                { icon: Video, s: "Shoot", d: "One day, one location, ten variations" },
                { icon: Repeat, s: "Edit", d: "Three cuts of each, different hooks" },
                { icon: TrendingUp, s: "Launch", d: "Post and boost the two with best organic retention" },
              ].map(({ icon: Icon, s, d }, i) => (
                <div key={s} className="text-center">
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center"><Icon className="h-6 w-6" /></div>
                  <div className="mt-3 font-semibold">{s}</div>
                  <div className="text-xs text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIC VS PAID */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="A real modern strategy" title="Organic feeds paid. Paid does not replace organic." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { h: "Organic first", body: "Post four to seven times a week. The organic account teaches you what a winning hook looks like for your product." },
              { h: "Boost winners", body: "Only ads that already beat category median retention should get paid distribution." },
              { h: "Spark ads and TopView", body: "For scale moments and launches. Not for evergreen." },
              { h: "Creator partnerships", body: "The most efficient acquisition on TikTok in most categories, when creators are chosen by fit not follower count." },
            ].map((c) => (
              <Panel key={c.h}>
                <div className="font-semibold text-lg">{c.h}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="TikTok and Reels questions." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Is TikTok worth it for B2B?", a: "For services with a visible before and after, yes. For enterprise SaaS with a nine month sales cycle, probably not as a growth channel. It can still work as a brand and hiring surface." },
            { q: "Should we post the same video to TikTok and Reels?", a: "Structurally yes, but recut for each platform. Aspect ratios overlap but the sound library and text placement rules do not." },
            { q: "How much content is enough?", a: "A minimum of three posts a week per platform to give the algorithm signal. Volume matters more than polish." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us three of your best posts. We will show you why they worked and how to make ten more." />

      <Related title="Related capabilities" items={[
        { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "The other channel most short form runs on." },
        { to: "/services/digital-marketing/video-editing-production", label: "Video Editing and Production", blurb: "The engine behind the creative." },
        { to: "/services/digital-marketing/full-funnel-digital-marketing", label: "Full Funnel Marketing", blurb: "Where short form sits in the plan." },
      ]} />
    </PageShell>
  );
}
