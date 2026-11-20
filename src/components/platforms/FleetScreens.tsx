import { ReactNode } from "react";
import pcLiveMap from "@/assets/work/powercabs-live-map.jpg.asset.json";
import pcLiveOrders from "@/assets/work/powercabs-live-orders.jpg";
import pcDashboard from "@/assets/work/powercabs-dashboard.jpg";
import pcMobileApp from "@/assets/work/powercabs-mobile-app.jpg";

export const brand = {
  name: "DispatchIQ",
  short: "Cabs & Fleet",
  tag: "Ride-hailing, dispatch & driver ops, one command deck",
  accent: "#ff9b3d",
  gradient: "from-[#0e1220] via-[#101528] to-[#080c18]",
  modules: ["Live Map", "Dispatch", "Drivers", "Bookings", "Driver App", "Analytics"],
  proof: [
    { label: "12k vehicles under management" },
    { label: "3 continents · 40+ cities" },
    { label: "97.4% on-time dispatch" },
    { label: "−22% fuel spend YoY" },
  ],
};

export function Desktop() {
  return (
    <div className="relative h-full w-full bg-[#05070f] text-white overflow-hidden">
      {/* Base: live map screenshot */}
      <img
        src={pcLiveMap.url}
        alt="DispatchIQ live map"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* Dark grade for legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-transparent" />

      {/* Top stat strip */}
      <div className="absolute top-2 left-2 right-2 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="rounded-full px-2 py-0.5 font-semibold text-black" style={{ background: brand.accent }}>● LIVE DISPATCH</span>
        <span className="rounded-full px-2 py-0.5 bg-black/60 border border-white/10">218 drivers online</span>
        <span className="rounded-full px-2 py-0.5 bg-black/60 border border-white/10">42 active rides</span>
        <span className="rounded-full px-2 py-0.5 bg-black/60 border border-white/10">97.4% on-time</span>
        <span className="rounded-full px-2 py-0.5 bg-black/60 border border-white/10" style={{ color: brand.accent }}>Rev $24.1k today</span>
      </div>

      {/* Overlay: Live orders card top-left */}
      <div className="absolute top-10 left-3 w-[36%] rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#0c1120]/90 backdrop-blur">
        <div className="flex items-center justify-between px-2 py-1 border-b border-white/10 text-[9px]">
          <span className="text-white/70">Live orders queue</span>
          <span style={{ color: brand.accent }}>● 42</span>
        </div>
        <img src={pcLiveOrders} alt="Live orders queue" className="w-full h-auto block" loading="lazy" />
      </div>

      {/* Overlay: Ops dashboard bottom-right */}
      <div className="absolute bottom-3 right-3 w-[42%] rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#0c1120]/90 backdrop-blur">
        <div className="flex items-center justify-between px-2 py-1 border-b border-white/10 text-[9px]">
          <span className="text-white/70">Operations overview</span>
          <span className="text-white/40">last 24h</span>
        </div>
        <img src={pcDashboard} alt="Operations overview" className="w-full h-auto block" loading="lazy" />
      </div>

      {/* Selected vehicle pill bottom-left */}
      <div className="absolute bottom-3 left-3 rounded-md bg-black/70 backdrop-blur border border-white/15 p-2 text-[9px] max-w-[38%]">
        <div className="text-white/50">Selected · TRK-4419</div>
        <div className="font-semibold text-[10px]">Downtown → Airport · SLA 2h 14m</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: brand.accent }} />
          <span className="text-white/70">Driver Omar M. · 4.9★ · 6h on-shift</span>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      <img
        src={pcMobileApp}
        alt="Driver mobile app"
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}
