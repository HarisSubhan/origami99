import { useEffect, RefObject } from "react";

/**
 * Auto-advances a horizontal snap scroller on mobile only.
 * - Runs only when viewport < breakpoint AND the container is in view.
 * - Pauses on touch and when the tab is hidden.
 * - Wraps to the start after the last snap point.
 */
export function useMobileAutoScroll(
  ref: RefObject<HTMLElement | null>,
  { intervalMs = 3500, breakpoint = 640 }: { intervalMs?: number; breakpoint?: number } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mql.matches || reduced.matches) return;

    let paused = false;
    let inView = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    const onTouchStart = () => (paused = true);
    const onTouchEnd = () => {
      // Resume after a beat so the user's own scroll settles.
      window.setTimeout(() => (paused = false), 2500);
    };
    const onVisibility = () => (paused = document.visibilityState === "hidden");

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    const timer = window.setInterval(() => {
      if (paused || !inView) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      // Approximate one card = first child width + gap.
      const first = el.firstElementChild as HTMLElement | null;
      const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.85;
      const next = el.scrollLeft + step;
      const target = next > max - 4 ? 0 : next;
      el.scrollTo({ left: target, behavior: "smooth" });
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
      io.disconnect();
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ref, intervalMs, breakpoint]);
}
