"use client";

import { useRef, useState, useEffect } from "react";

export interface ReelItem {
  id: string;
  category: string;
  title: string;
  videoUrl?: string;
  aspectRatio: "9:16";
}

// Centralized Reel Configuration for Future Video Sources
export const REELS_DATA: ReelItem[] = [
  {
    id: "reel-01",
    category: "CLINIC",
    title: "Inside the Skintillatingg Clinic",
    videoUrl: "/videos/reel-01.mp4",
    aspectRatio: "9:16",
  },
  {
    id: "reel-02",
    category: "TREATMENTS",
    title: "Precision Behind Every Treatment",
    videoUrl: "/videos/reel-02.mp4",
    aspectRatio: "9:16",
  },
  {
    id: "reel-03",
    category: "EXPERTISE",
    title: "Meet Dr. Akshaya Jain",
    videoUrl: "/videos/reel-03.mp4",
    aspectRatio: "9:16",
  },
  {
    id: "reel-04",
    category: "TECHNOLOGY",
    title: "Advanced Aesthetic Technology",
    videoUrl: "/videos/reel-04.mp4",
    aspectRatio: "9:16",
  },
  {
    id: "reel-05",
    category: "TRANSFORMATIONS",
    title: "Natural-Looking Results",
    videoUrl: "/videos/reel-05.mp4",
    aspectRatio: "9:16",
  },
];

export default function EditorialReelsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 15);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 15);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 320; // Average card width + gap
    el.scrollBy({
      left: direction === "right" ? cardWidth * 1.5 : -cardWidth * 1.5,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#657A6A] text-[#F5F5DC] border-b border-[#AEB9A9]/20 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Top Header / Navigation Bar inside Section */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <span className="font-label-caps text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#F5F5DC]/80 font-semibold">
            INSIDE SKINTILLATINGG
          </span>

          {/* Minimal Arrow Navigation Controls */}
          <div className="flex items-center gap-4">
            {/* Left Arrow (only active after scrolling right) */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reels"
              className={`p-2 text-[#F5F5DC] hover:text-white transition-all duration-300 ${
                canScrollLeft ? "opacity-90 cursor-pointer hover:scale-110" : "opacity-25 cursor-default"
              }`}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right Arrow Navigation Control (SWIPE / SEE MORE) */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll more reels"
              className={`p-2 text-[#F5F5DC] hover:text-white transition-all duration-300 ${
                canScrollRight ? "opacity-90 cursor-pointer hover:scale-110" : "opacity-25 cursor-default"
              }`}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Gallery: [ INTRO PANEL ] [ REEL 01 ] [ REEL 02 ] [ REEL 03 ] [ REEL 04 PARTIAL ] */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* 1. INTRO PANEL */}
          <div className="shrink-0 w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px] bg-[#1C3329]/40 border border-[#F5F5DC]/20 rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col justify-between snap-start">
            <div className="space-y-6">
              <span className="font-label-caps text-[11px] tracking-[0.2em] uppercase text-[#F5F5DC]/70 font-semibold block">
                EDITORIAL REELS
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#F5F5DC] font-normal">
                Precision in Practice. <br />
                <span className="italic text-[#F5F5DC]">Excellence in Every Detail.</span>
              </h2>
            </div>
            
            <p className="font-body-md text-[15px] sm:text-[16px] text-[#F5F5DC]/90 leading-relaxed font-normal pt-8">
              A closer look at the expertise, technology and care behind every Skintillatingg transformation.
            </p>
          </div>

          {/* 2. REEL CARDS (9:16 Ratio) */}
          {REELS_DATA.map((reel) => (
            <div
              key={reel.id}
              className="shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] aspect-[9/16] bg-[#1C3329]/30 border border-[#F5F5DC]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between snap-start relative group/card hover:border-[#F5F5DC]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Ambient Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3329]/90 via-[#1C3329]/20 to-transparent z-0 pointer-events-none" />

              {/* Top Card Badge */}
              <div className="relative z-10">
                <span className="inline-block font-label-caps text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#F5F5DC]/80 font-semibold px-3 py-1 bg-[#1C3329]/60 border border-[#F5F5DC]/15 rounded-md backdrop-blur-sm">
                  {reel.category}
                </span>
              </div>

              {/* Minimal Centered Play Symbol Placeholder */}
              <div className="relative z-10 my-auto flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#F5F5DC]/30 bg-[#1C3329]/40 backdrop-blur-md flex items-center justify-center text-[#F5F5DC]/50 group-hover/card:scale-105 group-hover/card:text-[#F5F5DC] group-hover/card:border-[#F5F5DC]/60 transition-all duration-300">
                  <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Card Title */}
              <div className="relative z-10 space-y-1">
                <h3 className="font-display text-[20px] sm:text-[22px] leading-snug text-[#F5F5DC] font-normal">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
