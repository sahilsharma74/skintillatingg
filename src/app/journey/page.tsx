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
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-20 border-b border-[#657A6A]/30 overflow-hidden">
        {/* Fine-Line Botanical Leaf Artwork (Top-Right Background) */}
        <div 
          className="absolute top-0 right-0 w-[35%] sm:w-[38%] md:w-[40%] max-w-[500px] h-auto pointer-events-none z-0 select-none"
          style={{
            animation: "botanicalEntrance 1.5s ease-out forwards",
          }}
        >
          <style jsx>{`
            @keyframes botanicalEntrance {
              from {
                opacity: 0;
                transform: translate(10px, -10px);
              }
              to {
                opacity: 1;
                transform: translate(0, 0);
              }
            }
          `}</style>
          <svg
            viewBox="0 0 450 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-[0.38]"
          >
            {/* Primary Curved Branch */}
            <path
              d="M440,10 C360,70 280,180 200,320 C160,390 120,460 90,530"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Offshoot Branch 1 - Upper Right */}
            <path
              d="M370,65 C310,40 230,45 170,70"
              stroke="rgba(145, 158, 130, 0.6)"
              strokeWidth="1.0"
              strokeLinecap="round"
            />

            {/* Offshoot Branch 2 - Middle Right */}
            <path
              d="M290,165 C240,185 170,175 120,150"
              stroke="rgba(145, 158, 130, 0.6)"
              strokeWidth="1.0"
              strokeLinecap="round"
            />

            {/* Offshoot Branch 3 - Lower Right */}
            <path
              d="M210,300 C170,340 120,360 70,340"
              stroke="rgba(145, 158, 130, 0.6)"
              strokeWidth="1.0"
              strokeLinecap="round"
            />

            {/* Delicate Unfilled Leaf Outlines - Group 1 (Top Branch) */}
            <path
              d="M420,25 C395,5 365,15 375,40 C395,45 415,35 420,25 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M420,25 L375,40" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M390,48 C365,25 335,35 348,60 C365,65 382,58 390,48 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M390,48 L348,60" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            {/* Delicate Unfilled Leaf Outlines - Group 2 (Upper Offshoot) */}
            <path
              d="M280,42 C255,20 225,28 235,52 C255,58 272,50 280,42 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M280,42 L235,52" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M210,58 C185,38 158,48 168,72 C188,78 202,68 210,58 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M210,58 L168,72" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            {/* Delicate Unfilled Leaf Outlines - Group 3 (Middle Main) */}
            <path
              d="M330,120 C305,98 275,108 288,135 C308,138 322,128 330,120 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M330,120 L288,135" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M280,180 C255,158 225,168 238,195 C258,198 272,188 280,180 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M280,180 L238,195" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            {/* Delicate Unfilled Leaf Outlines - Group 4 (Middle Offshoot) */}
            <path
              d="M215,172 C190,150 160,160 172,185 C192,188 208,178 215,172 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M215,172 L172,185" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M160,158 C135,138 108,148 118,170 C138,172 152,165 160,158 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M160,158 L118,170" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            {/* Delicate Unfilled Leaf Outlines - Group 5 (Lower Main & Branch) */}
            <path
              d="M240,250 C215,228 185,238 198,265 C218,268 232,258 240,250 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M240,250 L198,265" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M190,320 C165,298 135,308 148,335 C168,338 182,328 190,320 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M190,320 L148,335" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />

            <path
              d="M140,390 C115,368 85,378 98,405 C118,408 132,398 140,390 Z"
              stroke="rgba(145, 158, 130, 0.7)"
              strokeWidth="1.0"
            />
            <path d="M140,390 L98,405" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.7" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#657A6A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
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
