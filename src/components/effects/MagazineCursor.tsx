'use client';

import React, { useEffect, useState } from 'react';

export default function MagazineCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable custom cursor on mobile/touch devices
    const checkMobile = () => {
      const touchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(touchDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Smooth update using rAF
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      // Check if target or parent has data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const cursorLabel = cursorTarget.getAttribute('data-cursor');
        if (cursorLabel && cursorLabel.toUpperCase() !== 'EXPLORE') {
          setLabel(cursorLabel);
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setLabel(null);
        }
      } else {
        setIsVisible(false);
        setLabel(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile || !isVisible || !label) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Floating Circular Badge */}
      <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17251E]/85 text-[#F5F5DC] border border-[#C9A227]/40 backdrop-blur-md shadow-lg transition-transform duration-200 ease-out scale-100">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
        <span className="font-label-caps text-[9px] tracking-[0.2em] uppercase font-semibold text-[#F5F5DC]">
          {label}
        </span>
      </div>
    </div>
  );
}
