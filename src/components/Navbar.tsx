"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isJourneyActive = pathname?.startsWith("/journey");
  const isTreatmentsActive = pathname?.startsWith("/treatments");
  const isTechnologyActive = pathname?.startsWith("/technology");
  const isTrainingActive = pathname?.startsWith("/training");
  const isCareerActive = pathname?.startsWith("/career");
  const isContactActive = pathname?.startsWith("/contact");

  const navLinks = [
    { name: "HOME", href: "/", active: isHomeActive },
    { name: "OUR JOURNEY", href: "/journey", active: isJourneyActive },
    { name: "TREATMENTS", href: "/treatments", active: isTreatmentsActive },
    { name: "TECHNOLOGY", href: "/technology", active: isTechnologyActive },
    { name: "TRAINING", href: "/training", active: isTrainingActive },
    { name: "CAREER", href: "/career", active: isCareerActive },
    { name: "CONTACT", href: "/contact", active: isContactActive },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1C3329]/95 backdrop-blur-sm border-b border-[#F5F5DC]/12 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-10 h-[76px] flex items-center justify-between">
        
        {/* 1. BRAND AREA — LEFT */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            alt="Skintillatingg Logo"
            className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
          <div className="flex flex-col justify-center">
            <span className="font-display text-[19px] leading-none tracking-tight text-[#F5F5DC]">
              Skintillatingg
            </span>
            <span className="font-label-caps text-[8.5px] tracking-[0.22em] text-[#AEB9A9] uppercase mt-1 font-medium leading-none">
              DR. AKSHAYA JAIN
            </span>
          </div>
        </Link>

        {/* 2. NAVIGATION — CENTER (DESKTOP / LARGE TABLET) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-label-caps text-[11px] xl:text-[11.5px] tracking-[0.14em] xl:tracking-[0.16em] uppercase transition-colors duration-200 relative py-2 font-medium shrink-0 ${
                link.active
                  ? "text-[#F5F5DC] font-semibold"
                  : "text-[#F5F5DC]/75 hover:text-[#F5F5DC]"
              }`}
            >
              <span>{link.name}</span>
              {/* Active Indicator Line */}
              {link.active && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9A227] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* 3. CONTACT + CTA — RIGHT */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 shrink-0">
          <a
            href="tel:8669813636"
            className="font-label-caps text-[11px] xl:text-[11.5px] tracking-[0.14em] text-[#F5F5DC] hover:text-[#C9A227] transition-colors flex items-center gap-2 font-medium"
          >
            <span className="material-symbols-outlined text-[15px] text-[#AEB9A9]">call</span>
            <span>8669813636</span>
          </a>

          <Link
            href="/book-consultation"
            className="bg-[#F5F5DC] text-[#17251E] hover:bg-[#F5F5DC]/90 font-label-caps text-[11px] xl:text-[11.5px] tracking-[0.14em] uppercase px-5 xl:px-6 py-2.5 rounded-[3px] font-semibold transition-colors duration-200 text-center shadow-sm shrink-0"
          >
            BOOK CONSULTATION
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-caps text-[12px] tracking-[0.16em] uppercase py-3 border-b border-[#F5F5DC]/10 flex items-center justify-between ${
                  link.active
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
            <a
              href="tel:8669813636"
              className="text-center font-label-caps text-[12px] tracking-[0.14em] text-[#F5F5DC] py-2 flex items-center justify-center gap-2 border border-[#F5F5DC]/20 rounded-[3px]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#AEB9A9]">call</span>
              <span>8669813636</span>
            </a>
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#F5F5DC] text-[#17251E] font-label-caps text-[12px] tracking-[0.14em] uppercase py-3 rounded-[3px] hover:bg-[#F5F5DC]/90 transition-colors text-center block font-semibold shadow-md"
            >
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

