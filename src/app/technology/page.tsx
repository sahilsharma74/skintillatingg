import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CiatnModalitiesSection from "@/components/technology/CiatnModalitiesSection";
import ScrollReveal from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Advanced Aesthetic Technology | CIATN | Skintillatingg",
  description: "Explore the advanced clinical technology, equipment laboratories, laser modalities, and diagnostic infrastructure used for hands-on aesthetic training at CIATN.",
};

const TECH_CATEGORIES = [
  {
    title: "Laser Technology",
    desc: "Q-Switched Nd:YAG, Picosecond, and Fractional CO₂ laser workstations for pigmentary correction, scar remodeling, and skin resurfacing.",
    tag: "OPTICAL ENERGY",
    image: "/images/treatments/co2-laser.jpg"
  },
  {
    title: "Facial Aesthetics",
    desc: "High-Intensity Focused Ultrasound (HIFU), radiofrequency micro-needling, and non-invasive structural rejuvenation devices.",
    tag: "ENERGY REJUVENATION",
    image: "/images/treatments/hifu.jpg"
  },
  {
    title: "Trichology Diagnostics",
    desc: "Digital trichoscopic scalp mapping, scalp microbiome evaluation, and autologous growth factor infusion systems.",
    tag: "HAIR & SCALP",
    image: "/images/TECHNOLOGY TRAINING CAREER/imagerfffvsvg.png"
  },
  {
    title: "Skin & Cosmetology",
    desc: "Medical-grade hydro-dermabrasion, electro-desiccation, controlled chemical peeling, and needle-free electroporation.",
    tag: "CUTANEOUS RESURFACING",
    image: "/images/treatments/chemical-peel.jpg"
  },
  {
    title: "Injectable Aesthetics",
    desc: "Micro-dosing delivery systems, 3D facial vector assessment tools, and sterile procedural preparation stations.",
    tag: "STRUCTURAL INJECTABLES",
    image: "/images/treatments/dermal-fillers.jpg"
  },
  {
    title: "Clinical Diagnostics",
    desc: "Multispectral UV skin analysis, vascular imaging, and quantitative dermal hydration measurement technology.",
    tag: "CUTANEOUS MAPPING",
    image: "/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-11-29 at 15.00.49_739ab8e2.jpg"
  }
];

const GALLERY_IMAGES = [
  { url: "/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-12-13 at 7.38.55 PM (1).jpeg", title: "Laser Workstation Calibration", caption: "Precision Energy Fluence Tuning" },
  { url: "/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-11-29 at 15.05.09_4e104cd0.jpg", title: "Clinical Demonstration", caption: "Supervised Practitioner Learning" },
  { url: "/images/TECHNOLOGY TRAINING CAREER/imagegsdgbeagv.png", title: "Trichoscopic Scalp Analysis", caption: "Follicular Vitality Mapping" },
  { url: "/images/TECHNOLOGY TRAINING CAREER/image.png", title: "Facial Vectoring Assessment", caption: "3D Structural Planning" },
  { url: "/images/TECHNOLOGY TRAINING CAREER/IMG-20251129-WA0013.jpg", title: "Clinical Equipment Suite", caption: "Multi-Modality Operating Suite" }
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* SECTION 01 — CINEMATIC HERO */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-16 md:pt-24 pb-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-[0.2em] uppercase font-semibold">
                ADVANCED CLINICAL TECHNOLOGY
              </div>
              <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-normal text-[#F5F5DC]">
                Where Technology Meets <br />
                <span className="italic">Clinical Excellence</span>
              </h1>
              <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                At CIATN, modern aesthetic education is rooted in hands-on technology exposure. Learn with state-of-the-art clinical devices, understand treatment modalities, and master real-world patient application.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#modalities"
                  className="bg-[#F5F5DC] text-[#17251E] hover:bg-[#F5F5DC]/90 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 shadow-md inline-flex items-center gap-2"
                >
                  <span>EXPLORE OUR TECHNOLOGY</span>
                  <span className="material-symbols-outlined text-sm font-bold">arrow_downward</span>
                </a>
                <Link
                  href="/training"
                  className="border border-[#AEB9A9]/40 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC]/10 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>EXPLORE TRAINING</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 shadow-2xl aspect-[4/3] bg-[#17251E]/80 group cinematic-img-container" data-cursor="VIEW">
                <img
                  src="/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-12-13 at 7.38.55 PM (1).jpeg"
                  alt="CIATN Clinical Technology & Equipment Suite"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3329]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#17251E]/90 border border-[#AEB9A9]/20 rounded-lg backdrop-blur-sm">
                  <span className="font-label-caps text-[10px] tracking-widest text-[#C9A227] uppercase font-semibold block mb-1">
                    CLINICAL LEARNING ENVIRONMENT
                  </span>
                  <p className="font-body-md text-xs text-[#F5F5DC]/90 font-light">
                    Medical-Grade Workstations & Hands-On Training Equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 02 — TECHNOLOGY INTRODUCTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E] cinematic-img-container" data-cursor="VIEW">
              <img
                src="/images/TECHNOLOGY TRAINING CAREER/WhatsApp Image 2025-11-29 at 15.05.09_4e104cd0.jpg"
                alt="Practical Equipment Demonstration at CIATN"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                EDUCATIONAL PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
                Learn With the Technology Used in Modern Aesthetics
              </h2>
              <div className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light space-y-4">
                <p>
                  Aesthetic education cannot remain purely theoretical. At CIATN, we believe true clinical confidence stems from understanding the precise engineering, physical mechanisms, and safety protocols of modern aesthetic machinery.
                </p>
                <p>
                  Students are trained to evaluate skin profiles, select appropriate laser wavelengths, calibrate energy fluences, and perform multi-modality treatment protocols under strict doctor supervision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#657A6A]/30">
                <div>
                  <span className="font-display text-2xl text-[#C9A227] block font-normal">Precision</span>
                  <span className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Calibrated wavelength & pulse dynamics</span>
                </div>
                <div>
                  <span className="font-display text-2xl text-[#C9A227] block font-normal">Safety</span>
                  <span className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Fitzpatrick skin typing & cooling protocols</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 03 — ADVANCED EQUIPMENT LABS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                PRACTICAL INFRASTRUCTURE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                Advanced Equipment. Real Clinical Learning.
              </h2>
              <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light">
                Step into clinical laboratories equipped with industry-leading diagnostic and therapeutic workstations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4 hover:border-[#C9A227]/40 transition-colors shadow-md cinematic-card-lift">
                <div className="w-12 h-12 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <h3 className="font-display text-xl text-[#F5F5DC]">Modality Calibration</h3>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                  Hands-on training in adjusting spot sizes, energy densities, and pulse duration timings according to clinical indications.
                </p>
              </div>

              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4 hover:border-[#C9A227]/40 transition-colors shadow-md cinematic-card-lift">
                <div className="w-12 h-12 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <h3 className="font-display text-xl text-[#F5F5DC]">Clinical Safety Protocols</h3>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                  Rigorous instruction on eye protection, sterile handpiece handling, skin thermal relaxation times, and post-procedure care.
                </p>
              </div>

              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl space-y-4 hover:border-[#C9A227]/40 transition-colors shadow-md cinematic-card-lift">
                <div className="w-12 h-12 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="font-display text-xl text-[#F5F5DC]">Diagnostic Assessment</h3>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                  Utilizing high-magnification trichoscopy and UV dermoscopy to quantitatively evaluate baseline patient conditions.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 04 — TECHNOLOGY / MODALITIES SHOWCASE CATEGORIES */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#657A6A]/30 pb-6">
              <div>
                <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-2">
                  CLINICAL CATEGORIES
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                  Technology & Modalities Showcase
                </h2>
              </div>
              <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
                6 Core Training Domains
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#17251E]/90 border border-[#657A6A]/30 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#C9A227]/50 transition-all duration-300 group shadow-md cinematic-card-lift"
                  data-cursor="VIEW"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1C3329] cinematic-img-container">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1C3329]/95 text-[#C9A227] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border border-[#C9A227]/30 font-semibold">
                        {cat.tag}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-display text-2xl font-normal text-[#F5F5DC] group-hover:text-[#C9A227] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 leading-relaxed font-light">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/training"
                      className="w-full border border-[#AEB9A9]/30 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC] hover:text-[#17251E] font-button text-[11px] tracking-[0.12em] uppercase py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <span>EXPLORE RELATED TRAINING</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 05 — CIATN MODALITIES VIDEO SHOWCASE (RETAINED untouched) */}
      <div id="modalities">
        <CiatnModalitiesSection />
      </div>

      {/* SECTION 06 — TECHNOLOGY + CLINICAL THINKING */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="space-y-12 text-center max-w-4xl mx-auto">
          <div className="space-y-3">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              CLINICAL METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              Technology Is Only Powerful When You Know How to Use It.
            </h2>
            <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light max-w-2xl mx-auto">
              Our 4-stage practical decision framework ensures students bridge the gap between machine operations and clinical patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 hover:border-[#C9A227]/40 transition-colors shadow-md">
              <span className="font-display text-2xl text-[#C9A227] block font-normal">01 — Understand</span>
              <h4 className="font-display text-lg text-[#F5F5DC]">Biophysical Principles</h4>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Master chromatic absorption, tissue chromophores, and thermal relaxation times.
              </p>
            </div>

            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 hover:border-[#C9A227]/40 transition-colors shadow-md">
              <span className="font-display text-2xl text-[#C9A227] block font-normal">02 — Assess</span>
              <h4 className="font-display text-lg text-[#F5F5DC]">Patient Diagnostics</h4>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Conduct skin typing, evaluate pathology, and rule out contraindications before treatment.
              </p>
            </div>

            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 hover:border-[#C9A227]/40 transition-colors shadow-md">
              <span className="font-display text-2xl text-[#C9A227] block font-normal">03 — Apply</span>
              <h4 className="font-display text-lg text-[#F5F5DC]">Precision Delivery</h4>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Deliver energy parameters with controlled handpiece motion, cooling, and anatomical accuracy.
              </p>
            </div>

            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 hover:border-[#C9A227]/40 transition-colors shadow-md">
              <span className="font-display text-2xl text-[#C9A227] block font-normal">04 — Evaluate</span>
              <h4 className="font-display text-lg text-[#F5F5DC]">Clinical Endpoints</h4>
              <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                Identify erythema, frosting, or follicular edema to verify treatment efficacy and post-care safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — TECHNOLOGY IN TRAINING */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              TRAINING PROGRESSION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
              From Demonstration to Hands-On Experience
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
              Students progress step-by-step from observing senior doctors to operating clinical equipment under direct supervision.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-[#17251E]/90 border border-[#657A6A]/30 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-[#1C3329] border border-[#C9A227]/50 text-[#C9A227] flex items-center justify-center font-display text-sm font-semibold shrink-0">1</span>
                <div>
                  <h4 className="font-display text-base text-[#F5F5DC]">Expert Demonstration</h4>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Senior clinical faculty showcase machine setup and procedure protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#17251E]/90 border border-[#657A6A]/30 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-[#1C3329] border border-[#C9A227]/50 text-[#C9A227] flex items-center justify-center font-display text-sm font-semibold shrink-0">2</span>
                <div>
                  <h4 className="font-display text-base text-[#F5F5DC]">Student Observation</h4>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Close-up observation of real patient consultation, mapping, and treatment execution.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#17251E]/90 border border-[#657A6A]/30 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-[#1C3329] border border-[#C9A227]/50 text-[#C9A227] flex items-center justify-center font-display text-sm font-semibold shrink-0">3</span>
                <div>
                  <h4 className="font-display text-base text-[#F5F5DC]">Guided Practice</h4>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Supervised equipment handling and tactile technique practice on mannequins and models.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#17251E]/90 border border-[#657A6A]/30 rounded-lg">
                <span className="w-8 h-8 rounded-full bg-[#1C3329] border border-[#C9A227]/50 text-[#C9A227] flex items-center justify-center font-display text-sm font-semibold shrink-0">4</span>
                <div>
                  <h4 className="font-display text-base text-[#F5F5DC]">Clinical Understanding</h4>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Independent understanding of machine settings, troubleshooting, and post-procedure protocols.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 shadow-2xl aspect-[4/3] bg-[#17251E]">
            <img
              src="/images/TECHNOLOGY TRAINING CAREER/image.png"
              alt="Hands-On Technology Practice at CIATN"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SECTION 08 — EDITORIAL PHOTO GALLERY */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#657A6A]/30 pb-6">
            <div>
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-1">
                CLINICAL ENVIRONMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                Equipment & Environment Gallery
              </h2>
            </div>
            <span className="font-label-caps text-xs text-[#AEB9A9]">
              CIATN Training Facilities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-[#657A6A]/30 bg-[#17251E] aspect-[4/3] shadow-lg"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/90 via-[#17251E]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="font-label-caps text-[9px] tracking-widest text-[#C9A227] uppercase font-semibold block">
                    {img.caption}
                  </span>
                  <h4 className="font-display text-lg text-[#F5F5DC] font-normal">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — TECHNOLOGY CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20">
        <div className="bg-[#657A6A] text-[#F5F5DC] rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase font-semibold block text-[#F5F5DC]">
              MODERN AESTHETICS TRAINING
            </span>
            <h2 className="font-display text-[32px] sm:text-[42px] leading-tight font-normal text-[#F5F5DC]">
              See What Modern Aesthetic Education Looks Like
            </h2>
            <p className="font-body-md text-sm sm:text-base leading-relaxed font-light text-[#F5F5DC]/90">
              Discover our comprehensive training programs and masterclasses designed around modern clinical technology.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/training"
                className="bg-[#F5F5DC] text-[#17251E] font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] hover:bg-[#F5F5DC]/90 transition-colors duration-200 font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>EXPLORE TRAINING</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="border border-[#F5F5DC]/40 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC]/10 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>CONTACT CIATN</span>
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
