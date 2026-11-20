import { Chip, Row, StatCard, SparkLine, Avatar } from "./_primitives";
import { brand } from "./ErpScreens";

const A = brand.accent;

export function ChannelQueue() {
  const rows = [
    ["#EC-72901", "Shopify", "L. Al Marri", "AED 842", "Picking", A],
    ["#EC-72900", "Amazon", "R. Chen", "AED 1,204", "Label", "#fb923c"],
    ["#EC-72899", "TikTok", "N. Farooq", "PKR 8,900", "Packed", "#22c55e"],
    ["#EC-72898", "Website", "Aisha K.", "AED 380", "Hold", "#f97316"],
    ["#EC-72897", "eBay", "M. Ibrahim", "SAR 610", "Shipped", "#22c55e"],
    ["#EC-72896", "Meta Shop", "J. Park", "AED 2,100", "Picking", A],
  ];
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Multichannel · unified</div>
          <div className="text-[13px] font-semibold">Order queue · live</div>
        </div>
        <div className="flex gap-1">
          <Chip color={`${A}22`} text={A}>Shopify</Chip>
          <Chip color="#fb923c22" text="#fb923c">Amazon</Chip>
          <Chip color="#f472b622" text="#f472b6">TikTok</Chip>
          <Chip>+3</Chip>
        </div>
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 overflow-hidden flex-1">
        <div className="grid grid-cols-[1fr_0.8fr_1fr_0.8fr_0.7fr] gap-2 px-2 py-1 text-[8px] uppercase tracking-wider text-white/40 bg-white/[0.02]">
          <div>Order</div><div>Channel</div><div>Customer</div><div>Value</div><div>Status</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_0.8fr_1fr_0.8fr_0.7fr] gap-2 px-2 py-1 border-t border-white/5 items-center">
            <div className="font-mono text-white/80 text-[9px]">{r[0]}</div>
            <div className="text-white/60 text-[9px]">{r[1]}</div>
            <div className="flex items-center gap-1 min-w-0"><Avatar name={r[2] as string} className="h-3.5 w-3.5" /><span className="truncate text-[9px]">{r[2]}</span></div>
            <div className="text-white/80 text-[9px]">{r[3]}</div>
            <div><Chip color={`${r[5]}22`} text={r[5] as string}>{r[4]}</Chip></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PickAssignment() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Warehouse · DXB-01</div>
          <div className="text-[13px] font-semibold">Pick assignment</div>
        </div>
        <Chip color={`${A}22`} text={A}>14 pickers online</Chip>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <StatCard label="Open picks" value="418" delta="212 priority" accent={A} />
        <StatCard label="Avg pick time" value="1m 42s" delta="−12s vs LW" accent={A} />
        <StatCard label="Zones active" value="8 / 12" delta="A,B,C,D,E,F,G,H" accent="#a3a3a3" />
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        <div className="text-[9px] text-white/60 mb-1">Assigned pickers</div>
        {[
          ["Omar M.", "Zone A · 42 picks", 92, A],
          ["Priya S.", "Zone C · 38 picks", 88, A],
          ["Ali R.", "Zone B · 34 picks", 81, "#f59e0b"],
          ["Sara K.", "Zone F · 28 picks", 74, "#f59e0b"],
          ["Hassan T.", "Zone H · 22 picks", 66, "#fb923c"],
        ].map(([n, sub, v, c]) => (
          <div key={n as string} className="flex items-center gap-2 py-1 border-b border-white/5 last:border-b-0">
            <Avatar name={n as string} className="h-5 w-5" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold truncate">{n}</div>
              <div className="text-[8px] text-white/40">{sub}</div>
            </div>
            <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${v}%`, background: c as string }} />
            </div>
            <div className="text-[9px] w-7 text-right" style={{ color: c as string }}>{v}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PurchaseSuppliers() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-[9px] text-white/40 uppercase tracking-wider">Purchase · Q4</div>
          <div className="text-[13px] font-semibold">Supplier scorecards</div>
        </div>
        <Chip color={`${A}22`} text={A}>26 open POs</Chip>
      </div>
      <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1">
        {[
          ["Meridian Textiles", "AED 428k", "OTD 96%", "A", A],
          ["Silk Route Co", "AED 312k", "OTD 91%", "A", A],
          ["Atlas Fragrance", "AED 218k", "OTD 87%", "B", "#f59e0b"],
          ["Urban Leather", "AED 194k", "OTD 82%", "B", "#f59e0b"],
          ["Vega Accessories", "AED 88k", "OTD 74%", "C", "#fb923c"],
        ].map(([name, vol, otd, grade, col]) => (
          <div key={name as string} className="grid grid-cols-[1.4fr_0.9fr_0.8fr_0.4fr] gap-1 items-center py-1 border-b border-white/5 last:border-b-0">
            <div className="text-[10px] font-semibold truncate">{name}</div>
            <div className="text-[9px] text-white/70">{vol}</div>
            <div className="text-[9px]" style={{ color: col as string }}>{otd}</div>
            <div className="text-[9px] font-bold text-right" style={{ color: col as string }}>{grade}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2">
        <div className="text-[9px] text-white/60">PO spend · 30d</div>
        <SparkLine points={[24,28,32,30,38,42,40,48,52,50,58,64,60,70]} color={A} className="w-full h-10" />
        <div className="text-[10px] mt-0.5" style={{ color: A }}>AED 1.24M committed</div>
      </div>
    </div>
  );
}
