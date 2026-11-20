/**
 * SignatureShowcase — a per sub-service bespoke visual.
 * Each slug renders a unique inline SVG / HTML illustration so every
 * sub-service page feels individually designed, not templated.
 */
import type React from "react";
import { motion } from "motion/react";

type Props = { slug: string };

const wrap = "relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-border bg-card/70 backdrop-blur-xl shadow-glow";

// -------- helpers --------
const Chip = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${className}`}>{children}</span>
);

// -------- SOFTWARE --------
function CustomSoftware() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 grid-bg-soft opacity-40" />
      <div className="relative p-5 h-full grid grid-cols-3 gap-3 text-[10px]">
        {["Auth", "Tenants", "Billing", "Workflows", "Reports", "Audit", "API", "Jobs", "Admin"].map((n, i) => (
          <motion.div key={n} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="rounded-xl border border-coral/25 bg-background/70 p-3 flex flex-col justify-between">
            <div className="h-1.5 w-6 rounded-full bg-coral/60" />
            <div className="font-bold text-foreground">{n}</div>
            <div className="text-muted-foreground">module</div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>system.map.json</span><span>v1.4.0 · healthy</span>
      </div>
    </div>
  );
}

function SaaS() {
  const rows = [
    { plan: "Starter", price: "$29", seats: "3", api: "10k" },
    { plan: "Growth", price: "$99", seats: "15", api: "100k" },
    { plan: "Scale", price: "$399", seats: "50", api: "1M" },
    { plan: "Enterprise", price: "Custom", seats: "SSO", api: "∞" },
  ];
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-transparent" />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[10px] font-bold uppercase tracking-widest text-coral">Plan matrix · billing.stripe</div>
        <div className="mt-3 rounded-xl border border-border bg-background/80 overflow-hidden text-[11px]">
          <div className="grid grid-cols-4 bg-foreground/5 font-bold px-3 py-2">
            <div>Plan</div><div>Price</div><div>Seats</div><div>API</div>
          </div>
          {rows.map((r, i) => (
            <motion.div key={r.plan} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`grid grid-cols-4 px-3 py-2 border-t border-border ${i === 1 ? "bg-coral/10 text-foreground" : "text-foreground/85"}`}>
              <div className="font-semibold">{r.plan}</div><div>{r.price}</div><div>{r.seats}</div><div>{r.api}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex gap-2 text-[10px]">
          <Chip className="border-coral/40 text-coral bg-coral/10">MRR $47,320</Chip>
          <Chip className="border-border text-muted-foreground bg-background/70">Churn 2.1%</Chip>
          <Chip className="border-border text-muted-foreground bg-background/70">NRR 118%</Chip>
        </div>
      </div>
    </div>
  );
}

function MobileApp() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent" />
      <div className="relative h-full flex items-center justify-center gap-3 p-5">
        {["iOS", "Android", "Tablet"].map((p, i) => (
          <motion.div key={p} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="w-20 h-44 rounded-[18px] border-2 border-foreground/25 bg-background/90 shadow-glow overflow-hidden">
            <div className="h-3 bg-foreground/10" />
            <div className="p-2 space-y-1.5">
              <div className="h-6 rounded bg-coral/70" />
              <div className="h-2 rounded bg-foreground/20 w-3/4" />
              <div className="h-2 rounded bg-foreground/10" />
              <div className="h-8 rounded bg-foreground/10" />
              <div className="h-2 rounded bg-foreground/20 w-2/3" />
              <div className="h-2 rounded bg-foreground/10" />
            </div>
            <div className="mt-2 text-center text-[9px] font-bold text-muted-foreground">{p}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function UiUx() {
  return (
    <div className={wrap}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="ux1" x1="0" x2="1"><stop offset="0" stopColor="hsl(var(--coral))" stopOpacity=".2" /><stop offset="1" stopColor="transparent" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#ux1)" />
        {[[40, 60], [180, 60], [320, 60], [40, 170], [180, 170], [320, 170]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width="60" height="80" rx="10" fill="hsl(var(--background))" stroke="hsl(var(--border))" />
            <rect x={x + 8} y={y + 10} width="44" height="4" rx="2" fill="hsl(var(--coral))" />
            <rect x={x + 8} y={y + 20} width="30" height="3" rx="1.5" fill="hsl(var(--foreground))" opacity=".3" />
            <rect x={x + 8} y={y + 30} width="44" height="20" rx="4" fill="hsl(var(--foreground))" opacity=".08" />
          </g>
        ))}
        {[[100, 100, 180, 100], [240, 100, 320, 100], [100, 210, 180, 210], [240, 210, 320, 210], [70, 140, 70, 170], [210, 140, 210, 170], [350, 140, 350, 170]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--coral))" strokeWidth="1.5" strokeDasharray="3 3" opacity=".6" />
        ))}
      </svg>
      <div className="absolute bottom-3 left-5 text-[10px] font-bold uppercase tracking-widest text-coral">userflow.v3 · 6 screens · 12 states</div>
    </div>
  );
}

function ERP() {
  const mods = ["Finance", "Inventory", "Sales", "HR", "Manufacturing", "Purchasing", "Reporting", "CRM"];
  return (
    <div className={wrap}>
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[10px] font-bold uppercase tracking-widest text-coral">ERP module map</div>
        <div className="mt-3 grid grid-cols-4 gap-2 flex-1">
          {mods.map((m, i) => (
            <motion.div key={m} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-background/80 p-2 flex flex-col items-center justify-center text-center">
              <div className="h-6 w-6 rounded-full bg-coral-grad mb-1" />
              <div className="text-[10px] font-bold">{m}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
          <div className="h-full w-3/4 bg-coral" />
        </div>
        <div className="mt-1 text-[9px] text-muted-foreground">Shared ledger · single source of truth</div>
      </div>
    </div>
  );
}

// -------- WEB --------
function CustomWeb() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-tr from-coral/10 via-transparent to-coral/5" />
      <div className="relative p-5 h-full flex flex-col">
        <div className="rounded-xl border border-border bg-background/80 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
            <div className="h-2 w-2 rounded-full bg-red-400" /><div className="h-2 w-2 rounded-full bg-yellow-400" /><div className="h-2 w-2 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 h-4 rounded bg-foreground/5 text-[9px] flex items-center px-2 text-muted-foreground">https://yourbrand.com</div>
          </div>
          <div className="p-3 grid grid-cols-3 gap-2">
            <div className="col-span-3 h-10 rounded bg-coral/80" />
            <div className="h-14 rounded bg-foreground/10" /><div className="h-14 rounded bg-foreground/10" /><div className="h-14 rounded bg-foreground/10" />
            <div className="col-span-2 h-10 rounded bg-foreground/5" /><div className="h-10 rounded bg-coral/30" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="rounded-lg border border-coral/30 bg-coral/10 p-2"><div className="font-black text-coral text-base">0.7s</div>LCP</div>
          <div className="rounded-lg border border-border bg-background/70 p-2"><div className="font-black text-base">100</div>Lighthouse</div>
          <div className="rounded-lg border border-border bg-background/70 p-2"><div className="font-black text-base">A+</div>Security</div>
        </div>
      </div>
    </div>
  );
}

function Shopify() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-coral/10" />
      <div className="relative p-5 h-full flex gap-3">
        <div className="flex-1 rounded-xl border border-border bg-background/80 p-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-coral">Product</div>
          <div className="mt-2 h-20 rounded-lg bg-gradient-to-br from-coral/30 to-foreground/10" />
          <div className="mt-2 text-[11px] font-bold">Signature Tee</div>
          <div className="text-[10px] text-muted-foreground">$48 · 4 colors</div>
          <button className="mt-2 w-full rounded-md bg-foreground text-background text-[10px] font-bold py-1.5">Add to cart</button>
        </div>
        <div className="w-32 rounded-xl border border-border bg-background/80 p-3 text-[10px]">
          <div className="font-bold uppercase tracking-widest text-coral">Checkout</div>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 rounded bg-foreground/20 w-2/3" />
            <div className="h-2 rounded bg-foreground/10" />
            <div className="h-2 rounded bg-foreground/10 w-1/2" />
          </div>
          <div className="mt-2 flex items-center justify-between font-bold"><span>Total</span><span>$54</span></div>
          <div className="mt-2 h-6 rounded bg-green-500/80 text-white text-[10px] font-bold flex items-center justify-center">Shop Pay</div>
        </div>
      </div>
      <div className="absolute bottom-2 left-5 right-5 text-[9px] text-muted-foreground flex justify-between"><span>Conversion 3.4%</span><span>AOV $92</span></div>
    </div>
  );
}

function WordPress() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 grid-bg-soft opacity-30" />
      <div className="relative p-5 h-full flex gap-3">
        <aside className="w-24 rounded-xl border border-border bg-background/85 p-2 text-[10px] space-y-1">
          {["Dashboard", "Posts", "Pages", "Media", "SEO", "Plugins", "Users"].map((n, i) => (
            <div key={n} className={`px-2 py-1 rounded ${i === 1 ? "bg-coral text-white" : "text-foreground/70"}`}>{n}</div>
          ))}
        </aside>
        <div className="flex-1 rounded-xl border border-border bg-background/85 p-3">
          <div className="text-[10px] font-bold text-coral">Edit Post · Gutenberg</div>
          <div className="mt-2 h-6 rounded bg-foreground/10 flex items-center px-2 text-[10px] font-bold">Ultimate Guide to Local SEO</div>
          <div className="mt-2 space-y-1">
            <div className="h-2 rounded bg-foreground/15 w-5/6" />
            <div className="h-2 rounded bg-foreground/10 w-4/6" />
            <div className="h-14 rounded bg-coral/15 border border-coral/30" />
            <div className="h-2 rounded bg-foreground/10 w-3/4" />
          </div>
          <div className="mt-2 flex gap-1 text-[9px]">
            <Chip className="border-green-500/40 bg-green-500/10 text-green-700">SEO 92</Chip>
            <Chip className="border-coral/40 bg-coral/10 text-coral">Readability</Chip>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebflowFramer() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-coral/10" />
      <div className="relative p-4 h-full">
        <div className="rounded-xl border border-border bg-background/85 h-full overflow-hidden flex">
          <div className="w-8 border-r border-border bg-foreground/5 flex flex-col items-center py-3 gap-2">
            {["◨","▢","○","T","⇔","▷"].map(s => <div key={s} className="text-[10px] text-muted-foreground">{s}</div>)}
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-3 border border-dashed border-coral/40 rounded-lg" />
            <motion.div initial={{ x: 0 }} animate={{ x: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-10 h-8 w-20 rounded bg-coral/80" />
            <div className="absolute top-24 left-10 right-10 h-12 rounded bg-foreground/10" />
            <div className="absolute bottom-6 left-10 h-6 w-24 rounded bg-foreground/20" />
            <div className="absolute top-2 right-3 text-[9px] font-bold text-coral">Auto layout · Breakpoints</div>
          </div>
          <div className="w-24 border-l border-border bg-foreground/5 p-2 text-[9px] space-y-1">
            <div className="font-bold text-foreground">Style</div>
            <div className="text-muted-foreground">Padding 32</div>
            <div className="text-muted-foreground">Radius 12</div>
            <div className="text-muted-foreground">Shadow lg</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WixNoCode() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent" />
      <div className="relative p-5 h-full grid grid-cols-6 grid-rows-4 gap-2">
        {[
          { c: "col-span-6 row-span-1", label: "Hero", bg: "bg-coral/80 text-white" },
          { c: "col-span-2 row-span-2", label: "About" },
          { c: "col-span-2 row-span-1", label: "Gallery" },
          { c: "col-span-2 row-span-1", label: "Testimonials" },
          { c: "col-span-4 row-span-1", label: "Services" },
          { c: "col-span-6 row-span-1", label: "Contact Form", bg: "bg-foreground/10" },
        ].map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className={`${b.c} rounded-lg border border-dashed border-coral/40 ${b.bg ?? "bg-background/70"} flex items-center justify-center text-[10px] font-bold`}>
            {b.label}
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-2 left-5 text-[9px] text-muted-foreground">Drag · drop · publish · no code</div>
    </div>
  );
}

// -------- MARKETING --------
function GoogleAds() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10" />
      <div className="relative p-5 h-full">
        <div className="text-[10px] font-bold uppercase tracking-widest text-coral mb-2">Search results · "best crm for realtors"</div>
        <div className="space-y-2">
          {[1, 2].map((n) => (
            <motion.div key={n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: n * 0.1 }}
              className="rounded-lg border border-coral/30 bg-background/85 p-3">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-green-700">
                <span className="rounded bg-green-500/15 border border-green-500/40 px-1">Sponsored</span>
                yourbrand.com › crm › realtors
              </div>
              <div className="mt-1 text-[12px] font-bold text-blue-700">Realtor CRM Built For Closings · Free 14 Day Trial</div>
              <div className="text-[10px] text-muted-foreground">MLS sync · e sign · pipeline automation. Rated 4.8 by 2,300 agents.</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex gap-1.5 text-[9px] flex-wrap">
          <Chip className="border-coral/40 bg-coral/10 text-coral">CTR 8.2%</Chip>
          <Chip className="border-border bg-background/70 text-muted-foreground">CPC $3.10</Chip>
          <Chip className="border-border bg-background/70 text-muted-foreground">ROAS 4.6x</Chip>
          <Chip className="border-border bg-background/70 text-muted-foreground">Quality Score 9/10</Chip>
        </div>
      </div>
    </div>
  );
}

function MetaAds() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-pink-500/10" />
      <div className="relative p-5 h-full flex gap-3">
        <div className="w-40 rounded-2xl border border-border bg-background/85 overflow-hidden">
          <div className="flex items-center gap-2 p-2 border-b border-border">
            <div className="h-6 w-6 rounded-full bg-coral" />
            <div className="text-[10px] font-bold">yourbrand · Sponsored</div>
          </div>
          <div className="h-28 bg-gradient-to-br from-coral/40 to-foreground/20 flex items-center justify-center text-white font-black text-xs">HOOK: STOP SCROLLING</div>
          <div className="p-2 text-[10px]">
            <div className="font-bold">Shop the drop →</div>
            <div className="text-muted-foreground">Limited stock · ends Sun</div>
          </div>
        </div>
        <div className="flex-1 space-y-2 text-[10px]">
          <div className="rounded-lg border border-border bg-background/85 p-2">
            <div className="font-bold text-coral">Advantage+ shopping</div>
            <div className="mt-1 flex justify-between"><span>Spend</span><span className="font-bold">$12,480</span></div>
            <div className="flex justify-between"><span>Purchases</span><span className="font-bold">318</span></div>
            <div className="flex justify-between"><span>ROAS</span><span className="font-bold text-green-600">4.2x</span></div>
          </div>
          <div className="rounded-lg border border-border bg-background/85 p-2">
            <div className="font-bold">Creative test · Hook variants</div>
            <div className="mt-1 space-y-1">
              {["UGC-hook-A · 6.1x", "Studio-B · 3.4x", "Meme-C · 2.1x"].map(s => <div key={s} className="text-muted-foreground">{s}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TikTokAds() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-transparent to-cyan-500/15" />
      <div className="relative h-full flex items-center justify-center gap-3 p-5">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="w-24 h-48 rounded-[18px] border-2 border-foreground/25 overflow-hidden relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/50 via-purple-500/30 to-cyan-500/50" />
            <div className="absolute top-2 left-2 right-2 text-white text-[9px] font-black uppercase leading-tight">
              {["POV: it just works", "Wait for it…", "3 reasons why"][i]}
            </div>
            <div className="absolute bottom-2 left-2 right-2 space-y-1">
              <div className="text-white text-[9px] font-bold">@yourbrand</div>
              <div className="flex justify-between text-white text-[9px]">
                <span>♥ {["42k", "128k", "9.4k"][i]}</span><span>▷ {["1.2M", "3.4M", "220k"][i]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-2 left-5 right-5 flex justify-between text-[9px] text-muted-foreground">
        <span>Hook · Payoff · CTA</span><span>Hold rate 68%</span>
      </div>
    </div>
  );
}

function FullFunnel() {
  const stages = [
    { name: "Awareness", w: "w-full", n: "1.2M" },
    { name: "Consideration", w: "w-4/5", n: "340k" },
    { name: "Intent", w: "w-3/5", n: "68k" },
    { name: "Purchase", w: "w-2/5", n: "12k" },
    { name: "Retention", w: "w-1/3", n: "9.1k" },
  ];
  return (
    <div className={wrap}>
      <div className="absolute inset-0 grid-bg-soft opacity-25" />
      <div className="relative p-5 h-full flex flex-col justify-center gap-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-coral mb-1">Full funnel · last 30 days</div>
        {stages.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className={`${s.w} mx-auto rounded-lg bg-gradient-to-r from-coral to-coral/60 text-white flex items-center justify-between px-3 py-2 text-[11px] font-bold shadow-glow`}>
            <span>{s.name}</span><span>{s.n}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VideoEditing() {
  return (
    <div className={wrap}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-coral/10" />
      <div className="relative p-4 h-full flex flex-col gap-2">
        <div className="flex-1 rounded-xl bg-black overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/40 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px]">
            <span>Preview · 00:14</span><span>4K · 24fps</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center">
            <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-black ml-1" />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-background/85 p-2 space-y-1">
          {[
            { c: "bg-coral", w: "w-3/4" },
            { c: "bg-purple-500", w: "w-1/2" },
            { c: "bg-cyan-500", w: "w-5/6" },
            { c: "bg-yellow-500", w: "w-2/5" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="text-[9px] w-8 text-muted-foreground">{["V1","V2","A1","A2"][i]}</div>
              <div className="flex-1 h-3 rounded bg-foreground/10 relative overflow-hidden">
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`${t.c} h-full ${t.w} origin-left rounded`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// -------- registry --------
const registry: Record<string, () => React.ReactElement> = {
  "software/custom-software-development": CustomSoftware,
  "software/custom-saas-products": SaaS,
  "software/mobile-app-development": MobileApp,
  "software/ui-ux-design": UiUx,
  "software/erp-development": ERP,
  "web-development/custom-web-development": CustomWeb,
  "web-development/shopify-ecommerce": Shopify,
  "web-development/wordpress-development": WordPress,
  "web-development/webflow-framer": WebflowFramer,
  "web-development/wix-no-code": WixNoCode,
  "digital-marketing/google-ads": GoogleAds,
  "digital-marketing/meta-ads": MetaAds,
  "digital-marketing/tiktok-short-form-ads": TikTokAds,
  "digital-marketing/full-funnel-digital-marketing": FullFunnel,
  "digital-marketing/video-editing-production": VideoEditing,
};

export function SignatureShowcase({ slug }: Props) {
  const Cmp = registry[slug] ?? CustomSoftware;
  return <Cmp />;
}
