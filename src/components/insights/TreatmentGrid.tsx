import { Treatment } from "@/data/treatments";
import TreatmentCard from "./TreatmentCard";

interface TreatmentGridProps {
  treatments: Treatment[];
}

export default function TreatmentGrid({ treatments }: TreatmentGridProps) {
  if (treatments.length === 0) {
    return (
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 text-center">
        <div className="bg-[#234237]/40 border border-[#657A6A]/30 rounded-lg p-12 max-w-xl mx-auto space-y-4">
          <p className="font-display text-[24px] text-[#F7F5DC]">
            No insights found in this category.
          </p>
          <p className="font-body-md text-[#F7F5DC]/80 text-[14px]">
            Please select another category or view all available treatment insights.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-6 sm:py-8">
      {/* 3-column grid on desktop (lg), 2-column on tablet (md), 1-column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </section>
  );
}
