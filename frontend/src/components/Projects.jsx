import React from "react";

const Projects = () => {
  const portfolioData = [
    {
      category: "Websites",
      description: "Custom web development and design engagements.",
      items: [
        { name: "Dots & Commas", url: "https://dotsandcommas.in/" },
        { name: "Shaklee", url: "https://us.shaklee.com/" },
        { name: "Cricket Merchant", url: "https://www.cricketmerchant.com/" },
        { name: "SKT Petri", url: "https://www.sktpetri.com/" },
        { name: "Utravel", url: "http://utravel.ae/en/" },
        { name: "Blok", url: "https://blokdesign.com.au/" },
        { name: "Elitify", url: "https://elitify.com/" },
        { name: "Sparsh Hospitals", url: "http://sparshhospitals.com/" },
        { name: "Cote", url: "https://www.cote.co.uk/" },
        { name: "Overstock", url: "https://www.overstock.com/" },
        { name: "PT Health", url: "https://www.pthealth.ca/" },
        { name: "St John's University", url: "http://www.stjohns.edu" },
        { name: "The Creative Circle", url: "http://www.creativecircle.com/" },
        { name: "Aza Fashions", url: "https://www.azafashions.com/" },
      ]
    },
    {
      category: "Work in Logistics",
      description: "Supply chain, tracking, and logistics platform builds.",
      items: [
        { name: "OM Logistics", url: "https://omlogistics.co.in/" },
        { name: "CEVA Logistics", url: "https://www.cevalogistics.com/" },
        { name: "Parcel Express Jamaica", url: "https://parcelexpressja.com/" }
      ]
    },
    {
      category: "React / Node.js Portfolio",
      description: "Built by our internal development team with specialized stacks.",
      items: [
        { name: "Advanced Healthcare Resources", url: "https://www.advancedhealthcareresources.com/", stack: "SlickJS, React JS, Node4, Apache Server" },
        { name: "PetsWorld", url: "https://www.petsworld.in/", stack: "Magento, RequireJS, React JS, PHP" },
        { name: "Illusions Bridal", url: "https://www.illusionsbridal.com/", stack: "CodeIgniter, CoreJS, Node4, Apache" },
        { name: "Angi", url: "https://www.angi.com/", stack: "WordPress, Next.js, PHP, Java EE, React, CoreJS" },
        { name: "Wildberries", url: "https://wildberries.ru/", stack: "ASP, UnderscoreJS, BasketJS, CoreJS, React" },
        { name: "Cotswold Labels", url: "https://cotswoldlabels.co.uk/", stack: "WordPress, SlickJS, Node4, Apache" }
      ]
    },
    {
      category: "Magento & E-Commerce",
      description: "Robust e-commerce platforms and shopping infrastructures.",
      items: [
        { name: "Parts4LCD", url: "https://parts4lcd.com/" },
        { name: "Pooja Ratele", url: "https://poojaratele.com/" },
        { name: "My Easy Papers", url: "https://myeasypapers.com/" },
        { name: "Organiq", url: "https://www.organiq.ca/" }
      ]
    }
  ];

  const internalSystems = [
    "Sage Intacct ERP",
    "McNroe ERP",
    "TrafikSol CRM — CRMView",
    "TrafikSol DPR — DPRFirst",
    "Emerson Electric Field Service System",
    "MicroPrecision WIKA Fabrication System (Microsoft Dynamics)",
    "Toll Management System (Indian regulatory rules)",
    "Parking Management System",
    "Building Management System"
  ];

  const digitalMarketingClients = [
    "Defileaps Consulting Pvt. Ltd.",
    "Altis Business Solutions Pvt. Ltd.",
    "Aarogya Clinics — Dr. Sharad Gupta",
    "Salasar Gems (Gemswisdom)",
    "Balaji Physiotherapy Clinics — Dr. Sunil Rai",
    "GenRock Learning",
    "GenRock India Band"
  ];

  // Vibrant chikmik multi-colored themes for individual boxes
  const chikmikThemes = [
    {
      bg: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50",
      border: "border-emerald-400 hover:border-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.25)]",
      badge: "bg-emerald-200 text-emerald-900 border-emerald-400",
      btn: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-400/50",
      text: "text-emerald-950"
    },
    {
      bg: "bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-50",
      border: "border-cyan-400 hover:border-cyan-600 shadow-[0_4px_20px_rgba(6,182,212,0.25)]",
      badge: "bg-cyan-200 text-cyan-900 border-cyan-400",
      btn: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-400/50",
      text: "text-cyan-950"
    },
    {
      bg: "bg-gradient-to-br from-fuchsia-100 via-pink-50 to-purple-50",
      border: "border-fuchsia-400 hover:border-fuchsia-600 shadow-[0_4px_20px_rgba(217,70,239,0.25)]",
      badge: "bg-fuchsia-200 text-fuchsia-900 border-fuchsia-400",
      btn: "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-fuchsia-400/50",
      text: "text-fuchsia-950"
    },
    {
      bg: "bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50",
      border: "border-amber-400 hover:border-amber-600 shadow-[0_4px_20px_rgba(245,158,11,0.25)]",
      badge: "bg-amber-200 text-amber-900 border-amber-400",
      btn: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-400/50",
      text: "text-amber-950"
    },
    {
      bg: "bg-gradient-to-br from-violet-100 via-indigo-50 to-purple-50",
      border: "border-violet-400 hover:border-violet-600 shadow-[0_4px_20px_rgba(139,92,246,0.25)]",
      badge: "bg-violet-200 text-violet-900 border-violet-400",
      btn: "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-violet-400/50",
      text: "text-violet-950"
    },
    {
      bg: "bg-gradient-to-br from-rose-100 via-red-50 to-pink-50",
      border: "border-rose-400 hover:border-rose-600 shadow-[0_4px_20px_rgba(244,63,94,0.25)]",
      badge: "bg-rose-200 text-rose-900 border-rose-400",
      btn: "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-rose-400/50",
      text: "text-rose-950"
    }
  ];

  return (
    <div className="relative min-h-screen text-slate-900 pt-28 pb-20 px-6 lg:px-12 overflow-hidden">
      
      {/* CSS for Smooth Top-to-Bottom Moving Chikmik Wave Gradient Animation */}
      <style>{`
        @keyframes chikmikWaveVertical {
          0% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 50% 0%;
          }
        }
        .chikmik-animated-bg {
          background: linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 25%, #fae8ff 50%, #fef3c7 75%, #fbcfe8 100%);
          background-size: 200% 400%;
          animation: chikmikWaveVertical 8s ease-in-out infinite;
        }
      `}</style>

      {/* Smooth Animated Chikmik Background Wave Layer */}
      <div className="absolute inset-0 chikmik-animated-bg pointer-events-none" />

      {/* Glowing Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-400/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-400/25 rounded-full blur-[160px] pointer-events-none animate-ping duration-1000" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-emerald-800 uppercase bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-300 shadow-md">
            Our Portfolio
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-[#0a1812] tracking-tight">
            Every Project, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-fuchsia-600 to-cyan-600">Listed Honestly.</span>
          </h1>
          <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-medium">
            Sixty-plus builds across websites, logistics, enterprise systems, mobile apps, and digital marketing — real names, real links, no filler.
          </p>
        </div>

        {/* Categories with Distinctly Colored, Animated Chikmik Cards */}
        {portfolioData.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <div className="border-b border-slate-300/80 pb-3 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#0a1812] tracking-wide">{section.category}</h2>
                <p className="text-sm text-slate-700 font-semibold">{section.description}</p>
              </div>
              <span className="text-xs font-mono bg-white/90 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-300 font-bold shadow-sm">
                {section.items.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((proj, pIdx) => {
                const theme = chikmikThemes[pIdx % chikmikThemes.length];
                return (
                  <a
                    key={pIdx}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-md ${theme.bg} ${theme.border}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-black text-base tracking-wide ${theme.text}`}>
                          {proj.name}
                        </span>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:scale-125 transition-all duration-300 text-xs shadow-md font-bold ${theme.btn}`}>
                          ↗
                        </div>
                      </div>
                      {proj.stack && (
                        <p className={`text-xs px-2.5 py-1 rounded-md border inline-block mb-3 font-mono font-bold ${theme.badge}`}>
                          Stack: {proj.stack}
                        </p>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-600 font-mono truncate mt-3 transition-colors border-t border-slate-300/60 pt-2 flex items-center justify-between font-semibold">
                      <span>{proj.url}</span>
                      <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity text-emerald-700">Visit →</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}

        {/* Internal / Enterprise Systems */}
        <div className="space-y-6 pt-8 border-t border-slate-300">
          <div className="border-b border-slate-300 pb-3">
            <h2 className="text-2xl font-black text-[#0a1812]">Desktop / Enterprise Applications</h2>
            <p className="text-sm text-slate-700 font-semibold">Internal systems built for enterprise clients — private deployments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {internalSystems.map((sys, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-emerald-100 to-cyan-100 border-2 border-emerald-300 shadow-md flex items-center space-x-3 hover:border-emerald-500 hover:shadow-lg transition-all">
                <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping shadow-[0_0_10px_#10b981] flex-shrink-0"></div>
                <span className="text-sm font-bold text-slate-900">{sys}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Clients */}
        <div className="space-y-6 pt-8 border-t border-slate-300">
          <div className="border-b border-slate-300 pb-3">
            <h2 className="text-2xl font-black text-[#0a1812]">Digital Marketing Engagements</h2>
            <p className="text-sm text-slate-700 font-semibold">Client marketing campaigns and growth partnerships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {digitalMarketingClients.map((client, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-fuchsia-100 to-pink-100 border-2 border-fuchsia-300 shadow-md flex items-center space-x-3 hover:border-fuchsia-500 hover:shadow-lg transition-all">
                <div className="w-3 h-3 rounded-full bg-fuchsia-600 shadow-[0_0_10px_#d946ef] flex-shrink-0"></div>
                <span className="text-sm font-bold text-slate-900">{client}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

 // placeholder fix
export default Projects;