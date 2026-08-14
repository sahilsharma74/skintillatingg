import Link from "next/link";

export default function InsightsFooter() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-8 pb-16 md:pb-20">
      <div className="bg-[#244035]/90 border border-[#657A6A]/40 rounded-sm p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
        {/* Left Editorial Quote */}
        <div className="space-y-1">
          <blockquote className="font-display text-[22px] sm:text-[26px] md:text-[30px] italic text-[#F7F5DC] font-normal leading-snug">
            &ldquo;Precision in science. Natural in expression.&rdquo;
          </blockquote>
          <p className="font-body-md text-[13px] sm:text-[14px] text-[#F7F5DC]/80 font-light tracking-wide pt-1">
            — Dr. Akshaya Jain
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="pt-2 md:pt-0 shrink-0">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2.5 border border-[#F7F5DC]/40 text-[#F7F5DC] hover:bg-[#F7F5DC] hover:text-[#17251E] px-6 sm:px-7 py-3.5 rounded-sm font-button text-[11.5px] sm:text-[12px] tracking-[0.16em] uppercase transition-all duration-300 font-semibold group shadow-sm"
          >
            Book Consultation
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
              east
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
