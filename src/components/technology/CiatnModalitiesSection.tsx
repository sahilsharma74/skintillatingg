"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface ModalityVideo {
  id: string;
  number: string;
  categoryLabel: string;
  title: string;
  description: string;
  videoUrl: string;
}

const MODALITIES_DATA: ModalityVideo[] = [
  {
    id: "laser-tech",
    number: "01",
    categoryLabel: "LASER TECHNOLOGY",
    title: "Advanced Aesthetic Technology",
    description: "Hands-on calibration and operational training on Q-Switched, Picosecond, and Fractional laser systems for dermal remodeling.",
    videoUrl: "/videos/Advanced Aesthetic Technology.mp4"
  },
  {
    id: "trichology",
    number: "02",
    categoryLabel: "SCALP & FOLLICULAR MAPS",
    title: "Trichology",
    description: "High-resolution trichoscopy diagnostics, digital scalp microbiome mapping, and advanced follicular vitality evaluation.",
    videoUrl: "/videos/ciatn/trichology.mp4"
  },
  {
    id: "prp-mesotherapy",
    number: "03",
    categoryLabel: "AUTOLOGOUS REGENERATION",
    title: "PRP / Mesotherapy",
    description: "Sterile clinical preparation, autologous growth factor isolation science, and micro-dermal nutrient infusion delivery.",
    videoUrl: "/videos/ciatn/prp-mesotherapy.mp4"
  },
  {
    id: "hifu",
    number: "04",
    categoryLabel: "ULTRASOUND REJUVENATION",
    title: "HIFU",
    description: "High-Intensity Focused Ultrasound energy delivery targeting the SMAS muscular layer for non-surgical facial lifting.",
    videoUrl: "/videos/ciatn/hifu.mp4"
  },
  {
    id: "facial-aesthetics",
    number: "05",
    categoryLabel: "STRUCTURAL REJUVENATION",
    title: "Facial Aesthetics",
    description: "3D facial vector assessment, anatomical muscular mapping, and non-invasive precision clinical aesthetic techniques.",
    videoUrl: "/videos/ciatn/facial-aesthetics.mp4"
  },
  {
    id: "chemical-peels",
    number: "06",
    categoryLabel: "CUTANEOUS RESURFACING",
    title: "Chemical Peels",
    description: "Controlled medical-grade alpha/beta hydroxy acid resurfacing, frosting identification, and post-peel neutralization timing.",
    videoUrl: "/videos/ciatn/chemical-peels.mp4"
  },
  {
    id: "laser-hair-reduction",
    number: "07",
    categoryLabel: "DIODE & ND:YAG SYSTEMS",
    title: "Laser Hair Reduction",
    description: "Wavelength selection according to Fitzpatrick skin typing, sapphire contact cooling, and safe fluence calibration.",
    videoUrl: "/videos/ciatn/laser-hair-reduction.mp4"
  },
  {
    id: "facial-injectables",
    number: "08",
    categoryLabel: "ADVANCED INJECTABLES",
    title: "Facial Injectables",
    description: "Clinical preparation, anatomical safety zone isolation, and micro-dosing protocols for botulinum toxin and fillers.",
    videoUrl: "/videos/ciatn/botox-fillers.mp4"
  },
  {
    id: "thread-lift",
    number: "09",
    categoryLabel: "MINIMALLY INVASIVE VECTORING",
    title: "Thread Lift",
    description: "PDO & PLLA thread vector dynamics, sterile field preparation, tissue anchorage, and mid-face structural contouring.",
    videoUrl: "/videos/ciatn/thread-lift.mp4"
  },
  {
    id: "advanced-facial-devices",
    number: "10",
    categoryLabel: "ENERGY WORKSTATIONS",
    title: "Advanced Facial Devices",
    description: "Multi-device workstation calibration, combined energy-based protocols, and comprehensive clinical safety compliance.",
    videoUrl: "/videos/ciatn/advanced-facial-devices.mp4"
  }
];

interface ModalityCardProps {
  item: ModalityVideo;
}

const ModalityCard: React.FC<ModalityCardProps> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAutoplayFailed, setIsAutoplayFailed] = useState<boolean>(false);

  useEffect(() => {
    const videoNode = videoRef.current;
    const cardNode = cardRef.current;
    if (!videoNode || !cardNode) return;

    const handlePlayState = async () => {
      try {
        await videoNode.play();
        setIsPlaying(true);
        setIsAutoplayFailed(false);
      } catch (err) {
        setIsPlaying(false);
        setIsAutoplayFailed(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePlayState();
          } else {
            videoNode.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(cardNode);

    return () => {
      observer.unobserve(cardNode);
    };
  }, []);

  const togglePlay = async () => {
    const videoNode = videoRef.current;
    if (!videoNode) return;

    if (videoNode.paused) {
      try {
        await videoNode.play();
        setIsPlaying(true);
        setIsAutoplayFailed(false);
      } catch (err) {
        console.error("Playback failed", err);
      }
    } else {
      videoNode.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article
      ref={cardRef}
      className="bg-[#17251E]/90 border border-[#657A6A]/30 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C9A227]/50 transition-all duration-300 group shadow-md"
    >
      <div>
        {/* Video Container (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#17251E] group/video">
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/video:scale-[1.03]"
          />

          {/* Subtle Neutral Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 bg-[#1C3329]/90 text-[#C9A227] font-label-caps text-[9px] tracking-widest uppercase px-2.5 py-1 rounded border border-[#C9A227]/30 backdrop-blur-xs">
            {item.categoryLabel}
          </div>

          {/* Autoplay Fallback or Play/Pause Button Overlay */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className={`absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-opacity duration-300 ${
              isAutoplayFailed || !isPlaying ? "opacity-100" : "opacity-0 group-hover/video:opacity-100"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-[#1C3329]/90 border border-[#C9A227]/60 text-[#F5F5DC] flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover/video:scale-110">
              <span className="material-symbols-outlined text-xl">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </div>
          </button>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-baseline justify-between gap-2 border-b border-[#657A6A]/20 pb-2">
            <span className="font-label-caps text-xs tracking-widest text-[#C9A227] font-semibold">
              {item.categoryLabel}
            </span>
            <span className="font-display text-xs text-[#AEB9A9] font-medium">
              {item.number}
            </span>
          </div>

          <h3 className="font-display text-xl font-normal text-[#F5F5DC] group-hover:text-[#C9A227] transition-colors">
            {item.title}
          </h3>

          <p className="font-body-md text-xs sm:text-sm text-[#F5F5DC]/80 leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <Link
          href="/training"
          className="w-full border border-[#657A6A]/40 text-[#F5F5DC] hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#17251E] font-button text-[11px] tracking-[0.14em] uppercase py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
        >
          <span>EXPLORE</span>
          <span className="material-symbols-outlined text-xs font-bold">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
};

export default function CiatnModalitiesSection() {
  return (
    <section className="px-5 sm:px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#657A6A]/30 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-[0.2em] uppercase font-semibold">
              CIATN TECHNOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#F5F5DC] font-normal">
              CIATN Modalities & Equipment
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
              Explore the advanced modalities, equipment and technology used to support hands-on learning and practical training at CIATN.
            </p>
          </div>

          {/* Gold Editorial Tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-label-caps tracking-wider text-[#AEB9A9]">
            <span className="text-[#C9A227] font-semibold">01 — TECHNOLOGY</span>
            <span className="text-[#657A6A]">•</span>
            <span className="text-[#C9A227] font-semibold">02 — EQUIPMENT</span>
            <span className="text-[#657A6A]">•</span>
            <span className="text-[#C9A227] font-semibold">03 — PRACTICAL TRAINING</span>
          </div>
        </div>

        {/* Video Gallery Grid: 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODALITIES_DATA.map((item) => (
            <ModalityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
