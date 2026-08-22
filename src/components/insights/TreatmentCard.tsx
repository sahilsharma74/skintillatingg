import Link from "next/link";
import { Treatment } from "@/data/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <article
      data-cursor="VIEW"
      className="group bg-[#F7F5DC] text-[#17251E] rounded-md overflow-hidden flex flex-col justify-between border border-[#AEB9A9]/30 hover:border-[#17251E]/30 shadow-md hover:shadow-xl transition-all duration-500 h-full cinematic-card-lift cursor-pointer"
    >
      <Link
        href={treatment.category === "Treatments" ? `/treatments/${treatment.slug}` : `/insights`}
        className="flex flex-col h-full"
      >
        {/* Top Image Container (Fixed Aspect Ratio 4:3) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C3329]/10 cinematic-img-container">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          {/* Category Badge Top-Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-[#17251E]/95 text-[#F7F5DC] font-label-caps text-[9px] sm:text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm font-semibold shadow-sm">
              {treatment.category}
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Treatment Title */}
            <h3 className="font-display text-[21px] sm:text-[23px] text-[#17251E] font-normal leading-[1.2] mb-3 group-hover:text-[#17251E] transition-colors">
              {treatment.title}
            </h3>

            {/* Short Professional Description */}
            <p className="font-body-md text-[12.5px] sm:text-[13px] text-[#1C3329]/90 leading-[1.6] font-light mb-6">
              {treatment.excerpt}
            </p>
          </div>

          {/* Thin Divider & CTA Link */}
          <div className="pt-3.5 border-t border-[#17251E]/15 flex items-center justify-between mt-auto">
            <span className="font-button text-[11.5px] sm:text-[12px] text-[#17251E] font-semibold tracking-[0.08em] uppercase flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
              {treatment.category === "Treatments" ? "Read Treatment" : "Read Article"}
              <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-1">
                east
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
