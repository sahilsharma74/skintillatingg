"use client";

import { useState, useEffect, useRef } from "react";

export interface CelebrityTestimonial {
  id: string;
  number: string;
  name: string;
  profession: string;
  quote: string;
  image: string;
}

export const CELEBRITY_TESTIMONIALS: CelebrityTestimonial[] = [
  {
    id: "juhi-chawla",
    number: "01",
    name: "JUHI CHAWLA",
    profession: "Actor & Social Activist",
    quote:
      "Dr. Akshaya always makes me feel special, gives me her best advice and a hug. Every visit is a portrait of the person who has done it and Dr. Akshaya approaches every detail with excellence.",
    image: "/images/dr-akshaya-jain.jpg",
  },
  {
    id: "mandira-bedi",
    number: "02",
    name: "MANDIRA BEDI",
    profession: "Actor, Presenter & Fitness Advocate",
    quote:
      "Dr. Akshaya Jain combines unmatched clinical accuracy with a deep understanding of natural aesthetic harmony. Skintillatingg is truly a sanctuary for evidence-led dermatology.",
    image: "/images/treatments/medi-facial.png",
  },
  {
    id: "sameera-reddy",
    number: "03",
    name: "SAMEERA REDDY",
    profession: "Actor & Content Creator",
    quote:
      "Every procedure at Skintillatingg is performed with extraordinary care and precision. Dr. Akshaya’s bespoke approach ensures subtle, radiant and timeless results.",
    image: "/images/treatments/lip-filler.png",
  },
  {
    id: "tisca-chopra",
    number: "04",
    name: "TISCA CHOPRA",
    profession: "Actor, Author & Director",
    quote:
      "Dr. Akshaya’s dedication to safety, state-of-the-art technology, and personalized clinical care makes her the premier choice for aesthetic medicine.",
    image: "/images/treatments/dermal-fillers.png",
  },
  {
    id: "gul-panag",
    number: "05",
    name: "GUL PANAG",
    profession: "Actor, Pilot & Wellness Ambassador",
    quote:
      "The clinical precision and natural artistic touch at Skintillatingg is unmatched. Dr. Akshaya Jain is a true master of holistic cosmetological wellness.",
    image: "/images/treatments/co2-laser.png",
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

  const handlePageClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
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
    <section className="relative w-full bg-[#1A3329] text-[#F5F5F0] py-16 md:py-20 lg:min-h-[630px] flex flex-col justify-center border-b border-[#C9A464]/20 overflow-hidden">
      
      {/* Top-Right Navigation Controls */}
      <div className="absolute top-8 right-6 md:top-12 md:right-16 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous celebrity review"
          className="w-10 h-10 border border-[#C9A464] rounded flex items-center justify-center text-[#D4AF7A] hover:bg-[#C9A464]/20 transition-all duration-300 shadow-sm"
        >
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next celebrity review"
          className="w-10 h-10 border border-[#C9A464] rounded flex items-center justify-center text-[#D4AF7A] hover:bg-[#C9A464]/20 transition-all duration-300 shadow-sm"
        >
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Main Two-Column Container */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 md:pl-[80px] md:pr-[60px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        {/* LEFT COLUMN (~60% width) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div
            className={`transition-all duration-500 ease-out ${
              isTransitioning ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
            }`}
          >
            {/* 1. Eyebrow Label */}
            <span className="uppercase text-[13px] tracking-[2px] color-[#A8A8A8] text-[#A8A8A8] font-semibold block mb-3">
              CELEBRITY REVIEW
            </span>

            {/* 2. Celebrity Name */}
            <h2 className="font-display uppercase text-[#D4AF7A] text-[40px] sm:text-[52px] md:text-[64px] font-bold tracking-[2px] leading-tight">
              {current.name}
            </h2>

            {/* 3. Role/Title */}
            <p className="font-display italic text-[#F5F5F0] text-[20px] sm:text-[24px] md:text-[28px] mt-2 font-normal">
              {current.profession}
            </p>

            {/* 4. Thin Gold Horizontal Divider Line */}
            <div className="w-[120px] h-[2px] bg-[#C9A464] my-5" />

            {/* 5. Quote Text */}
            <blockquote className="font-display italic text-[#FFFFFF] text-[18px] sm:text-[22px] md:text-[26px] leading-[1.5] max-w-[650px]">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* 6. Pagination "01 02 03 04 05" at Bottom */}
          <div className="flex items-center gap-[24px] pt-4 select-none font-sans">
            {CELEBRITY_TESTIMONIALS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageClick(idx)}
                  className={`text-[15px] sm:text-[16px] tracking-widest cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "text-white font-bold underline underline-offset-4 decoration-[#C9A464] decoration-2"
                      : "text-[#6B6B6B] hover:text-white font-medium"
                  }`}
                  aria-label={`Jump to slide ${item.number}`}
                >
                  {item.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN (~35% width) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[470px] h-[360px] sm:h-[440px] md:h-[500px] border-2 border-[#C9A464] p-1.5 bg-[#1A3329] shadow-2xl relative overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
                isTransitioning ? "opacity-30 scale-105" : "opacity-100 scale-100"
              }`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
