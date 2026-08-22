"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import {
  TREATMENTS_DATA,
  TREATMENT_CATEGORIES,
  TreatmentSubcategory,
} from "@/data/treatments";

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<TreatmentSubcategory>("ALL");

  const filteredTreatments =
    selectedCategory === "ALL"
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((item) =>
          item.subcategories.includes(selectedCategory)
        );

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section with Botanical Illustration */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#657A6A]/30 overflow-hidden">
        {/* Botanical SVG Background Decoration */}
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
            {/* Main Arching Stem */}
            <path
              d="M780,450 Q660,340 480,240 Q360,180 200,210"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="2.0"
              strokeLinecap="round"
            />
            {/* Secondary Stems */}
            <path
              d="M580,290 Q650,210 680,80"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M500,250 Q430,300 320,330"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M700,390 Q740,360 770,330"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Leaves */}
            <path
              d="M200,210 C160,200 130,215 145,230 C170,245 195,225 200,210 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M200,210 L145,230" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path
              d="M220,205 C195,175 175,185 190,210 C205,225 220,215 220,205 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M220,205 L190,210" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path
              d="M310,195 C280,150 250,155 270,185 C295,200 310,195 310,195 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M310,195 L270,185" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path
              d="M440,210 C420,110 395,95 418,145 C435,185 440,210 440,210 Z"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="1.3"
            />
            <path d="M440,210 L418,145" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path
              d="M680,80 C665,25 640,30 655,70 C670,95 680,80 680,80 Z"
              stroke="rgba(145, 158, 130, 0.85)"
              strokeWidth="1.2"
            />
            <path d="M680,80 L655,70" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
            <path
              d="M675,100 C705,50 725,60 700,95 C685,115 675,100 675,100 Z"
              stroke="rgba(145, 158, 130, 0.8)"
              strokeWidth="1.2"
            />
            <path d="M675,100 L700,95" stroke="rgba(145, 158, 130, 0.5)" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#657A6A]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <ScrollReveal direction="up" delay={100} showGoldLine goldLinePosition="bottom" className="relative z-10 max-w-3xl pb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-6 font-semibold">
              TREATMENTS CATALOGUE
            </div>
            <h1 className="font-display text-[42px] sm:text-[54px] md:text-[64px] leading-[1.1] text-[#F5F5DC] font-normal mb-6">
              Bespoke Clinical & <br />
              <span className="italic text-[#F5F5DC]">Aesthetic Protocols</span>
            </h1>
            <p className="font-body-md text-[#F5F5DC]/90 text-lg md:text-xl leading-relaxed">
              Explore Dr. Akshaya Jain&apos;s curated spectrum of evidence-led dermatological, facial sculpt, hair restoration, and laser resurfacing therapies.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Filter Bar Section */}
      <section className="sticky top-20 z-30 bg-[#1C3329]/95 backdrop-blur-md border-b border-[#657A6A]/30 py-4 px-[20px] md:px-[80px]">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
          <span className="font-label-caps text-xs tracking-widest text-[#AEB9A9] uppercase mr-3 shrink-0 font-semibold hidden sm:inline-block">
            Filter By:
          </span>
          {TREATMENT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-label-caps text-[11px] md:text-[12px] tracking-[0.12em] uppercase px-4 py-2 rounded transition-all duration-300 shrink-0 font-semibold ${
                  isActive
                    ? "bg-[#F5F5DC] text-[#17251E] shadow-md scale-[1.02]"
                    : "bg-[#17251E]/60 text-[#F5F5DC]/80 border border-[#657A6A]/30 hover:border-[#F5F5DC]/50 hover:text-[#F5F5DC]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Catalogue Explorer Grid */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-16 md:py-24">
        {/* Editorial Section Header for HAIRCARE or standard Header */}
        {selectedCategory === "HAIRCARE" ? (
          <div className="mb-12 space-y-3 border-b border-[#657A6A]/30 pb-8">
            <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase font-semibold">
              HAIRCARE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F5F5DC] font-normal">
              Haircare Treatments
            </h2>
            <p className="font-body-md text-base sm:text-lg text-[#F5F5DC]/90 max-w-3xl leading-relaxed">
              Advanced hair and scalp treatments designed to support healthier-looking hair, scalp wellness and personalized hair restoration goals.
            </p>
            <div className="pt-2">
              <span className="font-label-caps text-xs tracking-widest text-[#AEB9A9] uppercase font-medium">
                Showing {filteredTreatments.length} Haircare Treatments
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-10 border-b border-[#657A6A]/20 pb-4">
            <h2 className="font-display text-xl sm:text-2xl text-[#F5F5DC]">
              {selectedCategory === "ALL"
                ? "All Clinical Protocols"
                : `${selectedCategory} Protocols`}
            </h2>
            <span className="font-label-caps text-xs tracking-widest text-[#AEB9A9] uppercase">
              Showing {filteredTreatments.length} {filteredTreatments.length === 1 ? "Treatment" : "Treatments"}
            </span>
          </div>
        )}

        {filteredTreatments.length === 0 ? (
          <div className="text-center py-20 bg-[#17251E]/40 border border-[#657A6A]/20 rounded-2xl p-8 max-w-lg mx-auto">
            <p className="font-display text-2xl text-[#F5F5DC] mb-3">No Treatments Found</p>
            <p className="font-body-md text-sm text-[#F5F5DC]/70 mb-6">
              There are currently no treatments listed under this specific category filter.
            </p>
            <button
              onClick={() => setSelectedCategory("ALL")}
              className="bg-[#F5F5DC] text-[#17251E] font-button text-xs px-6 py-3 rounded uppercase tracking-wider font-semibold"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <ScrollReveal key={treatment.id} delay={100 + (index % 3) * 100} direction="up">
                <article
                  data-cursor="VIEW"
                  className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl overflow-hidden hover:border-[#F5F5DC]/40 transition-all duration-500 group flex flex-col justify-between shadow-xl cinematic-card-lift cinematic-img-container cursor-pointer h-full"
                >
                  <div>
                    {/* Image Frame */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#1C3329]">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17251E] via-transparent to-transparent opacity-80" />
                      
                      {/* Category Tags Overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        {treatment.subcategories
                          .filter((tag) => tag !== "ALL")
                          .slice(0, 2)
                          .map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#1C3329]/90 border border-[#AEB9A9]/30 text-[#F5F5DC] font-label-caps text-[10px] tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-display text-2xl text-[#F5F5DC] group-hover:text-[#F5F5DC] transition-colors leading-snug">
                        {treatment.title}
                      </h3>
                      <p className="font-body-md text-sm text-[#F5F5DC]/80 line-clamp-3 leading-relaxed">
                        {treatment.excerpt}
                      </p>

                      {/* Quick Specs Pill Badges */}
                      <div className="pt-2 border-t border-[#657A6A]/20 grid grid-cols-2 gap-2 font-label-caps text-[11px] text-[#AEB9A9]">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs text-[#F5F5DC]/60">schedule</span>
                          <span>{treatment.procedureOverview.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs text-[#F5F5DC]/60">bedtime</span>
                          <span>{treatment.procedureOverview.downtime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="flex-1 bg-[#1C3329] border border-[#657A6A]/40 hover:bg-[#657A6A]/30 text-[#F5F5DC] font-button text-[11px] tracking-[0.12em] uppercase py-3 px-3 rounded transition-all duration-300 flex items-center justify-center gap-1 font-semibold group/btn"
                    >
                      <span>Details</span>
                      <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-0.5 transition-transform">
                        north_east
                      </span>
                    </Link>
                    <Link
                      href={`/book-consultation?treatment=${treatment.slug}`}
                      className="flex-1 bg-[#F5F5DC] text-[#17251E] hover:bg-[#C9A227] hover:text-[#17251E] font-button text-[11px] tracking-[0.12em] uppercase py-3 px-3 rounded transition-all duration-300 flex items-center justify-center gap-1 font-semibold group/inq shadow-sm"
                    >
                      <span>INQUIRE</span>
                      <span className="material-symbols-outlined text-xs group-hover/inq:translate-x-0.5 transition-transform">
                        east
                      </span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* Consultation Banner CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto pb-24">
        <ScrollReveal direction="up" delay={150} showGoldLine goldLinePosition="top">
          <div className="bg-[#657A6A] rounded-2xl p-8 sm:p-12 md:p-16 border border-[#AEB9A9]/20 text-center relative overflow-hidden shadow-2xl cinematic-card-lift">
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-transparent via-[#F5F5DC]/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] font-semibold block">
                PERSONALIZED DIAGNOSTIC CARE
              </span>
              <h2 className="font-display text-[32px] sm:text-[42px] text-[#F5F5DC] leading-tight">
                Unsure Which Protocol Suits Your Skin?
              </h2>
              <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed">
                Schedule a comprehensive clinical diagnostic assessment with Dr. Akshaya Jain in Pune to customize a therapeutic care plan for your unique goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/book-consultation"
                  className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#C9A227] hover:text-[#17251E] transition-colors duration-300 font-semibold shadow-md inline-block"
                >
                  Book Diagnostic Consultation
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#F5F5DC]/40 text-[#F5F5DC] font-button text-[14px] px-8 py-4 rounded hover:border-[#F5F5DC] hover:bg-[#17251E]/20 transition-all duration-300 font-semibold inline-block"
                >
                  Contact Clinic Direct
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
