import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { ShowroomStage } from "./work/ShowroomStage";
import { Filmstrip } from "./work/Filmstrip";
import { MobileDeck } from "./work/MobileDeck";
import { useIsMobile } from "@/hooks/use-mobile";
import { CATEGORIES, projects, projectDiscipline, type Category, type Discipline } from "./work/data";

const COUNTERS = [
  { value: "480+", label: "Builds shipped" },
  { value: "5", label: "Countries on the team" },
  { value: "11", label: "Years building" },
  { value: "99.9%", label: "Uptime we hold" },
];

export function Work({ initialFilter, lockFilter, discipline }: {
  initialFilter?: Exclude<Category, "All">;
  lockFilter?: boolean;
  discipline?: Discipline;
} = {}) {
  const [filter, setFilter] = useState<Category>(initialFilter ?? "All");
  const isMobile = useIsMobile();
  const [reduced, setReduced] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [idx, setIdx] = useState(0);

  const list = useMemo(() => {
    const base = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return discipline ? base.filter((p) => projectDiscipline(p) === discipline) : base;
  }, [filter, discipline]);

  const total = list.length;
  const safeIdx = total ? Math.min(idx, total - 1) : 0;
  const active = list[safeIdx];
  const next = total ? list[(safeIdx + 1) % total] : undefined;

  useEffect(() => { setIdx(0); }, [filter, discipline]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  }, []);

  const go = useCallback((delta: number) => {
    setIdx((v) => (total ? (v + delta + total) % total : 0));
  }, [total]);

  // stills advance on a steady timer
  useEffect(() => {
    if (!autoAdvance || reduced || isMobile || !active) return;
    const t = setTimeout(() => go(1), 5200);
    return () => clearTimeout(t);
  }, [autoAdvance, reduced, isMobile, active, go]);

  useEffect(() => {
    if (isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      const el = document.getElementById("work");
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      if (e.key === "ArrowRight") { go(1); }
      else if (e.key === "ArrowLeft") { go(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, isMobile]);

  return (
    <section id="work" className="relative overflow-hidden bg-section-grad py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg-soft opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral sm:text-sm">
            <Sparkles className="h-3.5 w-3.5" /> The live showroom
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-6xl">
            Real builds, running right now.{" "}
            <span className="text-coral">Watch them work.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg">
            Every frame below is a site or platform we shipped for a paying client, captured from the live product. Hundreds more sit behind NDAs and white label agreements.
          </p>
        </div>

        {/* Proof counters */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COUNTERS.map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-card/50 px-4 py-3 backdrop-blur"
            >
              <div className="font-display text-2xl font-black text-coral sm:text-3xl">{c.value}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        {!lockFilter && (
          <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 snap-start rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  filter === c
                    ? "border-coral bg-coral text-white"
                    : "border-border bg-card/50 text-foreground/70 backdrop-blur hover:border-coral/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {total === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">No projects in this category yet.</p>
        ) : isMobile ? (
          <div className="mt-8">
            <MobileDeck items={list} reduced={reduced} />
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-border bg-card/30 p-4 backdrop-blur sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
              {/* Index rail */}
              <div className="hidden lg:flex lg:flex-col">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Index · {total} builds
                </div>
                <div className="no-scrollbar max-h-[520px] space-y-0.5 overflow-y-auto pr-1">
                  {list.map((p, i) => {
                    const on = i === safeIdx;
                    return (
                      <button
                        key={p.slug}
                        onClick={() => { setIdx(i); }}
                        className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${
                          on ? "bg-coral/10 text-foreground" : "text-muted-foreground hover:bg-foreground/5"
                        }`}
                      >
                        <span className={`font-mono text-[10px] ${on ? "text-coral" : "opacity-50"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-xs font-semibold">{p.client}</span>
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${on ? "bg-coral" : "bg-transparent"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stage */}
              <div>
                {active && (
                  <ShowroomStage
                    project={active}
                    next={next}
                    index={safeIdx}
                    total={total}
                    autoAdvance={autoAdvance && !reduced}
                    onToggleAuto={() => setAutoAdvance((v) => !v)}
                    onEnded={() => go(1)}
                    reduced={reduced}
                  />
                )}
              </div>
            </div>

            {/* Filmstrip archive */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  The archive
                </div>
                <div className="text-[10px] text-muted-foreground">Click any frame to play it</div>
              </div>
              <Filmstrip
                items={list}
                activeSlug={active?.slug}
                onPick={(slug) => setIdx(list.findIndex((p) => p.slug === slug))}
              />
            </div>
          </div>
        )}

        {/* Conversion CTA */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold sm:text-base">See something close to what you are building?</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Fixed quote and a roadmap in your inbox inside 24 hours.</div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-coral-grad px-5 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
