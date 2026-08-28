"use client";

import { useState } from "react";
import { PageData, SectionContent } from "@/lib/cms/cmsStore";

interface PageSectionEditorClientProps {
  initialPage: PageData;
}

export default function PageSectionEditorClient({
  initialPage,
}: PageSectionEditorClientProps) {
  const [page, setPage] = useState<PageData>(initialPage);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    initialPage.sections[0]?.id || null
  );
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [reverting, setReverting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Responsive Preview Modal State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const activeSection = page.sections.find((s) => s.id === activeSectionId) || page.sections[0];

  // Update Section Handler
  const handleUpdateSection = (updatedSection: SectionContent) => {
    const updatedSections = page.sections.map((s) =>
      s.id === updatedSection.id ? updatedSection : s
    );
    setPage({ ...page, sections: updatedSections, status: "Draft" });
  };

  // Reorder Handler
  const handleMoveSection = (index: number, direction: "up" | "down") => {
    const newSections = [...page.sections];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newSections.length) return;

    const temp = newSections[index];
    newSections[index] = newSections[targetIdx];
    newSections[targetIdx] = temp;

    // Update order indices
    const ordered = newSections.map((sec, idx) => ({ ...sec, order: idx + 1 }));
    setPage({ ...page, sections: ordered, status: "Draft" });
  };

  // Toggle Visibility
  const handleToggleVisibility = (sectionId: string) => {
    const updated = page.sections.map((s) =>
      s.id === sectionId ? { ...s, isVisible: !s.isVisible } : s
    );
    setPage({ ...page, sections: updated, status: "Draft" });
  };

  // Save Draft
  const handleSaveDraft = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/content/pages/${page.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save draft");
      setPage(data.page);
      setMessage({ text: "Draft saved successfully.", type: "success" });
    } catch (err: any) {
      setMessage({ text: err.message || "Failed to save draft.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  // Publish
  const handlePublish = async () => {
    setPublishing(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/content/pages/${page.id}`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to publish page");
      setPage(data.page);
      setMessage({ text: "Page published to live website!", type: "success" });
    } catch (err: any) {
      setMessage({ text: err.message || "Failed to publish page.", type: "error" });
    } finally {
      setPublishing(false);
    }
  };

  // Restore Previous Version
  const handleRevert = async () => {
    if (!confirm("Restore the previous published version of this page?")) return;
    setReverting(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/content/revert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId: page.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Revert failed.");
      setPage(data.page);
      setMessage({ text: "Restored previous published version.", type: "success" });
    } catch (err: any) {
      setMessage({ text: err.message || "Failed to restore version.", type: "error" });
    } finally {
      setReverting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header & Actions */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              PAGE CONTENT EDITOR
            </span>
            <span
              className={`px-2.5 py-0.5 rounded text-[9.5px] font-label-caps tracking-[0.14em] font-bold uppercase ${
                page.status === "Published"
                  ? "bg-emerald-900/40 border border-emerald-500/30 text-emerald-300"
                  : "bg-amber-900/40 border border-amber-500/30 text-amber-300"
              }`}
            >
              {page.status}
            </span>
          </div>
          <h1 className="font-display text-3xl text-[#F5F5DC] font-normal">
            Editing: {page.name}
          </h1>
          {page.lastPublished && (
            <p className="font-body-md text-xs text-[#AEB9A9] mt-1">
              Last published: {new Date(page.lastPublished).toLocaleString()}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleRevert}
            disabled={reverting}
            className="px-4 py-2.5 bg-[#1C3329] text-[#AEB9A9] hover:text-[#F5F5DC] border border-[#657A6A]/30 font-label-caps text-xs tracking-[0.14em] uppercase font-semibold rounded transition-colors"
            title="Restore Previous Published Version"
          >
            {reverting ? "REVERTING..." : "REVERT VERSION"}
          </button>

          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="px-4 py-2.5 bg-[#1C3329] text-[#F5F5DC] hover:bg-[#657A6A]/30 border border-[#F5F5DC]/20 font-label-caps text-xs tracking-[0.14em] uppercase font-semibold rounded flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            <span>PREVIEW</span>
          </button>

          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={saving}
            className="px-5 py-2.5 bg-[#1C3329] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#17251E] border border-[#C9A227]/40 font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded transition-all shadow-md"
          >
            {saving ? "SAVING..." : "SAVE DRAFT"}
          </button>

          <button
            type="button"
            onClick={handlePublish}
            disabled={publishing}
            className="px-6 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.16em] uppercase font-bold rounded shadow-lg transition-all"
          >
            {publishing ? "PUBLISHING..." : "PUBLISH NOW"}
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl text-xs font-body-md flex items-center gap-2 ${
            message.type === "success"
              ? "bg-emerald-900/30 border border-emerald-500/30 text-emerald-200"
              : "bg-red-900/30 border border-red-500/30 text-red-200"
          }`}
        >
          <span className="material-symbols-outlined text-base">
            {message.type === "success" ? "check_circle" : "error"}
          </span>
          <span>{message.text}</span>
        </div>
      )}

      {/* TWO COLUMN SECTION EDITOR LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: SECTIONS LIST & REORDERING */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#657A6A]/30">
              <span className="font-label-caps text-[10.5px] tracking-[0.2em] uppercase text-[#C9A227] font-semibold">
                PAGE SECTIONS ({page.sections.length})
              </span>
              <span className="text-[10px] text-[#AEB9A9]">Reorder / Toggle</span>
            </div>

            <div className="space-y-2.5">
              {page.sections.map((sec, idx) => {
                const isSelected = sec.id === activeSection?.id;
                return (
                  <div
                    key={sec.id}
                    className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#1C3329] border-[#C9A227] shadow-md"
                        : "bg-[#17251E] border-[#657A6A]/20 hover:border-[#657A6A]/50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSectionId(sec.id)}
                      className="flex-grow text-left overflow-hidden pr-2"
                    >
                      <span className="font-label-caps text-[9px] tracking-[0.14em] uppercase text-[#AEB9A9] block font-semibold">
                        SECTION {idx + 1}
                      </span>
                      <span
                        className={`font-body-md text-sm font-medium block truncate ${
                          isSelected ? "text-[#C9A227]" : "text-[#F5F5DC]"
                        } ${!sec.isVisible ? "line-through opacity-50" : ""}`}
                      >
                        {sec.name}
                      </span>
                    </button>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Reorder Buttons */}
                      <button
                        type="button"
                        onClick={() => handleMoveSection(idx, "up")}
                        disabled={idx === 0}
                        className="p-1 text-[#AEB9A9] hover:text-[#F5F5DC] disabled:opacity-30"
                        title="Move Up"
                      >
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveSection(idx, "down")}
                        disabled={idx === page.sections.length - 1}
                        className="p-1 text-[#AEB9A9] hover:text-[#F5F5DC] disabled:opacity-30"
                        title="Move Down"
                      >
                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                      </button>

                      {/* Visibility Toggle */}
                      <button
                        type="button"
                        onClick={() => handleToggleVisibility(sec.id)}
                        className={`p-1 transition-colors ${
                          sec.isVisible ? "text-[#C9A227]" : "text-gray-500"
                        }`}
                        title={sec.isVisible ? "Hide Section" : "Show Section"}
                      >
                        <span className="material-symbols-outlined text-base">
                          {sec.isVisible ? "visibility" : "visibility_off"}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIVE SECTION EDITOR FORM */}
        <div className="lg:col-span-8">
          {activeSection ? (
            <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#657A6A]/30">
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-semibold block">
                    EDIT SECTION PROPERTIES
                  </span>
                  <h3 className="font-display text-2xl text-[#F5F5DC]">
                    {activeSection.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-[10px] text-[#AEB9A9]">
                    VISIBILITY:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleToggleVisibility(activeSection.id)}
                    className={`px-3 py-1 rounded text-xs font-label-caps font-bold uppercase transition-colors ${
                      activeSection.isVisible
                        ? "bg-emerald-900/40 text-emerald-300 border border-emerald-500/30"
                        : "bg-red-900/40 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {activeSection.isVisible ? "VISIBLE ON SITE" : "HIDDEN"}
                  </button>
                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="space-y-5">
                {/* LABEL / CATEGORY */}
                <div>
                  <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                    SECTION LABEL / EYEBROW BADGE
                  </label>
                  <input
                    type="text"
                    value={activeSection.label || ""}
                    onChange={(e) =>
                      handleUpdateSection({ ...activeSection, label: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    placeholder="e.g. THE SKINTILLATINGG PHILOSOPHY"
                  />
                </div>

                {/* HEADING TITLE */}
                <div>
                  <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                    SECTION HEADING / TITLE
                  </label>
                  <input
                    type="text"
                    value={activeSection.title || ""}
                    onChange={(e) =>
                      handleUpdateSection({ ...activeSection, title: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-base font-display focus:outline-none focus:border-[#C9A227] transition-colors"
                    placeholder="e.g. Precision in Practice. Excellence in Every Detail."
                  />
                </div>

                {/* SUBTITLE */}
                <div>
                  <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                    SUBHEADING
                  </label>
                  <input
                    type="text"
                    value={activeSection.subtitle || ""}
                    onChange={(e) =>
                      handleUpdateSection({ ...activeSection, subtitle: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>

                {/* DESCRIPTION PARAGRAPH */}
                <div>
                  <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                    DESCRIPTION / PARAGRAPH CONTENT
                  </label>
                  <textarea
                    rows={4}
                    value={activeSection.description || ""}
                    onChange={(e) =>
                      handleUpdateSection({ ...activeSection, description: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm leading-relaxed focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>

                {/* IMAGE URL & POSITIONING */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="sm:col-span-2">
                    <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                      IMAGE PATH / URL
                    </label>
                    <input
                      type="text"
                      value={activeSection.image || ""}
                      onChange={(e) =>
                        handleUpdateSection({ ...activeSection, image: e.target.value })
                      }
                      className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-xs font-mono focus:outline-none focus:border-[#C9A227] transition-colors"
                      placeholder="/images/hero-bg.jpg"
                    />
                  </div>

                  <div>
                    <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                      OBJECT POSITION
                    </label>
                    <select
                      value={activeSection.objectPosition || "center center"}
                      onChange={(e) =>
                        handleUpdateSection({ ...activeSection, objectPosition: e.target.value })
                      }
                      className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227]"
                    >
                      <option value="center top">Center Top</option>
                      <option value="center center">Center Center</option>
                      <option value="center bottom">Center Bottom</option>
                    </select>
                  </div>
                </div>

                {/* VIDEO URL */}
                <div>
                  <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                    VIDEO URL / PATH
                  </label>
                  <input
                    type="text"
                    value={activeSection.videoUrl || ""}
                    onChange={(e) =>
                      handleUpdateSection({ ...activeSection, videoUrl: e.target.value })
                    }
                    className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-xs font-mono focus:outline-none focus:border-[#C9A227]"
                    placeholder="/videos/inside the skintillatingg clinic.mp4"
                  />
                </div>

                {/* BUTTON TEXT & LINK URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                      BUTTON / CALL-TO-ACTION TEXT
                    </label>
                    <input
                      type="text"
                      value={activeSection.buttonText || ""}
                      onChange={(e) =>
                        handleUpdateSection({ ...activeSection, buttonText: e.target.value })
                      }
                      className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227]"
                      placeholder="BOOK CONSULTATION"
                    />
                  </div>

                  <div>
                    <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                      BUTTON DESTINATION URL
                    </label>
                    <input
                      type="text"
                      value={activeSection.buttonUrl || ""}
                      onChange={(e) =>
                        handleUpdateSection({ ...activeSection, buttonUrl: e.target.value })
                      }
                      className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] text-sm focus:outline-none focus:border-[#C9A227]"
                      placeholder="/book-consultation"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-8 text-center text-[#AEB9A9]">
              Select a section on the left to edit its content properties.
            </div>
          )}
        </div>
      </div>

      {/* RESPONSIVE PREVIEW MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-[#17251E]/90 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-hidden">
          {/* Preview Controls Bar */}
          <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl px-6 py-3 mb-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-label-caps text-[11px] tracking-[0.18em] text-[#C9A227] uppercase font-bold">
                LIVE PREVIEW ({page.name})
              </span>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center bg-[#1C3329] p-1 rounded-lg border border-[#657A6A]/30">
              <button
                type="button"
                onClick={() => setPreviewDevice("desktop")}
                className={`px-3 py-1 rounded text-xs font-label-caps uppercase flex items-center gap-1.5 transition-colors ${
                  previewDevice === "desktop" ? "bg-[#C9A227] text-[#17251E] font-bold" : "text-[#AEB9A9]"
                }`}
              >
                <span className="material-symbols-outlined text-sm">desktop_windows</span>
                <span>DESKTOP</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice("tablet")}
                className={`px-3 py-1 rounded text-xs font-label-caps uppercase flex items-center gap-1.5 transition-colors ${
                  previewDevice === "tablet" ? "bg-[#C9A227] text-[#17251E] font-bold" : "text-[#AEB9A9]"
                }`}
              >
                <span className="material-symbols-outlined text-sm">tablet_mac</span>
                <span>TABLET</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice("mobile")}
                className={`px-3 py-1 rounded text-xs font-label-caps uppercase flex items-center gap-1.5 transition-colors ${
                  previewDevice === "mobile" ? "bg-[#C9A227] text-[#17251E] font-bold" : "text-[#AEB9A9]"
                }`}
              >
                <span className="material-symbols-outlined text-sm">smartphone</span>
                <span>MOBILE</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="p-2 text-[#F5F5DC] hover:text-[#C9A227]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Device Frame */}
          <div className="flex-grow flex items-center justify-center overflow-hidden">
            <div
              className={`bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 h-full max-h-[85vh] ${
                previewDevice === "desktop"
                  ? "w-full max-w-[1280px]"
                  : previewDevice === "tablet"
                  ? "w-[768px]"
                  : "w-[375px]"
              }`}
            >
              <iframe
                src={page.slug}
                className="w-full h-full border-0"
                title="Page Live Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
