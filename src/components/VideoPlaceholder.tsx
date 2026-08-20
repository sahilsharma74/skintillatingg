"use client";

import React from "react";

interface VideoPlaceholderProps {
  videoSrc?: string | null;
  title?: string;
  className?: string;
}

export default function VideoPlaceholder({
  videoSrc = null,
  title,
  className = "",
}: VideoPlaceholderProps) {
  // If actual video source exists, render HTML5 video element
  if (videoSrc) {
    return (
      <div className={`w-full aspect-[16/9] overflow-hidden rounded-sm border border-[#AEB9A9]/30 bg-[#17251E] ${className}`}>
        <video
          src={videoSrc}
          controls
          playsInline
          className="w-full h-full object-cover"
          aria-label={title ? `${title} video` : "Therapy video"}
        />
      </div>
    );
  }

  // Render minimal luxury video placeholder
  return (
    <div
      className={`w-full aspect-[16/9] relative overflow-hidden rounded-sm bg-[#17251E] border border-[#AEB9A9]/30 flex flex-col items-center justify-center select-none group/placeholder ${className}`}
      style={{
        backgroundImage: "radial-gradient(ellipse at center, #1C3329 0%, #17251E 100%)",
      }}
    >
      {/* Subtle fine inner border accent */}
      <div className="absolute inset-[3px] border border-[#AEB9A9]/10 rounded-[1px] pointer-events-none" />

      {/* Minimalist Centered Play Icon */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#AEB9A9]/40 bg-[#1C3329]/80 flex items-center justify-center text-[#F5F5DC] shadow-sm mb-3 transition-all duration-300 group-hover/placeholder:border-[#F5F5DC]/60 group-hover/placeholder:bg-[#1C3329] group-hover/placeholder:scale-105">
        <svg
          className="w-4 h-4 text-[#F5F5DC] translate-x-[1px]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Editorial Coming Soon Label */}
      <span className="font-label-caps text-[10px] sm:text-[11px] text-[#AEB9A9]/90 tracking-[0.25em] uppercase font-semibold">
        VIDEO COMING SOON
      </span>
    </div>
  );
}
