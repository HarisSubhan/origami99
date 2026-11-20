import { useEffect, useRef, useState, lazy, Suspense, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Plus, Minus,
  ShieldCheck, Clock, Award, Zap, Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { Testimonials } from "@/components/site/Testimonials";
import { Work } from "@/components/site/Work";
import type { Variant } from "./Scene3D";
import { CapabilityConsole } from "./CapabilityConsole";
import type { ServiceDef } from "@/lib/services-data";
import caseSoftware from "@/assets/services/case-software.jpg";
import caseWeb from "@/assets/services/case-web.jpg";
import caseMarketing from "@/assets/services/case-marketing.jpg";
import caseSeo from "@/assets/services/case-seo.jpg";
import caseBrand from "@/assets/services/case-brand.jpg";

const caseImages: Record<Variant, string> = {
  software: caseSoftware,
  web: caseWeb,
  marketing: caseMarketing,
  seo: caseSeo,
  brand: caseBrand,
};

const Scene3D = lazy(() => import("./Scene3D").then((m) => ({ default: m.Scene3D })));

function useInView<T extends HTMLElement>(rootMargin = "200px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [inView, rootMargin]);
  return { ref, inView };
}

type PremiumPageProps = {
  service: ServiceDef;
  variant: Variant;
  eyebrow: string;
  metrics: { value: string; label: string }[];
  pricing: { name: string; blurb: string; features: string[]; featured?: boolean }[];
  problem: { headline: string; body: string; stakes: string[] };
  workFilter?: "Software" | "Web" | "WordPress" | "Ecommerce" | "SEO" | "Local SEO" | "Healthcare";
  workDiscipline?: "software" | "web" | "seo" | "marketing" | "brand";
  extraSection?: ReactNode;
};

const visualCopy: Record<Variant, { label: string; title: string; items: string[]; axis: string }> = {
  software: {
    label: "Product command layer",
    title: "A living system of apps, data, roles and releases.",
    axis: "Architecture, design system, API mesh, mobile, dashboard, deployment",
    items: ["SaaS", "ERP", "Mobile", "Cloud"],
  },
  web: {
    label: "Conversion interface lab",
    title: "Screens, CMS, commerce and speed budgets moving as one.",
    axis: "Brand story, technical SEO, Core Web Vitals, CMS, analytics, CRO",
    items: ["React", "Shopify", "WordPress", "Framer"],
  },
  marketing: {
    label: "Revenue orbit engine",
    title: "Creative, media, attribution and landing pages tuned to profit.",
    axis: "Google, Meta, short form video, lifecycle, CRO, reporting",
    items: ["ROAS", "CPA", "CTR", "LTV"],
  },
  seo: {
    label: "Search authority map",
    title: "Technical foundations, content clusters and authority signals rising together.",
    axis: "Crawl, index, rank, earn links, refresh, convert",
    items: ["Audit", "Schema", "Content", "Links"],
  },
  brand: {
    label: "Identity system forge",
    title: "Strategy, symbols, type, color and rollout assets in one coherent world.",
    axis: "Positioning, logo, typography, palette, motion, guidelines",
    items: ["Mark", "Voice", "Type", "Launch"],
  },
};

const heroCopy: Record<Variant, { title: string; accent: string }> = {
  software: {
    title: "Custom software your business runs on",
    accent: "Designed to scale",
  },
  web: {
    title: "Websites that sell before the first call",
    accent: "Built to rank",
  },
  marketing: {
    title: "Growth systems for profitable demand",
    accent: "Creative that converts",
  },
  seo: {
    title: "Search visibility that becomes pipeline",
    accent: "Rank with intent",
  },
  brand: {
    title: "Brand systems buyers remember",
    accent: "Identity that scales",
  },
};

function HeroInstrument({ variant }: { variant: Variant }) {
  const v = visualCopy[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
      style={{ perspective: 1400 }}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotateY: [-8, 8, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="relative min-h-[520px] rounded-[2rem] border border-border bg-card/45 p-6 shadow-glow backdrop-blur-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--coral)_20%,transparent),transparent_38%)]" />
        <div className="relative flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <span>{v.label}</span>
          <span className="h-2 w-2 rounded-full bg-coral shadow-glow" />
        </div>
        <div className="relative mt-8 grid grid-cols-2 gap-3">
          {v.items.map((item, i) => (
            <motion.div
              key={item}
              animate={{ y: [0, i % 2 ? 12 : -12, 0], rotateZ: [0, i % 2 ? 2 : -2, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-border bg-background/65 p-4 shadow-soft"
              style={{ transform: `translateZ(${40 + i * 20}px)` }}
            >
              <div className="h-20 rounded-xl border border-coral/25 bg-coral/10">
                <div className="m-3 h-2 w-16 rounded-full bg-coral/60" />
                <div className="mx-3 mt-3 grid grid-cols-3 gap-1.5">
                  <span className="h-8 rounded bg-foreground/10" />
                  <span className="h-8 rounded bg-coral/30" />
                  <span className="h-8 rounded bg-foreground/10" />
                </div>
              </div>
              <div className="mt-3 font-display text-lg font-bold text-foreground">{item}</div>
            </motion.div>
          ))}
        </div>
        <div className="relative mt-6 rounded-2xl border border-border bg-background/70 p-5">
          <div className="text-2xl font-bold leading-tight text-foreground">{v.title}</div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full rounded-full bg-coral"
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.axis}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PremiumServicePage(props: PremiumPageProps) {
  const { service, variant, eyebrow, metrics, pricing, problem, workFilter, workDiscipline } = props;
  const hero = heroCopy[variant];
  const subs = service.subServices ?? [];
  const tools = service.tools ?? service.tech.map((t) => ({ name: t }));
  const faqs = service.faqs ?? [];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  const { ref: heroRef, inView: heroInView } = useInView<HTMLElement>("0px");
  const shouldRender3D = heroInView && !isMobile;


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* ============ HERO (uniform w/ homepage) ============ */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-section-grad pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 noise"
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" />

          {shouldRender3D && (
            <Suspense fallback={null}>
              <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 pointer-events-none">
                <Scene3D variant={variant} />
              </motion.div>
            </Suspense>
          )}
          {isMobile && (
            <>
              <motion.div aria-hidden animate={{ y: [0, -22, 0], rotate: [45, 60, 45] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 right-[8%] w-28 h-28 bg-coral-grad diamond rounded-2xl shadow-glow" />
              <motion.div aria-hidden animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-24 left-[6%] w-24 h-24 bg-foreground/5 border border-foreground/15 rounded-full backdrop-blur" />
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 w-full">
            <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-coral text-sm font-semibold mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                {eyebrow}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 sm:mt-6 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.98] tracking-tight text-balance text-foreground"
              >
                {hero.title}.<br />
                <span className="relative inline-block text-coral" style={{ textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }}>
                  {hero.accent}.
                  <motion.svg
                    viewBox="0 0 300 14" className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.8 }}
                  >
                    <motion.path d="M2 9 C 80 2, 220 2, 298 9" stroke="var(--coral)" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                {service.hero}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/75"
              >
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> NDA and DPA signed before kickoff</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-coral" /> First demo within two weeks</span>
                <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-coral" /> Senior team, no hand offs</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a href="#contact" className="group inline-flex items-center gap-2 bg-coral-grad text-white px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform text-base">
                  Book a Growth Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur transition-colors">
                  Explore Capabilities
                </a>
              </motion.div>
            </div>
            <HeroInstrument variant={variant} />
            </div>
          </div>
        </section>

        {/* ============ PROBLEM / STAKES ============ */}
        <section className="relative py-20 sm:py-28 bg-background overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
              <div>
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> The real cost of getting this wrong
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  {problem.headline}
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {problem.body}
                </p>
              </div>
              <div className="space-y-3">
                {problem.stakes.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/60 backdrop-blur"
                  >
                    <div className="h-8 w-8 rounded-lg bg-coral/10 border border-coral/25 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-coral" />
                    </div>
                    <span className="text-sm font-medium text-foreground pt-0.5">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ METRICS BAND (theme-safe) ============ */}
        <section className="relative py-16 sm:py-20 surface-band overflow-hidden border-y">
          <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="text-5xl lg:text-6xl font-black text-coral font-display leading-none">
                    {m.value}
                  </div>
                  <div className="mt-2 h-0.5 w-10 bg-coral-grad rounded-full" />
                  <div className="mt-3 text-sm text-muted-foreground font-medium">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT YOU GET (sub services) ============ */}
        {subs.length > 0 && variant === "software" && <CapabilityConsole subs={subs} />}
        {subs.length > 0 && variant !== "software" && (
          <section id="services" className="relative py-24 sm:py-32 bg-section-grad overflow-hidden">
            <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
            <div className="absolute top-20 -right-32 w-[30rem] h-[30rem] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> Everything under one roof
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  One senior team. <span className="text-coral">Every capability you need.</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  Stop stitching together freelancers and agencies. Every service below runs on the same roadmap, same standards, same accountability.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                {subs.map((s, i) => {
                  const featured = i === 0;
                  const sparkPaths = [
                    "M0 24 L20 20 L40 22 L60 12 L80 15 L100 6",
                    "M0 18 L20 22 L40 14 L60 16 L80 8 L100 10",
                    "M0 26 L20 18 L40 20 L60 10 L80 14 L100 4",
                  ];
                  const tags = (tools ?? []).slice(i * 2, i * 2 + 3).map((t) => t.name).filter(Boolean);
                  return (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: (i % 4) * 0.06 }}
                      whileHover={{ y: -6 }}
                      className={`group relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all overflow-hidden ${featured ? "sm:col-span-2 lg:row-span-2 bg-gradient-to-br from-card/80 to-coral/5" : ""}`}
                    >
                      {(() => {
                        const inner = (
                          <>
                            <div className="absolute -top-16 -right-16 w-40 h-40 bg-coral/0 group-hover:bg-coral/20 rounded-full blur-3xl transition-all duration-500" />
                            <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,0%),color-mix(in_oklab,var(--coral)_15%,transparent),transparent_50%)]" />
                            <div className="relative flex h-full flex-col p-6">
                              <div className="flex items-start justify-between gap-3">
                                <div className={`rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform ${featured ? "h-14 w-14" : "h-12 w-12"}`}>
                                  <s.icon className={featured ? "h-6 w-6 text-white" : "h-5 w-5 text-white"} />
                                </div>
                                <svg viewBox="0 0 100 30" className="w-20 h-8 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden>
                                  <path d={sparkPaths[i % sparkPaths.length]} fill="none" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                              <h3 className={`mt-4 font-bold text-foreground ${featured ? "text-2xl" : "text-lg"}`}>{s.title}</h3>
                              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                              {featured && (
                                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                    <span>{visualCopy[variant].label}</span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                                  </div>
                                  <div className="mt-3 grid grid-cols-4 gap-2">
                                    {visualCopy[variant].items.map((it) => (
                                      <div key={it} className="rounded-lg border border-coral/25 bg-coral/10 px-2 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-coral">
                                        {it}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                                    <motion.div className="h-full w-1/3 rounded-full bg-coral" animate={{ x: ["-120%", "220%"] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
                                  </div>
                                </div>
                              )}
                              {tags.length > 0 && (
                                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                                  {tags.map((t) => (
                                    <span key={t} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-foreground/5 border border-border text-foreground/70">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {s.href && (
                                <div className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-coral">
                                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                              )}
                            </div>
                          </>
                        );
                        return s.href ? (
                          <Link to={s.href} className="block h-full">{inner}</Link>
                        ) : (
                          <div className="block h-full">{inner}</div>
                        );
                      })()}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============ TOOLS CLOUD ============ */}
        <section className="relative py-24 bg-background overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Our stack
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Tools we <span className="text-coral">work with.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Best in class, battle tested. Chosen to fit your team and your roadmap, never the other way around.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-card/70 backdrop-blur border border-border text-foreground font-semibold text-sm hover:border-coral/60 hover:text-coral hover:shadow-glow transition-all cursor-default"
                >
                  {t.name}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROCESS TIMELINE ============ */}
        <section className="relative py-24 bg-section-grad overflow-hidden">
          <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> How we ship
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Five steps. <span className="text-coral">Zero surprises.</span>
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
                  className="relative rounded-3xl p-6 bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all"
                >
                  <div className="absolute -top-3 -right-3 h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center text-white text-sm font-bold shadow-glow">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 mt-2 pr-8">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {props.extraSection}

        {/* ============ CASE SPOTLIGHT ============ */}
        {service.caseSpotlight && (
          <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
            <div className="absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
              <div className="max-w-2xl mb-12">
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> Proof in the wild
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  Real client. <span className="text-coral">Real numbers.</span>
                </h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card/70 backdrop-blur-xl shadow-glow"
              >
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative overflow-hidden bg-coral/5 min-h-[380px] lg:min-h-[520px]">
                    <img
                      src={caseImages[variant]}
                      alt={`${service.caseSpotlight.client} case study`}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-background/85 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full bg-coral animate-pulse" /> Live case study
                    </div>
                  </div>
                  <div className="relative p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-coral">Client</div>
                      <div className="mt-1 text-3xl lg:text-4xl font-black text-foreground">{service.caseSpotlight.client}</div>
                      <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {service.caseSpotlight.story}
                      </p>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {service.caseSpotlight.metrics.map((m) => (
                        <div key={m.k}>
                          <div className="text-3xl lg:text-4xl font-black text-coral font-display leading-none">{m.k}</div>
                          <div className="mt-2 text-xs text-muted-foreground font-medium leading-snug">{m.v}</div>
                        </div>
                      ))}
                    </div>
                    <a href="#contact" className="mt-8 group inline-flex items-center gap-2 text-coral font-semibold text-sm">
                      Get results like these <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ============ DELIVERABLES CHECKLIST ============ */}
        {service.deliverables && service.deliverables.length > 0 && (
          <section className="relative py-24 bg-section-grad overflow-hidden">
            <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-coral/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                <div>
                  <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                    <span className="h-2 w-2 bg-coral diamond" /> What lands on your drive
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                    Every deliverable. <span className="text-coral">Nothing hidden.</span>
                  </h2>
                  <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                    No vague scopes, no surprise line items. Every engagement ships with this exact list of assets, all yours, all documented.
                  </p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-coral-grad text-white px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
                    Book a scoping call <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/70 backdrop-blur hover:border-coral/40 transition-colors"
                    >
                      <div className="h-8 w-8 rounded-lg bg-coral/10 border border-coral/25 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-coral" />
                      </div>
                      <span className="text-sm font-medium text-foreground pt-0.5 leading-snug">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============ GUARANTEES BAND ============ */}
        {service.guarantees && service.guarantees.length > 0 && (
          <section className="relative py-20 bg-background overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
              <div className="max-w-2xl mb-12 text-center mx-auto">
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> The risk lives with us
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                  How we <span className="text-coral">de risk your bet.</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {service.guarantees.map((g, i) => (
                  <motion.div
                    key={g.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative rounded-3xl p-7 bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow mb-5">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{g.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ WORK GALLERY (filtered per service) ============ */}
        <Work initialFilter={workFilter} lockFilter discipline={workDiscipline} />

        {/* ============ TESTIMONIALS ============ */}
        <Testimonials />

        {/* ============ PRICING ============ */}
        <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
          <div className="absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl mb-14 text-center mx-auto">
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                <span className="h-2 w-2 bg-coral diamond" /> Engagement models
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Pick the model that fits <span className="text-coral">your ambition.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {pricing.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    p.featured
                      ? "bg-coral-grad text-white border-coral shadow-glow scale-[1.02]"
                      : "bg-card/70 backdrop-blur-xl border-border hover:border-coral/40"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-coral text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-soft border border-border">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold ${p.featured ? "text-white" : "text-foreground"}`}>{p.name}</h3>
                  <p className={`mt-2 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`}>{p.blurb}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${p.featured ? "text-white" : "text-coral"}`} />
                        <span className={p.featured ? "text-white/95" : "text-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all ${
                      p.featured
                        ? "bg-background text-coral hover:scale-105"
                        : "bg-foreground text-background hover:bg-coral hover:text-white"
                    }`}
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        {faqs.length > 0 && (
          <section className="relative py-24 bg-section-grad">
            <div className="mx-auto max-w-3xl px-5 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
                  <span className="h-2 w-2 bg-coral diamond" /> Common questions
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                  Everything you want to <span className="text-coral">know.</span>
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q} className="rounded-2xl overflow-hidden border border-border bg-card/70 backdrop-blur">
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
        )}

        {/* ============ FINAL CTA + CONTACT ============ */}
        <div className="relative overflow-hidden bg-section-grad noise">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
          <motion.div aria-hidden animate={{ y: [0, -18, 0], rotate: [45, 60, 45] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 right-[6%] w-20 h-20 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block" />
          <motion.div aria-hidden animate={{ y: [0, 14, 0], rotate: [45, 30, 45] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-24 left-[6%] w-16 h-16 bg-card/70 backdrop-blur diamond rounded-xl border border-border hidden md:block" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 sm:pt-28 text-center">
            <span className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-coral" /></span>
              Two spots open this month
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tight text-balance text-foreground">
              Ready to build <span className="relative inline-block text-coral" style={{ textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }}>something that ships?</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us where you want to go. We reply within one business day with a clear next step and a written estimate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:engage@origami99.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-border text-foreground hover:bg-card/70 backdrop-blur transition-colors">
                engage@origami99.com <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-foreground/75">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> NDA before we talk</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-coral" /> Reply in one business day</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-coral" /> 450 plus brands shipped</span>
              <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-coral" /> Senior team on your call</span>
            </div>
          </div>

          <Contact />
        </div>

      </main>
      <Footer />
    </div>
  );
}
