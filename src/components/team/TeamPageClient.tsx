"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import TeamTimeline from "@/components/team/TeamTimeline";
import { INITIAL_TEAM_MEMBERS, TeamMember } from "@/data/team";

const STORAGE_KEY = "skintillatingg_team_members_v3";

export default function TeamPageClient() {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);

  // Load published/saved team data if available
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
    } catch {
      // Fallback to initial static data
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0F241B] text-[#F1EFE4] overflow-x-hidden pt-20 relative select-none">
      {/* CORNER BOTANICAL SILHOUETTES (Matching Reference Image) */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-no-repeat bg-contain opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(201,162,39,0.15), transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-no-repeat bg-contain opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgba(201,162,39,0.15), transparent 70%)",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <TeamHero />

      {/* Alternating Vertical Timeline */}
      <TeamTimeline members={members} />

      <Footer />
    </main>
  );
}
