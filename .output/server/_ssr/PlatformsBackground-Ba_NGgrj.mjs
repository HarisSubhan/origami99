import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { E as Environment, F as Float } from "../_libs/react-three__drei.mjs";
import { e as Color } from "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/suspend-react.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/three-stdlib.mjs";
import "../_libs/fflate.mjs";
import "module";
import "../_libs/monogrid__gainmap-js.mjs";
function Shape({
  position,
  color,
  speed,
  scale,
  kind,
  emissiveIntensity
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.6;
  });
  const geom = reactExports.useMemo(() => {
    switch (kind) {
      case "torus":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [0.6, 0.22, 16, 48] });
      case "icos":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.75, 0] });
      case "octa":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.85, 0] });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [1, 1, 1] });
    }
  }, [kind]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.4, rotationIntensity: 0.6, floatIntensity: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, scale, children: [
    geom,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 0.7,
        roughness: 0.25,
        emissive: color,
        emissiveIntensity
      }
    )
  ] }) });
}
function Scene({ accent, light }) {
  const group = reactExports.useRef(null);
  const target = reactExports.useRef(new Color(accent));
  const current = reactExports.useRef(new Color(accent));
  useFrame((state) => {
    target.current.set(accent);
    current.current.lerp(target.current, 0.04);
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.35;
      group.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.12) * 0.15;
    }
  });
  const shapes = reactExports.useMemo(() => {
    const kinds = [
      "torus",
      "icos",
      "octa",
      "box",
      "torus",
      "icos",
      "octa",
      "box",
      "torus",
      "icos"
    ];
    return kinds.map((k, i) => {
      const angle = i / kinds.length * Math.PI * 2;
      const radius = 3.5 + i % 3 * 0.9;
      return {
        kind: k,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.3) * 1.6,
          Math.sin(angle) * radius - 2
        ],
        speed: 0.3 + i % 5 * 0.12,
        scale: 0.7 + i * 37 % 40 / 100
      };
    });
  }, []);
  const emissive = light ? 0.08 : 0.35;
  const lightIntensity = light ? 1.1 : 2.2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: light ? 0.6 : 0.35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [6, 4, 6], intensity: lightIntensity, color: accent }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-6, -3, -4], intensity: lightIntensity * 0.65, color: accent }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: group, children: shapes.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Shape, { ...s, color: accent, emissiveIntensity: emissive }, i)) })
  ] });
}
function PlatformsBackground({ accent }) {
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    const update = () => setLight(document.documentElement.classList.contains("light"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      dpr: [1, 1.5],
      gl: { antialias: true, alpha: true, powerPreference: "high-performance" },
      camera: { position: [0, 0, 7], fov: 55 },
      style: { position: "absolute", inset: 0, pointerEvents: "none", background: "transparent" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Scene, { accent, light }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: light ? "apartment" : "city" })
      ] })
    }
  );
}
export {
  PlatformsBackground as default
};
