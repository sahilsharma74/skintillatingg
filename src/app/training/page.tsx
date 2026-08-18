"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  format: string;
  description: string;
  image: string;
  highlights: string[];
}

const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "clinical-trichology",
    title: "Clinical Trichology & Follicle Restoration Masterclass",
    duration: "6 Months",
    format: "Hands-on In-Clinic & Theory Seminars",
    description: "Explore the diagnostic and therapeutic protocols for advanced hair and scalp disorders. This comprehensive program covers trichoscopy mapping, follicular biology, hair shaft histology, and therapeutic mesotherapy and growth factor concentrate (GFC) delivery systems.",
    image: "https://fpimages.withfloats.com/tile/6977abe0ff00fd77dd619c43.jpg",
    highlights: ["Scalp microbiome analysis", "GFC preparation & micro-injection", "Trichoscopic digital diagnostics"]
  },
  {
    id: "facial-aesthetics",
    title: "Advanced Facial Rejuvenation & Dermal Sculpting",
    duration: "3 Months",
    format: "Clinical Rotations & Case Reviews",
    description: "Designed for qualified clinical professionals looking to build expertise in facial anatomical mapping, muscle dynamics, and precise conservative neurotoxin/botulinum toxin injections. Learn to balance static and dynamic vectors for natural rejuvenation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeuYA1GF05n9uuu-1_BTr9TKdSirqrkGRMAQ8FOSyf4yY4LVuCJpsRgx9_YTPxf7kJ6ytZ_e9UxC4V9iHLyJ5AGPku0PUjJ1MOmkAOIOwQUlySJNhwTSdv6aCdDth2Up7nabq94N24Li5tbOmdrBxCTSmwzQLIYkj7OkB2cRBrbm_4Pjz__Z8cJPNJ-yQ0_ENmSZV5r0zL2yVbQfd9Sr76njbJYzdDIwsNgeNoBfiU1KnZvVHV8_8",
    highlights: ["Symmetry analysis & facial markings", "Dynamic muscular mapping", "Complication management protocols"]
  },
  {
    id: "laser-physics",
    title: "Laser Physics, Tissue Interaction & Cutaneous Safety",
    duration: "6 Weeks",
    format: "Hybrid Theoretical Seminar & Live Demos",
    description: "A focused curriculum exploring energy fluences, laser-tissue interactions, and selective photothermolysis. Includes hands-on operations on Q-Switched Nd:YAG, Picosecond, and Fractional CO₂ Laser technologies under master physician guidance.",
    image: "https://backgroundimages.withfloats.com/actual/697754475977317ff0b334a9.png",
    highlights: ["Selective photothermolysis theory", "Hyperpigmentation energy scaling", "Sapphire contact cooling mechanics"]
  },
  {
    id: "clinical-operations",
    title: "Aesthetic Clinical Assisting & Operating Workflows",
    duration: "8 Weeks",
    format: "Practical Clinic Placement",
    description: "Master the operational standards and high-hygiene setups of a premium aesthetic clinic. Essential training for assistant nurses and clinical administrators in patient database profiling, sterile layouts, and pre/post-procedure care guidance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkJDX9X5bZVA8ZmPLI3SnPjp851CyD-0_3__XkwIlmN8uMDWNNnRFRJ15k0SznH7kYrHiIISufsi_Yj3iMXFz7RLuRdU6C9OVUswolyZx2-VmwQXdKb3P8JpTGxvaFlqAl04XQjoK2h2YQiCjFlYj5DS9bDPaa1ucrQsBNELJgcGkfFjPVVdjzme4RFRsS_NSJ5jdzoUH_aPKXL5nU9uXPW9h5yc6FMCHHooEDbMUz7B5EMSxoJ5c",
    highlights: ["Sterile workspace setups", "Post-treatment compliance advising", "Medical records & photography archiving"]
  }
];

export default function TrainingPage() {
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
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="font-label-caps text-xs tracking-[0.25em] text-[#AEB9A9] uppercase font-semibold">
            TRAINING
          </span>
          <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] leading-[1.1] font-normal">
            Learn With Precision.<br />
            <span className="italic">Train With Purpose.</span>
          </h1>
          <p className="font-body-md text-[#F7F5DC]/85 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
            Advanced learning and practical training designed to build deeper understanding, confidence and clinical precision.
          </p>
        </div>
      </section>

      {/* Curriculum Showcase / Programs List */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 md:py-24">
        <div className="space-y-16">
          <div className="border-b border-[#AEB9A9]/20 pb-6 flex items-center justify-between">
            <h2 className="font-display text-xl sm:text-2xl text-[#F7F5DC] font-normal">
              Clinical Curriculums & Workshops
            </h2>
            <span className="font-label-caps text-[10px] tracking-widest text-[#AEB9A9] uppercase font-semibold">
              Koregaon Park Training Complex
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAINING_PROGRAMS.map((prog) => (
              <article
                key={prog.id}
                className="bg-[#17251E]/95 border border-[#AEB9A9]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#AEB9A9]/40 transition-all duration-300 group shadow-md"
              >
                <div>
                  {/* Image and Meta Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1C3329]/20 border-b border-[#AEB9A9]/10">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-[#1C3329]/95 text-[#F7F5DC] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded">
                        Duration: {prog.duration}
                      </span>
                      <span className="bg-[#AEB9A9] text-[#17251E] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded font-semibold">
                        {prog.format}
                      </span>
                    </div>
                  </div>

                  {/* Program Description */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#F7F5DC] leading-snug group-hover:text-[#F7F5DC]/90 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="font-body-md text-sm text-[#F7F5DC]/80 leading-relaxed font-light">
                      {prog.description}
                    </p>

                    {/* Program highlights list */}
                    <div className="pt-4 border-t border-[#AEB9A9]/10">
                      <span className="font-label-caps text-[9px] tracking-wider text-[#AEB9A9] uppercase font-semibold block mb-2">
                        Core Training Highlights
                      </span>
                      <div className="space-y-1.5 font-body-md text-xs text-[#F7F5DC]/80 font-light">
                        {prog.highlights.map((h, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AEB9A9] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explore Program Button */}
                <div className="px-6 sm:px-8 pb-6 pt-2">
                  <Link
                    href="/contact"
                    className="w-full bg-[#1C3329] border border-[#AEB9A9]/35 hover:bg-[#F7F5DC] hover:text-[#17251E] hover:border-[#F7F5DC] text-[#F7F5DC] font-button text-[11px] tracking-[0.12em] uppercase py-3 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                  >
                    <span>EXPLORE PROGRAM</span>
                    <span className="material-symbols-outlined text-[13px] font-bold">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Content / Training Highlights */}
      <section className="bg-[#17251E]/30 border-t border-b border-[#AEB9A9]/10 py-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
              TEACHING PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F5DC]">
              Continuous Clinical Training & Innovations in Trichology
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#AEB9A9] tracking-wider uppercase pt-1">
              Led By Dr. Akshaya Jain
            </p>
          </div>

          <div className="font-body-md text-sm sm:text-base text-[#F7F5DC]/80 leading-relaxed font-light space-y-6">
            <p>
              Trichology is a rapidly evolving medical field bridging clinical dermatology, endocrinology, and aesthetic hair restoration. Standardized solutions often ignore underlying systemic factors, which is why advanced diagnostic preparation is at the core of our teaching.
            </p>
            <p>
              Advanced clinical workshops focus on trichoscopic micro-diagnostics, scalp microbiome balance, and bio-identical peptides. Students learn to read capillary dynamics and scalp sebum margins under live polarized trichoscopy assessments.
            </p>
            <p>
              Continuous medical education ensures practitioners remain skilled in emerging non-surgical follicle revitalization techniques, GFC separation chemistry, and post-procedure recovery management.
            </p>
            <p>
              Patient outcomes consistently improve when treatments are rooted in peer-reviewed clinical research and rigorous hands-on training. At Skintillatingg, we cultivate a structured academic environment for continuous refinement.
            </p>
          </div>
        </div>
      </section>

      {/* Training Enquiry Banner */}
      <section id="enquire" className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20">
        <div className="bg-[#AEB9A9] text-[#17251E] rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-label-caps text-xs tracking-widest text-[#17251E]/80 uppercase font-semibold block">
              ACADEMIC ADMISSIONS
            </span>
            <h2 className="font-display text-[32px] sm:text-[42px] leading-tight text-[#17251E] font-normal">
              Ready to Advance Your Dermal & Hair Practice?
            </h2>
            <p className="font-body-md text-[#17251E]/90 text-base sm:text-lg leading-relaxed font-light">
              Submit your credentials or schedule a preliminary interview with our academic admissions committee for upcoming workshop intakes.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-[#17251E] text-[#F7F5DC] font-button text-[13px] px-10 py-4 rounded hover:bg-[#17251E]/90 transition-colors duration-300 font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>ENQUIRE ABOUT TRAINING</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
