"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

type Theme = "dark" | "light";

const DARK_BG = "#04060f";
const LIGHT_BG = "#072a55";

const CAMERA_PATH = [
  new THREE.Vector3(0, 0, 10),
  new THREE.Vector3(2.6, 1.3, -6),
  new THREE.Vector3(-2.6, -1.3, -22),
  new THREE.Vector3(2.6, 1.7, -38),
  new THREE.Vector3(-1.8, -1.6, -54),
  new THREE.Vector3(0.8, 1.2, -70),
  new THREE.Vector3(0, 0, -86)
];

// ---------------------------------------------------------------- camera rig
function CameraRig({
  scroll,
  mouse
}: {
  scroll: MutableRefObject<number>;
  mouse: MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(CAMERA_PATH, false, "catmullrom", 0.4),
    []
  );
  const smoothed = useRef(0);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);
  const tangent = useMemo(() => new THREE.Vector3(), []);
  const offset = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    smoothed.current = THREE.MathUtils.damp(
      smoothed.current,
      THREE.MathUtils.clamp(scroll.current, 0, 1),
      2.2,
      delta
    );
    const t = THREE.MathUtils.clamp(smoothed.current, 0, 0.999);
    curve.getPointAt(t, pos);
    curve.getTangentAt(t, tangent);

    pos.x += mouse.current.x * 1.2;
    pos.y += mouse.current.y * 0.8;

    camera.position.lerp(pos, 0.12);

    offset.copy(tangent).multiplyScalar(6);
    look.copy(pos).add(offset);
    look.x += mouse.current.x * 1.5;
    look.y += mouse.current.y * 1.0;
    camera.lookAt(look);
  });

  return null;
}

// ---------------------------------------------------------------- starfield
function StarField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 70;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 46;
      arr[i * 3 + 2] = 12 - Math.random() * 112;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        color="#a9c9ff"
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

// ------------------------------------------------------------ floating shapes
type ShapeConfig = {
  position: [number, number, number];
  color: string;
  scale: number;
  kind: "icosa" | "octa" | "torus" | "knot";
  wireframe: boolean;
  speed: number;
};

function FloatingShape({ config }: { config: ShapeConfig }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * config.speed * 0.6;
    ref.current.rotation.y += delta * config.speed;
    ref.current.position.y =
      config.position[1] + Math.sin(state.clock.elapsedTime * 0.6 + config.position[2]) * 0.5;
  });

  return (
    <mesh ref={ref} position={config.position} scale={config.scale}>
      {config.kind === "icosa" && <icosahedronGeometry args={[1, 0]} />}
      {config.kind === "octa" && <octahedronGeometry args={[1, 0]} />}
      {config.kind === "torus" && <torusGeometry args={[1, 0.35, 10, 28]} />}
      {config.kind === "knot" && <torusKnotGeometry args={[0.7, 0.22, 64, 10]} />}
      <meshStandardMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={config.wireframe ? 0.9 : 0.45}
        wireframe={config.wireframe}
        roughness={0.35}
        metalness={0.6}
      />
    </mesh>
  );
}

function FloatingShapes() {
  const shapes = useMemo<ShapeConfig[]>(
    () => [
      { position: [4.2, 1.6, -6], color: "#5b8cff", scale: 1.1, kind: "icosa", wireframe: false, speed: 0.35 },
      { position: [-4.4, -1.2, -13], color: "#a45bff", scale: 0.9, kind: "knot", wireframe: true, speed: 0.5 },
      { position: [3.6, -2.2, -20], color: "#4fd1ff", scale: 1.3, kind: "octa", wireframe: false, speed: 0.28 },
      { position: [-3.8, 2.4, -28], color: "#ff5bd1", scale: 0.8, kind: "torus", wireframe: true, speed: 0.42 },
      { position: [4.8, 1.0, -36], color: "#5b8cff", scale: 1.5, kind: "icosa", wireframe: true, speed: 0.22 },
      { position: [-4.6, -2.0, -44], color: "#7cf5c8", scale: 1.0, kind: "octa", wireframe: false, speed: 0.38 },
      { position: [3.4, 2.6, -52], color: "#a45bff", scale: 1.2, kind: "torus", wireframe: false, speed: 0.3 },
      { position: [-3.2, 0.4, -62], color: "#4fd1ff", scale: 0.9, kind: "knot", wireframe: false, speed: 0.46 },
      { position: [4.4, -1.6, -74], color: "#ff5bd1", scale: 1.4, kind: "icosa", wireframe: true, speed: 0.26 }
    ],
    []
  );

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} config={shape} />
      ))}
    </>
  );
}

function Planet() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });
  return (
    <group position={[7, 4, -96]}>
      <mesh ref={ref}>
        <sphereGeometry args={[9, 24, 24]} />
        <meshStandardMaterial color="#1b2a5e" emissive="#2b4bd8" emissiveIntensity={0.25} wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[13, 0.12, 8, 80]} />
        <meshStandardMaterial color="#5b8cff" emissive="#5b8cff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------- ocean bits
type BubbleData = { x: number; y: number; z: number; speed: number; size: number };

function Bubbles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 34;
      arr[i * 3 + 1] = Math.random() * 18 - 8;
      arr[i * 3 + 2] = 10 - Math.random() * 96;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    const geometry = ref.current?.geometry;
    if (!geometry) return;
    const attribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      array[i * 3 + 1] += delta * (0.5 + (i % 5) * 0.18);
      if (array[i * 3 + 1] > 12) array[i * 3 + 1] = -10;
    }
    attribute.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.22}
        color="#dff3ff"
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

function Fish({
  offset,
  speed,
  color,
  scale,
  lane
}: {
  offset: number;
  speed: number;
  color: string;
  scale: number;
  lane: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);
  const tail = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (group.current) {
      const range = 30;
      const x = ((time * speed + offset) % (range * 2)) - range;
      group.current.position.set(x, lane[1] + Math.sin(time * 1.4 + offset) * 0.35, lane[2]);
      group.current.rotation.y = speed > 0 ? 0 : Math.PI;
    }
    if (tail.current) {
      tail.current.rotation.y = Math.sin(time * 6 + offset) * 0.5;
    }
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      <mesh rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.16, 0.62, 6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.5} />
      </mesh>
      <mesh ref={tail} position={[-0.36, 0, 0]}>
        <coneGeometry args={[0.14, 0.28, 4]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

function FishSchool() {
  const fish = useMemo(
    () => [
      { offset: 0, speed: 1.1, color: "#ffd166", scale: 1, lane: [0, 0.6, -4] as [number, number, number] },
      { offset: 4, speed: 1.1, color: "#ffd166", scale: 0.8, lane: [0, 0.1, -6] as [number, number, number] },
      { offset: 8, speed: 1.1, color: "#f4a261", scale: 0.9, lane: [0, 1.1, -5] as [number, number, number] },
      { offset: 14, speed: -1.3, color: "#7bdff2", scale: 1.1, lane: [0, -1.4, -18] as [number, number, number] },
      { offset: 18, speed: -1.3, color: "#7bdff2", scale: 0.85, lane: [0, -1.0, -20] as [number, number, number] },
      { offset: 26, speed: 0.9, color: "#b8f2e6", scale: 1.2, lane: [0, 1.8, -34] as [number, number, number] },
      { offset: 31, speed: 0.9, color: "#b8f2e6", scale: 0.9, lane: [0, 1.3, -36] as [number, number, number] },
      { offset: 40, speed: -1.0, color: "#f9c74f", scale: 1, lane: [0, -0.6, -50] as [number, number, number] },
      { offset: 45, speed: -1.0, color: "#f9c74f", scale: 0.8, lane: [0, -1.1, -52] as [number, number, number] },
      { offset: 54, speed: 1.2, color: "#90e0ef", scale: 1.1, lane: [0, 1.2, -66] as [number, number, number] }
    ],
    []
  );
  return (
    <>
      {fish.map((item, index) => (
        <Fish key={index} {...item} />
      ))}
    </>
  );
}

function Seaweed() {
  const stalks = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        x: (i % 8) * 2.6 - 10 + ((i * 37) % 5) * 0.3,
        z: 6 - i * 6.4,
        height: 3 + ((i * 53) % 10) * 0.35,
        color: i % 3 === 0 ? "#0f6b4f" : i % 3 === 1 ? "#12855f" : "#0b5a44",
        phase: i * 0.7
      })),
    []
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    refs.current.forEach((mesh, index) => {
      if (!mesh) return;
      mesh.rotation.z = Math.sin(time * 0.9 + stalks[index].phase) * 0.16;
      mesh.rotation.x = Math.cos(time * 0.7 + stalks[index].phase) * 0.08;
    });
  });

  return (
    <>
      {stalks.map((stalk, index) => (
        <mesh
          key={index}
          ref={(node) => {
            refs.current[index] = node;
          }}
          position={[stalk.x, -6 + stalk.height / 2, stalk.z]}
        >
          <cylinderGeometry args={[0.05, 0.14, stalk.height, 6]} />
          <meshStandardMaterial color={stalk.color} roughness={0.9} />
        </mesh>
      ))}
    </>
  );
}

function LightRays() {
  const rays = useMemo(
    () => [
      { position: [-6, 8, -8] as [number, number, number], rotation: 0.35 },
      { position: [2, 9, -22] as [number, number, number], rotation: -0.28 },
      { position: [-3, 10, -38] as [number, number, number], rotation: 0.42 },
      { position: [5, 9, -54] as [number, number, number], rotation: -0.36 },
      { position: [-1, 10, -70] as [number, number, number], rotation: 0.3 }
    ],
    []
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    refs.current.forEach((mesh, index) => {
      if (!mesh) return;
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = 0.05 + Math.sin(time * 0.8 + index) * 0.025;
    });
  });
  return (
    <>
      {rays.map((ray, index) => (
        <mesh
          key={index}
          ref={(node) => {
            refs.current[index] = node;
          }}
          position={ray.position}
          rotation={[0, 0, ray.rotation]}
        >
          <planeGeometry args={[2.6, 26]} />
          <meshBasicMaterial
            color="#bfe8ff"
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

function SeaFloor() {
  return (
    <mesh position={[0, -6.4, -40]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[90, 130]} />
      <meshStandardMaterial color="#06294a" roughness={1} metalness={0} />
    </mesh>
  );
}

// ---------------------------------------------------------------- environments
function SpaceScene() {
  return (
    <>
      <color attach="background" args={[DARK_BG]} />
      <fog attach="fog" args={[DARK_BG, 10, 78]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 6, 2]} intensity={120} color="#5b8cff" distance={50} />
      <pointLight position={[-8, -4, -34]} intensity={140} color="#a45bff" distance={60} />
      <pointLight position={[0, 2, -70]} intensity={160} color="#4fd1ff" distance={70} />
      <StarField count={1600} />
      <FloatingShapes />
      <Planet />
    </>
  );
}

function OceanScene() {
  return (
    <>
      <color attach="background" args={[LIGHT_BG]} />
      <fog attach="fog" args={[LIGHT_BG, 6, 70]} />
      <hemisphereLight args={["#bfe8ff", "#03203d", 1.1]} />
      <directionalLight position={[6, 14, 4]} intensity={2.2} color="#eaf7ff" />
      <pointLight position={[0, 4, -40]} intensity={90} color="#3aa0ff" distance={60} />
      <Bubbles count={320} />
      <FishSchool />
      <Seaweed />
      <LightRays />
      <SeaFloor />
    </>
  );
}

// ---------------------------------------------------------------- main export
export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [isMobile, setIsMobile] = useState(false);
  const scroll = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);

    const readTheme = () => {
      const stored = localStorage.getItem("theme");
      setTheme(stored === "light" ? "light" : "dark");
    };
    readTheme();
    const themeInterval = setInterval(readTheme, 250);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();

    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      clearInterval(themeInterval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* CSS fallback shown before the canvas is ready */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          theme === "dark"
            ? "bg-[#04060f]"
            : "bg-gradient-to-b from-[#0d5aa8] via-[#083a72] to-[#041e3d]"
        }`}
      />
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 55, near: 0.1, far: 140 }}
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <CameraRig scroll={scroll} mouse={mouse} />
          {theme === "dark" ? <SpaceScene /> : <OceanScene />}
        </Canvas>
      )}
    </div>
  );
}
