"use client";

import { INSIGHT_CATEGORIES } from "@/data/treatments";

interface InsightFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function InsightFilters({
  selectedCategory,
  onSelectCategory,
}: InsightFiltersProps) {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-4 md:py-6">
      <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1">
        {INSIGHT_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`font-label-caps text-[11px] sm:text-[12px] tracking-[0.14em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 whitespace-nowrap select-none ${
                isActive
                  ? "bg-[#F7F5DC] text-[#17251E] font-semibold shadow-sm"
                  : "bg-[#234237]/60 text-[#F7F5DC]/85 hover:text-[#F7F5DC] border border-[#657A6A]/40 hover:border-[#F7F5DC]/50 font-medium"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
