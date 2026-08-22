"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";

export interface ReelItem {
  id: string;
  category: string;
  title: string;
  videoUrl?: string;
  aspectRatio: "9:16";
}

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
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

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
    const cardWidth = 320;
    el.scrollBy({
      left: direction === "right" ? cardWidth * 1.5 : -cardWidth * 1.5,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#657A6A] text-[#F5F5DC] border-b border-[#AEB9A9]/20 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Top Navigation Control Bar */}
        <ScrollReveal showGoldLine goldLinePosition="bottom" className="mb-12">
          <div className="flex items-center justify-between pb-6">
            <div>
              <span className="font-label-caps text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#F5F5DC]/90 font-semibold block mb-1">
                INSIDE SKINTILLATINGG
              </span>
              <h2 className="font-display text-[28px] sm:text-[36px] text-[#F5F5DC] font-normal">
                Editorial Video Reels
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous reels"
                className={`w-9 h-9 rounded-full border border-[#F5F5DC]/30 flex items-center justify-center text-[#F5F5DC] transition-all duration-300 ${
                  canScrollLeft ? "opacity-100 hover:bg-[#F5F5DC]/10 hover:border-[#C9A227] cursor-pointer" : "opacity-30 cursor-default"
                }`}
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll more reels"
                className={`w-9 h-9 rounded-full border border-[#F5F5DC]/30 flex items-center justify-center text-[#F5F5DC] transition-all duration-300 ${
                  canScrollRight ? "opacity-100 hover:bg-[#F5F5DC]/10 hover:border-[#C9A227] cursor-pointer" : "opacity-30 cursor-default"
                }`}
              >
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Editorial Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* INTRO PANEL */}
          <ScrollReveal direction="left" delay={100} className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-start">
            <div className="bg-[#1C3329]/60 border border-[#F5F5DC]/20 rounded-xl p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="font-label-caps text-[11px] tracking-[0.2em] uppercase text-[#C9A227] font-semibold block">
                  PRACTICE HIGHLIGHTS
                </span>
                <h3 className="font-display text-[28px] sm:text-[36px] leading-[1.15] text-[#F5F5DC] font-normal">
                  Precision in Practice. <br />
                  <span className="italic text-[#F5F5DC]">Excellence in Every Detail.</span>
                </h3>
              </div>
              
              <p className="font-body-md text-[14px] text-[#F5F5DC]/85 leading-relaxed font-light pt-6">
                A closer look at the expertise, clinical technology and bespoke care behind every Skintillatingg treatment.
              </p>
            </div>
          </ScrollReveal>

          {/* REEL CARDS (9:16 Ratio) */}
          {REELS_DATA.map((reel, idx) => (
            <ScrollReveal key={reel.id} delay={150 + idx * 100} direction="up" className="shrink-0 w-[220px] sm:w-[260px] md:w-[280px] snap-start">
              <button
                type="button"
                onClick={() => setActiveReel(reel)}
                data-cursor="PLAY"
                className="w-full aspect-[9/16] bg-[#1C3329] border border-[#F5F5DC]/20 rounded-xl p-6 flex flex-col justify-between relative group/card hover:border-[#C9A227] transition-all duration-500 overflow-hidden text-left shadow-lg cursor-pointer cinematic-card-lift cinematic-img-container"
              >
                {/* Background Video preview if available */}
                {reel.videoUrl && (
                  <video
                    src={reel.videoUrl}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:scale-105 group-hover/card:opacity-80 transition-all duration-700 pointer-events-none"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3329] via-[#1C3329]/30 to-transparent z-0 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="inline-block font-label-caps text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#F5F5DC] font-semibold px-2.5 py-1 bg-[#17251E]/80 border border-[#F5F5DC]/20 rounded-xs backdrop-blur-sm">
                    {reel.category}
                  </span>
                </div>

                {/* Centered Play Indicator */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#F5F5DC]/40 bg-[#17251E]/60 backdrop-blur-md flex items-center justify-center text-[#F5F5DC] group-hover/card:scale-110 group-hover/card:bg-[#C9A227] group-hover/card:text-[#17251E] group-hover/card:border-[#C9A227] transition-all duration-300 shadow-md">
                    <span className="material-symbols-outlined text-xl translate-x-0.5">play_arrow</span>
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="relative z-10 space-y-1">
                  <h4 className="font-display text-[18px] sm:text-[20px] leading-snug text-[#F5F5DC] font-normal">
                    {reel.title}
                  </h4>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-[#17251E]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-[420px] aspect-[9/16] bg-[#17251E] rounded-xl border border-[#657A6A]/40 overflow-hidden shadow-2xl flex flex-col">
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#17251E]/80 text-[#F5F5DC] flex items-center justify-center border border-[#F5F5DC]/20 hover:bg-[#C9A227] hover:text-[#17251E] transition-colors"
              aria-label="Close video"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            {activeReel.videoUrl ? (
              <video
                src={activeReel.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#1C3329]">
                <span className="material-symbols-outlined text-4xl text-[#C9A227] mb-2">videocam</span>
                <p className="font-display text-xl text-[#F5F5DC]">{activeReel.title}</p>
                <p className="font-body-md text-xs text-[#AEB9A9] mt-2">Clinical Video Reel</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

