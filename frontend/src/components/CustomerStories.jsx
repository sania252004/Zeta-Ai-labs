import React from "react";
import { Link } from "react-router-dom";
import globalLogo from "../../assets/global-group-logo.png";
import vasilchukiImage from "../../assets/1. Vasilchuki Chaihona No. 1.png";

// Expanded stories array with 8 examples, fully clickable to view details
export const stories = [
  {
    title: "Grupo Global (Spain)",
    slug: "grupo-global-spain",
    description: "Designing and building a secure corporate intranet and document management platform to unify operations across Europe, India, and global regions.",
    image: globalLogo,
    subtitle: "Active Enterprise Project: Building the 'Global Group' custom corporate intranet for multi-regional operations and secure document workflows.",
    client: "Grupo Global Plataforma Bilateral",
    industry: "Enterprise Software & Corporate Intranet / Document Management",
    services: "Full-Stack Development, Secure Cloud Storage Integration, Workflow Automation, Multi-Region Deployment",
    sections: [
      { 
        title: "Overview", 
        paragraphs: [
          "Grupo Global Plataforma Bilateral operates across Europe, India, and other global regions, requiring a single, secure operational environment to coordinate document management, internal communication, and cross-regional workflows.", 
          "Zeta AI Labs is currently commissioned to design and build 'Global Group'—a custom corporate intranet that replicates the structured, modular, and secure collaborative experience of the Dataprius platform, tailored with Grupo Global's branding and regional access requirements."
        ] 
      },
      { 
        title: "The Challenge", 
        paragraphs: [
          "The initiative requires complex operational capabilities behind a user-friendly interface, including strict role-based access control, GDPR compliance, real-time multi-stakeholder management, and automated backups across separate geographical jurisdictions (Europe, India, and global offices)."
        ] 
      },
      { 
        title: "Our Approach", 
        paragraphs: [
          "Engineering a scalable stack utilizing React (Next.js) for the frontend interface and Node.js with PostgreSQL for the backend and cloud document engine.", 
          "Integrating core modules progressively, including hierarchical Cloud Folders, Trash/Recycle Bin recovery, automated backups, MetaLinks secure sharing, AutoFlow workflow automation, central User Management, and a bottom toolbar with video conferencing and real-time team chat."
        ] 
      },
      { 
        title: "Current Status & Next Steps", 
        paragraphs: [
          "The project is actively underway through structured phased delivery, focusing on foundational architecture, core platform staging, and multi-regional rollout preparations across Europe, India, and the Rest of the World."
        ] 
      }
    ]
  },
  {
    title: "Vasilchuki Chaihona No. 1",
    slug: "vasilchuki-chaihona-no-1",
    description: "A culinary portfolio platform for a 20-year heritage restaurant brand, built to carry brand storytelling through to a seamless table-reservation experience.",
    image: vasilchukiImage,
    subtitle: "A smart culinary portfolio platform for a 20-year heritage restaurant brand",
    client: "Vasilchuki Chaihona No. 1",
    industry: "Hospitality / Food & Beverage",
    services: "Web Design & Development, Brand Storytelling, Reservation Integration",
    sections: [
      { title: "Overview", paragraphs: ["Vasilchuki Chaihona No. 1 is a multi-format restaurant brand with two decades of history behind it...", "Zeta AI Labs was brought in to design and build a culinary portfolio platform..."] },
      { title: "The Challenge", paragraphs: ["The brand's existing online footprint undersold it...", "Reservations were still handled largely by phone..."] },
      { title: "Our Approach", paragraphs: ["Brand-first structure mapped out to absorb narrative in under a minute.", "Photography-led design and frictionless reservations."] },
      { title: "The Result", paragraphs: ["An immersive digital food experience matching the quality of the dining experience."] },
    ],
  },
  {
    title: "Hotels in Dubai",
    slug: "hotels-in-dubai",
    description: "A smart hotel search and booking system for Dubai's tourism market, with real-time availability filtering by location, budget, and amenities.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2048&q=85",
    subtitle: "A smart hotel search & booking platform for Dubai's tourism market",
    client: "Address Hotels & Resorts",
    industry: "Travel & Tourism",
    services: "Platform Design & Development, Real-Time Availability Integration, Search & Filtering",
    sections: [
      { title: "Overview", paragraphs: ["Dubai's tourism sector is one of the fastest-growing in the world..."] },
      { title: "The Challenge", paragraphs: ["Generic booking templates struggle with inventory presentation and real-time availability."] },
      { title: "Our Approach", paragraphs: ["Structured discovery, real-time availability sync, and performance under peak loads."] },
      { title: "The Result", paragraphs: ["A seamless digital booking experience purpose-built for high-volume tourism."] },
    ],
  },
  {
    title: "DESS",
    slug: "dess",
    description: "An admissions and communications platform for a British-curriculum school, built for accessibility and seamless contact between teachers, students, and parents.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2048&q=85",
    subtitle: "An educational platform for the Dubai English Speaking School",
    client: "DESS - Dubai English Speaking School",
    industry: "Education",
    services: "Platform Design & Development, Admissions Flow, Multi-Audience Communication",
    sections: [
      { title: "Overview", paragraphs: ["DESS delivers a British-curriculum education to a diverse student community..."] },
      { title: "The Challenge", paragraphs: ["Admissions info, parent communication, and general marketing competed for space."] },
      { title: "Our Approach", paragraphs: ["Audience-first architecture and a guided step-by-step admissions flow."] },
      { title: "The Result", paragraphs: ["A modern, inclusive educational platform serving prospective and current families cleanly."] },
    ],
  },
  {
    title: "Aster Clinic",
    slug: "aster-clinic",
    description: "A doctor-discovery and appointment system for a leading regional healthcare group, helping patients find the right specialist across multiple branches in seconds.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2048&q=85",
    subtitle: "A doctor discovery & appointment platform for a leading UAE healthcare provider",
    client: "Aster Clinic, Dubai (UAE)",
    industry: "Healthcare",
    services: "Platform Design & Development, Multi-Branch Search, Appointment Booking",
    sections: [
      { title: "Overview", paragraphs: ["Aster Clinic operates across multiple branches and medical specialties..."] },
      { title: "The Challenge", paragraphs: ["Patients needed an easier way to find the right specialist without phone transfers."] },
      { title: "Our Approach", paragraphs: ["Specialty- and branch-aware search with direct booking flow."] },
      { title: "The Result", paragraphs: ["Self-serve discovery and booking channel that scales with the healthcare network."] },
    ],
  },
  {
    title: "Apex Wealth",
    slug: "apex-wealth",
    description: "A secure, high-performance neo-banking and wealth management portal offering real-time asset tracking and automated portfolio rebalancing.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2048&q=85",
    subtitle: "Next-gen wealth management portal for private banking clients",
    client: "Apex Financial Group",
    industry: "Fintech & Banking",
    services: "Secure Dashboard, Real-time Data Feeds, Portfolio Analytics",
    sections: [
      { title: "Overview", paragraphs: ["Apex Wealth needed a modern portal to manage high-net-worth assets securely."] },
      { title: "The Challenge", paragraphs: ["Handling complex multi-currency portfolios with sub-second latency."] },
      { title: "Our Approach", paragraphs: ["Built an enterprise-grade web application with strict compliance and snappy performance."] },
      { title: "The Result", paragraphs: ["Drastically increased user engagement and streamlined portfolio management."] },
    ],
  },
  {
    title: "LogiPulse Global",
    slug: "logipulse-global",
    description: "An AI-powered supply chain visibility platform providing predictive tracking, warehouse automation analytics, and route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2048&q=85",
    subtitle: "End-to-end supply chain logistics dashboard",
    client: "LogiPulse Worldwide",
    industry: "Logistics & Supply Chain",
    services: "Predictive Analytics, Mapping Integration, Fleet Dashboard",
    sections: [
      { title: "Overview", paragraphs: ["Global supply chains require real-time visibility and predictive insights."] },
      { title: "The Challenge", paragraphs: ["Consolidating data from thousands of IoT tracking nodes globally."] },
      { title: "Our Approach", paragraphs: ["Developed a custom map-centric dashboard with anomaly detection alerts."] },
      { title: "The Result", paragraphs: ["Enabled proactive delay mitigation and lower operational overhead."] },
    ],
  },
  {
    title: "Aura Fashion",
    slug: "aura-fashion",
    description: "An immersive headless e-commerce experience for an ultra-luxury apparel label, featuring virtual try-on previews and ultra-fast checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2048&q=85",
    subtitle: "Headless e-commerce platform for high-end fashion retail",
    client: "Aura Luxury Retail",
    industry: "E-Commerce / Retail",
    services: "Headless Shopify Integration, UI/UX Motion Design, Fast Checkout",
    sections: [
      { title: "Overview", paragraphs: ["Aura required a digital storefront matching their high-end physical boutiques."] },
      { title: "The Challenge", paragraphs: ["Balancing heavy editorial visuals with high-speed page loads."] },
      { title: "Our Approach", paragraphs: ["Implemented headless architecture with optimized media asset pipelines."] },
      { title: "The Result", paragraphs: ["Significant spike in mobile conversion rates and reduced bounce rates."] },
    ],
  },
  {
    title: "DataPulse AI",
    slug: "datapulse-ai",
    description: "An enterprise business intelligence workspace that transforms messy enterprise databases into clean, natural-language query insights instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2048&q=85",
    subtitle: "Natural language business intelligence dashboard",
    client: "DataPulse Technologies",
    industry: "Artificial Intelligence / SaaS",
    services: "LLM Integration, Data Visualization, Enterprise Security",
    sections: [
      { title: "Overview", paragraphs: ["Enterprise teams waste hours writing complex SQL queries for basic reports."] },
      { title: "The Challenge", paragraphs: ["Building a secure, highly accurate natural-language-to-SQL query engine."] },
      { title: "Our Approach", paragraphs: ["Engineered a streamlined conversational data explorer with visual charting."] },
      { title: "The Result", paragraphs: ["Empowered non-technical stakeholders to pull custom reports instantly."] },
    ],
  },
];

const CustomerStories = () => {
  return (
    <section className="relative bg-[#f7f8f5] py-24 px-6 lg:px-12 overflow-hidden z-0 border-t border-[#dce8df] text-[#0a1812]">
      
      {/* Background Animated Floating Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-teal-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-emerald-200/60 pb-5 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full text-emerald-900 bg-emerald-100/90 border border-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            Proven Impact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0a1812] sm:text-4xl">
            Customer <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
        </div>

        {/* Cards Grid - Automatically wraps multiple rows with 4 columns on large screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500 hover:shadow-xl"
            >
              <div className="relative h-32 w-full overflow-hidden border-b border-emerald-200 bg-emerald-50/50">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-40" />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="mb-1.5 text-base font-bold leading-snug text-[#0a1812] transition-colors group-hover:text-emerald-800 line-clamp-1">
                  {story.title}
                </h3>
                <p className="flex-1 text-[11px] sm:text-xs font-medium leading-relaxed text-[#3b5249] line-clamp-3">
                  {story.description}
                </p>
                <Link
                  to={`/success-stories/${story.slug}`}
                  className="mt-4 inline-flex w-fit items-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-sm focus:outline-none"
                >
                  View Story <span aria-hidden="true" className="ml-1.5 font-mono text-xs">-&gt;</span>
                </Link>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.1); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default CustomerStories;