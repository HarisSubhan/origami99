import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star, Zap, Brain } from "lucide-react";
import a1 from "@/assets/avatars/avatar-1.png";
import a2 from "@/assets/avatars/avatar-2.png";
import a3 from "@/assets/avatars/avatar-3.png";
import a4 from "@/assets/avatars/avatar-4.png";
import a5 from "@/assets/avatars/avatar-5.png";

const heroAvatars = [a1, a2, a3, a4, a5];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-section-grad text-foreground pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 noise">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* floating diamonds */}
      <motion.div
        aria-hidden
        className="absolute top-40 right-[12%] w-24 h-24 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block"
        animate={{ y: [0, -18, 0], rotate: [45, 60, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-24 left-[8%] w-16 h-16 bg-card/70 backdrop-blur diamond rounded-xl border border-border hidden md:block"
        animate={{ y: [0, 12, 0], rotate: [45, 30, 45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 left-[44%] w-3 h-3 bg-coral rounded-full"
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            AI POWERED CREATIVE AND DIGITAL AGENCY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 sm:mt-6 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.98] tracking-tight text-balance"
          >
            We build brands<br />
            that{" "}
            <span className="relative inline-block text-coral" style={{ textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }}>
              convert.
              <motion.svg
                viewBox="0 0 300 14" className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.8 }}
              >
                <motion.path d="M2 9 C 80 2, 220 2, 298 9" stroke="var(--coral)" strokeWidth="4" fill="none" strokeLinecap="round" />
              </motion.svg>
            </span>
            <br />
            Not just look<br />
            pretty.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            One senior team, end to end. Custom software, AI-driven web and mobile apps, SEO, and paid media, engineered together by the crew that has quietly shipped 400+ production platforms across four continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 bg-coral-grad px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
              Book a 30-min build call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border border-border hover:bg-foreground/10 transition-colors">
              See what we shipped
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 flex-wrap"
          >
            <div className="flex -space-x-3">
              {heroAvatars.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.08, zIndex: 20 }}
                  className="h-11 w-11 rounded-full border-2 border-background overflow-hidden bg-white shadow-lg"
                  style={{ zIndex: 10 - i }}
                >
                  <img src={src} alt="Happy client" className="h-full w-full object-cover object-top" loading="lazy" />
                </motion.div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-coral">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                <span className="text-foreground ml-1 font-semibold">4.9/5</span>
              </div>
              <div className="text-muted-foreground">From <span className="text-foreground font-semibold">450+</span> happy clients worldwide</div>
            </div>
          </motion.div>
        </div>

        {/* Right: AI dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ perspective: 1200 }}
        >
          <div className="relative rounded-3xl bg-card/80 backdrop-blur-xl border border-border p-5 shadow-glow">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-coral" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
              <div className="ml-auto text-xs text-muted-foreground font-mono">origami99.ai/dashboard</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Brain, label: "AI Conversions", val: "+342%", color: "from-coral to-orange-400" },
                { icon: Zap, label: "Page Speed", val: "98/100", color: "from-emerald-400 to-teal-500" },
                { icon: Sparkles, label: "Organic Traffic", val: "12.4K", color: "from-violet-400 to-fuchsia-500" },
                { icon: Star, label: "Lead Quality", val: "A+", color: "from-amber-400 to-yellow-500" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="rounded-xl bg-muted border border-border p-3"
                >
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-2`}>
                    <s.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="text-lg font-bold">{s.val}</div>
                </motion.div>
              ))}
            </div>

            {/* fake chart */}
            <div className="mt-3 rounded-xl bg-muted border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">Revenue Growth</span>
                <span className="text-xs text-emerald-400 font-semibold">↑ 218%</span>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-16">
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 50 L25 42 L50 45 L75 30 L100 28 L125 18 L150 22 L175 10 L200 4 L200 60 L0 60 Z"
                  fill="url(#grad)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.9 }}
                />
                <motion.path
                  d="M0 50 L25 42 L50 45 L75 30 L100 28 L125 18 L150 22 L175 10 L200 4"
                  stroke="var(--coral)" strokeWidth="2" fill="none" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.9 }}
                />
              </svg>
            </div>
          </div>

          {/* floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 top-10 bg-white text-navy rounded-2xl shadow-soft px-4 py-3 hidden md:flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-coral-grad flex items-center justify-center text-white"><Zap className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Deploy time</div>
              <div className="font-bold text-sm">-72%</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-4 -bottom-4 bg-white text-navy rounded-2xl shadow-soft px-4 py-3 hidden md:flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white"><Brain className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">AI Score</div>
              <div className="font-bold text-sm">99/100</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
