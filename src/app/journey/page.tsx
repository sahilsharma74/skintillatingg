"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MILESTONES, CREDENTIALS } from "@/data/journey";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-16 md:pt-24 pb-20 border-b border-[#657A6A]/30 overflow-hidden">
        {/* Rich Fine-Line Botanical Branch Artwork (Top-Right Background) */}
        <div 
          className="absolute top-0 right-0 w-[45%] sm:w-[48%] md:w-[50%] max-w-[650px] h-auto pointer-events-none z-0 select-none"
          style={{
            animation: "botanicalEntrance 1.5s ease-out forwards",
          }}
        >
          <style jsx>{`
            @keyframes botanicalEntrance {
              from {
                opacity: 0;
                transform: translate(14px, -14px);
              }
              to {
                opacity: 1;
                transform: translate(0, 0);
              }
            }
          `}</style>
          <svg
            viewBox="0 0 600 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-[0.35] transform translate-x-4 -translate-y-4"
          >
            {/* Main Sweeping Botanical Trunk */}
            <path
              d="M580,20 C490,90 400,210 320,350 C250,470 190,570 130,680"
              stroke="rgba(145, 158, 130, 0.75)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* Stem 1 - Top Branch */}
            <path
              d="M510,75 C430,45 340,55 260,85"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* Stem 2 - Upper Middle Branch */}
            <path
              d="M420,180 C340,150 250,170 170,210"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* Stem 3 - Lower Middle Branch */}
            <path
              d="M330,330 C260,320 180,350 110,400"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* Stem 4 - Base Branch */}
            <path
              d="M230,490 C170,490 110,530 60,580"
              stroke="rgba(145, 158, 130, 0.65)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* --- DETAILED LEAVES WITH VEINS (22 Botanical Leaves) --- */}

            {/* Leaf 1 (Top Stem End) */}
            <path d="M260,85 C235,65 210,75 225,100 C245,105 258,95 260,85 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M260,85 L225,100" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 2 */}
            <path d="M300,75 C275,50 248,58 262,82 C282,88 298,78 300,75 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M300,75 L262,82" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 3 */}
            <path d="M340,65 C315,38 288,48 302,72 C322,78 338,68 340,65 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M340,65 L302,72" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 4 */}
            <path d="M395,58 C370,32 342,42 356,66 C376,72 392,62 395,58 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M395,58 L356,66" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 5 (Top Main Trunk) */}
            <path d="M550,45 C525,20 495,28 508,52 C528,58 545,48 550,45 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M550,45 L508,52" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 6 */}
            <path d="M500,105 C475,80 445,88 458,112 C478,118 495,108 500,105 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M500,105 L458,112" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 7 (Stem 2 End) */}
            <path d="M170,210 C142,190 118,202 132,228 C152,232 166,220 170,210 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M170,210 L132,228" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 8 */}
            <path d="M215,200 C188,178 162,188 178,215 C198,218 212,208 215,200 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M215,200 L178,215" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 9 */}
            <path d="M260,185 C232,162 208,172 222,198 C242,202 256,192 260,185 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M260,185 L222,198" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 10 */}
            <path d="M310,170 C282,148 258,158 272,185 C292,188 306,178 310,170 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M310,170 L272,185" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 11 (Mid Trunk Right) */}
            <path d="M460,220 C432,198 408,208 422,235 C442,238 456,228 460,220 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M460,220 L422,235" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 12 */}
            <path d="M400,280 C372,258 348,268 362,295 C382,298 396,288 400,280 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M400,280 L362,295" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 13 (Stem 3 End) */}
            <path d="M110,400 C82,380 58,392 72,418 C92,422 106,410 110,400 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M110,400 L72,418" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 14 */}
            <path d="M160,380 C132,358 108,368 122,395 C142,398 156,388 160,380 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M160,380 L122,395" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 15 */}
            <path d="M210,360 C182,338 158,348 172,375 C192,378 206,368 210,360 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M210,360 L172,375" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 16 */}
            <path d="M260,345 C232,323 208,333 222,360 C242,363 256,353 260,345 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M260,345 L222,360" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 17 (Lower Trunk Right) */}
            <path d="M330,420 C302,398 278,408 292,435 C312,438 326,428 330,420 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M330,420 L292,435" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 18 (Stem 4 End) */}
            <path d="M60,580 C32,560 8,572 22,598 C42,602 56,590 60,580 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M60,580 L22,598" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 19 */}
            <path d="M110,550 C82,528 58,538 72,565 C92,568 106,558 110,550 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M110,550 L72,565" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 20 */}
            <path d="M160,520 C132,498 108,508 122,535 C142,538 156,528 160,520 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M160,520 L122,535" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 21 (Base Trunk Left) */}
            <path d="M220,530 C192,508 168,518 182,545 C202,548 216,538 220,530 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M220,530 L182,545" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />

            {/* Leaf 22 (Base Trunk Bottom) */}
            <path d="M160,630 C132,608 108,618 122,645 C142,648 156,638 160,630 Z" stroke="rgba(145, 158, 130, 0.75)" strokeWidth="1.0" />
            <path d="M160,630 L122,645" stroke="rgba(145, 158, 130, 0.4)" strokeWidth="0.6" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#657A6A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-6 font-semibold">
            OUR JOURNEY
          </div>
          <h1 className="font-display text-[44px] md:text-[64px] leading-[1.1] text-[#F5F5DC] font-normal mb-6">
            Our Journey & <br />
            <span className="italic text-[#F5F5DC]">Clinical Philosophy</span>
          </h1>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg md:text-xl leading-relaxed mb-10">
            Founded by Dr. Akshaya Jain, Skintillatingg Cosmo • Tricho • Therapeutic Clinic represents over 12 years of dedication to evidence-led dermatology, artistic precision, and natural aesthetic restoration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors duration-300 inline-block font-medium shadow-md"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-[#F5F5DC]/40 text-[#F5F5DC] font-button text-[14px] px-8 py-4 rounded hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300 inline-block font-medium"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Vision & Philosophy */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#657A6A]/20 bg-[#F5F5DC] my-8 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="font-label-caps text-xs tracking-widest uppercase text-[#17251E] block font-semibold">
              CLINICAL ETHOS
            </span>
            <h2 className="font-display text-[32px] md:text-[44px] leading-tight text-[#17251E]">
              Where Evidence Meets Bespoke Aesthetic Care
            </h2>
            <p className="font-body-md text-[#1C3329] text-base md:text-lg leading-relaxed font-normal">
              At Skintillatingg, we believe true aesthetic beauty stems from skin health and anatomical harmony. Our practice rejects artificial, standardized treatments in favor of bespoke therapeutic regimens tailored to your specific micro-dermatological profile.
            </p>
            <p className="font-body-md text-[#1C3329] text-base leading-relaxed font-normal">
              Every procedure—from precision micro-dosed Botox to autologous Growth Factor Concentrate (GFC) hair revitalization—is performed under strict medical safety protocols using FDA-approved technologies.
            </p>
          </div>
          <div className="md:col-span-6 relative">
            {/* Glow frame */}
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#657A6A]/40 via-[#657A6A]/20 to-transparent z-0"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#657A6A]/30 shadow-2xl group z-10 bg-[#1C3329]">
              <img
                src="/images/dr-akshaya-jain.jpg"
                alt="Dr. Akshaya Jain — Aesthetic Cosmetologist & Celebrity Hair Specialist"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "50% 15%" }}
              />
              {/* External Caption Card below photo */}
              <div className="p-5 bg-[#1C3329] border-t border-[#657A6A]/30">
                <span className="font-display text-xl text-[#F5F5DC] block mb-1">Dr. Akshaya Jain</span>
                <span className="font-body-md text-xs text-[#F5F5DC]/90">Award-Winning Aesthetic Cosmetologist &amp; Celebrity Hair Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#657A6A]/30 bg-[#1C3329]">
        <div className="max-w-2xl mb-16">
          <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] block mb-2 font-semibold">
            MILESTONES
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] text-[#F5F5DC]">
            Milestones of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5DC] border border-[#657A6A]/20 rounded-xl p-8 hover:border-[#17251E]/30 hover:bg-[#F5F5DC]/95 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg"
            >
              <div className="font-label-caps text-xs tracking-widest text-[#17251E] mb-3 font-semibold">
                {item.year}
              </div>
              <span className="inline-block px-2.5 py-0.5 bg-[#17251E]/10 text-[#17251E] rounded text-[11px] font-label-caps mb-4 font-semibold">
                {item.category}
              </span>
              <h3 className="font-display text-[20px] text-[#17251E] mb-3 transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-[#1C3329] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials & Training */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-24 border-b border-[#AEB9A9]/20 bg-[#657A6A] my-8 rounded-2xl shadow-xl">
        <div className="max-w-2xl mb-16">
          <span className="font-label-caps text-xs tracking-widest uppercase text-[#F5F5DC] block mb-2 font-semibold">
            CREDENTIALS
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] text-[#F5F5DC]">
            Clinical Credentials & Authority
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CREDENTIALS.map((cred, index) => (
            <div
              key={index}
              className="bg-[#F5F5DC] border border-[#17251E]/10 p-8 rounded-xl flex items-start gap-6 hover:border-[#17251E]/30 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#17251E]/10 border border-[#17251E]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#17251E] text-2xl">verified</span>
              </div>
              <div>
                <span className="font-label-caps text-xs text-[#17251E] tracking-wider block mb-1 font-semibold">
                  {cred.tag}
                </span>
                <h3 className="font-display text-[22px] text-[#17251E] mb-1">
                  {cred.title}
                </h3>
                <p className="font-body-md text-sm text-[#1C3329] mb-2 font-semibold">
                  {cred.subtitle}
                </p>
                <p className="font-body-md text-sm text-[#1C3329] leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-28 text-center relative bg-[#1C3329]">
        <div className="absolute inset-0 bg-[#657A6A]/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-[38px] md:text-[54px] text-[#F5F5DC] leading-tight">
            Your Skin. Your Journey. <br />
            <span className="italic text-[#F5F5DC]">Your Confidence.</span>
          </h2>
          <p className="font-body-md text-[#F5F5DC]/90 text-lg max-w-xl mx-auto">
            Experience evidence-led aesthetic care with Dr. Akshaya Jain in Koregaon Park / Boat Club Road, Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors duration-300 font-medium shadow-md"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-[#F5F5DC]/40 text-[#F5F5DC] font-button text-[14px] px-8 py-4 rounded hover:border-[#F5F5DC] hover:bg-[#657A6A]/20 transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
