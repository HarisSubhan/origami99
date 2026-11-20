import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { B as BrowserFrame, p as pcDashboard } from "./Work-B0INhCLK.mjs";
import { i as Sparkles, r as ChevronRight } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
function PhoneFrame({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `relative rounded-[2.2rem] p-2 bg-neutral-900 border border-white/10 shadow-2xl ${className}`,
      style: { boxShadow: "0 30px 60px -18px rgba(0,0,0,0.7)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[1.7rem] overflow-hidden bg-black", style: { aspectRatio: "9 / 19" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-black z-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children })
      ] })
    }
  );
}
function MiniWindow({ title, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative rounded-lg overflow-hidden bg-[#0b0f1a] border border-white/10 shadow-2xl ${className}`,
      style: { boxShadow: "0 20px 50px -15px rgba(0,0,0,0.65)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1.5 bg-[#0d1220] border-b border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#ff5f57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#febc2e]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#28c840]" }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] font-mono text-white/50 truncate", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children })
      ]
    }
  );
}
function SparkLine({ points, color = "#38bdf8", fill = true, className = "" }) {
  const w = 120, h = 40;
  const max = Math.max(...points), min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p - min) / range * h}`).join(" ");
  const fillD = `${d} L ${w} ${h} L 0 ${h} Z`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${w} ${h}`, className, preserveAspectRatio: "none", children: [
    fill && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: fillD, fill: color, opacity: "0.18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d, fill: "none", stroke: color, strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function BarRow({ values, color = "#38bdf8", className = "" }) {
  const max = Math.max(...values);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-end gap-1 h-full ${className}`, children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t", style: { height: `${v / max * 100}%`, background: color, opacity: 0.55 + i / values.length * 0.45 } }, i)) });
}
function Donut({ value, color = "#38bdf8", label, size = 64 }) {
  const r = 26, c = 2 * Math.PI * r;
  const off = c - value / 100 * c;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center justify-center", style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 64 64", className: "w-full h-full -rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r, stroke: "rgba(255,255,255,0.08)", strokeWidth: "6", fill: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r, stroke: color, strokeWidth: "6", fill: "none", strokeDasharray: c, strokeDashoffset: off, strokeLinecap: "round" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white", children: label ?? `${value}%` })
  ] });
}
function Avatar({ name, className = "" }) {
  const init = name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `inline-flex items-center justify-center rounded-full text-[10px] font-semibold text-white ${className}`,
      style: { background: `hsl(${hue} 55% 45%)` },
      children: init
    }
  );
}
function Chip({ children, color = "rgba(255,255,255,0.08)", text = "rgba(255,255,255,0.85)" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium", style: { background: color, color: text }, children });
}
function Row({ label, value, sub, dot }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1.5 border-b border-white/5 last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
      dot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full flex-shrink-0", style: { background: dot } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/80 truncate", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-white", children: value }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: sub })
    ] })
  ] });
}
function StatCard({ label, value, delta, accent = "#38bdf8" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-white/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-lg font-bold text-white leading-tight", children: value }),
    delta && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium", style: { color: accent }, children: delta })
  ] });
}
function LabeledBar({ label, value, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 text-[9px] text-white/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${value}%`, background: color } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-8 text-right text-[9px] text-white/70", children: [
      value,
      "%"
    ] })
  ] });
}
const brand$5 = {
  name: "PulsePOS",
  short: "AI Retail OS",
  tag: "AI-native point of sale for modern retail",
  accent: "#7cf1ff",
  gradient: "from-[#0b1024] via-[#141a3a] to-[#080a1a]",
  modules: ["Sales", "Inventory", "AI Copilot", "Staff", "Multi-store", "Loyalty"],
  proof: [
    { label: "200+ storefronts" },
    { label: "12 countries" },
    { label: "AI-suggested upsells +18%" },
    { label: "99.98% uptime" }
  ]
};
function Desktop$5() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$5.gradient} text-white flex text-[11px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 border-r border-white/5 p-3 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md flex items-center justify-center text-black font-bold text-[10px]", style: { background: `linear-gradient(135deg, ${brand$5.accent}, #6a5cff)` }, children: "P" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[11px]", children: "PulsePOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "AI Retail OS" })
        ] })
      ] }),
      ["Dashboard", "Sales", "Products", "Inventory", "AI Copilot", "Customers", "Staff", "Stores", "Loyalty", "Reports"].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-2 py-1.5 rounded-md ${i === 0 ? "bg-white/10 text-white" : "text-white/50"}`, children: m }, m))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4 space-y-3 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40", children: "Today · All stores" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold", children: "Retail command center" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$5.accent}22`, text: brand$5.accent, children: "● Live sync" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1 rounded-md bg-white/5 text-[10px]", children: "Nov 12 · Tue" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Revenue", value: "$128.4k", delta: "+22% vs LW", accent: brand$5.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Transactions", value: "1,284", delta: "+11%", accent: brand$5.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg basket", value: "$99.70", delta: "+3.4%", accent: brand$5.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "AI upsells", value: "$18.2k", delta: "+18% MoM", accent: brand$5.accent })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 h-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Channel mix, last 7 days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px]", style: { color: brand$5.accent }, children: "$1.62M" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LabeledBar, { label: "In-store", value: 68, color: brand$5.accent }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LabeledBar, { label: "Online", value: 44, color: "#6a5cff" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LabeledBar, { label: "Kiosk", value: 22, color: "#ffffff40" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "By category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 64, color: brand$5.accent, label: "64%", size: 54 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[9px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: brand$5.accent } }),
                " Apparel 64%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#6a5cff]" }),
                " Beauty 22%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white/25" }),
                " Home 14%"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border p-2 flex items-center gap-3", style: { borderColor: `${brand$5.accent}55`, background: `linear-gradient(90deg, ${brand$5.accent}18, transparent)` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md flex items-center justify-center text-black font-bold text-[10px] shrink-0", style: { background: brand$5.accent }, children: "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/50", children: "Copilot insight · 12:04" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] truncate", children: "Basket size is 12% below Tuesday baseline, bundle SKU-2201 + SKU-7710 to recover $2.1k/day." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1 rounded text-[10px] font-semibold text-black", style: { background: brand$5.accent }, children: "Apply" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "Store leaderboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Downtown Flagship", value: "$42.1k", dot: brand$5.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Marina Walk", value: "$31.8k", dot: brand$5.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "City Centre", value: "$24.6k", dot: "#6a5cff" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Airport T3", value: "$18.9k", dot: "#ffffff40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "Sales, 14d" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: [12, 18, 15, 22, 20, 28, 26, 34, 30, 38, 42, 39, 48, 52], color: brand$5.accent, className: "w-full h-14" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Peak Sat 6pm · +32%" })
        ] })
      ] })
    ] })
  ] });
}
function Secondary$5() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-b from-[#0b1024] to-black text-white flex flex-col text-[10px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 px-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "9:41" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "●●●" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Cart · 4 items" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", style: { color: brand$5.accent }, children: "$986.00" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 mx-3 rounded-lg border border-white/10 divide-y divide-white/5 bg-white/[0.03]", children: [
      ["Wool blazer", "$420"],
      ["Silk scarf", "$180"],
      ["Leather belt", "$240"],
      ["Fragrance", "$146"]
    ].map(([n, p]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70", children: p })
    ] }, n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mt-2 rounded-lg border p-2", style: { borderColor: `${brand$5.accent}55`, background: `${brand$5.accent}10` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px]", style: { color: brand$5.accent }, children: "AI Copilot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px]", children: "Add matching tie ($60)? +5% AOV likelihood." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto mx-3 mb-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg py-2 font-semibold text-black", style: { background: brand$5.accent }, children: "Tap to pay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg py-2 font-medium bg-white/5 border border-white/10", children: "Send receipt" })
    ] })
  ] });
}
const A$3 = brand$5.accent;
function AICopilot() {
  const suggestions = [
    { title: "Bundle SKU-2201 + SKU-7710", lift: "+$2.1k/day", conf: 92 },
    { title: "Discount slow-mover FR-018 by 15%", lift: "+$860/day", conf: 84 },
    { title: "Move blazers to till-3 endcap", lift: "+11% AOV", conf: 78 },
    { title: "Push loyalty tier upsell", lift: "+$540/day", conf: 71 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$5.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "AI Copilot · retail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Live suggestions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$3}22`, text: A$3, children: "● streaming" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1.5 flex-1 overflow-hidden", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border p-1.5", style: { borderColor: `${A$3}33`, background: `${A$3}10` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px]", style: { color: A$3 }, children: s.lift })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${s.conf}%`, background: A$3 } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex items-center justify-between text-[8px] text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "confidence ",
          s.conf,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "apply →" })
      ] })
    ] }, s.title)) })
  ] });
}
function FloorHeatmap() {
  const tills = Array.from({ length: 6 * 10 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$5.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Store · Downtown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Floor heatmap · by till" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$3}22`, text: A$3, children: "● 3pm–7pm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-10 gap-[3px] flex-1", children: tills.map((_, i) => {
      const heat = (Math.sin(i * 0.9) + Math.cos(i * 0.4) + 2) / 4;
      const col = heat > 0.7 ? A$3 : heat > 0.5 ? "#6a5cff" : heat > 0.3 ? "#22303a" : "#151a1f";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm", style: { background: col, opacity: 0.35 + heat * 0.65 } }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Peak till", value: "T-04", delta: "128 baskets/hr", accent: A$3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Dwell time", value: "4m 12s", delta: "−18s vs LW", accent: A$3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Queue alerts", value: "2", delta: "auto-dispatched", accent: "#fb923c" })
    ] })
  ] });
}
function LoyaltyConsole() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$5.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Loyalty · wallet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Member cohort · Nov" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$3}22`, text: A$3, children: "84.2k members" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 62, color: A$3, label: "62%", size: 56 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50 mt-1", children: "Repeat purchase" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: "Tier mix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-1", children: [["Silver", 48, "#a3a3a3"], ["Gold", 32, "#f59e0b"], ["Platinum", 14, A$3], ["Black", 6, "#ffffff"]].map(([n, v, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 text-[9px] text-white/60", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${v}%`, background: c } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-7 text-right text-[9px]", children: [
            v,
            "%"
          ] })
        ] }, n)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60 mb-1", children: "Top spenders · 30d" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Layla Al Marri · Platinum", value: "$4,820", dot: A$3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "R. Chen · Gold", value: "$2,140", dot: "#f59e0b" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "A. Patel · Gold", value: "$1,880", dot: "#f59e0b" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "M. Ibrahim · Silver", value: "$1,220", dot: "#a3a3a3" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: "Points redeemed · 14d" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: [8, 10, 14, 12, 18, 22, 20, 26, 30, 28, 34, 38, 36, 44], color: A$3, className: "w-full h-8" })
    ] })
  ] });
}
const brand$4 = {
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
    { label: "SOC2 aligned" }
  ]
};
function Desktop$4() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$4.gradient} text-white flex text-[11px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 border-r border-white/5 p-3 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md", style: { background: `linear-gradient(135deg, ${brand$4.accent}, #1e40af)` } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[11px]", children: "Nexus ERP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Retail edition" })
        ] })
      ] }),
      ["Overview", "Orders", "Products", "Inventory", "Purchase", "Returns", "Suppliers", "Channels", "Forecast", "Finance"].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-2 py-1.5 rounded-md ${i === 1 ? "bg-white/10 text-white" : "text-white/50"}`, children: m }, m))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4 space-y-3 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40", children: "Orders / Open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold", children: "Fulfillment queue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#3b82f622", text: brand$4.accent, children: "Shopify" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#f9731622", text: "#fb923c", children: "Amazon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#ec489922", text: "#f472b6", children: "TikTok" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "+ 3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Open orders", value: "1,842", delta: "212 SLA at risk", accent: "#f97316" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Picking", value: "418", delta: "14 pickers online", accent: brand$4.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Awaiting stock", value: "63", delta: "ETA 2 days", accent: "#a3a3a3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Returns today", value: "27", delta: "RTO 1.9%", accent: brand$4.accent })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] gap-2 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/40 bg-white/[0.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Channel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Warehouse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Status" })
        ] }),
        [
          ["#EC-72841", "Layla Al Marri", "Shopify", "DXB-01", "AED 842", "Picking", brand$4.accent],
          ["#EC-72840", "R. Chen", "Amazon", "DXB-02", "AED 1,204", "Packed", "#22c55e"],
          ["#EC-72839", "N. Farooq", "TikTok", "KHI-01", "PKR 8,900", "Label", brand$4.accent],
          ["#EC-72838", "Aisha K.", "Website", "DXB-01", "AED 380", "Hold", "#f97316"],
          ["#EC-72837", "M. Ibrahim", "eBay", "RUH-01", "SAR 610", "Shipped", "#22c55e"],
          ["#EC-72836", "J. Park", "Shopify", "DXB-01", "AED 2,100", "Picking", brand$4.accent]
        ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] gap-2 px-3 py-1.5 border-t border-white/5 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-white/80", children: r[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: r[1], className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: r[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60", children: r[2] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60", children: r[3] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80", children: r[4] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${r[6]}22`, text: r[6], children: r[5] }) })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "GMV · 30d" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: [8, 10, 12, 11, 15, 18, 14, 20, 22, 19, 26, 28, 24, 30, 32, 29, 35, 38, 34, 42, 44, 40, 48, 52, 49, 58, 62, 60, 68, 72], color: brand$4.accent, className: "w-full h-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] mt-0.5", style: { color: brand$4.accent }, children: "AED 4.28M · +18%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Channels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarRow, { values: [42, 28, 18, 12, 8, 4], color: brand$4.accent }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 mt-0.5", children: "Shopify · Amazon · TikTok · Web · eBay · Meta" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Forecast accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "91.4%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "7-day MAPE · ML model v3.2" })
        ] })
      ] })
    ] })
  ] });
}
function Secondary$4() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-[#0b1220] text-white p-3 text-[10px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-2 font-semibold", children: "Fulfillment board" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 h-[calc(100%-1.5rem)]", children: [
      ["New", 42, "#a3a3a3"],
      ["Picking", 18, brand$4.accent],
      ["Packed", 12, "#22c55e"],
      ["Shipped", 96, "#8b5cf6"]
    ].map(([n, c, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-1.5 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${col}22`, text: col, children: c })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-white/[0.04] border border-white/5 p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] font-mono text-white/60", children: [
          "#EC-",
          72800 + i * 3
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] truncate", children: [
          "AED ",
          200 + i * 87,
          ".00"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 rounded mt-1", style: { background: col, width: `${30 + i * 15}%` } })
      ] }, i)) })
    ] }, n)) })
  ] });
}
const A$2 = brand$4.accent;
function ChannelQueue() {
  const rows = [
    ["#EC-72901", "Shopify", "L. Al Marri", "AED 842", "Picking", A$2],
    ["#EC-72900", "Amazon", "R. Chen", "AED 1,204", "Label", "#fb923c"],
    ["#EC-72899", "TikTok", "N. Farooq", "PKR 8,900", "Packed", "#22c55e"],
    ["#EC-72898", "Website", "Aisha K.", "AED 380", "Hold", "#f97316"],
    ["#EC-72897", "eBay", "M. Ibrahim", "SAR 610", "Shipped", "#22c55e"],
    ["#EC-72896", "Meta Shop", "J. Park", "AED 2,100", "Picking", A$2]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$4.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Multichannel · unified" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Order queue · live" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$2}22`, text: A$2, children: "Shopify" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#fb923c22", text: "#fb923c", children: "Amazon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#f472b622", text: "#f472b6", children: "TikTok" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "+3" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 overflow-hidden flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_0.8fr_1fr_0.8fr_0.7fr] gap-2 px-2 py-1 text-[8px] uppercase tracking-wider text-white/40 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Channel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Status" })
      ] }),
      rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_0.8fr_1fr_0.8fr_0.7fr] gap-2 px-2 py-1 border-t border-white/5 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-white/80 text-[9px]", children: r[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-[9px]", children: r[1] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: r[2], className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[9px]", children: r[2] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-[9px]", children: r[3] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${r[5]}22`, text: r[5], children: r[4] }) })
      ] }, i))
    ] })
  ] });
}
function PickAssignment() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$4.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Warehouse · DXB-01" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Pick assignment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$2}22`, text: A$2, children: "14 pickers online" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Open picks", value: "418", delta: "212 priority", accent: A$2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg pick time", value: "1m 42s", delta: "−12s vs LW", accent: A$2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Zones active", value: "8 / 12", delta: "A,B,C,D,E,F,G,H", accent: "#a3a3a3" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60 mb-1", children: "Assigned pickers" }),
      [
        ["Omar M.", "Zone A · 42 picks", 92, A$2],
        ["Priya S.", "Zone C · 38 picks", 88, A$2],
        ["Ali R.", "Zone B · 34 picks", 81, "#f59e0b"],
        ["Sara K.", "Zone F · 28 picks", 74, "#f59e0b"],
        ["Hassan T.", "Zone H · 22 picks", 66, "#fb923c"]
      ].map(([n, sub, v, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-1 border-b border-white/5 last:border-b-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: n, className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-white/40", children: sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${v}%`, background: c } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] w-7 text-right", style: { color: c }, children: [
          v,
          "%"
        ] })
      ] }, n))
    ] })
  ] });
}
function PurchaseSuppliers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$4.gradient} text-white p-3 text-[10px] flex flex-col`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Purchase · Q4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Supplier scorecards" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$2}22`, text: A$2, children: "26 open POs" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: [
      ["Meridian Textiles", "AED 428k", "OTD 96%", "A", A$2],
      ["Silk Route Co", "AED 312k", "OTD 91%", "A", A$2],
      ["Atlas Fragrance", "AED 218k", "OTD 87%", "B", "#f59e0b"],
      ["Urban Leather", "AED 194k", "OTD 82%", "B", "#f59e0b"],
      ["Vega Accessories", "AED 88k", "OTD 74%", "C", "#fb923c"]
    ].map(([name, vol, otd, grade, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.4fr_0.9fr_0.8fr_0.4fr] gap-1 items-center py-1 border-b border-white/5 last:border-b-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/70", children: vol }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px]", style: { color: col }, children: otd }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-right", style: { color: col }, children: grade })
    ] }, name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: "PO spend · 30d" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: [24, 28, 32, 30, 38, 42, 40, 48, 52, 50, 58, 64, 60, 70], color: A$2, className: "w-full h-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] mt-0.5", style: { color: A$2 }, children: "AED 1.24M committed" })
    ] })
  ] });
}
const brand$3 = {
  name: "Vital OS Clinical Console",
  short: "Health",
  tag: "AI assisted clinical workflow at hospital scale",
  accent: "#14b8a6",
  gradient: "from-[#0a1917] via-[#0d1f1c] to-[#071411]",
  modules: ["Patients", "Vitals", "AI Triage", "Scheduling", "Labs", "Imaging", "Meds"],
  proof: [
    { label: "34 hospitals · 210 clinics" },
    { label: "HIPAA · GDPR · SOC2" },
    { label: "AI triage recall 96%" },
    { label: "8 minutes saved per visit" }
  ]
};
const patients = [
  ["Amanda Reyes", "MRN 88214", "Follow up", brand$3.accent],
  ["James O'Connor", "MRN 88215", "New intake", "#f97316"],
  ["Michael Tanaka", "MRN 88216", "Post op", brand$3.accent],
  ["Rachel Goldberg", "MRN 88217", "Consult", brand$3.accent],
  ["Sarah Whitmore", "MRN 88218", "AI flag", "#e74c3c"],
  ["David Chen", "MRN 88219", "Follow up", brand$3.accent],
  ["Kimberly Osei", "MRN 88220", "Consult", brand$3.accent]
];
function Desktop$3() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$3.gradient} text-white flex flex-col text-[11px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-black/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-md flex items-center justify-center text-black font-bold text-[10px]", style: { background: brand$3.accent }, children: "V" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[11px]", children: "Vital OS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-white/40", children: "St. Mercy General · West Wing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 flex-1 max-w-md rounded bg-white/5 px-2 py-1 text-[10px] text-white/50", children: "Search patient, MRN, order, note · ⌘K" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$3.accent}22`, text: brand$3.accent, children: "● AI Copilot on" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: "Ash M", className: "h-5 w-5 border border-black" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: "Rob K", className: "h-5 w-5 border border-black" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: "Lee T", className: "h-5 w-5 border border-black" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-white/40", children: "on call" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44 border-r border-white/5 p-2 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-white/40 px-1 mb-1.5", children: "Today · 24 patients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5 overflow-hidden", children: patients.map(([n, mrn, tag, col], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 px-1.5 py-1.5 rounded ${i === 4 ? "bg-white/10 ring-1 ring-white/10" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: n, className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium truncate", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] text-white/40 truncate", children: [
              mrn,
              " · ",
              tag
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full flex-shrink-0", style: { background: col } })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 space-y-2 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: "Sarah Whitmore", className: "h-8 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Sarah J. Whitmore · 42F" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "MRN 88218 · Type 2 Diabetes · Hypertension stage 2" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#e74c3c22", text: "#e74c3c", children: "● AI flag · rising A1c" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$3.accent}22`, text: brand$3.accent, children: "Fasting" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 border-b border-white/5 text-[10px]", children: ["Overview", "Vitals", "Meds", "Labs", "Imaging", "Notes"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pb-1 ${i === 0 ? "border-b border-white text-white" : "text-white/50"}`, children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "HR", value: "82 bpm", delta: "normal", accent: brand$3.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "BP", value: "146/94", delta: "stage 2", accent: "#e74c3c" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "SpO₂", value: "98%", delta: "normal", accent: brand$3.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "HbA1c", value: "7.8%", delta: "↑ from 7.2", accent: "#f97316" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "6 month trend · Vitals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40", children: "Systolic · HbA1c · Weight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
            [[140, 142, 138, 144, 146, 148], "#e74c3c", "Systolic mmHg"],
            [[7.2, 7.3, 7.4, 7.5, 7.7, 7.8], "#f97316", "HbA1c %"],
            [[72, 71, 73, 72, 74, 75], brand$3.accent, "Weight kg"]
          ].map(([pts, col, l], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: pts, color: col, className: "w-full h-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50 mt-0.5", children: l })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "Clinical timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Lipid panel · results in", value: "today", dot: brand$3.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Metformin 1000mg · refill", value: "3 days", dot: "#f97316" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Retinal screening · booked", value: "Nov 21", dot: brand$3.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Nephrology referral · sent", value: "Nov 14", dot: "#a3a3a3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-52 border-l border-white/5 p-2 flex flex-col gap-2 bg-black/25", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 rounded", style: { background: brand$3.accent } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold", children: "AI Copilot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$3.accent}22`, text: brand$3.accent, children: "v4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white/[0.04] border border-white/10 p-2 text-[10px] leading-snug text-white/85", children: [
          "Rising HbA1c (+0.6 in 6mo) with stage 2 hypertension. Recommended plan:",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1.5 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: brand$3.accent }, children: "●" }),
              " Titrate metformin to 2g"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: brand$3.accent }, children: "●" }),
              " Add SGLT2 inhibitor (empagliflozin 10mg)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: brand$3.accent }, children: "●" }),
              " ACE inhibitor review · lisinopril 10mg"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 mt-2", children: "Evidence · 4 guidelines, 2 prior visits" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[9px] text-white/50 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "94%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: "94%", background: brand$3.accent } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-auto rounded-md py-1.5 text-[10px] font-semibold text-black", style: { background: brand$3.accent }, children: "Accept plan · sign & queue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md py-1.5 text-[10px] bg-white/5 border border-white/10", children: "Ask copilot…" })
      ] })
    ] })
  ] });
}
function Secondary$3() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-white text-neutral-900 flex flex-col text-[10px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 px-3 pb-2", style: { background: `linear-gradient(180deg, ${brand$3.accent}, ${brand$3.accent}dd)` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-[9px]", children: "Good morning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-base font-semibold", children: "Sarah" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-lg bg-white/15 backdrop-blur px-2 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-[9px]", children: "Next appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-[11px] font-semibold", children: "Dr. Ahmed · Nov 21, 10:30 AM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold text-neutral-500 uppercase", children: "Today's plan" }),
      [
        ["Metformin 1000mg", "After breakfast", "✓"],
        ["Log blood sugar", "Before dinner", ""],
        ["30 min walk", "Any time", ""]
      ].map(([t, s, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-neutral-200 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-5 w-5 rounded-full border flex items-center justify-center text-[9px]",
            style: { borderColor: d ? brand$3.accent : "#d4d4d8", background: d ? brand$3.accent : "transparent", color: d ? "white" : "" },
            children: d
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-neutral-500", children: s })
        ] })
      ] }, t)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg p-2 text-white text-[10px]", style: { background: brand$3.accent }, children: "💬 Ask AI copilot about your medication" })
    ] })
  ] });
}
function TriageQueue() {
  const rows = [
    ["Marcus Bell", "62M · chest pain", "ER 3", 92, "#e74c3c"],
    ["Nina Patel", "34F · anaphylaxis", "ER 1", 88, "#e74c3c"],
    ["Kevin Sullivan", "48M · stroke suspect", "ER 2", 86, "#e74c3c"],
    ["Ava Thompson", "27F · appendicitis", "Bay 5", 71, "#f97316"],
    ["Ricardo Alvarez", "55M · syncope", "Bay 2", 64, "#f97316"],
    ["Hannah Weiss", "39F · migraine", "Bay 7", 32, brand$3.accent]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$3.gradient} text-white p-3 text-[10px] flex flex-col gap-2`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold", children: "AI Triage · Live queue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Emergency department · updated 2s ago" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 92, color: "#e74c3c", label: "Critical", size: 44 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 64, color: "#f97316", label: "Urgent", size: 44 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Donut, { value: 32, color: brand$3.accent, label: "Standard", size: 44 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-white/5 bg-white/[0.02] flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1 border-b border-white/5 text-[8px] uppercase tracking-wider text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Bed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Risk" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "ETA" })
      ] }),
      rows.map(([n, note, bed, risk, col], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center px-2 py-1.5 border-b border-white/5 ${i < 2 ? "bg-red-500/5" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: n, className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium truncate", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-white/40 truncate", children: note })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold", children: bed }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: col } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold", style: { color: col }, children: risk })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-white/60", children: [
          i * 2 + 1,
          "m"
        ] })
      ] }, n))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg wait", value: "7m", delta: "↓ 3m today", accent: brand$3.accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Beds free", value: "12", delta: "of 48", accent: brand$3.accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "AI escalations", value: "4", delta: "last hour", accent: "#f97316" })
    ] })
  ] });
}
function LabResults() {
  const labs = [
    ["Hemoglobin", "13.4", "g/dL", "normal", 70],
    ["WBC", "11.8", "10³/µL", "high", 88],
    ["Platelets", "245", "10³/µL", "normal", 60],
    ["Glucose", "168", "mg/dL", "high", 82],
    ["HbA1c", "7.8", "%", "elevated", 78],
    ["LDL", "148", "mg/dL", "high", 80],
    ["HDL", "38", "mg/dL", "low", 30],
    ["Creatinine", "1.1", "mg/dL", "normal", 50]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$3.gradient} text-white p-3 text-[10px] flex flex-col gap-2`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold", children: "Lab Results · Whitmore, S." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Collected Nov 14 · Reviewed by Dr. Ahmed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: "#f9731622", text: "#f97316", children: "3 out of range" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5 flex-1 overflow-hidden", children: labs.map(([n, v, u, flag, fill]) => {
      const col = flag === "normal" ? brand$3.accent : flag === "low" ? "#38bdf8" : flag === "high" ? "#f97316" : "#e74c3c";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-white/5 bg-white/[0.02] p-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-white/60", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px]", style: { color: col }, children: flag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] font-bold", children: [
          v,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-normal text-white/40", children: u })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", style: { width: `${fill}%`, background: col } }) })
      ] }, n);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-white/10 p-2", style: { background: `${brand$3.accent}0f` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold", style: { color: brand$3.accent }, children: "AI summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/80 mt-0.5", children: "Metabolic panel suggests worsening glycemic control and dyslipidemia. Consider statin initiation." })
    ] })
  ] });
}
function Imaging() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$3.gradient} text-white p-3 text-[10px] flex flex-col gap-2`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold", children: "Imaging Viewer · Chest X-ray PA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Study 22841 · Nov 15, 09:12 · Radiology AI v3.2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$3.accent}22`, text: brand$3.accent, children: "AI reviewed · 2 findings" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-[1.4fr_1fr] gap-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative rounded-md overflow-hidden border border-white/10",
          style: { background: "radial-gradient(ellipse at 50% 45%, #2a3a4a 0%, #0a1015 70%)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "absolute inset-0 w-full h-full opacity-40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "110", rx: "70", ry: "80", fill: "none", stroke: "white", strokeWidth: "0.5" }),
              [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M40 ${60 + i * 15} Q100 ${45 + i * 15} 160 ${60 + i * 15}`, fill: "none", stroke: "white", strokeWidth: "0.4", opacity: 0.6 }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "30", x2: "100", y2: "180", stroke: "white", strokeWidth: "0.6", opacity: "0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute", style: { left: "22%", top: "38%", width: "18%", height: "14%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full border-2 rounded", style: { borderColor: "#e74c3c" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-0 text-[8px] font-bold", style: { color: "#e74c3c" }, children: "Opacity · 89%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute", style: { left: "60%", top: "55%", width: "14%", height: "12%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full border-2 rounded", style: { borderColor: "#f97316" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-0 text-[8px] font-bold", style: { color: "#f97316" }, children: "Nodule · 62%" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-white/5 bg-white/[0.02] p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-white/40 tracking-wider", children: "Findings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full mt-1 flex-shrink-0", style: { background: "#e74c3c" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold", children: "Left upper opacity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "Suggests consolidation · confidence 89%" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full mt-1 flex-shrink-0", style: { background: "#f97316" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold", children: "Right lower nodule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "4mm · recommend CT · confidence 62%" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-white/5 bg-white/[0.02] p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-white/40 tracking-wider", children: "Compare" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 grid grid-cols-2 gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BarRow, { values: [3, 5, 7, 4, 6, 8, 9], color: brand$3.accent, className: "h-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BarRow, { values: [2, 4, 3, 5, 6, 4, 7], color: "#f97316", className: "h-8" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-white/40 mt-1", children: "Vs. 90 day baseline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-auto rounded-md py-1.5 text-[10px] font-semibold text-black", style: { background: brand$3.accent }, children: "Sign radiology report" })
      ] })
    ] })
  ] });
}
const url = "/__l5e/assets-v1/f664c1e8-fda9-4b45-b074-6c6b0a33b19a/powercabs-live-map.jpg";
const pcLiveMap = {
  url
};
const pcLiveOrders = "/assets/powercabs-live-orders-CXrLeUBZ.jpg";
const pcMobileApp = "/assets/powercabs-mobile-app-jV-8su1H.jpg";
const brand$2 = {
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
    { label: "−22% fuel spend YoY" }
  ]
};
function Desktop$2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full bg-[#05070f] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: pcLiveMap.url,
        alt: "DispatchIQ live map",
        className: "absolute inset-0 h-full w-full object-cover",
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 right-2 flex flex-wrap items-center gap-1.5 text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 font-semibold text-black", style: { background: brand$2.accent }, children: "● LIVE DISPATCH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 bg-black/60 border border-white/10", children: "218 drivers online" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 bg-black/60 border border-white/10", children: "42 active rides" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 bg-black/60 border border-white/10", children: "97.4% on-time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 bg-black/60 border border-white/10", style: { color: brand$2.accent }, children: "Rev $24.1k today" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-10 left-3 w-[36%] rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#0c1120]/90 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1 border-b border-white/10 text-[9px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Live orders queue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: brand$2.accent }, children: "● 42" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pcLiveOrders, alt: "Live orders queue", className: "w-full h-auto block", loading: "lazy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-3 w-[42%] rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#0c1120]/90 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1 border-b border-white/10 text-[9px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Operations overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "last 24h" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pcDashboard, alt: "Operations overview", className: "w-full h-auto block", loading: "lazy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 rounded-md bg-black/70 backdrop-blur border border-white/15 p-2 text-[9px] max-w-[38%]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50", children: "Selected · TRK-4419" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[10px]", children: "Downtown → Airport · SLA 2h 14m" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: brand$2.accent } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Driver Omar M. · 4.9★ · 6h on-shift" })
      ] })
    ] })
  ] });
}
function Secondary$2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full w-full bg-black overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: pcMobileApp,
      alt: "Driver mobile app",
      className: "absolute inset-0 h-full w-full object-cover object-top",
      loading: "lazy"
    }
  ) });
}
const brand$1 = {
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
    { label: "3PL adapters ready" }
  ]
};
function BinMap() {
  const cells = Array.from({ length: 8 * 14 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-14 gap-[2px]", style: { gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }, children: cells.map((_, i) => {
    const heat = (Math.sin(i * 0.7) + 1) / 2;
    const col = heat > 0.75 ? brand$1.accent : heat > 0.5 ? "#4d7c0f" : heat > 0.25 ? "#22303a" : "#151a1f";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-[2px]", style: { background: col, opacity: 0.4 + heat * 0.6 } }, i);
  }) });
}
function Desktop$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand$1.gradient} text-white flex text-[11px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 border-r border-white/5 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md flex items-center justify-center text-black font-bold text-[10px]", style: { background: brand$1.accent }, children: "▤" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[11px]", children: "Grid WMS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Warehouse OS" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: ["Overview", "Bin map", "Pick & pack", "Receiving", "Cycle count", "Returns", "Scanner", "Reports"].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-2 py-1.5 rounded-md text-[10px] ${i === 1 ? "bg-white/10 text-white" : "text-white/50"}`, children: m }, m)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 overflow-hidden space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40", children: "DXB-01 · Al Quoz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold", children: "Bin heat-map · zone A–H" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand$1.accent}22`, text: brand$1.accent, children: "● Live" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Aisles 8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Bins 1,120" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pick accuracy", value: "99.7%", delta: "target 99.5%", accent: brand$1.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Scan-to-ship", value: "2m 40s", delta: "−18s vs LW", accent: brand$1.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Open picks", value: "418", delta: "14 pickers", accent: brand$1.accent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Receiving", value: "26 PO", delta: "ETA today", accent: "#a3a3a3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BinMap, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1.5 text-[9px] text-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-sm", style: { background: brand$1.accent } }),
              " Hot"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-sm bg-[#4d7c0f]" }),
              " Warm"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-sm bg-[#22303a]" }),
              " Cold"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Click bin to inspect" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 h-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "Pick queue · high priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "P-2201 · Blazer M · A-04-12", value: "ready", dot: brand$1.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "P-2202 · Scarf · C-07-03", value: "picking", dot: brand$1.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "P-2203 · Belt L · B-01-19", value: "picking", dot: brand$1.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "P-2204 · Fragrance · H-12-02", value: "queued", dot: "#a3a3a3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Throughput" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarRow, { values: [24, 28, 22, 30, 34, 36, 40, 32, 42, 44, 38, 46], color: brand$1.accent }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "picks / hour" })
        ] })
      ] })
    ] })
  ] });
}
function Secondary$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-black text-white p-3 flex flex-col text-[10px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "Handheld · Zebra TC22" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-lg border-2 border-dashed p-3 text-center", style: { borderColor: brand$1.accent }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: "Scan bin barcode" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-lg font-bold", style: { color: brand$1.accent }, children: "A-04-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-8 flex items-center justify-center gap-[1px]", children: Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-white", style: { width: `${1 + i % 3}px`, height: "100%" } }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg bg-white/5 border border-white/10 p-2 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "SKU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "2201-WBL-M" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[60%] text-right", children: "Wool blazer M navy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "On hand" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: brand$1.accent }, children: "18 units" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "Pick qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "×3" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded py-2 font-semibold text-black", style: { background: brand$1.accent }, children: "Confirm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded py-2 bg-white/5 border border-white/10", children: "Report issue" })
    ] })
  ] });
}
const A$1 = brand$1.accent;
function DockSchedule() {
  const slots = [
    ["07:00", "Meridian Textiles", "3 pallets", "arriving", A$1],
    ["08:30", "Silk Route Co", "8 pallets", "docked", "#22c55e"],
    ["10:00", "Atlas Fragrance", "2 pallets", "in-transit", A$1],
    ["11:30", "Urban Leather", "5 pallets", "delayed", "#fb923c"],
    ["13:00", "Vega Accessories", "1 pallet", "scheduled", "#a3a3a3"],
    ["15:00", "Nova 3PL outbound", "12 pallets", "scheduled", "#a3a3a3"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Receiving · DXB-01" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Dock schedule · today" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$1}22`, text: A$1, children: "6 docks live" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: slots.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[0.5fr_1.4fr_0.8fr_0.7fr] gap-2 items-center py-1 border-b border-white/5 last:border-b-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px]", style: { color: A$1 }, children: s[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: s[1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: s[2] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${s[4]}22`, text: s[4], children: s[3] }) })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pallets in", value: "18", delta: "ahead of plan", accent: A$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg dwell", value: "42m", delta: "target 45m", accent: A$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Late", value: "1", delta: "Urban Leather", accent: "#fb923c" })
    ] })
  ] });
}
function CycleCount() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Cycle count · exceptions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Variance report" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$1}22`, text: A$1, children: "99.7% accuracy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Counted today", value: "1,208", delta: "14 pickers", accent: A$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Exceptions", value: "9", delta: "0.7% of scans", accent: "#fb923c" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Auto-resolved", value: "6", delta: "3 pending", accent: A$1 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60 mb-1", children: "Open variances" }),
      [
        ["A-04-12 · Wool blazer M", "expected 18 / found 15", "−3", "#fb923c"],
        ["C-07-03 · Silk scarf", "expected 42 / found 44", "+2", A$1],
        ["B-01-19 · Leather belt L", "expected 26 / found 22", "−4", "#fb923c"],
        ["H-12-02 · Fragrance 100ml", "expected 12 / found 12", "0", "#22c55e"]
      ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: `${r[0]} · ${r[1]}`, value: r[2], dot: r[3] }, i))
    ] })
  ] });
}
function SLAMonitor() {
  const carriers = [
    ["Aramex", 96, A$1],
    ["DHL", 94, A$1],
    ["Naqel", 91, A$1],
    ["SMSA", 88, "#f59e0b"],
    ["Nova 3PL", 82, "#fb923c"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#0f1410] via-[#131b12] to-[#080b08] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "3PL · SLA monitor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "On-time delivery · 30d" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A$1}22`, text: A$1, children: "5 carriers" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1 space-y-2", children: carriers.map(([n, v, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px]", style: { color: c }, children: [
          v,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${v}%`, background: c } }) })
    ] }, n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Shipments", value: "4,218", delta: "last 30d", accent: A$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Weighted OTD", value: "91.6%", delta: "target 92%", accent: A$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Claims", value: "18", delta: "−4 vs LM", accent: A$1 })
    ] })
  ] });
}
const brand = {
  name: "Real-Estate CRM",
  short: "CRM",
  tag: "Pipeline · listings · WhatsApp",
  accent: "#ec4899",
  gradient: "from-[#160d18] via-[#1c111e] to-[#0e070f]",
  modules: ["Pipeline", "Listings", "Viewings", "WhatsApp", "Commissions"],
  proof: [
    { label: "80+ brokerages" },
    { label: "35k listings" },
    { label: "Lead → deal 12%" },
    { label: "AED 3.2B closed" }
  ]
};
const stages = [
  { name: "New", count: 42, color: "#a3a3a3" },
  { name: "Qualified", count: 28, color: brand.accent },
  { name: "Viewing", count: 18, color: "#8b5cf6" },
  { name: "Offer", count: 9, color: "#f59e0b" },
  { name: "Closed", count: 6, color: "#22c55e" }
];
function Desktop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex text-[11px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 border-r border-white/5 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md flex items-center justify-center text-white font-bold text-[10px]", style: { background: brand.accent }, children: "◈" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[11px]", children: "Estate.CRM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40", children: "Broker suite" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: ["Pipeline", "Leads", "Listings", "Viewings", "Clients", "WhatsApp", "Commissions", "Reports"].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-2 py-1.5 rounded-md text-[10px] ${i === 0 ? "bg-white/10 text-white" : "text-white/50"}`, children: m }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-md p-2 border border-white/10", style: { background: `${brand.accent}12` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60", children: "This month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "AED 42M" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px]", style: { color: brand.accent }, children: "gross commission ↑ 18%" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 overflow-hidden space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40", children: "Pipeline · Q4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold", children: "Deal board" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand.accent}22`, text: brand.accent, children: "All agents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Dubai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: "Off-plan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-1.5 flex-1", style: { height: "60%" }, children: stages.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-1.5 overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${s.color}22`, text: s.color, children: s.count })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 overflow-hidden", children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-white/[0.04] border border-white/5 p-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: `C ${i}`, className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] truncate", children: "Villa · Palm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-semibold mt-0.5", style: { color: s.color }, children: [
            "AED ",
            (2.1 + i * 0.4).toFixed(1),
            "M"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 rounded mt-1", style: { background: s.color, width: `${30 + i * 20}%`, opacity: 0.6 } })
        ] }, i)) })
      ] }, s.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Viewings this week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "124" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SparkLine, { points: [8, 12, 10, 18, 16, 22, 20, 26], color: brand.accent, className: "w-full h-8" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60 mb-1", children: "Hot leads · WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "A. Al Marri · Palm Villa", value: "2m ago", dot: brand.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "R. Chen · Marina 2BR", value: "14m", dot: brand.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "M. Ibrahim · Off-plan", value: "1h", dot: "#a3a3a3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Top agents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Sarah H.", value: "AED 8.2M", dot: brand.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Faisal K.", value: "AED 6.4M", dot: brand.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Layla A.", value: "AED 4.1M", dot: "#a3a3a3" })
        ] })
      ] })
    ] })
  ] });
}
function Secondary() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-[#0b141a] text-white flex flex-col text-[10px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 flex items-center gap-2 border-b border-white/5", style: { background: `${brand.accent}18` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: "Ali Marri", className: "h-6 w-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: "Ali Al Marri · Hot lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/50", children: "Palm Villa · budget AED 8M" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${brand.accent}22`, text: brand.accent, children: "WhatsApp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-2 space-y-1.5 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[75%] rounded-lg bg-white/[0.05] p-1.5 text-[9px]", children: "Hi Sarah, is the Palm 5BR still available?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[75%] rounded-lg bg-white/[0.05] p-1.5 text-[9px]", children: "Preferred viewing Sat afternoon." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] text-white", style: { background: brand.accent }, children: "Yes! I can arrange Sat 4pm. Sending brochure now 📎" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] text-white", style: { background: brand.accent }, children: "Attached: Palm-5BR-Villa.pdf" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto max-w-[75%] rounded-lg p-1.5 text-[9px] flex items-center gap-1 text-white/70 bg-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: brand.accent } }),
        " AI: auto-drafted follow-up"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-white/5 px-3 py-1.5 text-[9px] text-white/50", children: "Type a message…" }) })
  ] });
}
const A = brand.accent;
function PipelineKanban() {
  const cols = [
    ["New", 42, "#a3a3a3"],
    ["Qualified", 28, A],
    ["Viewing", 18, "#8b5cf6"],
    ["Offer", 9, "#f59e0b"],
    ["Closed", 6, "#22c55e"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Pipeline · Q4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Deals kanban" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A}22`, text: A, children: "AED 42M · MTD" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-1 flex-1 overflow-hidden", children: cols.map(([n, c, col]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-1 overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-semibold truncate", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${col}22`, text: col, children: c })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 overflow-hidden", children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-white/[0.04] border border-white/5 p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-white/50 truncate", children: "Villa · Palm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] font-semibold", style: { color: col }, children: [
          "AED ",
          (2.1 + i * 0.4).toFixed(1),
          "M"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 rounded mt-0.5", style: { background: col, width: `${30 + i * 20}%` } })
      ] }, i)) })
    ] }, n)) })
  ] });
}
function AgentLeaderboard() {
  const agents = [
    ["Sarah H.", "Dubai · luxury", "AED 8.2M", 92, A],
    ["Faisal K.", "Dubai · off-plan", "AED 6.4M", 78, A],
    ["Layla A.", "Abu Dhabi", "AED 4.1M", 61, "#f59e0b"],
    ["Omar M.", "Sharjah", "AED 2.8M", 44, "#f59e0b"],
    ["Priya S.", "Business Bay", "AED 1.9M", 32, "#a3a3a3"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Agents · Nov" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Leaderboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A}22`, text: A, children: "MTD" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1", children: agents.map(([n, sub, v, pct, c], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-1.5 border-b border-white/5 last:border-b-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 text-center text-[10px] font-bold", style: { color: A }, children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: n, className: "h-6 w-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-white/40", children: sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold", style: { color: c }, children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] text-white/40", children: [
          pct,
          "% quota"
        ] })
      ] })
    ] }, n)) })
  ] });
}
function DealTimeline() {
  const events = [
    ["10:42", "WhatsApp reply from Ali Al Marri", "hot"],
    ["10:30", "Brochure sent · Palm-5BR.pdf", "system"],
    ["10:12", "Viewing scheduled · Sat 4pm", "call"],
    ["09:48", "Call · 6m 12s · Sarah H.", "call"],
    ["Yesterday", "Lead qualified · budget AED 8M", "qualify"],
    ["Mon", "Inbound · Instagram DM", "inbound"]
  ];
  const colorMap = { hot: A, system: "#a3a3a3", call: "#8b5cf6", qualify: "#22c55e", inbound: "#f59e0b" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-gradient-to-br from-[#160d18] via-[#1c111e] to-[#0e070f] text-white p-3 text-[10px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/40 uppercase tracking-wider", children: "Deal · #DX-2841" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "Ali Al Marri · Palm 5BR" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { color: `${A}22`, text: A, children: "AED 8.2M" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Touchpoints", value: "14", delta: "7 days", accent: A }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Response", value: "4m", delta: "avg", accent: A }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Close prob.", value: "72%", delta: "AI scored", accent: A })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 flex-1 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[13px] top-2 bottom-2 w-px bg-white/10" }),
      events.map(([t, txt, kind], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 py-1 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 h-2 w-2 rounded-full shrink-0 z-10 ring-2 ring-[#160d18]", style: { background: colorMap[kind] } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 text-[9px] text-white/50 shrink-0", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] flex-1 min-w-0 truncate", children: txt })
      ] }, i))
    ] })
  ] });
}
const pcCreateOrder = "/assets/powercabs-create-order-B98cD61t.jpg";
const pcEmployees = "/assets/powercabs-employees-BxKDABGw.jpg";
const pcBookRide = "/assets/powercabs-book-ride-D3jiQ5k_.jpg";
const PlatformsBackground = reactExports.lazy(() => import("./PlatformsBackground-Ba_NGgrj.mjs"));
const platforms = [
  {
    brand: brand$5,
    Desktop: Desktop$5,
    Secondary: Secondary$5,
    companion: "phone",
    slug: "pulsepos · retail command center",
    extras: [
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(AICopilot, {}), label: "AI Copilot · live upsell suggestions" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(FloorHeatmap, {}), label: "Floor heatmap · by till" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(LoyaltyConsole, {}), label: "Loyalty & wallet console" }
    ]
  },
  {
    brand: brand$4,
    Desktop: Desktop$4,
    Secondary: Secondary$4,
    companion: "window",
    slug: "nexus erp · orders & warehouse",
    extras: [
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelQueue, {}), label: "Multichannel order queue · live" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(PickAssignment, {}), label: "Warehouse pick assignment" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(PurchaseSuppliers, {}), label: "Purchase orders · supplier scorecards" }
    ]
  },
  {
    brand: brand$3,
    Desktop: Desktop$3,
    Secondary: Secondary$3,
    companion: "phone",
    slug: "vital os · clinical console",
    extras: [
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(TriageQueue, {}), label: "AI triage queue · live ED" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(LabResults, {}), label: "Lab results · AI summary" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(Imaging, {}), label: "Imaging viewer · AI findings" }
    ]
  },
  {
    brand: brand$2,
    Desktop: Desktop$2,
    Secondary: Secondary$2,
    companion: "phone",
    slug: "dispatchiq · live fleet ops",
    extras: [
      { src: pcCreateOrder, label: "Create ride and order" },
      { src: pcEmployees, label: "Drivers and employees" },
      { src: pcBookRide, label: "Passenger booking flow" }
    ]
  },
  {
    brand: brand$1,
    Desktop: Desktop$1,
    Secondary: Secondary$1,
    companion: "window",
    slug: "grid wms · warehouse ops",
    extras: [
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(DockSchedule, {}), label: "Receiving dock schedule" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(CycleCount, {}), label: "Cycle count exceptions" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(SLAMonitor, {}), label: "3PL · on-time delivery monitor" }
    ]
  },
  {
    brand,
    Desktop,
    Secondary,
    companion: "window",
    slug: "estate crm · pipeline & deals",
    extras: [
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineKanban, {}), label: "Pipeline kanban · Q4" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentLeaderboard, {}), label: "Agent leaderboard · MTD" },
      { kind: "node", node: /* @__PURE__ */ jsxRuntimeExports.jsx(DealTimeline, {}), label: "Deal timeline · WhatsApp & calls" }
    ]
  }
];
function Platforms() {
  const [i, setI] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  const [mounted, setMounted] = reactExports.useState(false);
  const [reduced, setReduced] = reactExports.useState(false);
  const p = platforms[i];
  const INTERVAL = 5e3;
  reactExports.useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    }
  }, []);
  reactExports.useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % platforms.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, reduced]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "platforms",
      className: "relative bg-section-grad text-foreground overflow-hidden py-16 sm:py-20 lg:py-24",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: [
        mounted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformsBackground, { accent: p.brand.accent }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-soft opacity-20 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 -top-40 h-[40rem] pointer-events-none opacity-40 transition-colors duration-700",
            style: { background: `radial-gradient(600px 300px at 30% 30%, ${p.brand.accent}22, transparent 70%)` }
          }
        ),
        !paused && !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute top-0 left-0 h-0.5 z-20",
            style: { background: p.brand.accent },
            initial: { width: "0%" },
            animate: { width: "100%" },
            transition: { duration: INTERVAL / 1e3, ease: "linear" }
          },
          i
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl rounded-2xl bg-background/40 backdrop-blur-sm p-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              " Platforms we build"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground", children: [
              "We don't just build sites. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "We build the systems that run companies." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-foreground/80 max-w-2xl", children: "Retail, ERP, healthcare, logistics, warehousing, real estate. Production platforms our team has shipped end to end, running under our clients' own brands." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 lg:mt-12 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] gap-6 lg:gap-10 items-start lg:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono text-muted-foreground tracking-widest uppercase", children: p.brand.short }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight", children: p.brand.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base text-muted-foreground", children: p.brand.tag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.brand.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "rounded-full border px-3 py-1 text-[11px] font-medium bg-card/70 text-foreground",
                      style: { borderColor: `${p.brand.accent}66` },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle", style: { background: p.brand.accent } }),
                        m
                      ]
                    },
                    m
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-2", children: p.brand.proof.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-3 py-2 text-[11px] text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", style: { color: p.brand.accent }, children: "●" }),
                    f.label
                  ] }, f.label)) })
                ]
              },
              p.brand.name
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 40, rotateX: 8, filter: "blur(6px)" },
                    animate: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: -30, filter: "blur(6px)" },
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    style: { transformPerspective: 1400 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { url: p.slug, aspect: "16 / 10", children: p.Desktop() })
                  },
                  p.brand.name + "-d"
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute -bottom-8 -right-4 lg:-right-8 w-[24%] max-w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 30, y: 20 },
                    animate: { opacity: 1, x: 0, y: 0 },
                    exit: { opacity: 0, x: 20 },
                    transition: { duration: 0.6, delay: 0.15 },
                    children: p.companion === "phone" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneFrame, { children: p.Secondary() }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MiniWindow, { title: p.brand.short.toLowerCase(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { aspectRatio: "4 / 3" }, children: p.Secondary() }) })
                  },
                  p.brand.name + "-c"
                ) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-4 max-w-[260px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, delay: 0.15 },
                  children: p.companion === "phone" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneFrame, { children: p.Secondary() }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MiniWindow, { title: p.brand.short.toLowerCase(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { aspectRatio: "4 / 3" }, children: p.Secondary() }) })
                },
                p.brand.name + "-cm"
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5, delay: 0.25 },
                  className: "mt-6 md:mt-10",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:grid gap-3 md:grid-cols-3 overflow-x-auto no-scrollbar md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 pb-2", children: p.extras.map((ex, exi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      whileHover: { y: -4, rotateX: 6, rotateY: -4 },
                      style: { transformStyle: "preserve-3d", transformPerspective: 900 },
                      className: "group relative shrink-0 w-[80%] md:w-auto snap-center rounded-lg overflow-hidden border border-border bg-card/50 shadow-lg",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { aspectRatio: "16 / 10" }, children: ex.kind === "node" ? ex.node : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ex.src, alt: ex.label, className: "w-full h-full object-cover object-top", loading: "lazy" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-2 py-1.5 text-[10px] font-semibold text-foreground", children: ex.label })
                      ]
                    },
                    ex.label + exi
                  )) })
                },
                p.brand.name + "-extras"
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 lg:mt-14 border-t border-border pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex lg:grid gap-2 lg:grid-cols-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 lg:mx-0 lg:px-0 pb-2", children: platforms.map((pl, idx) => {
            const active = idx === i;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setI(idx),
                className: `shrink-0 w-[62%] sm:w-[38%] lg:w-auto snap-start group text-left rounded-lg border px-3 py-3 transition-all ${active ? "border-foreground/40 bg-card" : "border-border bg-card text-foreground/70 hover:border-foreground/25"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: pl.brand.short }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: pl.brand.accent, opacity: active ? 1 : 0.5 } })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-[13px] font-semibold leading-tight", children: pl.brand.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: pl.brand.tag }),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layoutId: "scrub-underline", className: "mt-2 h-0.5 rounded-full", style: { background: pl.brand.accent } })
                ]
              },
              pl.brand.name
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center gap-2 rounded-full bg-coral-grad px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105",
                children: [
                  "Book a build call ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#work",
                className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground hover:border-coral/50 transition-colors",
                children: "See the live wall"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground sm:ml-auto", children: "White-label ready. Deployed under our clients' own brands." })
          ] })
        ] })
      ]
    }
  );
}
export {
  Platforms as P
};
