import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Shape({
  position,
  color,
  speed,
  scale,
  kind,
  emissiveIntensity,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  kind: "box" | "torus" | "icos" | "octa";
  emissiveIntensity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.6;
  });
  const geom = useMemo(() => {
    switch (kind) {
      case "torus":
        return <torusGeometry args={[0.6, 0.22, 16, 48]} />;
      case "icos":
        return <icosahedronGeometry args={[0.75, 0]} />;
      case "octa":
        return <octahedronGeometry args={[0.85, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [kind]);
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        {geom}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
    </Float>
  );
}

function Scene({ accent, light }: { accent: string; light: boolean }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Color(accent));
  const current = useRef(new THREE.Color(accent));

  useFrame((state) => {
    target.current.set(accent);
    current.current.lerp(target.current, 0.04);
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.15) * 0.35;
      group.current.rotation.x =
        Math.cos(state.clock.getElapsedTime() * 0.12) * 0.15;
    }
  });

  const shapes = useMemo(() => {
    const kinds: Array<"box" | "torus" | "icos" | "octa"> = [
      "torus", "icos", "octa", "box", "torus",
      "icos", "octa", "box", "torus", "icos",
    ];
    return kinds.map((k, i) => {
      const angle = (i / kinds.length) * Math.PI * 2;
      const radius = 3.5 + (i % 3) * 0.9;
      return {
        kind: k,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.3) * 1.6,
          Math.sin(angle) * radius - 2,
        ] as [number, number, number],
        speed: 0.3 + (i % 5) * 0.12,
        scale: 0.7 + ((i * 37) % 40) / 100,
      };
    });
  }, []);

  const emissive = light ? 0.08 : 0.35;
  const lightIntensity = light ? 1.1 : 2.2;

  return (
    <>
      <ambientLight intensity={light ? 0.6 : 0.35} />
      <pointLight position={[6, 4, 6]} intensity={lightIntensity} color={accent} />
      <pointLight position={[-6, -3, -4]} intensity={lightIntensity * 0.65} color={accent} />
      <group ref={group}>
        {shapes.map((s, i) => (
          <Shape key={i} {...s} color={accent} emissiveIntensity={emissive} />
        ))}
      </group>
    </>
  );
}

export default function PlatformsBackground({ accent }: { accent: string }) {
  const [light, setLight] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const update = () => setLight(document.documentElement.classList.contains("light"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 55 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene accent={accent} light={light} />
        <Environment preset={light ? "apartment" : "city"} />
      </Suspense>
    </Canvas>
  );
}
