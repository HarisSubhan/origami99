import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { CtaButton } from "@/components/ui/cta-button";

export { Header, Footer, Contact, CtaButton };

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}

export function Crumbs({ parentLabel, parentTo, current }: { parentLabel: string; parentTo: string; current: string }) {
  return (
    <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
      <Link to="/" className="hover:text-foreground">Home</Link>
      <span>/</span>
      <Link to={parentTo as any} className="hover:text-foreground">{parentLabel}</Link>
      <span>/</span>
      <span className="text-foreground">{current}</span>
    </div>
  );
}

export function BackTo({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to as any} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
      <ArrowLeft className="h-4 w-4" /> {label}
    </Link>
  );
}

export function SectionTitle({ eyebrow, title, sub, align = "left" }: { eyebrow?: string; title: string; sub?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function Chip({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" | "success" | "warning" }) {
  const map: Record<string, string> = {
    muted: "bg-muted text-foreground/70",
    primary: "bg-primary/10 text-primary",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${map[tone]}`}>{children}</span>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40">
      {items.map((f, i) => (
        <details key={i} className="group px-5 py-4 sm:px-6 sm:py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base sm:text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span className="mt-1 text-muted-foreground transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Related({ title, items }: { title: string; items: { to: string; label: string; blurb: string }[] }) {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link key={it.to} to={it.to as any} className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{it.label}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContextCta({ headline, sub, cta = "Book a working call" }: { headline: string; sub?: string; cta?: string }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{headline}</h3>
          {sub && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{sub}</p>}
          <div className="mt-6 flex justify-center">
            <CtaButton as="route" to="/#contact">{cta}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// SVG helpers
export function NodeBox({ x, y, w = 140, h = 44, label, tone = "primary" }: { x: number; y: number; w?: number; h?: number; label: string; tone?: "primary" | "muted" | "accent" }) {
  const fill = tone === "primary" ? "hsl(var(--primary) / 0.08)" : tone === "accent" ? "hsl(var(--primary) / 0.16)" : "hsl(var(--muted))";
  const stroke = tone === "muted" ? "hsl(var(--border))" : "hsl(var(--primary) / 0.4)";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={stroke} strokeWidth={1} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className="fill-foreground" style={{ fontSize: 12, fontWeight: 600 }}>{label}</text>
    </g>
  );
}

export function Arrow({ x1, y1, x2, y2, dashed = false }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary) / 0.5)" strokeWidth={1.5} strokeDasharray={dashed ? "4 4" : undefined} markerEnd="url(#arr)" />
  );
}

export function ArrowDefs() {
  return (
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary) / 0.6)" />
      </marker>
    </defs>
  );
}

export function HeroWrap({ children }: { children: ReactNode }) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-section-grad">
      <div className="absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
