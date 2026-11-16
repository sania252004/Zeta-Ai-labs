 import React from "react";
import { useNavigate } from "react-router-dom";

const Technologies = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      id: "website-web-development",
      number: "01",
      title: "Website & Web Application Development",
      description: "Custom-engineered, performance-first builds, not templated output.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white",
      borderHover: "border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-500/25",
      headingColor: "text-emerald-700 group-hover:text-emerald-800",
      badgeColor: "bg-emerald-200 text-emerald-900 border-emerald-400 font-bold",
      iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
      glowColor: "bg-emerald-400/30",
      delay: "0.1s",
    },
    {
      id: "react-nodejs-engineering",
      number: "02",
      title: "React / Node.js Engineering",
      description: "Modern JavaScript architecture for products that need to scale.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-blue-100/90 via-blue-50/50 to-white",
      borderHover: "border-blue-300 hover:border-blue-500 hover:shadow-blue-500/25",
      headingColor: "text-blue-700 group-hover:text-blue-800",
      badgeColor: "bg-blue-200 text-blue-900 border-blue-400 font-bold",
      iconHover: "group-hover:bg-blue-600 group-hover:text-white",
      glowColor: "bg-blue-400/30",
      delay: "0.2s",
    },
    {
      id: "mobile-application-development",
      number: "03",
      title: "Mobile Application Development",
      description: "Native and cross-platform apps shipped to real app stores, with real users.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-amber-100/90 via-amber-50/50 to-white",
      borderHover: "border-amber-300 hover:border-amber-500 hover:shadow-amber-500/25",
      headingColor: "text-amber-700 group-hover:text-amber-800",
      badgeColor: "bg-amber-200 text-amber-900 border-amber-400 font-bold",
      iconHover: "group-hover:bg-amber-600 group-hover:text-white",
      glowColor: "bg-amber-400/30",
      delay: "0.3s",
    },
    {
      id: "enterprise-erp-crm",
      number: "04",
      title: "Enterprise Applications, ERP & CRM",
      description: "Systems that run operations, not just dashboards that look good in a demo.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-purple-100/90 via-purple-50/50 to-white",
      borderHover: "border-purple-300 hover:border-purple-500 hover:shadow-purple-500/25",
      headingColor: "text-purple-700 group-hover:text-purple-800",
      badgeColor: "bg-purple-200 text-purple-900 border-purple-400 font-bold",
      iconHover: "group-hover:bg-purple-600 group-hover:text-white",
      glowColor: "bg-purple-400/30",
      delay: "0.4s",
    },
    {
      id: "magento-ecommerce-development",
      number: "05",
      title: "Magento & E-commerce Development",
      description: "Storefronts engineered for conversion, not just checkout.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-teal-100/90 via-teal-50/50 to-white",
      borderHover: "border-teal-300 hover:border-teal-500 hover:shadow-teal-500/25",
      headingColor: "text-teal-700 group-hover:text-teal-800",
      badgeColor: "bg-teal-200 text-teal-900 border-teal-400 font-bold",
      iconHover: "group-hover:bg-teal-600 group-hover:text-white",
      glowColor: "bg-teal-400/30",
      delay: "0.5s",
    },
    {
      id: "robotics-autonomous-systems",
      number: "06",
      title: "Robotics & Autonomous Systems",
      description: "Fleet-management interfaces, and monitoring infrastructure for connected operations.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-sky-100/90 via-sky-50/50 to-white",
      borderHover: "border-sky-300 hover:border-sky-500 hover:shadow-sky-500/25",
      headingColor: "text-sky-700 group-hover:text-sky-800",
      badgeColor: "bg-sky-200 text-sky-900 border-sky-400 font-bold",
      iconHover: "group-hover:bg-sky-600 group-hover:text-white",
      glowColor: "bg-sky-400/30",
      delay: "0.6s",
    },
    {
      id: "ai-machine-learning-data",
      number: "07",
      title: "AI, Machine Learning & Data Solutions",
      description: "Applied AI embedded into real products, from predictive models to automation.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-cyan-100/90 via-cyan-50/50 to-white",
      borderHover: "border-cyan-300 hover:border-cyan-500 hover:shadow-cyan-500/25",
      headingColor: "text-cyan-700 group-hover:text-cyan-800",
      badgeColor: "bg-cyan-200 text-cyan-900 border-cyan-400 font-bold",
      iconHover: "group-hover:bg-cyan-600 group-hover:text-white",
      glowColor: "bg-cyan-400/30",
      delay: "0.7s",
    },
    {
      id: "iot-blockchain-engineering",
      number: "08",
      title: "IoT & Blockchain Engineering",
      description: "Connected-device and distributed-ledger solutions for modern clients.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-indigo-100/90 via-indigo-50/50 to-white",
      borderHover: "border-indigo-300 hover:border-indigo-500 hover:shadow-indigo-500/25",
      headingColor: "text-indigo-700 group-hover:text-indigo-800",
      badgeColor: "bg-indigo-200 text-indigo-900 border-indigo-400 font-bold",
      iconHover: "group-hover:bg-indigo-600 group-hover:text-white",
      glowColor: "bg-indigo-400/30",
      delay: "0.8s",
    },
    {
      id: "digital-marketing-creative",
      number: "09",
      title: "Digital Marketing & Creative Services",
      description: "Brand, content, and campaign execution aligned with the product.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=80",
      bgCard: "bg-gradient-to-br from-orange-100/90 via-orange-50/50 to-white",
      borderHover: "border-orange-300 hover:border-orange-500 hover:shadow-orange-500/25",
      headingColor: "text-orange-700 group-hover:text-orange-800",
      badgeColor: "bg-orange-200 text-orange-900 border-orange-400 font-bold",
      iconHover: "group-hover:bg-orange-600 group-hover:text-white",
      glowColor: "bg-orange-400/30",
      delay: "0.9s",
    },
  ];

  return (
    <section className="capabilities-showcase relative py-20 px-6 lg:px-12 overflow-hidden text-[#10231b] border-t border-[#cfe2d8]">
      
      {/* Background Animated Floating Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl w-full relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3 relative z-10">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
              TECHNOLOGIES
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#071b18]">
              Next-generation technology, <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                deployed in the real world.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="relative pl-4 border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50/80 to-white p-4 rounded-r-xl shadow-sm border border-emerald-100">
              <p className="text-[#0d211a] text-sm sm:text-base leading-relaxed font-semibold">
                We transform complex technologies—<span className="text-emerald-700 font-bold">from web and mobile apps to AI and robotics</span>—into high-impact digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Compact 9-Item Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/services/${item.id}`)}
              style={{ animationDelay: item.delay }}
              className={`capability-card group cursor-pointer rounded-2xl border border-slate-200 ${item.bgCard} ${item.borderHover} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between opacity-0 animate-[popIn_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] shadow-sm`}
            >
              {/* Dynamic Card Glow Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.glowColor} rounded-full blur-xl group-hover:scale-150 transition-all duration-500 pointer-events-none`} />
              
              {/* Full Width Edge-to-Edge Image Container */}
              <div className="w-full h-48 overflow-hidden relative m-0 p-0 border-b border-slate-200/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 m-0 p-0 block"
                />
              </div>

              {/* Card Body Content with Padding */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border shadow-xs ${item.badgeColor}`}>
                      {item.number}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-white/90 border border-slate-300 flex items-center justify-center text-slate-800 transition-all duration-300 ${item.iconHover} shadow-xs`}>
                      <span className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-base font-bold ${item.headingColor} mb-1.5 transition-colors leading-snug`}>
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative color bar */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full mt-4" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Custom Animations Keyframes */}
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.95);
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

export default Technologies;