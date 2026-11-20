import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { H as Header, F as Footer } from "./Footer-BbcpjPO7.mjs";
import { C as Contact } from "./Contact-CTgd-mc8.mjs";
import { T as Testimonials } from "./Testimonials-DJDxfm3G.mjs";
import { W as Work } from "./Work-B0INhCLK.mjs";
import { e as useScroll, c as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { aj as ArrowLeft, N as ShieldCheck, w as Clock, K as Award, A as ArrowRight, Z as Zap, x as CircleCheck, al as Minus, p as Plus, U as Users, ac as Lock } from "../_libs/lucide-react.mjs";
const C = "var(--coral)";
function Grid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { opacity: 0.18, children: [
    Array.from({ length: 11 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: i * 40, y1: 0, x2: i * 40, y2: 280, stroke: "currentColor", strokeWidth: 0.5 }, `v${i}`)),
    Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 0, y1: i * 40, x2: 400, y2: i * 40, stroke: "currentColor", strokeWidth: 0.5 }, `h${i}`))
  ] });
}
function Frame({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 280", className: "h-full w-full text-foreground", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, {}),
    children
  ] });
}
function Node({ x, y, w = 92, h = 34, label, active = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "rect",
      {
        x,
        y,
        width: w,
        height: h,
        rx: 9,
        fill: active ? `color-mix(in oklab, ${C} 22%, transparent)` : "color-mix(in oklab, currentColor 6%, transparent)",
        stroke: active ? C : "color-mix(in oklab, currentColor 22%, transparent)",
        strokeWidth: 1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + w / 2, y: y + h / 2 + 4, textAnchor: "middle", fill: "currentColor", style: { fontSize: 10.5, fontWeight: 700, letterSpacing: 0.2 }, children: label })
  ] });
}
function Packet({ path, delay = 0, reduced }) {
  if (reduced) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { r: 3.2, fill: C, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("animateMotion", { dur: "2.6s", begin: `${delay}s`, repeatCount: "indefinite", path }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "opacity", values: "0;1;1;0", dur: "2.6s", begin: `${delay}s`, repeatCount: "indefinite" })
  ] });
}
function FlowGraphArt({ reduced }) {
  const edges = [
    "M 100 62 L 154 122",
    "M 100 152 L 154 138",
    "M 100 232 L 154 152",
    "M 246 140 L 300 70",
    "M 246 140 L 300 140",
    "M 246 140 L 300 214"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    edges.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d, fill: "none", stroke: `color-mix(in oklab, ${C} 45%, transparent)`, strokeWidth: 1.2 }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 8, y: 45, label: "Spreadsheets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 8, y: 135, label: "Legacy DB" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 8, y: 215, label: "3rd party API" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 154, y: 112, width: 92, height: 56, rx: 12, fill: `color-mix(in oklab, ${C} 16%, transparent)`, stroke: C, strokeWidth: 1.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 200, y: 136, textAnchor: "middle", fill: "currentColor", style: { fontSize: 11, fontWeight: 800 }, children: "Domain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 200, y: 151, textAnchor: "middle", fill: "currentColor", style: { fontSize: 11, fontWeight: 800 }, children: "model" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 300, y: 53, label: "Ops app", active: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 300, y: 123, label: "Reporting", active: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { x: 300, y: 197, label: "Automations", active: true }),
    edges.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Packet, { path: d, delay: i * 0.32, reduced }, `p${i}`))
  ] });
}
function TenantDashboardArt({ reduced }) {
  const line = "M 24 210 L 74 186 L 124 196 L 174 148 L 224 158 L 274 104 L 324 66 L 376 44";
  const bars = [34, 52, 44, 70, 60, 88];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 12, y: 14, width: 376, height: 252, rx: 14, fill: "color-mix(in oklab, currentColor 4%, transparent)", stroke: "color-mix(in oklab, currentColor 16%, transparent)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 12, y1: 46, x2: 388, y2: 46, stroke: "color-mix(in oklab, currentColor 16%, transparent)" }),
    ["Acme", "Northwind", "Globex"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 24 + i * 84, y: 24, width: 74, height: 16, rx: 8, fill: i === 0 ? `color-mix(in oklab, ${C} 24%, transparent)` : "color-mix(in oklab, currentColor 8%, transparent)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 61 + i * 84, y: 36, textAnchor: "middle", fill: "currentColor", style: { fontSize: 9, fontWeight: 700 }, children: t })
    ] }, t)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 300, y: 36, textAnchor: "middle", fill: C, style: { fontSize: 9, fontWeight: 800, letterSpacing: 1 }, children: "MRR $184k" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.path,
      {
        d: line,
        fill: "none",
        stroke: C,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        initial: reduced ? void 0 : { pathLength: 0 },
        animate: reduced ? void 0 : { pathLength: 1 },
        transition: { duration: 1.6, ease: "easeInOut" }
      }
    ),
    bars.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.rect,
      {
        x: 40 + i * 58,
        width: 26,
        rx: 5,
        fill: `color-mix(in oklab, ${C} ${18 + i * 8}%, transparent)`,
        initial: reduced ? { y: 244 - h, height: h } : { y: 244, height: 0 },
        animate: { y: 244 - h, height: h },
        transition: { duration: 0.6, delay: 0.2 + i * 0.07, ease: "easeOut" }
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 24, y1: 244, x2: 376, y2: 244, stroke: "color-mix(in oklab, currentColor 20%, transparent)" })
  ] });
}
function PhoneFlowArt({ reduced }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 148, y: 16, width: 104, height: 248, rx: 20, fill: "color-mix(in oklab, currentColor 6%, transparent)", stroke: "color-mix(in oklab, currentColor 24%, transparent)", strokeWidth: 1.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 166, y: 22, width: 68, height: 7, rx: 3.5, fill: "color-mix(in oklab, currentColor 20%, transparent)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "phoneClip", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 154, y: 36, width: 92, height: 220, rx: 12 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#phoneClip)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.g,
      {
        animate: reduced ? void 0 : { y: [0, -220, -440, 0] },
        transition: { duration: 9, times: [0, 0.33, 0.66, 1], repeat: Infinity, ease: "easeInOut" },
        children: [0, 1, 2].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0 ${s * 220})`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 162, y: 46, width: 76, height: 14, rx: 7, fill: `color-mix(in oklab, ${C} ${20 + s * 14}%, transparent)` }),
          [0, 1, 2, 3].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 162, y: 70 + r * 26, width: s === 1 && r === 1 ? 46 : 76, height: 18, rx: 6, fill: "color-mix(in oklab, currentColor 10%, transparent)" }, r)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 162, y: 186, width: 76, height: 22, rx: 11, fill: C, opacity: 0.85 })
        ] }, s))
      }
    ) }),
    ["Onboard", "Book", "Track"].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: i < 1 ? 18 : 288, y: 60 + i * 74, width: 94, height: 30, rx: 9, fill: "color-mix(in oklab, currentColor 5%, transparent)", stroke: "color-mix(in oklab, currentColor 18%, transparent)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: i < 1 ? 65 : 335, y: 79 + i * 74, textAnchor: "middle", fill: "currentColor", style: { fontSize: 10, fontWeight: 700 }, children: l })
    ] }, l)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 200, y: 274, textAnchor: "middle", fill: C, style: { fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }, children: "OFFLINE FIRST" })
  ] });
}
function FidelityMorphArt({ reduced }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    [0, 1, 2].map((col) => {
      const x = 22 + col * 126;
      const tone = col === 0 ? 8 : col === 1 ? 16 : 34;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.g,
        {
          initial: reduced ? void 0 : { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: col * 0.16, duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: 30, width: 112, height: 196, rx: 12, fill: "color-mix(in oklab, currentColor 4%, transparent)", stroke: col === 2 ? C : "color-mix(in oklab, currentColor 20%, transparent)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x + 12, y: 44, width: col === 0 ? 52 : 88, height: 12, rx: 4, fill: `color-mix(in oklab, ${C} ${tone}%, transparent)` }),
            [0, 1, 2].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x + 12, y: 66 + r * 18, width: col === 0 ? 60 + r * 8 : 88, height: 9, rx: 4, fill: "color-mix(in oklab, currentColor 12%, transparent)" }, r)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: [0, 1, 2].map((c2) => /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x + 12 + c2 * 30, y: 132, width: 26, height: 34, rx: 6, fill: `color-mix(in oklab, ${C} ${col * 12 + c2 * 4}%, transparent)`, stroke: "color-mix(in oklab, currentColor 14%, transparent)" }, c2)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x + 12, y: 180, width: col === 2 ? 60 : 40, height: 16, rx: 8, fill: col === 2 ? C : "color-mix(in oklab, currentColor 16%, transparent)", opacity: col === 2 ? 0.9 : 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 56, y: 218, textAnchor: "middle", fill: "currentColor", style: { fontSize: 9, fontWeight: 700, letterSpacing: 1 }, opacity: 0.7, children: ["SKETCH", "WIREFRAME", "SHIPPED"][col] })
          ]
        },
        col
      );
    }),
    !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.rect,
      {
        x: 22,
        y: 24,
        width: 112,
        height: 208,
        rx: 14,
        fill: "none",
        stroke: C,
        strokeWidth: 1.6,
        animate: { x: [22, 148, 274, 22] },
        transition: { duration: 7.5, times: [0, 0.33, 0.66, 1], repeat: Infinity, ease: "easeInOut" }
      }
    )
  ] });
}
function LedgerOrbitArt({ reduced }) {
  const mods = [
    { label: "Finance", a: -90 },
    { label: "Inventory", a: -18 },
    { label: "Sales", a: 54 },
    { label: "HR", a: 126 },
    { label: "Procurement", a: 198 }
  ];
  const cx = 200, cy = 140, r = 96;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r, fill: "none", stroke: "color-mix(in oklab, currentColor 16%, transparent)", strokeDasharray: "4 6" }),
    mods.map((m, i) => {
      const rad = m.a * Math.PI / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: `color-mix(in oklab, ${C} 30%, transparent)`, strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x - 39, y: y - 13, width: 78, height: 26, rx: 8, fill: "color-mix(in oklab, currentColor 6%, transparent)", stroke: "color-mix(in oklab, currentColor 22%, transparent)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: y + 4, textAnchor: "middle", fill: "currentColor", style: { fontSize: 9.5, fontWeight: 700 }, children: m.label }),
        !reduced && /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { r: 2.8, fill: C, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("animateMotion", { dur: "2.4s", begin: `${i * 0.45}s`, repeatCount: "indefinite", path: `M ${cx} ${cy} L ${x} ${y}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "opacity", values: "0;1;0", dur: "2.4s", begin: `${i * 0.45}s`, repeatCount: "indefinite" })
        ] })
      ] }, m.label);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 40, fill: `color-mix(in oklab, ${C} 18%, transparent)`, stroke: C, strokeWidth: 1.6 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx, y: cy - 2, textAnchor: "middle", fill: "currentColor", style: { fontSize: 10.5, fontWeight: 800 }, children: "Shared" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx, y: cy + 12, textAnchor: "middle", fill: "currentColor", style: { fontSize: 10.5, fontWeight: 800 }, children: "ledger" })
  ] });
}
function NeuralPulseArt({ reduced }) {
  const layers = [3, 5, 5, 2];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    layers.map(
      (n, li) => Array.from({ length: n }).map((_, ni) => {
        const x = 60 + li * 94;
        const y = 140 + (ni - (n - 1) / 2) * 46;
        const next = layers[li + 1];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          next !== void 0 && Array.from({ length: next }).map((__, nj) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: y, x2: x + 94, y2: 140 + (nj - (next - 1) / 2) * 46, stroke: `color-mix(in oklab, ${C} 16%, transparent)`, strokeWidth: 0.8 }, nj)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: x,
              cy: y,
              r: 7,
              fill: `color-mix(in oklab, ${C} 30%, transparent)`,
              stroke: C,
              strokeWidth: 1,
              animate: reduced ? void 0 : { opacity: [0.35, 1, 0.35] },
              transition: { duration: 2.2, repeat: Infinity, delay: (li * 5 + ni) * 0.12 }
            }
          )
        ] }, `${li}-${ni}`);
      })
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 200, y: 266, textAnchor: "middle", fill: C, style: { fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }, children: "RETRIEVAL, GROUNDING, GUARDRAILS" })
  ] });
}
function RegionMeshArt({ reduced }) {
  const pts = [
    { x: 78, y: 84, l: "eu-west" },
    { x: 200, y: 54, l: "us-east" },
    { x: 322, y: 100, l: "ap-south" },
    { x: 132, y: 196, l: "me-central" },
    { x: 276, y: 206, l: "edge" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    pts.map(
      (p, i) => pts.slice(i + 1).map((q, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: p.x, y1: p.y, x2: q.x, y2: q.y, stroke: `color-mix(in oklab, ${C} 14%, transparent)`, strokeWidth: 0.9 }, `${i}-${j}`))
    ),
    pts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.circle,
        {
          cx: p.x,
          cy: p.y,
          r: 16,
          fill: "none",
          stroke: C,
          strokeWidth: 1,
          animate: { r: [10, 26], opacity: [0.5, 0] },
          transition: { duration: 2.6, repeat: Infinity, delay: i * 0.5 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: 9, fill: `color-mix(in oklab, ${C} 34%, transparent)`, stroke: C }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: p.x, y: p.y + 27, textAnchor: "middle", fill: "currentColor", style: { fontSize: 9, fontWeight: 700 }, opacity: 0.8, children: p.l })
    ] }, p.l))
  ] });
}
function PipelineArt({ reduced }) {
  const stages = ["Commit", "Build", "Test", "Canary", "Prod"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Frame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 40, y1: 140, x2: 360, y2: 140, stroke: "color-mix(in oklab, currentColor 18%, transparent)", strokeWidth: 2 }),
    stages.map((s, i) => {
      const x = 40 + i * 80;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: 140, r: 13, fill: `color-mix(in oklab, ${C} ${14 + i * 8}%, transparent)`, stroke: C, strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: 112, textAnchor: "middle", fill: "currentColor", style: { fontSize: 9.5, fontWeight: 700 }, children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: 172, textAnchor: "middle", fill: "currentColor", style: { fontSize: 8.5, fontWeight: 600 }, opacity: 0.6, children: ["push", "2m 10s", "1,482", "5%", "100%"][i] })
      ] }, s);
    }),
    !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.circle,
      {
        cy: 140,
        r: 5,
        fill: C,
        animate: { cx: [40, 360], opacity: [0, 1, 1, 0] },
        transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: 200, y: 236, textAnchor: "middle", fill: C, style: { fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }, children: "ZERO DOWNTIME RELEASES" })
  ] });
}
const ARTEFACTS = {
  flow: FlowGraphArt,
  saas: TenantDashboardArt,
  mobile: PhoneFlowArt,
  design: FidelityMorphArt,
  erp: LedgerOrbitArt,
  ai: NeuralPulseArt,
  cloud: RegionMeshArt,
  devops: PipelineArt
};
function artefactKeyFor(title) {
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
function useReducedMotion() {
  const [reduced, setReduced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
function LazyArtefact({ className, children }) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, children: children(visible) });
}
const META = {
  flow: {
    readout: "Domain model resolved",
    stats: [{ k: "Systems unified", v: "3 to 1" }, { k: "Manual steps removed", v: "up to 80%" }, { k: "Owned by you", v: "100% IP" }],
    note: "We map the way your business actually runs, then build the system around that model instead of forcing your team into someone else's workflow."
  },
  saas: {
    readout: "Tenants healthy, billing live",
    stats: [{ k: "MVP window", v: "6 weeks" }, { k: "Tenancy", v: "Isolated" }, { k: "Billing", v: "Metered" }],
    note: "Auth, tenancy, entitlements, metering and observability are in the first release, not a phase two that never arrives."
  },
  mobile: {
    readout: "Flow running, offline queue clear",
    stats: [{ k: "Platforms", v: "iOS + Android" }, { k: "Store pipeline", v: "Automated" }, { k: "Target", v: "Day 30 retention" }],
    note: "We design for the commute, the basement and the dead zone. The app keeps working, then reconciles when the signal returns."
  },
  design: {
    readout: "Fidelity locked to shipped",
    stats: [{ k: "Deliverable", v: "Code, not slides" }, { k: "Research", v: "5 to 7 interviews" }, { k: "System", v: "Tokens to prod" }],
    note: "The design system lives in your repository from week three. Figma tracks the code, not the other way round."
  },
  erp: {
    readout: "Event propagated across modules",
    stats: [{ k: "Ledger", v: "Single source" }, { k: "Modules", v: "Finance to HR" }, { k: "Migration", v: "Staged, reversible" }],
    note: "One posted transaction updates finance, stock and reporting in the same breath. No nightly sync, no reconciliation spreadsheet."
  },
  ai: {
    readout: "Grounded answers, sources attached",
    stats: [{ k: "Retrieval", v: "Your data" }, { k: "Guardrails", v: "Enforced" }, { k: "Tied to", v: "A real KPI" }],
    note: "Assistants and automations that cite their sources and stay inside the boundaries your compliance team signed off."
  },
  cloud: {
    readout: "All regions green",
    stats: [{ k: "Uptime target", v: "99.99%" }, { k: "Infra", v: "As code" }, { k: "Cost", v: "Tuned monthly" }],
    note: "Architecture sized for the traffic you have, with a documented path to the traffic you are planning for."
  },
  devops: {
    readout: "Canary passing, promoting",
    stats: [{ k: "Releases", v: "Zero downtime" }, { k: "Rollback", v: "One command" }, { k: "Pipeline", v: "Fully automated" }],
    note: "Shipping stops being an event. It becomes a Tuesday afternoon with a green pipeline and a rollback you never need."
  }
};
function CapabilityConsole({ subs, eyebrow = "Everything under one roof" }) {
  const reduced = useReducedMotion();
  const [active, setActive] = reactExports.useState(0);
  const [locked, setLocked] = reactExports.useState(false);
  const stageRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (locked || reduced || subs.length < 2) return;
    const id = setInterval(() => setActive((a) => (a + 1) % subs.length), 6e3);
    return () => clearInterval(id);
  }, [locked, reduced, subs.length]);
  const pick = reactExports.useCallback((i) => {
    setActive(i);
    setLocked(true);
  }, []);
  const onStageMove = reactExports.useCallback((e) => {
    const el = stageRef.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${(e.clientX - r.left) / r.width * 100}%`);
    el.style.setProperty("--py", `${(e.clientY - r.top) / r.height * 100}%`);
  }, [reduced]);
  if (subs.length === 0) return null;
  const current = subs[active];
  const key = artefactKeyFor(current.title);
  const Art = ARTEFACTS[key];
  const meta = META[key];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-24 sm:py-32 bg-section-grad overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-24 -right-40 w-[34rem] h-[34rem] bg-coral/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
          " ",
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
          "One senior team. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Every capability you need." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "Pick a capability and watch what it actually looks like when we build it. Same roadmap, same standards, same accountable people behind every one." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:grid grid-cols-[minmax(0,26rem)_1fr] gap-6 rounded-[2rem] border border-border bg-card/60 backdrop-blur-xl p-4 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/70 bg-background/50 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "Capability index" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-1", children: subs.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full transition-colors ${i === active ? "bg-coral" : "bg-foreground/15"}` }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 space-y-1", children: subs.map((s, i) => {
            const isActive = i === active;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => pick(i),
                onFocus: () => pick(i),
                onClick: () => pick(i),
                "aria-current": isActive,
                className: "relative w-full text-left rounded-2xl px-3 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
                children: [
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "cap-active",
                      className: "absolute inset-0 rounded-2xl bg-coral/10 border border-coral/40",
                      transition: { type: "spring", stiffness: 380, damping: 32 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${isActive ? "bg-coral-grad shadow-glow" : "bg-foreground/5 border border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-4.5 w-4.5 ${isActive ? "text-white" : "text-foreground/60"}` }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-bold leading-snug", children: s.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block truncate text-xs text-muted-foreground", children: s.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tabular-nums text-muted-foreground", children: String(i + 1).padStart(2, "0") })
                  ] })
                ]
              }
            ) }, s.title);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: stageRef,
            onPointerMove: onStageMove,
            className: "relative overflow-hidden rounded-3xl border border-border/70 bg-background/60 p-6",
            style: { backgroundImage: "radial-gradient(420px circle at var(--px,70%) var(--py,20%), color-mix(in oklab, var(--coral) 12%, transparent), transparent 70%)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-coral animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: meta.readout })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: [
                  locked && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
                  " Live preview"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-[19rem] rounded-2xl border border-border/60 bg-card/40 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: reduced ? false : { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  exit: reduced ? void 0 : { opacity: 0, scale: 1.01 },
                  transition: { duration: 0.25, ease: "easeOut" },
                  className: "h-full w-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Art, { reduced })
                },
                key
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: reduced ? false : { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: reduced ? void 0 : { opacity: 0, y: -6 },
                  transition: { duration: 0.22 },
                  className: "mt-5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: current.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground", children: meta.note }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-3", children: [
                      meta.stats.map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/70 px-3 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: st.k }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-coral", children: st.v })
                      ] }, st.k)),
                      current.href && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: current.href,
                          className: "ml-auto inline-flex items-center gap-2 rounded-xl bg-coral-grad px-4 py-2.5 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]",
                          children: [
                            "Explore ",
                            current.title,
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                          ]
                        }
                      )
                    ] })
                  ]
                },
                `${key}-copy`
              ) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden -mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch]", children: subs.map((s, i) => {
        const k = artefactKeyFor(s.title);
        const A = ARTEFACTS[k];
        const m = META[k];
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-coral-grad", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold leading-snug", children: s.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LazyArtefact, { className: "mt-4 h-44 rounded-2xl border border-border/60 bg-background/50 p-1.5", children: (visible) => /* @__PURE__ */ jsxRuntimeExports.jsx(A, { reduced: reduced || !visible }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-4 flex flex-wrap gap-1.5", children: m.stats.slice(0, 2).map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-foreground/5 px-2.5 py-1 text-[10px] font-semibold text-foreground/70", children: [
            st.k,
            ": ",
            st.v
          ] }, st.k)) }),
          s.href && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-coral", children: [
            "Explore ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "snap-center shrink-0 w-[82vw] max-w-sm rounded-3xl border border-border bg-card p-5 flex flex-col [content-visibility:auto] [contain-intrinsic-size:420px]",
            children: s.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: s.href, className: "flex h-full flex-col", children: inner }) : inner
          },
          s.title
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:hidden text-center text-xs text-muted-foreground", children: "Swipe to browse every capability" })
    ] })
  ] });
}
const caseSoftware = "/assets/case-software-BNyq__uA.jpg";
const caseWeb = "/assets/case-web-B5SvHdCC.jpg";
const caseMarketing = "/assets/case-marketing-BtXCZ9C7.jpg";
const caseSeo = "/assets/case-seo-DS807iKi.jpg";
const caseBrand = "/assets/case-brand-AXF9VY3a.jpg";
const caseImages = {
  software: caseSoftware,
  web: caseWeb,
  marketing: caseMarketing,
  seo: caseSeo,
  brand: caseBrand
};
const Scene3D = reactExports.lazy(() => import("./Scene3D-D2GnBspR.mjs").then((m) => ({ default: m.Scene3D })));
function useInView(rootMargin = "200px") {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref.current || inView) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { rootMargin });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [inView, rootMargin]);
  return { ref, inView };
}
const visualCopy = {
  software: {
    label: "Product command layer",
    title: "A living system of apps, data, roles and releases.",
    axis: "Architecture, design system, API mesh, mobile, dashboard, deployment",
    items: ["SaaS", "ERP", "Mobile", "Cloud"]
  },
  web: {
    label: "Conversion interface lab",
    title: "Screens, CMS, commerce and speed budgets moving as one.",
    axis: "Brand story, technical SEO, Core Web Vitals, CMS, analytics, CRO",
    items: ["React", "Shopify", "WordPress", "Framer"]
  },
  marketing: {
    label: "Revenue orbit engine",
    title: "Creative, media, attribution and landing pages tuned to profit.",
    axis: "Google, Meta, short form video, lifecycle, CRO, reporting",
    items: ["ROAS", "CPA", "CTR", "LTV"]
  },
  seo: {
    label: "Search authority map",
    title: "Technical foundations, content clusters and authority signals rising together.",
    axis: "Crawl, index, rank, earn links, refresh, convert",
    items: ["Audit", "Schema", "Content", "Links"]
  },
  brand: {
    label: "Identity system forge",
    title: "Strategy, symbols, type, color and rollout assets in one coherent world.",
    axis: "Positioning, logo, typography, palette, motion, guidelines",
    items: ["Mark", "Voice", "Type", "Launch"]
  }
};
const heroCopy = {
  software: {
    title: "Custom software your business runs on",
    accent: "Designed to scale"
  },
  web: {
    title: "Websites that sell before the first call",
    accent: "Built to rank"
  },
  marketing: {
    title: "Growth systems for profitable demand",
    accent: "Creative that converts"
  },
  seo: {
    title: "Search visibility that becomes pipeline",
    accent: "Rank with intent"
  },
  brand: {
    title: "Brand systems buyers remember",
    accent: "Identity that scales"
  }
};
function HeroInstrument({ variant }) {
  const v = visualCopy[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24, rotateX: 8 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      transition: { delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      className: "relative hidden lg:block",
      style: { perspective: 1400 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          animate: { y: [0, -14, 0], rotateY: [-8, 8, -8] },
          transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          className: "relative min-h-[520px] rounded-[2rem] border border-border bg-card/45 p-6 shadow-glow backdrop-blur-xl",
          style: { transformStyle: "preserve-3d" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--coral)_20%,transparent),transparent_38%)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-coral shadow-glow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-8 grid grid-cols-2 gap-3", children: v.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { y: [0, i % 2 ? 12 : -12, 0], rotateZ: [0, i % 2 ? 2 : -2, 0] },
                transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                className: "rounded-2xl border border-border bg-background/65 p-4 shadow-soft",
                style: { transform: `translateZ(${40 + i * 20}px)` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-20 rounded-xl border border-coral/25 bg-coral/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-3 h-2 w-16 rounded-full bg-coral/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mt-3 grid grid-cols-3 gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 rounded bg-foreground/10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 rounded bg-coral/30" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 rounded bg-foreground/10" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-lg font-bold text-foreground", children: item })
                ]
              },
              item
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 rounded-2xl border border-border bg-background/70 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold leading-tight text-foreground", children: v.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 overflow-hidden rounded-full bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-full rounded-full bg-coral",
                  animate: { x: ["-100%", "0%", "100%"] },
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: v.axis })
            ] })
          ]
        }
      )
    }
  );
}
function PremiumServicePage(props) {
  const { service, variant, eyebrow, metrics, pricing, problem, workFilter, workDiscipline } = props;
  const hero = heroCopy[variant];
  const subs = service.subServices ?? [];
  const tools = service.tools ?? service.tech.map((t) => ({ name: t }));
  const faqs = service.faqs ?? [];
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const { ref: heroRef, inView: heroInView } = useInView("0px");
  const shouldRender3D = heroInView && !isMobile;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          ref: heroRef,
          className: "relative overflow-hidden bg-section-grad pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 noise",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
            shouldRender3D && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y: heroY, opacity: heroOpacity }, className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, { variant }) }) }),
            isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: { y: [0, -22, 0], rotate: [45, 60, 45] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }, className: "absolute top-24 right-[8%] w-28 h-28 bg-coral-grad diamond rounded-2xl shadow-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: { y: [0, 20, 0], scale: [1, 1.1, 1] }, transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }, className: "absolute bottom-24 left-[6%] w-24 h-24 bg-foreground/5 border border-foreground/15 rounded-full backdrop-blur" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-foreground/60 hover:text-coral text-sm font-semibold mb-8 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                " Back to home"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.15fr_1fr]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      className: "inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-coral" })
                        ] }),
                        eyebrow
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 24 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                      className: "mt-5 sm:mt-6 text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.98] tracking-tight text-balance text-foreground",
                      children: [
                        hero.title,
                        ".",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block text-coral", style: { textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }, children: [
                          hero.accent,
                          ".",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.svg,
                            {
                              viewBox: "0 0 300 14",
                              className: "absolute -bottom-1 sm:-bottom-2 left-0 w-full",
                              initial: { pathLength: 0 },
                              animate: { pathLength: 1 },
                              transition: { duration: 1.4, delay: 0.8 },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.path, { d: "M2 9 C 80 2, 220 2, 298 9", stroke: "var(--coral)", strokeWidth: "4", fill: "none", strokeLinecap: "round" })
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.25 },
                      className: "mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed",
                      children: service.hero
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4 },
                      className: "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/75",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-coral" }),
                          " NDA and DPA signed before kickoff"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-coral" }),
                          " First demo within two weeks"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-coral" }),
                          " Senior team, no hand offs"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.55 },
                      className: "mt-10 flex flex-wrap gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 bg-coral-grad text-white px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform text-base", children: [
                          "Book a Growth Call",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 group-hover:translate-x-1 transition-transform" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur transition-colors", children: "Explore Capabilities" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(HeroInstrument, { variant })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-28 bg-background overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-coral/8 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " The real cost of getting this wrong"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: problem.headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: problem.body })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: problem.stakes.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              className: "flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/60 backdrop-blur",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-coral/10 border border-coral/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-coral" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground pt-0.5", children: s })
              ]
            },
            s
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 sm:py-20 surface-band overflow-hidden border-y", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8", children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl lg:text-6xl font-black text-coral font-display leading-none", children: m.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-0.5 w-10 bg-coral-grad rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-muted-foreground font-medium", children: m.label })
            ]
          },
          m.label
        )) }) })
      ] }),
      subs.length > 0 && variant === "software" && /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilityConsole, { subs }),
      subs.length > 0 && variant !== "software" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-24 sm:py-32 bg-section-grad overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 -right-32 w-[30rem] h-[30rem] bg-coral/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Everything under one roof"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
              "One senior team. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Every capability you need." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "Stop stitching together freelancers and agencies. Every service below runs on the same roadmap, same standards, same accountability." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr", children: subs.map((s, i) => {
            const featured = i === 0;
            const sparkPaths = [
              "M0 24 L20 20 L40 22 L60 12 L80 15 L100 6",
              "M0 18 L20 22 L40 14 L60 16 L80 8 L100 10",
              "M0 26 L20 18 L40 20 L60 10 L80 14 L100 4"
            ];
            const tags = (tools ?? []).slice(i * 2, i * 2 + 3).map((t) => t.name).filter(Boolean);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-40px" },
                transition: { delay: i % 4 * 0.06 },
                whileHover: { y: -6 },
                className: `group relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all overflow-hidden ${featured ? "sm:col-span-2 lg:row-span-2 bg-gradient-to-br from-card/80 to-coral/5" : ""}`,
                children: (() => {
                  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-40 h-40 bg-coral/0 group-hover:bg-coral/20 rounded-full blur-3xl transition-all duration-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,0%),color-mix(in_oklab,var(--coral)_15%,transparent),transparent_50%)]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col p-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform ${featured ? "h-14 w-14" : "h-12 w-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: featured ? "h-6 w-6 text-white" : "h-5 w-5 text-white" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 30", className: "w-20 h-8 opacity-70 group-hover:opacity-100 transition-opacity", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: sparkPaths[i % sparkPaths.length], fill: "none", stroke: "var(--coral)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `mt-4 font-bold text-foreground ${featured ? "text-2xl" : "text-lg"}`, children: s.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
                      featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-background/60 p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: visualCopy[variant].label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-coral animate-pulse" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-4 gap-2", children: visualCopy[variant].items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-coral/25 bg-coral/10 px-2 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-coral", children: it }, it)) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full w-1/3 rounded-full bg-coral", animate: { x: ["-120%", "220%"] }, transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" } }) })
                      ] }),
                      tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-4 flex flex-wrap gap-1.5", children: tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2 py-1 rounded-full bg-foreground/5 border border-border text-foreground/70", children: t }, t)) }),
                      s.href && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-coral", children: [
                        "Explore ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
                      ] })
                    ] })
                  ] });
                  return s.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: s.href, className: "block h-full", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block h-full", children: inner });
                })()
              },
              s.title
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " Our stack"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "Tools we ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "work with." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Best in class, battle tested. Chosen to fit your team and your roadmap, never the other way around." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: tools.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.85 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.03 },
            whileHover: { y: -4, scale: 1.05 },
            className: "px-5 py-2.5 rounded-full bg-card/70 backdrop-blur border border-border text-foreground font-semibold text-sm hover:border-coral/60 hover:text-coral hover:shadow-glow transition-all cursor-default",
            children: t.name
          },
          t.name
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 bg-section-grad overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " How we ship"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
              "Five steps. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Zero surprises." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid md:grid-cols-2 lg:grid-cols-5 gap-5", children: service.process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "relative rounded-3xl p-6 bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 h-11 w-11 rounded-2xl bg-coral-grad flex items-center justify-center text-white text-sm font-bold shadow-glow", children: p.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-2 mt-2 pr-8", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: p.desc })
              ]
            },
            p.step
          )) })
        ] })
      ] }),
      props.extraSection,
      service.caseSpotlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 bg-background overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Proof in the wild"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance", children: [
              "Real client. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Real numbers." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-100px" },
              transition: { duration: 0.7 },
              className: "relative rounded-[2.5rem] overflow-hidden border border-border bg-card/70 backdrop-blur-xl shadow-glow",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-coral/5 min-h-[380px] lg:min-h-[520px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: caseImages[variant],
                      alt: `${service.caseSpotlight.client} case study`,
                      width: 1280,
                      height: 960,
                      loading: "lazy",
                      className: "absolute inset-0 w-full h-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-2 bg-background/85 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-coral animate-pulse" }),
                    " Live case study"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 lg:p-12 flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-coral", children: "Client" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl lg:text-4xl font-black text-foreground", children: service.caseSpotlight.client }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed", children: service.caseSpotlight.story })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border", children: service.caseSpotlight.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl lg:text-4xl font-black text-coral font-display leading-none", children: m.k }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground font-medium leading-snug", children: m.v })
                  ] }, m.k)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "mt-8 group inline-flex items-center gap-2 text-coral font-semibold text-sm", children: [
                    "Get results like these ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                  ] })
                ] })
              ] })
            }
          )
        ] })
      ] }),
      service.deliverables && service.deliverables.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 bg-section-grad overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-coral/8 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " What lands on your drive"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
              "Every deliverable. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Nothing hidden." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "No vague scopes, no surprise line items. Every engagement ships with this exact list of assets, all yours, all documented." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "mt-8 inline-flex items-center gap-2 bg-coral-grad text-white px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform", children: [
              "Book a scoping call ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: service.deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.04 },
              className: "flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/70 backdrop-blur hover:border-coral/40 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-coral/10 border border-coral/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-coral" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground pt-0.5 leading-snug", children: d })
              ]
            },
            d
          )) })
        ] }) })
      ] }),
      service.guarantees && service.guarantees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 bg-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12 text-center mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " The risk lives with us"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "How we ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "de risk your bet." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: service.guarantees.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "relative rounded-3xl p-7 bg-card/70 backdrop-blur-xl border border-border hover:border-coral/40 hover:shadow-glow transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-coral-grad flex items-center justify-center shadow-glow mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: g.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: g.body })
            ]
          },
          g.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Work, { initialFilter: workFilter, lockFilter: true, discipline: workDiscipline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 bg-background overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14 text-center mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
              " Engagement models"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
              "Pick the model that fits ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "your ambition." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: pricing.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: `relative rounded-3xl p-8 border transition-all ${p.featured ? "bg-coral-grad text-white border-coral shadow-glow scale-[1.02]" : "bg-card/70 backdrop-blur-xl border-border hover:border-coral/40"}`,
              children: [
                p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-coral text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-soft border border-border", children: "Most popular" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-2xl font-bold ${p.featured ? "text-white" : "text-foreground"}`, children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-2 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`, children: p.blurb }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `h-4 w-4 shrink-0 mt-0.5 ${p.featured ? "text-white" : "text-coral"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: p.featured ? "text-white/95" : "text-foreground", children: f })
                ] }, f)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#contact",
                    className: `mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all ${p.featured ? "bg-background text-coral hover:scale-105" : "bg-foreground text-background hover:bg-coral hover:text-white"}`,
                    children: [
                      "Talk to us ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ]
            },
            p.name
          )) })
        ] })
      ] }),
      faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-section-grad", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-coral diamond" }),
            " Common questions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: [
            "Everything you want to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "know." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
          const open = openFaq === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden border border-border bg-card/70 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpenFaq(open ? null : i),
                className: "w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-card/40 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: f.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-coral" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 text-coral" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25, ease: "easeInOut" },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-muted-foreground leading-relaxed", children: f.a })
              }
            ) })
          ] }, f.q);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-section-grad noise", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: { y: [0, -18, 0], rotate: [45, 60, 45] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }, className: "absolute top-24 right-[6%] w-20 h-20 bg-coral-grad diamond rounded-2xl shadow-glow hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: { y: [0, 14, 0], rotate: [45, 30, 45] }, transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }, className: "absolute bottom-24 left-[6%] w-16 h-16 bg-card/70 backdrop-blur diamond rounded-xl border border-border hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 sm:pt-28 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-coral" })
            ] }),
            "Two spots open this month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tight text-balance text-foreground", children: [
            "Ready to build ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block text-coral", style: { textShadow: "0 0 40px color-mix(in oklab, var(--coral) 50%, transparent)" }, children: "something that ships?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto", children: "Tell us where you want to go. We reply within one business day with a clear next step and a written estimate." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:engage@origami99.com", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-border text-foreground hover:bg-card/70 backdrop-blur transition-colors", children: [
            "engage@origami99.com ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-foreground/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-coral" }),
              " NDA before we talk"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-coral" }),
              " Reply in one business day"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-coral" }),
              " 450 plus brands shipped"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-coral" }),
              " Senior team on your call"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PremiumServicePage as P
};
