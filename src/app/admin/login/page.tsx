"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid admin credentials.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#657A6A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      {/* TOP BRAND HEADER */}
      <div className="flex items-center justify-between z-10 max-w-[1440px] w-full mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV"
            alt="Skintillatingg Logo"
            className="h-9 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-display text-[19px] tracking-tight text-[#F5F5DC]">
              Skintillatingg
            </span>
            <span className="font-label-caps text-[8px] tracking-[0.22em] text-[#AEB9A9] uppercase font-medium">
              DR. AKSHAYA JAIN
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="font-label-caps text-[11px] tracking-[0.16em] uppercase text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>RETURN TO WEBSITE</span>
        </Link>
      </div>

      {/* CENTER LOGIN CARD */}
      <div className="w-full max-w-md mx-auto my-auto z-10 py-12">
        <div className="bg-[#17251E]/90 border border-[#F5F5DC]/15 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C9A227]" />

          <div className="text-center mb-8">
            <span className="font-label-caps text-[10px] tracking-[0.28em] uppercase text-[#C9A227] font-semibold block mb-2">
              SKINTILLATINGG
            </span>
            <h1 className="font-display text-[30px] sm:text-[36px] text-[#F5F5DC] font-normal leading-tight">
              ADMIN ACCESS
            </h1>
            <p className="font-body-md text-xs text-[#AEB9A9] mt-2 font-light">
              Enter your credentials to manage website content.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-red-900/30 border border-red-500/30 rounded-lg text-red-200 text-xs font-body-md text-center flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-base text-red-400">error</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                EMAIL OR USERNAME
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-3 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm font-medium"
                placeholder="admin@skintillatingg.com"
              />
            </div>

            <div>
              <label className="block font-label-caps text-[10.5px] tracking-[0.16em] uppercase text-[#AEB9A9] font-medium mb-1.5">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1C3329] border border-[#657A6A]/40 rounded-lg px-4 py-3 text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                placeholder="••••••••••••"
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <label className="flex items-center gap-2 text-[#AEB9A9] cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#C9A227] rounded"
                />
                <span>Remember session</span>
              </label>
              <button
                type="button"
                onClick={() => alert("Contact system administrator to reset credentials.")}
                className="text-[#C9A227] hover:underline font-label-caps text-[10px] tracking-[0.12em] uppercase"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A227] text-[#17251E] hover:bg-[#F5F5DC] font-label-caps text-xs tracking-[0.16em] uppercase py-3.5 rounded-[4px] font-bold transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(201,162,39,0.3)] mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>AUTHENTICATING...</span>
              ) : (
                <>
                  <span>LOGIN TO DASHBOARD</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center z-10 text-xs text-[#AEB9A9]/70 font-light">
        © {new Date().getFullYear()} Skintillatingg Cosmo • Tricho • Therapeutic Clinic. Private Admin Portal.
      </div>
    </main>
  );
}
