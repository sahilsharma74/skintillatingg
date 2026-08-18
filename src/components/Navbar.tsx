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

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1C3329] border-b border-[#AEB9A9]/25 transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-[20px] md:px-[60px] max-w-[1440px] mx-auto">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            alt="Skintillatingg Logo"
            className="h-11 w-auto object-contain brightness-105 group-hover:opacity-90 transition-opacity"
          />
          <div className="flex flex-col">
            <span className="font-display text-[19px] leading-tight tracking-tight text-[#F5F5DC]">
              Skintillatingg
            </span>
            <span className="font-label-caps text-[9px] tracking-[0.2em] text-[#AEB9A9] uppercase mt-0.5 font-medium">
              Dr. Akshaya Jain
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
          <Link
            href="/"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isHomeActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/journey"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isJourneyActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Our Journey
          </Link>
          <Link
            href="/treatments"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isTreatmentsActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Treatments
          </Link>
          <Link
            href="/technology"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isTechnologyActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Technology
          </Link>
          <Link
            href="/training"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isTrainingActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Training
          </Link>
          <Link
            href="/career"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isCareerActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Career
          </Link>

          <Link
            href="/contact"
            className={`font-label-caps text-[11px] tracking-[0.12em] lg:tracking-[0.15em] uppercase transition-colors relative py-1 font-medium ${
              isContactActive
                ? "text-[#F5F5DC] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#AEB9A9]"
                : "text-[#F5F5DC]/80 hover:text-[#F5F5DC]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:8669813636"
            className="font-label-caps text-[11px] tracking-[0.12em] text-[#F5F5DC] hover:text-[#AEB9A9] transition-colors flex items-center gap-1.5 font-medium"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            8669813636
          </a>
          <Link
            href="/book-consultation"
            className="bg-[#F5F5DC] text-[#17251E] font-button text-[12px] tracking-[0.12em] uppercase px-5 py-2.5 rounded-sm hover:bg-[#F5F5DC]/90 transition-colors duration-200 inline-block text-center font-semibold"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F5F5DC] p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C3329] border-b border-[#AEB9A9]/25 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isHomeActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/journey"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isJourneyActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Our Journey
            </Link>
            <Link
              href="/treatments"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isTreatmentsActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Treatments
            </Link>
            <Link
              href="/technology"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isTechnologyActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Technology
            </Link>
            <Link
              href="/training"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isTrainingActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Training
            </Link>
            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isCareerActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Career
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-[12px] tracking-[0.15em] uppercase py-2 border-b border-[#AEB9A9]/15 ${
                isContactActive ? "text-[#F5F5DC] font-bold" : "text-[#F5F5DC]/80"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:8669813636"
              className="text-center font-label-caps text-[12px] tracking-[0.12em] text-[#F5F5DC] py-2 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              8669813636
            </a>
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#F5F5DC] text-[#17251E] font-button text-[12px] tracking-[0.12em] uppercase py-3 rounded-sm hover:bg-[#F5F5DC]/90 transition-colors duration-200 text-center block font-semibold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
