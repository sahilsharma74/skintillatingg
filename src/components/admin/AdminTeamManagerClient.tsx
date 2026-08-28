"use client";

import { useState, useEffect } from "react";
import TeamEditor from "@/components/team/TeamEditor";
import TeamGrid from "@/components/team/TeamGrid";
import FeaturedTeamMember from "@/components/team/FeaturedTeamMember";
import { INITIAL_TEAM_MEMBERS, TeamMember } from "@/data/team";

const STORAGE_KEY = "skintillatingg_team_members_v3";

export default function AdminTeamManagerClient() {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [deleteConfirmMember, setDeleteConfirmMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: TeamMember[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const missing = INITIAL_TEAM_MEMBERS.filter(
            (initM) => !parsed.some((pM) => pM.id === initM.id)
          );
          if (missing.length > 0) {
            const merged = [...parsed, ...missing];
            setMembers(merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          } else {
            setMembers(parsed);
          }
        }
      }
    } catch { }
  }, []);

  const updateMembers = (newMembers: TeamMember[]) => {
    setMembers(newMembers);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMembers));
    } catch { }
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setIsEditorOpen(true);
  };

  const handleAddNew = () => {
    setEditingMember(null);
    setIsEditorOpen(true);
  };

  const handleSaveMember = (saved: TeamMember) => {
    const exists = members.some((m) => m.id === saved.id);
    let updated: TeamMember[];
    if (exists) {
      updated = members.map((m) => (m.id === saved.id ? saved : m));
    } else {
      updated = [...members, saved];
    }
    updateMembers(updated);
    setIsEditorOpen(false);
    setEditingMember(null);
  };

  const handleDeleteMember = () => {
    if (!deleteConfirmMember) return;
    const updated = members.filter((m) => m.id !== deleteConfirmMember.id);
    updateMembers(updated);
    setDeleteConfirmMember(null);
  };

  const featuredMember = members.find((m) => m.isFeatured) || members[0];
  const gridMembers = members.filter((m) => m.id !== featuredMember?.id);

  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-1">
            DIRECTORY MANAGER
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F5F5DC] font-normal">
            Team Members Manager
          </h1>
          <p className="font-body-md text-xs text-[#AEB9A9] mt-1 font-light">
            Add, edit, reorder, or remove team member profiles and credentials.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddNew}
          className="px-5 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow-lg transition-all flex items-center gap-2 shrink-0"
        >
          <span className="material-symbols-outlined text-base">person_add</span>
          <span>ADD TEAM MEMBER</span>
        </button>
      </div>

      {/* Featured Founder Spotlight */}
      {featuredMember && (
        <FeaturedTeamMember
          member={featuredMember}
          isEditMode={true}
          onEdit={handleEditMember}
        />
      )}

      {/* Category Grid */}
      <TeamGrid
        members={gridMembers}
        isEditMode={true}
        onEdit={handleEditMember}
        onDeleteConfirm={(m) => setDeleteConfirmMember(m)}
        onAddNew={handleAddNew}
      />

      {/* Editor Drawer */}
      <TeamEditor
        isOpen={isEditorOpen}
        member={editingMember}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleSaveMember}
      />

      {/* Safe Deletion Confirmation Dialog */}
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
    </div>
  );
}
