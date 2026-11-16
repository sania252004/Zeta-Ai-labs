import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    if (!email) return;

    try {
      setLoading(true);
      setSubscribed(false);

     const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          email: email.trim(),
        }
      );

      if (response.data.success) {
        setSubscribed(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter submission failed:", error);

      if (error.response?.status === 409) {
        alert("This email is already subscribed.");
      } else {
        alert("Subscription failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-[#0b0f19] text-gray-300 pt-16 pb-8 px-6 lg:px-16 border-t border-emerald-500/20 relative overflow-hidden">

      {/* 3D Ambient Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800 relative z-10">

        {/* Column 1: Brand Info & Newsletter */}
        <div className="md:col-span-2 space-y-5">

          {/* Logo - Updated with Navbar background color and larger clear logo */}
          <Link to="/" className="inline-block group">
            <div className="h-20 w-56 px-5 py-3 bg-emerald-500 border border-emerald-400/55 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
              <img
                src="/Zetaalogo.png"
                alt="Zeta AI Labs Logo"
                className="h-14 w-auto object-contain block"
              />
            </div>
          </Link>

          {/* Description */}
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs font-medium">
            Pioneering the next wave of intelligent software systems and scalable
            digital architectures.
          </p>

          {/* Newsletter */}
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex items-center gap-2 pt-1 max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              placeholder="Enter your email"
              className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 w-full shadow-sm font-medium transition-colors"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Join"}
            </button>
          </form>

          {/* Temporary Success Message */}
          {subscribed && (
            <p className="text-xs text-emerald-400 font-semibold">
              ✓ Thank you for subscribing!
            </p>
          )}

        </div>

        {/* Column 2: Companies */}
        <div className="space-y-3">
          <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase text-emerald-400">
            Companies
          </h4>

          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li>
              <Link to="/team" className="hover:text-emerald-400 transition-colors">
                Professions
              </Link>
            </li>
            <li>
              <Link to="/success-stories" className="hover:text-emerald-400 transition-colors">
                How We Compare
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-emerald-400 transition-colors">
                Team Members
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase text-emerald-400">
            Quick Links
          </h4>

          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-emerald-400 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy & Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-3">
          <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase text-emerald-400">
            Contact
          </h4>

          <ul className="space-y-2 text-xs text-gray-400 font-medium leading-relaxed">
            <li>BJB Nagar, Lewis Road, 751014</li>
            <li>Bhubaneswar, Odisha, India</li>
            <li className="text-emerald-400 font-semibold">
              +91 9337287145
            </li>
            <li className="text-white font-semibold">
              info@zetaailabs.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 relative z-10">
        <p className="font-medium">
          &copy; 2026 Designed & Developed by{" "}
          <span className="text-gray-300 font-bold">
            @Zeta Ai Labs
          </span>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[11px] tracking-wider uppercase text-gray-400">
            Follow Us:
          </span>

          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/your-page-name"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 text-white flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-sm text-xs font-bold uppercase"
              title="Facebook"
            >
              f
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zeta.ailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 text-white flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-sm text-xs font-bold uppercase"
              title="Instagram"
            >
              ig
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/zetaailabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 text-white flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-sm text-xs font-bold uppercase"
              title="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;