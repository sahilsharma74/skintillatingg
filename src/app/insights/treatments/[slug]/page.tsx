import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TREATMENTS_DATA, Treatment } from "@/data/treatments";
import { notFound } from "next/navigation";

interface TreatmentPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return TREATMENTS_DATA.map((t) => ({
    slug: t.slug,
  }));
}

export default function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const treatment: Treatment | undefined = TREATMENTS_DATA.find(
    (t) => t.slug === params.slug
  );

  if (!treatment) {
    notFound();
  }

  // Related treatments for navigation
  const relatedTreatments = TREATMENTS_DATA.filter(
    (t) => t.slug !== treatment.slug
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F7F5DC] pt-20 overflow-x-hidden">
      <Navbar />

      {/* Hero Header Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-12 md:pt-16 pb-12 border-b border-[#657A6A]/30">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-label-caps text-[11px] tracking-[0.18em] uppercase text-[#AEB9A9] hover:text-[#F7F5DC] transition-colors font-medium"
          >
            <span className="material-symbols-outlined text-[16px]">west</span>
            Back to Insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-[#244035] border border-[#657A6A]/40 text-[#F7F5DC] font-label-caps text-[10px] tracking-[0.2em] uppercase rounded-sm font-semibold">
              {treatment.category}
            </span>
            <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] text-[#F7F5DC] leading-tight font-normal">
              {treatment.title}
            </h1>
            <p className="font-body-md text-[#F7F5DC]/90 text-[16px] sm:text-[18px] leading-relaxed font-light max-w-2xl">
              {treatment.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-3 bg-[#F7F5DC] text-[#17251E] font-button text-[12px] tracking-[0.15em] uppercase px-7 py-3.5 rounded-sm hover:bg-[#F7F5DC]/90 transition-colors font-semibold shadow-md"
              >
                Book Consultation
                <span className="material-symbols-outlined text-[16px]">east</span>
              </Link>
            </div>
          </div>

          {/* Featured Clinical Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#AEB9A9]/30 shadow-2xl">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview & Procedure Quick-Facts */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-14 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Editorial Description */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-[28px] sm:text-[34px] text-[#F7F5DC] font-normal">
                Clinical Overview & Science
              </h2>
              {treatment.fullDescription.map((para, i) => (
                <p
                  key={i}
                  className="font-body-md text-[#F7F5DC]/90 text-[15px] sm:text-[16px] leading-[1.75] font-light"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Key Clinical Benefits */}
            <div className="bg-[#244035]/60 border border-[#657A6A]/30 rounded-md p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-[22px] text-[#F7F5DC]">
                Key Clinical Benefits
              </h3>
              <ul className="space-y-3 font-body-md text-[14.5px] text-[#F7F5DC]/90">
                {treatment.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-[#AEB9A9] mt-0.5">
                      check_circle
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Candidates */}
            <div className="space-y-4">
              <h3 className="font-display text-[24px] text-[#F7F5DC]">
                Ideal Candidates
              </h3>
              <ul className="space-y-2.5 font-body-md text-[14.5px] text-[#F7F5DC]/90">
                {treatment.idealCandidates.map((candidate, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#AEB9A9]">•</span>
                    <span>{candidate}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar Procedure Quick-Facts */}
          <div className="lg:col-span-4">
            <div className="bg-[#F7F5DC] text-[#17251E] p-6 sm:p-8 rounded-md shadow-xl space-y-6 sticky top-28">
              <h3 className="font-display text-[22px] text-[#17251E] border-b border-[#17251E]/15 pb-4">
                Treatment Summary
              </h3>

              <div className="space-y-4 font-body-md text-[13.5px]">
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.15em] text-[#1C3329]/70 uppercase block mb-1">
                    Procedure Duration
                  </span>
                  <span className="font-medium text-[#17251E]">
                    {treatment.procedureOverview.duration}
                  </span>
                </div>

                <div className="border-t border-[#17251E]/10 pt-3">
                  <span className="font-label-caps text-[10px] tracking-[0.15em] text-[#1C3329]/70 uppercase block mb-1">
                    Expected Downtime
                  </span>
                  <span className="font-medium text-[#17251E]">
                    {treatment.procedureOverview.downtime}
                  </span>
                </div>

                <div className="border-t border-[#17251E]/10 pt-3">
                  <span className="font-label-caps text-[10px] tracking-[0.15em] text-[#1C3329]/70 uppercase block mb-1">
                    Recommended Sessions
                  </span>
                  <span className="font-medium text-[#17251E]">
                    {treatment.procedureOverview.sessionsRecommended}
                  </span>
                </div>

                <div className="border-t border-[#17251E]/10 pt-3">
                  <span className="font-label-caps text-[10px] tracking-[0.15em] text-[#1C3329]/70 uppercase block mb-1">
                    Comfort &amp; Anesthesia
                  </span>
                  <span className="font-medium text-[#17251E]">
                    {treatment.procedureOverview.anesthesia}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#17251E]/15">
                <Link
                  href="/book-consultation"
                  className="w-full bg-[#17251E] text-[#F7F5DC] font-button text-[12px] tracking-[0.15em] uppercase py-3.5 rounded-sm hover:bg-[#17251E]/90 transition-colors block text-center font-semibold"
                >
                  Schedule Evaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-14">
        <h3 className="font-display text-[26px] text-[#F7F5DC] mb-8">
          Explore Related Clinical Treatments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTreatments.map((rel) => (
            <Link
              key={rel.id}
              href={`/insights/treatments/${rel.slug}`}
              className="bg-[#244035]/60 border border-[#657A6A]/30 rounded-md p-6 hover:border-[#F7F5DC]/40 transition-colors group"
            >
              <span className="font-label-caps text-[10px] tracking-[0.15em] text-[#AEB9A9] uppercase block mb-2 font-semibold">
                {rel.category}
              </span>
              <h4 className="font-display text-[20px] text-[#F7F5DC] mb-2 group-hover:text-[#AEB9A9] transition-colors">
                {rel.title}
              </h4>
              <p className="font-body-md text-[13px] text-[#F7F5DC]/80 line-clamp-2 leading-relaxed">
                {rel.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
