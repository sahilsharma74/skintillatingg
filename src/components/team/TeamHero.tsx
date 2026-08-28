import ScrollReveal from "@/components/effects/ScrollReveal";

export default function TeamHero() {
  return (
    <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1200px] mx-auto pt-16 md:pt-24 pb-12 text-center z-10">
      <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-4">
        <span className="font-label-caps text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#C9A227] font-semibold block">
          OUR TEAM
        </span>

        <h1 className="font-display text-[38px] sm:text-[54px] md:text-[64px] leading-[1.12] text-[#F1EFE4] font-normal tracking-tight">
          The People Behind Skintillatingg
        </h1>

        <p className="font-body-md text-[#D8D5C5] text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto pt-1">
          Expertise, experience, and a commitment to exceptional skin and hair care.
        </p>

        <div className="pt-4">
          <div className="w-20 sm:w-24 h-[1px] bg-[#C9A227]/70 mx-auto" />
        </div>
      </ScrollReveal>
    </section>
  );
}
