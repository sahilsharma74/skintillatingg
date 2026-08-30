"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/effects/ScrollReveal";

interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  certification: string;
  keyLearning: string[];
  image: string;
}

const PROGRAM_CATALOGUE: ProgramItem[] = [
  {
    id: "cosmetology",
    title: "Diploma in Clinical Cosmetology",
    category: "CLINICAL COSMETOLOGY",
    description: "Comprehensive practical training in skin pathology, medical-grade chemical peels, dermabrasion, and facial rejuvenation protocols.",
    duration: "6 Months Practical & Clinical",
    eligibility: "Medical Graduates & Cosmetologists",
    certification: "CIATN Certified Clinical Cosmetologist",
    keyLearning: ["Cutaneous Diagnostics", "Chemical Resurfacing", "Hydro-Dermabrasion", "Post-Peel Neutralization"],
    image: "/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-11-29 at 15.05.09_4e104cd0.jpg"
  },
  {
    id: "laser-technician",
    title: "Diploma in Laser Technician",
    category: "ENERGY & LASER TECHNOLOGY",
    description: "Specialized training on Q-Switched, Diode, and Fractional CO₂ laser machinery, wavelength calibration, and Fitzpatrick safety.",
    duration: "3 Months Hands-On Training",
    eligibility: "Aesthetic Technologists & Practitioners",
    certification: "Certified Laser Technician Credential",
    keyLearning: ["Q-Switched Nd:YAG", "Diode Sapphire Cooling", "Fractional CO₂ Resurfacing", "Energy Fluence Tuning"],
    image: "/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-12-13 at 7.38.55 PM (1).jpeg"
  },
  {
    id: "facial-aesthetics",
    title: "Fellowship in Facial Aesthetics",
    category: "ADVANCED INJECTABLES",
    description: "Advanced clinical fellowship covering 3D facial vector assessment, anatomical plane isolation, and minimally invasive rejuvenations.",
    duration: "4 Months Fellowship",
    eligibility: "Qualified Medical Doctors (MBBS/BAMS/BHMS/BDS)",
    certification: "Fellowship in Facial Aesthetics",
    keyLearning: ["3D Vector Assessment", "Anatomical Plane Mapping", "HIFU Muscular SMAS Lifting", "Complication Management"],
    image: "/images/TECHNOLOGY TRAINING CAREER/image.png"
  },
  {
    id: "advanced-trichology",
    title: "Advanced Diploma in Trichology",
    category: "HAIR & SCALP SCIENCE",
    description: "In-depth clinical trichology covering digital scalp mapping, autologous growth factor concentrate (GFC) therapy, and alopecia management.",
    duration: "6 Months Comprehensive",
    eligibility: "Medical Doctors & Trichologists",
    certification: "Advanced Diploma in Clinical Trichology",
    keyLearning: ["Digital Trichoscopy", "GFC & PRP Protocol", "Scalp Microbiome Assessment", "Alopecia Subtype Profiling"],
    image: "/images/TECHNOLOGY TRAINING CAREER/image copy.png"
  },
  {
    id: "botox-fillers",
    title: "Masterclass in Botox & Fillers",
    category: "INTENSIVE CLINICAL MASTERCLASS",
    description: "Hands-on intensive masterclass focusing on micro-dosing protocols, anatomical safety zone isolation, and natural facial contouring.",
    duration: "1 Month Intensive Module",
    eligibility: "Medical Doctors Only",
    certification: "Certificate of Masterclass Completion",
    keyLearning: ["Botulinum Toxin Micro-Dosing", "Hyaluronic Acid Vectoring", "Anatomical Danger Zones", "Immediate Adverse Response"],
    image: "/images/treatments/dermal-fillers.jpg"
  },
  {
    id: "clinical-trichology",
    title: "Diploma in Clinical Trichology",
    category: "HAIR REGENERATION",
    description: "Practical program focusing on non-surgical hair restoration, mesotherapy infusions, and scalp therapeutic formulations.",
    duration: "3 Months Clinical Program",
    eligibility: "Healthcare Practitioners & Therapists",
    certification: "CIATN Diploma in Clinical Trichology",
    keyLearning: ["Scalp Mesotherapy", "Laser Hair Stimulation", "Dietary & Nutritional Trichology", "Patient Care Roadmaps"],
    image: "/images/treatments/haircare/gfc-hair.webp"
  }
];

const ADVANTAGE_PILLARS = [
  { title: "Expert Doctors & Faculty", desc: "Learn directly from practising aesthetic doctors and experienced clinical specialists." },
  { title: "Hands-On Clinical Training", desc: "Supervised tactile practice on mannequins and live clinical demonstration models." },
  { title: "Industry-Relevant Curriculum", desc: "Updated protocols aligned with global aesthetic medicine and regulatory standards." },
  { title: "Advanced Equipment Labs", desc: "Training with authentic laser workstations, high-magnification diagnostics, and energy devices." },
  { title: "Structured Study Materials", desc: "Comprehensive clinical handbooks, protocol notes, and digital learning references." },
  { title: "Global Exposure & Certification", desc: "Curriculum designed around international treatment benchmarks and structured credentials." },
  { title: "Career Guidance & Mentorship", desc: "Continuous professional guidance on clinical practice setup, ethics, and career development." }
];

const STATISTICS = [
  { value: "3,500+", label: "Certified Graduates" },
  { value: "98%", label: "Placement Success" },
  { value: "12+", label: "Clinical Programs" },
  { value: "50+", label: "Expert Faculty & Trainers" },
  { value: "10+", label: "Years on Market" },
  { value: "40+", label: "Projects Completed" }
];

export default function TrainingPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* SECTION 01 — HERO */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-12 md:pt-16 pb-16 md:pb-20 border-b border-[#657A6A]/30 space-y-12">
        <ScrollReveal showGoldLine>
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-[0.2em] uppercase font-semibold">
              CIATN EDUCATION
            </div>
            <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-normal text-[#F5F5DC]">
              Transform Your Passion <br />
              <span className="italic">Into a Profession</span>
            </h1>
            <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Chromocosmo Institute of Aesthetics, Trichology & Nutrition (CIATN) delivers rigorous clinical education, hands-on technology training, and expert doctor mentorship.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="bg-[#F5F5DC] text-[#17251E] hover:bg-[#F5F5DC]/90 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 shadow-md inline-flex items-center gap-2"
              >
                <span>EXPLORE PROGRAMS</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_downward</span>
              </a>
              <Link
                href="/contact"
                className="border border-[#AEB9A9]/40 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC]/10 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>ENQUIRE NOW</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* WIDE CINEMATIC LANDSCAPE IMAGE CONTAINER WITH DIRECT TEXT OVERLAY */}
          <div className="w-full relative rounded-[24px] overflow-hidden border border-[#AEB9A9]/25 shadow-2xl aspect-[16/8.5] min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px] bg-[#17251E] group mt-8 cinematic-img-container" data-cursor="VIEW">
            <img
              src="/images/rg.avif"
              alt="CIATN Practical Clinical Education & Training"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            {/* Subtle Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Direct Text Positioned near Lower-Left (No Black Rectangle Card) */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-12 right-6 sm:right-10 max-w-2xl space-y-2 pointer-events-none">
              <span className="font-label-caps text-xs sm:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-semibold block drop-shadow-sm">
                PRACTICAL CLINICAL EDUCATION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#F5F5DC] leading-tight font-normal drop-shadow-md">
                Supervised Hands-On Learning &amp; Doctor-Led Demonstrations
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 02 — CIATN INTRODUCTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E] cinematic-img-container" data-cursor="VIEW">
              <img
                src="/images/TECHNOLOGY TRAINING CAREER/rg2.avif"
                alt="CIATN Clinical Classroom and Consultation Training"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                INSTITUTE VISION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
                Redefining Aesthetic Education
              </h2>
              <div className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light space-y-4">
                <p>
                  CIATN was established to bridge the gap between academic theory and real-world clinical practice in cosmetology, laser therapy, and trichology.
                </p>
                <p>
                  Our curriculum is designed around real clinical cases, modern aesthetic machinery, safety protocols, and personalized mentorship from practicing medical doctors.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 03 — THE CIATN ADVANTAGE */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                EDUCATIONAL PILLARS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                The CIATN Advantage
              </h2>
              <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light">
                Why medical practitioners and aesthetic professionals choose CIATN for their clinical education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ADVANTAGE_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 hover:border-[#C9A227]/40 transition-colors shadow-md cinematic-card-lift"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] font-display text-sm font-semibold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg text-[#F5F5DC]">{pillar.title}</h3>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 04 — CIATN PROGRAMS */}
      <section id="programs" className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#657A6A]/30 pb-6">
              <div>
                <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-2">
                  COURSE CATALOGUE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                  Explore Our Programs
                </h2>
              </div>
              <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
                Verified Clinical Offerings
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROGRAM_CATALOGUE.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-[#17251E]/90 border border-[#657A6A]/30 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#C9A227]/50 transition-all duration-300 group shadow-lg cinematic-card-lift"
                  data-cursor="VIEW"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1C3329] cinematic-img-container">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1C3329]/95 text-[#C9A227] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border border-[#C9A227]/30 font-semibold">
                        {prog.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="font-display text-2xl font-normal text-[#F5F5DC] group-hover:text-[#C9A227] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 leading-relaxed font-light">
                        {prog.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#657A6A]/20">
                        <div className="flex items-center gap-2 text-xs text-[#F5F5DC]/90">
                          <span className="material-symbols-outlined text-sm text-[#C9A227]">schedule</span>
                          <span className="font-medium">{prog.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#F5F5DC]/90">
                          <span className="material-symbols-outlined text-sm text-[#C9A227]">school</span>
                          <span className="font-light">{prog.eligibility}</span>
                        </div>
                      </div>

                      <div className="pt-2 space-y-1.5">
                        <span className="font-label-caps text-[9px] tracking-widest text-[#AEB9A9] uppercase font-semibold block">
                          Key Modules
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.keyLearning.map((kl, kIdx) => (
                            <span
                              key={kIdx}
                              className="bg-[#1C3329] border border-[#657A6A]/40 text-[#F5F5DC]/90 text-[10px] px-2 py-0.5 rounded font-light"
                            >
                              {kl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="w-full border border-[#AEB9A9]/30 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC] hover:text-[#17251E] font-button text-[11px] tracking-[0.12em] uppercase py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <span>ENQUIRE ABOUT PROGRAM</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 05 — LEARNING EXPERIENCE */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              ACADEMIC ENVIRONMENT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
              Learn Beyond the Classroom
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
              CIATN blends classroom lectures with interactive case discussions, video demonstrations, and immediate practical application.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/90">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Small batch sizes for personalized instructor attention</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/90">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Real patient case study reviews and complication management</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/90">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Hands-on machine setup and laser calibration sessions</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E]">
            <img
              src="/images/TECHNOLOGY TRAINING CAREER/rg3.avif"
              alt="CIATN Interactive Classroom Session"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SECTION 06 — HANDS-ON CLINICAL TRAINING */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
            PRACTICAL MASTERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
            Theory Meets Real-World Practice
          </h2>
          <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light">
            Tactile dexterity and clinical confidence are built through supervised practice on live demonstration models.
          </p>
        </div>
      </section>

      {/* SECTION 07 — STUDY MATERIALS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E]">
            <img
              src="/images/TECHNOLOGY TRAINING CAREER/IMG-20251129-WA0013.jpg"
              alt="CIATN Structured Study Manuals & Clinical Materials"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              RESOURCE ACCESS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
              Learning That Continues Beyond the Classroom
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
              Every student receives comprehensive clinical handbooks, treatment protocol sheets, consent form templates, and digital reference guides for post-course reference.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08 — FLEXIBLE LEARNING */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              MODES OF STUDY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              Flexible Learning Pathways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                <span className="material-symbols-outlined">laptop</span>
              </div>
              <h3 className="font-display text-2xl text-[#F5F5DC]">Online Theoretical Learning</h3>
              <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 font-light leading-relaxed">
                Interactive web-based lectures, anatomical modules, and theoretical exams accessible for distant practitioners.
              </p>
            </div>

            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                <span className="material-symbols-outlined">domain</span>
              </div>
              <h3 className="font-display text-2xl text-[#F5F5DC]">Campus Clinical Immersion</h3>
              <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 font-light leading-relaxed">
                Intensive hands-on training sessions in our clinical equipment suites under direct faculty supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FACULTY */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[3/4] bg-[#17251E]">
            <img
              src="/images/dr-akshaya-jain.jpg"
              alt="Dr. Akshaya Jain - Founder & Chief Clinical Mentor"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              CHIEF FACULTY & MENTOR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
              Learn From Clinical Experience
            </h2>
            <div className="space-y-1">
              <h3 className="font-display text-2xl text-[#F5F5DC]">Dr. Akshaya Jain</h3>
              <p className="font-label-caps text-xs text-[#C9A227] tracking-wider uppercase font-semibold">
                Founder & Lead Medical Director — Skintillatingg & CIATN
              </p>
            </div>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
              Dr. Akshaya Jain brings extensive clinical expertise in aesthetic medicine, laser dermatology, and facial rejuvenation. Her doctor-led teaching philosophy ensures every student masters patient safety, anatomical vectoring, and evidence-based protocols.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CERTIFICATION & ACCREDITATION (WITH INTERACTIVE CREDENTIAL VIEWER) */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              RECOGNIZED CREDENTIALS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              Recognized. Structured. Professionally Focused.
            </h2>
            <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light">
              CIATN certifications demonstrate structured academic coursework, hands-on clinical training, and procedural safety compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Credential Card 1 */}
            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4 hover:border-[#C9A227]/50 transition-colors shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs tracking-widest text-[#C9A227] font-semibold uppercase">
                  NSDC ACCREDITATION FRAMEWORK
                </span>
                <span className="material-symbols-outlined text-xl text-[#C9A227]">verified</span>
              </div>
              <h3 className="font-display text-xl text-[#F5F5DC]">National Skill Development Credential</h3>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Structured clinical education aligned with official national skill framework benchmarks and TC ID training centre guidelines.
              </p>
              <button
                onClick={() => setSelectedCert("NSDC Accreditation & TC ID Reference")}
                className="border border-[#C9A227]/40 text-[#F5F5DC] hover:bg-[#C9A227] hover:text-[#17251E] font-button text-[11px] tracking-[0.12em] px-4 py-2 rounded uppercase transition-colors inline-flex items-center gap-2 font-semibold"
              >
                <span>VIEW CREDENTIAL DETAILS</span>
                <span className="material-symbols-outlined text-xs">visibility</span>
              </button>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4 hover:border-[#C9A227]/50 transition-colors shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs tracking-widest text-[#C9A227] font-semibold uppercase">
                  INSTITUTE DIPLOMA
                </span>
                <span className="material-symbols-outlined text-xl text-[#C9A227]">workspace_premium</span>
              </div>
              <h3 className="font-display text-xl text-[#F5F5DC]">CIATN Clinical Practitioner Certificate</h3>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Official institute certification verifying completed practical hours, exam performance, and supervised clinical demonstrations.
              </p>
              <button
                onClick={() => setSelectedCert("CIATN Official Clinical Diploma")}
                className="border border-[#C9A227]/40 text-[#F5F5DC] hover:bg-[#C9A227] hover:text-[#17251E] font-button text-[11px] tracking-[0.12em] px-4 py-2 rounded uppercase transition-colors inline-flex items-center gap-2 font-semibold"
              >
                <span>VIEW CERTIFICATE SAMPLE</span>
                <span className="material-symbols-outlined text-xs">visibility</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — CIATN STATISTICS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              INSTITUTE TRACK RECORD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] mt-2">
              CIATN By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl text-center space-y-1 hover:border-[#C9A227]/40 transition-colors shadow-md"
              >
                <span className="font-display text-3xl sm:text-4xl text-[#C9A227] font-normal block">
                  {stat.value}
                </span>
                <span className="font-body-md text-xs text-[#F5F5DC]/80 font-light block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — TRAINING CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20">
        <div className="bg-[#657A6A] text-[#F5F5DC] rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase font-semibold block text-[#F5F5DC]">
              ADMISSIONS OPEN
            </span>
            <h2 className="font-display text-[32px] sm:text-[42px] leading-tight font-normal text-[#F5F5DC]">
              Your Journey Into Aesthetic Medicine Starts Here
            </h2>
            <p className="font-body-md text-sm sm:text-base leading-relaxed font-light text-[#F5F5DC]/90">
              Enquire today to speak with academic advisors regarding eligibility, course schedules, and clinical batch enrollment.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#F5F5DC] text-[#17251E] font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] hover:bg-[#F5F5DC]/90 transition-colors duration-200 font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>ENQUIRE NOW</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </Link>
              <Link
                href="/career"
                className="border border-[#F5F5DC]/40 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC]/10 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>EXPLORE CAREERS</span>
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="bg-[#17251E] border border-[#C9A227]/60 rounded-2xl max-w-lg w-full p-6 space-y-4 text-[#F5F5DC] relative shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-[#F5F5DC]/80 hover:text-[#C9A227]"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="space-y-2">
              <span className="font-label-caps text-xs text-[#C9A227] font-semibold uppercase">
                CREDENTIAL DETAIL VIEWER
              </span>
              <h3 className="font-display text-2xl font-normal text-[#F5F5DC]">
                {selectedCert}
              </h3>
            </div>
            <div className="p-4 bg-[#1C3329] border border-[#657A6A]/30 rounded-lg space-y-2 text-xs font-light text-[#F5F5DC]/90">
              <p><strong>Issuing Authority:</strong> Chromocosmo Institute of Aesthetics, Trichology & Nutrition (CIATN)</p>
              <p><strong>Verification Standard:</strong> Structured Practical Hours & Clinical Safety Compliance</p>
              <p><strong>Accreditation Reference:</strong> Aligned with NSDC skill framework & TC ID guidelines</p>
            </div>
            <button
              onClick={() => setSelectedCert(null)}
              className="w-full bg-[#F5F5DC] text-[#17251E] font-button text-xs py-3 rounded font-semibold uppercase tracking-wider"
            >
              CLOSE VIEWER
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
