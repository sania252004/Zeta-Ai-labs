import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const capabilities = [
    { name: "Website & Web Dev", id: "website-web-development" },
    { name: "React / Node.js", id: "react-nodejs-engineering" },
    { name: "Mobile App Dev", id: "mobile-application-development" },
    { name: "Enterprise ERP & CRM", id: "enterprise-erp-crm" },
    { name: "Magento & E-commerce", id: "magento-ecommerce-development" },
    { name: "Robotics & Systems", id: "robotics-autonomous-systems" },
    { name: "AI, ML & Data", id: "ai-machine-learning-data" },
    { name: "IoT & Blockchain", id: "iot-blockchain-engineering" },
    { name: "Digital Marketing", id: "digital-marketing-creative" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-emerald-500 backdrop-blur-md border-b border-emerald-400/30 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-2.5 lg:px-8">

        {/* Logo Container - Clean transparent background with optimized sizing */}
        <Link 
          to="/" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center py-1 hover:scale-105 transition-transform focus:outline-none"
        >
          <img 
            src="/Zetaalogo.png" 
            alt="Zeta AI Labs Logo" 
            className="h-12 sm:h-14 md:h-14 w-auto object-contain block drop-shadow-md" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-white transition-colors duration-300 hover:text-emerald-100"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-emerald-50 transition-colors duration-300 hover:text-white"
          >
            About
          </Link>

          {/* What We Do Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              to="/what-we-do"
              onClick={() => setIsServicesOpen(false)}
              className="flex items-center gap-1.5 text-sm font-medium text-emerald-50 transition-colors duration-300 hover:text-white py-2"
            >
              What We Do
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white border border-emerald-100 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-3 transform transition-all duration-200 ease-out origin-top animate-fadeIn">
                {capabilities.map((item, index) => (
                  <Link
                    key={index}
                    to={`/services/${item.id}`}
                    onClick={() => {
                      setIsServicesOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50/60 hover:bg-emerald-50 hover:shadow-sm transition-all duration-200 group text-left border border-transparent hover:border-emerald-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-semibold text-gray-800 group-hover:text-emerald-900">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-emerald-50 transition-colors duration-300 hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="/success-stories"
            className="text-sm font-medium text-emerald-50 transition-colors duration-300 hover:text-white"
          >
            Success Stories
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-all duration-300 hover:scale-105 hover:bg-emerald-50 md:block shadow-md text-center"
        >
          Let's Talk
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2.5 rounded-xl bg-emerald-600/90 border border-emerald-400/40 hover:bg-emerald-600 transition-colors shadow-md relative z-50"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-emerald-500 to-emerald-600 border-t border-emerald-400/30 shadow-2xl px-5 py-5 max-h-[calc(100vh-65px)] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-3.5 w-full">
            
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-between text-sm font-semibold text-white hover:text-emerald-100 transition-colors border-b border-emerald-400/20 pb-3 group"
            >
              <span>Home</span>
              <span className="text-emerald-200 text-xs group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-white hover:text-emerald-100 transition-colors border-b border-emerald-400/20 pb-3 group"
            >
              <span>About</span>
              <span className="text-emerald-200 text-xs group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Mobile What We Do Dropdown Section */}
            <div className="border-b border-emerald-400/20 pb-3">
              <div className="flex items-center justify-between">
                <Link
                  to="/what-we-do"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-white hover:text-emerald-100 transition-colors"
                >
                  What We Do
                </Link>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="p-1.5 text-white hover:text-emerald-100 focus:outline-none bg-emerald-600/70 rounded-lg border border-emerald-400/30 shadow-sm"
                  aria-label="Toggle capabilities"
                >
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="mt-3 grid grid-cols-2 gap-2 bg-emerald-700/50 p-2.5 rounded-2xl border border-emerald-400/30 shadow-inner">
                  {capabilities.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.id}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 p-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-700 transition-all border border-emerald-400/20 text-left shadow-sm hover:scale-[1.02]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 shrink-0" />
                      <span className="text-[11px] font-medium text-emerald-50 leading-tight">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projects"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-between text-sm font-semibold text-white hover:text-emerald-100 transition-colors border-b border-emerald-400/20 pb-3 group"
            >
              <span>Projects</span>
              <span className="text-emerald-200 text-xs group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              to="/success-stories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-white hover:text-emerald-100 transition-colors border-b border-emerald-400/20 pb-3 group"
            >
              <span>Success Stories</span>
              <span className="text-emerald-200 text-xs group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Bottom CTA Button */}
            <div className="pt-3 pb-2">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-emerald-950 shadow-lg transition-all hover:bg-emerald-50 active:scale-95"
              >
                Let's Talk
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;