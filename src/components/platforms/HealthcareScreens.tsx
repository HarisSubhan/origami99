import { SparkLine, Row, StatCard, Chip, Avatar, Donut, BarRow } from "./_primitives";
import { ReactNode } from "react";

export const brand = {
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
    { label: "8 minutes saved per visit" },
  ],
};

const patients: [string, string, string, string][] = [
  ["Amanda Reyes",   "MRN 88214", "Follow up",  brand.accent],
  ["James O'Connor", "MRN 88215", "New intake", "#f97316"],
  ["Michael Tanaka", "MRN 88216", "Post op",    brand.accent],
  ["Rachel Goldberg","MRN 88217", "Consult",    brand.accent],
  ["Sarah Whitmore", "MRN 88218", "AI flag",    "#e74c3c"],
  ["David Chen",     "MRN 88219", "Follow up",  brand.accent],
  ["Kimberly Osei",  "MRN 88220", "Consult",    brand.accent],
];

export function Desktop() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white flex flex-col text-[11px]`}>
      {/* Top command bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-black/30">
        <div className="h-5 w-5 rounded-md flex items-center justify-center text-black font-bold text-[10px]" style={{ background: brand.accent }}>V</div>
        <div className="font-semibold text-[11px]">Vital OS</div>
        <span className="text-[9px] text-white/40">St. Mercy General · West Wing</span>
        <div className="ml-4 flex-1 max-w-md rounded bg-white/5 px-2 py-1 text-[10px] text-white/50">
          Search patient, MRN, order, note · ⌘K
        </div>
        <Chip color={`${brand.accent}22`} text={brand.accent}>● AI Copilot on</Chip>
        <div className="flex -space-x-1.5">
          <Avatar name="Ash M" className="h-5 w-5 border border-black" />
          <Avatar name="Rob K" className="h-5 w-5 border border-black" />
          <Avatar name="Lee T" className="h-5 w-5 border border-black" />
        </div>
        <span className="text-[9px] text-white/40">on call</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Patient rail */}
        <div className="w-44 border-r border-white/5 p-2 flex flex-col">
          <div className="text-[9px] uppercase tracking-wider text-white/40 px-1 mb-1.5">Today · 24 patients</div>
          <div className="space-y-0.5 overflow-hidden">
            {patients.map(([n, mrn, tag, col], i) => (
              <div key={n} className={`flex items-center gap-2 px-1.5 py-1.5 rounded ${i === 4 ? "bg-white/10 ring-1 ring-white/10" : ""}`}>
                <Avatar name={n} className="h-6 w-6" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-medium truncate">{n}</div>
                  <div className="text-[8px] text-white/40 truncate">{mrn} · {tag}</div>
                </div>
                <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: col }} />
              </div>
            ))}
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar name="Sarah Whitmore" className="h-8 w-8" />
              <div>
                <div className="text-[13px] font-semibold">Sarah J. Whitmore · 42F</div>
                <div className="text-[9px] text-white/40">MRN 88218 · Type 2 Diabetes · Hypertension stage 2</div>
              </div>
            </div>
            <div className="flex gap-1">
              <Chip color="#e74c3c22" text="#e74c3c">● AI flag · rising A1c</Chip>
              <Chip color={`${brand.accent}22`} text={brand.accent}>Fasting</Chip>
            </div>
          </div>

          {/* Tabbed sub nav */}
          <div className="flex gap-3 border-b border-white/5 text-[10px]">
            {["Overview", "Vitals", "Meds", "Labs", "Imaging", "Notes"].map((t, i) => (
              <div key={t} className={`pb-1 ${i === 0 ? "border-b border-white text-white" : "text-white/50"}`}>{t}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2">
            <StatCard label="HR"    value="82 bpm"  delta="normal"      accent={brand.accent} />
            <StatCard label="BP"    value="146/94"  delta="stage 2"     accent="#e74c3c" />
            <StatCard label="SpO₂"  value="98%"     delta="normal"      accent={brand.accent} />
            <StatCard label="HbA1c" value="7.8%"    delta="↑ from 7.2"  accent="#f97316" />
          </div>

          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="flex items-center justify-between mb-1">
              <div className="text-[10px] text-white/60">6 month trend · Vitals</div>
              <div className="text-[10px] text-white/40">Systolic · HbA1c · Weight</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                [[140,142,138,144,146,148], "#e74c3c", "Systolic mmHg"],
                [[7.2,7.3,7.4,7.5,7.7,7.8], "#f97316", "HbA1c %"],
                [[72,71,73,72,74,75], brand.accent, "Weight kg"],
              ].map(([pts, col, l], i) => (
                <div key={i}>
                  <SparkLine points={pts as number[]} color={col as string} className="w-full h-10" />
                  <div className="text-[9px] text-white/50 mt-0.5">{l as string}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="text-[10px] text-white/60 mb-1">Clinical timeline</div>
            <Row label="Lipid panel · results in" value="today" dot={brand.accent} />
            <Row label="Metformin 1000mg · refill" value="3 days" dot="#f97316" />
            <Row label="Retinal screening · booked" value="Nov 21" dot={brand.accent} />
            <Row label="Nephrology referral · sent" value="Nov 14" dot="#a3a3a3" />
          </div>
        </div>

        {/* AI panel */}
        <div className="w-52 border-l border-white/5 p-2 flex flex-col gap-2 bg-black/25">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded" style={{ background: brand.accent }} />
            <div className="text-[10px] font-semibold">AI Copilot</div>
            <Chip color={`${brand.accent}22`} text={brand.accent}>v4</Chip>
          </div>

          <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2 text-[10px] leading-snug text-white/85">
            Rising HbA1c (+0.6 in 6mo) with stage 2 hypertension. Recommended plan:
            <ul className="mt-1.5 space-y-1">
              <li className="flex gap-1"><span style={{color:brand.accent}}>●</span> Titrate metformin to 2g</li>
              <li className="flex gap-1"><span style={{color:brand.accent}}>●</span> Add SGLT2 inhibitor (empagliflozin 10mg)</li>
              <li className="flex gap-1"><span style={{color:brand.accent}}>●</span> ACE inhibitor review · lisinopril 10mg</li>
            </ul>
            <div className="text-[9px] text-white/40 mt-2">Evidence · 4 guidelines, 2 prior visits</div>
          </div>

          {/* Confidence meter */}
          <div className="rounded-md bg-white/[0.03] border border-white/5 p-2">
            <div className="flex items-center justify-between text-[9px] text-white/50 mb-1">
              <span>Confidence</span><span className="text-white font-semibold">94%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "94%", background: brand.accent }} />
            </div>
          </div>

          <button className="mt-auto rounded-md py-1.5 text-[10px] font-semibold text-black" style={{ background: brand.accent }}>
            Accept plan · sign & queue
          </button>
          <button className="rounded-md py-1.5 text-[10px] bg-white/5 border border-white/10">Ask copilot…</button>
        </div>
      </div>
    </div>
  );
}

export function Secondary(): ReactNode {
  // Patient mobile app
  return (
    <div className="h-full w-full bg-white text-neutral-900 flex flex-col text-[10px]">
      <div className="pt-6 px-3 pb-2" style={{ background: `linear-gradient(180deg, ${brand.accent}, ${brand.accent}dd)` }}>
        <div className="text-white/80 text-[9px]">Good morning</div>
        <div className="text-white text-base font-semibold">Sarah</div>
        <div className="mt-2 rounded-lg bg-white/15 backdrop-blur px-2 py-1.5">
          <div className="text-white/80 text-[9px]">Next appointment</div>
          <div className="text-white text-[11px] font-semibold">Dr. Ahmed · Nov 21, 10:30 AM</div>
        </div>
      </div>
      <div className="p-3 space-y-2 flex-1">
        <div className="text-[9px] font-semibold text-neutral-500 uppercase">Today's plan</div>
        {[
          ["Metformin 1000mg", "After breakfast", "✓"],
          ["Log blood sugar", "Before dinner", ""],
          ["30 min walk", "Any time", ""],
        ].map(([t, s, d]) => (
          <div key={t} className="flex items-center gap-2 rounded-lg border border-neutral-200 p-2">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center text-[9px]"
              style={{ borderColor: d ? brand.accent : "#d4d4d8", background: d ? brand.accent : "transparent", color: d ? "white" : "" }}>{d}</div>
            <div className="flex-1">
              <div className="text-[10px] font-medium">{t}</div>
              <div className="text-[9px] text-neutral-500">{s}</div>
            </div>
          </div>
        ))}
        <div className="rounded-lg p-2 text-white text-[10px]" style={{ background: brand.accent }}>
          💬 Ask AI copilot about your medication
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Extra dashboards, full standalone screens for the extras strip
   ============================================================ */

export function TriageQueue() {
  const rows: [string, string, string, number, string][] = [
    ["Marcus Bell",     "62M · chest pain",     "ER 3",  92, "#e74c3c"],
    ["Nina Patel",      "34F · anaphylaxis",    "ER 1",  88, "#e74c3c"],
    ["Kevin Sullivan",  "48M · stroke suspect", "ER 2",  86, "#e74c3c"],
    ["Ava Thompson",    "27F · appendicitis",   "Bay 5", 71, "#f97316"],
    ["Ricardo Alvarez", "55M · syncope",        "Bay 2", 64, "#f97316"],
    ["Hannah Weiss",    "39F · migraine",       "Bay 7", 32, brand.accent],
  ];
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col gap-2`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold">AI Triage · Live queue</div>
          <div className="text-[9px] text-white/40">Emergency department · updated 2s ago</div>
        </div>
        <div className="flex gap-2">
          <Donut value={92} color="#e74c3c" label="Critical" size={44} />
          <Donut value={64} color="#f97316" label="Urgent" size={44} />
          <Donut value={32} color={brand.accent} label="Standard" size={44} />
        </div>
      </div>
      <div className="rounded-md border border-white/5 bg-white/[0.02] flex-1 overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1 border-b border-white/5 text-[8px] uppercase tracking-wider text-white/40">
          <div>Patient</div><div>Bed</div><div>Risk</div><div>ETA</div>
        </div>
        {rows.map(([n, note, bed, risk, col], i) => (
          <div key={n} className={`grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center px-2 py-1.5 border-b border-white/5 ${i < 2 ? "bg-red-500/5" : ""}`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <Avatar name={n} className="h-5 w-5" />
              <div className="min-w-0">
                <div className="text-[10px] font-medium truncate">{n}</div>
                <div className="text-[8px] text-white/40 truncate">{note}</div>
              </div>
            </div>
            <div className="text-[9px] font-semibold">{bed}</div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: col }} />
              <span className="text-[9px] font-bold" style={{ color: col }}>{risk}</span>
            </div>
            <div className="text-[9px] text-white/60">{i * 2 + 1}m</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <StatCard label="Avg wait"   value="7m"  delta="↓ 3m today"  accent={brand.accent} />
        <StatCard label="Beds free"  value="12"  delta="of 48"       accent={brand.accent} />
        <StatCard label="AI escalations" value="4"  delta="last hour" accent="#f97316" />
      </div>
    </div>
  );
}

export function LabResults() {
  const labs: [string, string, string, string, number][] = [
    ["Hemoglobin",   "13.4",  "g/dL",  "normal",     70],
    ["WBC",          "11.8",  "10³/µL","high",       88],
    ["Platelets",    "245",   "10³/µL","normal",     60],
    ["Glucose",      "168",   "mg/dL", "high",       82],
    ["HbA1c",        "7.8",   "%",     "elevated",   78],
    ["LDL",          "148",   "mg/dL", "high",       80],
    ["HDL",          "38",    "mg/dL", "low",        30],
    ["Creatinine",   "1.1",   "mg/dL", "normal",     50],
  ];
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col gap-2`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold">Lab Results · Whitmore, S.</div>
          <div className="text-[9px] text-white/40">Collected Nov 14 · Reviewed by Dr. Ahmed</div>
        </div>
        <Chip color="#f9731622" text="#f97316">3 out of range</Chip>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1 overflow-hidden">
        {labs.map(([n, v, u, flag, fill]) => {
          const col = flag === "normal" ? brand.accent : flag === "low" ? "#38bdf8" : flag === "high" ? "#f97316" : "#e74c3c";
          return (
            <div key={n} className="rounded-md border border-white/5 bg-white/[0.02] p-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-white/60">{n}</span>
                <span className="text-[8px]" style={{ color: col }}>{flag}</span>
              </div>
              <div className="text-[13px] font-bold">{v} <span className="text-[8px] font-normal text-white/40">{u}</span></div>
              <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full" style={{ width: `${fill}%`, background: col }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="rounded-md border border-white/10 p-2" style={{ background: `${brand.accent}0f` }}>
        <div className="text-[9px] font-semibold" style={{ color: brand.accent }}>AI summary</div>
        <div className="text-[9px] text-white/80 mt-0.5">Metabolic panel suggests worsening glycemic control and dyslipidemia. Consider statin initiation.</div>
      </div>
    </div>
  );
}

export function Imaging() {
  return (
    <div className={`h-full w-full bg-gradient-to-br ${brand.gradient} text-white p-3 text-[10px] flex flex-col gap-2`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold">Imaging Viewer · Chest X-ray PA</div>
          <div className="text-[9px] text-white/40">Study 22841 · Nov 15, 09:12 · Radiology AI v3.2</div>
        </div>
        <Chip color={`${brand.accent}22`} text={brand.accent}>AI reviewed · 2 findings</Chip>
      </div>

      <div className="flex-1 grid grid-cols-[1.4fr_1fr] gap-2 overflow-hidden">
        {/* Faux X-ray */}
        <div className="relative rounded-md overflow-hidden border border-white/10"
          style={{ background: "radial-gradient(ellipse at 50% 45%, #2a3a4a 0%, #0a1015 70%)" }}>
          {/* rib cage silhouette */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-40">
            <ellipse cx="100" cy="110" rx="70" ry="80" fill="none" stroke="white" strokeWidth="0.5" />
            {[0,1,2,3,4,5].map(i => (
              <path key={i} d={`M40 ${60 + i*15} Q100 ${45 + i*15} 160 ${60 + i*15}`} fill="none" stroke="white" strokeWidth="0.4" opacity={0.6} />
            ))}
            <line x1="100" y1="30" x2="100" y2="180" stroke="white" strokeWidth="0.6" opacity="0.5" />
          </svg>
          {/* AI finding boxes */}
          <div className="absolute" style={{ left: "22%", top: "38%", width: "18%", height: "14%" }}>
            <div className="w-full h-full border-2 rounded" style={{ borderColor: "#e74c3c" }} />
            <div className="absolute -top-4 left-0 text-[8px] font-bold" style={{ color: "#e74c3c" }}>Opacity · 89%</div>
          </div>
          <div className="absolute" style={{ left: "60%", top: "55%", width: "14%", height: "12%" }}>
            <div className="w-full h-full border-2 rounded" style={{ borderColor: "#f97316" }} />
            <div className="absolute -top-4 left-0 text-[8px] font-bold" style={{ color: "#f97316" }}>Nodule · 62%</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <div className="rounded-md border border-white/5 bg-white/[0.02] p-2">
            <div className="text-[9px] uppercase text-white/40 tracking-wider">Findings</div>
            <div className="mt-1 space-y-1.5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full mt-1 flex-shrink-0" style={{ background: "#e74c3c" }} />
                <div>
                  <div className="text-[10px] font-semibold">Left upper opacity</div>
                  <div className="text-[9px] text-white/50">Suggests consolidation · confidence 89%</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full mt-1 flex-shrink-0" style={{ background: "#f97316" }} />
                <div>
                  <div className="text-[10px] font-semibold">Right lower nodule</div>
                  <div className="text-[9px] text-white/50">4mm · recommend CT · confidence 62%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-white/5 bg-white/[0.02] p-2">
            <div className="text-[9px] uppercase text-white/40 tracking-wider">Compare</div>
            <div className="mt-1 grid grid-cols-2 gap-1">
              <BarRow values={[3,5,7,4,6,8,9]} color={brand.accent} className="h-8" />
              <BarRow values={[2,4,3,5,6,4,7]} color="#f97316" className="h-8" />
            </div>
            <div className="text-[8px] text-white/40 mt-1">Vs. 90 day baseline</div>
          </div>
          <button className="mt-auto rounded-md py-1.5 text-[10px] font-semibold text-black" style={{ background: brand.accent }}>
            Sign radiology report
          </button>
        </div>
      </div>
    </div>
  );
}
