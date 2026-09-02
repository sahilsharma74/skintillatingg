"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        onNext(); // Swiped left -> next image
      } else {
        onPrev(); // Swiped right -> prev image
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0D0B]/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fadeIn text-[#F1EFE4]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls & Metadata Bar */}
      <div className="flex items-center justify-between z-10 w-full border-b border-[#3F463A]/40 pb-4">
        <div className="flex items-center space-x-3 md:space-x-6">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] px-2.5 py-1 bg-[#59604F]/20 border border-[#59604F]/30 text-[#C9A227]">
            {item.category}
          </span>
          <span className="text-xs md:text-sm font-mono text-[#A6A397] tracking-widest">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="group flex items-center space-x-2 text-xs uppercase font-mono tracking-widest text-[#A6A397] hover:text-[#F1EFE4] transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Close Lightbox"
        >
          <span className="hidden md:inline">Close</span>
          <svg className="w-6 h-6 stroke-current transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 md:left-6 z-20 p-3 md:p-4 rounded-full bg-[#0A0D0B]/60 hover:bg-[#59604F]/40 border border-[#A6A397]/20 text-[#F1EFE4] transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous Image"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Natural Image Rendering (Zero Green Tint Overlays) */}
        <div className="relative w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            quality={95}
            priority
            className="object-contain transition-opacity duration-300 select-none"
            style={{ objectPosition: item.objectPosition || "center" }}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 md:right-6 z-20 p-3 md:p-4 rounded-full bg-[#0A0D0B]/60 hover:bg-[#59604F]/40 border border-[#A6A397]/20 text-[#F1EFE4] transition-all hover:scale-110 focus:outline-none"
          aria-label="Next Image"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Caption & Details Bar */}
      <div className="z-10 w-full border-t border-[#3F463A]/40 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg md:text-2xl font-serif tracking-wide text-[#F1EFE4]">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-[#A6A397] font-light mt-0.5">
            {item.subtitle}
          </p>
        </div>

        <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C9A227]">
          SKINTILLATINGG • VISUAL JOURNAL
        </div>
      </div>
    </div>
  );
};
