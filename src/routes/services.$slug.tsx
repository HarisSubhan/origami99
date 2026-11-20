import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Plus, Minus,
  TrendingUp, Users, Zap, ShieldCheck, Clock, Award,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { ScrollStory } from "@/components/site/ScrollStory";
import { SERVICES, getService, LEGACY_REDIRECTS, type ServiceDef } from "@/lib/services-data";

function ClientScrollStory() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <ScrollStory />;
}



export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    const target = LEGACY_REDIRECTS[params.slug];
    if (target) throw redirect({ to: "/services/$slug", params: { slug: target }, replace: true });
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    const url = `https://ai-spark-engine-11.lovable.app/services/${params.slug}`;
    if (!s) return { meta: [{ title: "Service, Origami99" }], links: [{ rel: "canonical", href: url }] };
    const desc = (s.hero || "").slice(0, 158);
    const title = `${s.title}, Origami99`.slice(0, 60);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: desc,
            provider: { "@type": "Organization", name: "Origami99", url: "https://ai-spark-engine-11.lovable.app" },
            areaServed: ["PK", "SA", "AE", "CA", "US"],
            url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Service not found</h1>
        <Link to="/" className="text-coral font-semibold">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <button onClick={reset} className="text-coral font-semibold">Retry</button>
    </div>
  ),
  component: ServicePage,
});

// Category-tuned metrics shown in the results band.
const CATEGORY_METRICS: Record<ServiceDef["category"], { value: string; label: string }[]> = {
  Build: [
    { value: "9 wks", label: "Average time to launch" },
    { value: "99.98%", label: "Production uptime" },
    { value: "180+", label: "Products shipped" },
    { value: "4.9/5", label: "Client satisfaction" },
  ],
  AI: [
    { value: "+312%", label: "Workflow efficiency" },
    { value: "−60%", label: "Support ticket volume" },
    { value: "30 days", label: "Time to first value" },
    { value: "24/7", label: "Always-on automation" },
  ],
  Growth: [
    { value: "+248%", label: "Qualified leads" },
    { value: "4.2x", label: "Average ROAS" },
    { value: "−38%", label: "Cost per acquisition" },
    { value: "90 days", label: "To measurable lift" },
  ],
  Create: [
    { value: "5x", label: "Inbound after relaunch" },
    { value: "+220%", label: "Engagement uplift" },
    { value: "2 wks", label: "First concepts" },
    { value: "100%", label: "Brand consistency" },
  ],
  Scale: [
    { value: "99.99%", label: "SLA reliability" },
    { value: "−42%", label: "Cloud spend saved" },
    { value: "10M+", label: "Daily requests handled" },
    { value: "Zero", label: "Downtime migrations" },
  ],
};

const DEFAULT_FAQS = [
  { q: "How quickly can we get started?", a: "Most engagements kick off within a week. We run a paid 2-hour scoping session, then move into discovery on day one." },
  { q: "Who actually does the work?", a: "Senior specialists only. The people on your calls are the people writing the code, designing the screens, and running the campaigns, no juniors hidden behind account managers." },
  { q: "How do you price projects?", a: "Fixed-scope for defined deliverables, monthly retainers for ongoing work, and hybrid models for product builds. You'll always see a written estimate before anything starts." },
  { q: "Do you sign NDAs and DPAs?", a: "Yes, mutual NDA, DPA, and IP assignment are signed before any sensitive material is shared. Enterprise-friendly contracts are our default." },
  { q: "What happens after launch?", a: "We offer SLA-backed support, quarterly reviews, and dedicated growth squads. You own all code, assets, and accounts from day one." },
];

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) throw notFound();
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const metrics = CATEGORY_METRICS[service.category];
  const faqs = service.faqs && service.faqs.length > 0 ? service.faqs : DEFAULT_FAQS;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const deliverables = [
    "Discovery workshop & scoping document",
    "Detailed roadmap with weekly milestones",
    "Senior team dedicated to your account",
    "Live demos every two weeks",
    "Production handover with documentation",
    "Post-launch SLA & quarterly reviews",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden surface-cta text-white pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 noise">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <motion.div
            aria-hidden
            className="absolute top-32 right-[8%] w-28 h-28 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block"
            animate={{ y: [0, -20, 0], rotate: [45, 60, 45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-20 left-[6%] w-20 h-20 bg-white/10 border border-white/20 rounded-full hidden md:block"
            animate={{ y: [0, 16, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-coral text-sm font-semibold mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  <Sparkles className="h-3.5 w-3.5 text-coral" />
                  {service.category} · Premium Service
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance"
                >
                  {service.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 text-lg sm:text-xl text-coral font-semibold"
                >
                  {service.tagline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
                >
                  {service.hero}
                </motion.p>

                {/* Trust strip */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80"
                >
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> NDA & DPA signed before kickoff</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-coral" /> First demo within 2 weeks</span>
                  <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-coral" /> Senior team, no hand-offs</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a href="#contact" className="group inline-flex items-center gap-2 bg-coral-grad px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#process" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors">
                    See Our Process
                  </a>
                </motion.div>
              </div>

              {/* Hero visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-8 shadow-glow flex items-center justify-center overflow-hidden">
                  <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 grid-bg opacity-50" />
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-12 rounded-2xl bg-coral/25 blur-3xl" />
                  <motion.div animate={{ rotate: [0, 6, -6, 0], y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-3xl bg-coral-grad flex items-center justify-center shadow-glow">
                    <Icon className="h-20 w-20 sm:h-24 sm:w-24 text-white" strokeWidth={1.5} />
                  </motion.div>
                  {service.tech.slice(0, 4).map((t, i) => {
                    const positions = [
                      { top: "8%", left: "8%" },
                      { top: "10%", right: "6%" },
                      { bottom: "12%", left: "6%" },
                      { bottom: "8%", right: "8%" },
                    ];
                    return (
                      <motion.div
                        key={t}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                        transition={{ delay: 0.6 + i * 0.1, y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" } }}
                        className="absolute bg-background/90 backdrop-blur border border-border text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-soft"
                        style={positions[i] as React.CSSProperties}
                      >
                        {t}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== Results band ===== */}
        <section className="relative py-16 sm:py-20 bg-background border-y border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-coral font-display leading-none">
                    {m.value}
                  </div>
                  <div className="mt-2 h-0.5 w-10 mx-auto sm:mx-0 bg-coral-grad rounded-full" />
                  <div className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Benefits ===== */}
        <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
          <div className="absolute inset-0 grid-bg-soft opacity-40" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Why it matters
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Business impact, <span className="text-coral">not buzzwords.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
                >
                  <div className="h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== What you get / deliverables ===== */}
        <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> What you get
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                  Everything required to <span className="text-coral">ship and scale.</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                  Every engagement includes the scoping, delivery, and post-launch coverage your team needs. No surprises, no scope creep, no upsells half-way through.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Dedicated squad</div>
                      <div className="text-xs text-muted-foreground">Senior specialists only</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Weekly demos</div>
                      <div className="text-xs text-muted-foreground">Always shippable progress</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">ROI tracking</div>
                      <div className="text-xs text-muted-foreground">Tied to business KPIs</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/50 hover:border-coral/40 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{d}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Process ===== */}
        <section id="process" className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
          <div className="absolute inset-0 grid-bg-soft opacity-30" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Our Process
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                A clear <span className="text-coral">{service.process.length}-step roadmap</span> from kickoff to launch.
              </h2>
            </div>
            <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-5">
              {service.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative glass rounded-3xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
                >
                  <div className="absolute -top-3 -right-3 h-10 w-10 rounded-2xl bg-coral-grad flex items-center justify-center text-white text-xs font-bold shadow-glow">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 mt-2 pr-8">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Tech stack ===== */}
        <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Technologies
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Tools & frameworks we <span className="text-coral">work with.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Best-in-class, battle-tested stacks chosen to fit your team, never the other way around.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="px-5 py-2.5 rounded-full bg-card/60 backdrop-blur border border-border text-foreground font-semibold text-sm hover:border-coral/50 hover:text-coral transition-colors cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {service.slug === "web-development" && <ClientScrollStory />}





        {/* ===== FAQ ===== */}
        <section className="relative py-20 sm:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Frequently Asked
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Questions, <span className="text-coral">answered.</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="glass rounded-2xl overflow-hidden border border-border">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-card/40 transition-colors"
                    >
                      <span className="font-semibold text-foreground">{f.q}</span>
                      <span className="h-8 w-8 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0">
                        {open ? <Minus className="h-4 w-4 text-coral" /> : <Plus className="h-4 w-4 text-coral" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== Related ===== */}
        {related.length > 0 && (
          <section className="relative py-20 sm:py-24 bg-section-grad overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Related services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group glass rounded-3xl p-5 hover:border-coral/40 hover:shadow-glow transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-coral-grad flex items-center justify-center">
                        <r.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-coral transition-colors">{r.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
