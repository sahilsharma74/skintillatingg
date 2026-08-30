"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredItems = selectedCategory === "ALL"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const getAspectClass = (aspect: GalleryItem["aspect"]) => {
    switch (aspect) {
      case "tall-portrait":
        return "aspect-[9/14] sm:aspect-[9/15]";
      case "portrait":
        return "aspect-[4/5] sm:aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3] sm:aspect-[16/11]";
      case "wide-landscape":
        return "aspect-[16/9] sm:aspect-[21/9]";
      case "square":
        return "aspect-square";
      case "floating":
        return "aspect-[5/6]";
      default:
        return "aspect-[4/3]";
    }
  };

  const getColSpanClass = (id: string) => {
    switch (id) {
      case "gallery-01":
        return "col-span-12 md:col-span-6 lg:col-span-7";
      case "gallery-02":
        return "col-span-12 md:col-span-6 lg:col-span-5";
      case "gallery-03":
        return "col-span-12 md:col-span-6 lg:col-span-5";
      case "gallery-04":
        return "col-span-12 md:col-span-12 lg:col-span-12";
      case "gallery-05":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "gallery-06":
        return "col-span-12 md:col-span-6 lg:col-span-5";
      case "gallery-07":
        return "col-span-12 md:col-span-12 lg:col-span-3";
      case "gallery-08":
        return "col-span-12 md:col-span-8 lg:col-span-8";
      case "gallery-09":
        return "col-span-12 md:col-span-4 lg:col-span-4";
      case "gallery-10":
        return "col-span-12 md:col-span-7 lg:col-span-7";
      case "gallery-11":
        return "col-span-12 md:col-span-5 lg:col-span-5";
      default:
        return "col-span-12 md:col-span-6 lg:col-span-6";
    }
  };

  return (
    <div className="bg-[#0F241B] min-h-screen text-[#F1EFE4] selection:bg-[#C9A227]/30">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-28">
        {/* ==================================================
            1. PAGE HERO — MINIMAL EDITORIAL OPENING
        ================================================== */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto mb-16 sm:mb-24">
          <ScrollReveal showGoldLine goldLinePosition="bottom" className="pb-10">
            <div className="max-w-3xl space-y-4">
              <span className="font-label-caps text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#C9A227] font-semibold block">
                VISUAL JOURNAL
              </span>
              <h1 className="font-display text-[42px] sm:text-[60px] lg:text-[76px] text-[#F1EFE4] font-normal leading-[1.05] tracking-tight">
                Inside Skintillatingg
              </h1>
              <p className="font-body-md text-[15px] sm:text-[17px] text-[#A6A397] leading-relaxed font-light pt-2 max-w-2xl">
                A visual collection of clinical precision, education, technology, people and moments from the Skintillatingg world.
              </p>
            </div>
          </ScrollReveal>

          {/* CATEGORY FILTER CONTROL BAR */}
          <ScrollReveal delay={100} className="mt-8 pt-6 border-t border-[#3F463A]/50">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-2">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-label-caps text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-4 py-2 rounded-xs border transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#C9A227] text-[#0F241B] border-[#C9A227] font-semibold shadow-sm"
                        : "bg-[#17251E]/60 text-[#F1EFE4]/70 border-[#3F463A]/60 hover:text-[#F1EFE4] hover:border-[#A6A397]/50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* ==================================================
            2-11. MAIN GALLERY — ASYMMETRIC MASONRY COMPOSITION
        ================================================== */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            {filteredItems.map((item, idx) => {
              const aspectClass = getAspectClass(item.aspect);
              const colSpanClass = getColSpanClass(item.id);

              return (
                <div
                  key={item.id}
                  className={`${colSpanClass} relative group`}
                >
                  <ScrollReveal delay={100 + (idx % 3) * 120} direction="up">
                    {/* OVERLAP TYPE 1: OFFSET NUMBER BADGE */}
                    {item.overlapType === "offset-number" && (
                      <div className="absolute -top-4 -left-3 z-30 font-display text-[28px] sm:text-[34px] italic text-[#C9A227] font-normal leading-none pointer-events-none drop-shadow-md">
                        {item.number}
                      </div>
                    )}

                    {/* OVERLAP TYPE 2: FLOATING BADGE */}
                    {item.overlapType === "floating-badge" && (
                      <div className="absolute -top-3 right-4 z-30 font-label-caps text-[9px] tracking-[0.2em] uppercase text-[#0F241B] bg-[#F1EFE4] font-semibold px-3 py-1 rounded-xs shadow-md pointer-events-none">
                        ARCHIVE ENTRY
                      </div>
                    )}

                    {/* MAIN IMAGE CONTAINER / PLACEHOLDER CANVAS */}
                    <div
                      className={`w-full ${aspectClass} relative rounded-lg border border-[#3F463A]/60 hover:border-[#C9A227]/70 transition-all duration-500 overflow-hidden group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] flex flex-col justify-between p-6 sm:p-8 cursor-pointer`}
                      style={{
                        backgroundColor: item.accentColor || "#17251E",
                      }}
                    >
                      {/* Subtle Architectural Wireframe Markers & Crosshairs */}
                      <div className="absolute inset-0 bg-[radial-gradient(#F1EFE4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
                      
                      {/* Corner Architectural Crosshairs (+) */}
                      <span className="absolute top-3 left-3 text-[10px] text-[#A6A397]/40 font-mono pointer-events-none">+</span>
                      <span className="absolute top-3 right-3 text-[10px] text-[#A6A397]/40 font-mono pointer-events-none">+</span>
                      <span className="absolute bottom-3 left-3 text-[10px] text-[#A6A397]/40 font-mono pointer-events-none">+</span>
                      <span className="absolute bottom-3 right-3 text-[10px] text-[#A6A397]/40 font-mono pointer-events-none">+</span>

                      {/* ACTUAL IMAGE OR ELEGANT PLACEHOLDER SURFACE */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      ) : (
                        /* Architectural Empty Image Canvas Placeholder */
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group-hover:bg-[#C9A227]/5 transition-colors duration-500">
                          <div className="w-12 h-12 rounded-full border border-[#F1EFE4]/15 flex items-center justify-center mb-3 text-[#A6A397]/60 group-hover:border-[#C9A227]/40 group-hover:text-[#C9A227] transition-all duration-500">
                            <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                          </div>
                          <span className="font-label-caps text-[9px] tracking-[0.22em] uppercase text-[#A6A397]/60 group-hover:text-[#F1EFE4]/80 transition-colors">
                            IMAGE PLACEHOLDER • {item.aspect.toUpperCase()}
                          </span>
                        </div>
                      )}

                      {/* Dark Neutral Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F241B]/90 via-[#0F241B]/30 to-transparent pointer-events-none" />

                      {/* TOP EDITORIAL LABEL */}
                      <div className="relative z-20 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-caps text-[9.5px] sm:text-[10.5px] tracking-[0.22em] uppercase text-[#C9A227] font-semibold">
                            {item.number} / {item.category}
                          </span>
                        </div>

                        <span className="font-mono text-[9px] tracking-widest text-[#A6A397]/50 uppercase hidden sm:inline-block">
                          SKT-ARCHIVE
                        </span>
                      </div>

                      {/* BOTTOM CAPTION BLOCK */}
                      <div className="relative z-20 space-y-1.5 mt-auto pt-8">
                        <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[26px] text-[#F1EFE4] font-normal leading-tight group-hover:text-[#F1EFE4] transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-body-md text-[12px] sm:text-[13px] text-[#A6A397] font-light leading-snug">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* OVERLAP TYPE 3: BOTTOM-LEFT OFFSET CAPTION */}
                    {item.overlapType === "bottom-left" && (
                      <div className="hidden sm:block absolute -bottom-4 left-6 z-30 bg-[#17251E] border border-[#3F463A] px-4 py-2 rounded-xs shadow-lg font-label-caps text-[9.5px] tracking-[0.2em] text-[#C9A227] uppercase font-medium">
                        EDITORIAL SPOTLIGHT
                      </div>
                    )}
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            FOOTER EDITORIAL STATEMENT
        ================================================== */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto mt-24 sm:mt-32 pt-16 border-t border-[#3F463A]/40 text-center">
          <ScrollReveal>
            <div className="max-w-xl mx-auto space-y-4">
              <span className="font-label-caps text-[10px] tracking-[0.25em] uppercase text-[#C9A227] font-semibold block">
                SKINTILLATINGG ARCHIVE
              </span>
              <h2 className="font-display text-[26px] sm:text-[32px] text-[#F1EFE4] font-normal">
                Precision Behind Every Moment
              </h2>
              <p className="font-body-md text-[14px] text-[#A6A397] font-light leading-relaxed">
                Our visual journal documents the continuous pursuit of clinical excellence, cutting-edge aesthetic technology, and transformative care in Pune.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
