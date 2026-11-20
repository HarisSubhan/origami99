import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Megaphone, Users, Heart, ShoppingBag, Layers } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Digital Marketing" parentTo="/services/digital-marketing" current="Meta Ads" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Megaphone className="h-3.5 w-3.5" /> Meta · Instagram · Facebook
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Meta rewards creative volume.
            <span className="block text-primary">We build the volume machine.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Winning on Meta in 2026 is a creative testing problem, not a targeting problem. The algorithm finds the audience. Your job is to feed it enough shots on goal.
          </p>
        </div>

        {/* Signature: creative testing matrix */}
        <div className="mt-14 rounded-2xl border border-border/60 bg-card p-5">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Creative testing matrix, weekly</div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }, (_, i) => {
              const win = [2, 7, 14].includes(i);
              const kill = [1, 5, 9, 13, 17].includes(i);
              return (
                <div key={i} className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[10px] font-semibold ${win ? "bg-primary text-primary-foreground" : kill ? "bg-red-500/10 text-red-500/70 line-through" : "bg-muted"}`}>
                  <div>Ad {i + 1}</div>
                  <div className="text-[9px] opacity-70 mt-0.5">{win ? "scale" : kill ? "kill" : "learn"}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 text-xs text-muted-foreground">Twenty creatives a week. Two winners scale. Five die by Tuesday. The rest inform next week's brief.</div>
        </div>
      </HeroWrap>

      {/* FUNNEL BY OBJECTIVE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Full funnel on Meta" title="Different objectives for different jobs. Not one campaign trying to do everything." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: Users, stage: "Cold", obj: "Traffic or reach", creative: "Hook first three seconds, story led, brand visible early" },
              { icon: Heart, stage: "Warm", obj: "Engagement or lead", creative: "Testimonial, comparison, tutorial, price transparency" },
              { icon: ShoppingBag, stage: "Hot", obj: "Sales or leads", creative: "Direct offer, urgency, retargeting only" },
            ].map(({ icon: Icon, stage, obj, creative }, i) => (
              <div key={stage} className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-center gap-2"><Icon className="h-6 w-6 text-primary" /><Chip>{`Stage ${i + 1}`}</Chip></div>
                <div className="mt-3 text-lg font-semibold">{stage}</div>
                <div className="text-sm"><span className="text-muted-foreground">Objective: </span><span className="font-medium">{obj}</span></div>
                <p className="mt-2 text-sm text-muted-foreground">{creative}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE ANATOMY */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Anatomy of a Meta ad that works." sub="Six frames, in this order, on nearly every winning ad we ship." align="center" />
          <div className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-6">
            {[
              { s: "Hook", d: "Face, motion or pattern break in first 1.2s" },
              { s: "Context", d: "Who this is for and why now" },
              { s: "Proof", d: "Result, testimonial or comparison" },
              { s: "Product", d: "Actual product in use, not a still" },
              { s: "Offer", d: "What they get, in plain words" },
              { s: "CTA", d: "One action, in bold text overlay" },
            ].map(({ s, d }, i) => (
              <div key={s} className="rounded-xl border border-border/60 bg-card p-3 aspect-[3/4] flex flex-col">
                <div className="text-[10px] font-bold text-primary">Frame {i + 1}</div>
                <div className="font-semibold text-sm mt-1">{s}</div>
                <div className="text-xs text-muted-foreground mt-1 flex-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE STRATEGY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Audiences, honestly" title="Advantage plus, broad, or lookalike. The map has changed." />
          <div className="mt-10 space-y-3">
            {[
              { n: "Advantage Plus Shopping", when: "Ecommerce, mature Pixel, 50+ purchases a week", risk: "Cannibalises brand and retargeting if not excluded" },
              { n: "Broad targeting", when: "Category with wide appeal, strong creative library", risk: "Waste at first, converges by week three" },
              { n: "Lookalikes", when: "Niche categories, small seed audiences", risk: "Getting less useful year over year" },
              { n: "Interest targeting", when: "Very specific niches or new markets", risk: "Overlaps and reach caps quickly" },
              { n: "Retargeting", when: "Always on, capped budget, exclusion first mindset", risk: "Chasing already convinced buyers wastes spend" },
            ].map((r) => (
              <div key={r.n} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="font-semibold">{r.n}</div>
                <div className="mt-1 text-sm"><span className="text-muted-foreground">Best when: </span>{r.when}</div>
                <div className="text-sm"><span className="text-muted-foreground">Watch: </span>{r.risk}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="iOS 14+ era tracking, done properly." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Conversions API", "Server side event stream that survives ITP and ATT."],
              ["Event dedup", "Client and server events matched by event ID."],
              ["CAPI Gateway", "For teams without a backend engineer to spare."],
              ["Attribution windows", "7 day click, 1 day view. Nothing longer for optimisation."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-primary" /><span className="font-semibold">{t}</span></div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Meta questions from founders and marketing leads." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "How many creatives do we need each month?", a: "Sixty is a healthy floor for a scaling ecommerce or app account. Twenty is minimum viable. Anything below and the algorithm cannot find a winner fast enough." },
            { q: "Do we still need lookalikes?", a: "Sometimes, in niches. Advantage Plus and broad have made lookalikes less central. We still test them where the seed data is strong." },
            { q: "Should we go video only?", a: "Yes, mostly. Static still works for certain categories. Static plus a subtle motion loop often outperforms both." },
            { q: "Can we use user generated content?", a: "Yes, and you should. UGC blends with the feed and outperforms polished ads in most direct response tests. We help brief creators without becoming a talent agency." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us your ad account. We will send back the three creative angles you are not testing." cta="Get a creative audit" />

      <Related title="Related capabilities" items={[
        { to: "/services/digital-marketing/tiktok-short-form-ads", label: "TikTok and Short Form", blurb: "The other half of the modern paid social plan." },
        { to: "/services/digital-marketing/video-editing-production", label: "Video Editing and Production", blurb: "The creative pipeline that feeds this machine." },
        { to: "/services/digital-marketing/full-funnel-digital-marketing", label: "Full Funnel Marketing", blurb: "Meta inside a wider growth plan." },
      ]} />
    </PageShell>
  );
}
