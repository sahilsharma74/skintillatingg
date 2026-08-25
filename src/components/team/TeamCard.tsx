import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  isEditMode?: boolean;
  onEdit?: (member: TeamMember) => void;
  onDeleteConfirm?: (member: TeamMember) => void;
}

export default function TeamCard({
  member,
  isEditMode,
  onEdit,
  onDeleteConfirm,
}: TeamCardProps) {
  return (
    <div className="bg-[#F5F5DC] text-[#17251E] rounded-xl overflow-hidden border border-[#657A6A]/20 shadow-xl flex flex-col h-full group hover:border-[#C9A227] transition-all duration-500 cinematic-card-lift relative">
      {/* Edit overlay trigger buttons in Edit Mode */}
      {isEditMode && (
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-[#17251E]/90 backdrop-blur-md p-1.5 rounded-lg border border-[#F5F5DC]/20 shadow-lg">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(member)}
              className="p-1.5 text-[#F5F5DC] hover:text-[#C9A227] transition-colors rounded"
              title="Edit Team Member"
            >
              <span className="material-symbols-outlined text-base">edit</span>
            </button>
          )}
          {onDeleteConfirm && (
            <button
              type="button"
              onClick={() => onDeleteConfirm(member)}
              className="p-1.5 text-red-400 hover:text-red-300 transition-colors rounded"
              title="Delete Team Member"
            >
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          )}
        </div>
      )}

      {/* Portrait Image Container */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#1C3329] shrink-0">
        <img
          src={member.image}
          alt={member.name}
          style={{ objectPosition: member.objectPosition || "center top" }}
          className="w-full h-full object-cover md:group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="font-label-caps text-[9px] tracking-[0.2em] uppercase text-[#F5F5DC] font-semibold px-2.5 py-1 bg-[#17251E]/85 backdrop-blur-sm rounded-xs border border-[#F5F5DC]/20">
            {member.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#1C3329]/75 block mb-1 font-semibold">
            {member.role}
          </span>
          <h4 className="font-display text-2xl text-[#17251E] font-normal leading-snug">
            {member.name}
          </h4>
          <p className="font-body-md text-xs text-[#1C3329]/80 font-medium mt-1">
            {member.specialization}
          </p>
        </div>

        <p className="font-body-md text-xs sm:text-sm text-[#1C3329]/90 leading-relaxed font-light">
          {member.bio}
        </p>

        {/* Credentials list */}
        {member.credentials && member.credentials.length > 0 && (
          <div className="pt-3 border-t border-[#17251E]/15 space-y-1.5 mt-auto">
            {member.credentials.map((cred, cIdx) => (
              <div key={cIdx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                <span className="font-body-md text-[11px] text-[#17251E] font-medium">
                  {cred}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
