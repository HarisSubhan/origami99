import { Row, StatCard, Chip, Avatar, SparkLine } from "./_primitives";
import { ReactNode } from "react";

export const brand = {
  name: "Real-Estate CRM",
  short: "CRM",
  tag: "Pipeline · listings · WhatsApp",
  accent: "#ec4899",
  gradient: "from-[#160d18] via-[#1c111e] to-[#0e070f]",
  modules: ["Pipeline", "Listings", "Viewings", "WhatsApp", "Commissions"],
  proof: [
    { label: "80+ brokerages" },
    { label: "35k listings" },
    { label: "Lead → deal 12%" },
    { label: "AED 3.2B closed" },
  ],
};

const stages = [
  { name: "New", count: 42, color: "#a3a3a3" },
  { name: "Qualified", count: 28, color: brand.accent },
  { name: "Viewing", count: 18, color: "#8b5cf6" },
  { name: "Offer", count: 9, color: "#f59e0b" },
  { name: "Closed", count: 6, color: "#22c55e" },
];

export function Desktop() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex text-[11px]`}>
      <div className="w-40 border-r border-white/5 p-2">
        <div className="flex items-center gap-2 mb-2 px-1">
          <div className="h-6 w-6 rounded-md flex items-center justify-center text-white font-bold text-[10px]" style={{ background: brand.accent }}>◈</div>
          <div>
            <div className="font-semibold text-[11px]">Estate.CRM</div>
            <div className="text-[9px] text-white/40">Broker suite</div>
          </div>
        </div>
        <div className="space-y-0.5">
          {["Pipeline", "Leads", "Listings", "Viewings", "Clients", "WhatsApp", "Commissions", "Reports"].map((m, i) => (
            <div key={m} className={`px-2 py-1.5 rounded-md text-[10px] ${i === 0 ? "bg-white/10 text-white" : "text-white/50"}`}>{m}</div>
          ))}
        </div>
        <div className="mt-3 rounded-md p-2 border border-white/10" style={{ background: `${brand.accent}12` }}>
          <div className="text-[9px] text-white/60">This month</div>
          <div className="text-lg font-bold">AED 42M</div>
          <div className="text-[9px]" style={{ color: brand.accent }}>gross commission ↑ 18%</div>
        </div>
      </div>

      <div className="flex-1 p-3 overflow-hidden space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/40">Pipeline · Q4</div>
            <div className="text-base font-semibold">Deal board</div>
          </div>
          <div className="flex gap-1">
            <Chip color={`${brand.accent}22`} text={brand.accent}>All agents</Chip>
            <Chip>Dubai</Chip>
            <Chip>Off-plan</Chip>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5 flex-1" style={{ height: "60%" }}>
          {stages.map((s) => (
            <div key={s.name} className="rounded-md bg-white/[0.03] border border-white/5 p-1.5 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-semibold">{s.name}</span>
                <Chip color={`${s.color}22`} text={s.color}>{s.count}</Chip>
              </div>
              <div className="space-y-1 overflow-hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="rounded bg-white/[0.04] border border-white/5 p-1.5">
                    <div className="flex items-center gap-1"><Avatar name={`C ${i}`} className="h-3.5 w-3.5" /><span className="text-[9px] truncate">Villa · Palm</span></div>
                    <div className="text-[9px] font-semibold mt-0.5" style={{color:s.color}}>AED {(2.1 + i * 0.4).toFixed(1)}M</div>
                    <div className="h-0.5 rounded mt-1" style={{ background: s.color, width: `${30 + i * 20}%`, opacity: 0.6 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 h-20">
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60">Viewings this week</div>
            <div className="text-lg font-bold">124</div>
            <SparkLine points={[8,12,10,18,16,22,20,26]} color={brand.accent} className="w-full h-8" />
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">Hot leads · WhatsApp</div>
            <Row label="A. Al Marri · Palm Villa" value="2m ago" dot={brand.accent} />
            <Row label="R. Chen · Marina 2BR" value="14m" dot={brand.accent} />
            <Row label="M. Ibrahim · Off-plan" value="1h" dot="#a3a3a3" />
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60">Top agents</div>
            <Row label="Sarah H." value="AED 8.2M" dot={brand.accent} />
            <Row label="Faisal K." value="AED 6.4M" dot={brand.accent} />
            <Row label="Layla A." value="AED 4.1M" dot="#a3a3a3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  // WhatsApp thread
  return (
    <div className="h-full w-full bg-[#0b141a] text-white flex flex-col text-[10px]">
      <div className="px-3 py-2 flex items-center gap-2 border-b border-white/5" style={{ background: `${brand.accent}18` }}>
        <Avatar name="Ali Marri" className="h-6 w-6" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-semibold truncate">Ali Al Marri · Hot lead</div>
          <div className="text-[9px] text-white/50">Palm Villa · budget AED 8M</div>
        </div>
        <Chip color={`${brand.accent}22`} text={brand.accent}>WhatsApp</Chip>
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="max-w-[75%] rounded-lg bg-white/[0.05] p-1.5 text-[9px]">Hi Sarah, is the Palm 5BR still available?</div>
        <div className="max-w-[75%] rounded-lg bg-white/[0.05] p-1.5 text-[9px]">Preferred viewing Sat afternoon.</div>
        <div className="ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] text-white" style={{ background: brand.accent }}>Yes! I can arrange Sat 4pm. Sending brochure now 📎</div>
        <div className="ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] text-white" style={{ background: brand.accent }}>Attached: Palm-5BR-Villa.pdf</div>
        <div className="ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] flex items-center gap-1 text-white/70 bg-white/5">
          <span className="h-1.5 w-1.5 rounded-full" style={{background:brand.accent}}/> AI: auto-drafted follow-up
        </div>
      </div>
      <div className="p-2 border-t border-white/5">
        <div className="rounded-full bg-white/5 px-3 py-1.5 text-[9px] text-white/50">Type a message…</div>
      </div>
    </div>
  );
}
