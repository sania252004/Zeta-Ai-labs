import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- 1. Neural Plexus & Quantum Rings Animation ---
const NeuralPlexus = () => {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  // Generate floating neural nodes
  const nodes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 120; i++) {
      items.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
        speed: Math.random() * 0.5 + 0.5,
        offset: Math.random() * Math.PI,
        scale: Math.random() * 0.04 + 0.015,
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.15;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.18;
      ring2Ref.current.rotation.z = time * 0.12;
    }
  });

  return (
    <group position={[2.8, 0, -1]} ref={groupRef}>
      {/* Outer Rotating Quantum Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#34D399" transparent opacity={0.4} />
      </mesh>

      {/* Inner Rotating Tech Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.4, 0.03, 16, 80]} />
        <meshBasicMaterial color="#059669" transparent opacity={0.6} />
      </mesh>

      {/* Central AI Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshBasicMaterial color="#059669" wireframe={true} transparent opacity={0.25} />
      </mesh>

      {/* Floating Neural Nodes / Data Points */}
      {nodes.map((node, index) => (
        <mesh 
          key={index} 
          position={[
            node.position.x + Math.sin(state => state.clock.getElapsedTime() * node.speed + node.offset) * 0.2,
            node.position.y,
            node.position.z
          ]} 
          scale={node.scale}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#ffffff" : "#34D399"} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

// --- 2. Hero3D Canvas Wrapper ---
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
        <NeuralPlexus />
      </Canvas>

      {/* Atmospheric lighting highlights */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 75% 40%, rgba(52,211,153,0.15), transparent 50%)",
        }}
      />
    </div>
  );
};

// --- 3. Main Hero Section Component ---
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#063B20] text-white flex flex-col justify-between pt-24">
      
      {/* Background 3D Layer Component */}
      <div className="absolute top-0 bottom-20 right-0 w-1/2 pointer-events-none z-0 opacity-70 overflow-hidden">
        <Hero3D />
      </div>

      {/* Main Hero Grid Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: Headline & Copy */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="opacity-0 translate-y-6 animate-[cinematicFade_1s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] will-change-[opacity,transform]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-2">
              Zeta AI Labs
            </p>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">
              Your Engineering Partner <br />
              <span className="text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.35)]">
                Across Every Layer
              </span> <br />
              of the Digital Stack.
            </h1>
          </div>

          <div className="opacity-0 translate-y-6 animate-[cinematicFade_1s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards] will-change-[opacity,transform] space-y-6">
            <p className="text-lg text-gray-200 max-w-xl font-light leading-relaxed drop-shadow-sm">
              Zeta AI Labs designs and builds websites, mobile apps, enterprise systems, and AI-driven products, engineered end-to-end by one accountable team, from first sketch to production support.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="projects" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-xl shadow-emerald-950/60"
              >
                See Projects &rarr;
              </a>
              <a 
                href="#contact" 
                className="border border-white/20 hover:border-emerald-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-md bg-white/5 shadow-lg"
              >
                Start Your Project
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Capabilities Card) */}
        <div className="lg:col-span-5 w-full opacity-0 translate-y-10 animate-[cinematicSlide_1.2s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards] will-change-[opacity,transform]">
          <div className="bg-black/40 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl p-6 lg:p-8 shadow-2xl space-y-6 transition-all duration-500 hover:border-emerald-400/50">
            
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              Core Capabilities
            </span>

            <div className="border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300 font-light">Applied AI and custom software excellence</span>
            </div>

            <div className="border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300 font-light">Intelligent solutions delivered globally</span>
            </div>

            <div className="pb-2">
              <span className="text-sm text-gray-300 font-light">Scalable architecture and dedicated engineering</span>
            </div>

            <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between">
              <div className="flex text-amber-400 text-sm tracking-widest">★★★★★</div>
              <span className="text-xs text-emerald-200 font-medium">Top AI & Tech Lab Partner</span>
            </div>

          </div>
        </div>

      </div>

      {/* INFINITE ANIMATED TICKER BAR */}
      <div className="relative z-10 w-full overflow-hidden border-t border-emerald-500/20 bg-black/40 backdrop-blur-md py-4 mt-16">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-emerald-400 font-medium tracking-widest text-xs uppercase">
          <div className="flex items-center gap-12 shrink-0">
            <span>Artificial Intelligence</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Machine Learning Pipelines</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Production-Grade MLOps</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Custom Software Architecture</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Generative AI Solutions</span>
            <span className="text-emerald-500/50">✦</span>
          </div>
          <div className="flex items-center gap-12 shrink-0" aria-hidden="true">
            <span>Artificial Intelligence</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Machine Learning Pipelines</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Production-Grade MLOps</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Custom Software Architecture</span>
            <span className="text-emerald-500/50">✦</span>
            <span>Generative AI Solutions</span>
            <span className="text-emerald-500/50">✦</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cinematicFade {
          0% { opacity: 0; transform: translateY(24px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cinematicSlide {
          0% { opacity: 0; transform: translateY(40px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default Hero;