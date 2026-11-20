import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Lock } from "lucide-react";
import type { ServiceDef } from "@/lib/services-data";
import { ARTEFACTS, artefactKeyFor } from "./capability-artefacts";

type Sub = NonNullable<ServiceDef["subServices"]>[number];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Renders children only once the block scrolls into view, so offscreen SVG animations never run. */
function LazyArtefact({ className, children }: { className?: string; children: (visible: boolean) => React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children(visible)}</div>;
}

const META: Record<string, { readout: string; stats: { k: string; v: string }[]; note: string }> = {
  flow: {
    readout: "Domain model resolved",
    stats: [{ k: "Systems unified", v: "3 to 1" }, { k: "Manual steps removed", v: "up to 80%" }, { k: "Owned by you", v: "100% IP" }],
    note: "We map the way your business actually runs, then build the system around that model instead of forcing your team into someone else's workflow.",
  },
  saas: {
    readout: "Tenants healthy, billing live",
    stats: [{ k: "MVP window", v: "6 weeks" }, { k: "Tenancy", v: "Isolated" }, { k: "Billing", v: "Metered" }],
    note: "Auth, tenancy, entitlements, metering and observability are in the first release, not a phase two that never arrives.",
  },
  mobile: {
    readout: "Flow running, offline queue clear",
    stats: [{ k: "Platforms", v: "iOS + Android" }, { k: "Store pipeline", v: "Automated" }, { k: "Target", v: "Day 30 retention" }],
    note: "We design for the commute, the basement and the dead zone. The app keeps working, then reconciles when the signal returns.",
  },
  design: {
    readout: "Fidelity locked to shipped",
    stats: [{ k: "Deliverable", v: "Code, not slides" }, { k: "Research", v: "5 to 7 interviews" }, { k: "System", v: "Tokens to prod" }],
    note: "The design system lives in your repository from week three. Figma tracks the code, not the other way round.",
  },
  erp: {
    readout: "Event propagated across modules",
    stats: [{ k: "Ledger", v: "Single source" }, { k: "Modules", v: "Finance to HR" }, { k: "Migration", v: "Staged, reversible" }],
    note: "One posted transaction updates finance, stock and reporting in the same breath. No nightly sync, no reconciliation spreadsheet.",
  },
  ai: {
    readout: "Grounded answers, sources attached",
    stats: [{ k: "Retrieval", v: "Your data" }, { k: "Guardrails", v: "Enforced" }, { k: "Tied to", v: "A real KPI" }],
    note: "Assistants and automations that cite their sources and stay inside the boundaries your compliance team signed off.",
  },
  cloud: {
    readout: "All regions green",
    stats: [{ k: "Uptime target", v: "99.99%" }, { k: "Infra", v: "As code" }, { k: "Cost", v: "Tuned monthly" }],
    note: "Architecture sized for the traffic you have, with a documented path to the traffic you are planning for.",
  },
  devops: {
    readout: "Canary passing, promoting",
    stats: [{ k: "Releases", v: "Zero downtime" }, { k: "Rollback", v: "One command" }, { k: "Pipeline", v: "Fully automated" }],
    note: "Shipping stops being an event. It becomes a Tuesday afternoon with a green pipeline and a rollback you never need.",
  },
};

export function CapabilityConsole({ subs, eyebrow = "Everything under one roof" }: { subs: Sub[]; eyebrow?: string }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (locked || reduced || subs.length < 2) return;
    const id = setInterval(() => setActive((a) => (a + 1) % subs.length), 6000);
    return () => clearInterval(id);
  }, [locked, reduced, subs.length]);

  const pick = useCallback((i: number) => {
    setActive(i);
    setLocked(true);
  }, []);

  const onStageMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--py", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, [reduced]);

  if (subs.length === 0) return null;

  const current = subs[active];
  const key = artefactKeyFor(current.title);
  const Art = ARTEFACTS[key];
  const meta = META[key];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-section-grad overflow-hidden">
      <div className="hidden sm:block absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
      <div className="hidden lg:block absolute top-24 -right-40 w-[34rem] h-[34rem] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            One senior team. <span className="text-coral">Every capability you need.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pick a capability and watch what it actually looks like when we build it. Same roadmap, same standards, same accountable people behind every one.
          </p>
        </div>

        {/* ============ DESKTOP CONSOLE ============ */}
        <div className="hidden lg:grid grid-cols-[minmax(0,26rem)_1fr] gap-6 rounded-[2rem] border border-border bg-card/60 backdrop-blur-xl p-4 shadow-glow">
          {/* rail */}
          <div className="rounded-3xl border border-border/70 bg-background/50 p-3">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Capability index</span>
              <span className="flex gap-1">
                {subs.map((_, i) => (
                  <span key={i} className={`h-1.5 w-1.5 rounded-full transition-colors ${i === active ? "bg-coral" : "bg-foreground/15"}`} />
                ))}
              </span>
            </div>
            <ul className="mt-1 space-y-1">
              {subs.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      onMouseEnter={() => pick(i)}
                      onFocus={() => pick(i)}
                      onClick={() => pick(i)}
                      aria-current={isActive}
                      className="relative w-full text-left rounded-2xl px-3 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="cap-active"
                          className="absolute inset-0 rounded-2xl bg-coral/10 border border-coral/40"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${isActive ? "bg-coral-grad shadow-glow" : "bg-foreground/5 border border-border"}`}>
                          <s.icon className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-foreground/60"}`} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-bold leading-snug">{s.title}</span>
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">{s.desc}</span>
                        </span>
                        <span className="text-[10px] font-bold tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* stage */}
          <div
            ref={stageRef}
            onPointerMove={onStageMove}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/60 p-6"
            style={{ backgroundImage: "radial-gradient(420px circle at var(--px,70%) var(--py,20%), color-mix(in oklab, var(--coral) 12%, transparent), transparent 70%)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{meta.readout}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {locked && <Lock className="h-3 w-3" />} Live preview
              </div>
            </div>

            <div className="mt-4 h-[19rem] rounded-2xl border border-border/60 bg-card/40 p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Art reduced={reduced} />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${key}-copy`}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="mt-5"
              >
                <h3 className="text-xl font-bold">{current.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{meta.note}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {meta.stats.map((st) => (
                    <div key={st.k} className="rounded-xl border border-border bg-card/70 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{st.k}</div>
                      <div className="text-sm font-bold text-coral">{st.v}</div>
                    </div>
                  ))}
                  {current.href && (
                    <Link
                      to={current.href as any}
                      className="ml-auto inline-flex items-center gap-2 rounded-xl bg-coral-grad px-4 py-2.5 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      Explore {current.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ============ MOBILE AND TABLET CAROUSEL ============ */}
        <div className="lg:hidden -mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch]">
          {subs.map((s, i) => {
            const k = artefactKeyFor(s.title);
            const A = ARTEFACTS[k];
            const m = META[k];
            const inner = (
              <>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-grad">
                    <s.icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="text-base font-bold leading-snug">{s.title}</h3>
                  </div>
                </div>
                <LazyArtefact className="mt-4 h-44 rounded-2xl border border-border/60 bg-background/50 p-1.5">
                  {(visible) => <A reduced={reduced || !visible} />}
                </LazyArtefact>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {m.stats.slice(0, 2).map((st) => (
                    <span key={st.k} className="rounded-full border border-border bg-foreground/5 px-2.5 py-1 text-[10px] font-semibold text-foreground/70">
                      {st.k}: {st.v}
                    </span>
                  ))}
                </div>
                {s.href && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-coral">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </>
            );
            return (
              <div
                key={s.title}
                className="snap-center shrink-0 w-[82vw] max-w-sm rounded-3xl border border-border bg-card p-5 flex flex-col [content-visibility:auto] [contain-intrinsic-size:420px]"
              >
                {s.href ? <Link to={s.href as any} className="flex h-full flex-col">{inner}</Link> : inner}
              </div>
            );
          })}
        </div>
        <p className="lg:hidden text-center text-xs text-muted-foreground">Swipe to browse every capability</p>

      </div>
    </section>
  );
}
