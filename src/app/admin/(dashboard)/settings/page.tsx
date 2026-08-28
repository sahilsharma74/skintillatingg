"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    siteTitle: "Skintillatingg | Luxury Medical Aesthetics Clinic",
    metaDescription:
      "Premier aesthetic clinic & CIATN training academy specializing in advanced facial aesthetics, laser technology, HIFU, and regenerative skin therapies.",
    contactEmail: "concierge@skintillatingg.com",
    contactPhone: "+62 812-3456-7890",
    instagramUrl: "https://instagram.com/skintillatingg",
    linkedinUrl: "https://linkedin.com/company/skintillatingg",
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex items-center justify-between">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-1">
            SEO & GLOBAL CONFIGURATION
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Global Settings
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Manage site title, meta description, default social links, and contact parameters.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 bg-[#C9A227] text-[#17251E] font-label-caps text-xs uppercase font-bold rounded shadow hover:bg-[#F5F5DC] transition-colors shrink-0"
        >
          {saved ? "SAVED!" : "SAVE CHANGES"}
        </button>
      </div>

      <form onSubmit={handleSave} className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
            DEFAULT SITE TITLE (SEO)
          </label>
          <input
            type="text"
            value={settings.siteTitle}
            onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>

        <div>
          <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
            META DESCRIPTION
          </label>
          <textarea
            rows={3}
            value={settings.metaDescription}
            onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
              INSTAGRAM URL
            </label>
            <input
              type="text"
              value={settings.instagramUrl}
              onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-xs font-mono"
            />
          </div>

          <div>
            <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
              LINKEDIN URL
            </label>
            <input
              type="text"
              value={settings.linkedinUrl}
              onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-xs font-mono"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
