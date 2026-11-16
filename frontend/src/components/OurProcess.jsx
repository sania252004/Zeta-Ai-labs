import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description: "We audit your data, define success metrics, and map the architecture before writing a line of code.",
    bgCard: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white",
    borderHover: "border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-500/25",
    badgeColor: "bg-emerald-200 text-emerald-900 border-emerald-400 font-bold",
    iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
    glowColor: "bg-emerald-400/30",
    delay: "0.1s",
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "System design, tech stack selection, data model, and API contracts - all documented and reviewed with your team.",
    bgCard: "bg-gradient-to-br from-blue-100/90 via-blue-50/50 to-white",
    borderHover: "border-blue-300 hover:border-blue-500 hover:shadow-blue-500/25",
    badgeColor: "bg-blue-200 text-blue-900 border-blue-400 font-bold",
    iconHover: "group-hover:bg-blue-600 group-hover:text-white",
    glowColor: "bg-blue-400/30",
    delay: "0.2s",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description: "Agile sprints with weekly demos, ML model development, integration, and testing with full visibility.",
    bgCard: "bg-gradient-to-br from-amber-100/90 via-amber-50/50 to-white",
    borderHover: "border-amber-300 hover:border-amber-500 hover:shadow-amber-500/25",
    badgeColor: "bg-amber-200 text-amber-900 border-amber-400 font-bold",
    iconHover: "group-hover:bg-amber-600 group-hover:text-white",
    glowColor: "bg-amber-400/30",
    delay: "0.3s",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description: "Production deployment, MLOps setup, monitoring, and ongoing support. You own the code and architecture.",
    bgCard: "bg-gradient-to-br from-purple-100/90 via-purple-50/50 to-white",
    borderHover: "border-purple-300 hover:border-purple-500 hover:shadow-purple-500/25",
    badgeColor: "bg-purple-200 text-purple-900 border-purple-400 font-bold",
    iconHover: "group-hover:bg-purple-600 group-hover:text-white",
    glowColor: "bg-purple-400/30",
    delay: "0.4s",
  },
];

const OurProcess = () => {
  return (
    <section id="our-mission" className="relative bg-[#f7f8f5] py-28 px-6 lg:px-12 overflow-hidden text-[#10231b] border-t border-[#dce8df]">
      
      {/* Background Animated Floating Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-20">
        
        {/* Our Mission Section */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
              Our Mission
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] text-[#0a1812]">
              Making serious technology & applied AI accessible to{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                growing businesses.
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#3b5249] font-normal pt-2">
              Our mission is to make serious technology, full-stack engineering and applied AI, accessible to growing businesses, not just enterprises with dedicated data and platform teams.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#3b5249] font-normal">
              We believe good software should be judged the same way as good business: by the outcomes it produces, not the complexity it hides behind. Every engagement is built around exactness, clear reporting, and a straightforward answer to one question: is this working for the client?
            </p>
          </div>
        </div>

        {/* Header Section for Process */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Our Process
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#0a1812]">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Production Delivery
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#3b5249]">
            No black-box delivery. You know exactly where we are and what&apos;s coming next.
          </p>
        </div>

        {/* Timeline Track Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((item) => (
            <div
              key={item.title}
              style={{ animationDelay: item.delay }}
              className={`group rounded-2xl border ${item.bgCard} ${item.borderHover} backdrop-blur-md p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between opacity-0 animate-[popIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] shadow-sm`}
            >
              {/* Dynamic Card Glow Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.glowColor} rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none`} />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border shadow-xs ${item.badgeColor}`}>
                    {item.number}
                  </span>
                  <div className={`w-9 h-9 rounded-full bg-white/90 border border-slate-300 flex items-center justify-center text-slate-800 transition-all duration-300 ${item.iconHover} shadow-xs`}>
                    <span className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0a1812] mb-2 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#3b5249] text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative color bar */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
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

export default OurProcess;