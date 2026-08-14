"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MILESTONES, CREDENTIALS } from "@/data/journey";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-20 border-b border-[#657A6A]/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#657A6A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-6 font-semibold">
            OUR JOURNEY
          </div>
          <h1 className="font-display text-[44px] md:text-[64px] leading-[1.1] text-[#F5F5DC] font-normal mb-6">
            Our Journey & <br />
            <span className="italic text-[#F5F5DC]">Clinical Philosophy</span>
          </h1>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg md:text-xl leading-relaxed mb-10">
            Founded by Dr. Akshaya Jain, Skintillatingg Cosmo • Tricho • Therapeutic Clinic represents over 12 years of dedication to evidence-led dermatology, artistic precision, and natural aesthetic restoration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors duration-300 inline-block font-medium shadow-md"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-[#F5F5DC]/40 text-[#F5F5DC] font-button text-[14px] px-8 py-4 rounded hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300 inline-block font-medium"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Vision & Philosophy */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#657A6A]/20 bg-[#F5F5DC] my-8 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase text-[#17251E] block font-semibold">
              CLINICAL ETHOS
            </span>
            <h2 className="font-display text-[32px] md:text-[44px] leading-tight text-[#17251E]">
              Where Evidence Meets Bespoke Aesthetic Care
            </h2>
            <p className="font-body-md text-[#1C3329] text-base md:text-lg leading-relaxed font-normal">
              At Skintillatingg, we believe true aesthetic beauty stems from skin health and anatomical harmony. Our practice rejects artificial, standardized treatments in favor of bespoke therapeutic regimens tailored to your specific micro-dermatological profile.
            </p>
            <p className="font-body-md text-[#1C3329] text-base leading-relaxed font-normal">
              Every procedure—from precision micro-dosed Botox to autologous Growth Factor Concentrate (GFC) hair revitalization—is performed under strict medical safety protocols using FDA-approved technologies.
            </p>
          </div>
          <div className="md:col-span-6 relative">
            {/* Glow frame */}
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#657A6A]/40 via-[#657A6A]/20 to-transparent z-0"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#657A6A]/30 shadow-2xl group z-10 bg-[#1C3329]">
              <img
                src="/images/dr-akshaya-jain.jpg"
                alt="Dr. Akshaya Jain — Aesthetic Cosmetologist & Celebrity Hair Specialist"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "50% 15%" }}
              />
              {/* External Caption Card below photo */}
              <div className="p-5 bg-[#1C3329] border-t border-[#657A6A]/30">
                <span className="font-display text-xl text-[#F5F5DC] block mb-1">Dr. Akshaya Jain</span>
                <span className="font-body-md text-xs text-[#F5F5DC]/90">Award-Winning Aesthetic Cosmetologist &amp; Celebrity Hair Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#657A6A]/30 bg-[#1C3329]">
        <div className="max-w-2xl mb-16">
          <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] block mb-2 font-semibold">
            MILESTONES
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] text-[#F5F5DC]">
            Milestones of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5DC] border border-[#657A6A]/20 rounded-xl p-8 hover:border-[#17251E]/30 hover:bg-[#F5F5DC]/95 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg"
            >
              <div className="font-label-caps text-xs tracking-widest text-[#17251E] mb-3 font-semibold">
                {item.year}
              </div>
              <span className="inline-block px-2.5 py-0.5 bg-[#17251E]/10 text-[#17251E] rounded text-[11px] font-label-caps mb-4 font-semibold">
                {item.category}
              </span>
              <h3 className="font-display text-[20px] text-[#17251E] mb-3 transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-[#1C3329] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials & Training */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#AEB9A9]/20 bg-[#657A6A] my-8 rounded-2xl shadow-xl">
        <div className="max-w-2xl mb-16">
          <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] block mb-2 font-semibold">
            CREDENTIALS
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] text-[#F5F5DC]">
            Clinical Credentials & Authority
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CREDENTIALS.map((cred, index) => (
            <div
              key={index}
              className="bg-[#F5F5DC] border border-[#17251E]/10 p-8 rounded-xl flex items-start gap-6 hover:border-[#17251E]/30 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#17251E]/10 border border-[#17251E]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#17251E] text-2xl">verified</span>
              </div>
              <div>
                <span className="font-label-caps text-xs text-[#17251E] tracking-wider block mb-1 font-semibold">
                  {cred.tag}
                </span>
                <h3 className="font-display text-[22px] text-[#17251E] mb-1">
                  {cred.title}
                </h3>
                <p className="font-body-md text-sm text-[#1C3329] mb-2 font-semibold">
                  {cred.subtitle}
                </p>
                <p className="font-body-md text-sm text-[#1C3329] leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-28 text-center relative bg-[#1C3329]">
        <div className="absolute inset-0 bg-[#657A6A]/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-[38px] md:text-[54px] text-[#F5F5DC] leading-tight">
            Your Skin. Your Journey. <br />
            <span className="italic text-[#F5F5DC]">Your Confidence.</span>
          </h2>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg max-w-xl mx-auto">
            Experience evidence-led aesthetic care with Dr. Akshaya Jain in Koregaon Park / Boat Club Road, Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors duration-300 font-medium shadow-md"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-[#F5F5DC]/40 text-[#F5F5DC] font-button text-[14px] px-8 py-4 rounded hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
