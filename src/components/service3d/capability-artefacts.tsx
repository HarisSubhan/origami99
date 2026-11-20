import type { ReactElement, ReactNode } from "react";
import { motion } from "motion/react";

/**
 * Animated SVG artefacts for the Capability Console.
 * Every artefact is pure SVG + motion, uses design tokens only,
 * and degrades to a static first frame when motion is reduced.
 */

const C = "var(--coral)";

type ArtProps = { reduced?: boolean };

function Grid() {
  return (
    <g opacity={0.18}>
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={280} stroke="currentColor" strokeWidth={0.5} />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 40} x2={400} y2={i * 40} stroke="currentColor" strokeWidth={0.5} />
      ))}
    </g>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full text-foreground" aria-hidden>
      <Grid />
      {children}
    </svg>
  );
}

function Node({ x, y, w = 92, h = 34, label, active = false }: { x: number; y: number; w?: number; h?: number; label: string; active?: boolean }) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx={9}
        fill={active ? `color-mix(in oklab, ${C} 22%, transparent)` : "color-mix(in oklab, currentColor 6%, transparent)"}
        stroke={active ? C : "color-mix(in oklab, currentColor 22%, transparent)"}
        strokeWidth={1}
      />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill="currentColor" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.2 }}>
        {label}
      </text>
    </g>
  );
}

function Packet({ path, delay = 0, reduced }: { path: string; delay?: number; reduced?: boolean }) {
  if (reduced) return null;
  return (
    <circle r={3.2} fill={C}>
      <animateMotion dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" path={path} />
      <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

/* ---------------- Custom Software: data flow graph ---------------- */
export function FlowGraphArt({ reduced }: ArtProps) {
  const edges = [
    "M 100 62 L 154 122",
    "M 100 152 L 154 138",
    "M 100 232 L 154 152",
    "M 246 140 L 300 70",
    "M 246 140 L 300 140",
    "M 246 140 L 300 214",
  ];
  return (
    <Frame>
      {edges.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={`color-mix(in oklab, ${C} 45%, transparent)`} strokeWidth={1.2} />
      ))}
      <Node x={8} y={45} label="Spreadsheets" />
      <Node x={8} y={135} label="Legacy DB" />
      <Node x={8} y={215} label="3rd party API" />
      <rect x={154} y={112} width={92} height={56} rx={12} fill={`color-mix(in oklab, ${C} 16%, transparent)`} stroke={C} strokeWidth={1.4} />
      <text x={200} y={136} textAnchor="middle" fill="currentColor" style={{ fontSize: 11, fontWeight: 800 }}>Domain</text>
      <text x={200} y={151} textAnchor="middle" fill="currentColor" style={{ fontSize: 11, fontWeight: 800 }}>model</text>
      <Node x={300} y={53} label="Ops app" active />
      <Node x={300} y={123} label="Reporting" active />
      <Node x={300} y={197} label="Automations" active />
      {edges.map((d, i) => (
        <Packet key={`p${i}`} path={d} delay={i * 0.32} reduced={reduced} />
      ))}
    </Frame>
  );
}

/* ---------------- SaaS: tenant dashboard drawing itself ---------------- */
export function TenantDashboardArt({ reduced }: ArtProps) {
  const line = "M 24 210 L 74 186 L 124 196 L 174 148 L 224 158 L 274 104 L 324 66 L 376 44";
  const bars = [34, 52, 44, 70, 60, 88];
  return (
    <Frame>
      <rect x={12} y={14} width={376} height={252} rx={14} fill="color-mix(in oklab, currentColor 4%, transparent)" stroke="color-mix(in oklab, currentColor 16%, transparent)" />
      <line x1={12} y1={46} x2={388} y2={46} stroke="color-mix(in oklab, currentColor 16%, transparent)" />
      {["Acme", "Northwind", "Globex"].map((t, i) => (
        <g key={t}>
          <rect x={24 + i * 84} y={24} width={74} height={16} rx={8} fill={i === 0 ? `color-mix(in oklab, ${C} 24%, transparent)` : "color-mix(in oklab, currentColor 8%, transparent)"} />
          <text x={61 + i * 84} y={36} textAnchor="middle" fill="currentColor" style={{ fontSize: 9, fontWeight: 700 }}>{t}</text>
        </g>
      ))}
      <text x={300} y={36} textAnchor="middle" fill={C} style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1 }}>MRR $184k</text>
      <motion.path
        d={line}
        fill="none"
        stroke={C}
        strokeWidth={2.2}
        strokeLinecap="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={reduced ? undefined : { pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={40 + i * 58}
          width={26}
          rx={5}
          fill={`color-mix(in oklab, ${C} ${18 + i * 8}%, transparent)`}
          initial={reduced ? { y: 244 - h, height: h } : { y: 244, height: 0 }}
          animate={{ y: 244 - h, height: h }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: "easeOut" }}
        />
      ))}
      <line x1={24} y1={244} x2={376} y2={244} stroke="color-mix(in oklab, currentColor 20%, transparent)" />
    </Frame>
  );
}

/* ---------------- Mobile: phone with sliding screens ---------------- */
export function PhoneFlowArt({ reduced }: ArtProps) {
  return (
    <Frame>
      <rect x={148} y={16} width={104} height={248} rx={20} fill="color-mix(in oklab, currentColor 6%, transparent)" stroke="color-mix(in oklab, currentColor 24%, transparent)" strokeWidth={1.4} />
      <rect x={166} y={22} width={68} height={7} rx={3.5} fill="color-mix(in oklab, currentColor 20%, transparent)" />
      <clipPath id="phoneClip"><rect x={154} y={36} width={92} height={220} rx={12} /></clipPath>
      <g clipPath="url(#phoneClip)">
        <motion.g
          animate={reduced ? undefined : { y: [0, -220, -440, 0] }}
          transition={{ duration: 9, times: [0, 0.33, 0.66, 1], repeat: Infinity, ease: "easeInOut" }}
        >
          {[0, 1, 2].map((s) => (
            <g key={s} transform={`translate(0 ${s * 220})`}>
              <rect x={162} y={46} width={76} height={14} rx={7} fill={`color-mix(in oklab, ${C} ${20 + s * 14}%, transparent)`} />
              {[0, 1, 2, 3].map((r) => (
                <rect key={r} x={162} y={70 + r * 26} width={s === 1 && r === 1 ? 46 : 76} height={18} rx={6} fill="color-mix(in oklab, currentColor 10%, transparent)" />
              ))}
              <rect x={162} y={186} width={76} height={22} rx={11} fill={C} opacity={0.85} />
            </g>
          ))}
        </motion.g>
      </g>
      {["Onboard", "Book", "Track"].map((l, i) => (
        <g key={l}>
          <rect x={i < 1 ? 18 : 288} y={60 + i * 74} width={94} height={30} rx={9} fill="color-mix(in oklab, currentColor 5%, transparent)" stroke="color-mix(in oklab, currentColor 18%, transparent)" />
          <text x={i < 1 ? 65 : 335} y={79 + i * 74} textAnchor="middle" fill="currentColor" style={{ fontSize: 10, fontWeight: 700 }}>{l}</text>
        </g>
      ))}
      <text x={200} y={274} textAnchor="middle" fill={C} style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }}>OFFLINE FIRST</text>
    </Frame>
  );
}

/* ---------------- UI and UX: fidelity morph ---------------- */
export function FidelityMorphArt({ reduced }: ArtProps) {
  return (
    <Frame>
      {[0, 1, 2].map((col) => {
        const x = 22 + col * 126;
        const tone = col === 0 ? 8 : col === 1 ? 16 : 34;
        return (
          <motion.g
            key={col}
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: col * 0.16, duration: 0.5 }}
          >
            <rect x={x} y={30} width={112} height={196} rx={12} fill="color-mix(in oklab, currentColor 4%, transparent)" stroke={col === 2 ? C : "color-mix(in oklab, currentColor 20%, transparent)"} />
            <rect x={x + 12} y={44} width={col === 0 ? 52 : 88} height={12} rx={4} fill={`color-mix(in oklab, ${C} ${tone}%, transparent)`} />
            {[0, 1, 2].map((r) => (
              <rect key={r} x={x + 12} y={66 + r * 18} width={col === 0 ? 60 + r * 8 : 88} height={9} rx={4} fill="color-mix(in oklab, currentColor 12%, transparent)" />
            ))}
            <g>
              {[0, 1, 2].map((c2) => (
                <rect key={c2} x={x + 12 + c2 * 30} y={132} width={26} height={34} rx={6} fill={`color-mix(in oklab, ${C} ${col * 12 + c2 * 4}%, transparent)`} stroke="color-mix(in oklab, currentColor 14%, transparent)" />
              ))}
            </g>
            <rect x={x + 12} y={180} width={col === 2 ? 60 : 40} height={16} rx={8} fill={col === 2 ? C : "color-mix(in oklab, currentColor 16%, transparent)"} opacity={col === 2 ? 0.9 : 1} />
            <text x={x + 56} y={218} textAnchor="middle" fill="currentColor" style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1 }} opacity={0.7}>
              {["SKETCH", "WIREFRAME", "SHIPPED"][col]}
            </text>
          </motion.g>
        );
      })}
      {!reduced && (
        <motion.rect
          x={22} y={24} width={112} height={208} rx={14}
          fill="none" stroke={C} strokeWidth={1.6}
          animate={{ x: [22, 148, 274, 22] }}
          transition={{ duration: 7.5, times: [0, 0.33, 0.66, 1], repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </Frame>
  );
}

/* ---------------- ERP: shared ledger core with orbiting modules ---------------- */
export function LedgerOrbitArt({ reduced }: ArtProps) {
  const mods = [
    { label: "Finance", a: -90 },
    { label: "Inventory", a: -18 },
    { label: "Sales", a: 54 },
    { label: "HR", a: 126 },
    { label: "Procurement", a: 198 },
  ];
  const cx = 200, cy = 140, r = 96;
  return (
    <Frame>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="color-mix(in oklab, currentColor 16%, transparent)" strokeDasharray="4 6" />
      {mods.map((m, i) => {
        const rad = (m.a * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={m.label}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={`color-mix(in oklab, ${C} 30%, transparent)`} strokeWidth={1} />
            <rect x={x - 39} y={y - 13} width={78} height={26} rx={8} fill="color-mix(in oklab, currentColor 6%, transparent)" stroke="color-mix(in oklab, currentColor 22%, transparent)" />
            <text x={x} y={y + 4} textAnchor="middle" fill="currentColor" style={{ fontSize: 9.5, fontWeight: 700 }}>{m.label}</text>
            {!reduced && (
              <circle r={2.8} fill={C}>
                <animateMotion dur="2.4s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={`M ${cx} ${cy} L ${x} ${y}`} />
                <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={40} fill={`color-mix(in oklab, ${C} 18%, transparent)`} stroke={C} strokeWidth={1.6} />
      <text x={cx} y={cy - 2} textAnchor="middle" fill="currentColor" style={{ fontSize: 10.5, fontWeight: 800 }}>Shared</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="currentColor" style={{ fontSize: 10.5, fontWeight: 800 }}>ledger</text>
    </Frame>
  );
}

/* ---------------- AI: retrieval pulse ---------------- */
export function NeuralPulseArt({ reduced }: ArtProps) {
  const layers = [3, 5, 5, 2];
  return (
    <Frame>
      {layers.map((n, li) =>
        Array.from({ length: n }).map((_, ni) => {
          const x = 60 + li * 94;
          const y = 140 + (ni - (n - 1) / 2) * 46;
          const next = layers[li + 1];
          return (
            <g key={`${li}-${ni}`}>
              {next !== undefined &&
                Array.from({ length: next }).map((__, nj) => (
                  <line key={nj} x1={x} y1={y} x2={x + 94} y2={140 + (nj - (next - 1) / 2) * 46} stroke={`color-mix(in oklab, ${C} 16%, transparent)`} strokeWidth={0.8} />
                ))}
              <motion.circle
                cx={x} cy={y} r={7}
                fill={`color-mix(in oklab, ${C} 30%, transparent)`}
                stroke={C} strokeWidth={1}
                animate={reduced ? undefined : { opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: (li * 5 + ni) * 0.12 }}
              />
            </g>
          );
        }),
      )}
      <text x={200} y={266} textAnchor="middle" fill={C} style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }}>RETRIEVAL, GROUNDING, GUARDRAILS</text>
    </Frame>
  );
}

/* ---------------- Cloud: multi region mesh ---------------- */
export function RegionMeshArt({ reduced }: ArtProps) {
  const pts = [
    { x: 78, y: 84, l: "eu-west" },
    { x: 200, y: 54, l: "us-east" },
    { x: 322, y: 100, l: "ap-south" },
    { x: 132, y: 196, l: "me-central" },
    { x: 276, y: 206, l: "edge" },
  ];
  return (
    <Frame>
      {pts.map((p, i) =>
        pts.slice(i + 1).map((q, j) => (
          <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={`color-mix(in oklab, ${C} 14%, transparent)`} strokeWidth={0.9} />
        )),
      )}
      {pts.map((p, i) => (
        <g key={p.l}>
          {!reduced && (
            <motion.circle cx={p.x} cy={p.y} r={16} fill="none" stroke={C} strokeWidth={1}
              animate={{ r: [10, 26], opacity: [0.5, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.5 }} />
          )}
          <circle cx={p.x} cy={p.y} r={9} fill={`color-mix(in oklab, ${C} 34%, transparent)`} stroke={C} />
          <text x={p.x} y={p.y + 27} textAnchor="middle" fill="currentColor" style={{ fontSize: 9, fontWeight: 700 }} opacity={0.8}>{p.l}</text>
        </g>
      ))}
    </Frame>
  );
}

/* ---------------- DevOps: release pipeline ---------------- */
export function PipelineArt({ reduced }: ArtProps) {
  const stages = ["Commit", "Build", "Test", "Canary", "Prod"];
  return (
    <Frame>
      <line x1={40} y1={140} x2={360} y2={140} stroke="color-mix(in oklab, currentColor 18%, transparent)" strokeWidth={2} />
      {stages.map((s, i) => {
        const x = 40 + i * 80;
        return (
          <g key={s}>
            <circle cx={x} cy={140} r={13} fill={`color-mix(in oklab, ${C} ${14 + i * 8}%, transparent)`} stroke={C} strokeWidth={1.2} />
            <text x={x} y={112} textAnchor="middle" fill="currentColor" style={{ fontSize: 9.5, fontWeight: 700 }}>{s}</text>
            <text x={x} y={172} textAnchor="middle" fill="currentColor" style={{ fontSize: 8.5, fontWeight: 600 }} opacity={0.6}>
              {["push", "2m 10s", "1,482", "5%", "100%"][i]}
            </text>
          </g>
        );
      })}
      {!reduced && (
        <motion.circle cy={140} r={5} fill={C}
          animate={{ cx: [40, 360], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
      )}
      <text x={200} y={236} textAnchor="middle" fill={C} style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }}>ZERO DOWNTIME RELEASES</text>
    </Frame>
  );
}

export const ARTEFACTS: Record<string, (p: ArtProps) => ReactElement> = {
  flow: FlowGraphArt,
  saas: TenantDashboardArt,
  mobile: PhoneFlowArt,
  design: FidelityMorphArt,
  erp: LedgerOrbitArt,
  ai: NeuralPulseArt,
  cloud: RegionMeshArt,
  devops: PipelineArt,
};

export function artefactKeyFor(title: string): keyof typeof ARTEFACTS {
  const t = title.toLowerCase();
  if (t.includes("saas")) return "saas";
  if (t.includes("mobile")) return "mobile";
  if (t.includes("ux") || t.includes("design")) return "design";
  if (t.includes("erp")) return "erp";
  if (t.includes("ai")) return "ai";
  if (t.includes("cloud") || t.includes("infra")) return "cloud";
  if (t.includes("devops") || t.includes("deploy")) return "devops";
  return "flow";
}
