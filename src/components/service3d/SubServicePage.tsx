import { lazy, Suspense, useMemo } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, CheckCircle2, XCircle, ArrowLeft, ChevronRight, Sparkles,
  ShieldCheck, Users, Wrench, Layers as LayersIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { SubServicePage as PageData } from "@/lib/sub-services";
import { SUB_SERVICES } from "@/lib/sub-services";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { CtaButton } from "@/components/ui/cta-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SignatureShowcase } from "@/components/service3d/SignatureShowcase";

const Scene3D = lazy(() => import("@/components/service3d/Scene3D").then((m) => ({ default: m.Scene3D })));

const parentLabel: Record<PageData["parent"], { label: string; to: string }> = {
  software: { label: "Software Development", to: "/services/software" },
  "web-development": { label: "Web Development", to: "/services/web-development" },
  "digital-marketing": { label: "Digital Marketing", to: "/services/digital-marketing" },
};

export function SubServicePage({ page }: { page: PageData }) {
  const isMobile = useIsMobile();
  const parent = parentLabel[page.parent];
  const Icon = page.icon;

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    [page.faqs],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ========== HERO ========== */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-section-grad">
        <div className="absolute inset-0 grid-bg-soft opacity-25 pointer-events-none" />
        {!isMobile && (
          <Suspense fallback={null}>
            <div className="absolute inset-0 opacity-70 pointer-events-none">
              <Scene3D variant={page.parent === "digital-marketing" ? "marketing" : page.parent === "web-development" ? "web" : "software"} />
            </div>
          </Suspense>
        )}

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-coral transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              to={parent.to}
              className="hover:text-coral transition-colors"
            >{parent.label}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate">{page.category}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1.5 text-xs font-semibold text-coral">
                <Icon className="h-3.5 w-3.5" /> {page.category}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-5 sm:mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight text-balance"
              >
                {page.title}<br />
                <span className="text-coral">{page.accent}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {page.lede}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-9 flex flex-wrap gap-3">
                <CtaButton as="link" href="#contact">Book a scoping call</CtaButton>
                <CtaButton as="link" href="#deep-dive" variant="secondary" arrow={false}>Read the full breakdown</CtaButton>
              </motion.div>
            </div>

            {/* Hero side card: at a glance */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <SignatureShowcase slug={page.slug} />
              <div className="mt-4 rounded-2xl border border-border bg-card/70 backdrop-blur p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-coral mb-2">Great fit if</div>
                <div className="space-y-2">
                  {page.fit.good.slice(0, 2).map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-coral shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-snug">{g}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="deep-dive" />

      {/* ========== INTRO ========== */}
      <section className="relative py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><span className="h-2 w-2 bg-coral diamond" /> The honest picture</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.intro.heading}</h2>
            <div className="mt-6 space-y-5">
              {page.intro.body.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== WHAT IT IS ========== */}
      <section className="relative py-20 sm:py-24 bg-section-grad">
        <div className="absolute inset-0 grid-bg-soft opacity-25 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><LayersIcon className="h-3 w-3" /> Definition</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-balance">{page.whatItIs.heading}</h2>
            </div>
            <div className="space-y-5">
              {page.whatItIs.body.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">{p}</p>
              ))}
              {page.whatItIs.bullets && (
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {page.whatItIs.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                      <CheckCircle2 className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/85 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ARCHITECTURE / STACK DIAGRAM ========== */}
      <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><Wrench className="h-3 w-3" /> Architecture</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.architecture.heading}</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{page.architecture.body}</p>
          </div>

          <div className="mt-10 relative rounded-[2rem] border border-border bg-card/60 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />
            <div className="relative p-5 sm:p-8 space-y-3">
              {page.architecture.layers.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 items-center p-4 rounded-2xl bg-background/70 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-coral-grad text-white font-bold flex items-center justify-center text-xs shrink-0">L{i + 1}</div>
                    <div className="text-sm font-bold text-foreground uppercase tracking-wide">{layer.name}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((it) => (
                      <span key={it} className="rounded-full border border-coral/25 bg-coral/5 px-3 py-1 text-xs font-semibold text-foreground/85">{it}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES BENTO ========== */}
      <section className="relative py-20 sm:py-24 bg-section-grad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><Sparkles className="h-3 w-3" /> Inside a real build</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.features.heading}</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{page.features.body}</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.features.items.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="group rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 hover:border-coral/40 hover:shadow-glow transition-all"
              >
                <div className="h-10 w-10 rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow mb-4 group-hover:rotate-6 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== APPROACHES ========== */}
      <section className="relative py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><LayersIcon className="h-3 w-3" /> Trade offs</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.approaches.heading}</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{page.approaches.body}</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {page.approaches.options.map((o) => (
              <div key={o.name} className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 hover:border-coral/40 transition-colors">
                <h3 className="text-lg font-bold text-foreground">{o.name}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-coral">Best for</div>
                    <p className="mt-1 text-foreground/85 leading-relaxed">{o.best}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Watch out for</div>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{o.watch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MISTAKES ========== */}
      <section className="relative py-20 sm:py-24 bg-section-grad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><XCircle className="h-3 w-3" /> Reality check</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.mistakes.heading}</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {page.mistakes.items.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 4) * 0.04 }}
                className="flex gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-5"
              >
                <div className="h-8 w-8 rounded-lg bg-coral/15 border border-coral/30 text-coral font-bold flex items-center justify-center text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONSIDERATIONS ========== */}
      <section className="relative py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><ShieldCheck className="h-3 w-3" /> Buyer checklist</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{page.considerations.heading}</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{page.considerations.body}</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.considerations.items.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
                <ShieldCheck className="h-5 w-5 text-coral" />
                <h3 className="mt-3 text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FIT / NOT FOR ========== */}
      <section className="relative py-20 sm:py-24 bg-section-grad">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><Users className="h-3 w-3" /> Who this is for</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">Fit check, honestly.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-coral/25 bg-coral/5 p-6">
              <div className="flex items-center gap-2 text-coral font-bold text-sm uppercase tracking-widest"><CheckCircle2 className="h-4 w-4" /> Great fit if</div>
              <ul className="mt-4 space-y-3">
                {page.fit.good.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <span className="leading-snug">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-6">
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm uppercase tracking-widest"><XCircle className="h-4 w-4" /> Not the right fit if</div>
              <ul className="mt-4 space-y-3">
                {page.fit.notFor.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="leading-snug">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scenarios */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {page.scenarios.map((s) => (
              <div key={s.role} className="rounded-2xl border border-border bg-background/70 backdrop-blur p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-coral">Scenario</div>
                <div className="mt-1 text-base font-bold text-foreground">{s.role}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="relative py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><Sparkles className="h-3 w-3" /> Questions we get weekly</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">Common questions, direct answers.</h2>
          </div>
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card/50 backdrop-blur overflow-hidden">
            {page.faqs.map((f, i) => (
              <details key={i} className="group" open={i === 0}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 sm:p-6 hover:bg-foreground/5">
                  <span className="text-base sm:text-lg font-semibold text-foreground pr-4">{f.q}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-coral transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 sm:px-6 pb-6 -mt-1">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SIBLINGS ========== */}
      <section className="relative py-20 bg-section-grad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase"><LayersIcon className="h-3 w-3" /> Related capabilities</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">More inside {parent.label.toLowerCase()}</h2>
            </div>
            <Link to={parent.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:gap-2.5 transition-all">
              <ArrowLeft className="h-4 w-4" /> {parent.label} overview
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUB_SERVICES.filter((s) => s.parent === page.parent && s.slug !== page.slug).map((s) => {
              const SIcon = s.icon;
              return (
                <Link key={s.slug} to={`/services/${s.slug}` as any} className="group rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-5 hover:border-coral/40 hover:shadow-glow transition-all">
                  <div className="h-9 w-9 rounded-xl bg-coral-grad flex items-center justify-center shadow-glow mb-3 group-hover:rotate-6 transition-transform">
                    <SIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-coral">{s.category}</div>
                  <h3 className="mt-1 text-base font-bold text-foreground leading-snug">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{s.lede}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-coral">
                    Explore <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <div id="contact"><Contact /></div>

      {/* ========== BOTTOM CTA ========== */}
      <section className="relative py-20 sm:py-24 surface-cta overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Ready to talk about your <span className="text-coral">{page.category.toLowerCase()}</span> project?</h2>
          <p className="mt-4 text-muted-foreground text-lg">A senior team, a scoping call in the same week, and a fixed price proposal within 48 hours.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <CtaButton as="link" href="#contact">Book a scoping call</CtaButton>
            <CtaButton
              as="route"
              to={parent.to}
              variant="secondary"
              arrow={false}
            >
              See the {parent.label} overview
            </CtaButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _ArrowRight = ArrowRight;
