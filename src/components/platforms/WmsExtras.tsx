import { Chip, Row, StatCard } from "./_primitives";
import { brand } from "./WmsScreens";

const A = brand.accent;

export function DockSchedule() {
  const slots = [
    ["07:00", "Meridian Textiles", "3 pallets", "arriving", A],
    ["08:30", "Silk Route Co", "8 pallets", "docked", "#22c55e"],
    ["10:00", "Atlas Fragrance", "2 pallets", "in-transit", A],
    ["11:30", "Urban Leather", "5 pallets", "delayed", "#fb923c"],
    ["13:00", "Vega Accessories", "1 pallet", "scheduled", "#a3a3a3"],
    ["15:00", "Nova 3PL outbound", "12 pallets", "scheduled", "#a3a3a3"],
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Receiving · DXB-01</div>
          <div className="text-[13px] font-semibold">Dock schedule · today</div>
        </div>
        <Chip color={`${A}22`} text={A}>6 docks live</Chip>
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        {slots.map((s, i) => (
          <div key={i} className="grid grid-cols-[0.5fr_1.4fr_0.8fr_0.7fr] gap-2 items-center py-1 border-b border-white/5 last:border-b-0">
            <div className="font-mono text-[10px]" style={{ color: A }}>{s[0]}</div>
            <div className="text-[10px] font-semibold truncate">{s[1]}</div>
            <div className="text-[9px] text-white/60">{s[2]}</div>
            <div><Chip color={`${s[4]}22`} text={s[4] as string}>{s[3]}</Chip></div>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        <StatCard label="Pallets in" value="18" delta="ahead of plan" accent={A} />
        <StatCard label="Avg dwell" value="42m" delta="target 45m" accent={A} />
        <StatCard label="Late" value="1" delta="Urban Leather" accent="#fb923c" />
      </div>
    </div>
  );
}

export function CycleCount() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Cycle count · exceptions</div>
          <div className="text-[13px] font-semibold">Variance report</div>
        </div>
        <Chip color={`${A}22`} text={A}>99.7% accuracy</Chip>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <StatCard label="Counted today" value="1,208" delta="14 pickers" accent={A} />
        <StatCard label="Exceptions" value="9" delta="0.7% of scans" accent="#fb923c" />
        <StatCard label="Auto-resolved" value="6" delta="3 pending" accent={A} />
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        <div className="text-[9px] text-white/60 mb-1">Open variances</div>
        {[
          ["A-04-12 · Wool blazer M", "expected 18 / found 15", "−3", "#fb923c"],
          ["C-07-03 · Silk scarf", "expected 42 / found 44", "+2", A],
          ["B-01-19 · Leather belt L", "expected 26 / found 22", "−4", "#fb923c"],
          ["H-12-02 · Fragrance 100ml", "expected 12 / found 12", "0", "#22c55e"],
        ].map((r, i) => (
          <Row key={i} label={`${r[0]} · ${r[1]}`} value={r[2]} dot={r[3]} />
        ))}
      </div>
    </div>
  );
}

export function SLAMonitor() {
  const carriers = [
    ["Aramex", 96, A],
    ["DHL", 94, A],
    ["Naqel", 91, A],
    ["SMSA", 88, "#f59e0b"],
    ["Nova 3PL", 82, "#fb923c"],
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">3PL · SLA monitor</div>
          <div className="text-[13px] font-semibold">On-time delivery · 30d</div>
        </div>
        <Chip color={`${A}22`} text={A}>5 carriers</Chip>
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1 space-y-2">
        {carriers.map(([n, v, c]) => (
          <div key={n as string}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-[10px] font-semibold">{n}</div>
              <div className="text-[10px]" style={{ color: c as string }}>{v}%</div>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${v}%`, background: c as string }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        <StatCard label="Shipments" value="4,218" delta="last 30d" accent={A} />
        <StatCard label="Weighted OTD" value="91.6%" delta="target 92%" accent={A} />
        <StatCard label="Claims" value="18" delta="−4 vs LM" accent={A} />
      </div>
    </div>
  );
}
