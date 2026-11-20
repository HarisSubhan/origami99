import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Bot, TrendingUp, Clock, Target, DollarSign, Zap, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";

export const Route = createFileRoute("/guides/ai-for-small-business")({
  head: () => ({
    meta: [
      { title: "AI Marketing for Small Businesses · The 2026 Guide by Origami99" },
      { name: "description", content: "What a modern digital marketing agency actually does for small businesses in 2026. How AI-powered SEO, ads, content and automation cut cost per lead and compound revenue. A practical guide from Origami99." },
      { property: "og:title", content: "AI Marketing for Small Businesses · The 2026 Guide" },
      { property: "og:description", content: "How AI-driven marketing helps small businesses scale. Real workflows, real numbers, no fluff." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/guides/ai-for-small-business` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Marketing for Small Businesses · The 2026 Guide" },
      { name: "twitter:description", content: "How AI-driven marketing helps small businesses scale. Real workflows, real numbers, no fluff." },
      { name: "keywords", content: "digital marketing for small businesses, ai marketing agency, what does a digital marketing agency do, small business seo, ai marketing 2026" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/guides/ai-for-small-business` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "AI Marketing for Small Businesses · The 2026 Guide",
          description: "How AI-driven marketing helps small businesses scale in 2026, from a practitioner agency.",
          author: { "@type": "Organization", name: "Origami99" },
          publisher: { "@type": "Organization", name: "Origami99" },
          datePublished: "2026-07-14",
          dateModified: "2026-07-14",
          mainEntityOfPage: `${SITE_URL}/guides/ai-for-small-business`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What does a digital marketing agency do for small businesses?", acceptedAnswer: { "@type": "Answer", text: "A modern agency runs the four levers that move revenue: SEO and local search, paid media, content and email, and the website itself. In 2026 the work is executed through AI-assisted workflows, so a small business gets senior-level output at a fraction of legacy agency cost." } },
            { "@type": "Question", name: "How much does AI marketing cost for a small business?", acceptedAnswer: { "@type": "Answer", text: "Typical monthly retainers for AI-first agencies range from USD 1,500 to USD 6,000 depending on scope. Project-based site builds range from USD 4,000 to USD 25,000. Compare that to the USD 80,000 to USD 150,000 a year of a single in-house marketer." } },
            { "@type": "Question", name: "How fast do results show up?", acceptedAnswer: { "@type": "Answer", text: "Paid media and Google Business Profile work usually show measurable lift inside 30 days. Organic SEO compounds from month three. AI automations that recover abandoned carts or re-engage cold leads often pay for the retainer in the first month." } },
            { "@type": "Question", name: "Do I still need my own team?", acceptedAnswer: { "@type": "Answer", text: "For most small businesses under USD 10M revenue, no. A senior agency team plus AI workflows outperforms a junior in-house hire at lower cost. Once you cross USD 10M, blend the two." } },
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-widest text-coral">Guide · 12 min read</div>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-balance">
            AI marketing for small businesses. What actually moves the needle in 2026.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A practitioner guide from Origami99. No fluff, no jargon, no theoretical frameworks. Just the exact plays we run for owner-operator businesses to compound revenue with AI-assisted marketing.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: TrendingUp, k: "3.4x", v: "avg. ROAS" },
              { icon: Clock, k: "72%", v: "less busywork" },
              { icon: DollarSign, k: "42%", v: "lower CAC" },
              { icon: Target, k: "90d", v: "to compounding" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-4">
                <s.icon className="h-5 w-5 text-coral" />
                <div className="mt-2 text-2xl font-black">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <Section title="What a digital marketing agency actually does for a small business">
            <p>Strip away the agency-speak and there are four levers that move revenue for any small business:</p>
            <ol className="mt-4 space-y-3 list-decimal list-inside">
              <li><b>Search visibility</b>. Being the first result when your buyer types the problem into Google, ChatGPT or Perplexity.</li>
              <li><b>Paid acquisition</b>. Buying the right click at the right price on Google, Meta and TikTok.</li>
              <li><b>Owned channels</b>. Email, SMS and content that costs nothing to send twice.</li>
              <li><b>The conversion surface</b>. The website, landing page, booking flow or checkout that turns a click into cash.</li>
            </ol>
            <p className="mt-4">A good agency runs all four in one loop. A bad agency sells you one and calls the rest "out of scope". Everything below assumes the loop.</p>
          </Section>

          <Section title="Why AI changes the math for small businesses">
            <p>Ten years ago, small businesses lost to enterprises on marketing because enterprises could afford ten people to do the work. In 2026 that gap has collapsed. A senior operator plus modern AI tooling produces the output of a five-person team.</p>
            <p className="mt-4">This is what a small business now gets for the price of a mid-level marketing hire:</p>
            <div className="mt-5 grid gap-3">
              {[
                "Programmatic SEO that publishes 200 location or service pages in a week, ranked and indexed",
                "AI-assisted keyword clustering across thousands of queries, mapped to your service list",
                "Creative variants for Meta and Google generated overnight and A/B tested by an automation, not an intern",
                "Support and lead-qualification agents that answer at 2am and route hot leads to your inbox",
                "Content and email drafted from your voice, edited by a senior writer, published on schedule",
              ].map((l) => (
                <div key={l} className="flex gap-3 items-start rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                  <span className="text-sm">{l}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="The 90-day playbook we run">
            <p>Every new small business retainer follows the same 90-day arc. It is boring, and that is the point.</p>

            <Phase n="Days 1 to 14" title="Instrument and audit">
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Analytics, conversion tracking, GA4, Meta Pixel, call tracking, CRM plumbed correctly.</li>
                <li>Google Business Profile audited and optimised, reviews flow live.</li>
                <li>Full site technical crawl, Core Web Vitals fixed, schema added.</li>
                <li>Keyword landscape mapped, competitors profiled, first-cluster picked.</li>
              </ul>
            </Phase>

            <Phase n="Days 15 to 45" title="Ship the foundation">
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Landing pages for the top five commercial-intent keywords, live and tracked.</li>
                <li>Google Ads and Meta accounts restructured, low-intent spend cut, budget re-pointed.</li>
                <li>Email welcome sequence, abandoned cart or abandoned quote flow, review request flow.</li>
                <li>Local SEO pack live for every service area you serve.</li>
              </ul>
            </Phase>

            <Phase n="Days 46 to 90" title="Compound">
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Weekly content cadence live on your blog and LinkedIn or Instagram.</li>
                <li>AI agents deployed for lead qualification, booking, and after-hours support.</li>
                <li>Retargeting and lookalike audiences running on your first-party data.</li>
                <li>Monthly report: ranked keywords, booked calls, closed revenue, cost per booked call.</li>
              </ul>
            </Phase>
          </Section>

          <Section title="What it should cost">
            <p>Ballpark 2026 pricing for AI-first agencies working with small businesses under USD 10M revenue:</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Scope</th>
                    <th className="text-left px-4 py-3 font-semibold">Range · USD / month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3">Local SEO + Google Business Profile only</td><td className="px-4 py-3">750 to 1,500</td></tr>
                  <tr><td className="px-4 py-3">Local SEO + Google Ads</td><td className="px-4 py-3">1,500 to 3,000</td></tr>
                  <tr><td className="px-4 py-3">Full-funnel with content and email</td><td className="px-4 py-3">3,000 to 6,000</td></tr>
                  <tr><td className="px-4 py-3">Full-funnel + custom AI automations</td><td className="px-4 py-3">5,000 to 10,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">One-off site or platform builds are separate, USD 4k to 25k for most small businesses.</p>
          </Section>

          <Section title="How to pick the right agency">
            <div className="grid gap-3">
              {[
                { g: "Green flag", t: "Names their tools. Says exactly which AI stack they use and why." },
                { g: "Green flag", t: "Ties every deliverable to a metric you can see in your own dashboard." },
                { g: "Green flag", t: "Assigns one senior operator to your account. Not a project manager, an operator." },
                { g: "Red flag", t: "Twelve-month contracts with quarterly get-out clauses only." },
                { g: "Red flag", t: "Vanity KPIs. Impressions, reach, followers, brand awareness. Ignore." },
                { g: "Red flag", t: "Cannot show you a live dashboard from a current client without redacting numbers." },
              ].map((row) => (
                <div key={row.t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${row.g === "Green flag" ? "bg-coral/15 text-coral border border-coral/30" : "bg-foreground/5 text-muted-foreground border border-border"}`}>{row.g}</span>
                  <span className="text-sm">{row.t}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="The Origami99 take">
            <p>We built Origami99 to be the agency small businesses actually deserve. One senior team, end to end, across web, mobile, SEO, paid, content and AI automation. Fixed price on the build, transparent monthly fee on the growth, real numbers in your inbox on the first of every month.</p>
            <p className="mt-4">If any of the plays above look like your next 90 days, book a call. We will send you a fixed proposal within 48 hours.</p>

            <div className="mt-8 rounded-3xl border border-coral/30 bg-coral/5 p-8 text-center">
              <Bot className="h-10 w-10 text-coral mx-auto" />
              <div className="mt-4 text-2xl font-black">Get your 90-day plan.</div>
              <p className="mt-2 text-sm text-muted-foreground">Free 20 minute intro call. Fixed proposal within 48 hours. Zero pressure.</p>
              <Link to="/" hash="contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral-grad px-6 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform">
                <Zap className="h-4 w-4" />
                Book my growth call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Section>

          <FAQBlock />
        </article>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}

function Phase({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <div className="text-[11px] font-mono uppercase tracking-widest text-coral">{n}</div>
      <div className="mt-1 text-lg font-bold">{title}</div>
      <div className="text-sm text-foreground/85">{children}</div>
    </div>
  );
}

function FAQBlock() {
  const items = [
    { q: "What does a digital marketing agency do for small businesses?", a: "The four levers: search visibility, paid acquisition, owned channels (email/SMS/content), and the conversion surface. A good agency runs all four in one loop." },
    { q: "How much does AI marketing cost for a small business?", a: "USD 1,500 to 6,000 per month for most retainers. USD 4k to 25k for one-off builds. Compared to USD 80k plus for a single in-house marketer." },
    { q: "How fast do results show up?", a: "Paid media and Google Business Profile lift inside 30 days. Organic SEO compounds from month three. AI automations often pay for the retainer in month one." },
    { q: "Do I still need my own marketing team?", a: "Under USD 10M revenue, usually no. A senior agency team plus AI workflows outperforms a junior in-house hire at lower cost." },
  ];
  return (
    <section className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Common questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((it) => (
          <details key={it.q} className="group rounded-2xl border border-border bg-card p-5 open:shadow-soft">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
              <span className="font-semibold">{it.q}</span>
              <span className="text-coral transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
