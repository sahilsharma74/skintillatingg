import ScrollReveal from "@/components/effects/ScrollReveal";

export default function SanctuarySection() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#1C3329] text-[#F5F5DC] border-b border-[#AEB9A9]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Natural Clinic Interior Image Showcase */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={100}>
              <div
                data-cursor="SANCTUARY"
                className="relative border border-[#AEB9A9]/25 rounded-sm overflow-hidden h-[360px] sm:h-[440px] md:h-[500px] w-full cinematic-img-container cursor-pointer shadow-xl"
              >
                <img
                  src="https://backgroundimages.withfloats.com/actual/697754475977317ff0b334a9.png"
                  alt="Skintillatingg Clinic Interior Sanctuary"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Editorial Text */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={250} showGoldLine goldLinePosition="top">
              <div className="pt-4 space-y-6">
                <p className="font-label-caps text-[11px] sm:text-[12px] text-[#AEB9A9] tracking-[0.25em] uppercase font-semibold">
                  The Standard of Care
                </p>
                <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.15] text-[#F5F5DC] font-normal tracking-tight">
                  A Sanctuary for Transformation
                </h2>
                <p className="font-body-md text-[15px] sm:text-[16px] leading-[28px] text-[#F5F5DC]/85 font-light">
                  Experience the intersection of medical precision and artistic vision. Our clinic in Koregaon Park is meticulously designed to provide a serene, private environment where your aesthetic journey is handled with utmost clinical discretion and individual care.
                </p>
                <div className="pt-4 flex items-center gap-6">
                  <div className="w-12 h-px bg-[#AEB9A9]/40"></div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#AEB9A9] uppercase font-medium">
                    Koregaon Park • Pune
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

