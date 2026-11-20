// Invented in-house / partner wordmarks. Legally safe, invented names.
// Each mark uses a distinct primitive so the two rows never feel same-y.
import type { ReactElement } from "react";

type LogoProps = { className?: string };

const CORAL = "oklch(0.7 0.21 22)";
const SANS = "'Space Grotesk', system-ui, sans-serif";
const SERIF = "'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const MONO = "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace";

// -------- Primitives --------

// Monogram square + wordmark
function SquareMonogram({ letters, text, sub, tone = "coral", className }: { letters: string; text: string; sub?: string; tone?: "coral" | "ink"; className?: string }) {
  const bg = tone === "coral" ? CORAL : "currentColor";
  const fg = tone === "coral" ? "#fff" : "var(--card, #fff)";
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <rect x="4" y="10" width="40" height="40" rx="8" fill={bg} />
      <text x="24" y="37" fontFamily={SANS} fontWeight={800} fontSize={20} fill={fg} textAnchor="middle">{letters}</text>
      <text x="54" y={sub ? 32 : 38} fontFamily={SANS} fontWeight={700} fontSize={20} fill="currentColor" letterSpacing={-0.4}>{text}</text>
      {sub && <text x="54" y="46" fontFamily={SANS} fontWeight={500} fontSize={9} fill="currentColor" opacity={0.55} letterSpacing={2}>{sub.toUpperCase()}</text>}
    </svg>
  );
}

// Circle monogram
function CircleMonogram({ letter, text, className }: { letter: string; text: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <circle cx="24" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="24" y="37" fontFamily={SERIF} fontWeight={700} fontSize={22} fill="currentColor" textAnchor="middle" fontStyle="italic">{letter}</text>
      <text x="52" y="37" fontFamily={SERIF} fontWeight={600} fontSize={22} fill="currentColor" letterSpacing={-0.2}>{text}</text>
    </svg>
  );
}

// Badge pill wordmark
function BadgePill({ text, className }: { text: string; className?: string }) {
  const w = 12 + text.length * 12;
  return (
    <svg viewBox={`0 0 ${w + 20} 60`} className={className} aria-hidden="true">
      <rect x="4" y="15" width={w + 12} height="30" rx="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x={(w + 20) / 2} y="35" fontFamily={SANS} fontWeight={800} fontSize={13} fill="currentColor" textAnchor="middle" letterSpacing={2}>{text.toUpperCase()}</text>
    </svg>
  );
}

// Icon + wordmark (industry glyph)
function IconWord({ text, sub, glyph, className }: { text: string; sub?: string; glyph: "roof" | "drop" | "sun" | "tooth" | "gavel" | "house" | "leaf" | "spark" | "wave" | "wrench" | "flame" | "tree" | "anchor" | "car"; className?: string }) {
  const G: Record<string, ReactElement> = {
    roof:  <path d="M6 34 L24 14 L42 34" fill="none" stroke={CORAL} strokeWidth="3" strokeLinejoin="round" />,
    drop:  <path d="M24 8 C 16 22, 12 30, 24 40 C 36 30, 32 22, 24 8 Z" fill={CORAL} />,
    sun:   <><circle cx="24" cy="26" r="7" fill={CORAL} />{[...Array(8)].map((_,i)=>{const a=i*Math.PI/4;return <line key={i} x1={24+Math.cos(a)*11} y1={26+Math.sin(a)*11} x2={24+Math.cos(a)*15} y2={26+Math.sin(a)*15} stroke={CORAL} strokeWidth="2.5" strokeLinecap="round"/>;})}</>,
    tooth: <path d="M14 12 C 10 12, 8 18, 12 26 L 14 40 L 18 30 L 22 38 L 26 30 L 30 40 L 32 26 C 36 18, 34 12, 30 12 C 24 12, 24 16, 22 16 C 20 16, 20 12, 14 12 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    gavel: <><rect x="10" y="18" width="24" height="8" rx="1" transform="rotate(-25 22 22)" fill="currentColor" /><rect x="24" y="30" width="14" height="4" fill={CORAL} /></>,
    house: <path d="M8 34 L24 16 L40 34 L40 44 L8 44 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />,
    leaf:  <path d="M12 40 C 12 22, 26 12, 40 12 C 40 26, 30 40, 12 40 Z" fill={CORAL} opacity="0.85" />,
    spark: <path d="M24 8 L27 22 L40 24 L27 26 L24 40 L21 26 L8 24 L21 22 Z" fill={CORAL} />,
    wave:  <path d="M6 30 Q 14 20, 22 30 T 42 30" fill="none" stroke={CORAL} strokeWidth="3" strokeLinecap="round" />,
    wrench:<path d="M32 12 A 8 8 0 1 0 40 20 L 30 30 L 20 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    flame: <path d="M24 8 C 30 18, 34 22, 32 30 C 30 38, 22 40, 20 32 C 18 26, 22 24, 20 18 C 24 20, 26 14, 24 8 Z" fill={CORAL} />,
    tree:  <><path d="M24 8 L14 22 L20 22 L10 36 L20 36 L14 44 L34 44 L28 36 L38 36 L28 22 L34 22 Z" fill={CORAL} opacity="0.9" /><rect x="21" y="44" width="6" height="6" fill="currentColor" /></>,
    anchor:<><circle cx="24" cy="12" r="4" fill="none" stroke={CORAL} strokeWidth="2" /><line x1="24" y1="16" x2="24" y2="40" stroke={CORAL} strokeWidth="2.5" /><path d="M12 32 Q 24 46, 36 32" fill="none" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" /></>,
    car:   <><rect x="8" y="26" width="32" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 26 L 16 18 L 32 18 L 36 26" fill="none" stroke={CORAL} strokeWidth="2" /><circle cx="16" cy="38" r="3" fill="currentColor" /><circle cx="32" cy="38" r="3" fill="currentColor" /></>,
  };
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <g>{G[glyph]}</g>
      <text x="54" y={sub ? 30 : 37} fontFamily={SANS} fontWeight={700} fontSize={18} fill="currentColor" letterSpacing={-0.3}>{text}</text>
      {sub && <text x="54" y="44" fontFamily={SANS} fontWeight={500} fontSize={9} fill="currentColor" opacity={0.55} letterSpacing={2}>{sub.toUpperCase()}</text>}
    </svg>
  );
}

// Serif italic wordmark + coral underline
function UnderlinedSerif({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <text x="8" y="36" fontFamily={SERIF} fontStyle="italic" fontWeight={500} fontSize={26} fill="currentColor" letterSpacing={0}>{text}</text>
      <path d="M8 45 C 60 40, 160 40, 250 46" fill="none" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Stacked wordmark, vertical divider bar
function StackedBar({ top, bottom, className }: { top: string; bottom: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <rect x="6" y="14" width="3" height="32" fill={CORAL} />
      <text x="18" y="28" fontFamily={SANS} fontWeight={800} fontSize={16} fill="currentColor" letterSpacing={2}>{top.toUpperCase()}</text>
      <text x="18" y="44" fontFamily={SANS} fontWeight={500} fontSize={10} fill="currentColor" opacity={0.6} letterSpacing={3}>{bottom.toUpperCase()}</text>
    </svg>
  );
}

// Bracketed mono wordmark
function BracketMono({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <text x="6" y="38" fontFamily={MONO} fontWeight={700} fontSize={22} fill={CORAL}>[</text>
      <text x="22" y="38" fontFamily={MONO} fontWeight={700} fontSize={20} fill="currentColor">{text}</text>
      <text x={22 + text.length * 12.5} y="38" fontFamily={MONO} fontWeight={700} fontSize={22} fill={CORAL}>]</text>
    </svg>
  );
}

// Dot pattern + wordmark
function DottedMark({ text, sub, className }: { text: string; sub?: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      {[...Array(9)].map((_, i) => (
        <circle key={i} cx={8 + (i % 3) * 8} cy={16 + Math.floor(i / 3) * 8} r={i === 4 ? 3 : 1.6} fill={i === 4 ? CORAL : "currentColor"} opacity={i === 4 ? 1 : 0.5} />
      ))}
      <text x="40" y={sub ? 30 : 37} fontFamily={SANS} fontWeight={700} fontSize={19} fill="currentColor" letterSpacing={-0.3}>{text}</text>
      {sub && <text x="40" y="44" fontFamily={SANS} fontWeight={500} fontSize={9} fill="currentColor" opacity={0.55} letterSpacing={2}>{sub.toUpperCase()}</text>}
    </svg>
  );
}

// Ampersand crest (luxury)
function CrestMark({ left, right, sub, className }: { left: string; right: string; sub?: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} aria-hidden="true">
      <text x="130" y="34" fontFamily={SERIF} fontWeight={600} fontSize={22} fill="currentColor" textAnchor="end" letterSpacing={1}>{left}</text>
      <text x="135" y="34" fontFamily={SERIF} fontStyle="italic" fontWeight={500} fontSize={22} fill={CORAL} textAnchor="middle">&amp;</text>
      <text x="140" y="34" fontFamily={SERIF} fontWeight={600} fontSize={22} fill="currentColor" letterSpacing={1}>{right}</text>
      {sub && <text x="130" y="48" fontFamily={SANS} fontWeight={500} fontSize={9} fill="currentColor" textAnchor="middle" opacity={0.6} letterSpacing={4}>{sub.toUpperCase()}</text>}
    </svg>
  );
}

// -------- Original 6 (kept, re-skinned distinctly) --------
export const NorthmarkLogo   = (p: LogoProps) => <StackedBar top="NORTHMARK" bottom="STUDIO" className={p.className} />;
export const HalcyonLogo     = (p: LogoProps) => <CircleMonogram letter="H" text="Halcyon Labs" className={p.className} />;
export const VertaLogo       = (p: LogoProps) => <UnderlinedSerif text="verta." className={p.className} />;
export const KestrelLogo     = (p: LogoProps) => <CrestMark left="Kestrel" right="Co." sub="est. 2016" className={p.className} />;
export const MeridianLogo    = (p: LogoProps) => <SquareMonogram letters="M" text="MERIDIAN" sub="Freight" className={p.className} />;
export const LumenLogo       = (p: LogoProps) => <IconWord text="Lumen Care" glyph="spark" className={p.className} />;

// -------- 14 varied US service-business marks (bottom row) --------
export const RidgelineHvacLogo    = (p: LogoProps) => <IconWord text="Ridgeline" sub="HVAC · Denver" glyph="flame" className={p.className} />;
export const BluefinPlumbingLogo  = (p: LogoProps) => <IconWord text="BlueFin" sub="Plumbing" glyph="drop" className={p.className} />;
export const IroncladRoofingLogo  = (p: LogoProps) => <BadgePill text="Ironclad Roofing" className={p.className} />;
export const OaktreeDentalLogo    = (p: LogoProps) => <IconWord text="OakTree" sub="Dental" glyph="tooth" className={p.className} />;
export const SableStoneLogo       = (p: LogoProps) => <CrestMark left="Sable" right="Stone" sub="Luxury Realty" className={p.className} />;
export const CopperfieldLawLogo   = (p: LogoProps) => <IconWord text="Copperfield" sub="Attorneys" glyph="gavel" className={p.className} />;
export const NorthlineMoversLogo  = (p: LogoProps) => <StackedBar top="NORTHLINE" bottom="Movers · Seattle" className={p.className} />;
export const CascadeDuctLogo      = (p: LogoProps) => <DottedMark text="Cascade" sub="Duct Care" className={p.className} />;
export const SunPeakSolarLogo     = (p: LogoProps) => <IconWord text="SunPeak" sub="Solar Co." glyph="sun" className={p.className} />;
export const ClearWaterPoolLogo   = (p: LogoProps) => <IconWord text="ClearWater" sub="Pool Co." glyph="wave" className={p.className} />;
export const MeridianWealthLogo   = (p: LogoProps) => <UnderlinedSerif text="Meridian Wealth" className={p.className} />;
export const HalcyonMedspaLogo    = (p: LogoProps) => <CircleMonogram letter="H" text="Halcyon Med Spa" className={p.className} />;
export const AsterHomeLogo        = (p: LogoProps) => <SquareMonogram letters="A" text="ASTER" sub="Home Services" className={p.className} />;
export const FoxgloveInteriorsLogo= (p: LogoProps) => <UnderlinedSerif text="Foxglove" className={p.className} />;

// -------- 8 additional invented US service-business marks --------
export const RedwoodHvacLogo         = (p: LogoProps) => <IconWord text="Redwood" sub="HVAC" glyph="wrench" className={p.className} />;
export const SkylineRoofingLogo      = (p: LogoProps) => <IconWord text="Skyline" sub="Roofing" glyph="roof" className={p.className} />;
export const BeaconLegalLogo         = (p: LogoProps) => <BracketMono text="Beacon.Legal" className={p.className} />;
export const HarborDentalLogo        = (p: LogoProps) => <IconWord text="Harbor" sub="Dental Group" glyph="anchor" className={p.className} />;
export const TrailheadMoversLogo     = (p: LogoProps) => <StackedBar top="TRAILHEAD" bottom="Movers · PNW" className={p.className} />;
export const VerdantLandscapingLogo  = (p: LogoProps) => <IconWord text="Verdant" sub="Landscaping" glyph="tree" className={p.className} />;
export const CobaltAutoLogo          = (p: LogoProps) => <IconWord text="Cobalt" sub="Auto Detailing" glyph="car" className={p.className} />;
export const AnchorHomeLogo          = (p: LogoProps) => <IconWord text="Anchor" sub="Home Services" glyph="house" className={p.className} />;

export type GeneratedLogo = { name: string; Component: (p: LogoProps) => ReactElement };

export const generatedLogos: GeneratedLogo[] = [
  { name: "Northmark Studio",  Component: NorthmarkLogo },
  { name: "Halcyon Labs",      Component: HalcyonLogo },
  { name: "Verta Retail",      Component: VertaLogo },
  { name: "Kestrel & Co.",     Component: KestrelLogo },
  { name: "Meridian Freight",  Component: MeridianLogo },
  { name: "Lumen Care Group",  Component: LumenLogo },
];

// Bottom-row set, all visually distinct
export const usServiceLogos: GeneratedLogo[] = [
  { name: "Ridgeline HVAC",       Component: RidgelineHvacLogo },
  { name: "BlueFin Plumbing",     Component: BluefinPlumbingLogo },
  { name: "Ironclad Roofing",     Component: IroncladRoofingLogo },
  { name: "OakTree Dental",       Component: OaktreeDentalLogo },
  { name: "Sable & Stone Realty", Component: SableStoneLogo },
  { name: "Copperfield Law",      Component: CopperfieldLawLogo },
  { name: "Northline Movers",     Component: NorthlineMoversLogo },
  { name: "Cascade Duct Care",    Component: CascadeDuctLogo },
  { name: "SunPeak Solar",        Component: SunPeakSolarLogo },
  { name: "ClearWater Pool Co.",  Component: ClearWaterPoolLogo },
  { name: "Meridian Wealth",      Component: MeridianWealthLogo },
  { name: "Halcyon Med Spa",      Component: HalcyonMedspaLogo },
  { name: "Aster Home Services",  Component: AsterHomeLogo },
  { name: "Foxglove Interiors",   Component: FoxgloveInteriorsLogo },
  { name: "Redwood HVAC",         Component: RedwoodHvacLogo },
  { name: "Skyline Roofing",      Component: SkylineRoofingLogo },
  { name: "Beacon Legal",         Component: BeaconLegalLogo },
  { name: "Harbor Dental Group",  Component: HarborDentalLogo },
  { name: "Trailhead Movers",     Component: TrailheadMoversLogo },
  { name: "Verdant Landscaping",  Component: VerdantLandscapingLogo },
  { name: "Cobalt Auto Detailing",Component: CobaltAutoLogo },
  { name: "Anchor Home Services", Component: AnchorHomeLogo },
];
