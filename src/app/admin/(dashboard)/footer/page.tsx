"use client";

import { useState } from "react";

export default function AdminFooterPage() {
  const [footerData, setFooterData] = useState({
    brandName: "SKINTILLATINGG",
    tagline: "LUXURY MEDICAL AESTHETICS CLINIC",
    address: "Bandung / Jakarta, Indonesia",
    phone: "+62 812-3456-7890",
    email: "concierge@skintillatingg.com",
    copyright: "© 2026 Skintillatingg Aesthetic Clinic. All rights reserved.",
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
            GLOBAL FOOTER CONFIGURATION
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Footer Content
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Edit contact details, address info, brand tagline, and copyright notice.
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
            BRAND NAME
          </label>
          <input
            type="text"
            value={footerData.brandName}
            onChange={(e) => setFooterData({ ...footerData, brandName: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>

        <div>
          <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
            TAGLINE
          </label>
          <input
            type="text"
            value={footerData.tagline}
            onChange={(e) => setFooterData({ ...footerData, tagline: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
              PHONE
            </label>
            <input
              type="text"
              value={footerData.phone}
              onChange={(e) => setFooterData({ ...footerData, phone: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
            />
          </div>

          <div>
            <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
              EMAIL
            </label>
            <input
              type="email"
              value={footerData.email}
              onChange={(e) => setFooterData({ ...footerData, email: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
            ADDRESS
          </label>
          <textarea
            rows={2}
            value={footerData.address}
            onChange={(e) => setFooterData({ ...footerData, address: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>

        <div>
          <label className="block font-label-caps text-[10.5px] uppercase text-[#AEB9A9] mb-1">
            COPYRIGHT NOTICE
          </label>
          <input
            type="text"
            value={footerData.copyright}
            onChange={(e) => setFooterData({ ...footerData, copyright: e.target.value })}
            className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2 text-[#F5F5DC] text-sm"
          />
        </div>
      </form>
    </div>
  );
}
