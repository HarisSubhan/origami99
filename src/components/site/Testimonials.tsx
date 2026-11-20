import { motion } from "motion/react";
import { Star, Quote, ArrowRight, ShieldCheck, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMobileAutoScroll } from "@/hooks/use-mobile-autoscroll";
import t1 from "@/assets/testimonials/t1-sara.jpg";
import t2 from "@/assets/testimonials/t2-james.jpg";
import t3 from "@/assets/testimonials/t3-priya.jpg";
import t4 from "@/assets/testimonials/t4-david.jpg";
import t5 from "@/assets/testimonials/t5-mariam.jpg";
import t6 from "@/assets/testimonials/t6-antti.jpg";
import t7 from "@/assets/testimonials/t7-rachel.jpg";
import t8 from "@/assets/testimonials/t8-michael.jpg";
import t9 from "@/assets/testimonials/t9-ahmed.jpg";
import t10 from "@/assets/testimonials/t10-fahad.jpg";
import t11 from "@/assets/testimonials/t11-layla.jpg";
import t12 from "@/assets/testimonials/t12-ben.jpg";

type Item = {
  q: string;
  n: string;
  r: string;
  c: string;
  tag: string;
  metric: string;
  region: string;
  avatar: string;
};

const items: Item[] = [
  { q: "Origami99 rebuilt our storefront and ran our ads. Revenue tripled in four months. The only agency I've ever recommended without hesitation.", n: "Sara Khan", r: "Founder", c: "Nora Skincare", tag: "Ecommerce", metric: "3.1x revenue in 120 days", region: "🇵🇰 Karachi", avatar: t1 },
  { q: "Their AI integration cut our support tickets by 60%. ROI was clear inside the first month. Genuine, brilliant team.", n: "James O'Connor", r: "CTO", c: "FinTrack", tag: "SaaS · AI", metric: "−60% support tickets", region: "🇮🇪 Dublin", avatar: t2 },
  { q: "We've worked with six agencies. None came close. Weekly demos, zero scope creep, and SEO results that finally moved revenue.", n: "Priya Mehta", r: "Marketing Director", c: "Apex Legal", tag: "SEO", metric: "18k organic clicks / mo", region: "🇬🇧 London", avatar: t3 },
  { q: "Shipped a production grade app in nine weeks. The code quality is the best we've ever audited. Hire them before your competitor does.", n: "David Chen", r: "VP Engineering", c: "PortLogix", tag: "Custom Software", metric: "9 week ship", region: "🇺🇸 Austin", avatar: t4 },
  { q: "Beautiful brand work AND it converted. Inbound leads jumped 5x within 90 days of the relaunch. Worth every penny.", n: "Mariam Yusuf", r: "CEO", c: "Halcyon Studios", tag: "Branding", metric: "5x inbound leads", region: "🇦🇪 Dubai", avatar: t5 },
  { q: "They took over an abandoned codebase, stabilised it in a week, and shipped features the previous team said were impossible.", n: "Antti Virtanen", r: "Head of Product", c: "Susan.fi", tag: "Rescue · AI", metric: "0 downtime handover", region: "🇫🇮 Helsinki", avatar: t6 },
  { q: "Our Google Ads spend was hemorrhaging. They restructured everything in two weeks and dropped our CAC by 42%.", n: "Rachel Thompson", r: "Growth Lead", c: "BrightPath Health", tag: "Paid Media", metric: "−42% CAC", region: "🇨🇦 Toronto", avatar: t7 },
  { q: "The dispatch platform they built runs our entire fleet 24/7. Driver churn is down, order fulfilment is up, and it just works.", n: "Michael O'Sullivan", r: "Operations Director", c: "PowerCabs", tag: "Custom Software", metric: "24/7 uptime, 500+ drivers", region: "🇮🇪 Dublin", avatar: t8},
  { q: "They rebuilt our WordPress site and technical SEO from scratch. We now rank page one for terms competitors pay thousands to bid on.", n: "Dr. Ahmed Raza", r: "Managing Director", c: "Enfield Royal Clinics", tag: "SEO · WordPress", metric: "Page 1 for 120+ terms", region: "🇵🇰 Islamabad", avatar: t9 },
  { q: "Bilingual, government-grade, delivered under a tight deadline. Their attention to Arabic UX was unlike any western agency we've hired.", n: "Fahad Al Otaibi", r: "Marketing Lead", c: "Expo's KSA", tag: "Web · Bilingual", metric: "Delivered 2 weeks early", region: "🇸🇦 Riyadh", avatar: t10 },
  { q: "We interviewed twelve agencies. Origami99 was the only one that showed working prototypes on the discovery call. That's who we hired.", n: "Layla Karim", r: "Founder", c: "Culture Hijab", tag: "Shopify", metric: "+220% AOV vs old site", region: "🇨🇦 Vancouver", avatar: t11 },
  { q: "Senior team from day one. No account managers to filter through, no juniors learning on our budget. Just people who ship.", n: "Ben Whitaker", r: "COO", c: "The Longshot Inc.", tag: "Retainer", metric: "18 months retainer, still going", region: "🇨🇦 Calgary", avatar: t12 },
];

const trustBadges = [
  { icon: Star, label: "4.9 average", sub: "80+ verified reviews" },
  { icon: Users, label: "97% retention", sub: "clients past 12 months" },
  { icon: Award, label: "Featured on Clutch", sub: "& GoodFirms top lists" },
  { icon: ShieldCheck, label: "NDA-friendly", sub: "since 2019" },
];

export function Testimonials() {
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[35rem] h-40 bg-coral/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
          <span className="h-2 w-2 bg-coral diamond" /> In our clients' words
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
          Founders, CTOs and CMOs <span className="text-coral">bet their quarter on us.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
          Twelve unedited stories from twelve industries. Real names, real companies, real numbers we can back up on request.
        </p>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl bg-card/60 backdrop-blur border border-border px-3 py-2.5 text-left"
            >
              <div className="h-9 w-9 rounded-lg bg-coral/15 flex items-center justify-center shrink-0">
                <b.icon className="h-4 w-4 text-coral" />
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-bold text-foreground truncate">{b.label}</div>
                <div className="text-[10px] text-muted-foreground truncate">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: two auto-marquee rows */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <MarqueeRow items={rowA} direction="left" duration={80} />
        <div className="h-4" />
        <MarqueeRow items={rowB} direction="right" duration={95} />
      </div>

      {/* Mobile: snap carousel with dots */}
      <MobileCarousel items={items} />

      {/* CTA */}
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 mt-12 sm:mt-16">
        <div className="rounded-3xl border border-border bg-card/40 backdrop-blur p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-coral mb-2">
              <TrendingUp className="h-3.5 w-3.5" /> Your story next
            </div>
            <div className="text-lg sm:text-xl font-bold">Book a free 20-minute intro.</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">No pitch deck. We diagnose the bottleneck and send a plan within 48 hours.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-coral/50 transition-colors">
              See case studies
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-grad px-5 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform">
              Book intro call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Item }) {
  return (
    <div className="shrink-0 w-[320px] sm:w-[400px] rounded-3xl border border-border bg-card/70 backdrop-blur p-6 sm:p-7 relative overflow-hidden">
      <Quote className="absolute -top-2 -right-2 h-24 w-24 text-coral/5" />
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5 text-coral">
          {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-coral bg-coral/10 border border-coral/20 rounded-full px-2 py-0.5">
          {t.tag}
        </span>
      </div>
      <p className="text-foreground/90 leading-relaxed mb-4 text-sm sm:text-[15px]">"{t.q}"</p>
      <div className="rounded-xl bg-coral/10 border border-coral/20 px-3 py-2 mb-4">
        <div className="text-[10px] font-bold uppercase tracking-wider text-coral">Outcome</div>
        <div className="text-sm font-bold text-foreground">{t.metric}</div>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={`${t.n}, ${t.r} at ${t.c}`}
          loading="lazy"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-coral/40 shrink-0"
        />
        <div className="min-w-0">
          <div className="font-semibold text-foreground text-sm truncate">{t.n}</div>
          <div className="text-xs text-muted-foreground truncate">{t.r} · {t.c} · {t.region}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction, duration }: { items: Item[]; direction: "left" | "right"; duration: number }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => <Card key={`${t.n}-${i}`} t={t} />)}
      </motion.div>
    </div>
  );
}

function MobileCarousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useMobileAutoScroll(ref, { intervalMs: 4000 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / items.length;
      setActive(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <div className="md:hidden">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((t, i) => (
          <div key={i} className="snap-center shrink-0">
            <Card t={t} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-coral" : "w-1.5 bg-foreground/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
