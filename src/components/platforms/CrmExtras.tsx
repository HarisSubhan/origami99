import { Chip, Row, StatCard, Avatar, SparkLine } from "./_primitives";
import { brand } from "./CrmScreens";

const A = brand.accent;

export function PipelineKanban() {
  const cols = [
    ["New", 42, "#a3a3a3"],
    ["Qualified", 28, A],
    ["Viewing", 18, "#8b5cf6"],
    ["Offer", 9, "#f59e0b"],
    ["Closed", 6, "#22c55e"],
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Pipeline · Q4</div>
          <div className="text-[13px] font-semibold">Deals kanban</div>
        </div>
        <Chip color={`${A}22`} text={A}>AED 42M · MTD</Chip>
      </div>
      <div className="grid grid-cols-5 gap-1 flex-1 overflow-hidden">
        {cols.map(([n, c, col]) => (
          <div key={n as string} className="rounded-md bg-white/[0.03] border border-white/5 p-1 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-semibold truncate">{n}</span>
              <Chip color={`${col}22`} text={col as string}>{c as number}</Chip>
            </div>
            <div className="space-y-1 overflow-hidden">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded bg-white/[0.04] border border-white/5 p-1">
                  <div className="text-[7px] text-white/50 truncate">Villa · Palm</div>
                  <div className="text-[8px] font-semibold" style={{ color: col as string }}>AED {(2.1 + i * 0.4).toFixed(1)}M</div>
                  <div className="h-0.5 rounded mt-0.5" style={{ background: col as string, width: `${30 + i * 20}%` }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AgentLeaderboard() {
  const agents = [
    ["Sarah H.", "Dubai · luxury", "AED 8.2M", 92, A],
    ["Faisal K.", "Dubai · off-plan", "AED 6.4M", 78, A],
    ["Layla A.", "Abu Dhabi", "AED 4.1M", 61, "#f59e0b"],
    ["Omar M.", "Sharjah", "AED 2.8M", 44, "#f59e0b"],
    ["Priya S.", "Business Bay", "AED 1.9M", 32, "#a3a3a3"],
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Agents · Nov</div>
          <div className="text-[13px] font-semibold">Leaderboard</div>
        </div>
        <Chip color={`${A}22`} text={A}>MTD</Chip>
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        {agents.map(([n, sub, v, pct, c], i) => (
          <div key={n as string} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-b-0">
            <div className="w-4 text-center text-[10px] font-bold" style={{ color: A }}>{i + 1}</div>
            <Avatar name={n as string} className="h-6 w-6" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold truncate">{n}</div>
              <div className="text-[8px] text-white/40">{sub}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold" style={{ color: c as string }}>{v}</div>
              <div className="text-[8px] text-white/40">{pct}% quota</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DealTimeline() {
  const events = [
    ["10:42", "WhatsApp reply from Ali Al Marri", "hot"],
    ["10:30", "Brochure sent · Palm-5BR.pdf", "system"],
    ["10:12", "Viewing scheduled · Sat 4pm", "call"],
    ["09:48", "Call · 6m 12s · Sarah H.", "call"],
    ["Yesterday", "Lead qualified · budget AED 8M", "qualify"],
    ["Mon", "Inbound · Instagram DM", "inbound"],
  ];
  const colorMap: Record<string, string> = { hot: A, system: "#a3a3a3", call: "#8b5cf6", qualify: "#22c55e", inbound: "#f59e0b" };
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Deal · #DX-2841</div>
          <div className="text-[13px] font-semibold">Ali Al Marri · Palm 5BR</div>
        </div>
        <Chip color={`${A}22`} text={A}>AED 8.2M</Chip>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <StatCard label="Touchpoints" value="14" delta="7 days" accent={A} />
        <StatCard label="Response" value="4m" delta="avg" accent={A} />
        <StatCard label="Close prob." value="72%" delta="AI scored" accent={A} />
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1 relative">
        <div className="absolute left-[13px] top-2 bottom-2 w-px bg-white/10" />
        {events.map(([t, txt, kind], i) => (
          <div key={i} className="flex items-start gap-2 py-1 relative">
            <div className="mt-0.5 h-2 w-2 rounded-full shrink-0 z-10 ring-2 ring-[#160d18]" style={{ background: colorMap[kind as string] }} />
            <div className="w-14 text-[9px] text-white/50 shrink-0">{t}</div>
            <div className="text-[10px] flex-1 min-w-0 truncate">{txt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
