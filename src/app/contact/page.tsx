"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQ_DATA } from "@/data/faqs";

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>("faq-booking");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-[#]?\d{8,15}$/.test(formData.phone.replace(/[\s\-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request readiness
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#657A6A]/30">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-6 font-semibold">
            CLINIC LOCATION & ASSISTANCE
          </div>
          <h1 className="font-display text-[42px] md:text-[60px] leading-tight text-[#F5F5DC] font-normal mb-6">
            Contact & <br />
            <span className="italic text-[#F5F5DC]">Clinic Sanctuary</span>
          </h1>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg leading-relaxed">
            Located in the serene enclave of Koregaon Park / Boat Club Road, Pune. Our team is ready to assist your skincare and trichological inquiries.
          </p>
        </div>
      </section>

      {/* Direct Quick Actions Bar */}
      <section className="bg-[#1C3329] border-b border-[#657A6A]/30 py-8 px-[20px] md:px-[80px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="tel:8669813636"
            className="flex items-center justify-center gap-3 bg-[#F5F5DC] border border-[#657A6A]/20 p-4 rounded-xl hover:bg-[#F5F5DC]/95 hover:border-[#17251E]/30 transition-all duration-300 group shadow-md"
          >
            <span className="material-symbols-outlined text-[#17251E] text-2xl group-hover:scale-110 transition-transform">
              call
            </span>
            <div className="text-left">
              <span className="font-label-caps text-[11px] text-[#1C3329] block uppercase font-semibold">Call Directly</span>
              <span className="font-display text-sm text-[#17251E]">8669813636</span>
            </div>
          </a>

          <a
            href="mailto:skintillatingg123@gmail.com"
            className="flex items-center justify-center gap-3 bg-[#F5F5DC] border border-[#657A6A]/20 p-4 rounded-xl hover:bg-[#F5F5DC]/95 hover:border-[#17251E]/30 transition-all duration-300 group shadow-md"
          >
            <span className="material-symbols-outlined text-[#17251E] text-2xl group-hover:scale-110 transition-transform">
              mail
            </span>
            <div className="text-left">
              <span className="font-label-caps text-[11px] text-[#1C3329] block uppercase font-semibold">Email Clinic</span>
              <span className="font-display text-sm text-[#17251E]">skintillatingg123@gmail.com</span>
            </div>
          </a>

          <a
            href="https://wa.me/918669813636"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#F5F5DC] border border-[#657A6A]/20 p-4 rounded-xl hover:bg-[#F5F5DC]/95 hover:border-[#17251E]/30 transition-all duration-300 group shadow-md"
          >
            <span className="material-symbols-outlined text-[#17251E] text-2xl group-hover:scale-110 transition-transform">
              chat
            </span>
            <div className="text-left">
              <span className="font-label-caps text-[11px] text-[#1C3329] block uppercase font-semibold">WhatsApp Us</span>
              <span className="font-display text-sm text-[#17251E]">Chat with Concierge</span>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content: Info & Form Grid */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase block mb-2 font-semibold">
                CLINIC ADDRESS
              </span>
              <h3 className="font-display text-[24px] text-[#F5F5DC] mb-2">
                Skintillatingg Clinic
              </h3>
              <p className="font-body-md text-[#F5F5DC]/90 text-base leading-relaxed">
                Krishna Apartments, 10, Boat Club Rd, behind Yes Bank, <br />
                Sangamvadi, Pune, Maharashtra 411001
              </p>
              <p className="font-body-md text-xs text-[#F5F5DC] mt-2 font-medium">
                Landmark: Koregaon Park / Boat Club Road Area
              </p>
            </div>

            <div className="pt-6 border-t border-[#657A6A]/30">
              <span className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase block mb-2 font-semibold">
                CLINIC HOURS
              </span>
              <ul className="space-y-2 font-body-md text-sm text-[#F5F5DC]/90">
                <li className="flex justify-between">
                  <span>Monday — Saturday:</span>
                  <span className="text-[#F5F5DC]">10:00 AM — 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#F5F5DC] font-semibold">By Prior Appointment</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#657A6A]/30">
              <span className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase block mb-2 font-semibold">
                DIRECT CONTACT
              </span>
              <p className="font-body-md text-sm text-[#F5F5DC]/90 mb-1">
                Phone: <a href="tel:8669813636" className="text-[#F5F5DC] hover:underline">8669813636</a>
              </p>
              <p className="font-body-md text-sm text-[#F5F5DC]/90">
                Email: <a href="mailto:skintillatingg123@gmail.com" className="text-[#F5F5DC] hover:underline">skintillatingg123@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F5F5DC] border border-[#657A6A]/20 rounded-2xl p-8 md:p-10 shadow-2xl text-[#17251E]">
            <h3 className="font-display text-[28px] text-[#17251E] mb-2 font-normal">
              Send an Inquiry
            </h3>
            <p className="font-body-md text-sm text-[#1C3329] mb-8">
              Fill out the details below. Our clinical staff will respond to your message promptly.
            </p>

            {isSuccess ? (
              <div className="bg-[#1C3329]/[0.04] border border-[#657A6A]/20 rounded-xl p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#1C3329] text-[#F5F5DC] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h4 className="font-display text-2xl text-[#17251E]">
                  Inquiry Details Recorded
                </h4>
                <p className="font-body-md text-sm text-[#1C3329]/90 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been formatted for our clinic coordinator. We will contact you via phone or email shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ fullName: "", phone: "", email: "", subject: "", message: "" });
                  }}
                  className="bg-[#1C3329] text-[#F5F5DC] font-button text-xs px-6 py-3 rounded hover:bg-[#1C3329]/90 transition-colors font-medium shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-[#1C3329]/[0.05] border border-[#17251E]/30 rounded p-3 text-sm text-[#17251E] placeholder-[#1C3329]/60 focus:outline-none focus:border-[#17251E] transition-colors"
                    />
                    {errors.fullName && <p className="text-red-700 text-xs mt-1 font-medium">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8669813636"
                      className="w-full bg-[#1C3329]/[0.05] border border-[#17251E]/30 rounded p-3 text-sm text-[#17251E] placeholder-[#1C3329]/60 focus:outline-none focus:border-[#17251E] transition-colors"
                    />
                    {errors.phone && <p className="text-red-700 text-xs mt-1 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ananya@example.com"
                      className="w-full bg-[#1C3329]/[0.05] border border-[#17251E]/30 rounded p-3 text-sm text-[#17251E] placeholder-[#1C3329]/60 focus:outline-none focus:border-[#17251E] transition-colors"
                    />
                    {errors.email && <p className="text-red-700 text-xs mt-1 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hair GFC Inquiry"
                      className="w-full bg-[#1C3329]/[0.05] border border-[#17251E]/30 rounded p-3 text-sm text-[#17251E] placeholder-[#1C3329]/60 focus:outline-none focus:border-[#17251E] transition-colors"
                    />
                    {errors.subject && <p className="text-red-700 text-xs mt-1 font-medium">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your aesthetic goals or questions..."
                    className="w-full bg-[#1C3329]/[0.05] border border-[#17251E]/30 rounded p-3 text-sm text-[#17251E] placeholder-[#1C3329]/60 focus:outline-none focus:border-[#17251E] transition-colors"
                  ></textarea>
                  {errors.message && <p className="text-red-700 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1C3329] text-[#F5F5DC] font-button text-[14px] py-4 rounded hover:bg-[#1C3329]/90 transition-colors duration-300 disabled:opacity-50 font-medium shadow-md"
                >
                  {isSubmitting ? "Processing Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Container */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-16 border-b border-[#657A6A]/30">
        <span className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase block mb-4 font-semibold">
          SANCTUARY LOCATION
        </span>
        <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden border border-[#AEB9A9]/30 shadow-2xl">
          <iframe
            title="Koregaon Park, Pune location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9!2d73.8909!3d18.5319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4b6ba4f3%3A0x99ba90b8e0ea9f53!2sBoat%20Club%20Rd%2C%20Sangamvadi%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24">
        <div className="max-w-3xl mb-12">
          <span className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase block mb-2 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-[32px] md:text-[44px] text-[#F5F5DC]">
            Client Questions & Information
          </h2>
        </div>

        <div className="max-w-3xl space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F5F5DC] border border-[#657A6A]/20 hover:border-[#17251E]/30 rounded-xl overflow-hidden transition-colors shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-[#17251E]">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-[#17251E] transition-transform duration-300 shrink-0">
                    {isOpen ? "remove" : "add"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-4 font-body-md text-sm text-[#1C3329] leading-relaxed border-t border-[#657A6A]/20 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
