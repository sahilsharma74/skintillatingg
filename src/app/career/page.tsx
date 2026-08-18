"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "aesthetic-dermatologist",
    title: "Clinical Aesthetic Dermatologist",
    department: "Dermatological & Clinical Care",
    location: "Koregaon Park, Pune",
    type: "Full-Time",
    description: "Seeking a medical dermatologist (MD/DNB/DDVL) with 2+ years of experience in aesthetic medical treatments. Must have expertise in laser safety protocols, micro-dosing neurotoxins, and clinical diagnostic skin profiling."
  },
  {
    id: "aesthetic-nurse",
    title: "Senior Clinical Aesthetic Therapist / Nurse",
    department: "Clinical Therapy & Operations",
    location: "Koregaon Park, Pune",
    type: "Full-Time",
    description: "Looking for a registered nurse (B.Sc or GNM) with hands-on experience in aesthetic procedures. Responsibilities include GFC separation, mesotherapy assisting, chemical peel operations, and pre/post-op counseling."
  },
  {
    id: "front-desk-host",
    title: "Front Desk Host & Clinic Coordinator",
    department: "Guest Experience & Operations",
    location: "Koregaon Park, Pune",
    type: "Full-Time",
    description: "Act as the primary host of our wellness sanctuary. Responsible for premium guest management, appointment scheduling, billing operations, and coordinating with clinical staff for optimal diagnostic timings."
  }
];

const WHY_JOIN_US = [
  {
    title: "Clinical Excellence",
    description: "Experience advanced medical-grade aesthetic protocols using FDA-approved technologies and evidence-based science under physician guidance."
  },
  {
    title: "Continuous Learning",
    description: "Participate in clinical training workshops, medical journal clubs, and professional development programs to stay at the cutting-edge of dermatology."
  },
  {
    title: "Collaborative Culture",
    description: "Work in a supportive, multidisciplinary team environment built on respect, shared knowledge, clinical integrity, and continuous refinement."
  },
  {
    title: "Professional Growth",
    description: "Advance your career pathway through structured promotions, leadership opportunities in clinical training, and operational specialties."
  },
  {
    title: "Patient-Centred Care",
    description: "Build deep patient trust through honest candidate selection, individualized diagnostic mapping, and ultimate clinical discretion."
  }
];

export default function CareerPage() {
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
            CAREER
          </span>
          <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] leading-[1.1] font-normal">
            Build Your Career.<br />
            <span className="italic">Grow With Skintillatingg.</span>
          </h1>
          <p className="font-body-md text-[#F7F5DC]/85 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
            Join a culture built around clinical excellence, continuous learning, thoughtful care and meaningful growth.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#positions"
              className="bg-[#F7F5DC] text-[#17251E] font-button text-[12px] tracking-[0.1em] px-6 py-3 rounded uppercase font-semibold shadow-md active:scale-95 transition-transform"
            >
              VIEW OPEN POSITIONS →
            </a>
            <a
              href="#apply"
              className="border border-[#AEB9A9]/40 text-[#F7F5DC] font-button text-[12px] tracking-[0.1em] px-6 py-3 rounded uppercase font-semibold hover:border-[#F7F5DC] transition-colors"
            >
              SEND YOUR CV →
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 md:py-24">
        <div className="space-y-12">
          <div className="text-center md:text-left space-y-2">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#AEB9A9] uppercase font-semibold">
              OUR CULTURE & VALUES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#F7F5DC] font-normal">
              Why Professionals Choose Skintillatingg
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_JOIN_US.map((pillar, i) => (
              <div
                key={i}
                className="bg-[#17251E]/60 border border-[#AEB9A9]/20 rounded-md p-6 space-y-4 hover:border-[#AEB9A9]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#234237] text-[#AEB9A9] flex items-center justify-center font-display text-sm font-semibold border border-[#AEB9A9]/30">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-normal text-[#F7F5DC] leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-xs sm:text-[13px] text-[#F7F5DC]/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Reflection Article block */}
      <section className="bg-[#17251E]/30 border-t border-b border-[#AEB9A9]/10 py-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
              PRACTICE REFLECTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F5DC]">
              Ethics, Patient Trust, and Editorial Excellence in Aesthetic Medicine
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#AEB9A9]/80 tracking-wider uppercase pt-1">
              Reflections on over 12 years of building Skintillatingg
            </p>
          </div>

          <div className="font-body-md text-sm sm:text-base text-[#F7F5DC]/80 leading-relaxed font-light space-y-6">
            <p>
              Building a respected aesthetic practice requires unwavering dedication to clinical ethics, honest communication, and patient confidentiality. In an industry often dominated by commercial targets, we focus on safe, conservative, and natural enhancements.
            </p>
            <p>
              A luxury medical sanctuary balances state-of-the-art technological capabilities with a warm, human-centered approach to care. We believe clinical spaces should inspire calm, reassurance, and thorough consultations.
            </p>
            <p>
              Patient trust is earned through honest candidate selection—recommending only treatments that yield tangible, safe benefits. We do not compromise on protocols, active ingredients, or machinery.
            </p>
            <p>
              As Skintillatingg continues to serve Pune and beyond, clinical integrity and artistic subtlety remain our core guiding principles. We welcome passionate clinical professionals and coordinators to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 md:py-24">
        <div className="space-y-10">
          <div className="border-b border-[#AEB9A9]/20 pb-5">
            <h2 className="font-display text-2xl sm:text-3xl text-[#F7F5DC] font-normal">
              Open Positions
            </h2>
          </div>

          <div className="space-y-6">
            {OPEN_POSITIONS.map((job) => (
              <article
                key={job.id}
                className="bg-[#17251E]/95 border border-[#AEB9A9]/20 rounded-md p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#AEB9A9]/40 transition-colors shadow-sm"
              >
                <div className="space-y-3 max-w-3xl">
                  {/* Meta tag pills */}
                  <div className="flex flex-wrap gap-2.5">
                    <span className="bg-[#234237] text-[#AEB9A9] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded">
                      {job.department}
                    </span>
                    <span className="bg-[#1C3329] text-[#F7F5DC] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border border-[#AEB9A9]/10">
                      {job.location}
                    </span>
                    <span className="bg-[#AEB9A9] text-[#17251E] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded font-semibold">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-normal text-[#F7F5DC]">
                    {job.title}
                  </h3>
                  <p className="font-body-md text-sm text-[#F7F5DC]/80 leading-relaxed font-light">
                    {job.description}
                  </p>
                </div>

                <a
                  href="#apply"
                  className="bg-[#F7F5DC] text-[#17251E] font-button text-xs tracking-wider uppercase px-5 py-3 rounded font-semibold whitespace-nowrap active:scale-95 transition-transform"
                >
                  VIEW POSITION →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application / Apply Section */}
      <section id="apply" className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pb-24">
        <div className="bg-[#657A6A] rounded-2xl p-8 sm:p-12 md:p-16 border border-[#AEB9A9]/20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] font-semibold block">
              APPLY NOW
            </span>
            <h2 className="font-display text-[30px] sm:text-[40px] text-[#F5F5DC] leading-tight">
              Begin Your Journey with Us
            </h2>
            <p className="font-body-md text-[#F5F5DC]/90 text-sm sm:text-base leading-relaxed font-light">
              Are you passionate about aesthetic dermatology, customer hospitality, or clinical management? Send your cover letter and curriculum vitae to our clinical HR desk. We evaluate applicants on a rolling basis.
            </p>
            <div className="pt-2">
              <a
                href="mailto:careers@skintillatingg.com"
                className="bg-[#F7F5DC] text-[#17251E] font-button text-[13px] px-8 py-3.5 rounded hover:bg-[#F7F5DC]/95 transition-colors duration-300 font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>SEND YOUR CV →</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
            <p className="font-body-md text-xs text-[#F7F5DC]/70 font-light italic">
              HR Desk: careers@skintillatingg.com or reach out via our Pune Clinic line: 8669813636.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
