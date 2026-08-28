import { getAdminUserFromCookies } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminSidebarClient from "@/components/admin/AdminSidebarClient";

export const metadata = {
  title: "Admin CMS | Skintillatingg",
  description: "Skintillatingg Luxury Editorial Content Management System",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = getAdminUserFromCookies();

  // If unauthenticated, redirect to login
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#17251E] text-[#F5F5DC] flex flex-col md:flex-row font-body-md overflow-x-hidden">
      {/* Editorial Sidebar Container */}
      <AdminSidebarClient user={user} />

      {/* Main Admin Content Viewport */}
      <div className="flex-grow min-w-0 flex flex-col min-h-screen bg-[#1C3329]">
        {/* Top Header */}
        <header className="bg-[#17251E] border-b border-[#657A6A]/30 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-[#C9A227] uppercase font-semibold">
              CONTENT MANAGEMENT SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#AEB9A9] hover:text-[#F5F5DC] font-label-caps text-[10px] tracking-[0.14em] uppercase transition-colors"
            >
              <span>VIEW LIVE WEBSITE</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <div className="h-4 w-[1px] bg-[#657A6A]/30 hidden sm:block" />
            <span className="text-[#F5F5DC] font-medium text-xs">
              {user.name}
            </span>
          </div>
        </header>

        {/* Dashboard Page Content */}
        <main className="p-6 sm:p-10 flex-grow max-w-[1400px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
