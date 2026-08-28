"use client";

import { useState } from "react";

interface NavItem {
  id: string;
  name: string;
  href: string;
  visible: boolean;
}

export default function AdminNavigationPage() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: "1", name: "HOME", href: "/", visible: true },
    { id: "2", name: "OUR JOURNEY", href: "/journey", visible: true },
    { id: "3", name: "TREATMENTS", href: "/treatments", visible: true },
    { id: "4", name: "TECHNOLOGY", href: "/technology", visible: true },
    { id: "5", name: "TRAINING", href: "/training", visible: true },
    { id: "6", name: "CAREER", href: "/career", visible: true },
    { id: "7", name: "TEAM", href: "/team", visible: true },
    { id: "8", name: "CONTACT", href: "/contact", visible: true },
  ]);

  const [savedMessage, setSavedMessage] = useState(false);

  const toggleVisibility = (id: string) => {
    setNavItems(
      navItems.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex items-center justify-between">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-1">
            SITE STRUCTURE & HEADER MENU
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Navigation Manager
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Toggle visibility and inspect header navigation routing.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 bg-[#C9A227] text-[#17251E] font-label-caps text-xs uppercase font-bold rounded shadow hover:bg-[#F5F5DC] transition-colors shrink-0"
        >
          {savedMessage ? "SAVED!" : "SAVE CHANGES"}
        </button>
      </div>

      {/* Nav Items List */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 shadow-xl space-y-4">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#1C3329] border border-[#657A6A]/30 rounded-xl p-4 text-[#F5F5DC]"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#AEB9A9] cursor-grab">
                drag_indicator
              </span>
              <div>
                <h4 className="font-display text-lg tracking-wider text-[#F5F5DC]">
                  {item.name}
                </h4>
                <span className="font-mono text-[10px] text-[#AEB9A9]">
                  {item.href}
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleVisibility(item.id)}
              className={`px-3 py-1.5 rounded text-xs font-label-caps tracking-[0.14em] uppercase font-semibold transition-colors border ${
                item.visible
                  ? "bg-emerald-900/40 border-emerald-500/30 text-emerald-300"
                  : "bg-red-900/30 border-red-500/30 text-red-300"
              }`}
            >
              {item.visible ? "VISIBLE" : "HIDDEN"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
