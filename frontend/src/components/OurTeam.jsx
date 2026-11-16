import React from "react";

const OurTeam = () => {
  const teamMembers = [
    { number: "01", name: "Emma Chen", role: "AI Research Dir.", image: "/cofounder.jpg.jpeg", description: "Leading advanced machine learning architectures and core pipelines." },
    { number: "02", name: "Marcus Rodriguez", role: "Frontend Dev.", image: "/cofounder.jpg.jpeg", description: "Building ultra-responsive, immersive user interfaces with modern web standards." },
    { number: "03", name: "Priya Sharma", role: "ML Engineer", image: "/cofounder.jpg.jpeg", description: "Optimizing deep learning models for production-grade enterprise workflows." },
    { number: "04", name: "Alex Thompson", role: "UI/UX Designer", image: "/cofounder.jpg.jpeg", description: "Crafting intuitive digital experiences focused on high user engagement." },
    { number: "05", name: "David Kim", role: "Backend Architect", image: "/cofounder.jpg.jpeg", description: "Designing resilient, scalable server-side systems and high-throughput APIs." },
    { number: "06", name: "Sarah Jenkins", role: "DevOps Specialist", image: "/cofounder.jpg.jpeg", description: "Automating cloud infrastructure, CI/CD pipelines, and robust deployment." },
    { number: "07", name: "Liam O'Connor", role: "Data Scientist", image: "/cofounder.jpg.jpeg", description: "Turning complex enterprise data sets into actionable predictive intelligence." },
    { number: "08", name: "Aisha Patel", role: "Product Manager", image: "/cofounder.jpg.jpeg", description: "Bridging technical execution with strategic vision to deliver products." },
    { number: "09", name: "Carlos Mendez", role: "Full Stack Eng.", image: "/cofounder.jpg.jpeg", description: "Delivering end-to-end application features across client and server layers." },
    { number: "10", name: "Elena Rostova", role: "AI Ethics Lead", image: "/cofounder.jpg.jpeg", description: "Ensuring responsible, transparent, and fair artificial intelligence practices." },
    { number: "11", name: "James Wilson", role: "Cloud Engineer", image: "/cofounder.jpg.jpeg", description: "Managing multi-cloud environments with high availability and fault tolerance." },
    { number: "12", name: "Zoe Wang", role: "Security Analyst", image: "/cofounder.jpg.jpeg", description: "Safeguarding core applications and networks against emerging digital threats." },
    { number: "13", name: "Lucas Vance", role: "Systems Architect", image: "/cofounder.jpg.jpeg", description: "Structuring large-scale distributed systems for maximum operational efficiency." },
    { number: "14", name: "Neha Gupta", role: "QA Lead", image: "/cofounder.jpg.jpeg", description: "Maintaining rigorous code quality through automated and exploratory testing." },
    { number: "15", name: "Ryan Murphy", role: "Mobile Developer", image: "/cofounder.jpg.jpeg", description: "Developing cross-platform native experiences with smooth performance." },
    { number: "16", name: "Hassan Al-Mansoor", role: "NLP Researcher", image: "/cofounder.jpg.jpeg", description: "Advancing natural language processing models for automated interaction." },
    { number: "17", name: "Chloe Bennett", role: "Brand Designer", image: "/cofounder.jpg.jpeg", description: "Shaping visual identity and cohesive brand guidelines across all platforms." },
    { number: "18", name: "Min-Ho Park", role: "Deep Learning Eng", image: "/cofounder.jpg.jpeg", description: "Researching neural network optimization and computer vision applications." },
    { number: "19", name: "Sophia Taylor", role: "Operations Dir.", image: "/cofounder.jpg.jpeg", description: "Streamlining company-wide engineering workflows and delivery milestones." },
  ];

  return (
    <section className="relative bg-[#f4f7f5] py-28 overflow-hidden z-0">
      
      {/* Background HD Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Very faint structural grid for an "engineering" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5eee8_1px,transparent_1px),linear-gradient(to_bottom,#e5eee8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col gap-6 border-b border-[#dce8df] pb-10 mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <span className="inline-block py-1.5 px-3 rounded-md text-emerald-800 bg-emerald-100 text-xs font-bold tracking-[0.2em] uppercase border border-emerald-200 shadow-sm">
              Our Core Team
            </span>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#0a1812] sm:text-5xl lg:text-5xl">
              Meet the industry leaders
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                shaping the future of AI.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#476158] font-medium">
            Our multi-disciplinary team brings together top-tier researchers, engineers, and designers dedicated to building tomorrow&apos;s infrastructure.
          </p>
        </div>

        {/* Compact HD Team Grid (4 Columns) */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.number}
              className="group relative bg-white rounded-3xl p-6 border border-[#dce8df] shadow-[0_5px_15px_rgba(16,35,27,0.03)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(16,185,129,0.15)] hover:border-emerald-300 transform-gpu cursor-pointer flex flex-col"
            >
              {/* Internal Dynamic Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header: Photo & Info */}
                <div className="flex items-center gap-4 mb-4">
                  {/* 3D Popping Image */}
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#dce8df] shadow-sm flex-shrink-0 group-hover:border-emerald-500 group-hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-[15px] font-bold tracking-tight text-[#0a1812] group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-black tracking-widest text-emerald-600 uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#52635D] font-medium transition-colors duration-300 group-hover:text-[#2d4239] mt-2 flex-grow">
                  {member.description}
                </p>

                {/* Bottom Interactive Arrow (Appears on Hover) */}
                <div className="mt-4 flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-sm">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;