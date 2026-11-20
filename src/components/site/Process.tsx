import { motion } from "motion/react";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { n: "01", icon: Search, title: "Discover & scope", desc: "You get a paid 2-hour audit of your business, competitors and stack. We hand back a fixed-price proposal, KPIs and a written roadmap, before a single line of code." },
  { n: "02", icon: PenTool, title: "Design & build", desc: "You see working software every week. Senior designers and engineers ship in AI-accelerated sprints, no juniors on your budget, no black-box updates, no surprises." },
  { n: "03", icon: Rocket, title: "Launch & ignite", desc: "You go live on production-grade infra with SEO, paid, content and outreach wired to the same funnel from day one, so traffic doesn't wait for a separate 'marketing phase'." },
  { n: "04", icon: TrendingUp, title: "Optimise & compound", desc: "You get live dashboards, weekly reports, monthly strategy. We A/B test relentlessly, double down on what works, and cut what doesn't, until ROI compounds quarter over quarter." },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-24 lg:py-32 bg-section-grad text-foreground overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> How we work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            How we work. <span className="text-coral">Fast, senior, and stupidly transparent.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground">
            The same four-step ritual we've run for hundreds of businesses. Fixed price, fixed scope, no surprises.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* connector */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-coral/60 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-coral-grad diamond rounded-3xl group-hover:rotate-[60deg] transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <s.icon className="h-9 w-9 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-white text-foreground h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold border-4 border-background">
                    {s.n}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-coral-grad px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
            Start Your Project Today →
          </a>
        </div>
      </div>
    </section>
  );
}
