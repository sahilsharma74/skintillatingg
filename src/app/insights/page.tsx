"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightFilters from "@/components/insights/InsightFilters";
import TreatmentGrid from "@/components/insights/TreatmentGrid";
import InsightsFooter from "@/components/insights/InsightsFooter";
import { INSIGHTS_ARTICLES } from "@/data/insights";
import { Treatment } from "@/data/treatments";

export default function InsightsPage() {
  // Default selected category is "All" (Treatments filter has been removed)
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Transform education articles into Treatment format for grid rendering
  const nonTreatmentInsights: Treatment[] = INSIGHTS_ARTICLES.filter(
    (item) => item.category === "Education"
  ).map((art) => ({
    id: art.id,
    slug: art.id,
    title: art.title,
    category: art.category as any,
    subcategories: ["ALL"],
    excerpt: art.excerpt,
    fullDescription: art.content,
    keyBenefits: art.keyTakeaways,
    idealCandidates: [],
    procedureOverview: {
      duration: art.readingTime,
      downtime: "N/A",
      sessionsRecommended: "1 Article",
      anesthesia: "N/A",
    },
    image: art.image,
  }));

  // Filter insights based on selected category ("All", "Technology", "Education", "Training", "Career")
  const filteredTreatments: Treatment[] =
    selectedCategory === "All"
      ? nonTreatmentInsights
      : nonTreatmentInsights.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F7F5DC] pt-20 overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Global Website Header Navbar */}
        <Navbar />

        {/* Editorial Insights Page Header */}
        <InsightsHeader />

        {/* Category Pill Filters (ALL | TECHNOLOGY | EDUCATION | TRAINING | CAREER) */}
        <InsightFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Non-Treatment Insights Grid */}
        <TreatmentGrid treatments={filteredTreatments} />

        {/* Quote & CTA Footer Banner */}
        <InsightsFooter />
      </div>

      {/* Global Website Footer */}
      <Footer />
    </main>
  );
}
