"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Link from "next/link";
import TeamHero from "@/components/team/TeamHero";
import FeaturedTeamMember from "@/components/team/FeaturedTeamMember";
import TeamGrid from "@/components/team/TeamGrid";
import TeamEditor from "@/components/team/TeamEditor";
import { INITIAL_TEAM_MEMBERS, TeamMember } from "@/data/team";

const STORAGE_KEY = "skintillatingg_team_members_v1";

export default function TeamPageClient() {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [deleteConfirmMember, setDeleteConfirmMember] = useState<TeamMember | null>(null);

  // Load from LocalStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMembers(parsed);
        }
      }
    } catch {
      // Fallback to initial static data
    }

    // Enable edit mode toggle in dev mode or with ?edit=true URL param
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("edit") === "true" || process.env.NODE_ENV !== "production") {
        setIsEditMode(true);
      }
    }
  }, []);

  // Save to LocalStorage helper
  const updateMembersState = (newMembers: TeamMember[]) => {
    setMembers(newMembers);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMembers));
    } catch {
      // Fail silently
    }
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setIsEditorOpen(true);
  };

  const handleAddNewMember = () => {
    setEditingMember(null);
    setIsEditorOpen(true);
  };

  const handleSaveMember = (savedMember: TeamMember) => {
    const exists = members.some((m) => m.id === savedMember.id);
    let updated: TeamMember[];
    if (exists) {
      updated = members.map((m) => (m.id === savedMember.id ? savedMember : m));
    } else {
      updated = [...members, savedMember];
    }
    updateMembersState(updated);
    setIsEditorOpen(false);
    setEditingMember(null);
  };

  const handleDeleteMember = () => {
    if (!deleteConfirmMember) return;
    const updated = members.filter((m) => m.id !== deleteConfirmMember.id);
    updateMembersState(updated);
    setDeleteConfirmMember(null);
  };

  const featuredMember = members.find((m) => m.isFeatured) || members[0];
  const gridMembers = members.filter((m) => m.id !== featuredMember?.id);

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20 relative">
      <Navbar />

      {/* Hero Section */}
      <TeamHero />

      {/* Featured Founder Spotlight */}
      {featuredMember && (
        <FeaturedTeamMember
          member={featuredMember}
          isEditMode={isEditMode}
          onEdit={handleEditMember}
        />
      )}

      {/* Multidisciplinary Team Grid */}
      <TeamGrid
        members={gridMembers}
        isEditMode={isEditMode}
        onEdit={handleEditMember}
        onDeleteConfirm={(m) => setDeleteConfirmMember(m)}
        onAddNew={handleAddNewMember}
      />

      {/* Page End CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-24 text-center">
        <ScrollReveal direction="up" className="max-w-2xl mx-auto space-y-6">
          <span className="font-label-caps text-[11px] tracking-[0.25em] uppercase text-[#C9A227] font-semibold block">
            PERSONALIZED CARE
          </span>
          <h2 className="font-display text-[32px] sm:text-[44px] text-[#F5F5DC] leading-tight">
            A More Personal Approach to Aesthetic Care
          </h2>
          <p className="font-body-md text-[#F5F5DC]/85 text-base sm:text-lg leading-relaxed font-light">
            Meet the people who bring clinical expertise, technology and personalized care together at Skintillatingg.
          </p>

          <div className="pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-3 bg-[#F5F5DC] text-[#17251E] hover:bg-[#F5F5DC] hover:shadow-[0_4px_20px_rgba(201,162,39,0.3)] hover:scale-[1.02] active:scale-[0.98] font-label-caps text-xs sm:text-sm tracking-[0.16em] uppercase px-8 py-4 rounded-[3px] font-semibold transition-all duration-300 shadow-lg"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />

      {/* Development / Admin Edit Toggle Control Badge */}
      {isEditMode && (
        <div className="fixed bottom-6 right-6 z-40 bg-[#17251E]/90 border border-[#C9A227] px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#F5F5DC] font-bold">
            EDIT TEAM MODE
          </span>
          <button
            type="button"
            onClick={handleAddNewMember}
            className="px-2.5 py-1 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-[9px] tracking-[0.12em] uppercase font-bold rounded transition-colors"
          >
            + ADD MEMBER
          </button>
        </div>
      )}

      {/* Editorial Member Editor Drawer/Modal */}
      <TeamEditor
        isOpen={isEditorOpen}
        member={editingMember}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleSaveMember}
      />

      {/* Delete Confirmation Modal */}
      {deleteConfirmMember && (
        <div className="fixed inset-0 z-50 bg-[#17251E]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#17251E] border border-[#C9A227]/40 rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl space-y-5">
            <div className="w-12 h-12 rounded-full bg-red-900/30 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#F5F5DC] font-normal mb-2">
                Delete this team member?
              </h3>
              <p className="font-body-md text-sm text-[#AEB9A9] font-light">
                Are you sure you want to remove{" "}
                <strong className="text-[#F5F5DC] font-semibold">
                  {deleteConfirmMember.name}
                </strong>{" "}
                from the team directory? This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmMember(null)}
                className="px-5 py-2 bg-[#1C3329] text-[#F5F5DC] hover:bg-[#657A6A]/40 font-label-caps text-xs tracking-[0.14em] uppercase font-semibold rounded transition-colors"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={handleDeleteMember}
                className="px-5 py-2 bg-red-600 text-white hover:bg-red-700 font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded transition-colors shadow-lg"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
