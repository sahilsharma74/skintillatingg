import Link from "next/link";
import { getMediaStore, getPagesStore } from "@/lib/cms/cmsStore";
import { INITIAL_TEAM_MEMBERS } from "@/data/team";
import { TREATMENTS_DATA } from "@/data/treatments";

export default function AdminDashboardOverviewPage() {
  const pages = getPagesStore();
  const media = getMediaStore();

  const totalPages = Object.keys(pages).length;
  const totalTreatments = TREATMENTS_DATA.length;
  const totalTeam = INITIAL_TEAM_MEMBERS.length;
  const totalImages = media.filter((m) => m.type === "image").length + 22; // including static assets
  const totalVideos = media.filter((m) => m.type === "video").length + 1;

  const quickPages = [
    { name: "Home Page", href: "/admin/pages/home", icon: "home", sections: pages.home?.sections.length || 7 },
    { name: "Our Journey", href: "/admin/pages/journey", icon: "auto_story", sections: pages.journey?.sections.length || 2 },
    { name: "Treatments Catalogue", href: "/admin/pages/treatments", icon: "medical_services", sections: pages.treatments?.sections.length || 1 },
    { name: "Technology", href: "/admin/pages/technology", icon: "precision_manufacturing", sections: pages.technology?.sections.length || 1 },
    { name: "Training Academy", href: "/admin/pages/training", icon: "school", sections: pages.training?.sections.length || 1 },
    { name: "Team Directory", href: "/admin/pages/team", icon: "group", sections: pages.team?.sections.length || 1 },
  ];

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-semibold block mb-2">
            EDITORIAL CONTENT MANAGEMENT SYSTEM
          </span>
          <h1 className="font-display text-[32px] sm:text-[40px] text-[#F5F5DC] font-normal leading-tight">
            Website Content Overview
          </h1>
          <p className="font-body-md text-sm text-[#AEB9A9] font-light mt-2 max-w-2xl leading-relaxed">
            Manage pages, section blocks, media assets, team profiles, and clinical treatments for Skintillatingg.
          </p>
        </div>
      </div>

      {/* METRIC OVERVIEW CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-5 shadow-lg">
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] block mb-1">
            TOTAL PAGES
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
            {totalPages}
          </span>
        </div>

        <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-5 shadow-lg">
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] block mb-1">
            TREATMENTS
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#C9A227]">
            {totalTreatments}
          </span>
        </div>

        <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-5 shadow-lg">
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] block mb-1">
            TEAM MEMBERS
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
            {totalTeam}
          </span>
        </div>

        <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-5 shadow-lg">
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] block mb-1">
            IMAGE ASSETS
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#F5F5DC]">
            {totalImages}
          </span>
        </div>

        <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-5 shadow-lg col-span-2 sm:col-span-1">
          <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] block mb-1">
            CLINIC VIDEOS
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#C9A227]">
            {totalVideos}
          </span>
        </div>
      </div>

      {/* QUICK PAGE SECTIONS */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-1">
              EDITABLE SECTIONS
            </span>
            <h2 className="font-display text-2xl text-[#F5F5DC]">
              Manage Page Content Blocks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickPages.map((qp, idx) => (
            <Link
              key={idx}
              href={qp.href}
              className="bg-[#17251E] border border-[#657A6A]/30 rounded-xl p-6 hover:border-[#C9A227] transition-all group shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#1C3329] border border-[#F5F5DC]/10 flex items-center justify-center text-[#C9A227] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">{qp.icon}</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-[0.14em] uppercase text-[#AEB9A9] px-2.5 py-1 bg-[#1C3329] rounded border border-[#657A6A]/20">
                  {qp.sections} SECTIONS
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl text-[#F5F5DC] group-hover:text-[#C9A227] transition-colors">
                  {qp.name}
                </h3>
                <span className="font-label-caps text-[10px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium flex items-center gap-1 mt-2">
                  <span>EDIT SECTIONS</span>
                  <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* RECENTLY EDITED LOG */}
      <div className="bg-[#17251E] border border-[#657A6A]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#657A6A]/30">
          <div>
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold block mb-1">
              AUDIT LOG
            </span>
            <h2 className="font-display text-2xl text-[#F5F5DC]">Recently Edited</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body-md">
            <thead>
              <tr className="border-b border-[#657A6A]/30 text-[#AEB9A9] font-label-caps tracking-[0.16em] uppercase">
                <th className="py-3 px-4">PAGE / SECTION</th>
                <th className="py-3 px-4">STATUS</th>
                <th className="py-3 px-4">LAST MODIFIED</th>
                <th className="py-3 px-4">ADMINISTRATOR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#657A6A]/20 text-[#F5F5DC]">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-[#F5F5DC]">Team Page — Directory Grid</td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-label-caps tracking-[0.14em] bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-bold uppercase">
                    PUBLISHED
                  </span>
                </td>
                <td className="py-3.5 px-4 text-[#AEB9A9]">Just now</td>
                <td className="py-3.5 px-4 text-[#C9A227] font-medium">Dr. Akshaya Jain</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-[#F5F5DC]">Home Page — Hero & Video Reel</td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-label-caps tracking-[0.14em] bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-bold uppercase">
                    PUBLISHED
                  </span>
                </td>
                <td className="py-3.5 px-4 text-[#AEB9A9]">Today</td>
                <td className="py-3.5 px-4 text-[#C9A227] font-medium">Dr. Akshaya Jain</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-[#F5F5DC]">Training — Clinical Education</td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-label-caps tracking-[0.14em] bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-bold uppercase">
                    PUBLISHED
                  </span>
                </td>
                <td className="py-3.5 px-4 text-[#AEB9A9]">Yesterday</td>
                <td className="py-3.5 px-4 text-[#C9A227] font-medium">Dr. Akshaya Jain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
