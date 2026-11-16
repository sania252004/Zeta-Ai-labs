 import React from "react";

const WhyZeta = () => {
  const strengths = [
    {
      number: "01",
      title: "Innovation First",
      description:
        "We use modern technologies and practical thinking to create solutions that solve real business problems.",
      bgCard: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white",
      borderHover: "border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-500/25",
      headingColor: "text-emerald-700 group-hover:text-emerald-800",
      badgeColor: "bg-emerald-200 text-emerald-900 border-emerald-400 font-bold",
      iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
      glowColor: "bg-emerald-400/30",
      delay: "0.1s",
    },
    {
      number: "02",
      title: "Built to Scale",
      description:
        "Our solutions are designed with scalability, maintainability, and long-term growth in mind.",
      bgCard: "bg-gradient-to-br from-blue-100/90 via-blue-50/50 to-white",
      borderHover: "border-blue-300 hover:border-blue-500 hover:shadow-blue-500/25",
      headingColor: "text-blue-700 group-hover:text-blue-800",
      badgeColor: "bg-blue-200 text-blue-900 border-blue-400 font-bold",
      iconHover: "group-hover:bg-blue-600 group-hover:text-white",
      glowColor: "bg-blue-400/30",
      delay: "0.2s",
    },
    {
      number: "03",
      title: "Business Focused",
      description:
        "We focus on outcomes, not just technology, aligning every solution with the needs of the business.",
      bgCard: "bg-gradient-to-br from-amber-100/90 via-amber-50/50 to-white",
      borderHover: "border-amber-300 hover:border-amber-500 hover:shadow-amber-500/25",
      headingColor: "text-amber-700 group-hover:text-amber-800",
      badgeColor: "bg-amber-200 text-amber-900 border-amber-400 font-bold",
      iconHover: "group-hover:bg-amber-600 group-hover:text-white",
      glowColor: "bg-amber-400/30",
      delay: "0.3s",
    },
    {
      number: "04",
      title: "Future Ready",
      description:
        "We embrace emerging technologies to help businesses prepare for what comes next.",
      bgCard: "bg-gradient-to-br from-purple-100/90 via-purple-50/50 to-white",
      borderHover: "border-purple-300 hover:border-purple-500 hover:shadow-purple-500/25",
      headingColor: "text-purple-700 group-hover:text-purple-800",
      badgeColor: "bg-purple-200 text-purple-900 border-purple-400 font-bold",
      iconHover: "group-hover:bg-purple-600 group-hover:text-white",
      glowColor: "bg-purple-400/30",
      delay: "0.4s",
    },
  ];

  return (
    <section id="about" className="relative bg-[#f7f8f5] py-28 px-6 lg:px-12 overflow-hidden text-[#10231b] border-t border-[#dce8df]">
      
      {/* Enhanced Animated Floating Background Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl w-full relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
              Why Zeta
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0a1812]">
              More than technology. <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                We build possibilities.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="relative pl-4 border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50/80 to-white p-4 rounded-r-xl shadow-sm border border-emerald-100/80">
              <p className="text-[#233830] text-sm sm:text-base leading-relaxed font-normal">
                Our approach combines technology, creativity, and engineering discipline to deliver digital products that are built for meaningful results.
              </p>
            </div>
          </div>
        </div>

        {/* Distinctly Colored & Animated Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              style={{ animationDelay: strength.delay }}
              className={`group rounded-2xl border border-slate-200 ${strength.bgCard} ${strength.borderHover} p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between opacity-0 animate-[popIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] shadow-sm`}
            >
              {/* Card Background Glow Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${strength.glowColor} rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none`} />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border shadow-xs ${strength.badgeColor}`}>
                    {strength.number}
                  </span>
                  <div className={`w-9 h-9 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-300 ${strength.iconHover} shadow-sm`}>
                    <span className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </div>

                <h3 className={`text-lg font-bold ${strength.headingColor} mb-2 transition-colors`}>
                  {strength.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {strength.description}
                </p>
              </div>

              {/* Bottom decorative color bar */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </div>
          ))}
        </div>

      </div>

      {/* Custom Animations Keyframes */}
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatOrb1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(30px, -40px) scale(1.1);
          }
        }
        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-40px, 30px) scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyZeta;