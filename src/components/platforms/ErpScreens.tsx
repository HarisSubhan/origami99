import { SparkLine, BarRow, Row, StatCard, Chip, Avatar } from "./_primitives";
import { ReactNode } from "react";

export const brand = {
  name: "E-commerce ERP",
  short: "ERP",
  tag: "Omnichannel orders → warehouse",
  accent: "#3b82f6",
  gradient: "from-[#0b1220] via-[#0d1628] to-[#08101e]",
  modules: ["Orders", "Inventory", "Purchase", "Returns", "Forecasting", "Channels"],
  proof: [
    { label: "6 sales channels" },
    { label: "1.4M orders/yr" },
    { label: "3PL-ready" },
    { label: "SOC2 aligned" },
  ],
};

export function Desktop() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex text-[11px]`}>
      <div className="w-40 border-r border-white/5 p-3 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-md" style={{ background: `linear-gradient(135deg, ${brand.accent}, #1e40af)` }} />
          <div>
            <div className="font-semibold text-[11px]">Nexus ERP</div>
            <div className="text-[9px] text-white/40">Retail edition</div>
          </div>
        </div>
        {["Overview", "Orders", "Products", "Inventory", "Purchase", "Returns", "Suppliers", "Channels", "Forecast", "Finance"].map((m, i) => (
          <div key={m} className={`px-2 py-1.5 rounded-md ${i === 1 ? "bg-white/10 text-white" : "text-white/50"}`}>{m}</div>
        ))}
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/40">Orders / Open</div>
            <div className="text-base font-semibold">Fulfillment queue</div>
          </div>
          <div className="flex items-center gap-2">
            <Chip color="#3b82f622" text={brand.accent}>Shopify</Chip>
            <Chip color="#f9731622" text="#fb923c">Amazon</Chip>
            <Chip color="#ec489922" text="#f472b6">TikTok</Chip>
            <Chip>+ 3</Chip>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <StatCard label="Open orders" value="1,842" delta="212 SLA at risk" accent="#f97316" />
          <StatCard label="Picking" value="418" delta="14 pickers online" accent={brand.accent} />
          <StatCard label="Awaiting stock" value="63" delta="ETA 2 days" accent="#a3a3a3" />
          <StatCard label="Returns today" value="27" delta="RTO 1.9%" accent={brand.accent} />
        </div>

        {/* Order table */}
        <div className="rounded-md bg-white/[0.03] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] gap-2 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/40 bg-white/[0.02]">
            <div>Order</div><div>Customer</div><div>Channel</div><div>Warehouse</div><div>Value</div><div>Status</div>
          </div>
          {[
            ["#EC-72841", "Layla Al Marri", "Shopify", "DXB-01", "AED 842", "Picking", brand.accent],
            ["#EC-72840", "R. Chen", "Amazon", "DXB-02", "AED 1,204", "Packed", "#22c55e"],
            ["#EC-72839", "N. Farooq", "TikTok", "KHI-01", "PKR 8,900", "Label", brand.accent],
            ["#EC-72838", "Aisha K.", "Website", "DXB-01", "AED 380", "Hold", "#f97316"],
            ["#EC-72837", "M. Ibrahim", "eBay", "RUH-01", "SAR 610", "Shipped", "#22c55e"],
            ["#EC-72836", "J. Park", "Shopify", "DXB-01", "AED 2,100", "Picking", brand.accent],
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] gap-2 px-3 py-1.5 border-t border-white/5 items-center">
              <div className="font-mono text-white/80">{r[0]}</div>
              <div className="flex items-center gap-1.5 min-w-0"><Avatar name={r[1] as string} className="h-4 w-4" /><span className="truncate">{r[1]}</span></div>
              <div className="text-white/60">{r[2]}</div>
              <div className="text-white/60">{r[3]}</div>
              <div className="text-white/80">{r[4]}</div>
              <div><Chip color={`${r[6]}22`} text={r[6] as string}>{r[5]}</Chip></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 h-20">
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60">GMV · 30d</div>
            <SparkLine points={[8,10,12,11,15,18,14,20,22,19,26,28,24,30,32,29,35,38,34,42,44,40,48,52,49,58,62,60,68,72]} color={brand.accent} className="w-full h-10" />
            <div className="text-[10px] mt-0.5" style={{ color: brand.accent }}>AED 4.28M · +18%</div>
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60">Channels</div>
            <div className="h-10"><BarRow values={[42, 28, 18, 12, 8, 4]} color={brand.accent} /></div>
            <div className="text-[9px] text-white/40 mt-0.5">Shopify · Amazon · TikTok · Web · eBay · Meta</div>
          </div>
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60">Forecast accuracy</div>
            <div className="text-lg font-bold">91.4%</div>
            <div className="text-[9px] text-white/40">7-day MAPE · ML model v3.2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  // Kanban of orders
  return (
    <div className="h-full w-full bg-[#0b1220] text-white p-3 text-[10px]">
      <div className="text-[10px] text-white/60 mb-2 font-semibold">Fulfillment board</div>
      <div className="grid grid-cols-4 gap-1.5 h-[calc(100%-1.5rem)]">
        {[
          ["New", 42, "#a3a3a3"],
          ["Picking", 18, brand.accent],
          ["Packed", 12, "#22c55e"],
          ["Shipped", 96, "#8b5cf6"],
        ].map(([n, c, col]) => (
          <div key={n as string} className="rounded-md bg-white/[0.03] border border-white/5 p-1.5 overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-semibold">{n}</span>
              <Chip color={`${col}22`} text={col as string}>{c as number}</Chip>
            </div>
            <div className="space-y-1">
              {Array.from({length: 4}).map((_, i) => (
                <div key={i} className="rounded bg-white/[0.04] border border-white/5 p-1">
                  <div className="text-[8px] font-mono text-white/60">#EC-{72800 + i * 3}</div>
                  <div className="text-[9px] truncate">AED {(200 + i * 87)}.00</div>
                  <div className="h-0.5 rounded mt-1" style={{ background: col as string, width: `${30 + i * 15}%` }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
