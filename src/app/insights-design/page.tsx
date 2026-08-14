"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { INSIGHTS_ARTICLES, INSIGHT_CATEGORIES, Article } from "@/data/insights";

export default function InsightsDesignPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Keyboard Escape listener for accessible modal closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeArticle) {
        setActiveArticle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticle]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeArticle]);

  // Filter articles based on active category
  const filteredArticles =
    selectedCategory === "All"
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((item) => item.category === selectedCategory);

  // Related articles for modal detail
  const relatedArticles = activeArticle
    ? INSIGHTS_ARTICLES.filter(
      (item) => item.category === activeArticle.category && item.id !== activeArticle.id
    ).slice(0, 2)
    : [];

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#657A6A]/30">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-6 font-semibold">
            EDITORIAL PUBLICATION (DESIGN PLAYGROUND)
          </div>
          <h1 className="font-display text-[42px] md:text-[60px] leading-tight text-[#F5F5DC] font-normal mb-6">
            Aesthetic Insights & <br />
            <span className="italic text-[#F5F5DC]">Dermatology Journal</span>
          </h1>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg leading-relaxed">
            Evidence-backed medical perspectives, therapeutic innovations, and trichological research authored by Dr. Akshaya Jain.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="sticky top-20 z-40 bg-[#1C3329]/95 backdrop-blur-md border-b border-[#657A6A]/30 py-4 px-[20px] md:px-[80px]">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {INSIGHT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-label-caps text-xs tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-[#AEB9A9] text-[#17251E] font-semibold shadow-md"
                    : "bg-[#657A6A]/40 text-[#F5F5DC]/90 hover:text-[#F5F5DC] border border-[#AEB9A9]/30 hover:border-[#F5F5DC]/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Bento Grid */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-16 border-b border-[#657A6A]/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-[#F5F5DC] border border-[#657A6A]/20 rounded-xl overflow-hidden cursor-pointer group hover:border-[#17251E]/30 hover:bg-[#F5F5DC]/95 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3329]/80 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#1C3329]/90 border border-[#AEB9A9]/40 backdrop-blur-md rounded text-[#F5F5DC] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#1C3329] font-body-md mb-3 font-medium">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3 className="font-display text-[22px] text-[#17251E] leading-snug group-hover:text-[#17251E] transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="font-body-md text-sm text-[#1C3329] line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0 border-t border-[#657A6A]/20 flex items-center justify-between mt-auto">
                <span className="text-xs text-[#17251E] font-label-caps tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold">
                  Read Article
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Accessible Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          {/* Backdrop Overlay Click */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveArticle(null)}
            aria-hidden="true"
          ></div>

          {/* Modal Card Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1C3329] border border-[#AEB9A9]/40 rounded-2xl overflow-y-auto z-10 shadow-2xl p-6 md:p-10 text-[#F5F5DC]">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#657A6A]/30 border border-[#AEB9A9]/40 text-[#F5F5DC]/80 hover:text-[#F5F5DC] flex items-center justify-center transition-colors"
              aria-label="Close article modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 text-[#F5F5DC] rounded text-xs font-label-caps tracking-wider uppercase mb-4 font-semibold">
                {activeArticle.category}
              </span>
              <h2 className="font-display text-[28px] md:text-[40px] text-[#F5F5DC] leading-tight mb-4">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-body-md text-[#F5F5DC]/85">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.readingTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 border border-[#AEB9A9]/30">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Highlight Box */}
            <div className="bg-[#F5F5DC] border border-[#657A6A]/20 rounded-xl p-6 mb-8 shadow-md">
              <h4 className="font-label-caps text-xs tracking-widest text-[#17251E] uppercase mb-3 flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-base">lightbulb</span>
                Key Clinical Takeaways
              </h4>
              <ul className="space-y-2 font-body-md text-sm text-[#1C3329]">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#17251E]">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Paragraphs */}
            <div className="space-y-6 font-body-md text-[#F5F5DC]/90 text-base leading-relaxed mb-10">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
              <div className="pt-8 border-t border-[#657A6A]/30 mb-8">
                <h4 className="font-label-caps text-xs tracking-widest text-[#F5F5DC] uppercase mb-4 font-semibold">
                  Related Insights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => setActiveArticle(rel)}
                      className="bg-[#F5F5DC] p-4 rounded-lg border border-[#657A6A]/20 hover:border-[#17251E]/30 cursor-pointer transition-colors"
                    >
                      <h5 className="font-display text-base text-[#17251E] mb-1 line-clamp-1">
                        {rel.title}
                      </h5>
                      <span className="font-body-md text-xs text-[#1C3329]">
                        {rel.readingTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#657A6A]/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-display text-lg text-[#F5F5DC] block">
                  Discuss this treatment with Dr. Akshaya Jain
                </span>
                <span className="font-body-md text-xs text-[#F5F5DC]/85">
                  Personalized consultations at Koregaon Park, Pune.
                </span>
              </div>
              <Link
                href="/book-consultation"
                onClick={() => setActiveArticle(null)}
                className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-6 py-3 rounded hover:bg-[#F5F5DC]/90 transition-colors font-medium shadow-md"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Page Bottom CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-[32px] md:text-[44px] text-[#F5F5DC]">
            Ready to Begin Your Skin or Hair Journey?
          </h2>
          <p className="font-body-md text-[#F5F5DC]/90 text-base">
            Book your confidential diagnostic evaluation with Dr. Akshaya Jain today.
          </p>
          <Link
            href="/book-consultation"
            className="inline-block bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors duration-300 font-medium shadow-md"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
