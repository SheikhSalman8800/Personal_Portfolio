"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// Custom hook to detect mobile screen or prefers-reduced-motion
function useReducedMotionOrMobile() {
  const [shouldReduce, setShouldReduce] = useState(true); // Default true for SSR safety

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const checkScreen = () => {
      setShouldReduce(mediaQuery.matches || window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    mediaQuery.addEventListener("change", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
      mediaQuery.removeEventListener("change", checkScreen);
    };
  }, []);

  return shouldReduce;
}

// 3D Nodes Setup
interface NodeData {
  id: string;
  name: string;
  type: string;
  position: [number, number, number];
  color: string;
}

const NODES: NodeData[] = [
  { id: "ingress", name: "Voice / Webhook Input", type: "Ingress", position: [-2.2, 0.5, 0], color: "#00F5D4" },
  { id: "orchestration", name: "n8n Automation Core", type: "Engine", position: [-0.6, -0.2, 0.4], color: "#F59E0B" },
  { id: "cognition", name: "Claude 3.5 Agent", type: "Brain", color: "#10B981", position: [1.0, 1.0, -0.4] },
  { id: "database", name: "Supabase DB Core", type: "Data Store", position: [0.6, -1.2, -0.1], color: "#3B82F6" },
  { id: "action", name: "Vapi Voice Out / Callback", type: "Action", position: [2.3, -0.2, 0], color: "#EF4444" },
];

const CONNECTIONS = [
  { from: "ingress", to: "orchestration", color: "#00F5D4" },
  { from: "orchestration", to: "cognition", color: "#F59E0B" },
  { from: "cognition", to: "database", color: "#10B981" },
  { from: "cognition", to: "action", color: "#10B981" },
  { from: "orchestration", to: "database", color: "#3B82F6" },
  { from: "database", to: "action", color: "#3B82F6" },
];

// Curved connection paths with moving data packets
function CurvedConnection({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const pulseRef = useRef<THREE.Mesh>(null);
  
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);
  
  // Create a curved Bezier path
  const curve = useMemo(() => {
    const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    const offset = new THREE.Vector3(
      (start[0] + end[0]) * 0.08,
      0.25 + Math.abs(start[1] - end[1]) * 0.15,
      (start[2] + end[2]) * 0.08
    );
    const controlPoint = midPoint.add(offset);
    return new THREE.QuadraticBezierCurve3(startVec, controlPoint, endVec);
  }, [startVec, endVec, start, end]);

  // Generate points to render the curve line
  const points = useMemo(() => curve.getPoints(30), [curve]);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  
  const lineObj = useMemo(() => {
    return new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x1e293b, opacity: 0.15, transparent: true })
    );
  }, [lineGeometry]);

  useFrame((state) => {
    if (pulseRef.current) {
      const time = state.clock.getElapsedTime();
      const speed = 0.2;
      // Cycle through progress
      const progress = ((time * speed) + (start[0] + start[1]) * 0.06) % 1.0;
      const point = curve.getPointAt(progress);
      pulseRef.current.position.copy(point);
    }
  });

  return (
    <group>
      <primitive object={lineObj} />
      {/* Emissive pulse packet */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Premium Obsidian-Glass Node component
function FuturisticNode({ node, activeNode, setActiveNode }: { node: NodeData; activeNode: string | null; setActiveNode: (id: string | null) => void }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow core rotation
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.15;
      coreRef.current.rotation.y = time * 0.2;
    }

    // Outer shell scaling & subtle floating movement
    if (outerRef.current) {
      const scale = hovered ? 1.15 : 1.0;
      outerRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      
      const floatY = node.position[1] + Math.sin(time * 0.8 + node.position[0]) * 0.04;
      outerRef.current.position.y = floatY;
      
      if (coreRef.current) {
        coreRef.current.position.y = floatY;
      }
      if (ringRef.current) {
        ringRef.current.position.y = floatY;
        ringRef.current.rotation.z = time * 0.1;
      }
    }
  });

  return (
    <group>
      {/* Outer Obsidian / physical reflection glass shell */}
      <mesh
        ref={outerRef}
        position={node.position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          setActiveNode(node.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          setActiveNode(null);
        }}
      >
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#0f172a" // Deep slate
          emissive="#000000"
          roughness={0.25}
          metalness={0.85}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.4} // Partial obsidian translucency
          ior={1.6}
          thickness={0.3}
          roughnessMap={null}
        />
      </mesh>

      {/* Inner glowing core representing active pipelines */}
      <mesh ref={coreRef} position={node.position}>
        <icosahedronGeometry args={[0.08, 1]} />
        <meshBasicMaterial color={node.color} wireframe={true} transparent opacity={0.85} />
      </mesh>

      {/* Orbiting thin ring - active state */}
      <mesh ref={ringRef} position={node.position} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.26, 0.27, 32]} />
        <meshBasicMaterial color={node.color} side={THREE.DoubleSide} transparent opacity={hovered ? 0.5 : 0.08} />
      </mesh>

      {/* Premium HUD Labels */}
      {(hovered || activeNode === node.id) && (
        <Html distanceFactor={6} center style={{ pointerEvents: "none" }}>
          <div className="bg-slate-950/95 border border-slate-800/80 px-3 py-1.5 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.8)] whitespace-nowrap text-center backdrop-blur-md">
            <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase font-bold">{node.type}</div>
            <div className="text-xs font-bold text-white mt-0.5">{node.name}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// 3D Grid Plane (Grounded mesh like Vercel/Linear graphics)
function GroundGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.x = state.pointer.x * 0.1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[16, 20, 0x1e293b, 0x0f172a]}
      position={[0, -2.0, -1.0]}
      rotation={[0.15, 0, 0]}
    />
  );
}

// Background point field (Stars/Coordinates)
function BackgroundCoordinates() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 3;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.003;
      pointsRef.current.position.x = state.pointer.x * 0.08;
      pointsRef.current.position.y = state.pointer.y * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#94a3b8"
        size={0.012}
        sizeAttenuation={true}
        transparent
        opacity={0.08}
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Extremely slow rotation when idle
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.008;
      
      // Pointer Parallax
      const mouseX = state.pointer.x * 0.15;
      const mouseY = state.pointer.y * 0.15;
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (-mouseY - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dark, precise lighting configuration */}
      <ambientLight intensity={0.12} />
      
      {/* Focused directional beam for highlights */}
      <directionalLight position={[3, 4, 3]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-3, -4, -3]} intensity={0.2} color="#475569" />
      
      <pointLight position={[0, 2, 2]} intensity={0.8} color="#f59e0b" distance={8} />

      <BackgroundCoordinates />
      <GroundGrid />

      {/* Curved connection conduits */}
      {CONNECTIONS.map((conn, i) => {
        const startNode = NODES.find((n) => n.id === conn.from);
        const endNode = NODES.find((n) => n.id === conn.to);
        if (!startNode || !endNode) return null;

        return (
          <CurvedConnection
            key={i}
            start={startNode.position}
            end={endNode.position}
            color={conn.color}
          />
        );
      })}

      {/* Obsidian Nodes */}
      {NODES.map((node) => (
        <FuturisticNode
          key={node.id}
          node={node}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      ))}
    </group>
  );
}

// Flat Vector SVG Fallback (reduced motion & mobile)
function StaticFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-8 select-none">
      <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto relative z-10 text-slate-800">
        {/* Connection Paths */}
        <path d="M 60 150 Q 130 130 160 180" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 160 180 Q 230 110 260 130" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 260 130 Q 300 200 340 165" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 260 130 Q 280 80 340 165" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 160 180 Q 185 240 250 215" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 250 215 Q 310 195 340 165" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Pulse elements */}
        <circle r="3" fill="#00F5D4" className="animate-[ping_3.5s_infinite]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 60 150 Q 130 130 160 180" />
        </circle>
        <circle r="3" fill="#F59E0B" className="animate-[ping_3s_infinite]">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 160 180 Q 230 110 260 130" />
        </circle>

        {/* Ground lines for grid suggestion */}
        <line x1="50" y1="260" x2="350" y2="260" stroke="#1e293b" strokeWidth="1" />
        <line x1="80" y1="275" x2="320" y2="275" stroke="#0f172a" strokeWidth="1" />

        {/* Nodes */}
        <g transform="translate(60, 150)">
          <circle r="10" fill="#0f172a" stroke="#00F5D4" strokeWidth="1.5" />
          <circle r="3" fill="#00F5D4" />
          <text y="-16" textAnchor="middle" fill="#475569" className="text-[8px] font-mono font-bold uppercase tracking-wider">Ingress</text>
        </g>
        <g transform="translate(160, 180)">
          <circle r="10" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5" />
          <circle r="3" fill="#F59E0B" />
          <text y="20" textAnchor="middle" fill="#475569" className="text-[8px] font-mono font-bold uppercase tracking-wider">n8n core</text>
        </g>
        <g transform="translate(260, 120)">
          <circle r="10" fill="#0f172a" stroke="#10B981" strokeWidth="1.5" />
          <circle r="3" fill="#10B981" />
          <text y="-16" textAnchor="middle" fill="#475569" className="text-[8px] font-mono font-bold uppercase tracking-wider">Claude 3.5</text>
        </g>
        <g transform="translate(250, 215)">
          <circle r="10" fill="#0f172a" stroke="#3B82F6" strokeWidth="1.5" />
          <circle r="3" fill="#3B82F6" />
          <text y="20" textAnchor="middle" fill="#475569" className="text-[8px] font-mono font-bold uppercase tracking-wider">Supabase</text>
        </g>
        <g transform="translate(340, 165)">
          <circle r="10" fill="#0f172a" stroke="#EF4444" strokeWidth="1.5" />
          <circle r="3" fill="#EF4444" />
          <text y="-16" textAnchor="middle" fill="#475569" className="text-[8px] font-mono font-bold uppercase tracking-wider">Vapi Out</text>
        </g>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-900/[0.03] rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export default function Hero3DNodeGraph() {
  const isReducedOrMobile = useReducedMotionOrMobile();

  if (isReducedOrMobile) {
    return <StaticFallback />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
