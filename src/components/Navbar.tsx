"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive = pathname === "/";
  const isJourneyActive = pathname?.startsWith("/journey");
  const isTreatmentsActive = pathname?.startsWith("/treatments");
  const isTechnologyActive = pathname?.startsWith("/technology");
  const isTrainingActive = pathname?.startsWith("/training");
  const isCareerActive = pathname?.startsWith("/career");
  const isTeamActive = pathname?.startsWith("/team");
  const isGalleryActive = pathname?.startsWith("/gallery");
  const isContactActive = pathname?.startsWith("/contact");

  const navLinks = [
    { name: "HOME", href: "/", active: isHomeActive },
    { name: "OUR JOURNEY", href: "/journey", active: isJourneyActive },
    { name: "TREATMENTS", href: "/treatments", active: isTreatmentsActive },
    { name: "GALLERY", href: "/gallery", active: isGalleryActive },
    { name: "TECHNOLOGY", href: "/technology", active: isTechnologyActive },
    { name: "TRAINING", href: "/training", active: isTrainingActive },
    { name: "CAREER", href: "/career", active: isCareerActive },
    { name: "TEAM", href: "/team", active: isTeamActive },
    { name: "CONTACT", href: "/contact", active: isContactActive },
  ];

  const allMobileNavLinks = navLinks;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
        ? "bg-[#1C3329]/95 backdrop-blur-md border-b border-[#AEB9A9]/25 shadow-xl py-0"
        : "bg-[#1C3329]/90 backdrop-blur-sm border-b border-[#F5F5DC]/12 py-1"
        }`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-[70px]" : "h-[82px]"
          }`}
      >
        {/* 1. BRAND AREA — LEFT */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            alt="Skintillatingg Logo"
            className="h-10 sm:h-11 lg:h-[48px] w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
          <div className="flex flex-col justify-center">
            <span className="font-display text-[19px] sm:text-[21px] lg:text-[22px] leading-none tracking-tight text-[#F5F5DC]">
              Skintillatingg
            </span>
            <span className="font-label-caps text-xs tracking-[0.16em] text-[#AEB9A9] mt-1 font-medium leading-none">
              Dr. Akshaya Jain
            </span>
          </div>
        </Link>

        {/* 2. NAVIGATION — CENTER (DESKTOP / LARGE TABLET) */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-label-caps text-[11px] xl:text-xs tracking-[0.06em] xl:tracking-[0.1em] uppercase transition-all duration-300 relative py-2 font-medium shrink-0 group ${link.active
                ? "text-[#F5F5DC] font-semibold"
                : "text-[#F5F5DC]/75 hover:text-[#F5F5DC]"
                }`}
            >
              <span>{link.name}</span>
              {/* Active / Hover Gold Indicator Line */}
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A227] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${link.active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* 3. CTA — RIGHT */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/book-consultation"
            className="bg-[#F5F5DC] text-[#17251E] hover:bg-[#EBE9DA] hover:shadow-[0_4px_16px_rgba(201,162,39,0.25)] hover:scale-[1.02] active:scale-[0.98] font-label-caps text-xs tracking-[0.12em] px-4 xl:px-5 py-2.5 rounded-[3px] font-semibold transition-all duration-300 text-center shadow-sm shrink-0"
          >
            Book Consultation
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F5F5DC] p-2 focus:outline-none flex items-center justify-center rounded-md hover:bg-[#F5F5DC]/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C3329] border-b border-[#F5F5DC]/12 px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-1">
            {allMobileNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-caps text-xs tracking-[0.16em] uppercase py-3 border-b border-[#F5F5DC]/10 flex items-center justify-between ${link.active
                  ? "text-[#F5F5DC] font-semibold text-[#C9A227]"
                  : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
                  }`}
              >
                <span>{link.name}</span>
                {link.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                )}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-4">
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#F5F5DC] text-[#17251E] font-label-caps text-xs tracking-[0.14em] py-3 rounded-[3px] hover:bg-[#F5F5DC]/90 transition-colors text-center block font-semibold shadow-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
