import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const items = [
  "Custom Software", "AI Web Apps", "Mobile Apps", "SEO & Local SEO",
  "Paid Media", "Shopify & Headless", "WordPress & Webflow",
  "Branding & UI/UX", "DevOps & Cloud", "AI Automation",
  "React · Next.js · TypeScript", "React Native · Swift · Kotlin",
  "Node.js · PostgreSQL", "OpenAI · LangChain · RAG",
  "AWS · Cloudflare · Vercel", "Figma · Motion · Framer",
];

export function Marquee() {
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const row = [...items, ...items];

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shouldAnimate = !paused && inView && !reduced;

  return (
    <section
      ref={ref}
      aria-label="Services and stack"
      className="relative bg-background text-foreground py-5 sm:py-6 overflow-hidden border-y border-border"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 80px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <motion.div
          className="flex w-max items-center"
          animate={shouldAnimate ? { x: ["0%", "-50%"] } : { x: "-25%" }}
          transition={shouldAnimate ? { duration: 45, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
        >
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-5 sm:gap-8 px-5 sm:px-8 shrink-0">
              <span className="font-display text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap text-foreground/85">
                {t}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
