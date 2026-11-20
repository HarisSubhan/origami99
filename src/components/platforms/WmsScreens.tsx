import { Row, StatCard, Chip, BarRow, Donut } from "./_primitives";
import { ReactNode } from "react";

export const brand = {
  name: "Warehouse Management",
  short: "WMS",
  tag: "Pick, pack, scan · zero-defect",
  accent: "#84cc16",
  gradient: "from-[#0f1410] via-[#131b12] to-[#080b08]",
  modules: ["Bins", "Pick & Pack", "Receiving", "Cycle count", "Scanner"],
  proof: [
    { label: "18 warehouses" },
    { label: "99.7% pick accuracy" },
    { label: "Scan-to-ship 2m 40s" },
    { label: "3PL adapters ready" },
  ],
};

function BinMap() {
  const cells = Array.from({ length: 8 * 14 });
  return (
    <div className="grid grid-cols-14 gap-[2px]" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
      {cells.map((_, i) => {
        const heat = (Math.sin(i * 0.7) + 1) / 2;
        const col = heat > 0.75 ? brand.accent : heat > 0.5 ? "#4d7c0f" : heat > 0.25 ? "#22303a" : "#151a1f";
        return <div key={i} className="aspect-square rounded-[2px]" style={{ background: col, opacity: 0.4 + heat * 0.6 }} />;
      })}
    </div>
  );
}

export function Desktop() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex text-[11px]`}>
      <div className="w-40 border-r border-white/5 p-2">
        <div className="flex items-center gap-2 mb-2 px-1">
          <div className="h-6 w-6 rounded-md flex items-center justify-center text-black font-bold text-[10px]" style={{ background: brand.accent }}>▤</div>
          <div>
            <div className="font-semibold text-[11px]">Grid WMS</div>
            <div className="text-[9px] text-white/40">Warehouse OS</div>
          </div>
        </div>
        <div className="space-y-0.5">
          {["Overview", "Bin map", "Pick & pack", "Receiving", "Cycle count", "Returns", "Scanner", "Reports"].map((m, i) => (
            <div key={m} className={`px-2 py-1.5 rounded-md text-[10px] ${i === 1 ? "bg-white/10 text-white" : "text-white/50"}`}>{m}</div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-3 overflow-hidden space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/40">DXB-01 · Al Quoz</div>
            <div className="text-base font-semibold">Bin heat-map · zone A–H</div>
          </div>
          <div className="flex gap-1">
            <Chip color={`${brand.accent}22`} text={brand.accent}>● Live</Chip>
            <Chip>Aisles 8</Chip>
            <Chip>Bins 1,120</Chip>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <StatCard label="Pick accuracy" value="99.7%" delta="target 99.5%" accent={brand.accent} />
          <StatCard label="Scan-to-ship" value="2m 40s" delta="−18s vs LW" accent={brand.accent} />
          <StatCard label="Open picks" value="418" delta="14 pickers" accent={brand.accent} />
          <StatCard label="Receiving" value="26 PO" delta="ETA today" accent="#a3a3a3" />
        </div>

        <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
          <BinMap />
          <div className="flex items-center justify-between mt-1.5 text-[9px] text-white/40">
            <div className="flex gap-2">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{background:brand.accent}}/> Hot</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[#4d7c0f]"/> Warm</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[#22303a]"/> Cold</span>
            </div>
            <span>Click bin to inspect</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 h-24">
          <div className="col-span-2 rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">Pick queue · high priority</div>
            <Row label="P-2201 · Blazer M · A-04-12" value="ready" dot={brand.accent} />
            <Row label="P-2202 · Scarf · C-07-03" value="picking" dot={brand.accent} />
            <Row label="P-2203 · Belt L · B-01-19" value="picking" dot={brand.accent} />
            <Row label="P-2204 · Fragrance · H-12-02" value="queued" dot="#a3a3a3" />
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2 flex flex-col justify-between">
            <div className="text-[10px] text-white/60">Throughput</div>
            <div className="h-10"><BarRow values={[24,28,22,30,34,36,40,32,42,44,38,46]} color={brand.accent} /></div>
            <div className="text-[9px] text-white/40">picks / hour</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  // Handheld scanner UI
  return (
    <div className="h-full w-full bg-black text-white p-3 flex flex-col text-[10px]">
      <div className="text-[9px] text-white/50">Handheld · Zebra TC22</div>
      <div className="mt-2 rounded-lg border-2 border-dashed p-3 text-center" style={{ borderColor: brand.accent }}>
        <div className="text-[9px] text-white/60">Scan bin barcode</div>
        <div className="mt-1 font-mono text-lg font-bold" style={{ color: brand.accent }}>A-04-12</div>
        <div className="mt-1 h-8 flex items-center justify-center gap-[1px]">
          {Array.from({length: 30}).map((_, i) => (
            <span key={i} className="block bg-white" style={{ width: `${1 + (i % 3)}px`, height: "100%" }} />
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-white/5 border border-white/10 p-2 space-y-1">
        <div className="flex justify-between"><span className="text-white/60">SKU</span><span className="font-mono">2201-WBL-M</span></div>
        <div className="flex justify-between"><span className="text-white/60">Description</span><span className="truncate max-w-[60%] text-right">Wool blazer M navy</span></div>
        <div className="flex justify-between"><span className="text-white/60">On hand</span><span style={{color:brand.accent}}>18 units</span></div>
        <div className="flex justify-between"><span className="text-white/60">Pick qty</span><span className="font-bold">×3</span></div>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2">
        <button className="rounded py-2 font-semibold text-black" style={{ background: brand.accent }}>Confirm</button>
        <button className="rounded py-2 bg-white/5 border border-white/10">Report issue</button>
      </div>
    </div>
  );
}
