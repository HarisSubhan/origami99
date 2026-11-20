import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export type Variant = "software" | "web" | "marketing" | "seo" | "brand";

type MouseState = { x: number; y: number };

function useMouseParallax() {
  const mouse = useRef<MouseState>({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return mouse;
}

function GlassMaterial({ accent, opacity = 0.34 }: { accent: string; opacity?: number }) {
  return (
    <meshPhysicalMaterial
      color={accent}
      roughness={0.18}
      metalness={0.18}
      transmission={0.42}
      thickness={0.8}
      transparent
      opacity={opacity}
      emissive={accent}
      emissiveIntensity={0.08}
      side={THREE.DoubleSide}
    />
  );
}

function ServiceCard({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  accent,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  accent: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + position[0]) * 0.08;
  });
  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[2.7, 1.6, 0.06]} />
      <GlassMaterial accent={accent} opacity={0.28} />
    </mesh>
  );
}

function Ring({ radius, z, accent, speed = 0.2 }: { radius: number; z: number; accent: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.z = t * speed;
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.018, 16, 120]} />
      <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.45} roughness={0.25} metalness={0.45} />
    </mesh>
  );
}

function DataParticles({ count = 90, accent }: { count?: number; accent: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
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
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color={accent} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function SoftwareWorld({ accent }: { accent: string }) {
  const phone = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!phone.current) return;
    const t = s.clock.getElapsedTime();
    phone.current.rotation.y = Math.sin(t * 0.35) * 0.22;
    phone.current.position.y = Math.sin(t * 0.7) * 0.12;
  });
  return (
    <group>
      <ServiceCard accent={accent} position={[-1.7, 0.8, -1.8]} rotation={[0.12, 0.35, -0.05]} />
      <ServiceCard accent={accent} position={[0.1, 0.05, -0.8]} rotation={[0.02, -0.1, 0.02]} scale={[1.2, 1.2, 1]} />
      <ServiceCard accent={accent} position={[1.6, -0.7, -1.4]} rotation={[-0.12, -0.35, 0.06]} />
      <group ref={phone} position={[1.7, 0.7, 0.25]} rotation={[0.1, -0.38, 0.08]}>
        <mesh>
          <boxGeometry args={[0.72, 1.42, 0.08]} />
          <meshPhysicalMaterial color="#111827" roughness={0.22} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.055]}>
          <boxGeometry args={[0.6, 1.18, 0.012]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.35} transparent opacity={0.78} />
        </mesh>
      </group>
      {[-2.4, -1.2, 0, 1.2, 2.4].map((x, i) => (
        <mesh key={x} position={[x, -1.65 + Math.sin(i) * 0.12, -0.6]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.72, 0.05 + i * 0.06, 0.05]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.28} />
        </mesh>
      ))}
      <Ring radius={2.6} z={-1.5} accent={accent} speed={0.18} />
    </group>
  );
}

function WebWorld({ accent }: { accent: string }) {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <group key={i} position={[-1.8 + i * 1.75, 0.4 - i * 0.25, -1.4 + i * 0.2]} rotation={[0.06, -0.32 + i * 0.3, -0.02 + i * 0.03]}>
          <ServiceCard accent={accent} position={[0, 0, 0]} scale={[0.82, 0.72, 1]} />
          <mesh position={[-0.6, 0.36, 0.07]}>
            <boxGeometry args={[0.85, 0.08, 0.02]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.72} />
          </mesh>
          <mesh position={[0.22, -0.08, 0.08]}>
            <boxGeometry args={[1.35, 0.5, 0.02]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.22} transparent opacity={0.38} />
          </mesh>
        </group>
      ))}
      <group position={[2.1, -0.8, 0.15]} rotation={[0.02, -0.5, 0.04]}>
        <mesh>
          <boxGeometry args={[0.58, 1.16, 0.08]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.45} />
        </mesh>
        <mesh position={[0, 0, 0.055]}>
          <boxGeometry args={[0.48, 0.94, 0.01]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.32} transparent opacity={0.8} />
        </mesh>
      </group>
      <Ring radius={2.25} z={-1.3} accent={accent} speed={0.12} />
    </group>
  );
}

function MarketingWorld({ accent }: { accent: string }) {
  return (
    <group>
      <mesh position={[0, 0, -0.6]}>
        <sphereGeometry args={[0.8, 48, 48]} />
        <MeshWobbleMaterial color={accent} factor={0.2} speed={1.2} metalness={0.65} roughness={0.18} emissive={accent} emissiveIntensity={0.35} />
      </mesh>
      {[1.45, 2.15, 2.85].map((radius, i) => <Ring key={radius} radius={radius} z={-0.6 - i * 0.18} accent={accent} speed={0.28 + i * 0.1} />)}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 2.4, Math.sin(angle) * 1.25, -0.2 + Math.sin(angle) * 0.5]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.42, 0.18, 0.04]} />
            <meshStandardMaterial color={i % 3 === 0 ? "#ffffff" : accent} emissive={accent} emissiveIntensity={0.2} transparent opacity={0.78} />
          </mesh>
        );
      })}
    </group>
  );
}

function SeoWorld({ accent }: { accent: string }) {
  return (
    <group>
      {Array.from({ length: 5 }).map((_, i) => (
        <group key={i} position={[0, 1.25 - i * 0.55, -1.5 + i * 0.22]} rotation={[0.05, -0.12, 0]}>
          <mesh>
            <boxGeometry args={[3.2 - i * 0.16, 0.34, 0.04]} />
            <GlassMaterial accent={i === 0 ? accent : "#ffffff"} opacity={i === 0 ? 0.4 : 0.18} />
          </mesh>
          <mesh position={[-1.35, 0, 0.045]}>
            <boxGeometry args={[0.28, 0.2, 0.02]} />
            <meshStandardMaterial color={i === 0 ? accent : "#ffffff"} emissive={accent} emissiveIntensity={0.22} />
          </mesh>
        </group>
      ))}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = -2.1 + i * 0.52;
        return (
          <mesh key={i} position={[x, -1.35, -0.3]}>
            <boxGeometry args={[0.18, 0.25 + (i % 5) * 0.22, 0.18]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.32} roughness={0.2} metalness={0.35} />
          </mesh>
        );
      })}
      <Ring radius={2.75} z={-1.4} accent={accent} speed={0.16} />
    </group>
  );
}

function BrandWorld({ accent }: { accent: string }) {
  const mark = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!mark.current) return;
    const t = s.clock.getElapsedTime();
    mark.current.rotation.z = Math.sin(t * 0.35) * 0.18;
    mark.current.rotation.y = t * 0.08;
  });
  return (
    <group ref={mark}>
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, -0.4]} rotation={[0.28, 0.2, angle]}>
            <boxGeometry args={[0.82, 0.82, 0.08]} />
            <meshPhysicalMaterial color={i % 2 ? "#ffffff" : accent} roughness={0.16} metalness={0.32} transparent opacity={i % 2 ? 0.18 : 0.72} emissive={accent} emissiveIntensity={0.12} />
          </mesh>
        );
      })}
      <mesh position={[0, 0, 0.15]} rotation={[0.2, -0.3, 0.78]}>
        <boxGeometry args={[1.18, 1.18, 0.18]} />
        <MeshDistortMaterial color={accent} metalness={0.7} roughness={0.12} emissive={accent} emissiveIntensity={0.28} distort={0.08} speed={0.9} />
      </mesh>
      <Ring radius={2.2} z={-1.2} accent={accent} speed={0.14} />
    </group>
  );
}

function Prism({ position, scale, kind, accent, speed }: {
  position: [number, number, number]; scale: number;
  kind: "icos" | "octa" | "torus" | "box" | "torusKnot" | "sphere" | "cone";
  accent: string; speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.6;
  });
  const geom = useMemo(() => {
    switch (kind) {
      case "torus": return <torusGeometry args={[0.6, 0.22, 20, 64]} />;
      case "torusKnot": return <torusKnotGeometry args={[0.55, 0.18, 100, 16]} />;
      case "icos": return <icosahedronGeometry args={[0.85, 0]} />;
      case "octa": return <octahedronGeometry args={[0.9, 0]} />;
      case "sphere": return <sphereGeometry args={[0.7, 32, 32]} />;
      case "cone": return <coneGeometry args={[0.65, 1.2, 6]} />;
      default: return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [kind]);
  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      {geom}
      <MeshDistortMaterial
        color={accent}
        metalness={0.75}
        roughness={0.18}
        emissive={accent}
        emissiveIntensity={0.28}
        distort={0.18}
        speed={1.2}
      />
    </mesh>
  );
}

function CoreOrb({ accent }: { accent: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.2;
    const scale = 1 + Math.sin(t * 1.4) * 0.06;
    ref.current.scale.setScalar(scale);
  });
  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshWobbleMaterial color={accent} factor={0.35} speed={1.2} metalness={0.85} roughness={0.15} emissive={accent} emissiveIntensity={0.45} />
    </mesh>
  );
}

function Particles({ count = 120, accent }: { count?: number; accent: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.getElapsedTime() * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={accent} transparent opacity={0.65} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Group({ variant, accent }: { variant: Variant; accent: string }) {
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const mouse = useMouseParallax();

  useFrame((s) => {
    if (!group.current) return;
    const t = s.clock.getElapsedTime();
    // Ambient drift + cursor-driven parallax (damped)
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
    return <group ref={group}><pointLight ref={light} position={[3, 3, 4]} intensity={1.6} color={accent} /><SoftwareWorld accent={accent} /><DataParticles accent={accent} count={100} /></group>;
  }
  if (variant === "web") {
    return <group ref={group}><pointLight ref={light} position={[3, 3, 4]} intensity={1.7} color={accent} /><WebWorld accent={accent} /><DataParticles accent={accent} count={80} /></group>;
  }
  if (variant === "marketing") {
    return <group ref={group}><pointLight ref={light} position={[3, 3, 4]} intensity={1.8} color={accent} /><MarketingWorld accent={accent} /><DataParticles accent={accent} count={120} /></group>;
  }
  if (variant === "seo") {
    return <group ref={group}><pointLight ref={light} position={[3, 3, 4]} intensity={1.7} color={accent} /><SeoWorld accent={accent} /><DataParticles accent={accent} count={95} /></group>;
  }
  if (variant === "brand") {
    return <group ref={group}><pointLight ref={light} position={[3, 3, 4]} intensity={1.7} color={accent} /><BrandWorld accent={accent} /><DataParticles accent={accent} count={70} /></group>;
  }
  return null;
}

export function Scene3D({ variant, accent }: { variant: Variant; accent?: string }) {
  const [themeAccent, setThemeAccent] = useState(accent ?? "#ff6b3d");

  useEffect(() => {
    if (accent) {
      setThemeAccent(accent);
      return;
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue("--coral").trim();
    if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) setThemeAccent(value);
  }, [accent]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 4, 6]} intensity={1.6} color={themeAccent} />
        <pointLight position={[-6, -3, -4]} intensity={1.1} color="#ffffff" />
        <Group variant={variant} accent={themeAccent} />
        <hemisphereLight args={["#ffffff", "#1a1a2e", 0.6]} />
      </Suspense>
    </Canvas>
  );
}
