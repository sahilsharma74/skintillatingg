"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-14 md:pt-20 pb-10 bg-[#17251E] text-[#F5F5DC] border-t border-[#657A6A]/30">
      {/* Footer Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto mb-10">

        {/* Brand Column */}
        <div className="md:col-span-4 space-y-3">
          <Link href="/" className="inline-block group">
            <img
              alt="Skintillatingg Logo"
              className="w-[120px] sm:w-[140px] md:w-[160px] object-contain brightness-105 group-hover:opacity-90 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            />
          </Link>
          <h3 className="font-display text-[24px] sm:text-[28px] text-[#F5F5DC] font-normal leading-tight">
            Skintillatingg
          </h3>
          <p className="font-label-caps text-[#C9A227] tracking-[0.2em] uppercase text-[10px] font-semibold">
            Dr. Akshaya Jain
          </p>
          <p className="font-body-md text-[#F5F5DC]/70 text-[12px] leading-relaxed font-light">
            Cosmo • Tricho • Therapeutic
          </p>
          <p className="font-body-md text-[#F5F5DC]/70 text-[12px] leading-relaxed font-light">
            Pune - 411001
          </p>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-label-caps text-[#AEB9A9] uppercase tracking-[0.2em] text-[11px] font-semibold border-b border-[#657A6A]/20 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2 font-body-md text-[#F5F5DC]/75 text-[12px] font-light">
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/journey">Our Journey</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/treatments">Treatments Catalogue</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/technology">Technology</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/training">Training</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/career">Careers</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/gallery">Visual Journal</Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/contact">Contact &amp; Sanctuary</Link>
            </li>
            <li>
              <Link className="hover:text-[#C9A227] transition-colors font-medium" href="/book-consultation">
                Book Consultation →
              </Link>
            </li>
          </ul>
        </div>

        {/* Practice Locations Column */}
        <div className="md:col-span-4 md:col-start-9 space-y-3">
          <h4 className="font-label-caps text-[#AEB9A9] uppercase tracking-[0.2em] text-[11px] font-semibold border-b border-[#657A6A]/20 pb-2">
            Practice Info
          </h4>
          <ul className="space-y-2 font-body-md text-[#F5F5DC]/75 text-[12px] font-light">
            <li className="leading-snug">Opp. to Clover Infotech</li>
            <li className="leading-snug">Krishna Apartments, 10, Boat Club Rd</li>
            <li>Sangamvadi, Pune, MH 411001</li>
            <li className="pt-1">
              <a
                className="hover:text-[#F5F5DC] transition-colors inline-flex items-center gap-2 text-[#F5F5DC]/85 font-medium"
                href="tel:8669813636"
              >
                <span className="material-symbols-outlined text-[14px] text-[#AEB9A9]">call</span>
                8669813636
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F5F5DC] transition-colors inline-flex items-center gap-2 text-[#F5F5DC]/85 font-medium"
                href="mailto:skintillatingg123@gmail.com"
              >
                <span className="material-symbols-outlined text-[14px] text-[#AEB9A9]">mail</span>
                skintillatingg123@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Sub-footer */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-6 border-t border-[#657A6A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#F5F5DC]/55 font-body-md text-[11px] font-light">
        <span>© 2024 Dr. Akshaya Jain. Excellence in Aesthetic Cosmetology.</span>
        <div className="flex items-center gap-5">
          <span className="font-label-caps text-[10px] tracking-[0.18em] uppercase text-[#AEB9A9]/70">
            Luxury Medical Editorial Practice
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#F5F5DC]/75 hover:text-[#F5F5DC] transition-colors font-label-caps text-[10px] tracking-widest uppercase"
            aria-label="Back to top"
          >
            <span>Top</span>
            <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
