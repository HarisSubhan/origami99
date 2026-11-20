import { ReactNode } from "react";

export function SparkLine({ points, color = "#38bdf8", fill = true, className = "" }: { points: number[]; color?: string; fill?: boolean; className?: string }) {
  const w = 120, h = 40;
  const max = Math.max(...points), min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - ((p - min) / range) * h}`).join(" ");
  const fillD = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none">
      {fill && <path d={fillD} fill={color} opacity="0.18" />}
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BarRow({ values, color = "#38bdf8", className = "" }: { values: number[]; color?: string; className?: string }) {
  const max = Math.max(...values);
  return (
    <div className={`flex items-end gap-1 h-full ${className}`}>
      {values.map((v, i) => (
        <div key={i} className="flex-1 rounded-t" style={{ height: `${(v / max) * 100}%`, background: color, opacity: 0.55 + (i / values.length) * 0.45 }} />
      ))}
    </div>
  );
}

export function Donut({ value, color = "#38bdf8", label, size = 64 }: { value: number; color?: string; label?: string; size?: number }) {
  const r = 26, c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
        <circle cx="32" cy="32" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
        <circle cx="32" cy="32" r={r} stroke={color} strokeWidth="6" fill="none" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white">{label ?? `${value}%`}</div>
    </div>
  );
}

export function Avatar({ name, className = "" }: { name: string; className?: string }) {
  const init = name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <div className={`inline-flex items-center justify-center rounded-full text-[10px] font-semibold text-white ${className}`}
      style={{ background: `hsl(${hue} 55% 45%)` }}>
      {init}
    </div>
  );
}

export function Chip({ children, color = "rgba(255,255,255,0.08)", text = "rgba(255,255,255,0.85)" }: { children: ReactNode; color?: string; text?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: color, color: text }}>
      {children}
    </span>
  );
}

export function Row({ label, value, sub, dot }: { label: string; value: string; sub?: string; dot?: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-b-0">
      <div className="flex items-center gap-2 min-w-0">
        {dot && <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />}
        <span className="text-[11px] text-white/80 truncate">{label}</span>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-[11px] font-semibold text-white">{value}</div>
        {sub && <div className="text-[9px] text-white/40">{sub}</div>}
      </div>
    </div>
  );
}

export function StatCard({ label, value, delta, accent = "#38bdf8" }: { label: string; value: string; delta?: string; accent?: string }) {
  return (
    <div className="rounded-md bg-white/[0.03] border border-white/5 p-2.5">
      <div className="text-[9px] uppercase tracking-wider text-white/40">{label}</div>
      <div className="mt-0.5 text-lg font-bold text-white leading-tight">{value}</div>
      {delta && <div className="text-[10px] font-medium" style={{ color: accent }}>{delta}</div>}
    </div>
  );
}
