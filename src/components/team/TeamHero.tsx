import ScrollReveal from "@/components/effects/ScrollReveal";

export default function TeamHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine goldLinePosition="bottom">
          <div className="max-w-3xl">
            <span className="inline-block font-label-caps text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#C9A227] font-semibold mb-4 block">
              THE PEOPLE BEHIND THE PRACTICE
            </span>
            <h1 className="font-display text-[40px] sm:text-[54px] md:text-[64px] leading-[1.1] text-[#F5F5DC] font-normal mb-6">
              Meet the Team
            </h1>
            <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed font-light">
              Experienced professionals united by precision, clinical expertise and a commitment to personalized aesthetic care.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 border-b border-[#657A6A]/30">
        <ScrollReveal direction="up">
          <div className="bg-[#17251E]/60 border border-[#F5F5DC]/15 rounded-2xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl">
              <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block mb-3 font-semibold">
                ONE PRACTICE. ONE STANDARD.
              </span>
              <h2 className="font-display text-[26px] sm:text-[34px] md:text-[40px] text-[#F5F5DC] font-normal mb-6 leading-tight">
                Clinical Rigour Meets Bespoke Care
              </h2>
              <p className="font-body-md text-[#F5F5DC]/85 text-sm sm:text-base leading-relaxed font-light space-y-4">
                At Skintillatingg, every therapeutic protocol and aesthetic outcome is driven by a shared philosophy: combining dermatological precision, advanced laser technology, and discreet patient care. Our multidisciplinary team works seamlessly to ensure every client experience is personal, evidence-backed, and delivered with uncompromising medical standards.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
