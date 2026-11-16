import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import globalLogo from "../../assets/global-group-logo.png";
import vasilchukiImage from "../../assets/1. Vasilchuki Chaihona No. 1.png";

// --- 1. Stories Data Array ---
export const stories = [
  {
  title: "Grupo Global (Spain)",
  slug: "grupo-global-spain",
  description: "Integrating bilateral platforms and managing global-scale digital assets for strategic international partners.",
  image: globalLogo,
  },
  {
    title: "Vasilchuki Chaihona No. 1",
    slug: "vasilchuki-chaihona-no-1",
    description: "A culinary portfolio platform for a 20-year heritage restaurant brand, built to carry brand storytelling through to a seamless table-reservation experience.",
    image: vasilchukiImage,
  },
  {
    title: "Hotels in Dubai",
    slug: "hotels-in-dubai",
    description: "A smart hotel search and booking system for Dubai's tourism market, with real-time availability filtering by location, budget, and amenities.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2048&q=85",
  },
  {
    title: "DESS",
    slug: "dess",
    description: "An admissions and communications platform for a British-curriculum school, built for accessibility and seamless contact between teachers, students, and parents.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2048&q=85",
  },
  {
    title: "Aster Clinic",
    slug: "aster-clinic",
    description: "A doctor-discovery and appointment system for a leading regional healthcare group, helping patients find the right specialist across multiple branches in seconds.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2048&q=85",
    subtitle: "A doctor discovery & appointment platform for a leading UAE healthcare provider",
    client: "Aster DM Healthcare",
    industry: "Healthcare & Telehealth",
    services: "Platform Architecture & UI/UX Design",
    sections: [
      {
        title: "The Challenge",
        paragraphs: [
          "Aster Clinic required a high-performance digital booking platform capable of managing thousands of daily appointment requests across multiple regional branches.",
          "Patients needed a streamlined discovery experience to filter specialists by location, language, and clinical specialty instantly."
        ]
      },
      {
        title: "Our Solution",
        paragraphs: [
          "We engineered a modern, ultra-responsive web interface backed by robust scheduling APIs and real-time availability queues.",
          "The clean aesthetic and intuitive navigation drastically lowered bounce rates and streamlined patient onboarding."
        ]
      }
    ]
  },
  {
    title: "Apex Wealth",
    slug: "apex-wealth",
    description: "A secure, high-performance neo-banking and wealth management portal offering real-time asset tracking and automated portfolio rebalancing.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2048&q=85",
  },
  {
    title: "LogiPulse Global",
    slug: "logipulse-global",
    description: "An AI-powered supply chain visibility platform providing predictive tracking, warehouse automation analytics, and route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2048&q=85",
  },
  {
    title: "Aura Fashion",
    slug: "aura-fashion",
    description: "An immersive headless e-commerce experience for an ultra-luxury apparel label, featuring virtual try-on previews and ultra-fast checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2048&q=85",
  },
  {
    title: "DataPulse AI",
    slug: "datapulse-ai",
    description: "An enterprise business intelligence workspace that transforms messy enterprise databases into clean, natural-language query insights instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2048&q=85",
  },
];

// --- 2. Stats Component with Animated Counting & Floating Depth ---
const SuccessStoriesStats = () => {
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, experience: 0 });
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / 2000, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCounts({
            projects: Math.floor(easedProgress * 60),
            satisfaction: Math.floor(easedProgress * 91),
            experience: Math.floor(easedProgress * 2),
          });

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      } else {
        setCounts({ projects: 0, satisfaction: 0, experience: 0 });
      }
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f8f5] px-6 py-24 text-[#10231b] lg:px-12"
    >
      {/* Dynamic 3D Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-400/15 blur-[140px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-teal-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full text-emerald-800 bg-emerald-100/90 text-xs font-bold tracking-[0.2em] uppercase border border-emerald-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Proven Track Record</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#0a1812]">
            Success{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-[#3b5249] text-base md:text-lg leading-relaxed font-medium">
            Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable outcomes through innovative AI and data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Stat Card 1 */}
          <div className="group relative rounded-3xl border border-emerald-900/10 bg-white/70 p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="text-5xl md:text-6xl font-black tracking-tight text-emerald-700 drop-shadow-sm">{counts.projects}+</div>
            <h3 className="mt-3 text-lg font-bold text-[#0a1812]">Projects Delivered</h3>
          </div>

          {/* Stat Card 2 */}
          <div className="group relative rounded-3xl border border-emerald-900/10 bg-white/70 p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(59,130,246,0.15)] hover:border-blue-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="text-5xl md:text-6xl font-black tracking-tight text-blue-700 drop-shadow-sm">{counts.satisfaction}%</div>
            <h3 className="mt-3 text-lg font-bold text-[#0a1812]">Client Satisfaction</h3>
          </div>

          {/* Stat Card 3 */}
          <div className="group relative rounded-3xl border border-emerald-900/10 bg-white/70 p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(20,184,166,0.15)] hover:border-teal-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="text-5xl md:text-6xl font-black tracking-tight text-teal-700 drop-shadow-sm">{counts.experience}+</div>
            <h3 className="mt-3 text-lg font-bold text-[#0a1812]">Years Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. Interactive 3D Tilt Card with Spotlight Glow Effect ---
const TiltCard = ({ story }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Dynamic 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    setCoords({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    setCoords((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.1s ease-out, box-shadow 0.3s ease" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-300/70 bg-gradient-to-br from-white via-emerald-50/30 to-emerald-100/50 shadow-[0_10px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.22)] hover:border-emerald-500"
    >
      {/* Mouse Spotlight Follow Effect */}
      <div
        className="absolute pointer-events-none -inset-px rounded-3xl transition-opacity duration-300 z-30"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.18), transparent 80%)`,
        }}
      />

      {/* Image Container */}
      <div className="relative h-44 w-full overflow-hidden border-b border-emerald-200/60 bg-emerald-900/5 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/10 uppercase">
            Case Study
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6 justify-between relative z-20">
        <div>
          <h3 className="mb-2.5 text-lg font-bold leading-snug text-[#0a1812] group-hover:text-emerald-700 line-clamp-1 transition-colors">
            {story.title}
          </h3>
          <p className="text-xs font-medium leading-relaxed text-[#3b5249] line-clamp-3">
            {story.description}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-emerald-900/10 flex items-center justify-between">
          <Link
            to={`/success-stories/${story.slug}`}
            className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105 hover:shadow-emerald-500/30"
          >
            <span>View Story</span>
            <span aria-hidden="true" className="font-mono text-xs transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

// --- 4. Unique Stories Grid Component ---
const UniqueCustomerStoriesGrid = () => {
  return (
    <section className="relative bg-[#f7f8f5] py-24 px-6 lg:px-12 overflow-hidden text-[#0a1812] border-t border-[#dce8df]">
      {/* Background Soft Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="mb-16 border-b border-emerald-200/80 pb-8 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block py-1.5 px-3.5 rounded-full text-emerald-900 bg-emerald-100/90 border border-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
              Proven Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0a1812]">
              Customer <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>
         <p className="text-sm md:text-base text-[#2c3e35] mt-3 font-semibold max-w-md leading-relaxed">
  Explore our portfolio of scalable platforms, high-performance web applications, and enterprise AI solutions.
</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <TiltCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Main Page Export ---
const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8f5] flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="pt-16">
          <SuccessStoriesStats />
          <UniqueCustomerStoriesGrid />
        </div>
      </div>
     
    </div>
  );
};

export default SuccessStoriesPage;