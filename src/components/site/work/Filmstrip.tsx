import { useEffect, useRef } from "react";
import type { Project } from "./data";

export function Filmstrip({
  items, activeSlug, onPick,
}: { items: Project[]; activeSlug?: string; onPick: (slug: string) => void }) {
  const scroller = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scroller.current?.querySelector<HTMLElement>(`[data-slug="${activeSlug}"]`);
    if (!el || !scroller.current) return;
    const box = scroller.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (r.left < box.left + 8 || r.right > box.right - 8) {
      scroller.current.scrollTo({ left: el.offsetLeft - box.width / 2 + r.width / 2, behavior: "smooth" });
    }
  }, [activeSlug]);

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex gap-2 overflow-x-auto no-scrollbar pb-1 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]"
      >
        {items.map((p, i) => {
          const isActive = p.slug === activeSlug;
          const still = p.shotUrl;
          return (
            <button
              key={p.slug}
              data-slug={p.slug}
              onClick={() => onPick(p.slug)}
              aria-label={`Show ${p.client}`}
              className={`group relative shrink-0 w-[104px] sm:w-[132px] overflow-hidden rounded-md border transition-all duration-300 ${
                isActive
                  ? "border-coral shadow-glow scale-[1.03]"
                  : "border-border/70 opacity-60 hover:opacity-100 hover:border-coral/40"
              }`}
            >
              <div className="aspect-[16/10] bg-[#0b0f1a]">
                {still && (
                  <img
                    src={still}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-1 bg-gradient-to-t from-black/85 to-transparent px-1.5 py-1">
                <span className="text-[8px] font-mono text-white/50">{String(i + 1).padStart(2, "0")}</span>
                <span className="truncate text-[9px] font-semibold text-white/90">{p.client}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
