import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-24 md:pt-32 pb-12 bg-[#1C3329] text-[#F5F5DC] border-t border-[#AEB9A9]/20">
      {/* Footer Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="inline-block">
            <img
              alt="Skintillatingg Logo Emblem"
              className="w-16 h-16 object-contain mb-3 brightness-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            />
          </Link>
          <h3 className="font-display text-[26px] sm:text-[30px] text-[#F5F5DC] font-normal leading-tight">
            Skintillatingg
          </h3>
          <p className="font-label-caps text-[#AEB9A9] tracking-[0.2em] uppercase text-[10px] font-semibold">
            Dr. Akshaya Jain
          </p>
          <p className="font-body-md text-[#F5F5DC]/75 text-[13px] leading-relaxed font-light">
            Cosmo - Tricho - Therapeutic Practice in Koregaon Park, Pune.
          </p>
        </div>

        {/* Practice Locations Column */}
        <div className="md:col-span-1 md:col-start-3 space-y-4">
          <h4 className="font-label-caps text-[#AEB9A9] uppercase tracking-[0.2em] text-[11px] font-semibold">
            Practice Info
          </h4>
          <ul className="space-y-3 font-body-md text-[#F5F5DC]/80 text-[13px] font-light">
            <li className="leading-snug">Krishna Apartments, 10, Boat Club Rd, behind Yes Bank</li>
            <li>Sangamvadi, Pune, MH 411001</li>
            <li className="pt-2">
              <a
                className="hover:text-[#F5F5DC] transition-colors inline-flex items-center gap-2 text-[#F5F5DC]/90 font-medium"
                href="tel:8669813636"
              >
                <span className="material-symbols-outlined text-[15px]">call</span>
                8669813636
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F5F5DC] transition-colors inline-flex items-center gap-2 text-[#F5F5DC]/90 font-medium"
                href="mailto:skintillatingg123@gmail.com"
              >
                <span className="material-symbols-outlined text-[15px]">mail</span>
                skintillatingg123@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-1 space-y-4">
          <h4 className="font-label-caps text-[#AEB9A9] uppercase tracking-[0.2em] text-[11px] font-semibold">
            Navigation
          </h4>
          <ul className="space-y-3 font-body-md text-[#F5F5DC]/80 text-[13px] font-light">
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/journey">
                Our Journey
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/insights">
                Insights Journal
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/contact">
                Contact &amp; Locations
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F5F5DC] transition-colors" href="/book-consultation">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-8 border-t border-[#AEB9A9]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F5F5DC]/60 font-body-md text-[12px] font-light">
        <span>© 2024 Dr. Akshaya Jain. Excellence in Aesthetic Cosmetology.</span>
        <span className="font-label-caps text-[10px] tracking-[0.18em] uppercase text-[#AEB9A9]/80">
          Luxury Medical Editorial Practice
        </span>
      </div>
    </footer>
  );
}

