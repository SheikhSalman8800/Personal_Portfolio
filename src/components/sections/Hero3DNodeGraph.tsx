"use client";

import { useEffect, useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom hook to detect mobile screen or prefers-reduced-motion
function useReducedMotionOrMobile() {
  const [shouldReduce, setShouldReduce] = useState(false);

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

// 14 Nodes mapping a complex agent pipeline
interface NodeData {
  id: string;
  name: string;
  type: string;
  position: [number, number, number];
  color: string;
  floatSpeed: number;
  floatAmplitude: number;
  phaseOffset: number;
}

const NODES: NodeData[] = [
  { id: "webhook", name: "Webhook Ingress", type: "Ingress", position: [-3.0, 1.2, 0.2], color: "#00F5D4", floatSpeed: 0.8, floatAmplitude: 0.08, phaseOffset: 0 },
  { id: "voice_in", name: "Vapi Inbound stream", type: "Ingress", position: [-2.8, -0.8, -0.2], color: "#00F5D4", floatSpeed: 0.9, floatAmplitude: 0.06, phaseOffset: 1.2 },
  { id: "queue", name: "RabbitMQ Broker", type: "Buffer", position: [-1.8, 0.4, 0.4], color: "#F59E0B", floatSpeed: 0.7, floatAmplitude: 0.07, phaseOffset: 2.5 },
  { id: "filter", name: "Payload Sanitizer", type: "Parser", position: [-1.5, -0.8, -0.3], color: "#F59E0B", floatSpeed: 1.1, floatAmplitude: 0.05, phaseOffset: 0.8 },
  { id: "n8n_core", name: "n8n Core Orchestrator", type: "Engine", position: [-0.4, 0.8, 0.5], color: "#F59E0B", floatSpeed: 0.6, floatAmplitude: 0.1, phaseOffset: 3.1 },
  { id: "agent_router", name: "Agent Decision Node", type: "Router", position: [-0.2, -0.3, -0.2], color: "#10B981", floatSpeed: 1.0, floatAmplitude: 0.08, phaseOffset: 1.7 },
  { id: "claude_brain", name: "Claude 3.5 Sonnet", type: "Brain", position: [0.8, 1.2, -0.1], color: "#10B981", floatSpeed: 0.5, floatAmplitude: 0.12, phaseOffset: 4.2 },
  { id: "rag_vector", name: "Pinecone Vector RAG", type: "Index", position: [0.6, -0.2, 0.4], color: "#10B981", floatSpeed: 0.8, floatAmplitude: 0.06, phaseOffset: 0.5 },
  { id: "redis_cache", name: "Redis Memory Cache", type: "Data Store", position: [0.4, -1.3, -0.3], color: "#3B82F6", floatSpeed: 0.7, floatAmplitude: 0.08, phaseOffset: 2.1 },
  { id: "supabase_db", name: "Supabase PG Database", type: "Data Store", position: [1.3, -0.9, 0.2], color: "#3B82F6", floatSpeed: 0.9, floatAmplitude: 0.07, phaseOffset: 3.5 },
  { id: "retell_out", name: "Retell Voice Outbound", type: "Action", position: [2.2, 0.6, 0.4], color: "#EF4444", floatSpeed: 0.8, floatAmplitude: 0.09, phaseOffset: 0.2 },
  { id: "hubspot_sync", name: "HubSpot CRM Integrator", type: "Action", position: [2.0, -0.4, -0.2], color: "#EF4444", floatSpeed: 1.2, floatAmplitude: 0.05, phaseOffset: 1.9 },
  { id: "notify_out", name: "Notification Webhook", type: "Action", position: [2.8, 1.2, 0.1], color: "#EF4444", floatSpeed: 0.7, floatAmplitude: 0.1, phaseOffset: 4.8 },
  { id: "slack_notifier", name: "Slack Agent Feed", type: "Action", position: [3.0, -0.7, 0.3], color: "#EF4444", floatSpeed: 1.0, floatAmplitude: 0.08, phaseOffset: 2.8 },
];

const CONNECTIONS = [
  { from: "webhook", to: "queue", color: "#00F5D4" },
  { from: "voice_in", to: "filter", color: "#00F5D4" },
  { from: "queue", to: "n8n_core", color: "#F59E0B" },
  { from: "filter", to: "agent_router", color: "#F59E0B" },
  { from: "n8n_core", to: "agent_router", color: "#F59E0B" },
  { from: "agent_router", to: "claude_brain", color: "#10B981" },
  { from: "agent_router", to: "rag_vector", color: "#10B981" },
  { from: "claude_brain", to: "redis_cache", color: "#10B981" },
  { from: "rag_vector", to: "supabase_db", color: "#10B981" },
  { from: "supabase_db", to: "hubspot_sync", color: "#3B82F6" },
  { from: "redis_cache", to: "supabase_db", color: "#3B82F6" },
  { from: "claude_brain", to: "retell_out", color: "#10B981" },
  { from: "claude_brain", to: "notify_out", color: "#10B981" },
  { from: "hubspot_sync", to: "slack_notifier", color: "#EF4444" },
  { from: "retell_out", to: "slack_notifier", color: "#EF4444" },
  { from: "notify_out", to: "slack_notifier", color: "#EF4444" },
];

// Curved connection paths with moving data packets
function CurvedConnection({ start, end, color, nodesMap }: { start: string; end: string; color: string; nodesMap: Map<string, THREE.Vector3> }) {
  const pulseRef = useRef<THREE.Mesh>(null);
  
  const startVec = nodesMap.get(start) || new THREE.Vector3();
  const endVec = nodesMap.get(end) || new THREE.Vector3();
  
  // Create a curved Bezier path dynamically
  const curve = useMemo(() => {
    const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    const offset = new THREE.Vector3(
      (startVec.x + endVec.x) * 0.05,
      0.18 + Math.abs(startVec.y - endVec.y) * 0.12,
      (startVec.z + endVec.z) * 0.05
    );
    const controlPoint = midPoint.add(offset);
    return new THREE.QuadraticBezierCurve3(startVec, controlPoint, endVec);
  }, [startVec, endVec]);

  // Generate points to render the curve line
  const points = useMemo(() => curve.getPoints(20), [curve]);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  
  const lineObj = useMemo(() => {
    return new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x1e293b, opacity: 0.12, transparent: true })
    );
  }, [lineGeometry]);

  useFrame((state) => {
    if (pulseRef.current) {
      // Re-fetch position in case coordinates are drifting
      const currentStart = nodesMap.get(start) || new THREE.Vector3();
      const currentEnd = nodesMap.get(end) || new THREE.Vector3();
      const mid = new THREE.Vector3().addVectors(currentStart, currentEnd).multiplyScalar(0.5);
      const cPoint = mid.add(new THREE.Vector3(
        (currentStart.x + currentEnd.x) * 0.05,
        0.18 + Math.abs(currentStart.y - currentEnd.y) * 0.12,
        (currentStart.z + currentEnd.z) * 0.05
      ));
      const currentCurve = new THREE.QuadraticBezierCurve3(currentStart, cPoint, currentEnd);

      const time = state.clock.getElapsedTime();
      const speed = 0.22;
      const progress = (time * speed + (currentStart.x + currentStart.y) * 0.08) % 1.0;
      const point = currentCurve.getPointAt(progress);
      pulseRef.current.position.copy(point);
    }
  });

  return (
    <group>
      <primitive object={lineObj} />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.025, 6, 6]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Premium Obsidian-Glass Node component
function FuturisticNode({ node, driftPos }: { node: NodeData; driftPos: THREE.Vector3 }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow core rotation
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.25;
      coreRef.current.rotation.y = time * 0.3;
    }

    // Outer shell scaling & rotation
    if (outerRef.current) {
      const scale = hovered ? 1.2 : 1.0;
      outerRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z = -time * 0.15;
    }
  });

  return (
    <group position={driftPos}>
      {/* Outer Obsidian / physical reflection glass shell */}
      <mesh
        ref={outerRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshPhysicalMaterial
          color="#0b0f19" // Dark space slate
          roughness={0.2}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.4}
          ior={1.5}
          thickness={0.25}
        />
      </mesh>

      {/* Inner glowing core representing active pipelines */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.065, 1]} />
        <meshBasicMaterial color={node.color} wireframe={true} transparent opacity={0.9} />
      </mesh>

      {/* Orbiting thin ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[0.22, 0.23, 24]} />
        <meshBasicMaterial color={node.color} side={THREE.DoubleSide} transparent opacity={hovered ? 0.6 : 0.08} />
      </mesh>
    </group>
  );
}

// 3D Grid Plane (Grounded mesh)
function GroundGrid() {
  return (
    <gridHelper
      args={[16, 24, 0x0f172a, 0x070a12]}
      position={[0, -2.0, -1.0]}
      rotation={[0.15, 0, 0]}
    />
  );
}

// Background coordinate points
function BackgroundCoordinates() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 3;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.003;
      pointsRef.current.position.x = state.pointer.x * 0.06;
      pointsRef.current.position.y = state.pointer.y * 0.06;
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
        color="#64748b"
        size={0.01}
        sizeAttenuation={true}
        transparent
        opacity={0.06}
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Keep track of dynamic coordinates for Bezier updates
  const nodesMap = useMemo(() => {
    const map = new Map<string, THREE.Vector3>();
    NODES.forEach((n) => {
      map.set(n.id, new THREE.Vector3(...n.position));
    });
    return map;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Gently drift nodes on independent sine waves
    NODES.forEach((node) => {
      const vec = nodesMap.get(node.id);
      if (vec) {
        // Apply independent wave offset
        const yDrift = node.position[1] + Math.sin(time * node.floatSpeed + node.phaseOffset) * node.floatAmplitude;
        const xDrift = node.position[0] + Math.cos(time * 0.5 * node.floatSpeed + node.phaseOffset) * (node.floatAmplitude * 0.4);
        vec.set(xDrift, yDrift, node.position[2]);
      }
    });

    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y = time * 0.008;
      
      // Pointer Parallax (smoothed tilt, no sudden jumps)
      const targetY = state.pointer.x * 0.15;
      const targetX = -state.pointer.y * 0.15;
      
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 5, 4]} intensity={1.6} color="#ffffff" />
      <directionalLight position={[-4, -5, -4]} intensity={0.2} color="#334155" />
      
      <pointLight position={[0, 1, 2]} intensity={0.6} color="#f59e0b" distance={8} />

      <BackgroundCoordinates />
      <GroundGrid />

      {/* Curved connection conduits updating with drift */}
      {CONNECTIONS.map((conn, i) => (
        <CurvedConnection
          key={i}
          start={conn.from}
          end={conn.to}
          color={conn.color}
          nodesMap={nodesMap}
        />
      ))}

      {/* Nodes mapping dynamic drift */}
      {NODES.map((node) => {
        const driftPos = nodesMap.get(node.id) || new THREE.Vector3(...node.position);
        return (
          <FuturisticNode
            key={node.id}
            node={node}
            driftPos={driftPos}
          />
        );
      })}
    </group>
  );
}

// Lighter fallback for low-spec / mobile / reduced-motion
function StaticFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-8 select-none bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/20 rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02),transparent_70%)] pointer-events-none" />
      <svg viewBox="0 0 400 300" className="w-full max-w-sm h-auto relative z-10 text-slate-800">
        <path d="M 60 150 Q 130 130 160 180" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 160 180 Q 230 110 260 130" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 260 130 Q 300 200 340 165" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 160 180 Q 185 240 250 215" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 250 215 Q 310 195 340 165" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 3" />

        <circle r="3.5" fill="#00F5D4">
          <animateMotion dur="4.2s" repeatCount="indefinite" path="M 60 150 Q 130 130 160 180" />
        </circle>
        <circle r="3.5" fill="#F59E0B">
          <animateMotion dur="3.8s" repeatCount="indefinite" path="M 160 180 Q 230 110 260 130" />
        </circle>

        <g transform="translate(60, 150)">
          <circle r="8" fill="#0f172a" stroke="#00F5D4" strokeWidth="1.5" />
          <circle r="2.5" fill="#00F5D4" />
        </g>
        <g transform="translate(160, 180)">
          <circle r="8" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5" />
          <circle r="2.5" fill="#F59E0B" />
        </g>
        <g transform="translate(260, 120)">
          <circle r="8" fill="#0f172a" stroke="#10B981" strokeWidth="1.5" />
          <circle r="2.5" fill="#10B981" />
        </g>
        <g transform="translate(250, 215)">
          <circle r="8" fill="#0f172a" stroke="#3B82F6" strokeWidth="1.5" />
          <circle r="2.5" fill="#3B82F6" />
        </g>
        <g transform="translate(340, 165)">
          <circle r="8" fill="#0f172a" stroke="#EF4444" strokeWidth="1.5" />
          <circle r="2.5" fill="#EF4444" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero3DNodeGraph() {
  const isReducedOrMobile = useReducedMotionOrMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side loading / client hydration loading matches the static layout
  if (!mounted) {
    return <StaticFallback />;
  }

  if (isReducedOrMobile) {
    return <StaticFallback />;
  }

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<StaticFallback />}>
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ pointerEvents: "none" }} // Background decoration, disable user drag/zoom
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
