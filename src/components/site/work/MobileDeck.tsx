import { useEffect, useRef, useState } from "react";
import type { Project } from "./data";

/** Full bleed swipe deck for phones. Only the centred card plays. */
export function MobileDeck({ items, reduced }: { items: Project[]; reduced: boolean }) {
  const scroller = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            setActiveIdx(Number((e.target as HTMLElement).dataset.card));
          }
        });
      },
      { root, threshold: [0.6] }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [items.length]);

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 no-scrollbar"
      >
        {items.map((p, i) => (
          <div key={p.slug} data-card={i} className="w-[86vw] shrink-0 snap-center">
            <DeckCard p={p} active={i === activeIdx} reduced={reduced} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
        <span className="font-mono">{String(activeIdx + 1).padStart(2, "0")}</span>
        <div className="h-1 w-28 overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full rounded-full bg-coral transition-[width] duration-300"
            style={{ width: `${((activeIdx + 1) / Math.max(items.length, 1)) * 100}%` }}
          />
        </div>
        <span className="font-mono">{String(items.length).padStart(2, "0")}</span>
        <span className="ml-2">Swipe</span>
      </div>
    </div>
  );
}

function DeckCard({ p, active }: { p: Project; active: boolean; reduced: boolean }) {
  const still = p.shotUrl;

  return (
    <div className={`overflow-hidden rounded-2xl border bg-card/60 transition-all duration-300 ${active ? "border-coral/50 shadow-glow" : "border-border opacity-70"}`}>
      <div className="relative aspect-[16/10] bg-[#0b0f1a]">
        {still && (
          <img
            src={still}
            alt={`${p.client} website`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2.5 py-2">
          <span className="rounded-full border border-border bg-background/70 px-2 py-0.5 text-[9px] font-mono text-muted-foreground backdrop-blur">
            {p.domain}
          </span>
          <span className="rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-coral backdrop-blur">
            {p.category}
          </span>
        </div>
      </div>
      <div className="p-3">
        <div className="font-display text-sm font-bold">{p.client}</div>
        <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{p.tagline}</div>
        {p.outcome && <div className="mt-2 text-xs font-black text-coral">{p.outcome}</div>}
      </div>
    </div>
  );
}
