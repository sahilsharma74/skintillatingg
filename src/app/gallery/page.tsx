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
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
    );
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#17251E] overflow-x-hidden pt-28 sm:pt-36 pb-24 selection:bg-[#C9A227] selection:text-[#17251E]">
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
            <span className="italic font-serif font-light text-[#17251E]/95">the Precision.</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-xl text-[#657A6A] font-light leading-relaxed mb-10 sm:mb-12">
            A visual journey through Skintillatingg — our clinic, people, technology, treatments, training, and the moments that define our practice.
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
        <main className="space-y-24 sm:space-y-36">
          {GALLERY_SECTIONS.map((sec) => {
            const sectionItems = filteredItems.filter(
              (item) => item.sectionId === sec.id
            );

            if (sectionItems.length === 0) return null;

            // SECTION 01: OPENING VISUAL
            if (sec.id === "visual-journal") {
              const coverItem = sectionItems[0];
              return (
                <section key={sec.id} className="relative max-w-6xl mx-auto">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-4">
                    <span>01 / OPENING VISUAL</span>
                    <span className="text-[#657A6A] font-normal">01 / {GALLERY_ITEMS.length}</span>
                  </div>

                  <div
                    onClick={() => openLightbox(coverItem)}
                    className="group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-700 bg-[#EBE9DA]"
                  >
                    <div className="relative w-full h-[480px] sm:h-[620px] lg:h-[700px]">
                      <Image
                        src={coverItem.image}
                        alt={coverItem.title}
                        fill
                        priority
                        sizes="90vw"
                        quality={94}
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                        style={{ objectPosition: coverItem.objectPosition || "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/80 via-transparent to-transparent p-6 sm:p-12 flex flex-col justify-end">
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] mb-2 font-semibold">
                          {coverItem.category}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5DC] font-normal leading-tight">
                          {coverItem.title}
                        </h2>
                        <p className="text-sm sm:text-base text-[#F5F5DC]/85 font-light mt-2 max-w-xl">
                          {coverItem.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#657A6A]/20 pb-8">
                    <div>
                      <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#17251E] font-semibold">
                        SKINTILLATINGG
                      </div>
                      <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#657A6A]">
                        WHERE SCIENCE MEETS THE ART OF BEAUTY
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase">
                      CLICK TO VIEW ARCHIVE →
                    </span>
                  </div>
                </section>
              );
            }

            // SECTION 02: THE CLINIC
            if (sec.id === "clinic") {
              const mainClinic = sectionItems.find((i) => i.id === "gallery-01") || sectionItems[0];
              const stackedTop = sectionItems.find((i) => i.id === "gallery-02a");
              const stackedBottom = sectionItems.find((i) => i.id === "gallery-02b");
              const restClinic = sectionItems.filter(
                (i) => i.id !== mainClinic.id && i.id !== stackedTop?.id && i.id !== stackedBottom?.id
              );

              return (
                <section key={sec.id} className="relative">
                  <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                      <span>02 / THE CLINIC</span>
                      <span className="text-[#657A6A]/60 font-normal">VOL. 2026</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                      Precision, atmosphere <br className="hidden sm:inline" />
                      <span className="italic">and care.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                      The space where medical precision meets architectural serenity.
                    </p>
                  </div>

                  {/* Asymmetric Composition: 1 Large Left + 2 Stacked Right */}
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start mb-8">
                    {/* Left Main */}
                    <div
                      onClick={() => openLightbox(mainClinic)}
                      className="col-span-12 md:col-span-7 group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40"
                    >
                      <div className="relative w-full h-[440px] sm:h-[580px]">
                        <Image
                          src={mainClinic.image}
                          alt={mainClinic.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          quality={90}
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          style={{ objectPosition: mainClinic.objectPosition || "top center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-6 flex flex-col justify-end">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                            {mainClinic.category}
                          </span>
                          <h3 className="text-xl sm:text-3xl font-serif text-[#F5F5DC] font-normal">
                            {mainClinic.title}
                          </h3>
                          <p className="text-xs text-[#F5F5DC]/80 font-light mt-1">
                            {mainClinic.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-[#EBE9DA]/60 border-t border-[#657A6A]/15 text-xs text-[#657A6A] font-mono uppercase tracking-wider">
                        CLINICAL ENVIRONMENT — The space where precision meets patient care.
                      </div>
                    </div>

                    {/* Right Stacked Pair */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
                      {stackedTop && (
                        <div
                          onClick={() => openLightbox(stackedTop)}
                          className="group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40"
                        >
                          <div className="relative w-full h-[220px] sm:h-[270px]">
                            <Image
                              src={stackedTop.image}
                              alt={stackedTop.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              quality={88}
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              style={{ objectPosition: stackedTop.objectPosition || "center" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-0.5 font-semibold">
                                {stackedTop.category}
                              </span>
                              <h4 className="text-lg font-serif text-[#F5F5DC]">
                                {stackedTop.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      )}

                      {stackedBottom && (
                        <div
                          onClick={() => openLightbox(stackedBottom)}
                          className="group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40"
                        >
                          <div className="relative w-full h-[220px] sm:h-[270px]">
                            <Image
                              src={stackedBottom.image}
                              alt={stackedBottom.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              quality={88}
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              style={{ objectPosition: stackedBottom.objectPosition || "center" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-0.5 font-semibold">
                                {stackedBottom.category}
                              </span>
                              <h4 className="text-lg font-serif text-[#F5F5DC]">
                                {stackedBottom.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rest Clinic items */}
                  {restClinic.length > 0 && (
                    <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
                      {restClinic.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => openLightbox(item)}
                          className={`${item.gridSpan} group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40`}
                        >
                          <div className="relative w-full h-full min-h-[260px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              quality={88}
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              style={{ objectPosition: item.objectPosition || "center" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                                {item.category}
                              </span>
                              <h3 className="text-lg sm:text-xl font-serif text-[#F5F5DC] font-normal">
                                {item.title}
                              </h3>
                              <p className="text-xs text-[#F5F5DC]/80 font-light mt-1">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            }

            // SECTION 03: THE PEOPLE
            if (sec.id === "people") {
              return (
                <section key={sec.id} className="relative">
                  <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                      <span>03 / THE PEOPLE</span>
                      <span className="text-[#657A6A]/60 font-normal">MEDICAL LEADERSHIP</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                      THE PEOPLE <br className="hidden sm:inline" />
                      <span className="italic">BEHIND THE PRECISION</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                      Medical director, specialist practitioners, and clinical mentorship.
                    </p>
                  </div>

                  {/* Vertical Staggered Editorial Portrait Arrangement */}
                  <div className="space-y-16 sm:space-y-24">
                    {sectionItems.map((item, idx) => {
                      const isEven = idx % 2 === 0;
                      return (
                        <div
                          key={item.id}
                          className={`flex flex-col ${
                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                          } gap-8 sm:gap-12 items-center`}
                        >
                          {/* Image Container */}
                          <div
                            onClick={() => openLightbox(item)}
                            className="w-full md:w-1/2 group cursor-pointer relative overflow-hidden border border-[#657A6A]/25 hover:border-[#17251E]/60 transition-all duration-500 bg-[#EBE9DA] shadow-sm"
                          >
                            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px]">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={90}
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                style={{ objectPosition: item.objectPosition || "top center" }}
                              />
                            </div>
                          </div>

                          {/* Text Editorial Info */}
                          <div className="w-full md:w-1/2 space-y-4 px-2">
                            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold block">
                              {item.category}
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-serif text-[#17251E] font-normal">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#657A6A] font-light leading-relaxed">
                              {item.subtitle}
                            </p>
                            {item.description && (
                              <p className="text-xs font-mono uppercase tracking-wider text-[#17251E]/80 pt-4 border-t border-[#657A6A]/20">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }

            // SECTION 04: TECHNOLOGY
            if (sec.id === "technology") {
              const mainTech = sectionItems[0];
              const subTech = sectionItems.slice(1);

              return (
                <section key={sec.id} className="relative">
                  <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                      <span>04 / TECHNOLOGY</span>
                      <span className="text-[#657A6A]/60 font-normal">CLINICAL MODALITIES</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                      TECHNOLOGY <br className="hidden sm:inline" />
                      <span className="italic">IN PRACTICE</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                      State-of-the-art diagnostic, laser, and photothermal equipment.
                    </p>
                  </div>

                  {/* 1 Very Large Horizontal Image */}
                  {mainTech && (
                    <div
                      onClick={() => openLightbox(mainTech)}
                      className="group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA] mb-8"
                    >
                      <div className="relative w-full h-[400px] sm:h-[540px]">
                        <Image
                          src={mainTech.image}
                          alt={mainTech.title}
                          fill
                          sizes="100vw"
                          quality={90}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          style={{ objectPosition: mainTech.objectPosition || "center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-6 sm:p-10 flex flex-col justify-end">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                            PRECISION TECHNOLOGY — {mainTech.category}
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-serif text-[#F5F5DC] font-normal">
                            {mainTech.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#F5F5DC]/80 font-light mt-1">
                            {mainTech.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Smaller Offset Images */}
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
                    {subTech.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => openLightbox(item)}
                        className={`${item.gridSpan} group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40`}
                      >
                        <div className="relative w-full h-full min-h-[260px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            quality={88}
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ objectPosition: item.objectPosition || "center" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                              {item.category}
                            </span>
                            <h4 className="text-lg font-serif text-[#F5F5DC]">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            // SECTION 05: TRAINING & EDUCATION
            if (sec.id === "training") {
              const primaryTraining = sectionItems[0];
              const offsetTraining = sectionItems.slice(1);

              return (
                <section key={sec.id} className="relative">
                  <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                      <span>05 / TRAINING</span>
                      <span className="text-[#657A6A]/60 font-normal">CIATN ACADEMY</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                      LEARN. <br />
                      PRACTICE. <br />
                      <span className="italic">MASTER.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                      Hands-on clinical workshops, live demonstrations, and practitioner mentorship.
                    </p>
                  </div>

                  {/* Primary Cinematic Horizontal Image */}
                  {primaryTraining && (
                    <div
                      onClick={() => openLightbox(primaryTraining)}
                      className="group cursor-pointer relative overflow-hidden border border-[#657A6A]/25 hover:border-[#17251E]/60 transition-all duration-500 bg-[#EBE9DA] mb-8"
                    >
                      <div className="relative w-full h-[380px] sm:h-[500px]">
                        <Image
                          src={primaryTraining.image}
                          alt={primaryTraining.title}
                          fill
                          sizes="100vw"
                          quality={90}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          style={{ objectPosition: primaryTraining.objectPosition || "center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-6 sm:p-10 flex flex-col justify-end">
                          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9A227] mb-1 font-semibold">
                            {primaryTraining.category}
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-serif text-[#F5F5DC]">
                            {primaryTraining.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#F5F5DC]/80 font-light mt-1">
                            {primaryTraining.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Partially Offset Documentary Photos Around It */}
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
                    {offsetTraining.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => openLightbox(item)}
                        className={`${item.gridSpan} group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40`}
                      >
                        <div className="relative w-full h-full min-h-[280px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={88}
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ objectPosition: item.objectPosition || "center" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                              {item.category}
                            </span>
                            <h4 className="text-lg font-serif text-[#F5F5DC]">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            // SECTION 07: MOMENTS (Gen-Z Lifestyle Collage with subtle 1-2° rotation)
            if (sec.id === "moments") {
              const rotations = ["rotate-[1.2deg]", "-rotate-[1.5deg]", "rotate-[1deg]"];
              return (
                <section key={sec.id} className="relative">
                  <div className="mb-10 sm:mb-14 border-t border-[#657A6A]/25 pt-8">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-2">
                      <span>07 / MOMENTS</span>
                      <span className="text-[#657A6A]/60 font-normal">LIFESTYLE & INSIGHTS</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#17251E] font-normal leading-tight">
                      MOMENTS <br className="hidden sm:inline" />
                      <span className="italic">AT SKINTILLATINGG</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#657A6A] font-light mt-2 max-w-xl leading-relaxed">
                      Spontaneous practice interactions, celebrity client moments, and lifestyle snapshots.
                    </p>
                  </div>

                  <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
                    {sectionItems.map((item, idx) => {
                      const rotClass = rotations[idx % rotations.length];
                      return (
                        <div
                          key={item.id}
                          onClick={() => openLightbox(item)}
                          className={`col-span-12 md:col-span-4 group cursor-pointer relative overflow-hidden border border-[#657A6A]/25 hover:border-[#17251E]/60 transition-all duration-500 bg-[#EBE9DA] shadow-sm transform hover:rotate-0 hover:scale-[1.02] ${rotClass}`}
                        >
                          <div className="relative w-full h-[360px] sm:h-[420px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              quality={88}
                              className="object-cover transition-transform duration-700"
                              style={{ objectPosition: item.objectPosition || "center" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/85 via-transparent to-transparent p-5 flex flex-col justify-end">
                              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C9A227] mb-1 font-semibold">
                                {item.category}
                              </span>
                              <h3 className="text-lg font-serif text-[#F5F5DC] font-normal">
                                {item.title}
                              </h3>
                              <p className="text-xs text-[#F5F5DC]/80 font-light mt-1">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }

            // SECTION 08: FINAL CINEMATIC FRAME
            if (sec.id === "final-frame") {
              const finalItem = sectionItems[0];
              return (
                <section key={sec.id} className="relative max-w-full">
                  <div className="mb-6 text-center text-xs font-mono uppercase tracking-[0.25em] text-[#C9A227] font-semibold">
                    08 / FINAL CINEMATIC FRAME
                  </div>

                  <div
                    onClick={() => openLightbox(finalItem)}
                    className="group cursor-pointer relative overflow-hidden border-y border-[#657A6A]/30 bg-[#0F241B]"
                  >
                    <div className="relative w-full h-[380px] sm:h-[560px] lg:h-[640px]">
                      <Image
                        src={finalItem.image}
                        alt={finalItem.title}
                        fill
                        sizes="100vw"
                        quality={94}
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                        style={{ objectPosition: finalItem.objectPosition || "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F241B]/90 via-[#0F241B]/30 to-transparent p-8 sm:p-16 flex flex-col justify-end text-center items-center">
                        <h2 className="text-4xl sm:text-7xl font-serif text-[#F5F5DC] tracking-tight font-normal mb-2">
                          SKINTILLATINGG
                        </h2>
                        <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#C9A227] uppercase mb-4">
                          WHERE SCIENCE MEETS THE ART OF BEAUTY
                        </p>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-[#AEB9A9] uppercase pt-4 border-t border-[#F5F5DC]/20">
                          VISUAL JOURNAL / 2026
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // STANDARD SECTIONS (06 TREATMENTS, etc.)
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

                {/* Asymmetric Editorial Grid */}
                <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
                  {sectionItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openLightbox(item)}
                      className={`${item.gridSpan} group cursor-pointer relative overflow-hidden border border-[#657A6A]/20 hover:border-[#17251E]/50 transition-all duration-500 bg-[#EBE9DA]/40 flex flex-col justify-between`}
                    >
                      <div className="relative w-full h-full min-h-[280px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={88}
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          style={{ objectPosition: item.objectPosition || "center" }}
                        />

                        {/* Subtle Bottom Editorial Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/90 via-[#17251E]/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-7">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#C9A227] mb-1 font-semibold">
                            {item.category}
                          </span>
                          <h3 className="text-lg sm:text-2xl font-serif text-[#F5F5DC] font-normal leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#F5F5DC]/80 font-light mt-1 line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
