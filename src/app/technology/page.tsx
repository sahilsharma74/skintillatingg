"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ClinicalTech {
  id: string;
  name: string;
  image: string;
  purpose: string;
  description: string;
  specification: string;
}

const TECH_SHOWCASE: ClinicalTech[] = [
  {
    id: "q-switch-ndyag",
    name: "Q-Switched Nd:YAG Laser System",
    image: "https://backgroundimages.withfloats.com/actual/697754475977317ff0b334a9.png",
    purpose: "Pigment Target & Shattering",
    description: "Delivers rapid, nanosecond pulses of light energy to shatter deep dermal pigments. Excellent for treating melasma, birthmarks, freckles, and tattoo removal with zero thermal damage. Uses photo-acoustic therapy to stimulate internal repair mechanisms.",
    specification: "Dual Wavelength: 1064nm / 532nm | Pulse Duration: Nanosecond | Epidermal Cooling: Contact Sapphire"
  },
  {
    id: "fractional-co2",
    name: "Fractional CO₂ Resurfacing Laser",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkJDX9X5bZVA8ZmPLI3SnPjp851CyD-0_3__XkwIlmN8uMDWNNnRFRJ15k0SznH7kYrHiIISufsi_Yj3iMXFz7RLuRdU6C9OVUswolyZx2-VmwQXdKb3P8JpTGxvaFlqAl04XQjoK2h2YQiCjFlYj5DS9bDPaa1ucrQsBNELJgcGkfFjPVVdjzme4RFRsS_NSJ5jdzoUH_aPKXL5nU9uXPW9h5yc6FMCHHooEDbMUz7B5EMSxoJ5c",
    purpose: "Deep Structural Cellular Resurfacing",
    description: "A precision-guided micro-ablative laser that creates grid-pattern micro-thermal zones in the dermis, leaving adjacent skin intact. Triggers accelerated wound healing, smoothing acne scars, reducing deep wrinkles, and tightening lax skin layers.",
    specification: "Wavelength: 10600nm | Type: Carbon Dioxide Gas Laser | Scanner Mode: Fractional Grid Matrix"
  },
  {
    id: "hifu-smas",
    name: "High-Intensity Focused Ultrasound (HIFU)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeuYA1GF05n9uuu-1_BTr9TKdSirqrkGRMAQ8FOSyf4yY4LVuCJpsRgx9_YTPxf7kJ6ytZ_e9UxC4V9iHLyJ5AGPku0PUjJ1MOmkAOIOwQUlySJNhwTSdv6aCdDth2Up7nabq94N24Li5tbOmdrBxCTSmwzQLIYkj7OkB2cRBrbm_4Pjz__Z8cJPNJ-yQ0_ENmSZV5r0zL2yVbQfd9Sr76njbJYzdDIwsNgeNoBfiU1KnZvVHV8_8",
    purpose: "Non-Surgical SMAS Face Lift",
    description: "Utilizes medical-grade ultrasound crystals focusing mechanical energy deep into the cutaneous SMAS layer (superficial muscular aponeurotic system). Reorganizes deep structural tissues, producing dynamic lifting and tightening without surface incisions.",
    specification: "Focal Depth: 1.5mm - 4.5mm | Temperature: 60°C - 70°C at Target Dermal Layers | Energy: Focused Acoustic"
  },
  {
    id: "diode-cool-tip",
    name: "Diode Cool-Tip Laser System",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6qOF36vdYr91s-acTvRA-Xnl1VWKUHmqw0Uvjzo5veRTHi3l11H3oFdqhANrj7RFLvoz3abG9lDfKQu342RefmYNaK5QJrD7hOMWkm4o78sedD9DSiQlCiDdOnaecCZr45JSVleTMBazp00yqWTYsoJnluBcZofSIhouqJ6JkqTRPWK4uMwFk7caA-mv1YJ2R_ha57wyzqMLwNBhrsHbIBqUdkQTe_r_756Bb3Uw1XdKG6ClFwQ",
    purpose: "Permanent Hair Follicle Reduction",
    description: "Highly targeted diode energy penetrates deep to selectively destroy hair follicle melanin. Equipped with advanced dynamic sapphire window cooling which maintains the epidermis at a stable 4°C, neutralizing pain and protecting sensitive outer layers.",
    specification: "Wavelength: 808nm / 810nm | Cooling: Integrated Sapphire Contact Cooling | Application: All Skin Types"
  }
];

export default function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState<ClinicalTech>(TECH_SHOWCASE[0]);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F7F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#AEB9A9]/20 overflow-hidden">
        {/* Botanical SVG Background Decoration */}
        <div className="absolute top-0 right-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] h-full pointer-events-none z-0 select-none flex items-center justify-end opacity-25">
          <svg
            viewBox="0 0 800 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[90%]"
          >
            <path
              d="M780,450 Q660,340 480,240 Q360,180 200,210"
              stroke="rgba(174, 185, 169, 0.85)"
              strokeWidth="2.0"
              strokeLinecap="round"
            />
            <path
              d="M580,290 Q650,210 680,80"
              stroke="rgba(174, 185, 169, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M500,250 Q430,300 320,330"
              stroke="rgba(174, 185, 169, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M200,210 C160,200 130,215 145,230 C170,245 195,225 200,210 Z"
              stroke="rgba(174, 185, 169, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M200,210 L145,230" stroke="rgba(174, 185, 169, 0.5)" strokeWidth="0.8" />
            <path
              d="M310,195 C280,150 250,155 270,185 C295,200 310,195 310,195 Z"
              stroke="rgba(174, 185, 169, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M310,195 L270,185" stroke="rgba(174, 185, 169, 0.5)" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="font-label-caps text-xs tracking-[0.25em] text-[#AEB9A9] uppercase font-semibold">
            TECHNOLOGY
          </span>
          <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] leading-[1.1] font-normal">
            Advanced Technology.<br />
            <span className="italic">Precision in Every Treatment.</span>
          </h1>
          <p className="font-body-md text-[#F7F5DC]/85 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
            Discover the advanced technology and modern aesthetic systems that support precise, safe and natural-looking treatments at Skintillatingg.
          </p>
        </div>
      </section>

      {/* Interactive Showcase Grid */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Tab Buttons */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-label-caps text-[11px] tracking-[0.2em] text-[#AEB9A9] uppercase font-bold mb-6">
              Clinical Systems
            </h2>
            <div className="space-y-3">
              {TECH_SHOWCASE.map((tech) => {
                const isSelected = selectedTech.id === tech.id;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech)}
                    className={`w-full text-left p-5 rounded-md border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#234237]/80 border-[#AEB9A9] text-[#F7F5DC] shadow-lg translate-x-2"
                        : "bg-[#17251E]/40 border-[#AEB9A9]/20 text-[#F7F5DC]/70 hover:border-[#AEB9A9]/40 hover:text-[#F7F5DC]"
                    }`}
                  >
                    <span className="font-label-caps text-[9px] tracking-widest text-[#AEB9A9] block mb-1 uppercase font-semibold">
                      {tech.purpose}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-normal block leading-tight">
                      {tech.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Technology Details Card */}
          <div className="lg:col-span-8 bg-[#17251E]/90 border border-[#AEB9A9]/20 rounded-md p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Image Box */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-[#1C3329]/10">
              <img
                src={selectedTech.image}
                alt={selectedTech.name}
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#1C3329]/95 text-[#F7F5DC] font-label-caps text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-[#AEB9A9]/20">
                  {selectedTech.purpose}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F7F5DC]">
                {selectedTech.name}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-[#F7F5DC]/90 leading-relaxed font-light">
                {selectedTech.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="p-4 bg-[#234237]/45 border-l-2 border-[#AEB9A9] rounded-sm space-y-1">
              <h4 className="font-label-caps text-[10px] tracking-wider text-[#AEB9A9] uppercase font-semibold">
                Clinical Parameters & Output
              </h4>
              <p className="font-body-md text-[12.5px] text-[#F7F5DC]/80 font-light">
                {selectedTech.specification}
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2 border-t border-[#AEB9A9]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-body-md text-[13px] text-[#AEB9A9]/80 font-light">
                Available for custom diagnostic treatment planning at KP Clinic.
              </span>
              <a
                href="#clinical-articles"
                className="font-button text-[12px] text-[#F7F5DC] border-b border-[#AEB9A9] pb-0.5 tracking-wider uppercase hover:text-[#AEB9A9] transition-colors font-semibold"
              >
                EXPLORE TECHNOLOGY →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Tech Innovations Article Pane */}
      <section id="clinical-articles" className="bg-[#17251E]/30 border-t border-b border-[#AEB9A9]/10 py-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
              JOURNAL ARTICLE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F5DC]">
              FDA-Approved Laser Systems in Modern Dermatological Care
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs font-label-caps text-[#AEB9A9]/75 pt-2">
              <span>By Dr. Akshaya Jain</span>
              <span>•</span>
              <span>6 Min Read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none font-body-md text-sm sm:text-base text-[#F7F5DC]/80 leading-relaxed font-light space-y-6">
            <p>
              Dermatological laser technology has undergone revolutionary advancements in energy delivery, wavelength specificity, and skin safety profiles. In our Koregaon Park practice, we strictly select and configure medical-grade systems that maintain cellular integrity while producing targeted tissue correction.
            </p>
            <p>
              Fractional non-ablative lasers create microscopic thermal zones that trigger natural collagen remodeling without compromising epidermal integrity, significantly reducing post-procedure downtime. Rather than stripping the absolute skin surface, this modern grid approach heals tissues from within.
            </p>
            <p>
              Picosecond lasers use ultra-short pulse durations to break down melasma and stubborn hyperpigmentation through photomechanical pressure rather than thermal heat. This drastically minimizes the risk of post-inflammatory hyperpigmentation (PIH), a critical safety enhancement for deep Asian skin tones.
            </p>
            <p>
              Furthermore, integrated contact cooling systems (like sapphire and liquid nitrogen flow) actively protect delicate cutaneous sensors, ensuring high efficacy with optimal patient comfort during the pulse duration.
            </p>
          </div>

          {/* Key Takeaways Card */}
          <div className="bg-[#17251E]/60 border border-[#AEB9A9]/20 rounded p-6 sm:p-8 space-y-4">
            <h4 className="font-label-caps text-xs tracking-widest text-[#AEB9A9] uppercase font-semibold">
              Key Safety & Clinical takeaways
            </h4>
            <ul className="space-y-3 font-body-md text-sm text-[#F7F5DC]/90 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#AEB9A9] font-bold">•</span>
                <span>Wavelength precision protects surrounding healthy dermal tissue.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AEB9A9] font-bold">•</span>
                <span>Photo-acoustic technology treats hyperpigmentation without excessive dynamic heat.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AEB9A9] font-bold">•</span>
                <span>Integrated cooling maximizes patient comfort during energy delivery.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Consultation CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20">
        <div className="bg-[#657A6A] rounded-2xl p-8 sm:p-12 md:p-16 border border-[#AEB9A9]/20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] font-semibold block">
              DIAGNOSTIC CONSULTATION
            </span>
            <h2 className="font-display text-[30px] sm:text-[40px] text-[#F5F5DC] leading-tight">
              Curate Your Custom Care Plan
            </h2>
            <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed">
              Every skin and hair type is unique. Book a comprehensive diagnostic mapping session to see how our clinical technology can help you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-consultation"
                className="bg-[#F5F5DC] text-[#17251E] font-button text-[13px] px-8 py-3.5 rounded hover:bg-[#F5F5DC]/95 transition-colors duration-300 font-semibold shadow-md inline-block"
              >
                Book Consultation Online
              </Link>
              <Link
                href="/contact"
                className="border border-[#F5F5DC]/45 text-[#F5F5DC] font-button text-[13px] px-8 py-3.5 rounded hover:border-[#F5F5DC] hover:bg-[#17251E]/20 transition-all duration-300 font-semibold inline-block"
              >
                Explore Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
