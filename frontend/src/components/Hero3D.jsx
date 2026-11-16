import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// --- 1. Clean Wireframe Globe (Original setup you liked) ---
const WireframeGlobe = () => {
  const globeRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = time * 0.08;
      globeRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    }
  });

  return (
    <group position={[3.5, 0, -2]}>
      {/* Outer Wireframe Sphere / Globe */}
      <mesh ref={globeRef}>
        <icosahedronGeometry args={[3.2, 3]} />
        <meshBasicMaterial 
          color="#34D399" 
          wireframe={true} 
          transparent={true} 
          opacity={0.22} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial 
          color="#059669" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// --- 2. Particle Wave with Subtle Pulsing Nodes ---
const DenseParticleWave = () => {
  const groupRef = useRef();

  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3200; i++) {
      const x = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 20;
      const isCube = Math.random() < 0.5;

      // Make a small percentage of particles act as special "glowing data nodes"
      const isSpecialNode = Math.random() < 0.05;

      const scaleSize = isSpecialNode ? Math.random() * 0.05 + 0.02 : Math.random() * 0.03 + 0.006;
      const color = isSpecialNode ? "#A7F3D0" : (Math.random() < 0.2 ? "#ffffff" : "#34D399");
      const yOffset = (Math.random() - 0.5) * 8;

      items.push({
        baseX: x,
        baseYOffset: yOffset,
        baseZ: z,
        scale: scaleSize,
        color,
        isCube,
        isSpecialNode,
        speed: Math.random() * 0.7 + 0.2,
        rotSpeedX: Math.random() * 2 - 1,
        rotSpeedY: Math.random() * 2 - 1,
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.children.forEach((mesh, index) => {
      const item = particles[index];
      let currentX = item.baseX + time * item.speed;
      currentX = ((currentX + 22.5) % 45) - 22.5;

      const wave1 = Math.sin(currentX * 0.25 + time * 0.6) * 0.85;
      const wave2 = Math.cos(item.baseZ * 0.2 + time * 0.4) * 0.4;

      mesh.position.x = currentX;
      mesh.position.y = wave1 + wave2 + item.baseYOffset; 
      mesh.position.z = item.baseZ;

      mesh.rotation.x = time * item.rotSpeedX;
      mesh.rotation.y = time * item.rotSpeedY;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, index) => (
        <mesh key={index} scale={p.scale}>
          {p.isCube ? <boxGeometry args={[1, 1, 1]} /> : <sphereGeometry args={[1, 8, 8]} />}
          <meshBasicMaterial 
            color={p.color} 
            transparent 
            opacity={p.isSpecialNode ? 0.85 : 0.58} 
            wireframe={p.isCube} 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

// --- Main Canvas Component ---
const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#031A0F] pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1} />
        <WireframeGlobe />
        <DenseParticleWave />
      </Canvas>

      {/* Cinematic Lighting Adjustments */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1300px] h-[750px] bg-gradient-to-t from-emerald-500/25 via-teal-500/10 to-transparent blur-[100px] rounded-t-[100%] opacity-90 pointer-events-none" />
    </div>
  );
};

export default Hero3D;