"use client";

import { useState, useEffect, useRef } from "react";

export interface CelebrityReview {
  id: string;
  name: string;
  profession: string;
  quote: string;
  image: string;
}

// Centralized Data Structure for Celebrity Reviews (Easy to update)
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

  // Reset transition state after animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto Rotation every 6 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CELEBRITY_REVIEWS.length);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  // Pause auto-rotation when user manually interacts
  const handleUserInteract = (action: () => void) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    action();
  };

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#1C3329] text-[#F5F5DC] border-b border-[#AEB9A9]/20 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#657A6A]/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-label-caps text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#AEB9A9] font-semibold block mb-3">
            CELEBRITY REVIEWS
          </span>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.15] text-[#F5F5DC] font-normal mb-4">
            Trusted by Those <br />
            <span className="italic text-[#F5F5DC]">Who Lead &amp; Inspire.</span>
          </h2>
          <p className="font-body-md text-[15px] sm:text-[17px] text-[#F5F5DC]/80 leading-relaxed font-normal">
            A trusted name in aesthetic medicine, chosen by personalities who value precision, expertise and natural-looking results.
          </p>
        </div>

        {/* Editorial Feature Container: Desktop 60 / 40 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Mobile Order 1 / Desktop Order 2: Right Portrait Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Outer Subtle Frame */}
              <div className="absolute -inset-2 rounded-2xl border border-[#AEB9A9]/30 z-0 pointer-events-none"></div>

              {/* Portrait Container with 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#657A6A]/20 border border-[#F5F5DC]/20 shadow-2xl z-10">
                <img
                  src={current.image}
                  alt={current.name}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                    isTransitioning ? "opacity-40 scale-105" : "opacity-100 scale-100"
                  }`}
                />

                {/* Subtle Bottom Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3329]/60 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </div>

          {/* Mobile Order 2 / Desktop Order 1: Left Content & Testimonial */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between space-y-8 lg:pr-6">
            <div
              className={`space-y-6 transition-all duration-500 ease-out ${
                isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Celebrity Name & Profession */}
              <div>
                <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] text-[#F5F5DC] leading-tight font-normal">
                  {current.name}
                </h3>
                <p className="font-label-caps text-xs sm:text-sm tracking-[0.18em] uppercase text-[#AEB9A9] font-medium pt-1">
                  {current.profession}
                </p>
              </div>

              {/* Large Quotation Testimonial */}
              <blockquote className="relative pt-2">
                <span className="font-display text-[60px] leading-none text-[#AEB9A9]/30 absolute -top-4 -left-2 select-none">
                  &ldquo;
                </span>
                <p className="font-display italic text-[20px] sm:text-[24px] lg:text-[27px] text-[#F5F5DC] leading-relaxed relative z-10 font-normal">
                  {current.quote}
                </p>
              </blockquote>
            </div>

            {/* Minimalist Editorial Navigation: ←  01  02  03  04  05  → */}
            <div className="pt-8 border-t border-[#AEB9A9]/20 flex flex-wrap items-center justify-between gap-6">
              {/* Numeric Slide Indicators */}
              <div className="flex items-center gap-4">
                {CELEBRITY_REVIEWS.map((_, idx) => {
                  const numStr = String(idx + 1).padStart(2, "0");
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleUserInteract(() => goToIndex(idx))}
                      className={`font-label-caps text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                        isActive
                          ? "text-[#F5F5DC] font-bold border-b border-[#F5F5DC] pb-0.5"
                          : "text-[#F5F5DC]/40 hover:text-[#F5F5DC]/80 font-normal"
                      }`}
                      aria-label={`Go to slide ${numStr}`}
                    >
                      {numStr}
                    </button>
                  );
                })}
              </div>

              {/* Left & Right Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleUserInteract(goToPrev)}
                  aria-label="Previous testimonial"
                  className="p-2 text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => handleUserInteract(goToNext)}
                  aria-label="Next testimonial"
                  className="p-2 text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
