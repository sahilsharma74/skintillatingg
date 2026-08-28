"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AdminUser } from "@/lib/auth";

interface AdminSidebarClientProps {
  user: AdminUser;
}

export default function AdminSidebarClient({ user }: AdminSidebarClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const navGroups = [
    {
      title: "WEBSITE PAGES",
      items: [
        { label: "Dashboard Overview", href: "/admin", icon: "dashboard" },
        { label: "Home", href: "/admin/pages/home", icon: "home" },
        { label: "Our Journey", href: "/admin/pages/journey", icon: "auto_story" },
        { label: "Treatments", href: "/admin/pages/treatments", icon: "medical_services" },
        { label: "Technology", href: "/admin/pages/technology", icon: "precision_manufacturing" },
        { label: "Training", href: "/admin/pages/training", icon: "school" },
        { label: "Career", href: "/admin/pages/career", icon: "work" },
        { label: "Team", href: "/admin/pages/team", icon: "group" },
        { label: "Contact", href: "/admin/pages/contact", icon: "location_on" },
        { label: "Book Consultation", href: "/admin/pages/book-consultation", icon: "calendar_month" },
      ],
    },
    {
      title: "MANAGEMENT & MEDIA",
      items: [
        { label: "Media Library", href: "/admin/media", icon: "photo_library" },
        { label: "Team Directory", href: "/admin/team", icon: "badge" },
        { label: "Treatments Manager", href: "/admin/treatments", icon: "vaccines" },
      ],
    },
    {
      title: "SETTINGS & CONFIG",
      items: [
        { label: "Site Navigation", href: "/admin/navigation", icon: "segment" },
        { label: "Footer Content", href: "/admin/footer", icon: "bottom_navigation" },
        { label: "Global Settings", href: "/admin/settings", icon: "settings" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden bg-[#17251E] px-4 py-3 border-b border-[#657A6A]/30 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg text-[#F5F5DC]">Skintillatingg</span>
          <span className="font-label-caps text-[9px] tracking-[0.2em] text-[#C9A227] uppercase">CMS</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#F5F5DC] hover:text-[#C9A227]"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Sidebar Overlay */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#17251E] border-r border-[#657A6A]/30 flex flex-col justify-between transition-transform duration-300 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-80px)] md:max-h-none">
          {/* Header */}
          <Link href="/admin" className="block mb-8 group">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
                alt="Logo"
                className="h-8 w-auto"
              />
              <div>
                <span className="font-display text-lg text-[#F5F5DC] block leading-none">
                  Skintillatingg
                </span>
                <span className="font-label-caps text-[8.5px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
                  ADMIN DASHBOARD
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Groups */}
          <div className="space-y-6">
            {navGroups.map((group, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="font-label-caps text-[9.5px] tracking-[0.22em] text-[#AEB9A9]/70 uppercase block font-semibold mb-2 px-3">
                  {group.title}
                </span>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-body-md text-xs font-medium transition-all ${
                        isActive
                          ? "bg-[#1C3329] text-[#C9A227] border-l-2 border-[#C9A227] font-semibold"
                          : "text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:bg-[#1C3329]/60"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-base ${isActive ? "text-[#C9A227]" : "text-[#657A6A]"}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Footer User Profile & Logout */}
        <div className="p-4 border-t border-[#657A6A]/30 bg-[#17251E] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1C3329] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] font-bold text-xs">
              AJ
            </div>
            <div className="overflow-hidden">
              <span className="font-body-md text-xs text-[#F5F5DC] font-medium block truncate">
                {user.name}
              </span>
              <span className="font-label-caps text-[9px] text-[#AEB9A9] block truncate">
                {user.email}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 text-[#AEB9A9] hover:text-red-400 transition-colors"
            title="Logout Admin Session"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
