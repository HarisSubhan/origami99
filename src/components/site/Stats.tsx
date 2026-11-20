import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Users, Rocket, DollarSign, Heart } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2.2, ease: "easeOut" });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 450, suffix: "+", label: "Founders trust us", icon: Users },
  { value: 480, suffix: "+", label: "Platforms shipped", icon: Rocket },
  { value: 12, suffix: "M+", label: "Client revenue moved", icon: DollarSign },
  { value: 99, suffix: "%", label: "Retention past 12 months", icon: Heart },
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden border-y border-border">
      <div className="absolute inset-0 grid-bg-soft opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> The numbers we're allowed to publish
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Seven years of quiet compounding, <span className="text-coral">measured in yours.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-coral/0 group-hover:bg-coral/15 rounded-full blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow mb-3 sm:mb-4 group-hover:rotate-6 transition-transform">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
