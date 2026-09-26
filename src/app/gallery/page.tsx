"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GALLERY_ITEMS, GALLERY_SECTIONS, GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

const CATEGORIES = [
  "ALL",
  "CLINIC",
  "PEOPLE",
  "TECHNOLOGY",
  "TRAINING",
  "TREATMENTS",
  "MOMENTS",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "ALL") return true;
    return (
      item.category.toUpperCase().includes(activeCategory) ||
      item.sectionId.toUpperCase().includes(activeCategory)
    );
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null,
    );
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null,
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#17251E] overflow-x-hidden pt-28 sm:pt-36 selection:bg-[#C9A227] selection:text-[#17251E]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8">
        {/* 1. PAGE IDENTITY & EDITORIAL HEADER */}
        <header className="mb-20 sm:mb-28 border-b border-[#657A6A]/20 pb-12 sm:pb-20">
          <div className="flex items-center space-x-3 text-[#C9A227] font-mono text-[11px] tracking-[0.25em] uppercase mb-4 sm:mb-6 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
            <span>VISUAL JOURNAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif tracking-tight text-[#17251E] mb-6 font-normal leading-[1.06]">
            The Art Behind <br className="hidden sm:inline" />
            <span className="italic font-serif font-light text-[#17251E]/95">
              the Precision.
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-xl text-[#657A6A] font-light leading-relaxed mb-10 sm:mb-12">
            A visual journey through Skintillatingg — our clinic, people,
            technology, treatments, training, and the moments that define our
            practice.
          </p>

          {/* Minimal Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-6 border-t border-[#657A6A]/15">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] font-mono tracking-[0.18em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#17251E] text-[#F5F5DC] font-semibold shadow-sm"
                    : "bg-[#EBE9DA]/80 text-[#17251E]/70 hover:text-[#17251E] hover:bg-[#E0DDCB] border border-[#657A6A]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* 8 EDITORIAL ART-DIRECTED SECTIONS */}
        <main className="space-y-24 sm:space-y-36 pb-24 sm:pb-36">
          {GALLERY_SECTIONS.map((sec) => {
            const sectionItems = filteredItems.filter(
              (item) => item.sectionId === sec.id,
            );
            if (sectionItems.length === 0) return null;

            return (
              <section key={sec.id} className="relative">
                {/* Fine Horizontal Section Header */}
                <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                    <span>{sec.label}</span>
                    <span className="text-[#657A6A]/60 font-normal">VOL. 2026</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                    {sec.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                    {sec.subtitle}
                  </p>
                </div>

                {/* Editorial Grid Layout driven by natural image ratios */}
                <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
                  {sectionItems.map((item) => {
                    // Strip out hardcoded heights from gridSpan to prevent cropping
                    const cleanGridSpan = item.gridSpan.replace(/h-\[[^\]]+\]/g, '').replace(/\b(?:sm:|md:|lg:|xl:)?h-\w+\b/g, '').trim();

                    return (
                      <div
                        key={item.id}
                        className={`group flex flex-col ${cleanGridSpan}`}
                      >
                        {/* Image Container */}
                        <div 
                          onClick={() => openLightbox(item)}
                          className="relative w-full overflow-hidden cursor-pointer bg-[#EBE9DA]/40 mb-4"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={90}
                            className="w-full h-auto object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04] grayscale-[10%] group-hover:grayscale-0"
                            style={{ objectPosition: item.objectPosition || "center" }}
                          />
                        </div>

                        {/* Print-Inspired Caption (Below Image) */}
                        <div className="flex flex-col justify-start space-y-2 mt-2 px-1">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold border-b border-[#C9A227]/30 pb-1 w-fit">
                            {item.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#17251E] font-normal leading-tight">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs sm:text-sm text-[#657A6A] font-light leading-relaxed">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <GalleryLightbox
        isOpen={lightboxIndex !== null}
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        currentIndex={lightboxIndex ?? 0}
        totalItems={filteredItems.length}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />

      <Footer />
    </div>
  );
}
