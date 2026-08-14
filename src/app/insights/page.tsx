"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightFilters from "@/components/insights/InsightFilters";
import TreatmentGrid from "@/components/insights/TreatmentGrid";
import InsightsFooter from "@/components/insights/InsightsFooter";
import { TREATMENTS_DATA, Treatment } from "@/data/treatments";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Treatments");

  // Filter treatments/articles based on selected category
  const filteredTreatments: Treatment[] =
    selectedCategory === "All"
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F7F5DC] pt-20 overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Global Website Header Navbar */}
        <Navbar />

        {/* Editorial Insights Page Header */}
        <InsightsHeader />

        {/* Category Pill Filters */}
        <InsightFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Treatment Cards Grid (5-column desktop layout) */}
        <TreatmentGrid treatments={filteredTreatments} />

        {/* Quote & CTA Footer Banner */}
        <InsightsFooter />
      </div>

      {/* Global Website Footer */}
      <Footer />
    </main>
  );
}
