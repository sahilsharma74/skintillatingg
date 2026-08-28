import ScrollReveal from "@/components/effects/ScrollReveal";
import { TeamMember } from "@/data/team";

interface TeamTimelineProps {
  members: TeamMember[];
}

export default function TeamTimeline({ members }: TeamTimelineProps) {
  // Sort members by displayOrder ascending
  const sortedMembers = [...members].sort(
    (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
  );

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1140px] mx-auto py-12 md:py-20 z-10">
      <div className="space-y-0">
        {sortedMembers.map((member, index) => {
          const isPhotoLeft = index % 2 === 0;
          const isLast = index === sortedMembers.length - 1;
          const hasImage = Boolean(member.image && member.image.trim().length > 0);
          const hasContent = Boolean(member.name || member.role || member.bio);

          return (
            <div key={member.id} className="relative">
              {/* MEMBER ROW */}
              <ScrollReveal direction="up" delay={index * 60}>
                {/* --- DESKTOP LAYOUT (lg & above) --- */}
                <div className="hidden lg:flex items-center max-w-[1020px] mx-auto relative group">
                  {isPhotoLeft ? (
                    /* PHOTO LEFT -> CARD RIGHT */
                    <>
                      {/* CIRCULAR PORTRAIT */}
                      <div className="relative z-20 shrink-0 w-64 h-64 xl:w-72 xl:h-72 rounded-full border-[2.5px] border-[#C9A227] shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden bg-[#15291F] transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                        {hasImage ? (
                          <img
                            src={member.image}
                            alt={member.name || "Team Member"}
                            style={{ objectPosition: member.objectPosition || "center top" }}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#15291F] flex items-center justify-center" />
                        )}
                      </div>

                      {/* WARM IVORY CARD RIGHT WITH OVERLAP */}
                      <div className="relative z-10 -ml-20 xl:-ml-24 flex-1 bg-[#F1EFE4] border border-[#C9A227]/40 rounded-[32px] pl-24 xl:pl-28 pr-10 xl:pr-12 py-9 xl:py-11 min-h-[220px] xl:min-h-[240px] flex flex-col justify-center shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:border-[#C9A227]/80">
                        {hasContent ? (
                          <>
                            {member.name && (
                              <h2 className="font-display text-3xl xl:text-[34px] text-[#252522] font-normal leading-snug mb-2">
                                {member.name}
                              </h2>
                            )}

                            {member.role && (
                              <span className="font-label-caps text-[11px] xl:text-xs tracking-[0.22em] uppercase text-[#C9A227] font-semibold mb-4 block">
                                {member.role}
                              </span>
                            )}

                            {member.bio && (
                              <p className="font-body-md text-[14px] xl:text-[15px] text-[#252522]/90 leading-[1.75] font-light whitespace-pre-line">
                                {member.bio}
                              </p>
                            )}

                            {member.credentials && member.credentials.length > 0 && (
                              <div className="pt-4 mt-4 border-t border-[#252522]/15 space-y-1.5">
                                {member.credentials.map((cred, cIdx) => (
                                  <div key={cIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                                    <span className="font-body-md text-xs text-[#252522]/85 font-medium">
                                      {cred}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          /* Reserved Clean Editorial Space */
                          <div className="h-full min-h-[140px]" />
                        )}
                      </div>
                    </>
                  ) : (
                    /* CARD LEFT -> PHOTO RIGHT */
                    <>
                      {/* WARM IVORY CARD LEFT WITH OVERLAP */}
                      <div className="relative z-10 -mr-20 xl:-mr-24 flex-1 bg-[#F1EFE4] border border-[#C9A227]/40 rounded-[32px] pr-24 xl:pr-28 pl-10 xl:pl-12 py-9 xl:py-11 min-h-[220px] xl:min-h-[240px] flex flex-col justify-center shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:border-[#C9A227]/80">
                        {hasContent ? (
                          <>
                            {member.name && (
                              <h2 className="font-display text-3xl xl:text-[34px] text-[#252522] font-normal leading-snug mb-2">
                                {member.name}
                              </h2>
                            )}

                            {member.role && (
                              <span className="font-label-caps text-[11px] xl:text-xs tracking-[0.22em] uppercase text-[#C9A227] font-semibold mb-4 block">
                                {member.role}
                              </span>
                            )}

                            {member.bio && (
                              <p className="font-body-md text-[14px] xl:text-[15px] text-[#252522]/90 leading-[1.75] font-light whitespace-pre-line">
                                {member.bio}
                              </p>
                            )}

                            {member.credentials && member.credentials.length > 0 && (
                              <div className="pt-4 mt-4 border-t border-[#252522]/15 space-y-1.5">
                                {member.credentials.map((cred, cIdx) => (
                                  <div key={cIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                                    <span className="font-body-md text-xs text-[#252522]/85 font-medium">
                                      {cred}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          /* Reserved Clean Editorial Space */
                          <div className="h-full min-h-[140px]" />
                        )}
                      </div>

                      {/* CIRCULAR PORTRAIT */}
                      <div className="relative z-20 shrink-0 w-64 h-64 xl:w-72 xl:h-72 rounded-full border-[2.5px] border-[#C9A227] shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden bg-[#15291F] transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                        {hasImage ? (
                          <img
                            src={member.image}
                            alt={member.name || "Team Member"}
                            style={{ objectPosition: member.objectPosition || "center top" }}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#15291F] flex items-center justify-center" />
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* --- MOBILE & TABLET LAYOUT (under lg) --- */}
                <div className="lg:hidden flex flex-col items-center max-w-md mx-auto relative space-y-0">
                  {/* CIRCULAR PORTRAIT */}
                  <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-[#C9A227] shadow-2xl overflow-hidden bg-[#15291F] -mb-10 flex items-center justify-center">
                    {hasImage ? (
                      <img
                        src={member.image}
                        alt={member.name || "Team Member"}
                        style={{ objectPosition: member.objectPosition || "center top" }}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#15291F] flex items-center justify-center" />
                    )}
                  </div>

                  {/* WARM IVORY CARD */}
                  <div className="relative z-10 w-full bg-[#F1EFE4] border border-[#C9A227]/40 rounded-[28px] pt-14 pb-8 px-6 sm:px-8 min-h-[200px] shadow-xl text-center flex flex-col justify-center">
                    {hasContent ? (
                      <>
                        {member.name && (
                          <h2 className="font-display text-2xl sm:text-3xl text-[#252522] font-normal mb-2">
                            {member.name}
                          </h2>
                        )}

                        {member.role && (
                          <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C9A227] font-semibold mb-3 block">
                            {member.role}
                          </span>
                        )}

                        {member.bio && (
                          <p className="font-body-md text-xs sm:text-sm text-[#252522]/90 leading-relaxed font-light whitespace-pre-line">
                            {member.bio}
                          </p>
                        )}

                        {member.credentials && member.credentials.length > 0 && (
                          <div className="pt-3 mt-3 border-t border-[#252522]/15 space-y-1 text-left">
                            {member.credentials.map((cred, cIdx) => (
                              <div key={cIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                                <span className="font-body-md text-[11px] text-[#252522]/85 font-medium">
                                  {cred}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="h-full min-h-[100px]" />
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* VERTICAL CONNECTING LINE & GOLD NODE BETWEEN ROWS */}
              {!isLast && (
                <div className="w-full flex justify-center items-center py-4 md:py-6 relative z-10">
                  <div className="w-[1.5px] h-12 md:h-16 bg-[#C9A227]/70 relative flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#C9A227] border-2 border-[#0F241B] shadow-[0_0_10px_rgba(201,162,39,0.8)] shrink-0" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
