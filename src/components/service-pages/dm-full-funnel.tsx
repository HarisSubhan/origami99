import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Faq, Related, ContextCta, Chip } from "./_shared";
import { TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Digital Marketing" parentTo="/services/digital-marketing" current="Full Funnel Digital Marketing" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <TrendingUp className="h-3.5 w-3.5" /> Full Funnel
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            One plan across every channel.
            <span className="block text-primary">One dashboard you actually read.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Point solutions optimise for last click. Real growth needs a plan that sees the whole funnel and moves budget across it every week.
          </p>
        </div>

        {/* Signature: funnel board */}
        <div className="mt-12 grid gap-3 md:grid-cols-4">
          {[
            { stage: "Awareness", channels: ["YouTube", "TikTok organic", "Podcast sponsorships"], goal: "Reach + brand search lift", color: "bg-primary/10" },
            { stage: "Consideration", channels: ["Meta", "SEO", "Retargeting"], goal: "Site visits + email captures", color: "bg-primary/20" },
            { stage: "Conversion", channels: ["Google Search", "Email flows", "Landing pages"], goal: "Leads and purchases", color: "bg-primary/40" },
            { stage: "Retention", channels: ["Lifecycle email", "SMS", "Community"], goal: "Repeat and referral", color: "bg-primary" },
          ].map((s, i) => (
            <div key={s.stage} className={`rounded-2xl border border-border/60 ${s.color} p-4`}>
              <div className="text-[10px] font-bold uppercase tracking-widest">Stage {i + 1}</div>
              <div className="mt-1 font-semibold">{s.stage}</div>
              <div className="mt-3 space-y-1">
                {s.channels.map(c => <div key={c} className="text-xs bg-background/70 rounded px-2 py-1">{c}</div>)}
              </div>
              <div className="mt-3 text-[11px] text-muted-foreground">Goal: {s.goal}</div>
            </div>
          ))}
        </div>
      </HeroWrap>

      {/* CHANNEL MIX FRAMEWORK */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How we allocate" title="Channel budget by stage of business, not by fashion." />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50"><tr className="text-left"><th className="p-3">Stage</th><th className="p-3">Awareness</th><th className="p-3">Consideration</th><th className="p-3">Conversion</th><th className="p-3">Retention</th></tr></thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Zero to 1m ARR", "10%", "20%", "60%", "10%"],
                  ["1m to 10m ARR", "20%", "30%", "35%", "15%"],
                  ["10m+ ARR", "35%", "25%", "20%", "20%"],
                ].map((r) => (
                  <tr key={r[0]}><td className="p-3 font-semibold">{r[0]}</td>{r.slice(1).map((v, i) => <td key={i} className="p-3 text-primary font-mono">{v}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Measurement without kidding yourself." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { h: "Last click", body: "Useful for optimising a single channel. Useless for a plan." },
              { h: "MMM lite", body: "Weekly regression against spend by channel. Directional truth for teams under 10m in spend." },
              { h: "Incrementality tests", body: "Geo holdouts, ghost bidding, pre and post studies for the channels that matter most." },
            ].map((c) => (
              <Panel key={c.h}>
                <div className="font-semibold text-lg">{c.h}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY RHYTHM */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How we run a retainer" title="A week in the life of a growth engagement." />
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {[
              ["Mon", "Numbers", "One dashboard, three questions"],
              ["Tue", "Creative", "Brief the next batch"],
              ["Wed", "Experiments", "Ship two new tests"],
              ["Thu", "Learnings", "Kill the losers, scale the winners"],
              ["Fri", "Plan", "Next week's bets, one page memo"],
            ].map(([d, s, n]) => (
              <div key={d} className="rounded-xl border border-border/60 bg-card p-4">
                <Chip tone="primary">{d}</Chip>
                <div className="mt-2 font-semibold text-sm">{s}</div>
                <div className="text-xs text-muted-foreground mt-1">{n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Common questions." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Do you commit to a specific ROAS?", a: "No. Anyone promising a specific number before seeing your account is selling you a story. We commit to a process, a weekly rhythm and an evidence trail. The number falls out of that." },
            { q: "Do you take a percentage of ad spend?", a: "No. Percentage of spend rewards the wrong behaviour. We charge a monthly retainer scoped to the work." },
            { q: "Can you replace our in house team?", a: "Sometimes. More often we work alongside an in house lead as senior support and creative capacity." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Bring your last 90 days of numbers. We will bring the plan." cta="Book a growth call" />

      <Related title="Related capabilities" items={[
        { to: "/services/digital-marketing/google-ads", label: "Google Ads", blurb: "Search intent as the conversion engine." },
        { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Creative led demand generation." },
        { to: "/services/seo", label: "SEO", blurb: "Compounding organic traffic underneath the paid layer." },
      ]} />
    </PageShell>
  );
}
