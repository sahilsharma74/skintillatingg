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

            // Counter 1: 13+ (0 -> 1 -> 2 -> ... -> 13+)
            const yearsNum = Math.floor(easedProgress * 13);
            setYearsVal(`${yearsNum}+`);

            // Counter 2: 10k+ (0 -> 1k -> 2k -> ... -> 10k+)
            if (progress >= 1) {
              setTransformationsVal("10k+");
            } else {
              const kNum = Math.floor(easedProgress * 10);
              setTransformationsVal(kNum === 0 ? "0" : `${kNum}k`);
            }

            if (progress < 1) {
              animFrameId = requestAnimationFrame(animate);
            } else {
              // Exact final values
              setYearsVal("13+");
              setTransformationsVal("10k+");
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
    <section className="relative min-h-screen pt-20 bg-[#1C3329] flex flex-col md:flex-row overflow-hidden border-b border-[#AEB9A9]/20">
      {/* LEFT SIDE PANEL (approx 38% desktop width - Sage Green #657A6A) */}
      <div className="w-full md:w-[38%] bg-[#657A6A] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between z-10 border-r border-[#AEB9A9]/20">
        <div className="space-y-8 my-auto pt-2 pb-6">
          {/* Small Uppercase Editorial Label & Headline */}
          <div className="space-y-4">
            <p
              className={`font-label-caps text-[10px] sm:text-[11px] text-[#F5F5DC]/90 tracking-[0.25em] uppercase font-semibold transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Aesthetic Cosmetology • Trichology
            </p>

            {/* Main Editorial Serif Headline */}
            <h1
              className={`font-display text-[38px] sm:text-[48px] md:text-[44px] lg:text-[56px] xl:text-[62px] leading-[1.1] text-[#F5F5DC] font-normal tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Science of Beauty.<br />
              <span className="italic font-light text-[#F5F5DC]">Art of Precision.</span>
            </h1>
          </div>

          {/* Doctor Name Subheading & Editorial Copy */}
          <div
            className={`space-y-3 pt-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h2 className="font-label-caps text-[13px] sm:text-[14px] text-[#F5F5DC] tracking-[0.2em] uppercase font-medium">
              Dr. Akshaya Jain
            </h2>
            <p className="font-body-md text-[14px] sm:text-[15px] leading-[24px] text-[#F5F5DC]/90 font-light max-w-lg">
              Award-winning Aesthetic Cosmetologist &amp; Celebrity Hair Specialist, providing advanced, natural-looking results with a human touch.
            </p>
          </div>

          {/* CTA Action Button */}
          <div
            className={`pt-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-3 bg-[#F5F5DC] text-[#17251E] font-button text-[12px] sm:text-[13px] tracking-[0.15em] uppercase px-7 py-3.5 rounded-sm hover:bg-[#F5F5DC] hover:shadow-[0_4px_20px_rgba(201,162,39,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-semibold group shadow-sm"
            >
              Book Consultation
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                east
              </span>
            </Link>
          </div>
        </div>

        {/* Location Marker at Bottom */}
        <div
          className={`pt-6 border-t border-[#AEB9A9]/30 flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#F5F5DC]/90 uppercase font-medium">
            Pune • India
          </span>
          <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#F5F5DC]/70 uppercase">
            Est. 2012
          </span>
        </div>
      </div>

      {/* RIGHT SIDE PANEL (approx 62% desktop width) */}
      <div
        data-cursor="EXPLORE"
        className="relative w-full md:w-[62%] min-h-[450px] md:min-h-[calc(100vh-80px)] bg-[#1C3329] cinematic-img-container"
      >
        {/* Subtle Editorial Brand Mark (Upper Right of Hero Image) */}
        <div
          className={`absolute top-6 right-6 md:top-8 md:right-10 z-20 flex items-center gap-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none ${
            isMounted ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="w-6 sm:w-10 md:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/50 to-[#C9A227]/80" />
          <img
            src="/skintillatingg-favicon.svg"
            alt="Skintillatingg Brand Mark"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain drop-shadow-[0_0_4px_rgba(201,162,39,0.3)]"
          />
        </div>

        {/* Hero Image with Slow Fade + Scale Reveal */}
        <img
          src="/images/akshaya.jpg"
          alt="Dr. Akshaya Jain Clinical Practice"
          className={`w-full h-full object-cover object-center min-h-[450px] md:min-h-full transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Floating Warm Cream Statistics Card (Bottom Left of Photo) */}
        <div
          ref={cardRef}
          className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-[#F5F5DC] text-[#17251E] p-5 sm:p-6 rounded-sm shadow-xl border border-[#AEB9A9]/40 max-w-[280px] sm:max-w-[320px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="grid grid-cols-2 gap-4 divide-x divide-[#17251E]/15">
            <div className="pr-2">
              <p className="font-display text-[32px] sm:text-[40px] text-[#17251E] leading-none font-normal mb-1.5">
                {yearsVal}
              </p>
              <p className="font-label-caps text-[9px] sm:text-[10px] leading-tight text-[#17251E]/80 uppercase tracking-[0.12em] font-semibold">
                Years of Clinical Practice
              </p>
            </div>
            <div className="pl-4">
              <p className="font-display text-[32px] sm:text-[40px] text-[#17251E] leading-none font-normal mb-1.5">
                {transformationsVal}
              </p>
              <p className="font-label-caps text-[9px] sm:text-[10px] leading-tight text-[#17251E]/80 uppercase tracking-[0.12em] font-semibold">
                Transformations
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Editorial Magazine Detail (Far Right Edge) */}
        <div
          className={`hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-20 select-none pointer-events-none transition-opacity duration-1000 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-[#F5F5DC]/70 uppercase font-medium [writing-mode:vertical-rl]">
            SKINTILLATINGG • PUNE
          </p>
        </div>
      </div>
    </section>
  );
}
