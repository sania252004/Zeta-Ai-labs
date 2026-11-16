import React, { useState, useRef } from "react";
import axios from "axios";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // 3D Tilt state references
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate subtle 3D tilt angles
    setRotateX((-y / (rect.height / 2)) * 4);
    setRotateY((x / (rect.width / 2)) * 4);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
   const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        fullName: formData.name,
        companyName: formData.company,
        businessEmail: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    );

    if (response.data.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  } catch (error) {
    console.error("Contact form submission failed:", error);

    setSubmitted(false);

    alert("Failed to send your enquiry. Please try again.");
  }
};

  return (
    <section 
      id="contact" 
      className="relative bg-[#f7f8f5] py-28 px-6 lg:px-12 overflow-hidden text-[#0a1812] border-t border-[#dce8df]"
    >
      {/* Background Animated Floating Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none animate-[floatOrb1_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-teal-400/15 rounded-full blur-[140px] pointer-events-none animate-[floatOrb2_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite]" />

      {/* Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Branding info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Get In Touch
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#0a1812] leading-[1.1]">
              Ready to Shape the <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Future?</span>
            </h2>

            <p className="text-[#3b5249] text-sm lg:text-base leading-relaxed font-medium">
              Partner with Zeta AI to accelerate your digital transformation, build high-performance software, and integrate production-grade intelligence.
            </p>

            <div className="space-y-3 pt-3 border-t border-emerald-200/60">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0a1812]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shadow-sm">🌍</div>
                <span>Global Engineering & AI Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0a1812]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shadow-sm">⚡</div>
                <span>Rapid deployment & 24/7 expert support</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilt Form Card */}
          <div className="lg:col-span-7 perspective-[1000px]">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="bg-gradient-to-br from-emerald-100/90 via-emerald-50/50 to-white backdrop-blur-2xl p-7 sm:p-9 rounded-3xl border border-emerald-300 shadow-2xl relative transform-gpu"
            >
              {/* Top Decorative Glow Inside Card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/30 rounded-full blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 relative z-10">
                {[
                  ["name", "Full Name", "text"],
                  ["company", "Company Name", "text"],
                  ["email", "Business Email", "email"],
                  ["phone", "Phone Number", "tel"],
                ].map(([name, label, type]) => (
                  <div key={name} className="space-y-1">
                    <label className="block text-xs font-bold tracking-wider text-[#0a1812] uppercase">
                      {label} {name !== "phone" && <span className="text-emerald-700">*</span>}
                    </label>
                    <input 
                      required={name !== "phone"} 
                      name={name} 
                      type={type} 
                      value={formData[name]} 
                      onChange={handleChange} 
                      placeholder={`Enter your ${label.toLowerCase()}`} 
                      className="w-full h-11 rounded-xl border border-emerald-300 bg-white/80 px-4 text-sm text-[#0a1812] outline-none transition-all duration-200 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 placeholder:text-gray-400 font-medium" 
                    />
                  </div>
                ))}

                <div className="space-y-1 sm:col-span-2">
                  <label className="block text-xs font-bold tracking-wider text-[#0a1812] uppercase">
                    Message <span className="text-emerald-700">*</span>
                  </label>
                  <textarea 
                    required 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your goals, tech stack, or timeline..." 
                    rows="4" 
                    className="w-full rounded-xl border border-emerald-300 bg-white/80 p-4 text-sm text-[#0a1812] outline-none transition-all duration-200 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 placeholder:text-gray-400 font-medium resize-none" 
                  />
                </div>

                <div className="sm:col-span-2 pt-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Message →
                  </button>

                  {submitted && (
                    <p className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-2 rounded-lg border border-emerald-300 animate-fadeIn text-center">
                      ✓ Inquiry sent successfully!
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Custom Keyframe Animations */}
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
    </section>
  );
};

export default ContactSection;