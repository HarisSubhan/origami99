import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { Plus, Search, MessageCircle } from "lucide-react";

type Category = "All" | "Delivery" | "Pricing" | "Tech" | "Support";

const faqs: { q: string; a: string; cat: Exclude<Category, "All"> }[] = [
  { cat: "Delivery", q: "How fast can you start my project?", a: "We typically kick off discovery within 3 to 5 business days of signing. Most projects start design or build the following week. Urgent? Ask about our rapid launch track." },
  { cat: "Delivery", q: "Do you work with startups or only enterprises?", a: "Both. We ship everything from lean MVPs for pre-seed founders to industrial-scale platforms serving millions of users." },
  { cat: "Pricing", q: "What does it cost?", a: "Every engagement is scoped and quoted individually. After a free 20 minute intro call we send a fixed, itemised proposal within 48 hours. No hourly surprises, no retainers you can't cancel." },
  { cat: "Support", q: "Do you sign NDAs before the first call?", a: "Yes, always. Send us your NDA or use ours, we counter-sign within the same business day, and only then do you brief us on anything sensitive." },
  { cat: "Tech", q: "Can you take over an existing codebase or ad account?", a: "Yes. Roughly 40% of our engagements start as rescues. We audit, stabilise, then improve, usually within the first two weeks, with zero downtime handover." },
  { cat: "Tech", q: "Who owns the code and assets?", a: "You do. 100%. We hand over clean repos, design files, ad accounts and admin access at every milestone. No vendor lock in, ever." },
  { cat: "Support", q: "Do you guarantee SEO rankings or ad ROAS?", a: "We don't promise rankings, anyone who does is lying. We DO promise transparent reporting, weekly optimisation, and measurable progress against the KPIs we set together upfront." },
  { cat: "Pricing", q: "What if I just need one service, not the bundle?", a: "Totally fine. Pick one, SEO, ads, dev, design, video, or combine. Many clients start with one project and expand once they see results." },
];

const CATS: Category[] = ["All", "Delivery", "Pricing", "Tech", "Support"];

export function FAQ() {
  const [cat, setCat] = useState<Category>("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return faqs
      .map((f, i) => ({ ...f, i }))
      .filter((f) => (cat === "All" || f.cat === cat) && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)));
  }, [cat, q]);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-8 lg:gap-14 items-start min-w-0">
          {/* Left rail */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
              <span className="h-2 w-2 bg-coral diamond" /> The first-call questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              What founders <span className="text-coral">always ask us.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md">
              Filter, search, expand. If yours isn't here, we'll answer it in 24 hours.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral-grad text-white px-5 py-2.5 text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Ask us anything
            </a>

            {/* Category chips */}
            <div className="mt-6 flex flex-wrap gap-2 pb-1">
              {CATS.map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all min-h-[36px] ${
                      active
                        ? "bg-coral text-white border-coral shadow-glow"
                        : "bg-card/50 backdrop-blur border-border text-foreground/70 hover:border-coral/50"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card/60 backdrop-blur border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/60 transition-colors"
              />
            </div>

            <div className="mt-5 space-y-2.5">
              <AnimatePresence initial={false}>
                {list.map((f) => (
                  <motion.div
                    key={f.i}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpen(open === f.i ? null : f.i)}
                      className="w-full flex items-start justify-between gap-3 px-4 sm:px-5 py-4 text-left min-w-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 min-w-0 flex-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-coral shrink-0">{f.cat}</span>
                        <span className="font-semibold text-foreground text-sm sm:text-base break-words min-w-0">{f.q}</span>
                      </div>
                      <motion.div animate={{ rotate: open === f.i ? 45 : 0 }} className="h-7 w-7 rounded-full bg-coral/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Plus className="h-4 w-4 text-coral" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {open === f.i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 sm:px-5 pb-4 text-sm text-muted-foreground leading-relaxed break-words">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
              {list.length === 0 && (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  No matches. Try a different keyword or <a href="#contact" className="text-coral font-semibold">ask us directly</a>.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
