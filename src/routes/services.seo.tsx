import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Search,
  TrendingUp,
  Target,
  Globe2,
  FileText,
  Link2,
  ShoppingBag,
  Building2,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Award,
  Users,
  Shield,
  Zap,
  LineChart,
  Plus,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Testimonials } from "@/components/site/Testimonials";
import { Scene3D } from "@/components/service3d/Scene3D";

export const Route = createFileRoute("/services/seo")({
  head: () => {
    const url = "https://ai-spark-engine-11.lovable.app/services/seo";
    const title = "SEO Services, Origami99";
    const description = "Technical SEO, content, authority building, local search and ecommerce SEO. Rank higher, generate qualified leads and grow revenue with Origami99.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO Services",
            description,
            provider: { "@type": "Organization", name: "Origami99", url: "https://ai-spark-engine-11.lovable.app" },
            areaServed: ["PK", "SA", "AE", "CA", "US"],
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: SeoLandingPage,
});

/* ------------------------------ Data ------------------------------ */

const seoServices = [
  {
    icon: Shield,
    title: "Technical SEO",
    desc: "Crawlability, indexing, Core Web Vitals, structured data, site architecture and JavaScript SEO done at an enterprise level.",
    outcomes: ["Faster indexing", "Higher crawl budget", "Better page experience scores"],
  },
  {
    icon: FileText,
    title: "On Page SEO",
    desc: "Keyword mapping, intent matched content, internal linking, schema markup and metadata that actually convert clicks.",
    outcomes: ["Higher CTR from SERPs", "More featured snippets", "Improved topical authority"],
  },
  {
    icon: Link2,
    title: "Authority SEO",
    desc: "Clean link acquisition, digital PR, brand mentions and authority building from real, relevant publications.",
    outcomes: ["Stronger domain authority", "Referral traffic", "Long term ranking lift"],
  },
  {
    icon: Globe2,
    title: "Local SEO",
    desc: "Google Business Profile optimization, local citations, review strategy and geo targeted landing pages.",
    outcomes: ["More map pack visibility", "Phone calls and directions", "Higher local market share"],
  },
  {
    icon: FileText,
    title: "Content SEO",
    desc: "Content strategy, editorial calendars, topical clusters and long form articles built around real search demand.",
    outcomes: ["Compounding organic traffic", "Pipeline ready leads", "Brand authority"],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce SEO",
    desc: "Category and product page optimization, faceted navigation, schema, and merchandising aligned with buyer intent.",
    outcomes: ["More qualified shoppers", "Higher AOV from organic", "Reduced paid-traffic dependency"],
  },
  {
    icon: Building2,
    title: "Enterprise SEO",
    desc: "Programmatic SEO, multi region and multilingual strategy, governance and dashboards for large content estates.",
    outcomes: ["Scaled rankings at portfolio level", "Cross team SEO ops", "Executive grade reporting"],
  },
];

const process = [
  { step: "01", title: "SEO Audit", desc: "Deep technical, content and backlink audit benchmarked against your top 5 competitors.", icon: Search },
  { step: "02", title: "Strategy", desc: "Keyword universe, content roadmap, link plan and KPI targets tied to revenue.", icon: Target },
  { step: "03", title: "Optimization", desc: "Technical fixes, on page implementation, schema and Core Web Vitals improvements.", icon: Zap },
  { step: "04", title: "Content", desc: "Editorial production calibrated to search intent and conversion stage.", icon: FileText },
  { step: "05", title: "Authority", desc: "Digital PR, niche relevant link acquisition and brand signals.", icon: Award },
  { step: "06", title: "Reporting", desc: "Transparent dashboards, monthly reviews and quarterly business reviews.", icon: BarChart3 },
];

const results = [
  { label: "Average traffic growth", value: "+312%", sub: "in 12 months" },
  { label: "Qualified leads generated", value: "+248%", sub: "YoY across cohort" },
  { label: "Keywords ranked top 10", value: "18.4k+", sub: "across clients" },
  { label: "Conversion rate lift", value: "+87%", sub: "after CRO + SEO" },
];

const whyUs = [
  { icon: Users, title: "Senior team", desc: "Strategists, technical SEOs, content leads and link specialists, no juniors learning on your account." },
  { icon: LineChart, title: "Tied to revenue", desc: "We track rankings only because they create pipeline. Every report ties activity to leads and revenue." },
  { icon: Shield, title: "100% clean methods", desc: "No PBNs, no thin AI content, no shortcuts that risk penalties. Built for long term compounding." },
  { icon: Sparkles, title: "Custom strategy", desc: "No templated playbooks. Strategy is built around your market, ICP, sales cycle and margins." },
  { icon: BarChart3, title: "Transparent reporting", desc: "Live dashboards, async loom updates, and monthly working sessions with decision-makers." },
  { icon: Award, title: "Proven across industries", desc: "SaaS, ecommerce, healthcare, real estate, fintech, manufacturing and B2B services." },
];

export const faqs = [
  { q: "How long until I see SEO results?", a: "Most clients see meaningful keyword movement within 60 to 90 days and material traffic and lead growth between months 4 and 6. SEO compounds, month 12 typically delivers 3 to 5 times the traffic of month 4." },
  { q: "Do you guarantee #1 rankings?", a: "No serious SEO agency does because Google does not allow guarantees. We do guarantee transparent reporting, senior execution, and measurable progress against the KPIs we set together." },
  { q: "What is included in the monthly retainer?", a: "Technical SEO, on page optimization, content production, link acquisition, conversion tracking, dashboards, monthly reviews and dedicated support. Scope is tailored per client." },
  { q: "Will you work with my internal team?", a: "Absolutely. We frequently embed with internal marketing, content and dev teams, providing strategy, specialist execution and review capacity without replacing your team." },
  { q: "Do you handle content writing?", a: "Yes. We have internal editors and subject matter writers. Every piece is briefed for intent, fact checked, optimized and reviewed before publishing." },
  { q: "What industries do you specialize in?", a: "SaaS, B2B services, ecommerce, healthcare, real estate, fintech and enterprise. We are industry agnostic on execution, strategy is tailored per vertical." },
  { q: "Can I cancel anytime?", a: "Yes. Retainers are monthly after the initial three month strategy and foundation phase. We earn the relationship every month." },
];

/* ------------------------------ Page ------------------------------ */

function SeoLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhySeo />
        <ServicesBreakdown />
        <ProcessTimeline />
        <Achievements />
        <ResultsBand />
        <WhyChooseUs />
        <FAQSection />
        <LeadForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------ Sections ------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-grad text-foreground pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 noise">
      <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block opacity-80 pointer-events-none">
        <Scene3D variant="seo" />
      </div>
      <motion.div
        aria-hidden
        className="absolute top-32 right-[8%] w-24 h-24 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block"
        animate={{ y: [0, -18, 0], rotate: [45, 60, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-24 left-[6%] w-16 h-16 bg-foreground/10 rounded-full backdrop-blur hidden md:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/70 hover:text-coral text-sm font-semibold mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="h-3.5 w-3.5 text-coral" />
              SEO that compounds
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance"
            >
              Rank higher. Generate leads. <span className="text-coral">Grow revenue.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Origami 99 delivers data driven SEO that turns search demand into pipeline. Technical SEO, content, link acquisition and conversion, engineered to compound month after month.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 grid sm:grid-cols-2 gap-2 max-w-xl text-sm text-foreground/80"
            >
              {[
                "Senior strategists, no juniors",
                "100% clean methodology",
                "Transparent monthly reporting",
                "Performance tied to revenue",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-coral shrink-0" /> {f}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#lead-form" className="group inline-flex items-center gap-2 bg-coral-grad px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
                Get a Free SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border border-border hover:bg-card/70 transition-colors">
                See Our Process
              </a>
            </motion.div>
          </div>

          {/* Hero visual: animated SERP/ranking mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border p-6 shadow-glow overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 h-7 rounded-md bg-background/70 flex items-center px-3 text-xs text-muted-foreground">
                  <Search className="h-3.5 w-3.5 mr-2" /> your brand + service
                </div>
              </div>

              {/* Ranking rows */}
              <div className="space-y-2">
                {[
                  { label: "Your brand, Service page", pos: 1, color: "from-coral to-coral/60" },
                  { label: "Comparison guide", pos: 2 },
                  { label: "Industry blog mention", pos: 3 },
                  { label: "Case study landing", pos: 4 },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-xl ${i === 0 ? "bg-coral/15 border border-coral/30" : "bg-background/60 border border-border"}`}
                  >
                    <div className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs font-bold ${i === 0 ? "bg-coral-grad text-primary-foreground shadow-glow" : "bg-card text-muted-foreground"}`}>
                      #{row.pos}
                    </div>
                    <div className="flex-1 text-sm text-foreground font-medium truncate">{row.label}</div>
                    {i === 0 && <TrendingUp className="h-4 w-4 text-coral" />}
                  </motion.div>
                ))}
              </div>

              {/* mini chart */}
              <div className="mt-5 p-4 rounded-xl bg-background/60 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Organic traffic</span>
                  <span className="text-xs text-coral font-bold">+312%</span>
                </div>
                <svg viewBox="0 0 200 60" className="w-full h-14">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, delay: 0.8 }}
                    d="M0,50 L20,46 L40,42 L60,38 L80,30 L100,28 L120,22 L140,18 L160,12 L180,8 L200,4"
                    stroke="var(--coral)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M0,50 L20,46 L40,42 L60,38 L80,30 L100,28 L120,22 L140,18 L160,12 L180,8 L200,4 L200,60 L0,60 Z" fill="url(#g1)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhySeo() {
  const items = [
    { icon: TrendingUp, title: "Compounding growth", desc: "Unlike ads, organic traffic compounds. Every page, link and optimization keeps working long after it ships." },
    { icon: Target, title: "High intent leads", desc: "Search captures buyers in active research and decision mode, converting at 3 to 5 times social and display." },
    { icon: BarChart3, title: "Predictable ROI", desc: "Lower CAC over time, less dependence on paid budgets, and a moat competitors cannot outspend overnight." },
  ];
  return (
    <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Why SEO matters
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            The most cost-effective <span className="text-coral">growth channel</span> ever built.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            53% of all website traffic comes from organic search. Done right, SEO delivers compounding pipeline at a fraction of paid CAC.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-coral-grad flex items-center justify-center mb-4 shadow-glow">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesBreakdown() {
  return (
    <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Full-stack SEO
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Every lever that moves <span className="text-coral">rankings & revenue.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {seoServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
            >
              <div className="h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center mb-4 shadow-glow">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-coral transition-colors">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-coral shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section id="process" className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Our process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            A proven <span className="text-coral">six step framework</span> from audit to authority.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative glass rounded-3xl p-6 hover:border-coral/40 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-coral font-display text-3xl font-bold">{p.step}</div>
                <div className="h-10 w-10 rounded-xl bg-coral/15 flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-coral" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Client wins / achievements */
const winStories = [
  {
    tag: "Home services",
    client: "Multi city HVAC brand",
    headline: "8k to 94k monthly organic clicks in 9 months",
    detail: "Full technical rebuild, 62 city landing pages, and a link engine that lifted DR from 12 to 41.",
    metric: "11.7×",
    metricLabel: "organic traffic",
  },
  {
    tag: "E commerce D2C",
    client: "Modest fashion Shopify brand",
    headline: "4.2× organic revenue, 38% CAC reduction",
    detail: "Category and PDP optimization, schema, and a content engine ranking for high intent buyer queries.",
    metric: "4.2×",
    metricLabel: "organic revenue",
  },
  {
    tag: "Local services",
    client: "Regional plumbing group",
    headline: "Number one map pack in 6 cities for money keywords",
    detail: "GBP optimization, review velocity, geo pages, and citation cleanup across 240 directories.",
    metric: "#1",
    metricLabel: "in 6 cities",
  },
];

const bigNumbers = [
  { value: "18,400+", label: "Keywords ranked in top 10" },
  { value: "4,200+",  label: "Backlinks earned (DR 30+)" },
  { value: "+27 DR",  label: "Average domain rating lift" },
  { value: "1,850+",  label: "Pieces of content shipped" },
];

const methodology = [
  { n: "01", t: "Deep audit",    d: "Crawl, log file, content, backlinks, competitors, and revenue attribution." },
  { n: "02", t: "Fix foundations", d: "Core Web Vitals, IA, internal links, schema, indexation and canonicals." },
  { n: "03", t: "Grow authority", d: "Programmatic clusters, editorial hubs, digital PR and niche links." },
  { n: "04", t: "Compound",       d: "Monthly refreshes, cannibalization audits, and CRO on the money pages." },
];

function Achievements() {
  return (
    <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="absolute top-24 right-1/4 w-96 h-40 bg-coral/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Client wins
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Real brands. <span className="text-coral">Real rankings.</span> Real revenue.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Anonymized snapshots from active retainers. Every number here came from Search Console, GA4 and Ahrefs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {winStories.map((w, i) => (
            <motion.div
              key={w.headline}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, rotateY: 3 }}
              style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
              className="relative glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-coral">{w.tag}</span>
              <div className="mt-2 text-xs text-muted-foreground">{w.client}</div>
              <h3 className="mt-3 text-lg font-bold leading-tight">{w.headline}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.detail}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-baseline gap-2">
                <span className="text-3xl font-bold text-coral">{w.metric}</span>
                <span className="text-xs text-muted-foreground">{w.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big numbers strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {bigNumbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/40 p-5 text-center hover:border-coral/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-coral">{n.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{n.label}</div>
            </motion.div>
          ))}
        </div>

        {/* How we do it */}
        <div className="mt-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-coral mb-4">How we do it</div>
          <div className="grid md:grid-cols-4 gap-4">
            {methodology.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl border border-border bg-card/40 p-5"
              >
                <div className="text-coral font-display text-2xl font-bold">{m.n}</div>
                <div className="mt-2 font-bold text-foreground">{m.t}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsBand() {
  return (
    <section className="relative py-20 sm:py-24 surface-band text-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-35" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Results
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Numbers from <span className="text-coral">real client engagements.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-6 bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all"
            >
              <div className="text-4xl sm:text-5xl font-bold text-coral mb-2">{r.value}</div>
              <div className="text-sm font-semibold text-foreground">{r.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Why Origami 99
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            An SEO partner that operates like an <span className="text-coral">extension of your team.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
            >
              <div className="h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center mb-4 shadow-glow">
                <w.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Everything you want to know about SEO.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className="font-semibold text-foreground text-base sm:text-lg">{f.q}</span>
                <motion.div animate={{ rotate: open === i ? 45 : 0 }} className="h-9 w-9 rounded-full bg-coral/15 flex items-center justify-center shrink-0">
                  <Plus className="h-5 w-5 text-coral" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="lead-form" className="relative py-20 sm:py-24 surface-cta text-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
              <span className="h-2 w-2 bg-coral diamond" /> Free SEO Audit
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Get a free SEO strategy <span className="text-coral">call.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Tell us about your business. We audit your site, identify quick wins, and walk you through a ninety day plan, at no cost.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/85">
              {[
                "Technical SEO audit of your site",
                "Competitor gap analysis",
                "Keyword and content opportunity report",
                "Custom ninety day SEO roadmap",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-coral" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl surface-cta-card p-6 sm:p-8 shadow-glow"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-coral-grad flex items-center justify-center mb-4 shadow-glow">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thanks. We will be in touch.</h3>
                <p className="text-muted-foreground">A senior strategist will email you within one business day.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Company Name" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" />
                <div className="sm:col-span-2">
                  <Field label="Website URL" name="website" type="url" placeholder="https://" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Monthly Marketing Budget
                  </label>
                  <select
                    name="budget"
                    className="w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/60 transition-colors"
                  >
                    <option className="bg-background">Less than $2,000</option>
                    <option className="bg-background">$2,000 to $5,000</option>
                    <option className="bg-background">$5,000 to $10,000</option>
                    <option className="bg-background">$10,000 to $25,000</option>
                    <option className="bg-background">$25,000+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Tell us about your goals
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/60 transition-colors resize-none"
                    placeholder="What does success look like in 12 months?"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 group inline-flex items-center justify-center gap-2 bg-coral-grad px-6 py-4 rounded-full font-semibold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Get My Free SEO Audit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
                  No spam. Your information is never shared.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/60 transition-colors"
      />
    </div>
  );
}
