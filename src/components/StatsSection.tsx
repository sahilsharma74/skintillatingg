"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  // Animated values initialized to starting state
  const [yearsVal, setYearsVal] = useState("0+");
  const [transformationsVal, setTransformationsVal] = useState("0");
  const [awardsVal, setAwardsVal] = useState("0");

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setYearsVal("13+");
      setTransformationsVal("10k+");
      setAwardsVal("3");
      hasAnimatedRef.current = true;
      return;
    }

    const element = sectionRef.current;
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

            // Stat 1: 13+
            const yearsNum = Math.floor(easedProgress * 13);
            setYearsVal(`${yearsNum}+`);

            // Stat 2: 10k+ (0 -> 1k -> 2k -> ... -> 10k+)
            if (progress >= 1) {
              setTransformationsVal("10k+");
            } else {
              const kNum = Math.floor(easedProgress * 10);
              setTransformationsVal(kNum === 0 ? "0" : `${kNum}k`);
            }

            // Stat 3: 3
            const awardsNum = Math.floor(easedProgress * 3);
            setAwardsVal(`${awardsNum}`);

            if (progress < 1) {
              animFrameId = requestAnimationFrame(animate);
            } else {
              // Ensure exact final values when animation completes
              setYearsVal("13+");
              setTransformationsVal("10k+");
              setAwardsVal("3");
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
  }, []); // Run effect once on mount

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-36 bg-[#1C3329] text-[#F5F5DC] border-b border-[#AEB9A9]/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Large Warm Cream Editorial Panel */}
        <div className="bg-[#F5F5DC] text-[#17251E] p-10 sm:p-14 md:p-20 rounded-sm border border-[#AEB9A9]/40 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 items-start text-center md:text-left">
            {/* Stat 1 */}
            <div className="space-y-2 border-b sm:border-b-0 pb-6 sm:pb-0 border-[#17251E]/15">
              <p className="font-display text-[52px] sm:text-[64px] lg:text-[72px] text-[#17251E] leading-none font-normal">
                {yearsVal}
              </p>
              <p className="font-label-caps text-[11px] sm:text-[12px] text-[#1C3329] uppercase tracking-[0.18em] font-semibold">
                Years of Clinical Practice
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 border-b sm:border-b-0 pb-6 sm:pb-0 border-[#17251E]/15">
              <p className="font-display text-[52px] sm:text-[64px] lg:text-[72px] text-[#17251E] leading-none font-normal">
                {transformationsVal}
              </p>
              <p className="font-label-caps text-[11px] sm:text-[12px] text-[#1C3329] uppercase tracking-[0.18em] font-semibold">
                Transformations
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 border-b sm:border-b-0 pb-6 sm:pb-0 border-[#17251E]/15">
              <p className="font-display text-[52px] sm:text-[64px] lg:text-[72px] text-[#17251E] leading-none font-normal">
                {awardsVal}
              </p>
              <p className="font-label-caps text-[11px] sm:text-[12px] text-[#1C3329] uppercase tracking-[0.18em] font-semibold">
                National Excellence Awards
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-3 flex flex-col justify-center items-center md:items-start pt-2">
              <p className="font-display text-[26px] sm:text-[30px] lg:text-[32px] text-[#17251E] italic font-normal leading-tight">
                &ldquo;Celebrity Trusted&rdquo;
              </p>
              <p className="font-label-caps text-[10px] sm:text-[11px] text-[#1C3329] uppercase tracking-[0.18em] font-semibold">
                Cosmo - Tricho - Therapeutics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
