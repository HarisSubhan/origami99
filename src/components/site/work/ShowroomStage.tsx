import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Pause, Play } from "lucide-react";
import { BrowserFrame } from "../BrowserFrame";
import type { Project } from "./data";

type Props = {
  project: Project;
  next?: Project;
  index: number;
  total: number;
  autoAdvance: boolean;
  onToggleAuto: () => void;
  onEnded: () => void;
  reduced: boolean;
};

export function ShowroomStage({ project, index, total, autoAdvance, onToggleAuto, reduced }: Props) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, [project.slug]);

  const still = project.shotUrl;

  return (
    <div className="relative">
      <div className="relative">
        <BrowserFrame url={project.domain} aspect="16 / 10" className="shadow-glow">
          <div className="absolute inset-0 bg-[#0b0f1a]">
            {/* still layer, always mounted so there is never a black flash */}
            {still && (
              <img
                key={project.slug}
                src={still}
                alt={`${project.client} website`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out"
                style={{ opacity: shown ? 1 : 0, transform: reduced ? "none" : `scale(${shown ? 1.04 : 1})` }}
                decoding="async"
              />
            )}

            {/* live badge */}
            <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 border border-border">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-coral">
                Shipped build
              </span>
            </div>

            <div className="absolute right-3 top-3 z-10 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 border border-border text-[10px] font-mono text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>
        </BrowserFrame>

        {/* stage rule */}
        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full bg-coral transition-[width] duration-150 ease-linear"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* meta card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
          className="mt-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg sm:text-xl font-bold truncate">{project.client}</h3>
                <span className="shrink-0 rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-coral">
                  {project.category}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            </div>
            {project.outcome && (
              <div className="text-right">
                <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Outcome</div>
                <div className="text-sm sm:text-base font-black text-coral leading-tight">{project.outcome}</div>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.region && (
              <span className="rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                {project.region}
              </span>
            )}
            {project.stack?.map((s) => (
              <span key={s} className="rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] font-mono text-muted-foreground">
                {s}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1.5">
              <button
                onClick={onToggleAuto}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-semibold hover:border-coral/50 transition-colors"
                aria-label={autoAdvance ? "Pause auto play" : "Resume auto play"}
              >
                {autoAdvance ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                {autoAdvance ? "Playing all" : "Paused"}
              </button>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
                <ExternalLink className="h-3 w-3" /> {project.domain}
              </span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
