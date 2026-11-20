import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { M as MeshWobbleMaterial, a as MeshDistortMaterial } from "../_libs/react-three__drei.mjs";
import { D as DoubleSide } from "../_libs/three.mjs";
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
function useMouseParallax() {
  const mouse = reactExports.useRef({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e) => {
      mouse.current.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return mouse;
}
function GlassMaterial({ accent, opacity = 0.34 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "meshPhysicalMaterial",
    {
      color: accent,
      roughness: 0.18,
      metalness: 0.18,
      transmission: 0.42,
      thickness: 0.8,
      transparent: true,
      opacity,
      emissive: accent,
      emissiveIntensity: 0.08,
      side: DoubleSide
    }
  );
}
function ServiceCard({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  accent
}) {
  const ref = reactExports.useRef(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + position[0]) * 0.08;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, rotation, scale, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [2.7, 1.6, 0.06] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlassMaterial, { accent, opacity: 0.28 })
  ] });
}
function Ring({ radius, z, accent, speed = 0.2 }) {
  const ref = reactExports.useRef(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.z = t * speed;
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position: [0, 0, z], rotation: [Math.PI / 2, 0, 0], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [radius, 0.018, 16, 120] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.45, roughness: 0.25, metalness: 0.45 })
  ] });
}
function DataParticles({ count = 90, accent }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1;
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.getElapsedTime() * 0.025;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.045, color: accent, transparent: true, opacity: 0.55, sizeAttenuation: true, depthWrite: false })
  ] });
}
function SoftwareWorld({ accent }) {
  const phone = reactExports.useRef(null);
  useFrame((s) => {
    if (!phone.current) return;
    const t = s.clock.getElapsedTime();
    phone.current.rotation.y = Math.sin(t * 0.35) * 0.22;
    phone.current.position.y = Math.sin(t * 0.7) * 0.12;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { accent, position: [-1.7, 0.8, -1.8], rotation: [0.12, 0.35, -0.05] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { accent, position: [0.1, 0.05, -0.8], rotation: [0.02, -0.1, 0.02], scale: [1.2, 1.2, 1] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { accent, position: [1.6, -0.7, -1.4], rotation: [-0.12, -0.35, 0.06] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: phone, position: [1.7, 0.7, 0.25], rotation: [0.1, -0.38, 0.08], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.72, 1.42, 0.08] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshPhysicalMaterial", { color: "#111827", roughness: 0.22, metalness: 0.5 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0, 0.055], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.6, 1.18, 0.012] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.35, transparent: true, opacity: 0.78 })
      ] })
    ] }),
    [-2.4, -1.2, 0, 1.2, 2.4].map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [x, -1.65 + Math.sin(i) * 0.12, -0.6], rotation: [0, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.72, 0.05 + i * 0.06, 0.05] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.28 })
    ] }, x)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { radius: 2.6, z: -1.5, accent, speed: 0.18 })
  ] });
}
function WebWorld({ accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [-1.8 + i * 1.75, 0.4 - i * 0.25, -1.4 + i * 0.2], rotation: [0.06, -0.32 + i * 0.3, -0.02 + i * 0.03], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { accent, position: [0, 0, 0], scale: [0.82, 0.72, 1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-0.6, 0.36, 0.07], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.85, 0.08, 0.02] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ffffff", transparent: true, opacity: 0.72 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.22, -0.08, 0.08], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [1.35, 0.5, 0.02] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.22, transparent: true, opacity: 0.38 })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [2.1, -0.8, 0.15], rotation: [0.02, -0.5, 0.04], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.58, 1.16, 0.08] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#0f172a", roughness: 0.2, metalness: 0.45 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0, 0.055], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.48, 0.94, 0.01] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.32, transparent: true, opacity: 0.8 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { radius: 2.25, z: -1.3, accent, speed: 0.12 })
  ] });
}
function MarketingWorld({ accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0, -0.6], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.8, 48, 48] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeshWobbleMaterial, { color: accent, factor: 0.2, speed: 1.2, metalness: 0.65, roughness: 0.18, emissive: accent, emissiveIntensity: 0.35 })
    ] }),
    [1.45, 2.15, 2.85].map((radius, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { radius, z: -0.6 - i * 0.18, accent, speed: 0.28 + i * 0.1 }, radius)),
    Array.from({ length: 12 }).map((_, i) => {
      const angle = i / 12 * Math.PI * 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [Math.cos(angle) * 2.4, Math.sin(angle) * 1.25, -0.2 + Math.sin(angle) * 0.5], rotation: [0, 0, angle], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.42, 0.18, 0.04] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: i % 3 === 0 ? "#ffffff" : accent, emissive: accent, emissiveIntensity: 0.2, transparent: true, opacity: 0.78 })
      ] }, i);
    })
  ] });
}
function SeoWorld({ accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [0, 1.25 - i * 0.55, -1.5 + i * 0.22], rotation: [0.05, -0.12, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [3.2 - i * 0.16, 0.34, 0.04] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlassMaterial, { accent: i === 0 ? accent : "#ffffff", opacity: i === 0 ? 0.4 : 0.18 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-1.35, 0, 0.045], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.28, 0.2, 0.02] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: i === 0 ? accent : "#ffffff", emissive: accent, emissiveIntensity: 0.22 })
      ] })
    ] }, i)),
    Array.from({ length: 9 }).map((_, i) => {
      const x = -2.1 + i * 0.52;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [x, -1.35, -0.3], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.18, 0.25 + i % 5 * 0.22, 0.18] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: accent, emissive: accent, emissiveIntensity: 0.32, roughness: 0.2, metalness: 0.35 })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { radius: 2.75, z: -1.4, accent, speed: 0.16 })
  ] });
}
function BrandWorld({ accent }) {
  const mark = reactExports.useRef(null);
  useFrame((s) => {
    if (!mark.current) return;
    const t = s.clock.getElapsedTime();
    mark.current.rotation.z = Math.sin(t * 0.35) * 0.18;
    mark.current.rotation.y = t * 0.08;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: mark, children: [
    Array.from({ length: 5 }).map((_, i) => {
      const angle = i / 5 * Math.PI * 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, -0.4], rotation: [0.28, 0.2, angle], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.82, 0.82, 0.08] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshPhysicalMaterial", { color: i % 2 ? "#ffffff" : accent, roughness: 0.16, metalness: 0.32, transparent: true, opacity: i % 2 ? 0.18 : 0.72, emissive: accent, emissiveIntensity: 0.12 })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0, 0.15], rotation: [0.2, -0.3, 0.78], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [1.18, 1.18, 0.18] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeshDistortMaterial, { color: accent, metalness: 0.7, roughness: 0.12, emissive: accent, emissiveIntensity: 0.28, distort: 0.08, speed: 0.9 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { radius: 2.2, z: -1.2, accent, speed: 0.14 })
  ] });
}
function Group({ variant, accent }) {
  const group = reactExports.useRef(null);
  const light = reactExports.useRef(null);
  const mouse = useMouseParallax();
  useFrame((s) => {
    if (!group.current) return;
    const t = s.clock.getElapsedTime();
    const targetY = Math.sin(t * 0.15) * 0.2 + mouse.current.x * 0.6;
    const targetX = Math.cos(t * 0.12) * 0.08 + mouse.current.y * 0.35;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.position.x += (mouse.current.x * 0.5 - group.current.position.x) * 0.04;
    group.current.position.y += (mouse.current.y * 0.3 - group.current.position.y) * 0.04;
    if (light.current) {
      light.current.position.x += (mouse.current.x * 4 - light.current.position.x) * 0.08;
      light.current.position.y += (mouse.current.y * 3 - light.current.position.y) * 0.08;
    }
  });
  if (variant === "software") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { ref: light, position: [3, 3, 4], intensity: 1.6, color: accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SoftwareWorld, { accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataParticles, { accent, count: 100 })
    ] });
  }
  if (variant === "web") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { ref: light, position: [3, 3, 4], intensity: 1.7, color: accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WebWorld, { accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataParticles, { accent, count: 80 })
    ] });
  }
  if (variant === "marketing") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { ref: light, position: [3, 3, 4], intensity: 1.8, color: accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingWorld, { accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataParticles, { accent, count: 120 })
    ] });
  }
  if (variant === "seo") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { ref: light, position: [3, 3, 4], intensity: 1.7, color: accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SeoWorld, { accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataParticles, { accent, count: 95 })
    ] });
  }
  if (variant === "brand") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { ref: light, position: [3, 3, 4], intensity: 1.7, color: accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrandWorld, { accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataParticles, { accent, count: 70 })
    ] });
  }
  return null;
}
function Scene3D({ variant, accent }) {
  const [themeAccent, setThemeAccent] = reactExports.useState(accent ?? "#ff6b3d");
  reactExports.useEffect(() => {
    if (accent) {
      setThemeAccent(accent);
      return;
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue("--coral").trim();
    if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) setThemeAccent(value);
  }, [accent]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      dpr: [1, 1.5],
      gl: { antialias: true, alpha: true, powerPreference: "high-performance" },
      camera: { position: [0, 0, 8], fov: 55 },
      style: { position: "absolute", inset: 0, pointerEvents: "none", background: "transparent" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [6, 4, 6], intensity: 1.6, color: themeAccent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-6, -3, -4], intensity: 1.1, color: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { variant, accent: themeAccent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hemisphereLight", { args: ["#ffffff", "#1a1a2e", 0.6] })
      ] })
    }
  );
}
export {
  Scene3D
};
