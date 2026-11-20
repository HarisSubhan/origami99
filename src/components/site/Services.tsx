import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  Code2, Globe, Smartphone, Search, Megaphone, Video,
  Brain, Server, Target, Palette, BarChart3, Cloud, ArrowRight,
} from "lucide-react";
import { useMobileAutoScroll } from "@/hooks/use-mobile-autoscroll";

/* ============ Unique animated visuals per service ============ */

const Visual = {
  Code: () => (
    <div className="absolute inset-0 p-4 font-mono text-[10px] leading-relaxed">
      <div className="flex gap-1 mb-2">
        <span className="h-2 w-2 rounded-full bg-coral" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      {[
        ["const ", "ship", " = ", "ai", "(", "'ROI'", ")"],
        ["", "await ", "deploy(", "ship", ")"],
        ["// ", "✓ converted"],
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.4, duration: 0.4 }}
          className="text-foreground/80"
        >
          {line.map((tok, j) => (
            <span
              key={j}
              className={
                tok.startsWith("//")
                  ? "text-emerald-400"
                  : tok.startsWith("'")
                  ? "text-coral"
                  : ["const ", "await ", "function "].includes(tok)
                  ? "text-violet-400"
                  : "text-foreground/85"
              }
            >
              {tok}
            </span>
          ))}
          <span className="animate-blink text-coral">|</span>
        </motion.div>
      ))}
    </div>
  ),

  Browser: () => (
    <div className="absolute inset-0 p-3">
      <div className="h-full w-full rounded-lg bg-foreground/5 border border-foreground/10 overflow-hidden">
        <div className="flex items-center gap-1 px-2 py-1.5 border-b border-foreground/10 bg-foreground/5">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <div className="flex-1 ml-2 h-3 rounded bg-foreground/10" />
        </div>
        <div className="p-2 space-y-1.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            transition={{ duration: 0.8 }}
            className="h-2 rounded bg-coral/60"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-2 rounded bg-foreground/15"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "55%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-2 rounded bg-foreground/15"
          />
          <div className="grid grid-cols-3 gap-1 pt-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="aspect-square rounded bg-gradient-to-br from-coral/40 to-coral/10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  Phone: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-28 rounded-[14px] bg-foreground/10 border-2 border-foreground/20 p-1.5 shadow-glow"
      >
        <div className="h-full w-full rounded-[10px] bg-gradient-to-br from-coral/30 via-foreground/5 to-transparent p-1.5 flex flex-col gap-1">
          <div className="h-1 w-6 rounded mx-auto bg-foreground/30 mb-1" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.6 }} className="h-1.5 rounded bg-coral" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 0.6, delay: 0.2 }} className="h-1.5 rounded bg-foreground/30" />
          <div className="grid grid-cols-2 gap-1 mt-auto">
            <div className="aspect-square rounded bg-coral/60" />
            <div className="aspect-square rounded bg-foreground/20" />
          </div>
        </div>
      </motion.div>
    </div>
  ),

  Brain: () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
      {[[40, 30], [40, 60], [40, 90], [100, 20], [100, 60], [100, 100], [160, 40], [160, 80]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={4}
          fill="var(--coral)"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.3, 1] }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        />
      ))}
      {[
        [40, 30, 100, 20], [40, 30, 100, 60], [40, 60, 100, 20], [40, 60, 100, 60], [40, 60, 100, 100],
        [40, 90, 100, 60], [40, 90, 100, 100], [100, 20, 160, 40], [100, 60, 160, 40], [100, 60, 160, 80], [100, 100, 160, 80],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="var(--coral)" strokeOpacity="0.4" strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.3 + i * 0.04, duration: 0.6 }}
        />
      ))}
    </svg>
  ),

  Search: () => (
    <div className="absolute inset-0 p-4 flex flex-col justify-center gap-2">
      {["origami99, page 1", "best ai agency", "digital marketing"].map((q, i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-2 text-[10px]"
        >
          <span className="text-coral font-bold">#{i + 1}</span>
          <div className="flex-1 h-2 rounded bg-foreground/15 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${100 - i * 18}%` }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
              className="absolute inset-y-0 left-0 bg-coral-grad rounded"
            />
          </div>
        </motion.div>
      ))}
    </div>
  ),

  Target: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {[60, 44, 28, 14].map((s, i) => (
        <motion.div
          key={s}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.12 }}
          className="absolute rounded-full border-2 border-coral"
          style={{ width: `${s}%`, aspectRatio: 1, borderColor: i === 3 ? "var(--coral)" : "color-mix(in oklab, var(--coral) 40%, transparent)", background: i === 3 ? "var(--coral)" : "transparent" }}
        />
      ))}
      <motion.div
        animate={{ x: [-40, 0], y: [-30, 0], rotate: [-30, 0] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-px w-12 bg-foreground/50"
        style={{ transformOrigin: "right" }}
      />
    </div>
  ),

  Megaphone: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <Megaphone className="h-10 w-10 text-coral" />
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          className="absolute h-16 w-16 rounded-full border-2 border-coral"
        />
      ))}
    </div>
  ),

  Video: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-16 w-24 rounded-lg bg-foreground/10 border border-foreground/15 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-coral/30 to-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-7 w-7 rounded-full bg-coral flex items-center justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[5px] border-y-transparent ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-foreground/10">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1.5 }} className="h-full bg-coral" />
        </div>
      </div>
    </div>
  ),

  Palette: () => (
    <div className="absolute inset-0 flex items-center justify-center gap-1.5">
      {["#ef4555", "#1a1f3a", "#f59e0b", "#10b981", "#8b5cf6"].map((c, i) => (
        <motion.div
          key={c}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -6 }}
          className="h-14 w-6 rounded-full"
          style={{ background: c }}
        />
      ))}
    </div>
  ),

  Server: () => (
    <div className="absolute inset-0 p-4 flex flex-col justify-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-2 rounded bg-foreground/5 border border-foreground/10 p-1.5"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
          />
          <div className="flex-1 grid grid-cols-5 gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="h-1.5 rounded-sm bg-coral/40" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  ),

  Cloud: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <Cloud className="h-14 w-14 text-coral" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          className="absolute h-1.5 w-1.5 rounded-full bg-coral"
          style={{ top: "75%", left: `${35 + i * 15}%` }}
        />
      ))}
    </div>
  ),

  Chart: () => (
    <div className="absolute inset-0 p-4 flex items-end gap-1.5">
      {[40, 60, 35, 80, 55, 95, 70].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
          className="flex-1 rounded-t bg-gradient-to-t from-coral to-coral-soft"
        />
      ))}
    </div>
  ),
};

type Service = {
  icon: typeof Code2;
  title: string;
  desc: string;
  tag: string;
  visual: keyof typeof Visual;
  slug: string;
};

import { SERVICES } from "@/lib/services-data";

const VISUAL_BY_SLUG: Record<string, keyof typeof Visual> = {
  "software": "Code",
  "web-development": "Browser",
  "digital-marketing": "Target",
  "seo": "Search",
  "brand-identity": "Palette",
};

const CATEGORY_TAG: Record<string, keyof typeof tagColor> = {
  "software": "Build",
  "web-development": "Build",
  "digital-marketing": "Growth",
  "seo": "Growth",
  "brand-identity": "Create",
};

const services: Service[] = SERVICES.map((s) => ({
  icon: s.icon,
  title: s.title,
  desc: s.tagline,
  tag: CATEGORY_TAG[s.slug] ?? "Build",
  visual: VISUAL_BY_SLUG[s.slug] ?? "Code",
  slug: s.slug,
}));

const tagColor: Record<string, string> = {
  Build: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  AI: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Growth: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Create: "bg-coral/15 text-coral border-coral/30",
  Scale: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export function Services() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  useMobileAutoScroll(scrollerRef, { intervalMs: 3500 });

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-50 pointer-events-none" />
      <div className="absolute top-40 -left-32 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Pick a lane. Or hand us the whole thing.
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Every digital lever <span className="text-coral">under one roof.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground">
            From the first line of code to your hundredth marketing campaign, the same senior team owns the outcome. No hand-offs, no finger-pointing.
          </p>
        </div>

        <div ref={scrollerRef} className="mt-12 sm:mt-16 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:grid gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar sm:grid-cols-2 lg:grid-cols-3 pb-4 sm:pb-0">
          {services.map((s, i) => {
            const VisualComp = Visual[s.visual];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                className="shrink-0 w-[82%] sm:w-auto snap-center"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative glass rounded-3xl p-5 sm:p-6 hover:border-coral/40 hover:shadow-glow transition-all duration-300 overflow-hidden block h-full"
                >
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-coral/0 group-hover:bg-coral/15 rounded-full blur-3xl transition-all duration-500" />

                  {/* Per-service unique visual */}
                  <div className="relative h-32 sm:h-32 rounded-2xl bg-foreground/[0.03] border border-foreground/5 mb-4 sm:mb-5 overflow-hidden group-hover:border-coral/20 transition-colors">
                    <VisualComp />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-foreground/10 backdrop-blur flex items-center justify-center group-hover:bg-coral-grad group-hover:rotate-6 transition-all duration-300 shrink-0">
                        <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground group-hover:text-white transition-colors" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border shrink-0 ${tagColor[s.tag]}`}>
                        {s.tag.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-coral text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="sm:hidden mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="h-px w-6 bg-coral/40" />
          Swipe to explore all {services.length} services
          <span className="h-px w-6 bg-coral/40" />
        </div>
      </div>
    </section>
  );
}
