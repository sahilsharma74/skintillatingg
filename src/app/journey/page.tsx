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
        {/* Exact Reference Botanical Leaf-Line Art Illustration (Top-Right Background) */}
        <div 
          className="absolute top-0 right-0 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[48%] h-full pointer-events-none z-0 select-none flex items-center justify-end"
          style={{
            animation: "botanicalFadeIn 1.5s ease-out forwards",
          }}
        >
          <style jsx>{`
            @keyframes botanicalFadeIn {
              from {
                opacity: 0;
                transform: translate(12px, -12px);
              }
              to {
                opacity: 0.35;
                transform: translate(0, 0);
              }
            }
          `}</style>
          <svg
            viewBox="0 0 800 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[90%] transform translate-x-6 md:translate-x-10"
          >
            {/* Main Arching Stem from Bottom Right to Upper Left */}
            <path
              d="M780,450 Q660,340 480,240 Q360,180 200,210"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="2.0"
              strokeLinecap="round"
            />

            {/* Top-Right Secondary Branch Stem */}
            <path
              d="M580,290 Q650,210 680,80"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Lower-Middle Secondary Branch Stem */}
            <path
              d="M500,250 Q430,300 320,330"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Bottom-Right Base Branch Stem */}
            <path
              d="M700,390 Q740,360 770,330"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* --- LEAF CLUSTER 1: LEFT-MOST TIP LEAVES --- */}
            {/* Tip Leaf 1 (Leftmost pointing left) */}
            <path
              d="M200,210 C160,200 130,215 145,230 C170,245 195,225 200,210 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M200,210 L145,230" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path d="M185,215 L175,210" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />
            <path d="M175,220 L165,225" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />

            {/* Tip Leaf 2 (Pointing up-left) */}
            <path
              d="M220,205 C195,175 175,185 190,210 C205,225 220,215 220,205 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M220,205 L190,210" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Tip Leaf 3 (Pointing down-left) */}
            <path
              d="M240,215 C210,245 195,270 215,280 C235,275 245,245 240,215 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M240,215 L215,280" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* --- LEAF CLUSTER 2: UPPER-MIDDLE LEAVES --- */}
            {/* Mid-Left Leaf (Pointing up-left) */}
            <path
              d="M310,195 C280,150 250,155 270,185 C295,200 310,195 310,195 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M310,195 L270,185" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Mid-Center Leaf (Pointing up) */}
            <path
              d="M360,182 C340,130 315,135 330,168 C348,185 360,182 360,182 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M360,182 L330,168" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Prominent Vertical Leaf (Main Arch Center) */}
            <path
              d="M440,210 C420,110 395,95 418,145 C435,185 440,210 440,210 Z"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="1.3"
            />
            <path d="M440,210 L418,145" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path d="M430,180 L415,170" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />
            <path d="M435,160 L420,150" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />

            {/* Mid-Right Upward Leaf */}
            <path
              d="M500,230 C490,140 470,130 488,175 C502,205 500,230 500,230 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M500,230 L488,175" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* --- LEAF CLUSTER 3: TOP-RIGHT CORNER CLUSTER --- */}
            {/* Top-Right Vertical Tip Leaf */}
            <path
              d="M680,80 C665,25 640,30 655,70 C670,95 680,80 680,80 Z"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="1.2"
            />
            <path d="M680,80 L655,70" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Top-Right Outer Right Leaf */}
            <path
              d="M675,100 C705,50 725,60 700,95 C685,115 675,100 675,100 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M675,100 L700,95" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Top-Right Mid-Upper Right Leaf */}
            <path
              d="M650,160 C690,110 710,125 680,155 C665,175 650,160 650,160 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M650,160 L680,155" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Top-Right Inner Left Leaf */}
            <path
              d="M640,180 C600,120 580,135 610,165 C630,185 640,180 640,180 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M640,180 L610,165" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Top-Right Lower Right Leaf */}
            <path
              d="M620,230 C665,190 685,205 655,235 C635,250 620,230 620,230 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M620,230 L655,235" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* --- LEAF CLUSTER 4: LOWER-MIDDLE BRANCH CLUSTER --- */}
            {/* Lower-Middle Leftmost Leaf */}
            <path
              d="M320,330 C270,310 250,330 285,345 C310,355 320,330 320,330 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M320,330 L285,345" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Lower-Middle Center Leaf */}
            <path
              d="M380,310 C330,300 315,320 345,335 C370,345 380,310 380,310 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M380,310 L345,335" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Lower-Middle Right Leaf */}
            <path
              d="M440,280 C395,280 380,300 410,315 C430,325 440,280 440,280 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M440,280 L410,315" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* --- LEAF CLUSTER 5: MAIN TRUNK CENTER-BELOW LEAF --- */}
            <path
              d="M390,225 C345,260 330,290 365,295 C385,285 390,225 390,225 Z"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="1.3"
            />
            <path d="M390,225 L365,295" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path d="M380,250 L365,260" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />
            <path d="M375,270 L360,280" stroke="rgba(145, 158, 130, 0.35)" strokeWidth="0.6" />

            {/* --- LEAF CLUSTER 6: BASE RIGHT CLUSTER --- */}
            {/* Base Leaf 1 (Pointing right) */}
            <path
              d="M770,330 C795,300 810,315 790,340 C775,355 770,330 770,330 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M770,330 L790,340" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Base Leaf 2 (Pointing up-right) */}
            <path
              d="M740,360 C780,325 795,340 765,370 C750,380 740,360 740,360 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M740,360 L765,370" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />

            {/* Base Leaf 3 (Pointing lower right) */}
            <path
              d="M720,380 C765,360 775,380 745,400 C730,410 720,380 720,380 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M720,380 L745,400" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
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
