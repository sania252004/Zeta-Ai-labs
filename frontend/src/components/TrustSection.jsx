import React from "react";

export default function TrustAndExpertiseSection() {
  const clients = [
    "360° INSIGHTS",
    "myka",
    "LEDGR",
    "WARGAMING.NET",
    "ASSOCIATES",
  ];

  return (
    <section className="bg-[#f7f8f5] text-[#10231b] py-20 px-6 lg:px-12 relative overflow-hidden border-t border-[#dce8df]">
      
      {/* --- HIGH-ENERGY DYNAMIC BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-emerald-400/30 rounded-full blur-[140px] pointer-events-none animate-[floatOrb1_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-teal-400/25 rounded-full blur-[160px] pointer-events-none animate-[floatOrb2_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-cyan-400/25 rounded-full blur-[150px] pointer-events-none animate-[floatOrb1_10s_ease-in-out_infinite]" />

      {/* Animated Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10231b0a_1px,transparent_1px),linear-gradient(to_bottom,#10231b0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none animate-[gridPulse_4s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl w-full relative z-10 space-y-16">

        {/* Client Logo / Partner Banner */}
        <div>
          <p className="text-left text-xs uppercase tracking-[0.25em] text-[#476158] mb-6 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
            Trusted by Innovative Companies Globally
          </p>

          <div className="flex flex-wrap justify-start items-center gap-4">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-white/90 border border-[#d3e2d7] backdrop-blur-md shadow-xs hover:shadow-lg hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="text-xs sm:text-sm font-extrabold tracking-wider font-mono text-[#1a382e] group-hover:text-emerald-700 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership / Vision Quote Section with Frosted Card & Glowing Backlight */}
        <div className="max-w-5xl relative">
          <div className="absolute -left-6 -top-12 text-emerald-300/30 text-[11rem] font-serif select-none pointer-events-none leading-none">
            “
          </div>

          <div className="relative z-10 bg-white/60 backdrop-blur-md border border-white/90 rounded-3xl p-8 sm:p-10 shadow-xl shadow-emerald-950/5 border-l-4 border-l-emerald-600">
            <blockquote className="text-xl sm:text-3xl font-light leading-relaxed text-[#0a1812] mb-8 tracking-tight">
              Most companies don't lack data, they lack the infrastructure and expertise to act on it. That's the gap we've been closing for years.
            </blockquote>
            
            <div className="flex flex-wrap items-center gap-6">
              {/* LARGER IMAGE WITH PULSING LUMINOUS BACKLIGHT EFFECT */}
              <div className="relative shrink-0 group">
                <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="/Cofounder.jpeg" 
                    alt="Chaitanya Rana" 
                    className="w-full h-full object-cover object-center block transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Information Stack */}
              <div className="space-y-1.5">
                <h4 className="font-extrabold text-xl md:text-2xl text-[#0a1812] tracking-tight">
                  Chaitanya Rana
                </h4>
                <div className="inline-block bg-emerald-100/90 border border-emerald-200 px-3 py-1 rounded-full shadow-2xs">
                  <p className="text-xs sm:text-sm text-emerald-900 font-bold uppercase tracking-wider">
                    Co-Founder & CEO at Zeta AI Labs Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Keyframes for Enhanced Background Animations */}
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.15); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-60px, 40px) scale(1.2); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}