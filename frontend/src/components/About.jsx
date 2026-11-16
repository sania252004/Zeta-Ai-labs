import React from "react";

const About = () => {
  const results = [
    {
      value: "60+",
      label: "Successful Projects",
      description: "Delivered across e-commerce, healthcare, logistics, education, hospitality, travel, and enterprise operations.",
      accentColor: "from-emerald-500 to-teal-500",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    },
    {
      value: "10+",
      label: "Industries Served",
      description: "Bridging the gap for independent brands and established international organizations alike.",
      accentColor: "from-blue-500 to-indigo-500",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      value: "100%",
      label: "Accountable Delivery",
      description: "Solid architecture and applied intelligence—avoiding superficial interfaces or unscaled models.",
      accentColor: "from-purple-500 to-fuchsia-500",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#10231b] pt-32 pb-28 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-16">
        
        {/* Header & Main Content */}
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            About Us
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0a1812]">
            Building production-grade AI & data systems{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              that scale.
            </span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#3b5249] font-medium pt-4 text-left sm:text-center">
            <p>
              <strong className="text-[#0a1812] font-bold">Zeta AI Labs Private Limited</strong> is a Government of India registered technology company, recognized under <strong>Startup India</strong> and <strong>Startup Odisha</strong>, built on one operating principle: a client’s growth is the only real measure of our success.
            </p>
            <p>
              Headquartered in Bhubaneswar, Odisha, our team has delivered <strong>60+ projects across 10+ industries</strong>, including e-commerce, healthcare, logistics, education, hospitality, travel, and enterprise operations, for independent brands and established international organizations alike.
            </p>
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#d5e2d9] shadow-sm text-left">
              <p className="text-[#2a3d35] italic">
                &ldquo;We deliberately avoid two failure modes common in this industry: agencies that ship beautiful interfaces with no engineering underneath, and AI vendors that ship impressive models with no path to production. Zeta AI Labs exists to close that gap: solid architecture, applied intelligence, and delivery you can hold us accountable to.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Stats / Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className={`group relative bg-white/85 backdrop-blur-md rounded-2xl p-7 border border-[#d5e2d9] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400 ${result.glowColor} shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border shadow-xs ${result.badgeColor}`}>
                    {result.label}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${result.accentColor} text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    ✓
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#0a1812] mb-3">
                  {result.value}
                </div>

                <p className="text-[#3b5249] text-xs sm:text-sm leading-relaxed font-medium">
                  {result.description}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className={`w-full h-1 bg-gradient-to-r ${result.accentColor} mt-6 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;