import ScrollReveal from "@/components/effects/ScrollReveal";
import TeamCard from "@/components/team/TeamCard";
import { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
  isEditMode?: boolean;
  onEdit?: (member: TeamMember) => void;
  onDeleteConfirm?: (member: TeamMember) => void;
  onAddNew?: () => void;
}

export default function TeamGrid({
  members,
  isEditMode,
  onEdit,
  onDeleteConfirm,
  onAddNew,
}: TeamGridProps) {
  const categories: Array<TeamMember["category"]> = [
    "MEDICAL EXPERTISE",
    "CLINICAL TEAM",
    "PATIENT EXPERIENCE",
  ];

  // Sort members by displayOrder ascending
  const sortedMembers = [...members].sort(
    (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
  );

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
      <ScrollReveal showGoldLine goldLinePosition="bottom" className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block mb-2 font-semibold">
              MULTIDISCIPLINARY TEAM
            </span>
            <h2 className="font-display text-[32px] sm:text-[44px] text-[#F5F5DC]">
              Clinical & Concierge Specialists
            </h2>
          </div>

          {isEditMode && onAddNew && (
            <button
              type="button"
              onClick={onAddNew}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.14em] uppercase font-bold rounded shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-base">add</span>
              <span>ADD TEAM MEMBER</span>
            </button>
          )}
        </div>
      </ScrollReveal>

      <div className="space-y-16">
        {categories.map((category) => {
          const categoryMembers = sortedMembers.filter((m) => m.category === category);
          if (categoryMembers.length === 0) return null;

          return (
            <div key={category} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="font-label-caps text-xs sm:text-sm tracking-[0.25em] text-[#F5F5DC] uppercase font-semibold shrink-0">
                  {category}
                </h3>
                <div className="h-[1px] w-full bg-[#657A6A]/40" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryMembers.map((member, idx) => (
                  <ScrollReveal key={member.id} delay={idx * 100} direction="up">
                    <TeamCard
                      member={member}
                      isEditMode={isEditMode}
                      onEdit={onEdit}
                      onDeleteConfirm={onDeleteConfirm}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
