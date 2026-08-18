import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TREATMENTS_DATA } from "@/data/treatments";

interface TreatmentDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = TREATMENTS_DATA.map((treatment) => ({
    slug: treatment.slug,
  }));
  // Alias for hair-oxygenation spelling
  params.push({ slug: "hair-oxygenation" });
  return params;
}

export default async function TreatmentDetailPage({ params }: TreatmentDetailProps) {
  const { slug } = await params;
  const treatment = TREATMENTS_DATA.find(
    (item) =>
      item.slug === slug ||
      (slug === "hair-oxygenation" && item.slug === "hair-oxigenation") ||
      (slug === "hair-oxigenation" && item.slug === "hair-oxygenation")
  );

  if (!treatment) {
    notFound();
  }

  // Get next 3 related treatments for bottom recommendations
  const relatedTreatments = TREATMENTS_DATA.filter(
    (item) => item.id !== treatment.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-8 pb-4">
        <nav className="flex items-center gap-2 font-label-caps text-[11px] tracking-widest text-[#AEB9A9] uppercase">
          <Link href="/" className="hover:text-[#F5F5DC] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-[#F5F5DC] transition-colors">
            Treatments
          </Link>
          <span>/</span>
          <span className="text-[#F5F5DC] font-semibold">{treatment.title}</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-6 pb-12 border-b border-[#657A6A]/30">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {treatment.subcategories
              .filter((tag) => tag !== "ALL")
              .map((tag) => (
                <span
                  key={tag}
                  className="bg-[#657A6A]/30 border border-[#AEB9A9]/30 text-[#F5F5DC] font-label-caps text-xs tracking-wider uppercase px-3 py-1 rounded font-semibold"
                >
                  {tag}
                </span>
              ))}
          </div>
          <h1 className="font-display text-[40px] sm:text-[52px] md:text-[60px] leading-[1.1] text-[#F5F5DC]">
            {treatment.title}
          </h1>
          <p className="font-body-md text-lg sm:text-xl text-[#F5F5DC]/90 leading-relaxed font-normal">
            {treatment.excerpt}
          </p>
        </div>
      </section>

      {/* Main Clinical Breakdown Grid */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Detailed Clinical Information */}
          <div className="lg:col-span-7 space-y-12">
            {/* Clinical Overview */}
            <div className="space-y-6 bg-[#17251E]/60 border border-[#657A6A]/30 p-8 rounded-2xl">
              <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold">
                CLINICAL PROTOCOL OVERVIEW
              </span>
              <div className="space-y-4 font-body-md text-base sm:text-lg text-[#F5F5DC]/90 leading-relaxed">
                {treatment.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Clinical Benefits */}
            <div className="space-y-6">
              <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold">
                KEY CLINICAL BENEFITS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-[#17251E] border border-[#657A6A]/30 p-5 rounded-xl flex items-start gap-3"
                  >
                    <span className="material-symbols-outlined text-[#AEB9A9] text-xl shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-sm text-[#F5F5DC] leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Candidates & Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Ideal Candidates */}
              <div className="space-y-4 bg-[#17251E]/40 border border-[#657A6A]/20 p-6 rounded-xl">
                <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold">
                  IDEAL CANDIDATES
                </span>
                <ul className="space-y-2.5">
                  {treatment.idealCandidates.map((candidate, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[#F5F5DC]/90">
                      <span className="text-[#AEB9A9] font-bold">•</span>
                      <span>{candidate}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Focus Areas (If Available) */}
              {treatment.focusAreas && (
                <div className="space-y-4 bg-[#17251E]/40 border border-[#657A6A]/20 p-6 rounded-xl">
                  <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold">
                    PRIMARY TREATMENT AREAS
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {treatment.focusAreas.map((area, index) => (
                      <span
                        key={index}
                        className="bg-[#1C3329] border border-[#657A6A]/40 text-[#F5F5DC] text-xs px-3 py-1.5 rounded font-label-caps"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FAQs Accordion (If Available) */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <div className="space-y-6 pt-4">
                <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-[#17251E] border border-[#657A6A]/30 p-6 rounded-xl space-y-2"
                    >
                      <h4 className="font-display text-lg text-[#F5F5DC]">{faq.question}</h4>
                      <p className="font-body-md text-sm text-[#F5F5DC]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Quick-Facts & Booking Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            {/* Image Frame */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#657A6A]/40 shadow-2xl bg-[#17251E]">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-label-caps text-[11px] tracking-widest text-[#AEB9A9] uppercase block">
                  CLINICAL PROTOCOL
                </span>
                <span className="font-display text-xl text-[#F5F5DC]">{treatment.title}</span>
              </div>
            </div>

            {/* Procedure Specs Table */}
            <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <span className="font-label-caps text-xs tracking-widest uppercase text-[#AEB9A9] block font-semibold border-b border-[#657A6A]/20 pb-3">
                PROCEDURE SPECIFICATIONS
              </span>

              <div className="space-y-3.5 font-label-caps text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#657A6A]/15">
                  <span className="text-[#AEB9A9]">DURATION</span>
                  <span className="text-[#F5F5DC] font-semibold">
                    {treatment.procedureOverview.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#657A6A]/15">
                  <span className="text-[#AEB9A9]">DOWNTIME</span>
                  <span className="text-[#F5F5DC] font-semibold">
                    {treatment.procedureOverview.downtime}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#657A6A]/15">
                  <span className="text-[#AEB9A9]">SESSIONS</span>
                  <span className="text-[#F5F5DC] font-semibold">
                    {treatment.procedureOverview.sessionsRecommended}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#AEB9A9]">ANESTHESIA</span>
                  <span className="text-[#F5F5DC] font-semibold">
                    {treatment.procedureOverview.anesthesia}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/book-consultation"
                  className="w-full bg-[#F5F5DC] hover:bg-[#F5F5DC]/90 text-[#17251E] font-button text-xs tracking-[0.12em] uppercase py-4 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-md"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                </Link>
                <a
                  href="tel:8669813636"
                  className="w-full border border-[#657A6A]/40 hover:border-[#F5F5DC] hover:bg-[#1C3329] text-[#F5F5DC] font-button text-xs tracking-[0.12em] uppercase py-3.5 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-center"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>Call +91 86698 13636</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Related Clinical Protocols */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-16 border-t border-[#657A6A]/30">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#F5F5DC]">
            Explore Other Clinical Protocols
          </h2>
          <Link
            href="/treatments"
            className="font-label-caps text-xs tracking-widest text-[#AEB9A9] hover:text-[#F5F5DC] uppercase transition-colors"
          >
            View All Treatments →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTreatments.map((item) => (
            <Link
              key={item.id}
              href={`/treatments/${item.slug}`}
              className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl overflow-hidden hover:border-[#F5F5DC]/40 transition-all duration-300 p-5 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#1C3329]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl text-[#F5F5DC] group-hover:text-[#F5F5DC]">
                  {item.title}
                </h3>
                <p className="font-body-md text-xs text-[#F5F5DC]/70 line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
              <span className="font-label-caps text-[11px] tracking-wider text-[#AEB9A9] group-hover:text-[#F5F5DC] uppercase font-semibold flex items-center gap-1 pt-2 border-t border-[#657A6A]/20">
                <span>View Details</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
