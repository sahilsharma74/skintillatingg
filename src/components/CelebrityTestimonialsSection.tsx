"use client";

import { useState, useEffect, useRef } from "react";

export interface CelebrityTestimonial {
  id: string;
  name: string;
  profession: string;
  quote: string;
  image: string;
}

// Centralized Reusable Data Structure (Easy to add/edit celebrities)
export const CELEBRITY_TESTIMONIALS: CelebrityTestimonial[] = [
  {
    id: "juhi-chawla",
    name: "JUHI CHAWLA",
    profession: "Actor & Social Activist",
    quote:
      "Dr. Akshaya always makes me feel special, gives me her best advice and a hug. Every visit is a portrait of the person who has done it and Dr. Akshaya approaches every detail with excellence.",
    image: "/images/dr-akshaya-jain.jpg",
  },
  {
    id: "celebrity-2",
    name: "CELEBRITY GUEST",
    profession: "Film Producer & Philanthropist",
    quote:
      "Dr. Akshaya Jain combines unmatched clinical accuracy with a deep understanding of natural aesthetic harmony. Skintillatingg is truly a sanctuary for evidence-led dermatology.",
    image: "/images/treatments/medi-facial.png",
  },
  {
    id: "celebrity-3",
    name: "NOTABLE CLIENT",
    profession: "Performing Artist & Media Personality",
    quote:
      "Every procedure at Skintillatingg is performed with extraordinary care and precision. Dr. Akshaya’s bespoke approach ensures subtle, radiant and timeless results.",
    image: "/images/treatments/lip-filler.png",
  },
  {
    id: "celebrity-4",
    name: "PUBLIC FIGURE",
    profession: "Fashion & Lifestyle Icon",
    quote:
      "Dr. Akshaya’s dedication to safety, state-of-the-art technology, and personalized clinical care makes her the premier choice for aesthetic medicine.",
    image: "/images/treatments/dermal-fillers.png",
  },
];

export default function CelebrityTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const current = CELEBRITY_TESTIMONIALS[currentIndex];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % CELEBRITY_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + CELEBRITY_TESTIMONIALS.length) % CELEBRITY_TESTIMONIALS.length);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#1C3329] text-[#F5F5DC] border-b border-[#AEB9A9]/20 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Top Bar: Section Name on Left + Minimal Navigation Arrows on Right */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <span className="font-label-caps text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#AEB9A9] font-semibold">
            CELEBRITY TESTIMONIALS
          </span>

          {/* Minimal Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-[#F5F5DC]/30 rounded flex items-center justify-center text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-[#F5F5DC]/30 rounded flex items-center justify-center text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Editorial Two-Column Feature */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left / Center Content (~65% width) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 min-h-[380px]">
            <div
              className={`space-y-6 transition-all duration-500 ease-out ${
                isTransitioning ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
              }`}
            >
              {/* Celebrity Name */}
              <div>
                <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#F5F5DC] tracking-wide font-normal">
                  {current.name}
                </h2>
                <p className="font-body-md text-sm sm:text-base tracking-widest uppercase text-[#AEB9A9] font-medium pt-2">
                  {current.profession}
                </p>
              </div>

              {/* Thin Subtle Gold Divider */}
              <div className="w-16 h-[1px] bg-[#E5C583]/50 my-6" />

              {/* Testimonial Quote */}
              <blockquote className="font-display italic text-[20px] sm:text-[25px] lg:text-[28px] leading-relaxed text-[#F5F5DC]/95 font-normal max-w-2xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom-Left Pagination Dots */}
            <div className="flex items-center gap-3 pt-6">
              {CELEBRITY_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-[#F5F5DC] w-6"
                      : "bg-[#AEB9A9]/40 hover:bg-[#AEB9A9]/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content (~35% width): Large Clean Rectangular Editorial Frame */}
          <div className="lg:col-span-5">
            <div className="relative max-w-[380px] lg:max-w-none mx-auto">
              {/* Thin Editorial Frame Border */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-[#E5C583]/40 p-2 rounded-sm bg-[#1C3329]">
                <img
                  src={current.image}
                  alt={current.name}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                    isTransitioning ? "opacity-30 scale-105" : "opacity-100 scale-100"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
