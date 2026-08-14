export default function InsightsHeader() {
  return (
    <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1440px] mx-auto pt-10 sm:pt-14 md:pt-16 pb-8 md:pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        {/* Left Headline & Subheading */}
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h1 className="font-display text-[44px] sm:text-[56px] md:text-[68px] text-[#F7F5DC] font-normal leading-[1.05] tracking-tight">
            Insights
          </h1>
          <p className="font-body-md text-[#F7F5DC]/90 text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-xl font-light">
            Expert knowledge, advanced treatments, and the science behind
            healthy skin, hair, and confidence.
          </p>
        </div>

        {/* Right Subtle Botanical Leaf SVG Line-Art */}
        <div className="hidden md:block absolute right-0 bottom-0 select-none pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
          <svg
            width="280"
            height="160"
            viewBox="0 0 280 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[240px] lg:w-[290px] h-auto"
          >
            {/* Elegant organic botanical branch paths */}
            <path
              d="M10 145C60 135 120 115 170 80C210 52 245 25 270 10"
              stroke="#AEB9A9"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M90 115C82 98 75 75 80 50C92 65 110 82 120 95"
              stroke="#AEB9A9"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <path
              d="M140 92C142 70 152 48 168 30C170 52 165 74 158 86"
              stroke="#AEB9A9"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <path
              d="M185 70C198 52 215 35 235 22C230 44 218 64 202 75"
              stroke="#AEB9A9"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <path
              d="M50 128C40 112 32 90 38 68C52 82 66 102 72 118"
              stroke="#AEB9A9"
              strokeWidth="1.0"
              strokeLinecap="round"
            />
            <path
              d="M225 42C238 28 252 16 268 8C262 26 248 42 238 50"
              stroke="#AEB9A9"
              strokeWidth="1.0"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
