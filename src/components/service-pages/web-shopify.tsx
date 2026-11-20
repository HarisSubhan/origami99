import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta, CtaButton } from "./_shared";
import { ShoppingBag, CreditCard, Package, Truck, Search, Star } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Web Development" parentTo="/services/web-development" current="Shopify and Ecommerce" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <ShoppingBag className="h-3.5 w-3.5" /> Ecommerce
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Shopify stores built for
              <span className="block text-primary">purchase intent, not scroll depth.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Every pixel on a store is either helping a buyer complete a purchase or costing you one. We design and engineer with that principle.
            </p>
          </div>

          {/* Signature: purchase funnel */}
          <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Purchase funnel</div>
            {[
              { s: "Landed", pct: 100, w: "w-full", n: "10,000" },
              { s: "Viewed PDP", pct: 45, w: "w-[80%]", n: "4,500" },
              { s: "Added to cart", pct: 12, w: "w-[45%]", n: "1,200" },
              { s: "Reached checkout", pct: 7, w: "w-[30%]", n: "700" },
              { s: "Purchased", pct: 3.2, w: "w-[20%]", n: "320" },
            ].map((r, i) => (
              <div key={r.s} className="mb-2">
                <div className="flex justify-between text-xs mb-1"><span>{r.s}</span><span className="font-mono text-primary">{r.n}</span></div>
                <div className={`h-6 rounded ${i === 0 ? "bg-primary" : "bg-primary/70"} ${r.w} mx-auto`} />
              </div>
            ))}
            <div className="mt-3 text-[11px] text-muted-foreground text-center">Optimising the second and fourth rows pays the most.</div>
          </div>
        </div>
      </HeroWrap>

      {/* PDP ANATOMY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Anatomy of the highest revenue page in your store" title="The product page. Seven decisions, all of them commercial." align="center" />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">🎧</div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<span className="text-xs text-muted-foreground ml-2">2,341 reviews</span></div>
                <div className="text-2xl font-bold">$149 <span className="text-sm text-muted-foreground line-through">$199</span></div>
                <div className="text-xs text-emerald-600">In stock · ships in 24h · free returns</div>
                <button className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold">Add to cart</button>
                <div className="text-xs text-center text-muted-foreground">or 4 × $37.25 with Klarna</div>
              </div>
            </div>
            <ol className="space-y-3 list-decimal list-inside text-sm">
              {[
                ["Hero media", "AVIF gallery under 200 KB, first image LCP eligible."],
                ["Trust signals", "Ratings above the fold, review count with source link."],
                ["Price and urgency", "Real anchor, not a fake strike through. Compliant with EU pricing directive."],
                ["Availability", "Live stock, shipping date and return policy on one line."],
                ["Primary CTA", "Single button, sticky on mobile after scroll."],
                ["Payment options", "BNPL and wallets visible before the buyer clicks."],
                ["Below the fold", "Reviews, comparison, FAQ. Structured data on all three."],
              ].map(([t, d]) => (
                <li key={t} className="p-3 rounded-lg border border-border/60 bg-card"><span className="font-semibold">{t}. </span><span className="text-muted-foreground">{d}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* APP STACK LAYERS */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Your app stack, without the monthly tax." sub="Every app in Shopify has a price, a script tag and a support burden. We audit stacks and cut them by half without losing capability." />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              { c: "Reviews", keep: "Judge.me or Yotpo", cut: "Multiple review widgets" },
              { c: "Loyalty", keep: "Smile or Yotpo, only if margin allows", cut: "Point systems no one redeems" },
              { c: "Bundles", keep: "Native Shopify bundles", cut: "Third party bundlers that break checkout" },
              { c: "Subscriptions", keep: "Recharge or Bold if churn justifies it", cut: "Manual custom flows" },
              { c: "Popups", keep: "Klaviyo native", cut: "Second popup vendor" },
              { c: "Analytics", keep: "GA4 + Shopify + one warehouse pipe", cut: "Six analytics scripts" },
            ].map((r) => (
              <div key={r.c} className="rounded-xl border border-border/60 bg-card p-4">
                <div className="font-semibold mb-2">{r.c}</div>
                <div className="text-xs"><span className="text-emerald-600 font-semibold">Keep: </span><span className="text-muted-foreground">{r.keep}</span></div>
                <div className="text-xs mt-1"><span className="text-red-500 font-semibold">Cut: </span><span className="text-muted-foreground">{r.cut}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKOUT ANATOMY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Where money is left on the table" title="Checkout events, in the order they hurt you." />
          <div className="mt-10 space-y-2">
            {[
              { icon: ShoppingBag, e: "Cart open", loss: "Guest cart lost on tab close, no recovery" },
              { icon: CreditCard, e: "Contact info", loss: "Email typos, no live validation" },
              { icon: Truck, e: "Shipping selection", loss: "Rates surprise the buyer" },
              { icon: Package, e: "Address confirm", loss: "Failed address lookup, manual entry" },
              { icon: CreditCard, e: "Payment", loss: "Wallet not offered, card failure not retried" },
              { icon: Star, e: "Post purchase", loss: "No upsell, no expectation set for delivery" },
            ].map(({ icon: Icon, e, loss }) => (
              <div key={e} className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Icon className="h-5 w-5" /></div>
                <div className="flex-1"><div className="font-semibold">{e}</div><div className="text-sm text-muted-foreground">Common leak: {loss}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADLESS VS THEME */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Theme, custom theme or headless. A quick honest map." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { n: "Stock theme", when: "Under 500k revenue, standard catalogue.", cost: "Weeks, small budget", risk: "Ceiling arrives fast" },
              { n: "Custom Shopify theme (2.0)", when: "Under 5m revenue, brand needs to breathe.", cost: "Six to ten weeks", risk: "Sweet spot for most brands" },
              { n: "Headless Hydrogen", when: "Over 5m revenue, content heavy, global.", cost: "Twelve weeks plus", risk: "Overkill without a real reason" },
            ].map((o) => (
              <Panel key={o.n}>
                <div className="text-lg font-semibold">{o.n}</div>
                <p className="mt-2 text-sm text-muted-foreground">{o.when}</p>
                <div className="mt-3 text-xs"><span className="text-muted-foreground">Cost: </span>{o.cost}</div>
                <div className="text-xs"><span className="text-muted-foreground">Verdict: </span>{o.risk}</div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Ecommerce questions we hear on the first call." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Shopify or WooCommerce?", a: "Shopify for almost everyone. Woo only when you already have a WordPress ecosystem and someone qualified to maintain the infrastructure." },
            { q: "Should we go headless?", a: "Only when the content or performance requirement forces it. A well built 2.0 theme keeps up with headless on most conversion benchmarks and costs less to maintain." },
            { q: "How do you approach speed?", a: "We measure LCP on the PDP first because it drives revenue. Then homepage, then collection. Every commit runs a Lighthouse budget in CI." },
            { q: "Can you help with Klaviyo or ads?", a: "Yes, through our marketing team. Store and marketing work best when the same partner sees both dashboards." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us your store URL. We will send back the five conversion leaks worth fixing this quarter." cta="Request a store audit" />

      <Related title="Related capabilities" items={[
        { to: "/services/web-development/custom-web-development", label: "Custom Web Development", blurb: "For the marketing site that sends traffic to the store." },
        { to: "/services/digital-marketing/meta-ads", label: "Meta Ads", blurb: "Paid social for ecommerce, done properly." },
        { to: "/services/seo", label: "SEO", blurb: "Collection and product page SEO for organic revenue." },
      ]} />
    </PageShell>
  );
}
