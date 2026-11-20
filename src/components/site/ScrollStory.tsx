import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { Sparkles, Rocket, LineChart } from "lucide-react";

type Panel = {
  Icon: typeof Sparkles;
  kicker: string;
  title: string;
  body: string;
  accent: string;
};

const panels: Panel[] = [
  {
    Icon: Sparkles,
    kicker: "Discover",
    title: "We map the opportunity in 3D.",
    body: "Immersive workshops, journey audits and live prototypes. You see the product, the funnel and the growth loop before a single line of code ships.",
    accent: "from-coral/40 to-transparent",
  },
  {
    Icon: Rocket,
    kicker: "Build",
    title: "Realistic lighting, real materials, real code.",
    body: "Design systems, WebGL storytelling and production apps. Every interaction rendered with the same care as a AAA game, wired to a system your team can actually run.",
    accent: "from-purple-500/40 to-transparent",
  },
  {
    Icon: LineChart,
    kicker: "Scale",
    title: "Scrollytelling that sells, dashboards that decide.",
    body: "AI copilots, predictive dashboards and campaigns that compound. Immersive, interactive environments that turn attention into pipeline, and pipeline into revenue.",
    accent: "from-emerald-500/40 to-transparent",
  },
];

function ScrollPanel({
  panel,
  progress,
  start,
  end,
  reduce,
}: {
  panel: Panel;
  progress: MotionValue<number>;
  start: number;
  end: number;
  reduce: boolean;
}) {
  const y = useTransform(progress, [start, end], reduce ? [0, 0] : [80, -80]);
  const rotateX = useTransform(progress, [start, end], reduce ? [0, 0] : [18, -8]);
  const scale = useTransform(progress, [start, end], reduce ? [1, 1] : [0.94, 1.02]);
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.1, end - 0.05, end + 0.05],
    [0.35, 1, 1, 0.35],
  );
  const { Icon } = panel;
  return (
    <motion.div
      style={{ y, rotateX, scale, opacity, transformStyle: "preserve-3d" }}
      className="relative mx-auto max-w-4xl mb-10 lg:mb-14 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${panel.accent} opacity-60 pointer-events-none`} />
      <div className="relative grid sm:grid-cols-[auto,1fr] gap-5 sm:gap-8 items-start">
        <div className="h-14 w-14 rounded-2xl bg-coral-grad grid place-items-center shadow-glow">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-[11px] font-mono tracking-widest uppercase text-coral">{panel.kicker}</div>
          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">{panel.title}</h3>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl">{panel.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section
      ref={ref}
      id="scrollstory"
      className="relative bg-section-grad text-foreground overflow-hidden py-24 sm:py-32"
      aria-label="How we work, in three dimensions"
    >
      <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Immersive delivery
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Interactive by default. <span className="text-coral">Three-dimensional</span> by design.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl">
            Scrollytelling, realistic materials and immersive virtual environments, engineered so every visitor feels the product before they buy it.
          </p>
        </div>

        <div className="mt-14 lg:mt-20 relative" style={{ perspective: 1600 }}>
          {mounted
            ? panels.map((p, i) => (
                <ScrollPanel
                  key={p.title}
                  panel={p}
                  progress={scrollYProgress}
                  start={i / panels.length}
                  end={(i + 1) / panels.length}
                  reduce={reduce}
                />
              ))
            : panels.map((p) => (
                <div
                  key={p.title}
                  className="relative mx-auto max-w-4xl mb-10 lg:mb-14 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 pointer-events-none`} />
                  <div className="relative grid sm:grid-cols-[auto,1fr] gap-5 sm:gap-8 items-start">
                    <div className="h-14 w-14 rounded-2xl bg-coral-grad grid place-items-center shadow-glow">
                      <p.Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-coral">{p.kicker}</div>
                      <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">{p.title}</h3>
                      <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl">{p.body}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
