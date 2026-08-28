"use client";

import { useState } from "react";
import { TREATMENTS_DATA, Treatment } from "@/data/treatments";

export default function AdminTreatmentsManagerClient() {
  const [treatments, setTreatments] = useState<Treatment[]>(TREATMENTS_DATA);
  const [editingTreatment, setEditingTreatment] = useState<Treatment | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Treatments",
    "Technology",
    "Education",
    "Training",
    "Career",
  ];

  const filtered = treatments.filter(
    (t) => selectedCategory === "ALL" || t.category === selectedCategory
  );

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTreatment) return;

    const updated = treatments.map((t) =>
      t.id === editingTreatment.id ? editingTreatment : t
    );
    setTreatments(updated);
    setEditingTreatment(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-1">
            CLINICAL CATALOGUE MANAGER
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Treatments Manager
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Edit treatment specifications, FAQs, images, videos, downtime, and consultation pre-selection links.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setEditingTreatment({
              id: `tr-${Date.now()}`,
              slug: `new-treatment-${Date.now()}`,
              title: "New Treatment",
              category: "Treatments",
              subcategories: ["ALL"],
              excerpt: "Clinical Aesthetic Procedure excerpt...",
              fullDescription: ["Comprehensive clinical description paragraph."],
              keyBenefits: ["Targeted clinical benefit"],
              idealCandidates: ["Suitable candidates"],
              procedureOverview: {
                duration: "45 Mins",
                downtime: "Zero",
                sessionsRecommended: "1-3 Sessions",
                anesthesia: "Topical",
              },
              image: "/images/treatments/botox-fillers.jpg",
              faqs: [],
            })
          }
          className="px-5 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow-lg transition-all flex items-center gap-2 shrink-0"
        >
          <span className="material-symbols-outlined text-base">add</span>
          <span>ADD TREATMENT</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-label-caps tracking-[0.12em] uppercase font-semibold transition-all shrink-0 ${
              selectedCategory === cat
                ? "bg-[#C9A227] text-[#17251E]"
                : "bg-[#17251E] text-[#AEB9A9] hover:text-[#F5F5DC] border border-[#657A6A]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Treatments List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tr) => (
          <div
            key={tr.id}
            className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#C9A227] transition-all"
          >
            <div className="relative aspect-[16/10] bg-[#1C3329] overflow-hidden">
              <img
                src={tr.image}
                alt={tr.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 z-10">
                <span className="px-2 py-0.5 bg-[#17251E]/85 backdrop-blur-sm rounded text-[9px] font-label-caps tracking-[0.14em] uppercase text-[#C9A227] font-semibold border border-[#F5F5DC]/10">
                  {tr.category}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl text-[#F5F5DC]">{tr.title}</h3>
                <p className="font-body-md text-xs text-[#AEB9A9] mt-1 line-clamp-2">
                  {tr.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#657A6A]/20 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#AEB9A9]">
                  /treatments/{tr.slug}
                </span>

                <button
                  type="button"
                  onClick={() => setEditingTreatment(tr)}
                  className="px-3 py-1 bg-[#1C3329] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#17251E] font-label-caps text-[10px] tracking-[0.14em] uppercase font-bold rounded transition-colors"
                >
                  EDIT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editingTreatment && (
        <div className="fixed inset-0 z-50 bg-[#17251E]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#17251E] border border-[#C9A227]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-[#F5F5DC] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditingTreatment(null)}
              className="absolute top-5 right-5 p-2 text-[#F5F5DC] hover:text-[#C9A227]"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="mb-6 pb-4 border-b border-[#657A6A]/30">
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-1">
                TREATMENT EDITOR
              </span>
              <h3 className="font-display text-2xl text-[#F5F5DC]">
                Editing: {editingTreatment.title}
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
                  TITLE
                </label>
                <input
                  type="text"
                  required
                  value={editingTreatment.title}
                  onChange={(e) =>
                    setEditingTreatment({ ...editingTreatment, title: e.target.value })
                  }
                  className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
                    SLUG (URL IDENTIFIER)
                  </label>
                  <input
                    type="text"
                    required
                    value={editingTreatment.slug}
                    onChange={(e) =>
                      setEditingTreatment({ ...editingTreatment, slug: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
                    CATEGORY
                  </label>
                  <select
                    value={editingTreatment.category}
                    onChange={(e) =>
                      setEditingTreatment({
                        ...editingTreatment,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227]"
                  >
                    <option value="Treatments">Treatments</option>
                    <option value="Technology">Technology</option>
                    <option value="Education">Education</option>
                    <option value="Training">Training</option>
                    <option value="Career">Career</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
                  EXCERPT
                </label>
                <textarea
                  rows={3}
                  value={editingTreatment.excerpt}
                  onChange={(e) =>
                    setEditingTreatment({ ...editingTreatment, excerpt: e.target.value })
                  }
                  className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
                />
              </div>

              <div>
                <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
                  PRIMARY IMAGE PATH
                </label>
                <input
                  type="text"
                  value={editingTreatment.image}
                  onChange={(e) =>
                    setEditingTreatment({ ...editingTreatment, image: e.target.value })
                  }
                  className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-xs font-mono"
                />
              </div>

              <div className="pt-4 border-t border-[#657A6A]/30 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingTreatment(null)}
                  className="px-4 py-2 bg-[#1C3329] text-[#F5F5DC] font-label-caps text-xs uppercase rounded"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#C9A227] text-[#17251E] font-label-caps text-xs uppercase font-bold rounded shadow"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
