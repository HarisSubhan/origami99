import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";
import { MiniWindow } from "./MiniWindow";

const PlatformsBackground = lazy(() => import("./PlatformsBackground"));

import * as Pos from "@/components/platforms/PosScreens";
import * as PosX from "@/components/platforms/PosExtras";
import * as Erp from "@/components/platforms/ErpScreens";
import * as ErpX from "@/components/platforms/ErpExtras";
import * as Health from "@/components/platforms/HealthcareScreens";
import * as Fleet from "@/components/platforms/FleetScreens";
import * as Wms from "@/components/platforms/WmsScreens";
import * as WmsX from "@/components/platforms/WmsExtras";
import * as Crm from "@/components/platforms/CrmScreens";
import * as CrmX from "@/components/platforms/CrmExtras";

import pcCreateOrder from "@/assets/work/powercabs-create-order.jpg";
import pcEmployees from "@/assets/work/powercabs-employees.jpg";
import pcBookRide from "@/assets/work/powercabs-book-ride.jpg";

type Companion = "phone" | "window";

type Extra =
  | { kind?: "image"; src: string; label: string }
  | { kind: "node"; node: ReactNode; label: string };

type Platform = {
  brand: typeof Pos.brand;
  Desktop: () => ReactNode;
  Secondary: () => ReactNode;
  companion: Companion;
  slug: string;
  extras: Extra[];
};

const platforms: Platform[] = [
  {
    brand: Pos.brand, Desktop: Pos.Desktop, Secondary: Pos.Secondary, companion: "phone",
    slug: "pulsepos · retail command center",
    extras: [
      { kind: "node", node: <PosX.AICopilot />,    label: "AI Copilot · live upsell suggestions" },
      { kind: "node", node: <PosX.FloorHeatmap />, label: "Floor heatmap · by till" },
      { kind: "node", node: <PosX.LoyaltyConsole />, label: "Loyalty & wallet console" },
    ],
  },
  {
    brand: Erp.brand, Desktop: Erp.Desktop, Secondary: Erp.Secondary, companion: "window",
    slug: "nexus erp · orders & warehouse",
    extras: [
      { kind: "node", node: <ErpX.ChannelQueue />,     label: "Multichannel order queue · live" },
      { kind: "node", node: <ErpX.PickAssignment />,   label: "Warehouse pick assignment" },
      { kind: "node", node: <ErpX.PurchaseSuppliers />, label: "Purchase orders · supplier scorecards" },
    ],
  },
  {
    brand: Health.brand, Desktop: Health.Desktop, Secondary: Health.Secondary, companion: "phone",
    slug: "vital os · clinical console",
    extras: [
      { kind: "node", node: <Health.TriageQueue />, label: "AI triage queue · live ED" },
      { kind: "node", node: <Health.LabResults />,  label: "Lab results · AI summary" },
      { kind: "node", node: <Health.Imaging />,     label: "Imaging viewer · AI findings" },
    ],
  },
  {
    brand: Fleet.brand, Desktop: Fleet.Desktop, Secondary: Fleet.Secondary, companion: "phone",
    slug: "dispatchiq · live fleet ops",
    extras: [
      { src: pcCreateOrder, label: "Create ride and order" },
      { src: pcEmployees,   label: "Drivers and employees" },
      { src: pcBookRide,    label: "Passenger booking flow" },
    ],
  },
  {
    brand: Wms.brand, Desktop: Wms.Desktop, Secondary: Wms.Secondary, companion: "window",
    slug: "grid wms · warehouse ops",
    extras: [
      { kind: "node", node: <WmsX.DockSchedule />, label: "Receiving dock schedule" },
      { kind: "node", node: <WmsX.CycleCount />,   label: "Cycle count exceptions" },
      { kind: "node", node: <WmsX.SLAMonitor />,   label: "3PL · on-time delivery monitor" },
    ],
  },
  {
    brand: Crm.brand, Desktop: Crm.Desktop, Secondary: Crm.Secondary, companion: "window",
    slug: "estate crm · pipeline & deals",
    extras: [
      { kind: "node", node: <CrmX.PipelineKanban />,    label: "Pipeline kanban · Q4" },
      { kind: "node", node: <CrmX.AgentLeaderboard />,  label: "Agent leaderboard · MTD" },
      { kind: "node", node: <CrmX.DealTimeline />,      label: "Deal timeline · WhatsApp & calls" },
    ],
  },
];

export function Platforms() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const p = platforms[i];
  const INTERVAL = 5000;

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    }
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % platforms.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, reduced]);

  return (
    <section
      id="platforms"
      className="relative bg-section-grad text-foreground overflow-hidden py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3D animated background */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <Suspense fallback={null}>
            <PlatformsBackground accent={p.brand.accent} />
          </Suspense>
        </div>
      )}
      <div className="absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" />
      <div
        className="absolute inset-x-0 -top-40 h-[40rem] pointer-events-none opacity-40 transition-colors duration-700"
        style={{ background: `radial-gradient(600px 300px at 30% 30%, ${p.brand.accent}22, transparent 70%)` }}
      />
      {/* Auto-advance progress bar */}
      {!paused && !reduced && (
        <motion.div
          key={i}
          className="absolute top-0 left-0 h-0.5 z-20"
          style={{ background: p.brand.accent }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 z-10">
        {/* Header */}
        <div className="max-w-3xl rounded-2xl bg-background/40 backdrop-blur-sm p-1">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Platforms we build
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground">
            We don't just build sites. <span className="text-coral">We build the systems that run companies.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground/80 max-w-2xl">
            Retail, ERP, healthcare, logistics, warehousing, real estate. Production platforms our team has shipped end to end, running under our clients' own brands.
          </p>
        </div>

        {/* Main stage */}
        <div className="mt-8 lg:mt-12 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] gap-6 lg:gap-10 items-start lg:items-center">
          {/* Left rail */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase">
                  {p.brand.short}
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">{p.brand.name}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground">{p.brand.tag}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.brand.modules.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border px-3 py-1 text-[11px] font-medium bg-card/70 text-foreground"
                      style={{ borderColor: `${p.brand.accent}66` }}
                    >
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: p.brand.accent }} />
                      {m}
                    </span>
                  ))}
                </div>

                {/* Proof strip */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {p.brand.proof.map((f) => (
                    <div key={f.label} className="rounded-md border border-border bg-card px-3 py-2 text-[11px] text-foreground">
                      <span className="mr-1" style={{ color: p.brand.accent }}>●</span>
                      {f.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right stage, devices */}
          <div className="relative min-w-0">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.brand.name + "-d"}
                  initial={{ opacity: 0, y: 40, rotateX: 8, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1400 }}
                >
                  <BrowserFrame url={p.slug} aspect="16 / 10">
                    {p.Desktop()}
                  </BrowserFrame>
                </motion.div>
              </AnimatePresence>

              {/* Companion, desktop-only overlay */}
              <div className="hidden md:block absolute -bottom-8 -right-4 lg:-right-8 w-[24%] max-w-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.brand.name + "-c"}
                    initial={{ opacity: 0, x: 30, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    {p.companion === "phone" ? (
                      <PhoneFrame>{p.Secondary()}</PhoneFrame>
                    ) : (
                      <MiniWindow title={p.brand.short.toLowerCase()}>
                        <div style={{ aspectRatio: "4 / 3" }}>{p.Secondary()}</div>
                      </MiniWindow>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Companion, mobile inline */}
            <div className="md:hidden mt-4 max-w-[260px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.brand.name + "-cm"}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  {p.companion === "phone" ? (
                    <PhoneFrame>{p.Secondary()}</PhoneFrame>
                  ) : (
                    <MiniWindow title={p.brand.short.toLowerCase()}>
                      <div style={{ aspectRatio: "4 / 3" }}>{p.Secondary()}</div>
                    </MiniWindow>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Extras, snap scroll on mobile, grid on md+ */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.brand.name + "-extras"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 md:mt-10"
              >
                <div className="flex md:grid gap-3 md:grid-cols-3 overflow-x-auto no-scrollbar md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 pb-2">
                  {p.extras.map((ex, exi) => (
                    <motion.div
                      key={ex.label + exi}
                      whileHover={{ y: -4, rotateX: 6, rotateY: -4 }}
                      style={{ transformStyle: "preserve-3d", transformPerspective: 900 }}
                      className="group relative shrink-0 w-[80%] md:w-auto snap-center rounded-lg overflow-hidden border border-border bg-card/50 shadow-lg"
                    >
                      <div style={{ aspectRatio: "16 / 10" }}>
                        {ex.kind === "node"
                          ? ex.node
                          : <img src={(ex as { src: string }).src} alt={ex.label} className="w-full h-full object-cover object-top" loading="lazy" />}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-2 py-1.5 text-[10px] font-semibold text-foreground">
                        {ex.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scrubber, horizontal snap rail on mobile, grid on lg */}
        <div className="mt-10 lg:mt-14 border-t border-border pt-6">
          <div className="flex lg:grid gap-2 lg:grid-cols-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 lg:mx-0 lg:px-0 pb-2">
            {platforms.map((pl, idx) => {
              const active = idx === i;
              return (
                <button
                  key={pl.brand.name}
                  onClick={() => setI(idx)}
                  className={`shrink-0 w-[62%] sm:w-[38%] lg:w-auto snap-start group text-left rounded-lg border px-3 py-3 transition-all ${
                    active ? "border-foreground/40 bg-card" : "border-border bg-card text-foreground/70 hover:border-foreground/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{pl.brand.short}</div>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: pl.brand.accent, opacity: active ? 1 : 0.5 }} />
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold leading-tight">{pl.brand.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{pl.brand.tag}</div>
                  {active && (
                    <motion.div layoutId="scrub-underline" className="mt-2 h-0.5 rounded-full" style={{ background: pl.brand.accent }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-coral-grad px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105"
          >
            Book a build call <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground hover:border-coral/50 transition-colors"
          >
            See the live wall
          </a>
          <span className="text-xs text-muted-foreground sm:ml-auto">White-label ready. Deployed under our clients' own brands.</span>
        </div>
      </div>
    </section>
  );
}
