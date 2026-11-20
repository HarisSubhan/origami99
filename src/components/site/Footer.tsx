import { Mail, Phone, MapPin, Cookie, ArrowUpRight, Clock, Zap, CheckCircle2, Package, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoWhite from "@/assets/logos/origami99-logo-white.png";
import logoDark from "@/assets/logos/origami99-logo.png";
import { openPreferences } from "@/lib/cookie-consent";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/origami99.agency/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/origami99.official",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/origami99/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];


const locations = [
  { country: "Islamabad, Pakistan", flag: "🇵🇰", tz: "Asia/Karachi" },
  { country: "Riyadh, KSA", flag: "🇸🇦", tz: "Asia/Riyadh" },
  { country: "Berlin, Germany", flag: "🇩🇪", tz: "Europe/Berlin" },
  { country: "Toronto, Canada", flag: "🇨🇦", tz: "America/Toronto" },
  { country: "Austin, Texas", flag: "🇺🇸", tz: "America/Chicago" },
];

const contactStats = [
  { icon: Clock, label: "Avg reply", value: "< 2 hrs" },
  { icon: Zap, label: "Kickoff", value: "This week" },
  { icon: CheckCircle2, label: "NDA on request", value: "Signed same day" },
];

// Deterministic particle positions so SSR and CSR match
const particles = Array.from({ length: 18 }).map((_, i) => ({
  left: (i * 53) % 100,
  top: (i * 37) % 100,
  size: 2 + (i % 4),
  delay: (i * 0.4) % 6,
  duration: 8 + (i % 6),
}));

export function Footer() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = sceneRef.current;
    if (!el) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--tilt-x", `${(-cy * 8).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(cx * 10).toFixed(2)}deg`);
      el.style.setProperty("--px", `${(cx * 24).toFixed(2)}px`);
      el.style.setProperty("--py", `${(cy * 18).toFixed(2)}px`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const formatTime = (tz: string) => {
    if (!now) return "";
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true }).format(now);
    } catch { return ""; }
  };


  return (
    <footer className="footer3d relative overflow-hidden pt-24 pb-8 border-t border-border/60">
      {/* ============ Layered 3D Backdrop ============ */}
      <div ref={sceneRef} className="footer3d-scene pointer-events-none absolute inset-0">
        <div className="footer3d-mesh" />
        <div className="footer3d-mesh footer3d-mesh--b" />

        <svg className="footer3d-origami" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id="f3d-a" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="var(--coral)" stopOpacity="0.55" />
              <stop offset="1" stopColor="var(--coral)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="f3d-b" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0" stopColor="var(--foreground)" stopOpacity="0.18" />
              <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="f3d-c" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--coral)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--coral)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon className="f3d-fold f3d-fold--1" points="0,420 220,300 420,500 0,500" fill="url(#f3d-a)" />
          <polygon className="f3d-fold f3d-fold--2" points="220,300 480,180 620,360 420,500" fill="url(#f3d-b)" />
          <polygon className="f3d-fold f3d-fold--3" points="480,180 800,80 800,340 620,360" fill="url(#f3d-c)" />
          <polygon className="f3d-fold f3d-fold--4" points="620,360 800,340 800,500 420,500" fill="url(#f3d-a)" opacity="0.5" />
          <polygon className="f3d-fold f3d-fold--5" points="0,180 260,60 480,180 220,300 0,420" fill="url(#f3d-c)" opacity="0.6" />
        </svg>

        <div className="footer3d-particles">
          {particles.map((p, i) => (
            <span
              key={i}
              className="footer3d-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="footer3d-grid" />
      </div>

      {/* ============ Content ============ */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Extruded wordmark + brand block */}
        <div className="relative mb-16">
          <div aria-hidden className="footer3d-wordmark pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap">
            ORIGAMI 99
          </div>
          <div className="relative flex flex-col items-center text-center pt-10">
            <div className="dark:hidden rounded-2xl bg-foreground/5 border border-border/60 px-5 py-3 shadow-sm">
              <img src={logoDark} alt="Origami 99" width={180} height={56} className="h-12 w-auto" />
            </div>
            <img src={logoWhite} alt="Origami 99" width={180} height={56} className="h-14 w-auto hidden dark:block drop-shadow-[0_10px_30px_rgba(255,120,80,0.35)]" />
            <p className="mt-5 max-w-xl text-sm md:text-base text-foreground/70">
              Design, code and marketing. Shipped like clockwork.
            </p>
            <a
              href="/#contact"
              className="footer3d-cta group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="footer3d-cta-glow" aria-hidden />
              <span className="relative z-10">Book a growth call</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Glass card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="footer3d-glass lg:col-span-5 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-coral">Talk to us</h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral" />
                </span>
                Studio open now
              </span>
            </div>
            <div className="space-y-2.5 text-sm text-foreground/85">
              <a href="mailto:engage@origami99.com" className="flex items-center gap-2.5 hover:text-coral transition-colors">
                <Mail className="h-4 w-4 text-coral" /><span>engage@origami99.com</span>
              </a>
              <a href="tel:+923155317998" className="flex items-center gap-2.5 hover:text-coral transition-colors">
                <Phone className="h-4 w-4 text-coral" /><span>+92 315 5317998</span>
              </a>
              <a href="tel:+923377771527" className="flex items-center gap-2.5 hover:text-coral transition-colors">
                <Phone className="h-4 w-4 text-coral" /><span>+92 337 7771527</span>
              </a>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {contactStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border/70 bg-background/40 backdrop-blur px-2.5 py-2.5">
                  <Icon className="h-3.5 w-3.5 text-coral mb-1" />
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold leading-tight">{label}</div>
                  <div className="text-xs font-bold text-foreground leading-tight mt-0.5">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer3d-social h-12 w-12 rounded-2xl flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer3d-glass lg:col-span-3 rounded-3xl p-6">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-4">Studio</h4>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li><a href="/#services" className="hover:text-coral transition-colors">Services</a></li>
              <li><a href="/#work" className="hover:text-coral transition-colors">Projects delivered</a></li>
              <li><Link to="/blog" className="hover:text-coral transition-colors">Journal</Link></li>
              <li><a href="/#contact" className="hover:text-coral transition-colors">Contact</a></li>
            </ul>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mt-6 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li><Link to="/privacy" className="hover:text-coral transition-colors">Privacy</Link></li>
              <li><Link to="/cookies" className="hover:text-coral transition-colors">Cookies</Link></li>
              <li>
                <button type="button" onClick={openPreferences} className="inline-flex items-center gap-1.5 hover:text-coral transition-colors text-left">
                  <Cookie className="h-3.5 w-3.5" /> Preferences
                </button>
              </li>
            </ul>
          </div>

          <div className="footer3d-glass lg:col-span-4 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-coral flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Global presence
              </h4>
              <span className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">5 studios</span>
            </div>
            <ul className="space-y-1.5 text-xs">
              {locations.map((l) => (
                <li key={l.country} className="footer3d-loc flex items-center justify-between gap-2 rounded-xl px-3 py-2.5">
                  <span className="flex items-center gap-2 min-w-0">
                    <span className="text-base leading-none">{l.flag}</span>
                    <span className="text-foreground/85 font-medium truncate">{l.country}</span>
                  </span>
                  <span suppressHydrationWarning className="text-[10px] font-mono tabular-nums text-foreground/60 shrink-0">
                    {formatTime(l.tz)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border/50 text-[10px] text-foreground/60 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
              Follow the sun coverage across 5 time zones
            </div>
          </div>
        </div>

        {/* GSO crosslink */}
        <div className="mt-10">
          <a
            href="https://gso.origami99.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GSO by Origami 99, general supply order service in Pakistan"
            className="gso-crosslink group mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:px-6 sm:py-5"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                <Package className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coral">Also by Origami 99</div>
                <div className="mt-0.5 text-sm font-semibold text-foreground sm:text-base truncate">General Supply Order (Pakistan)</div>
                <div className="text-xs text-foreground/60 truncate">Industrial, office and event supplies delivered.</div>
              </div>
            </div>
            <span className="flex shrink-0 items-center justify-center rounded-full border border-coral/30 bg-coral/10 p-2 text-coral transition-colors group-hover:bg-coral group-hover:text-white">
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Origami 99. Creative and digital marketing agency.</p>
          <p className="tracking-wide">Built in studio. Shipped worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
