"use client";

import { useState, useEffect } from "react";
import { TeamMember } from "@/data/team";

interface TeamEditorProps {
  isOpen: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
}

export default function TeamEditor({
  isOpen,
  member,
  onClose,
  onSave,
}: TeamEditorProps) {
  const [formData, setFormData] = useState<Partial<TeamMember>>({
    name: "",
    role: "",
    specialization: "",
    bio: "",
    credentials: [],
    category: "MEDICAL EXPERTISE",
    image: "/images/dr-akshaya-jain.jpg",
    displayOrder: 1,
    objectPosition: "center top",
    isFeatured: false,
  });

  const [rawCredentials, setRawCredentials] = useState("");

  useEffect(() => {
    if (member) {
      setFormData(member);
      setRawCredentials((member.credentials || []).join("\n"));
    } else {
      setFormData({
        id: `team-${Date.now()}`,
        name: "",
        role: "",
        specialization: "",
        bio: "",
        credentials: [],
        category: "MEDICAL EXPERTISE",
        image: "/images/dr-akshaya-jain.jpg",
        displayOrder: 99,
        objectPosition: "center top",
        isFeatured: false,
      });
      setRawCredentials("");
    }
  }, [member, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCredentials = rawCredentials
      .split("\n")
      .map((c) => c.trim())
      .filter(Boolean);

    const updatedMember: TeamMember = {
      id: formData.id || `team-${Date.now()}`,
      name: formData.name || "New Team Member",
      role: formData.role || "Clinical Specialist",
      specialization: formData.specialization || "Aesthetic Dermatology",
      bio: formData.bio || "",
      credentials: parsedCredentials,
      category: formData.category || "MEDICAL EXPERTISE",
      image: formData.image || "/images/dr-akshaya-jain.jpg",
      displayOrder: Number(formData.displayOrder) || 1,
      objectPosition: formData.objectPosition || "center top",
      isFeatured: Boolean(formData.isFeatured),
    };

    onSave(updatedMember);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17251E]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#17251E] border border-[#C9A227]/40 rounded-2xl w-full max-w-2xl text-[#F5F5DC] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1C3329] border border-[#F5F5DC]/20 flex items-center justify-center text-[#F5F5DC] hover:bg-[#C9A227] hover:text-[#17251E] transition-colors"
          aria-label="Close Editor"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="mb-6 pb-4 border-b border-[#657A6A]/30">
          <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#C9A227] block font-semibold mb-1">
            EDITORIAL TEAM EDITOR
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#F5F5DC] font-normal">
            {member ? `Edit: ${member.name}` : "Add New Team Member"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
              NAME
            </label>
            <input
              type="text"
              required
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm font-medium"
              placeholder="e.g. Dr. Akshaya Jain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ROLE */}
            <div>
              <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                ROLE
              </label>
              <input
                type="text"
                required
                value={formData.role || ""}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                placeholder="e.g. Founder & Aesthetic Physician"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                CATEGORY
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as TeamMember["category"],
                  })
                }
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
              >
                <option value="MEDICAL EXPERTISE">MEDICAL EXPERTISE</option>
                <option value="CLINICAL TEAM">CLINICAL TEAM</option>
                <option value="PATIENT EXPERIENCE">PATIENT EXPERIENCE</option>
              </select>
            </div>
          </div>

          {/* SPECIALIZATION */}
          <div>
            <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
              SPECIALIZATION
            </label>
            <input
              type="text"
              value={formData.specialization || ""}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
              placeholder="e.g. Aesthetic Cosmetology • Trichology • Laser Dermatology"
            />
          </div>

          {/* BIO */}
          <div>
            <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
              BIO / PROFESSIONAL DESCRIPTION
            </label>
            <textarea
              rows={4}
              value={formData.bio || ""}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm leading-relaxed"
              placeholder="Enter team member bio..."
            />
          </div>

          {/* CREDENTIALS */}
          <div>
            <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
              CREDENTIALS (ONE PER LINE)
            </label>
            <textarea
              rows={3}
              value={rawCredentials}
              onChange={(e) => setRawCredentials(e.target.value)}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-xs font-mono"
              placeholder="13+ Years Clinical Practice&#10;3 National Excellence Awards&#10;Celebrity Hair Specialist"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* IMAGE PATH */}
            <div className="sm:col-span-2">
              <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                IMAGE PATH
              </label>
              <input
                type="text"
                value={formData.image || ""}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm font-mono"
                placeholder="/images/dr-akshaya-jain.jpg"
              />
            </div>

            {/* DISPLAY ORDER */}
            <div>
              <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                DISPLAY ORDER
              </label>
              <input
                type="number"
                min={1}
                value={formData.displayOrder || 1}
                onChange={(e) =>
                  setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 1 })
                }
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
              />
            </div>
          </div>

          {/* OBJECT POSITION */}
          <div>
            <label className="block font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
              IMAGE OBJECT POSITION (CROP ADJUSTMENT)
            </label>
            <select
              value={formData.objectPosition || "center top"}
              onChange={(e) => setFormData({ ...formData, objectPosition: e.target.value })}
              className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-2.5 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
            >
              <option value="center top">Center Top</option>
              <option value="center center">Center Center</option>
              <option value="center bottom">Center Bottom</option>
              <option value="top left">Top Left</option>
              <option value="top right">Top Right</option>
            </select>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-6 border-t border-[#657A6A]/30 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#1C3329] text-[#F5F5DC] hover:bg-[#657A6A]/40 font-label-caps text-xs tracking-[0.14em] uppercase font-semibold rounded transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow-lg transition-all"
            >
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
