import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
const OfficialContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        fullName: formData.name,
        companyName: "Not provided",
        businessEmail: formData.email,
        phone: formData.phoneNumber,
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
      }
    );

    if (response.data.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }
  } catch (error) {
    console.error("Contact submission failed:", error);
    alert("Failed to send your message. Please try again.");
  }
};
  return (
    <div className="min-h-screen bg-white text-[#0a1812] flex flex-col justify-between relative overflow-hidden">
      
      {/* 3D Ambient Background Glow Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-400/20 blur-[150px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-400/20 blur-[150px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '4s' }} />

      <Navbar />

      <section className="relative py-28 px-6 lg:px-12 flex-grow z-10" id="contact">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Intro */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block py-1.5 px-4 rounded-full text-emerald-900 bg-emerald-100 border border-emerald-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a1812]">
              We&apos;re <span className="text-emerald-600">Interested in Working Together</span>
            </h2>
            
          </div>

          {/* Grid Layout: Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Details Info */}
            <div className="lg:col-span-1 space-y-8 bg-gray-50/80 backdrop-blur-md p-8 rounded-3xl border border-emerald-200 shadow-xl relative group hover:border-emerald-400 transition-all duration-300">
              <div>
                <h3 className="text-lg font-bold text-[#0a1812] mb-4">Get in Touch</h3>
                <div className="space-y-4 text-sm text-[#3b5249]">
                  <div>
                    <span className="block text-xs font-bold uppercase text-emerald-700 tracking-wider">Email</span>
                    <a href="mailto:contact@zetaailabs.com" className="hover:underline font-medium text-[#0a1812]">
                      info@zetaailabs.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-emerald-700 tracking-wider">Phone</span>
                    <a href="tel:+919337287145" className="hover:underline font-medium text-[#0a1812]">
                      +91 93372 87145
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-emerald-700 tracking-wider">Address</span>
                    <p className="font-medium text-[#3b5249] leading-relaxed">J-14, 1st Floor, Lewis Rd, BJB Nagar, Bhubaneswar, Odisha – 751014, India</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-emerald-200 pt-6">
                <h4 className="text-sm font-bold text-[#0a1812] mb-2">Join Our Growing Team?</h4>
                <p className="text-xs text-[#3b5249] leading-relaxed">
                  We&apos;re always looking for passionate people in AI, web development, mobile app development, digital marketing, and data analytics. Send your resume to <a href="mailto:contact@zetaailabs.com" className="text-emerald-700 font-semibold underline hover:text-emerald-900">info@zetaailabs.com</a>.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2 bg-gray-50/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-emerald-200 shadow-xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0a1812]">Send Us a Message</h3>
                <p className="text-xs md:text-sm text-[#3b5249] mt-1">
                  Have a question, project, or idea in mind? Fill out the form below and our team will get back to you soon.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3 shadow-inner">
                  <h4 className="text-xl font-bold text-emerald-800">Thank You!</h4>
                  <p className="text-sm text-[#3b5249]">Your message has been received. We will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-800 transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1812] mb-1.5 tracking-wider">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white text-[#0a1812] placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1812] mb-1.5 tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white text-[#0a1812] placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1812] mb-1.5 tracking-wider">Phone Number</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white text-[#0a1812] placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#0a1812] mb-1.5 tracking-wider">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Partnership"
                        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white text-[#0a1812] placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#0a1812] mb-1.5 tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white text-[#0a1812] placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-700 text-white font-bold tracking-wider uppercase text-sm hover:bg-emerald-800 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficialContact;