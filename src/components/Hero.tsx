"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  // Animated values for hero floating statistics card
  const [yearsVal, setYearsVal] = useState("0+");
  const [transformationsVal, setTransformationsVal] = useState("0");
  const [satisfactionVal, setSatisfactionVal] = useState("0%");

  useEffect(() => {
    // Trigger hero staggered entrance animation after initial render
    setIsMounted(true);

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setYearsVal("13+");
      setTransformationsVal("10k+");
      setSatisfactionVal("99%★");
      hasAnimatedRef.current = true;
      return;
    }

    const element = cardRef.current;
    if (!element) return;

    let animFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const duration = 1800; // 1.8 seconds animation duration
          const startTime = performance.now();

          // Ease out cubic function
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            // Counter 1: 13+
            const yearsNum = Math.floor(easedProgress * 13);
            setYearsVal(`${yearsNum}+`);

            // Counter 2: 10k+
            if (progress >= 1) {
              setTransformationsVal("10k+");
            } else {
              const kNum = Math.floor(easedProgress * 10);
              setTransformationsVal(kNum === 0 ? "0" : `${kNum}k+`);
            }

            // Counter 3: 99%★
            const satNum = Math.floor(easedProgress * 99);
            setSatisfactionVal(`${satNum}%★`);

            if (progress < 1) {
              animFrameId = requestAnimationFrame(animate);
            } else {
              // Exact final values
              setYearsVal("13+");
              setTransformationsVal("10k+");
              setSatisfactionVal("99%★");
            }
          };

          animFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-20 bg-[#1C3329] flex flex-col md:flex-row overflow-hidden border-b border-[#AEB9A9]/20">
      {/* LEFT SIDE PANEL (approx 42% desktop width - Deep Olive Green #1C3329) */}
      <div className="relative w-full md:w-[42%] bg-[#1C3329] p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-between z-20">
        <div className="space-y-8 my-auto pt-4 pb-8">
          {/* Top Category Label */}
          <div className="space-y-4">
            <p
              className={`font-label-caps text-[10px] sm:text-[11px] text-[#C9A227] tracking-[0.25em] uppercase font-semibold transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              AESTHETIC COSMETOLOGY • TRICHOLOGY
            </p>

            {/* Main Headline */}
            <h1
              className={`font-display text-[36px] sm:text-[46px] md:text-[42px] lg:text-[54px] xl:text-[60px] leading-[1.1] text-[#F5F5DC] font-normal tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Science of Beauty.<br />
              <span className="italic font-serif font-light text-[#F5F5DC]">Art of Precision.</span>
            </h1>
          </div>

          {/* Subheading & Doctor Bio */}
          <div
            className={`space-y-3 pt-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h2 className="font-label-caps text-[13px] sm:text-[14px] text-[#C9A227] tracking-[0.2em] uppercase font-semibold">
              DR. AKSHAYA JAIN
            </h2>
            <p className="font-body-md text-[14px] sm:text-[15px] leading-[24px] text-[#F5F5DC]/90 font-light max-w-lg">
              Award-winning Aesthetic Cosmetologist &amp; Celebrity Hair Specialist, providing advanced, natural-looking results with a human touch.
            </p>
          </div>

          {/* Button CTA */}
          <div
            className={`pt-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-3 bg-[#C9A227] text-[#17251E] font-button text-[12px] sm:text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-xs hover:bg-[#F5F5DC] hover:shadow-[0_4px_25px_rgba(201,162,39,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-bold group shadow-md"
            >
              <span>BOOK CONSULTATION</span>
              <span className="material-symbols-outlined text-[16px] font-bold transition-transform duration-300 group-hover:translate-x-1.5">
                east
              </span>
            </Link>
          </div>
        </div>

        {/* Location & Establishment Marker */}
        <div
          className={`pt-6 border-t border-[#657A6A]/30 flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] text-[#F5F5DC]/90 uppercase font-semibold">
            PUNE • INDIA
          </span>
          <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
            EST. 2012
          </span>
        </div>

        {/* ORGANIC CURVED BOUNDARY DIVIDER (Desktop) */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 h-full w-16 lg:w-24 pointer-events-none z-20 translate-x-[99%]">
          <svg
            className="h-full w-full fill-[#1C3329]"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <path d="M0,0 Q70,400 0,800 L0,800 L0,0 Z" />
          </svg>
        </div>
      </div>

      {/* RIGHT SIDE PANEL (approx 58% desktop width containing akshaya.jpg) */}
      <div
        data-cursor="EXPLORE"
        className="relative w-full md:w-[58%] min-h-[480px] sm:min-h-[550px] md:min-h-[calc(100vh-80px)] bg-[#17251E] overflow-hidden"
      >
        {/* Subtle Brand Watermark (Top Right) */}
        <div
          className={`absolute top-6 right-6 md:top-8 md:right-10 z-20 flex items-center gap-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none ${
            isMounted ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="w-8 md:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]/80" />
          <img
            src="/skintillatingg-favicon.svg"
            alt="Skintillatingg Brand Mark"
            className="w-7 h-7 md:w-8 md:h-8 object-contain drop-shadow-[0_0_6px_rgba(201,162,39,0.3)]"
          />
        </div>

        {/* Hero Photograph: akshaya.jpg */}
        <img
          src="/images/akshaya.jpg"
          alt="Dr. Akshaya Jain Clinical Practice"
          className={`w-full h-full object-cover object-[50%_20%] min-h-[480px] sm:min-h-[550px] md:min-h-full transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Soft Vignette Edge for Subtle Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/60 via-transparent to-transparent pointer-events-none md:hidden" />
      </div>

      {/* FLOATING HORIZONTAL STATISTICS CARD (Overlapping Left Panel & Right Photo) */}
      <div
        ref={cardRef}
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 lg:left-12 z-30 bg-[#F5F5DC]/95 text-[#17251E] px-6 sm:px-8 py-4 sm:py-5 rounded-md shadow-2xl border border-[#AEB9A9]/50 backdrop-blur-md w-[90%] sm:w-auto max-w-[650px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-[#17251E]/15 text-center sm:text-left">
          {/* Stat 1 */}
          <div className="px-1 sm:px-2">
            <p className="font-display text-[26px] sm:text-[36px] lg:text-[40px] text-[#17251E] leading-none font-normal mb-1">
              {yearsVal}
            </p>
            <p className="font-label-caps text-[8px] sm:text-[10px] leading-tight text-[#17251E]/80 uppercase tracking-[0.12em] font-bold">
              YEARS OF CLINICAL PRACTICE
            </p>
          </div>

          {/* Stat 2 */}
          <div className="pl-3 sm:pl-6 pr-1 sm:pr-2">
            <p className="font-display text-[26px] sm:text-[36px] lg:text-[40px] text-[#17251E] leading-none font-normal mb-1">
              {transformationsVal}
            </p>
            <p className="font-label-caps text-[8px] sm:text-[10px] leading-tight text-[#17251E]/80 uppercase tracking-[0.12em] font-bold">
              TRANSFORMATIONS
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pl-3 sm:pl-6">
            <p className="font-display text-[26px] sm:text-[36px] lg:text-[40px] text-[#17251E] leading-none font-normal mb-1">
              {satisfactionVal}
            </p>
            <p className="font-label-caps text-[8px] sm:text-[10px] leading-tight text-[#17251E]/80 uppercase tracking-[0.12em] font-bold">
              PATIENT SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

