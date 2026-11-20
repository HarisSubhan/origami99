import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { Target, Search, DollarSign, MousePointer2 } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Digital Marketing" parentTo="/services/digital-marketing" current="Google Ads" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Target className="h-3.5 w-3.5" /> Google Ads
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Buy demand that already exists,
              <span className="block text-primary">for less than your competitors pay.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Google Ads is not a creative discipline. It is an intent auction, an offer test, and a data pipeline. We treat it as all three.
            </p>
          </div>

          {/* Signature: SERP mock */}
          <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">plumber san jose emergency</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="rounded-lg border border-primary/40 bg-primary/5 p-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary mb-1">Sponsored</div>
                <div className="text-primary font-semibold text-sm">A1 Emergency Plumbing · 24/7</div>
                <div className="text-xs text-muted-foreground">a1plumbing.com · Book in 30 seconds</div>
                <div className="text-xs mt-1">Licensed plumbers in San Jose. Same day dispatch, upfront pricing.</div>
                <div className="mt-2 flex gap-2 text-[10px]"><span className="px-1.5 py-0.5 bg-muted rounded">Book online</span><span className="px-1.5 py-0.5 bg-muted rounded">Reviews</span><span className="px-1.5 py-0.5 bg-muted rounded">Pricing</span></div>
              </div>
              <div className="rounded-lg p-3">
                <div className="text-sm text-muted-foreground">Organic result 1</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Below the fold on mobile</div>
              </div>
            </div>
          </div>
        </div>
      </HeroWrap>

      {/* CAMPAIGN TREE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="How a real account is structured" title="Campaign, ad group, keyword, ad. In that order, without exceptions." align="center" />
          <div className="mt-12 rounded-2xl border border-border/60 bg-card p-6">
            <div className="text-center mb-6">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-4 py-2 font-semibold text-sm">Account</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Search · Emergency", "Search · Booking", "Performance Max"].map((c) => (
                <div key={c}>
                  <div className="rounded-lg bg-primary/20 border border-primary/40 p-2 text-center text-xs font-semibold mb-2">{c}</div>
                  <div className="space-y-1.5 text-[10px]">
                    {[1,2,3].map(i => (
                      <div key={i} className="rounded bg-muted p-2">
                        <div className="font-semibold">Ad group {i}</div>
                        <div className="text-muted-foreground mt-0.5">5 to 10 tightly themed keywords</div>
                        <div className="mt-1 flex gap-1"><span className="px-1 bg-background rounded">RSA</span><span className="px-1 bg-background rounded">Sitelinks</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATCH TYPE TABLE */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Match types, in the modern era." sub="Google has moved most volume to broad match. That is fine when you know what to negate. Dangerous otherwise." />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50"><tr className="text-left"><th className="p-3">Match type</th><th className="p-3">Trigger</th><th className="p-3">Use when</th></tr></thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Exact [emergency plumber]", "Very close variants of the term", "Bottom funnel, high intent, protected budget"],
                  ["Phrase \"emergency plumber\"", "Queries containing the meaning", "Category coverage with intent guardrails"],
                  ["Broad emergency plumber", "Anything Google decides is related", "Only with strict negatives and daily audit"],
                ].map((r) => (
                  <tr key={r[0]}><td className="p-3 font-mono text-xs">{r[0]}</td><td className="p-3 text-muted-foreground">{r[1]}</td><td className="p-3">{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONVERSION TRACKING MAP */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="The half no one wants to do" title="A real conversion event map. Enhanced conversions, offline imports, the works." />
          <div className="mt-10 space-y-2">
            {[
              { e: "Form submit", v: "Micro", w: "$5", n: "Fires client side, deduped by email hash" },
              { e: "Qualified lead", v: "Meso", w: "$40", n: "Server side from CRM after SDR call" },
              { e: "Booked meeting", v: "Meso", w: "$120", n: "Server side, back to Google via offline import" },
              { e: "Closed won", v: "Macro", w: "$1,800", n: "Deal stage, 30 to 90 day delay, matched by gclid" },
            ].map((r, i) => (
              <div key={r.e} className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <div className="flex-1"><div className="font-semibold flex items-center gap-2">{r.e}<Chip>{r.v}</Chip></div><div className="text-xs text-muted-foreground mt-0.5">{r.n}</div></div>
                <div className="font-mono text-primary font-bold">{r.w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUDGET LOGIC */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="How we allocate budget across an account." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { n: "Brand + protected", pct: "15%", note: "Cheap, close rate high, keeps competitors off your name" },
              { n: "Non brand core", pct: "60%", note: "Where the growth comes from" },
              { n: "Discovery and test", pct: "25%", note: "New keyword themes, PMax, new geos" },
            ].map((r) => (
              <Panel key={r.n}>
                <div className="text-3xl font-bold text-primary">{r.pct}</div>
                <div className="mt-2 font-semibold">{r.n}</div>
                <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Questions from founders and marketing leads." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "What is a realistic starting budget?", a: "For most B2B, three thousand dollars a month is the floor to generate a real signal. For local services or ecommerce, one thousand can move the needle. Below that, the account learns too slowly." },
            { q: "Should we run Performance Max?", a: "Yes, in the right slot. With a strong asset library and clean conversion signals, PMax is efficient. Without them, it becomes a black box that spends your budget on brand impressions you were already going to win." },
            { q: "How long until we know it is working?", a: "Six weeks. Two to gather learning data, two to optimise, two to prove trend. Anyone promising results in the first fortnight is not showing you the whole picture." },
            { q: "Do you handle landing pages?", a: "Yes. Ad quality without page quality is money wasted. Our marketing engagements include landing page work as standard." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us your account. We will send back a spend audit within a week." cta="Request an account audit" />

      <Related title="Related capabilities" items={[
        { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Paid social for creative led categories." },
        { to: "/services/digital-marketing/full-funnel-digital-marketing", label: "Full Funnel Marketing", blurb: "Where Google Ads sits inside a wider plan." },
        { to: "/services/seo", label: "SEO", blurb: "Organic search that reduces long term paid dependency." },
      ]} />
    </PageShell>
  );
}
