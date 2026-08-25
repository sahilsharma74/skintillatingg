import ScrollReveal from "@/components/effects/ScrollReveal";
import Link from "next/link";
import { TeamMember } from "@/data/team";

interface FeaturedTeamMemberProps {
  member: TeamMember;
  isEditMode?: boolean;
  onEdit?: (member: TeamMember) => void;
}

export default function FeaturedTeamMember({
  member,
  isEditMode,
  onEdit,
}: FeaturedTeamMemberProps) {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
      <ScrollReveal direction="up">
        <div className="flex items-center justify-between mb-8">
          <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block font-semibold">
            FOUNDER & PRACTICE LEAD
          </span>
          {isEditMode && onEdit && (
            <button
              type="button"
              onClick={() => onEdit(member)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9A227] text-[#17251E] font-label-caps text-[10px] tracking-[0.14em] uppercase font-bold rounded hover:bg-[#F5F5DC] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              <span>Edit Spotlight</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F5F5DC] text-[#17251E] rounded-2xl overflow-hidden p-6 sm:p-10 md:p-12 shadow-2xl border border-[#657A6A]/20 relative">
          {/* LEFT: Portrait Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden border border-[#17251E]/15 shadow-md group">
            <img
              src={member.image}
              alt={member.name}
              style={{ objectPosition: member.objectPosition || "center top" }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border border-[#C9A227]/30 rounded-xl pointer-events-none" />
          </div>

          {/* RIGHT: Biography & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#1C3329] font-bold px-3 py-1 bg-[#1C3329]/10 rounded mb-3">
                {member.role}
              </span>
              <h3 className="font-display text-[32px] sm:text-[42px] text-[#17251E] leading-tight font-normal">
                {member.name}
              </h3>
              <p className="font-body-md text-xs sm:text-sm text-[#1C3329]/80 font-medium mt-1">
                {member.specialization}
              </p>
            </div>

            <p className="font-body-md text-sm sm:text-base text-[#1C3329] leading-relaxed font-light">
              {member.bio}
            </p>

            {/* Key Credentials Badges */}
            {member.credentials && member.credentials.length > 0 && (
              <div className="pt-4 border-t border-[#17251E]/15">
                <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#17251E] font-semibold block mb-3">
                  VERIFIED CLINICAL CREDENTIALS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {member.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-[#1C3329]/[0.06] p-3 rounded-lg border border-[#17251E]/10"
                    >
                      <span className="material-symbols-outlined text-[#17251E] text-lg shrink-0">
                        verified
                      </span>
                      <span className="font-body-md text-xs text-[#17251E] font-medium">
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 font-label-caps text-xs tracking-[0.16em] uppercase text-[#17251E] font-bold hover:text-[#C9A227] transition-colors group"
              >
                <span>VIEW OUR JOURNEY STORY</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
