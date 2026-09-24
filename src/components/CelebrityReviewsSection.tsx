"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";

export interface CelebrityReview {
  id: string;
  name: string;
  profession: string;
  quote: string;
  image: string;
}

export const CELEBRITY_REVIEWS: CelebrityReview[] = [
  {
    id: "review-01",
    name: "Siddharth Jadhav",
    profession: "Bollywood Actor",
    quote:
      "They care my skin and hair more than I do! Skintillatingg is unique!",
    image: "/images/siddharth-jadhav.webp",
  },
  {
    id: "review-02",
    name: "Sourabh Gokhale",
    profession: "Bollywood Actor",
    quote:
      "Staying healthy depends on caring yourself better. Skintillatingg cares me best, makes me best on screen.",
    image: "/images/sourabh-gokhale.webp",
  },
  {
    id: "review-03",
    name: "Vedvika Soni",
    profession: "Bollywood/Tollywood Actress",
    quote:
      "I trust Skintillatingg for their utmost care and expertise. Treatments which make me feel special.",
    image: "/images/vedvika-soni.webp",
  },
  {
    id: "review-04",
    name: "Anushka Pimputkar",
    profession: "Bollywood Actor",
    quote:
      "It's always perfection and care with Skintillatingg treatments.",
    image: "/images/anushka-pimputkar.webp",
  },
  {
    id: "review-05",
    name: "Public Personality",
    profession: "International Presenter",
    quote:
      "Finding a cosmetologist who understands subtle, bespoke aesthetic enhancement is rare. Dr. Akshaya's clinical mastery makes Skintillatingg truly world-class.",
    image: "/images/dr-akshaya-jain.webp",
  },
];

/** Cache of preloaded images so we don't reload them */
const imageCache = new Set<string>();

function preloadImage(src: string): void {
  if (imageCache.has(src)) return;
  const img = new window.Image();
  img.onload = () => imageCache.add(src);
  img.onerror = () => {};
  img.src = src;
}

export default function CelebrityReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const len = CELEBRITY_REVIEWS.length;

  const current = CELEBRITY_REVIEWS[displayIndex];

  // Preload adjacent images whenever currentIndex changes
  useEffect(() => {
    const prevIdx = (currentIndex - 1 + len) % len;
    const nextIdx = (currentIndex + 1) % len;
    preloadImage(CELEBRITY_REVIEWS[prevIdx].image);
    preloadImage(CELEBRITY_REVIEWS[nextIdx].image);
    preloadImage(CELEBRITY_REVIEWS[currentIndex].image);
  }, [currentIndex, len]);

  // Handle crossfade transition
  useEffect(() => {
    if (currentIndex === displayIndex) return;
    setIsFading(true);
    const t = setTimeout(() => {
      setDisplayIndex(currentIndex);
      setIsFading(false);
    }, 280);
    return () => clearTimeout(t);
  }, [currentIndex, displayIndex]);

  const navigate = useCallback((newIdx: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex(((newIdx % len) + len) % len);
  }, [len]);

  // Autoplay
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % len);
    }, 7500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [len]);

  return (
    <section className="py-16 sm:py-20 bg-[#1C3329] text-[#F5F5DC] border-b border-[#657A6A]/30 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Section Label */}
        <ScrollReveal showGoldLine goldLinePosition="bottom" className="mb-10">
          <div className="flex items-center justify-between pb-3">
            <span className="font-label-caps text-xs tracking-[0.25em] uppercase text-[#AEB9A9] font-semibold">
              CELEBRITY REVIEWS
            </span>
            <span className="font-label-caps text-xs tracking-widest uppercase text-[#C9A227] font-medium">
              LUXURY TESTIMONIALS
            </span>
          </div>
        </ScrollReveal>

        {/* Compact Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[340px]">
          {/* Left Content / Quote & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div
              className={`space-y-4 transition-opacity duration-300 ease-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div>
                <span className="font-display text-5xl text-[#C9A227]/40 leading-none select-none font-serif block -mb-4">
                  &ldquo;
                </span>
                <h3 className="font-display text-[26px] sm:text-[34px] text-[#F5F5DC] font-normal leading-tight">
                  {current.name}
                </h3>
                <p className="font-label-caps text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mt-1">
                  {current.profession}
                </p>
              </div>

              <blockquote className="pt-2">
                <p className="font-display italic text-[18px] sm:text-[22px] lg:text-[24px] text-[#F5F5DC]/95 leading-relaxed font-light">
                  {current.quote}
                </p>
              </blockquote>
            </div>

            {/* Bottom Controls */}
            <div className="pt-6 border-t border-[#657A6A]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Numerical Indicators */}
              <div className="flex items-center gap-5" role="tablist" aria-label="Testimonial slides">
                {CELEBRITY_REVIEWS.map((_, idx) => {
                  const numStr = String(idx + 1).padStart(2, "0");
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => navigate(idx)}
                      className={`font-label-caps text-xs tracking-wider transition-all duration-300 relative py-1 px-1 min-w-[32px] min-h-[32px] flex items-center justify-center ${
                        isActive
                          ? "text-[#F5F5DC] font-bold"
                          : "text-[#AEB9A9]/50 hover:text-[#F5F5DC] font-normal"
                      }`}
                      aria-label={`Go to slide ${numStr}`}
                    >
                      <span>{numStr}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9A227] rounded-full animate-gold-line" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate(currentIndex - 1)}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-[#657A6A]/40 flex items-center justify-center text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate(currentIndex + 1)}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-[#657A6A]/40 flex items-center justify-center text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Frame — fixed dimensions, crossfade */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              data-cursor="VIEW"
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-sm overflow-hidden bg-[#17251E] border border-[#657A6A]/40 shadow-xl cinematic-img-container cursor-pointer"
            >
              {/* Stacked images for gapless crossfade */}
              {CELEBRITY_REVIEWS.map((review, idx) => (
                <img
                  key={review.id}
                  src={review.image}
                  alt={`${review.name} - Skintillatingg celebrity review`}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-out ${
                    idx === displayIndex ? (isFading ? "opacity-0" : "opacity-100") : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
