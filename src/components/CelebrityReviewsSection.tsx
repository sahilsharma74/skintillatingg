"use client";

import { useState, useEffect, useRef } from "react";

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
    name: "SIDDHARTH JADHAV",
    profession: "Bollywood Actor",
    quote:
      "They care my skin and hair more than I do! Skintillatingg is unique!",
    image: "/images/siddharth-jadhav.jpg",
  },
  {
    id: "review-02",
    name: "SOURABH GOKHALE",
    profession: "Bollywood Actor",
    quote:
      "Staying healthy depends on caring yourself better. Skintillatingg cares me best, makes me best on screen.",
    image: "/images/sourabh-gokhale.jpg",
  },
  {
    id: "review-03",
    name: "VEDVIKA SONI",
    profession: "Bollywood/Tollywood Actress",
    quote:
      "I trust Skintillatingg for their utmost care and expertise. Treatments which make me feel special.",
    image: "/images/vedvika-soni.jpg",
  },
  {
    id: "review-04",
    name: "ANUSHKA PIMPUTKAR",
    profession: "Bollywood Actor",
    quote:
      "It's always perfection and care with Skintillatingg treatments.",
    image: "/images/anushka-pimputkar.jpg",
  },
  {
    id: "review-05",
    name: "Public Personality",
    profession: "International Presenter",
    quote:
      "Finding a cosmetologist who understands subtle, bespoke aesthetic enhancement is rare. Dr. Akshaya’s clinical mastery makes Skintillatingg truly world-class.",
    image: "/images/dr-akshaya-jain.jpg",
  },
];

export default function CelebrityReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const current = CELEBRITY_REVIEWS[currentIndex];

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % CELEBRITY_REVIEWS.length);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + CELEBRITY_REVIEWS.length) % CELEBRITY_REVIEWS.length);
  };

  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % CELEBRITY_REVIEWS.length);
    }, 7000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  const handleUserInteract = (action: () => void) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    action();
  };

  return (
    <section className="py-16 sm:py-20 bg-[#1C3329] text-[#F5F5DC] border-b border-[#657A6A]/30 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Section Label */}
        <div className="mb-8 border-b border-[#657A6A]/20 pb-4 flex items-center justify-between">
          <span className="font-label-caps text-xs tracking-[0.25em] uppercase text-[#AEB9A9] font-semibold">
            CELEBRITY REVIEW
          </span>
          <span className="font-label-caps text-[10px] tracking-widest uppercase text-[#C9A227] font-medium">
            LUXURY TESTIMONIALS
          </span>
        </div>

        {/* Compact Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[320px]">
          {/* Left Content / Quote & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div
              className={`space-y-4 transition-all duration-700 ease-out ${
                isTransitioning ? "opacity-30 translate-x-2" : "opacity-100 translate-x-0"
              }`}
            >
              <div>
                <h3 className="font-display text-[26px] sm:text-[34px] text-[#F5F5DC] font-normal leading-tight">
                  {current.name}
                </h3>
                <p className="font-label-caps text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mt-1">
                  {current.profession}
                </p>
              </div>

              <blockquote className="pt-2">
                <p className="font-display italic text-[18px] sm:text-[22px] lg:text-[24px] text-[#F5F5DC]/95 leading-relaxed font-light">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Bottom Controls: 01 02 03 04 05  |  <  > */}
            <div className="pt-6 border-t border-[#657A6A]/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {CELEBRITY_REVIEWS.map((_, idx) => {
                  const numStr = String(idx + 1).padStart(2, "0");
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleUserInteract(() => goToIndex(idx))}
                      className={`font-label-caps text-xs tracking-wider transition-all duration-300 ${
                        isActive
                          ? "text-[#F5F5DC] font-bold border-b-2 border-[#C9A227] pb-0.5"
                          : "text-[#AEB9A9]/50 hover:text-[#F5F5DC] font-normal"
                      }`}
                      aria-label={`Go to slide ${numStr}`}
                    >
                      {numStr}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleUserInteract(goToPrev)}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-[#657A6A]/40 flex items-center justify-center text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:border-[#F5F5DC] transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleUserInteract(goToNext)}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-[#657A6A]/40 flex items-center justify-center text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:border-[#F5F5DC] transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Celebrity Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl overflow-hidden bg-[#17251E] border border-[#657A6A]/40 shadow-xl">
              <img
                src={current.image}
                alt={current.name}
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                  isTransitioning ? "opacity-40 scale-105" : "opacity-100 scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

