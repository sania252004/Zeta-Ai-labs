import React from "react";

const TechStrip = () => {
  const technologies = [
    "ARTIFICIAL INTELLIGENCE",
    "MACHINE LEARNING",
    "WEB DEVELOPMENT",
    "MOBILE APPLICATIONS",
    "SOFTWARE DEVELOPMENT",
    "CLOUD SOLUTIONS",
  ];

  return (
    <section className="bg-[#f7f8f5] py-20 px-6 lg:px-12 relative overflow-hidden border-t border-[#dce8df]">
      
      {/* --- ADVANCED BACKGROUND ANIMATION LAYER (Matching Zeta Theme) --- */}
      <div className="absolute top-1/2 left-10 w-[380px] h-[380px] bg-emerald-400/15 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />

      {/* Subtle Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10231b04_1px,transparent_1px),linear-gradient(to_bottom,#10231b04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Animated Section Label */}
          <div className="shrink-0">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
              Our Expertise
            </span>
          </div>

          {/* Floating Interactive Technology Badges */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:justify-end">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="group px-4 py-2.5 rounded-xl bg-white/80 border border-[#d3e2d7] backdrop-blur-md shadow-xs hover:shadow-lg hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle internal badge glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="text-xs font-bold tracking-wider font-mono text-[#244238] group-hover:text-emerald-700 transition-colors relative z-10">
                  {technology}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Orbs Keyframes */}
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStrip;