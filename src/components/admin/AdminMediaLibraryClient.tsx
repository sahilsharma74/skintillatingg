"use client";

import { useState } from "react";
import { MediaItem } from "@/lib/cms/cmsStore";

interface AdminMediaLibraryClientProps {
  initialItems: MediaItem[];
}

export default function AdminMediaLibraryClient({
  initialItems,
}: AdminMediaLibraryClientProps) {
  const [items, setItems] = useState<MediaItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  const categories = ["ALL", "Home", "Treatments", "Technology", "Training", "Career", "Team", "Clinic", "General"];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    const matchesType = selectedType === "ALL" || item.type === selectedType;
    return matchesCategory && matchesType;
  });

  const handleCopyPath = (item: MediaItem) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-1">
            ASSET MANAGEMENT
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Media Library
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Organize image and video assets across clinic categories. Copy asset paths to use in section editors.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("To add media files, place image/video files into public/images or public/videos directory or reference media URLs.")}
          className="px-5 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow-lg transition-all flex items-center gap-2 shrink-0"
        >
          <span className="material-symbols-outlined text-base">upload_file</span>
          <span>ADD MEDIA ASSET</span>
        </button>
      </div>

      {/* FILTERS BAR */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-4 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Categories Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-label-caps tracking-[0.12em] uppercase font-semibold transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#C9A227] text-[#17251E]"
                  : "bg-[#1C3329] text-[#AEB9A9] hover:text-[#F5F5DC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-label-caps text-[10px] text-[#AEB9A9] uppercase">TYPE:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-3 py-1.5 text-[#F5F5DC] text-xs font-label-caps focus:outline-none focus:border-[#C9A227]"
          >
            <option value="ALL">ALL MEDIA</option>
            <option value="image">IMAGES ONLY</option>
            <option value="video">VIDEOS ONLY</option>
          </select>
        </div>
      </div>

      {/* MEDIA GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#C9A227] transition-all"
          >
            {/* Visual Container */}
            <div
              className="relative aspect-video bg-[#1C3329] overflow-hidden cursor-pointer"
              onClick={() => setPreviewMedia(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.url}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.filename}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute top-2 left-2 z-10">
                <span className="px-2 py-0.5 bg-[#17251E]/80 backdrop-blur-sm rounded text-[9px] font-label-caps tracking-[0.14em] uppercase text-[#C9A227] font-semibold">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#17251E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-[#F5F5DC]">
                  {item.type === "video" ? "play_circle" : "fullscreen"}
                </span>
              </div>
            </div>

            {/* Asset Details */}
            <div className="p-4 space-y-3">
              <div className="overflow-hidden">
                <span className="font-body-md text-xs text-[#F5F5DC] font-medium block truncate">
                  {item.filename}
                </span>
                <span className="font-mono text-[10px] text-[#AEB9A9] block truncate mt-0.5">
                  {item.url}
                </span>
              </div>

              <div className="pt-2 border-t border-[#657A6A]/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCopyPath(item)}
                  className={`text-[10px] font-label-caps tracking-[0.14em] uppercase font-bold flex items-center gap-1 transition-colors ${
                    copiedId === item.id ? "text-emerald-400" : "text-[#C9A227] hover:text-[#F5F5DC]"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedId === item.id ? "check" : "content_copy"}
                  </span>
                  <span>{copiedId === item.id ? "COPIED!" : "COPY PATH"}</span>
                </button>

                <span className="text-[10px] text-[#AEB9A9] uppercase font-label-caps">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MEDIA PREVIEW MODAL */}
      {previewMedia && (
        <div className="fixed inset-0 z-50 bg-[#17251E]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#17251E] border border-[#C9A227]/40 rounded-2xl max-w-3xl w-full p-6 shadow-2xl space-y-4 relative">
            <button
              onClick={() => setPreviewMedia(null)}
              className="absolute top-4 right-4 p-2 text-[#F5F5DC] hover:text-[#C9A227]"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="mb-2">
              <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-semibold">
                ASSET PREVIEW
              </span>
              <h3 className="font-display text-2xl text-[#F5F5DC]">
                {previewMedia.filename}
              </h3>
            </div>

            <div className="aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center">
              {previewMedia.type === "video" ? (
                <video
                  src={previewMedia.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={previewMedia.url}
                  alt={previewMedia.filename}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-[#AEB9A9]">
                {previewMedia.url}
              </span>
              <button
                type="button"
                onClick={() => handleCopyPath(previewMedia)}
                className="px-4 py-2 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow"
              >
                COPY URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
