import { SparkLine, Donut, Row, StatCard, Chip } from "./_primitives";

function LabeledBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-14 text-[9px] text-white/60">{label}</div>
      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </div>
      <div className="w-8 text-right text-[9px] text-white/70">{value}%</div>
    </div>
  );
}

import { ReactNode } from "react";

export const brand = {
  name: "PulsePOS",
  short: "AI Retail OS",
  tag: "AI-native point of sale for modern retail",
  accent: "#7cf1ff",
  gradient: "from-[#0b1024] via-[#141a3a] to-[#080a1a]",
  modules: ["Sales", "Inventory", "AI Copilot", "Staff", "Multi-store", "Loyalty"],
  proof: [
    { label: "200+ storefronts" },
    { label: "12 countries" },
    { label: "AI-suggested upsells +18%" },
    { label: "99.98% uptime" },
  ],
};

export function Desktop() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex text-[11px]`}>
      {/* Sidebar */}
      <div className="w-40 border-r border-white/5 p-3 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-md flex items-center justify-center text-black font-bold text-[10px]" style={{ background: `linear-gradient(135deg, ${brand.accent}, #6a5cff)` }}>P</div>
          <div>
            <div className="font-semibold text-[11px]">PulsePOS</div>
            <div className="text-[9px] text-white/40">AI Retail OS</div>
          </div>
        </div>
        {["Dashboard", "Sales", "Products", "Inventory", "AI Copilot", "Customers", "Staff", "Stores", "Loyalty", "Reports"].map((m, i) => (
          <div key={m} className={`px-2 py-1.5 rounded-md ${i === 0 ? "bg-white/10 text-white" : "text-white/50"}`}>
            {m}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/40">Today · All stores</div>
            <div className="text-base font-semibold">Retail command center</div>
          </div>
          <div className="flex items-center gap-2">
            <Chip color={`${brand.accent}22`} text={brand.accent}>● Live sync</Chip>
            <div className="px-2 py-1 rounded-md bg-white/5 text-[10px]">Nov 12 · Tue</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <StatCard label="Revenue" value="$128.4k" delta="+22% vs LW" accent={brand.accent} />
          <StatCard label="Transactions" value="1,284" delta="+11%" accent={brand.accent} />
          <StatCard label="Avg basket" value="$99.70" delta="+3.4%" accent={brand.accent} />
          <StatCard label="AI upsells" value="$18.2k" delta="+18% MoM" accent={brand.accent} />
        </div>

        <div className="grid grid-cols-3 gap-2 h-24">
          <div className="col-span-2 rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="flex items-center justify-between mb-1">
              <div className="text-[10px] text-white/60">Channel mix, last 7 days</div>
              <div className="text-[10px]" style={{ color: brand.accent }}>$1.62M</div>
            </div>
            <div className="space-y-1 mt-1">
              <LabeledBar label="In-store" value={68} color={brand.accent} />
              <LabeledBar label="Online" value={44} color="#6a5cff" />
              <LabeledBar label="Kiosk" value={22} color="#ffffff40" />
            </div>
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">By category</div>
            <div className="flex items-center gap-2">
              <Donut value={64} color={brand.accent} label="64%" size={54} />
              <div className="space-y-0.5 text-[9px]">
                <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{background:brand.accent}}/> Apparel 64%</div>
                <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#6a5cff]"/> Beauty 22%</div>
                <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/25"/> Home 14%</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Copilot insight strip */}
        <div className="rounded-md border p-2 flex items-center gap-3" style={{ borderColor: `${brand.accent}55`, background: `linear-gradient(90deg, ${brand.accent}18, transparent)` }}>
          <div className="h-7 w-7 rounded-md flex items-center justify-center text-black font-bold text-[10px] shrink-0" style={{ background: brand.accent }}>AI</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-white/50">Copilot insight · 12:04</div>
            <div className="text-[11px] truncate">Basket size is 12% below Tuesday baseline, bundle SKU-2201 + SKU-7710 to recover $2.1k/day.</div>
          </div>
          <button className="px-2 py-1 rounded text-[10px] font-semibold text-black" style={{ background: brand.accent }}>Apply</button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">Store leaderboard</div>
            <Row label="Downtown Flagship" value="$42.1k" dot={brand.accent} />
            <Row label="Marina Walk" value="$31.8k" dot={brand.accent} />
            <Row label="City Centre" value="$24.6k" dot="#6a5cff" />
            <Row label="Airport T3" value="$18.9k" dot="#ffffff40" />
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">Sales, 14d</div>
            <SparkLine points={[12,18,15,22,20,28,26,34,30,38,42,39,48,52]} color={brand.accent} className="w-full h-14" />
            <div className="text-[9px] text-white/40">Peak Sat 6pm · +32%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  // Mobile POS checkout
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#0b1024] to-black text-white flex flex-col text-[10px]">
      <div className="pt-6 px-3 flex items-center justify-between">
        <div className="text-[9px] text-white/50">9:41</div>
        <div className="text-[9px] text-white/50">●●●</div>
      </div>
      <div className="px-3 pt-3">
        <div className="text-[9px] text-white/40">Cart · 4 items</div>
        <div className="text-lg font-semibold" style={{ color: brand.accent }}>$986.00</div>
      </div>
      <div className="mt-2 mx-3 rounded-lg border border-white/10 divide-y divide-white/5 bg-white/[0.03]">
        {[
          ["Wool blazer", "$420"],
          ["Silk scarf", "$180"],
          ["Leather belt", "$240"],
          ["Fragrance", "$146"],
        ].map(([n, p]) => (
          <div key={n} className="flex items-center justify-between px-2 py-1.5">
            <div>{n}</div>
            <div className="text-white/70">{p}</div>
          </div>
        ))}
      </div>
      <div className="mx-3 mt-2 rounded-lg border p-2" style={{ borderColor: `${brand.accent}55`, background: `${brand.accent}10` }}>
        <div className="text-[9px]" style={{ color: brand.accent }}>AI Copilot</div>
        <div className="text-[10px]">Add matching tie ($60)? +5% AOV likelihood.</div>
      </div>
      <div className="mt-auto mx-3 mb-4 space-y-2">
        <button className="w-full rounded-lg py-2 font-semibold text-black" style={{ background: brand.accent }}>Tap to pay</button>
        <button className="w-full rounded-lg py-2 font-medium bg-white/5 border border-white/10">Send receipt</button>
      </div>
    </div>
  );
}
