import { Chip, Row, StatCard, SparkLine, Donut } from "./_primitives";
import { brand } from "./PosScreens";

const A = brand.accent;

export function AICopilot() {
  const suggestions = [
    { title: "Bundle SKU-2201 + SKU-7710", lift: "+$2.1k/day", conf: 92 },
    { title: "Discount slow-mover FR-018 by 15%", lift: "+$860/day", conf: 84 },
    { title: "Move blazers to till-3 endcap", lift: "+11% AOV", conf: 78 },
    { title: "Push loyalty tier upsell", lift: "+$540/day", conf: 71 },
  ];
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">AI Copilot · retail</div>
          <div className="text-[13px] font-semibold">Live suggestions</div>
        </div>
        <Chip color={`${A}22`} text={A}>● streaming</Chip>
      </div>
      <div className="mt-2 space-y-1.5 flex-1 overflow-hidden">
        {suggestions.map((s) => (
          <div key={s.title} className="rounded-md border p-1.5" style={{ borderColor: `${A}33`, background: `${A}10` }}>
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold truncate">{s.title}</div>
              <div className="text-[9px]" style={{ color: A }}>{s.lift}</div>
            </div>
            <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${s.conf}%`, background: A }} />
            </div>
            <div className="mt-0.5 flex items-center justify-between text-[8px] text-white/50">
              <span>confidence {s.conf}%</span>
              <span>apply →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FloorHeatmap() {
  const tills = Array.from({ length: 6 * 10 });
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Store · Downtown</div>
          <div className="text-[13px] font-semibold">Floor heatmap · by till</div>
        </div>
        <Chip color={`${A}22`} text={A}>● 3pm–7pm</Chip>
      </div>
      <div className="grid grid-cols-10 gap-[3px] flex-1">
        {tills.map((_, i) => {
          const heat = (Math.sin(i * 0.9) + Math.cos(i * 0.4) + 2) / 4;
          const col = heat > 0.7 ? A : heat > 0.5 ? "#6a5cff" : heat > 0.3 ? "#22303a" : "#151a1f";
          return <div key={i} className="rounded-sm" style={{ background: col, opacity: 0.35 + heat * 0.65 }} />;
        })}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        <StatCard label="Peak till" value="T-04" delta="128 baskets/hr" accent={A} />
        <StatCard label="Dwell time" value="4m 12s" delta="−18s vs LW" accent={A} />
        <StatCard label="Queue alerts" value="2" delta="auto-dispatched" accent="#fb923c" />
      </div>
    </div>
  );
}

export function LoyaltyConsole() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Loyalty · wallet</div>
          <div className="text-[13px] font-semibold">Member cohort · Nov</div>
        </div>
        <Chip color={`${A}22`} text={A}>84.2k members</Chip>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex flex-col items-center">
          <Donut value={62} color={A} label="62%" size={56} />
          <div className="text-[9px] text-white/50 mt-1">Repeat purchase</div>
        </div>
        <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 col-span-2">
          <div className="text-[9px] text-white/60">Tier mix</div>
          <div className="mt-1 space-y-1">
            {[["Silver", 48, "#a3a3a3"], ["Gold", 32, "#f59e0b"], ["Platinum", 14, A], ["Black", 6, "#ffffff"]].map(([n, v, c]) => (
              <div key={n as string} className="flex items-center gap-2">
                <div className="w-12 text-[9px] text-white/60">{n}</div>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${v}%`, background: c as string }} />
                </div>
                <div className="w-7 text-right text-[9px]">{v}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        <div className="text-[9px] text-white/60 mb-1">Top spenders · 30d</div>
        <Row label="Layla Al Marri · Platinum" value="$4,820" dot={A} />
        <Row label="R. Chen · Gold" value="$2,140" dot="#f59e0b" />
        <Row label="A. Patel · Gold" value="$1,880" dot="#f59e0b" />
        <Row label="M. Ibrahim · Silver" value="$1,220" dot="#a3a3a3" />
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2">
        <div className="text-[9px] text-white/60">Points redeemed · 14d</div>
        <SparkLine points={[8,10,14,12,18,22,20,26,30,28,34,38,36,44]} color={A} className="w-full h-8" />
      </div>
    </div>
  );
}
