import React from "react";

const CompanyOverview = () => {
  return (
    <div className="min-h-screen bg-[#031A0F] text-slate-200 pt-32 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Badge & Title */}
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-800 px-3.5 py-1.5 rounded-full inline-block">
            Company Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-emerald-400">Zeta AI Labs</span>
          </h1>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#062c1d]/60 border border-emerald-900/50 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-white">
            Zeta AI Labs Private Limited is a Government of India registered technology company, recognized under Startup India and Startup Odisha, built on one operating principle: a client’s growth is the only real measure of our success.
          </p>

          <p>
            Headquartered in Bhubaneswar, Odisha, our team has delivered <strong className="text-white">350+ projects across 10+ industries</strong>, including e-commerce, healthcare, logistics, education, hospitality, travel, and enterprise operations, for independent brands and established international organizations alike.
          </p>

          <div className="border-l-4 border-emerald-500 pl-6 my-6 py-3 italic text-emerald-100/90 bg-emerald-950/40 rounded-r-xl text-sm sm:text-base">
            "We deliberately avoid two failure modes common in this industry: agencies that ship beautiful interfaces with no engineering underneath, and AI vendors that ship impressive models with no path to production."
          </div>

          <p className="font-medium text-white">
            Zeta AI Labs exists to close that gap: solid architecture, applied intelligence, and delivery you can hold us accountable to.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CompanyOverview;