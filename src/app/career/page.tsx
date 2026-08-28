import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Aesthetic Medicine Careers & Professional Training | CIATN | Skintillatingg",
  description: "Discover career pathways, professional skills development, continuous doctor mentorship, global exposure, and clinical practice setups with CIATN.",
};

const CAREER_PATHWAYS = [
  {
    title: "Clinical Cosmetology",
    role: "Aesthetic Doctors & Clinical Practitioners",
    desc: "Diagnose cutaneous pathologies, formulate chemical resurfacing protocols, and manage clinical skin rejuvenation.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-01.png"
  },
  {
    title: "Laser & Aesthetic Technology",
    role: "Clinical Laser Specialists",
    desc: "Operate medical-grade Q-Switched, Diode, and Fractional laser systems with strict wavelength safety and fluence calibration.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-02.png"
  },
  {
    title: "Trichology",
    role: "Hair & Scalp Specialists",
    desc: "Perform digital trichoscopic mapping, autologous growth factor concentrate (GFC) therapy, and scalp microbiome management.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-03.png"
  },
  {
    title: "Facial Aesthetics",
    role: "Facial Aesthetic Injectors",
    desc: "Perform 3D facial vector assessment, micro-dosing injectables, and tissue vectoring under strict anatomical safety protocols.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-04.png"
  },
  {
    title: "Aesthetic Clinics",
    role: "Clinic Managers & Operations Leads",
    desc: "Oversee multi-disciplinary clinical operations, patient care standards, safety compliance, and treatment scheduling.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-05.png"
  },
  {
    title: "Wellness & Beauty",
    role: "Aesthetic Therapists & Wellness Leads",
    desc: "Deliver high-end non-invasive skin therapies, advanced medi-facials, and holistic wellness procedures.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-06.png"
  },
  {
    title: "Private Practice / Entrepreneurship",
    role: "Clinic Founders & Practice Owners",
    desc: "Establish independent aesthetic clinic facilities with comprehensive understanding of machine acquisition, legal compliance, and branding.",
    image: "/images/TECHNOLOGY TRAINING CAREER/career-pathway-07.png"
  }
];

const PROFESSIONAL_SKILLS = [
  { title: "Clinical Understanding", desc: "Solid foundation in cutaneous pathology, scalp biology, and treatment mechanisms." },
  { title: "Practical Skills", desc: "Supervised tactile mastery over machine operation, handpieces, and procedural execution." },
  { title: "Technology Awareness", desc: "Clear understanding of laser wavelengths, ultrasound focal depths, and diagnostic software." },
  { title: "Patient Communication", desc: "Ethical consultation, transparent expectation management, and post-care guidance." },
  { title: "Treatment Planning", desc: "Formulating multi-modality treatment roadmaps tailored to individual patient profiles." },
  { title: "Professional Confidence", desc: "Decisive clinical decision-making built on structured mentorship and real-world observation." },
  { title: "Business Understanding", desc: "Grasping clinical operations, machine setup economics, and patient retention workflows." },
  { title: "Industry Awareness", desc: "Staying updated with global regulatory standards, safety protocols, and aesthetic developments." },
  { title: "Continuous Learning", desc: "Commitment to ongoing professional development, workshops, and advanced skill upgrades." }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* SECTION 01 — CAREER HERO */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-16 md:pt-24 pb-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-[0.2em] uppercase font-semibold">
                CAREER & PROFESSIONAL GROWTH
              </div>
              <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-normal text-[#F5F5DC]">
                Turn Your Skills <br />
                <span className="italic">Into a Career</span>
              </h1>
              <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Build a rewarding professional path in aesthetic medicine, clinical cosmetology, and trichology with structured education, clinical confidence, and ongoing mentorship from CIATN.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#paths"
                  className="bg-[#F5F5DC] text-[#17251E] hover:bg-[#F5F5DC]/90 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 shadow-md inline-flex items-center gap-2"
                >
                  <span>EXPLORE CAREER PATHS</span>
                  <span className="material-symbols-outlined text-sm font-bold">arrow_downward</span>
                </a>
                <Link
                  href="/contact"
                  className="border border-[#AEB9A9]/40 text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#F5F5DC]/10 font-button text-[12px] tracking-[0.14em] px-8 py-4 rounded-[3px] uppercase font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>START YOUR JOURNEY</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 shadow-2xl aspect-[4/3] bg-[#17251E]/80 group cinematic-img-container" data-cursor="VIEW">
                <img
                  src="/images/TECHNOLOGY TRAINING CAREER/Gemini_Generated_Image_uvgndnuvgndnuvgn.png"
                  alt="Professional Aesthetic Practice Career Pathway"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 space-y-1 pointer-events-none">
                  <span className="font-label-caps text-[10px] tracking-widest text-[#C9A227] uppercase font-semibold block drop-shadow-sm">
                    PROFESSIONAL DEVELOPMENT
                  </span>
                  <p className="font-body-md text-xs text-[#F5F5DC] font-light drop-shadow-md">
                    Empowering Medical &amp; Aesthetic Practitioners for Career Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 02 — CAREER JOURNEY */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-12 text-center max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                CAREER TRAJECTORY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                From Learning to Professional Growth
              </h2>
              <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light max-w-2xl mx-auto">
                A continuous path of professional evolution from academic learning to independent clinical practice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 cinematic-card-lift">
                <span className="font-display text-2xl text-[#C9A227]">01 — Learn</span>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Master scientific theory, cutaneous pathology, and machinery.</p>
              </div>
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 cinematic-card-lift">
                <span className="font-display text-2xl text-[#C9A227]">02 — Practice</span>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Supervised hands-on training and clinical observation.</p>
              </div>
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 cinematic-card-lift">
                <span className="font-display text-2xl text-[#C9A227]">03 — Certify</span>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Receive structured credentials and accreditation reference.</p>
              </div>
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 cinematic-card-lift">
                <span className="font-display text-2xl text-[#C9A227]">04 — Confidence</span>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Build decisive clinical judgment and patient care roadmaps.</p>
              </div>
              <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-6 rounded-xl space-y-3 cinematic-card-lift">
                <span className="font-display text-2xl text-[#C9A227]">05 — Grow</span>
                <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light">Advance into specialized clinical roles or clinic leadership.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 03 — CAREER PATHWAYS */}
      <section id="paths" className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#657A6A]/30 pb-6">
              <div>
                <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-2">
                  INDUSTRY PATHWAYS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                  Where Can Your Skills Take You?
                </h2>
              </div>
              <span className="font-label-caps text-xs tracking-wider text-[#AEB9A9] uppercase font-semibold">
                7 Professional Directions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAREER_PATHWAYS.map((path, idx) => (
                <div
                  key={idx}
                  className="bg-[#17251E]/90 border border-[#657A6A]/30 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#C9A227]/50 transition-all duration-300 group shadow-lg cinematic-card-lift"
                  data-cursor="VIEW"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1C3329] cinematic-img-container">
                      <img
                        src={path.image}
                        alt={path.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1C3329]/95 text-[#C9A227] font-label-caps text-[9px] tracking-wider uppercase px-2.5 py-1 rounded border border-[#C9A227]/30 font-semibold">
                        {path.role}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-display text-2xl font-normal text-[#F5F5DC] group-hover:text-[#C9A227] transition-colors">
                        {path.title}
                      </h3>
                      <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 leading-relaxed font-light">
                        {path.desc}
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

      {/* SECTION 04 — PROFESSIONAL SKILLS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                COMPETENCY FRAMEWORK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                More Than a Certificate
              </h2>
              <p className="font-body-md text-sm text-[#F5F5DC]/80 font-light">
                Essential professional capabilities developed through structured CIATN clinical education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROFESSIONAL_SKILLS.map((sk, idx) => (
                <div
                  key={idx}
                  className="bg-[#17251E]/80 border border-[#657A6A]/30 p-6 rounded-xl space-y-2 hover:border-[#C9A227]/40 transition-colors shadow-md cinematic-card-lift"
                >
                  <span className="font-display text-lg text-[#C9A227] block font-normal">{sk.title}</span>
                  <p className="font-body-md text-xs text-[#F5F5DC]/80 font-light leading-relaxed">
                    {sk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 05 — CAREER GUIDANCE & MENTORSHIP */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                CONTINUOUS SUPPORT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
                Guidance That Goes Beyond the Classroom
              </h2>
              <div className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light space-y-4">
                <p>
                  Professional development in aesthetic medicine does not stop when training completes. At CIATN, we provide ongoing clinical mentorship, advice on clinic setup protocols, and access to advanced refresher workshops.
                </p>
                <p>
                  Whether you are integrating new laser technology into your existing practice or establishing an independent clinical facility, our team offers evidence-based guidance every step of the way.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E] cinematic-img-container" data-cursor="VIEW">
              <img
                src="/images/TECHNOLOGY TRAINING CAREER/faculty-mentorship.png"
                alt="Faculty Mentorship Session"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 06 — GLOBAL EXPOSURE */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              GLOBAL STANDARDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              Think Beyond Borders
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 font-light leading-relaxed">
              CIATN curriculum is benchmarked against international aesthetic treatment standards, safety regulations, and cutting-edge global energy-based protocols.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 07 — PROFESSIONAL NETWORK */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-12 text-center max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                COMMUNITY ALIGNMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
                Become Part of a Growing Professional Community
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-label-caps tracking-wider text-[#F5F5DC]/90">
              <span className="px-4 py-3 bg-[#17251E] border border-[#657A6A]/40 rounded-lg">STUDENT</span>
              <span className="text-[#C9A227] font-bold">→</span>
              <span className="px-4 py-3 bg-[#17251E] border border-[#657A6A]/40 rounded-lg">FACULTY</span>
              <span className="text-[#C9A227] font-bold">→</span>
              <span className="px-4 py-3 bg-[#17251E] border border-[#657A6A]/40 rounded-lg">INDUSTRY</span>
              <span className="text-[#C9A227] font-bold">→</span>
              <span className="px-4 py-3 bg-[#17251E] border border-[#657A6A]/40 rounded-lg">PROFESSIONAL COMMUNITY</span>
              <span className="text-[#C9A227] font-bold">→</span>
              <span className="px-4 py-3 bg-[#17251E] border border-[#C9A227]/60 rounded-lg text-[#C9A227] font-semibold">CAREER GROWTH</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 08 — BUSINESS & ENTREPRENEURSHIP */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#AEB9A9]/30 aspect-[4/3] bg-[#17251E] cinematic-img-container" data-cursor="VIEW">
              <img
                src="/images/TECHNOLOGY TRAINING CAREER/image copy 2.png"
                alt="Clinical Practice Setup Guidance"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                PRACTICE MANAGEMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal leading-tight">
                Build Skills. Build Confidence. Build Your Future.
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
                For practitioners aspiring to establish their own clinical facilities, CIATN offers insights into machine selection economics, clinic layout planning, treatment pricing models, and patient consent compliance.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 09 — CERTIFICATION AS A CAREER FOUNDATION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              CREDENTIAL FOUNDATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              A Structured Path to Professional Growth
            </h2>
            <p className="font-body-md text-sm text-[#F5F5DC]/85 font-light leading-relaxed">
              Formal training and verified credentials provide a recognized foundation when building patient trust and professional credibility in the aesthetic industry.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 10 — ALUMNI / CAREER STORIES */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal>
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <span className="font-label-caps text-xs tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              PRACTITIONER SPOTLIGHT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
              Where Our Students Go
            </h2>
            <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 rounded-xl text-left space-y-3 cinematic-card-lift">
              <p className="font-body-md text-sm text-[#F5F5DC]/85 font-light leading-relaxed">
                CIATN graduates successfully operate as clinical cosmetologists, laser specialists, trichology practitioners, and clinic founders across reputed medical centers and private practices.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 11 — CAREER STATISTICS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine>
          <div className="bg-[#17251E]/90 border border-[#657A6A]/30 p-8 sm:p-12 rounded-2xl text-center max-w-2xl mx-auto space-y-3 cinematic-card-lift">
            <span className="font-display text-5xl sm:text-6xl text-[#C9A227] block font-normal">
              98%
            </span>
            <h3 className="font-display text-2xl text-[#F5F5DC]">Placement Success</h3>
            <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 font-light leading-relaxed">
              Reflecting high career transition rates and professional satisfaction among CIATN certified graduates in clinical settings.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 12 — FINAL CAREER CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20">
        <ScrollReveal>
          <div className="bg-[#657A6A] text-[#F5F5DC] rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="font-label-caps text-xs tracking-widest uppercase font-semibold block text-[#F5F5DC]">
                CAREER ADMISSIONS & ADVISORY
              </span>
              <h2 className="font-display text-[32px] sm:text-[42px] leading-tight font-normal text-[#F5F5DC]">
                Your Future in Aesthetic Medicine Starts Here
              </h2>
              <p className="font-body-md text-sm sm:text-base leading-relaxed font-light text-[#F5F5DC]/90">
                Speak with our academic counselors to map out the ideal clinical training pathway for your professional background.
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
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
