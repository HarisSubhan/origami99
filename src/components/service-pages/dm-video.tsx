import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Video, Film, Scissors, Music, Camera } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Digital Marketing" parentTo="/services/digital-marketing" current="Video Editing and Production" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Film className="h-3.5 w-3.5" /> Video
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Video that earns its slot,
            <span className="block text-primary">not decorates a feed.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Ads, brand films, tutorials and short form, shot and edited by a team that thinks in retention curves before they think in colour grades.
          </p>
        </div>

        {/* Signature: NLE timeline */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-[#0b0d12] p-4 shadow-2xl">
          <div className="text-[10px] uppercase tracking-widest text-white/60 mb-3">Edit timeline</div>
          <div className="space-y-1.5 text-[10px] font-mono">
            {[
              { t: "V2", segs: [{ s: 0, w: 20, c: "bg-blue-500" }, { s: 55, w: 25, c: "bg-blue-500" }] },
              { t: "V1", segs: [{ s: 0, w: 100, c: "bg-primary/70" }] },
              { t: "A1", segs: [{ s: 0, w: 100, c: "bg-emerald-500/70" }] },
              { t: "A2", segs: [{ s: 30, w: 45, c: "bg-amber-500/70" }] },
            ].map((track) => (
              <div key={track.t} className="grid grid-cols-[30px_1fr] gap-2 items-center">
                <span className="text-white/40">{track.t}</span>
                <div className="relative h-6 rounded bg-white/5">
                  {track.segs.map((s, i) => <div key={i} className={`absolute h-full rounded ${s.c}`} style={{ left: `${s.s}%`, width: `${s.w}%` }} />)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[9px] text-white/40 font-mono px-9">
            <span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span><span>01:00</span>
          </div>
        </div>
      </HeroWrap>

      {/* CATEGORY MENU */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="What we produce" title="Five video formats, briefed differently, edited differently." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Video, n: "Short form ads", d: "9:16 for TikTok, Reels, Shorts. Hook in 1.2s, cut every 1 to 2s." },
              { icon: Camera, n: "Founder pieces", d: "Talking head with b roll. For LinkedIn and About pages." },
              { icon: Film, n: "Brand films", d: "60 to 120 second stories. For campaigns and homepage heroes." },
              { icon: Scissors, n: "Product demos", d: "Screen capture with voice over. For SaaS and marketplaces." },
              { icon: Music, n: "Case studies", d: "Interview led. Customer voice with data overlays." },
            ].map(({ icon: Icon, n, d }) => (
              <div key={n} className="rounded-2xl border border-border/60 bg-card p-5">
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-semibold">{n}</div>
                <p className="mt-1 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE PRO SHOOT POST */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Three phases, each with its own trap." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { p: "Pre production", trap: "Under briefed. A day on set costs the same whether the script is ready or not.", days: "3 to 7 days" },
              { p: "Production", trap: "Under shot. We plan five extra angles per scene so post has options.", days: "1 to 3 days" },
              { p: "Post production", trap: "Over polished. Iteration and cuts matter more than a hero grade.", days: "5 to 10 days" },
            ].map((p) => (
              <Panel key={p.p}>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.p}</div>
                <div className="mt-2 font-semibold">{p.days}</div>
                <p className="mt-3 text-sm"><span className="text-muted-foreground">Common trap: </span>{p.trap}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLE MATRIX */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="From one shoot" title="How one shoot day becomes 30 pieces of content." />
          <div className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              { r: "9:16", uses: "TikTok, Reels, Shorts, Stories", count: "12 cuts" },
              { r: "1:1", uses: "Feed posts, LinkedIn", count: "6 cuts" },
              { r: "16:9", uses: "YouTube, site hero, sales deck", count: "4 cuts" },
              { r: "Static", uses: "Thumbnails, quote cards, ad statics", count: "10 assets" },
            ].map((f) => (
              <div key={f.r} className="rounded-xl border border-border/60 bg-card p-4 text-center">
                <div className="mx-auto w-full aspect-square bg-primary/10 rounded flex items-center justify-center font-bold text-primary">{f.r}</div>
                <div className="mt-3 text-xs text-muted-foreground">{f.uses}</div>
                <div className="mt-1 text-sm font-semibold">{f.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Video questions we get on discovery." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Do you shoot or just edit?", a: "Both. In studio in our locations, on location for shoots that need it, and edit only when clients already have footage." },
            { q: "How many revisions?", a: "Two rounds included on ads, three on brand films. Anything beyond usually points to an unclear brief on our side. We fix that upstream." },
            { q: "Can you match our brand?", a: "Yes. We work from a brand kit or build one from your site if needed. Grade, motion and type stay consistent across formats." },
            { q: "Do you handle voice over and music?", a: "Yes. In house voice over pool, licensed music library and original composition when the project justifies it." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us a script or a rough idea. We will send back a shot list." cta="Start a video project" />

      <Related title="Related capabilities" items={[
        { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Where most of these edits are distributed." },
        { to: "/services/digital-marketing/tiktok-short-form-ads", label: "TikTok and Short Form", blurb: "The format short form was built for." },
        { to: "/services/brand-identity", label: "Brand Identity", blurb: "The visual system video should extend." },
      ]} />
    </PageShell>
  );
}
