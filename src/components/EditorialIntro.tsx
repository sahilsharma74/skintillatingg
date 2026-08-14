import Link from "next/link";

export default function EditorialIntro() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#F5F5DC] text-[#17251E] border-b border-[#AEB9A9]/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Small Editorial Category Label */}
        <div className="mb-8">
          <p className="font-label-caps text-[11px] sm:text-[12px] text-[#657A6A] tracking-[0.25em] uppercase font-semibold">
            Clinical Philosophy
          </p>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Dominant Editorial Headline Statement */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#17251E] leading-[1.1] font-normal tracking-tight">
              Precision in science.<br />
              <span className="italic text-[#1C3329]">Natural in expression.</span>
            </h2>
            <div className="mt-8 w-16 h-px bg-[#657A6A]/40"></div>
          </div>

          {/* Right Column: Narrative Copy & Link */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <p className="font-body-md text-[15px] sm:text-[16px] leading-[28px] text-[#1C3329] font-normal">
              Dr. Akshaya Jain is an award-winning aesthetic cosmetologist and celebrity hair specialist based in Koregaon Park, Pune, with over 12 years of clinical experience. She specializes in advanced skin, hair, and laser therapies.
            </p>
            <p className="font-body-md text-[15px] sm:text-[16px] leading-[28px] text-[#1C3329]/90 font-light">
              Her philosophy centers on enhancing natural beauty while preserving individual expression—combining FDA-approved technologies with bespoke treatment plans tailored to each patient&apos;s unique anatomical canvas.
            </p>
            <div className="pt-4">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 text-[#17251E] font-button text-[13px] tracking-[0.15em] uppercase font-semibold group hover:text-[#657A6A] transition-colors"
              >
                Discover The Practice
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  east
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

