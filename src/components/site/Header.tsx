import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoColor from "@/assets/logos/origami99-logo.png";
import logoWhite from "@/assets/logos/origami99-logo-white.png";
import { ThemeToggle } from "./ThemeToggle";
import { SERVICES } from "@/lib/services-data";
import { getSubServicesFor, type SubServicePage } from "@/lib/sub-services";

const nav = [
  { label: "Projects Delivered", href: "/#work" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Contact", href: "/#contact" },
];

type ParentSlug = SubServicePage["parent"];

function subsFor(slug: string): SubServicePage[] {
  if (slug === "software" || slug === "web-development" || slug === "digital-marketing") {
    return getSubServicesFor(slug as ParentSlug);
  }
  return [];
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(SERVICES[0].slug);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  const active = SERVICES.find((s) => s.slug === activeService) ?? SERVICES[0];
  const activeSubs = subsFor(active.slug);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8 flex items-center justify-between h-16 sm:h-18 py-2 sm:py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logoWhite}
            alt="Origami 99"
            className="h-9 sm:h-10 w-auto light:hidden"
          />
          <img
            src={logoColor}
            alt="Origami 99"
            className="h-9 sm:h-10 w-auto hidden light:block"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) =>
            n.dropdown ? (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full text-foreground/90 hover:text-coral transition-colors"
                >
                  {n.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[860px] max-w-[92vw]"
                    >
                      <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-glow p-3 grid grid-cols-[260px_1fr] gap-2 overflow-hidden">
                        {/* service rail */}
                        <div className="flex flex-col gap-1 p-1">
                          {SERVICES.map((s) => {
                            const isActive = s.slug === active.slug;
                            const count = subsFor(s.slug).length;
                            return (
                              <Link
                                key={s.slug}
                                to="/services/$slug"
                                params={{ slug: s.slug }}
                                onMouseEnter={() => setActiveService(s.slug)}
                                onFocus={() => setActiveService(s.slug)}
                                onClick={() => setServicesOpen(false)}
                                className={`group relative flex items-center gap-3 p-3 rounded-2xl transition-colors ${
                                  isActive ? "bg-coral/10" : "hover:bg-foreground/5"
                                }`}
                              >
                                <div
                                  className={`h-9 w-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                                    isActive ? "bg-coral-grad border-transparent" : "bg-foreground/5 border-border"
                                  }`}
                                >
                                  <s.icon className={`h-4 w-4 ${isActive ? "text-white" : "text-coral"}`} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className={`text-sm font-semibold ${isActive ? "text-coral" : "text-foreground"}`}>
                                    {s.title}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-1">
                                    {count > 0 ? `${count} services` : "Explore"}
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`h-4 w-4 shrink-0 transition-transform ${
                                    isActive ? "text-coral translate-x-0.5" : "text-muted-foreground"
                                  }`}
                                />
                              </Link>
                            );
                          })}
                        </div>

                        {/* sub service panel */}
                        <div className="rounded-2xl bg-foreground/[0.03] border border-border/70 p-4">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={active.slug}
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.14 }}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                  <div className="text-sm font-bold text-foreground">{active.title}</div>
                                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{active.tagline}</p>
                                </div>
                                <Link
                                  to="/services/$slug"
                                  params={{ slug: active.slug }}
                                  onClick={() => setServicesOpen(false)}
                                  className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-coral hover:gap-2 transition-all"
                                >
                                  View all <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>

                              {activeSubs.length > 0 ? (
                                <div className="mt-3 grid grid-cols-2 gap-1.5">
                                  {activeSubs.map((sub) => (
                                    <Link
                                      key={sub.slug}
                                      to={`/services/${sub.slug}` as never}
                                      onClick={() => setServicesOpen(false)}
                                      className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-coral/10 transition-colors"
                                    >
                                      <sub.icon className="h-4 w-4 text-coral mt-0.5 shrink-0" />
                                      <div className="min-w-0">
                                        <div className="text-[13px] font-semibold text-foreground group-hover:text-coral transition-colors leading-snug">
                                          {sub.category}
                                        </div>
                                        <div className="text-[11px] text-muted-foreground line-clamp-1">{sub.title}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="mt-3 rounded-xl border border-border/70 bg-background/60 p-4">
                                  <p className="text-xs text-muted-foreground">{active.hero}</p>
                                  <Link
                                    to="/services/$slug"
                                    params={{ slug: active.slug }}
                                    onClick={() => setServicesOpen(false)}
                                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral"
                                  >
                                    Open {active.title} <ArrowRight className="h-3.5 w-3.5" />
                                  </Link>
                                </div>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={n.href}
                href={n.href}
                className="relative px-4 py-2 text-sm font-semibold rounded-full text-foreground/90 hover:text-coral transition-colors"
              >
                {n.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+923155317998"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-coral transition-colors"
          >
            <Phone className="h-4 w-4 text-coral" />
            +92 315 5317998
          </a>
          <ThemeToggle />
          <a
            href="/#contact"
            className="relative inline-flex items-center gap-2 bg-coral-grad text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform animate-pulse-ring"
          >
            Book Growth Call
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle compact />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatedMobile open={open} onClose={() => setOpen(false)} />
    </motion.header>
  );
}

function AnimatedMobile({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-background border-t border-border px-5 py-4 flex flex-col gap-1 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain pb-8"
        >
          <div className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground px-2 pb-1">
            Services
          </div>

          {SERVICES.map((s) => {
            const subs = subsFor(s.slug);
            const isOpen = expanded === s.slug;
            return (
              <div key={s.slug} className="border-b border-border/50">
                <div className="flex items-center">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={onClose}
                    className="flex-1 flex items-center gap-2.5 py-3 px-2 text-foreground font-semibold"
                  >
                    <s.icon className="h-4 w-4 text-coral shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </Link>
                  {subs.length > 0 && (
                    <button
                      aria-label={`Show ${s.title} services`}
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : s.slug)}
                      className="p-3 text-muted-foreground"
                    >
                      <span className="mr-2 text-[10px] font-bold text-coral bg-coral/10 border border-coral/25 rounded-full px-2 py-0.5">
                        {subs.length}
                      </span>
                      <ChevronDown className={`inline h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && subs.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden pl-3 border-l-2 border-coral/30 ml-2 mb-2"
                    >
                      {subs.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/services/${sub.slug}` as never}
                          onClick={onClose}
                          className="flex items-center gap-2 py-2.5 px-2 text-sm text-foreground/85 active:text-coral"
                        >
                          <sub.icon className="h-3.5 w-3.5 text-coral shrink-0" />
                          <span className="truncate">{sub.category}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {nav.filter((n) => !n.dropdown).map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={onClose}
              className="py-3 px-2 text-foreground font-medium border-b border-border/50 last:border-0"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={onClose}
            className="mt-3 bg-coral-grad text-white text-center py-3 rounded-full font-semibold shadow-glow"
          >
            Book Growth Call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
