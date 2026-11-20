import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const us = [
  "AI augmented delivery. 3x faster turnaround",
  "Senior engineers & strategists, no juniors farmed out",
  "Fixed pricing with weekly progress demos",
  "ROI dashboards from day one",
  "End to end. Code, design, marketing in one team",
  "Real humans on Slack, same timezone overlap",
];
const them = [
  "Manual processes, missed deadlines",
  "Account managers who never touch the work",
  "Vague hourly billing & scope creep",
  "Vanity metrics, no business impact",
  "Hand offs between disconnected vendors",
  "Tickets that disappear into a black hole",
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Why Origami 99
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            The agency that<br />actually <span className="text-coral">moves the needle.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground">
            We are built different. AI first workflows, senior talent, transparent pricing. All aimed at one thing, your bottom line.
          </p>
          <a href="#contact" className="mt-6 sm:mt-7 inline-flex items-center gap-2 bg-coral-grad text-white px-7 py-3.5 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform">
            See if we're a fit →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl p-6 border-coral/30 shadow-glow"
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
              <img src="/__l5e/assets-v1/2762a917-4f05-40ca-a4bf-c42d6a117bf9/origami99-favicon.png" alt="" className="h-6 w-6" />
              Origami 99
            </h3>
            <ul className="space-y-3">
              {us.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-6 border border-border bg-foreground/[0.02]"
          >
            <h3 className="font-bold text-lg text-muted-foreground mb-4">Typical Agencies</h3>
            <ul className="space-y-3">
              {them.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="line-through decoration-muted-foreground/40">{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
