"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject, RefObject } from "react";
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

// ------------------------------------------------------------------- jets
type JetConfig = {
  offset: number;
  speed: number;
  color: string;
  scale: number;
  lane: [number, number, number];
};

function Jet({ offset, speed, color, scale, lane }: JetConfig) {
  const { group, burst, animate } = usePoke(scale);
  const glow = useRef<THREE.Mesh>(null);
  const direction = speed > 0 ? 1 : -1;

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const boost = animate(delta);
    const progress = 1 - boost;
    const range = 40;
    const baseX = ((time * speed + offset) % (range * 2)) - range;
    const lunge = Math.sin(progress * Math.PI) * 4;
    group.current.position.set(
      baseX + direction * lunge,
      lane[1] + Math.sin(time * 0.7 + offset) * 0.5,
      lane[2]
    );
    group.current.rotation.y = direction > 0 ? 0 : Math.PI;
    group.current.rotation.z = Math.sin(time * 1.1 + offset) * 0.12;
    group.current.rotation.x =
      Math.sin(time * 0.8 + offset) * 0.06 + (boost > 0 ? progress * Math.PI * 2 : 0);
    if (glow.current) {
      glow.current.scale.setScalar(1 + boost * 2.4);
    }
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      {/* fuselage */}
      <mesh rotation={[0, 0, -Math.PI / 2]}>
        <capsuleGeometry args={[0.16, 1.05, 4, 10]} />
        <meshStandardMaterial color={color} metalness={0.75} roughness={0.28} emissive={color} emissiveIntensity={0.12} />
      </mesh>
      {/* nose */}
      <mesh position={[0.86, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.16, 0.36, 10]} />
        <meshStandardMaterial color="#e8f1ff" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* main wings */}
      <mesh position={[0.02, 0, 0]}>
        <boxGeometry args={[0.42, 0.05, 1.7]} />
        <meshStandardMaterial color="#c9d8f2" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* tail wings */}
      <mesh position={[-0.62, 0.02, 0]}>
        <boxGeometry args={[0.24, 0.04, 0.72]} />
        <meshStandardMaterial color="#b9c9e6" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* vertical fin */}
      <mesh position={[-0.62, 0.22, 0]}>
        <boxGeometry args={[0.26, 0.42, 0.05]} />
        <meshStandardMaterial color="#b9c9e6" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* engine glow */}
      <mesh ref={glow} position={[-0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.34, 8]} />
        <meshBasicMaterial color="#6fd3ff" transparent opacity={0.85} />
      </mesh>
      <PokeBurst burstRef={burst} color="#8fd8ff" />
    </group>
  );
}

function Jets() {
  const jets = useMemo<JetConfig[]>(
    () => [
      { offset: 0, speed: 3.2, color: "#8fb4ff", scale: 1, lane: [0, 2.2, -8] },
      { offset: 22, speed: 3.2, color: "#a48bff", scale: 0.85, lane: [0, -2.6, -26] },
      { offset: 40, speed: -2.6, color: "#7fe3ff", scale: 1.1, lane: [0, 1.4, -46] },
      { offset: 58, speed: 2.8, color: "#ff9fe0", scale: 0.9, lane: [0, -1.8, -66] }
    ],
    []
  );
  return (
    <>
      {jets.map((jet, index) => (
        <Jet key={index} {...jet} />
      ))}
    </>
  );
}

// ----------------------------------------------------------------- meteors
type MeteorConfig = {
  offset: number;
  speed: number;
  scale: number;
  lane: [number, number, number];
  spin: number;
};

function Meteor({ offset, speed, scale, lane, spin }: MeteorConfig) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const range = 44;
    const x = ((time * speed + offset) % (range * 2)) - range;
    group.current.position.set(x, lane[1] + Math.sin(time * 0.5 + offset) * 1.4, lane[2]);
    group.current.rotation.x += delta * spin;
    group.current.rotation.y += delta * spin * 0.7;
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      {/* rocky core — irregular, flat shaded */}
      <mesh rotation={[0.4, 0.8, 0.2]}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color="#6f6259"
          roughness={0.95}
          metalness={0.1}
          flatShading
          emissive="#ff6a1f"
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh position={[0.18, 0.12, -0.1]} scale={0.55}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#5c5148" roughness={1} flatShading />
      </mesh>
      <mesh position={[-0.2, -0.14, 0.12]} scale={0.4}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#7a6a5e" roughness={1} flatShading />
      </mesh>
      {/* comet streak — stretched glow, no cone */}
      <mesh position={[-1.05, 0, 0]} scale={[3.4, 0.34, 0.34]}>
        <sphereGeometry args={[0.4, 16, 12]} />
        <meshBasicMaterial
          color="#ff8a2a"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[-0.6, 0, 0]} scale={[1.9, 0.22, 0.22]}>
        <sphereGeometry args={[0.34, 16, 12]} />
        <meshBasicMaterial
          color="#ffc46b"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Meteors() {
  const meteors = useMemo<MeteorConfig[]>(
    () => [
      { offset: 0, speed: 4.5, scale: 1, lane: [0, 3.4, -14], spin: 1.4 },
      { offset: 9, speed: 4.5, scale: 0.7, lane: [0, -3.8, -22], spin: 1.1 },
      { offset: 18, speed: 5.2, scale: 1.25, lane: [0, 2.6, -34], spin: 1.7 },
      { offset: 27, speed: 4.2, scale: 0.85, lane: [0, -1.6, -44], spin: 1.3 },
      { offset: 36, speed: 5.6, scale: 1.1, lane: [0, 4.2, -56], spin: 1.9 },
      { offset: 45, speed: 4.8, scale: 0.75, lane: [0, -3.2, -68], spin: 1.2 },
      { offset: 54, speed: 5, scale: 1.35, lane: [0, 1.8, -80], spin: 1.5 }
    ],
    []
  );
  return (
    <>
      {meteors.map((meteor, index) => (
        <Meteor key={index} {...meteor} />
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

// ------------------------------------------------------------ poke effects
function usePoke(baseScale: number) {
  const group = useRef<THREE.Group>(null);
  const burst = useRef<THREE.Mesh>(null);
  const poke = useRef(0);

  useEffect(() => {
    const node = group.current;
    if (!node) return;
    node.userData.onPoke = () => {
      poke.current = 1;
    };
    return () => {
      delete node.userData.onPoke;
    };
  }, []);

  const animate = (delta: number) => {
    poke.current = Math.max(0, poke.current - delta * 1.1);
    const boost = poke.current;
    if (group.current) {
      group.current.scale.setScalar(baseScale * (1 + boost * 0.16));
    }
    if (burst.current) {
      const active = boost > 0;
      burst.current.visible = active;
      if (active) {
        const progress = 1 - boost;
        burst.current.scale.setScalar(0.7 + progress * 2.8);
        const material = burst.current.material as THREE.MeshBasicMaterial;
        material.opacity = boost * 0.6;
      }
    }
    return boost;
  };

  return { group, burst, animate };
}

function PokeBurst({ burstRef, color }: { burstRef: RefObject<THREE.Mesh | null>; color: string }) {
  return (
    <mesh ref={burstRef} visible={false}>
      <sphereGeometry args={[0.6, 14, 14]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0}
        wireframe
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function PokeHandler() {
  const { camera, scene, gl } = useThree();

  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest("a, button, input, textarea, select, [role='button']")) {
        return;
      }
      const rect = gl.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const targets: THREE.Object3D[] = [];
      scene.traverse((node) => {
        if (typeof node.userData.onPoke === "function") targets.push(node);
      });

      const hits = raycaster.intersectObjects(targets, true);
      for (const hit of hits) {
        let node: THREE.Object3D | null = hit.object;
        while (node) {
          if (typeof node.userData.onPoke === "function") {
            node.userData.onPoke();
            return;
          }
          node = node.parent;
        }
      }
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [camera, scene, gl]);

  return null;
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
  const { group, burst, animate } = usePoke(scale);
  const tail = useRef<THREE.Mesh>(null);
  const direction = speed > 0 ? 1 : -1;

  const bodyPoints = useMemo(
    () => [
      new THREE.Vector2(0.005, -0.45),
      new THREE.Vector2(0.07, -0.34),
      new THREE.Vector2(0.14, -0.2),
      new THREE.Vector2(0.185, -0.04),
      new THREE.Vector2(0.18, 0.12),
      new THREE.Vector2(0.145, 0.26),
      new THREE.Vector2(0.09, 0.37),
      new THREE.Vector2(0.03, 0.45)
    ],
    []
  );

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const boost = animate(delta);
    const progress = 1 - boost;
    if (group.current) {
      const range = 30;
      const baseX = ((time * speed + offset) % (range * 2)) - range;
      const lunge = Math.sin(progress * Math.PI) * 3.2;
      group.current.position.set(
        baseX + direction * lunge,
        lane[1] + Math.sin(time * 1.4 + offset) * 0.35,
        lane[2]
      );
      group.current.rotation.y = direction > 0 ? 0 : Math.PI;
      group.current.rotation.x = boost > 0 ? progress * Math.PI * 2 : 0;
    }
    if (tail.current) {
      tail.current.rotation.y = Math.sin(time * 6 + offset) * 0.5 + boost * 0.8;
    }
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      {/* body — smooth spindle */}
      <mesh rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.85, 0.62]}>
        <latheGeometry args={[bodyPoints, 20]} />
        <meshStandardMaterial
          color={color}
          roughness={0.32}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.12}
        />
      </mesh>
      {/* dorsal fin */}
      <mesh position={[0.02, 0.17, 0]} rotation={[0, 0, -0.2]} scale={[1, 1, 0.16]}>
        <coneGeometry args={[0.12, 0.22, 10]} />
        <meshStandardMaterial color={color} roughness={0.4} emissive={color} emissiveIntensity={0.1} />
      </mesh>
      {/* tail fin */}
      <mesh ref={tail} position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1, 0.16]}>
        <coneGeometry args={[0.17, 0.3, 12]} />
        <meshStandardMaterial color={color} roughness={0.4} emissive={color} emissiveIntensity={0.1} />
      </mesh>
      {/* eyes */}
      <mesh position={[0.22, 0.05, 0.075]}>
        <sphereGeometry args={[0.032, 10, 10]} />
        <meshStandardMaterial color="#0a1420" roughness={0.15} />
      </mesh>
      <mesh position={[0.22, 0.05, -0.075]}>
        <sphereGeometry args={[0.032, 10, 10]} />
        <meshStandardMaterial color="#0a1420" roughness={0.15} />
      </mesh>
      <PokeBurst burstRef={burst} color="#ffffff" />
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

// ------------------------------------------------------------------ whales
type WhaleConfig = {
  offset: number;
  speed: number;
  scale: number;
  color: string;
  lane: [number, number, number];
};

function Whale({ offset, speed, scale, color, lane }: WhaleConfig) {
  const { group, burst, animate } = usePoke(scale);
  const tail = useRef<THREE.Group>(null);
  const direction = speed > 0 ? 1 : -1;

  const bodyPoints = useMemo(
    () => [
      new THREE.Vector2(0.02, -1.55),
      new THREE.Vector2(0.16, -1.35),
      new THREE.Vector2(0.3, -1.1),
      new THREE.Vector2(0.44, -0.8),
      new THREE.Vector2(0.54, -0.45),
      new THREE.Vector2(0.6, -0.05),
      new THREE.Vector2(0.6, 0.35),
      new THREE.Vector2(0.54, 0.72),
      new THREE.Vector2(0.42, 1.02),
      new THREE.Vector2(0.27, 1.26),
      new THREE.Vector2(0.12, 1.42),
      new THREE.Vector2(0.02, 1.52)
    ],
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const boost = animate(delta);
    const progress = 1 - boost;
    const range = 36;
    const baseX = ((time * speed + offset) % (range * 2)) - range;
    const lunge = Math.sin(progress * Math.PI) * 3.5;
    group.current.position.set(
      baseX + direction * lunge,
      lane[1] + Math.sin(time * 0.45 + offset) * 0.7,
      lane[2]
    );
    group.current.rotation.y = direction > 0 ? 0 : Math.PI;
    group.current.rotation.z = Math.sin(time * 0.45 + offset) * 0.07;
    group.current.rotation.x = boost > 0 ? progress * Math.PI * 2 : 0;
    if (tail.current) {
      tail.current.rotation.z = Math.sin(time * 1.2 + offset) * 0.32 + boost * 0.7;
    }
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      {/* body — smooth whale profile */}
      <mesh rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.92, 0.88]}>
        <latheGeometry args={[bodyPoints, 24]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.08} />
      </mesh>
      {/* lighter belly */}
      <mesh position={[0.15, -0.5, 0]} scale={[1.3, 0.26, 0.55]}>
        <sphereGeometry args={[0.55, 18, 14]} />
        <meshStandardMaterial color="#cfeaf5" roughness={0.7} />
      </mesh>
      {/* pectoral fins */}
      <mesh position={[0.55, -0.32, 0.42]} rotation={[0.55, -0.3, -0.35]} scale={[0.42, 0.07, 0.2]}>
        <sphereGeometry args={[0.5, 12, 10]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      <mesh position={[0.55, -0.32, -0.42]} rotation={[-0.55, 0.3, -0.35]} scale={[0.42, 0.07, 0.2]}>
        <sphereGeometry args={[0.5, 12, 10]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      {/* dorsal ridge */}
      <mesh position={[-0.35, 0.44, 0]} rotation={[0, 0, -0.25]} scale={[0.3, 0.12, 0.06]}>
        <sphereGeometry args={[0.5, 10, 8]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      {/* tail fluke */}
      <group ref={tail} position={[-1.5, 0, 0]}>
        <mesh position={[-0.15, 0, 0.28]} rotation={[0.25, 0.35, 0.1]} scale={[0.5, 0.06, 0.26]}>
          <sphereGeometry args={[0.6, 12, 10]} />
          <meshStandardMaterial color={color} roughness={0.55} />
        </mesh>
        <mesh position={[-0.15, 0, -0.28]} rotation={[-0.25, -0.35, 0.1]} scale={[0.5, 0.06, 0.26]}>
          <sphereGeometry args={[0.6, 12, 10]} />
          <meshStandardMaterial color={color} roughness={0.55} />
        </mesh>
      </group>
      {/* eyes */}
      <mesh position={[0.97, -0.02, 0.32]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial color="#0a1a28" roughness={0.15} />
      </mesh>
      <mesh position={[0.97, -0.02, -0.32]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial color="#0a1a28" roughness={0.15} />
      </mesh>
      <PokeBurst burstRef={burst} color="#bfe3f2" />
    </group>
  );
}

function Whales() {
  const whales = useMemo<WhaleConfig[]>(
    () => [
      { offset: 6, speed: 1.1, scale: 1.5, color: "#2f6f9f", lane: [0, 1.6, -12] },
      { offset: 30, speed: -0.9, scale: 1.1, color: "#3d7fae", lane: [0, -2.4, -34] },
      { offset: 60, speed: 0.8, scale: 1.8, color: "#275c86", lane: [0, 2.4, -58] }
    ],
    []
  );
  return (
    <>
      {whales.map((whale, index) => (
        <Whale key={index} {...whale} />
      ))}
    </>
  );
}

// --------------------------------------------------------------- submarine
function Submarine({
  lane,
  speed,
  scale
}: {
  lane: [number, number, number];
  speed: number;
  scale: number;
}) {
  const { group, burst, animate } = usePoke(scale);
  const propeller = useRef<THREE.Group>(null);
  const direction = speed > 0 ? 1 : -1;

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const boost = animate(delta);
    const progress = 1 - boost;
    const range = 30;
    const baseX = ((time * speed) % (range * 2)) - range;
    const lunge = Math.sin(progress * Math.PI) * 3.8;
    group.current.position.set(
      baseX + direction * lunge,
      lane[1] + Math.sin(time * 0.6) * 0.45,
      lane[2]
    );
    group.current.rotation.z = Math.sin(time * 0.6) * 0.05;
    group.current.rotation.x = boost > 0 ? progress * Math.PI * 2 : 0;
    if (propeller.current) propeller.current.rotation.x += delta * (9 + boost * 70);
  });

  return (
    <group ref={group} position={lane} scale={scale}>
      {/* hull */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.45, 2.3, 6, 14]} />
        <meshStandardMaterial color="#d9a441" metalness={0.55} roughness={0.4} />
      </mesh>
      {/* conning tower */}
      <mesh position={[0.15, 0.62, 0]}>
        <boxGeometry args={[0.55, 0.5, 0.42]} />
        <meshStandardMaterial color="#c4922f" metalness={0.55} roughness={0.45} />
      </mesh>
      {/* periscope */}
      <mesh position={[0.15, 1.05, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.55, 8]} />
        <meshStandardMaterial color="#8a6a20" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* portholes */}
      {[-0.75, -0.35, 0.05, 0.45, 0.85].map((px, index) => (
        <mesh key={index} position={[px, 0.06, 0.43]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.085, 0.085, 0.05, 10]} />
          <meshBasicMaterial color="#aef0ff" />
        </mesh>
      ))}
      {/* propeller */}
      <group ref={propeller} position={[-1.62, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.06, 0.5, 0.12]} />
          <meshStandardMaterial color="#7a6428" metalness={0.7} roughness={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.06, 0.12, 0.5]} />
          <meshStandardMaterial color="#7a6428" metalness={0.7} roughness={0.35} />
        </mesh>
      </group>
      <PokeBurst burstRef={burst} color="#aef0ff" />
    </group>
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
      <Jets />
      <Meteors />
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
      <Whales />
      <Submarine lane={[0, -0.8, -26]} speed={1.6} scale={1.1} />
      <Submarine lane={[0, 2.2, -60]} speed={-1.2} scale={0.9} />
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
          <PokeHandler />
          {theme === "dark" ? <SpaceScene /> : <OceanScene />}
        </Canvas>
      )}
    </div>
  );
}
