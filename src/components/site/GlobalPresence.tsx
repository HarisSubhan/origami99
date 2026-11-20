import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Loc = {
  country: string;
  city: string;
  flag: string;
  // SVG percentage coords on a 1000x500 world map
  x: number;
  y: number;
  region: string;
};

const locations: Loc[] = [
  { country: "Pakistan", city: "Islamabad", flag: "🇵🇰", x: 685, y: 200, region: "APAC HQ" },
  { country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦", x: 600, y: 230, region: "MENA Operations" },
  { country: "Germany", city: "Berlin", flag: "🇩🇪", x: 512, y: 148, region: "EU Operations" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦", x: 245, y: 170, region: "North America" },
  { country: "USA", city: "Austin, Texas", flag: "🇺🇸", x: 205, y: 210, region: "US Headquarters" },
];

// connection lines (pairs of indices)
const connections: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [0, 4],
];

export function GlobalPresence() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="global" className="relative py-20 sm:py-24 lg:py-32 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Follow-the-sun delivery
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Five countries. <span className="text-coral">One senior team.</span> Always on your timezone.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground">
            Islamabad hands off to Berlin, Berlin hands off to Toronto, Toronto hands off to Austin. Your project moves while the rest of the world sleeps.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
          {/* World map */}
          <div className="relative rounded-3xl bg-card/40 backdrop-blur border border-border p-4 sm:p-6 shadow-soft overflow-hidden">
            <div className="absolute inset-0 grid-bg-soft opacity-30" />
            <svg viewBox="0 0 1000 500" className="relative w-full h-auto">
              <defs>
                <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--coral)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--coral)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Dotted world map (stylized) */}
              <WorldDots />

              {/* Connection arcs */}
              {mounted && connections.map(([a, b], i) => {
                const A = locations[a]; const B = locations[b];
                const mx = (A.x + B.x) / 2;
                const my = Math.min(A.y, B.y) - 60;
                const d = `M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`;
                return (
                  <g key={i}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="var(--coral)"
                      strokeOpacity="0.25"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: i * 0.15 }}
                    />
                    <motion.circle
                      r="3"
                      fill="var(--coral)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                      style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
                    />
                  </g>
                );
              })}

              {/* Markers */}
              {locations.map((loc, i) => {
                const isActive = active === i;
                return (
                  <g
                    key={loc.country}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* pulse */}
                    <motion.circle
                      cx={loc.x}
                      cy={loc.y}
                      r="10"
                      fill="var(--coral)"
                      initial={{ scale: 0, opacity: 0.7 }}
                      animate={{ scale: [0.8, 2.4, 0.8], opacity: [0.55, 0, 0.55] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                      style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                    />
                    <motion.circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isActive ? 9 : 6}
                      fill="var(--coral)"
                      stroke="#fff"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                    />
                    <text
                      x={loc.x}
                      y={loc.y - 16}
                      textAnchor="middle"
                      className="fill-foreground"
                      style={{ fontSize: 12, fontWeight: 700 }}
                    >
                      {loc.city}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Live indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/60 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-foreground">5 offices live</span>
            </div>
          </div>

          {/* Location cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.country}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group relative rounded-2xl border p-4 sm:p-5 backdrop-blur transition-all cursor-pointer ${
                  active === i
                    ? "bg-coral/10 border-coral/50 shadow-glow"
                    : "bg-card/40 border-border hover:border-coral/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl leading-none shrink-0">{loc.flag}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold tracking-widest uppercase text-coral">
                      {loc.region}
                    </div>
                    <div className="text-lg font-bold text-foreground">{loc.city}</div>
                    <div className="text-sm text-muted-foreground">{loc.country}</div>
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    className="h-8 w-8 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-coral"
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stylized dot-grid world map (lightweight, no asset)
function WorldDots() {
  // Hand-picked dots to suggest continents on a 1000x500 canvas
  const dots: [number, number][] = [
    // North America
    [150,140],[170,150],[190,140],[210,150],[230,160],[170,170],[190,170],[210,170],[230,180],[250,180],[200,190],[220,200],[160,200],[180,210],[200,210],[220,210],[240,220],[260,230],[280,230],
    // South America
    [290,300],[300,320],[310,340],[300,360],[290,380],[310,380],[320,330],[300,280],[290,260],
    // Europe
    [490,160],[510,150],[530,160],[510,170],[530,180],[550,170],[470,170],[490,180],[510,190],[470,150],[450,170],
    // Africa
    [510,220],[530,240],[510,260],[530,280],[550,260],[490,230],[510,300],[530,320],[510,340],[490,300],[470,260],
    // Middle East / Asia
    [600,200],[620,210],[640,220],[660,210],[680,200],[700,210],[720,200],[640,240],[660,250],[680,240],[700,250],[720,260],
    // South / SE Asia
    [700,270],[720,280],[700,290],[680,280],[750,260],[770,280],[790,290],[780,310],[800,310],[820,300],
    // East Asia
    [780,200],[800,210],[820,200],[820,220],[800,230],[820,240],[840,220],[860,210],[840,200],
    // Australia
    [840,350],[860,360],[870,370],[850,370],[830,360],[820,370],[860,380],
    // UK/Ireland
    [450,150],[460,140],
    // Russia
    [580,130],[620,130],[660,140],[700,140],[740,150],[780,160],
  ];

  return (
    <g>
      {dots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="2.5"
          fill="currentColor"
          className="text-foreground/30"
        />
      ))}
    </g>
  );
}
