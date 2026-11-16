import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between relative overflow-hidden perspective-[1200px]">
      
      {/* 3D Soft Multi-Color Ambient Glow Background matching your theme */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-emerald-100/60 blur-[140px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-blue-100/60 blur-[140px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 left-1/3 w-[600px] h-[300px] bg-amber-100/40 blur-[150px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Persistent Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main Content with Wide Width & Glorious 3D Tilt */}
      <main className="relative py-24 px-6 lg:px-16 flex-grow z-10 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto space-y-12 [transform-style:preserve-3d] transition-transform duration-700 hover:rotate-x-[1deg] hover:rotate-y-[1deg]">
          
          {/* Header matching your exact multi-color heading style */}
          <div className="text-center space-y-4">
            <span className="inline-block py-1.5 px-5 rounded-full text-emerald-800 bg-emerald-50 border border-emerald-200 text-xs font-extrabold tracking-[0.25em] uppercase shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
              Legal Notice
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight drop-shadow-sm">
              <span className="text-gray-900">Privacy</span> <span className="text-blue-600">Policy.</span>
            </h1>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Last Updated: August 31, 2026
            </p>
          </div>

          {/* Expanded 3D Glassmorphic Card */}
          <div className="bg-white/90 backdrop-blur-2xl p-8 md:p-14 rounded-3xl border border-gray-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] space-y-8 text-sm text-gray-700 leading-relaxed transition-all duration-500 hover:border-gray-300 hover:shadow-[0_35px_80px_rgba(0,0,0,0.09)]">
            
            <p className="text-base font-semibold text-gray-900 leading-relaxed">
              At Zeta AI Labs (&quot;Zeta AI Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we respect your privacy and protect your personal data. This Privacy Policy outlines our practices regarding your information when visiting <a href="https://www.zetaailabs.com" className="text-blue-600 underline font-bold hover:text-blue-700 transition-colors">www.zetaailabs.com</a>.
            </p>

            <p className="text-gray-600">
              Please review these terms thoroughly before utilizing our digital architecture and services.
            </p>

            {/* Section 1 */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-3">
                <span className="text-emerald-600 text-xs font-mono">01.</span> Information We Collect
              </h2>
              <p className="text-gray-600">Data gathered includes the following categories:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2 transition-transform duration-300 hover:scale-[1.02]">
                  <h3 className="font-bold text-emerald-900">Provided Information</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Names, email addresses, phone numbers, corporate credentials, and direct form submissions.</p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2 transition-transform duration-300 hover:scale-[1.02]">
                  <h3 className="font-bold text-blue-900">Automated Information</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">IP addresses, browser classifications, system metrics, and tracking cookies.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-3">
                <span className="text-blue-600 text-xs font-mono">02.</span> Usage of Data
              </h2>
              <p className="text-gray-600">Collected data serves to resolve inquiries, secure applications, enhance performance frameworks, and maintain compliance standards.</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-3">
                <span className="text-amber-600 text-xs font-mono">03.</span> Contact Information
              </h2>
              <p className="text-gray-600">Direct inquiries regarding this policy to our administrative office:</p>
              
              <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2 text-gray-900 shadow-sm">
                <p className="font-bold text-base text-gray-900">Zeta AI Labs</p>
                <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:contact@zetaailabs.com" className="text-blue-600 underline font-semibold">info@zetaailabs.com</a></p>
                <p className="text-gray-600"><strong>Phone:</strong> <a href="tel:+919337287145" className="text-blue-600 underline font-semibold">+91 93372 87145</a></p>
                <p className="text-gray-600"><strong>Address:</strong> J-14, 1st Flr, Lewis Rd, BJB Nagar, Bhubaneswar, Odisha – 751014, India</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Persistent Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;