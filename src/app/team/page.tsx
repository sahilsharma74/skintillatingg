import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Link from "next/link";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";

export const metadata: Metadata = {
  title: "Team | Skintillatingg",
  description:
    "Meet the medical and clinical team behind Skintillatingg, bringing together aesthetic expertise, advanced technology and personalized care.",
};

export default function TeamPage() {
  const featuredMember = TEAM_MEMBERS.find((m) => m.isFeatured) || TEAM_MEMBERS[0];
  const categories: Array<TeamMember["category"]> = [
    "MEDICAL EXPERTISE",
    "CLINICAL TEAM",
    "PATIENT EXPERIENCE",
  ];

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-16 md:pt-24 pb-16 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine goldLinePosition="bottom">
          <div className="max-w-3xl">
            <span className="inline-block font-label-caps text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#C9A227] font-semibold mb-4 block">
              THE PEOPLE BEHIND THE PRACTICE
            </span>
            <h1 className="font-display text-[40px] sm:text-[54px] md:text-[64px] leading-[1.1] text-[#F5F5DC] font-normal mb-6">
              Meet the Team
            </h1>
            <p className="font-body-md text-[#F5F5DC]/90 text-base sm:text-lg leading-relaxed font-light">
              Experienced professionals united by precision, clinical expertise and a commitment to personalized aesthetic care.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-16 border-b border-[#657A6A]/30">
        <ScrollReveal direction="up">
          <div className="bg-[#17251E]/60 border border-[#F5F5DC]/15 rounded-2xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl">
              <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block mb-3 font-semibold">
                ONE PRACTICE. ONE STANDARD.
              </span>
              <h2 className="font-display text-[26px] sm:text-[34px] md:text-[40px] text-[#F5F5DC] font-normal mb-6 leading-tight">
                Clinical Rigour Meets Bespoke Care
              </h2>
              <p className="font-body-md text-[#F5F5DC]/85 text-sm sm:text-base leading-relaxed font-light space-y-4">
                At Skintillatingg, every therapeutic protocol and aesthetic outcome is driven by a shared philosophy: combining dermatological precision, advanced laser technology, and discreet patient care. Our multidisciplinary team works seamlessly to ensure every client experience is personal, evidence-backed, and delivered with uncompromising medical standards.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FEATURED FOUNDER SPOTLIGHT */}
      {featuredMember && (
        <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
          <ScrollReveal direction="up">
            <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block mb-8 font-semibold">
              FOUNDER & PRACTICE LEAD
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F5F5DC] text-[#17251E] rounded-2xl overflow-hidden p-6 sm:p-10 md:p-12 shadow-2xl border border-[#657A6A]/20">
              {/* LEFT: Portrait Image */}
              <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden border border-[#17251E]/15 shadow-md group">
                <img
                  src={featuredMember.image}
                  alt={featuredMember.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-[#C9A227]/30 rounded-xl pointer-events-none" />
              </div>

              {/* RIGHT: Biography & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#1C3329] font-bold px-3 py-1 bg-[#1C3329]/10 rounded mb-3">
                    {featuredMember.role}
                  </span>
                  <h3 className="font-display text-[32px] sm:text-[42px] text-[#17251E] leading-tight font-normal">
                    {featuredMember.name}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#1C3329]/80 font-medium mt-1">
                    {featuredMember.specialization}
                  </p>
                </div>

                <p className="font-body-md text-sm sm:text-base text-[#1C3329] leading-relaxed font-light">
                  {featuredMember.bio}
                </p>

                {/* Key Credentials Badges */}
                <div className="pt-4 border-t border-[#17251E]/15">
                  <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-[#17251E] font-semibold block mb-3">
                    VERIFIED CLINICAL CREDENTIALS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredMember.credentials.map((cred, idx) => (
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
      )}

      {/* TEAM CATEGORIES & CARDS GRID */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto py-20 border-b border-[#657A6A]/30">
        <ScrollReveal showGoldLine goldLinePosition="bottom" className="mb-14">
          <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] block mb-2 font-semibold">
            MULTIDISCIPLINARY TEAM
          </span>
          <h2 className="font-display text-[32px] sm:text-[44px] text-[#F5F5DC]">
            Clinical & Concierge Specialists
          </h2>
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((category) => {
            const members = TEAM_MEMBERS.filter((m) => m.category === category);
            if (members.length === 0) return null;

            return (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                  <h3 className="font-label-caps text-xs sm:text-sm tracking-[0.25em] text-[#F5F5DC] uppercase font-semibold shrink-0">
                    {category}
                  </h3>
                  <div className="h-[1px] w-full bg-[#657A6A]/40" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member, idx) => (
                    <ScrollReveal key={member.id} delay={idx * 100} direction="up">
                      <div className="bg-[#F5F5DC] text-[#17251E] rounded-xl overflow-hidden border border-[#657A6A]/20 shadow-xl flex flex-col h-full group hover:border-[#C9A227] transition-all duration-500 cinematic-card-lift">
                        {/* Portrait Image Container */}
                        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#1C3329] shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top md:group-hover:scale-[1.03] transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="font-label-caps text-[9px] tracking-[0.2em] uppercase text-[#F5F5DC] font-semibold px-2.5 py-1 bg-[#17251E]/85 backdrop-blur-sm rounded-xs border border-[#F5F5DC]/20">
                              {member.category}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/60 via-transparent to-transparent opacity-60" />
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
                          {member.credentials.length > 0 && (
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
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PAGE END CTA */}
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
    </main>
  );
}
