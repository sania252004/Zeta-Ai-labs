import React from "react";
import { Link, useParams } from "react-router-dom";
import { stories } from "./CustomerStories";

const StoryDetailPage = () => {
  const { slug } = useParams();
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5] px-6 text-center text-[#0a1812] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/25 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="relative z-10 max-w-md bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white backdrop-blur-2xl p-8 rounded-3xl border border-emerald-300 shadow-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0a1812]">Story not found</h1>
          <p className="text-sm text-[#3b5249] mt-2 mb-6">The success story you are looking for doesn't exist or has been removed.</p>
          <Link to="/success-stories" className="inline-block font-bold text-xs uppercase tracking-widest text-emerald-900 bg-emerald-200 hover:bg-emerald-300 border border-emerald-400 px-5 py-3 rounded-full transition-all shadow-sm">
            ← Back to Customer Stories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#f7f8f5] py-28 px-6 lg:px-12 overflow-hidden text-[#0a1812]">
      
      {/* Background Animated Floating Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-teal-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-4xl relative z-10 space-y-8">
        <Link 
          to="/success-stories" 
          className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 bg-emerald-100/90 hover:bg-emerald-200 px-4 py-2 rounded-full border border-emerald-300 shadow-sm transition-all"
        >
          ← Back to Customer Stories
        </Link>

        {/* Main Content Card with Pastel Gradient and Soft Border */}
        <div className="overflow-hidden rounded-3xl border border-emerald-300 bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white shadow-2xl backdrop-blur-2xl relative">
          
          {/* Top Decorative Glow Effect inside Card */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/30 rounded-full blur-3xl pointer-events-none" />

          {/* Active Story Image with fallback safeguard */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden border-b border-emerald-200 bg-emerald-50/50">
            <img
              src={story.image}
              alt={story.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/seed/fallback/800/600";
              }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/70 via-transparent to-transparent opacity-60" />
          </div>

          <div className="p-8 sm:p-12 relative z-10">
            <span className="inline-block py-1.5 px-3.5 rounded-full text-emerald-900 bg-emerald-200 border border-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              Customer Story
            </span>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0a1812] sm:text-5xl leading-tight">
              {story.title}
            </h1>
            
            <p className="mt-6 text-base font-normal leading-relaxed text-[#3b5249] sm:text-lg">
              {story.description}
            </p>

            {story.subtitle && (
              <p className="mt-2 text-sm italic text-[#476158]">{story.subtitle}</p>
            )}

            <div className="mt-8 grid grid-cols-1 border border-emerald-200 bg-white/70 sm:grid-cols-3">
              <div className="border-b sm:border-b-0 sm:border-r border-emerald-200 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Client</p>
                <p className="mt-1 text-xs text-[#3b5249]">{story.client || "Zeta Partner"}</p>
              </div>
              <div className="border-b sm:border-b-0 sm:border-r border-emerald-200 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Industry</p>
                <p className="mt-1 text-xs text-[#3b5249]">{story.industry || "Healthcare & AI"}</p>
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Services</p>
                <p className="mt-1 text-xs text-[#3b5249]">{story.services || "Platform Architecture"}</p>
              </div>
            </div>

            {story.notice && (
              <aside className="mt-6 border border-orange-300 bg-orange-50 p-4 text-xs leading-relaxed text-orange-950">
                <p className="mb-2 font-bold uppercase tracking-wider text-orange-800">Verify before publishing</p>
                <p>{story.notice}</p>
              </aside>
            )}

            <div className="mt-12 space-y-10">
              {story.sections?.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-xl font-bold text-[#0a1812]">{section.title}</h2>
                  <div className="space-y-4 text-sm leading-relaxed text-[#3b5249]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          
          {/* Bottom Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-80" />
        </div>
      </div>

      <style>{`
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
    </main>
  );
};

export default StoryDetailPage;