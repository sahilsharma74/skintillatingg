import Link from "next/link";

export default function ServicesBento() {
  const services = [
    {
      num: "01",
      title: "Botox & Facial Aesthetics",
      desc: "FDA-approved wrinkle relaxation and facial sculpting therapies that enhance your natural features while preserving facial expressions.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBeuYA1GF05n9uuu-1_BTr9TKdSirqrkGRMAQ8FOSyf4yY4LVuCJpsRgx9_YTPxf7kJ6ytZ_e9UxC4V9iHLyJ5AGPku0PUjJ1MOmkAOIOwQUlySJNhwTSdv6aCdDth2Up7nabq94N24Li5tbOmdrBxCTSmwzQLIYkj7OkB2cRBrbm_4Pjz__Z8cJPNJ-yQ0_ENmSZV5r0zL2yVbQfd9Sr76njbJYzdDIwsNgeNoBfiU1KnZvVHV8_8",
    },
    {
      num: "02",
      title: "Trichology & Meso Therapy",
      desc: "Advanced hair restoration and targeted mesotherapy protocols delivering bio-essential nutrients to revitalize hair follicles and skin.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6qOF36vdYr91s-acTvRA-Xnl1VWKUHmqw0Uvjzo5veRTHi3l11H3oFdqhANrj7RFLvoz3abG9lDfKQu342RefmYNaK5QJrD7hOMWkm4o78sedD9DSiQlCiDdOnaecCZr45JSVleTMBazp00yqWTYsoJnluBcZofSIhouqJ6JkqTRPWK4uMwFk7caA-mv1YJ2R_ha57wyzqMLwNBhrsHbIBqUdkQTe_r_756Bb3Uw1XdKG6ClFwQ",
    },
    {
      num: "03",
      title: "Laser & Intimate Rejuvenation",
      desc: "State-of-the-art non-surgical laser procedures designed to rebuild collagen, refine skin texture, and provide discreet cellular wellness.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkJDX9X5bZVA8ZmPLI3SnPjp851CyD-0_3__XkwIlmN8uMDWNNnRFRJ15k0SznH7kYrHiIISufsi_Yj3iMXFz7RLuRdU6C9OVUswolyZx2-VmwQXdKb3P8JpTGxvaFlqAl04XQjoK2h2YQiCjFlYj5DS9bDPaa1ucrQsBNELJgcGkfFjPVVdjzme4RFRsS_NSJ5jdzoUH_aPKXL5nU9uXPW9h5yc6FMCHHooEDbMUz7B5EMSxoJ5c",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#657A6A] text-[#F5F5DC] border-b border-[#AEB9A9]/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-label-caps text-[11px] sm:text-[12px] text-[#F5F5DC]/80 mb-3 tracking-[0.25em] uppercase font-semibold">
              Clinical Specializations
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] text-[#F5F5DC] font-normal tracking-tight">
              Specialized Therapies
            </h2>
          </div>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[#F5F5DC] font-button text-[12px] sm:text-[13px] tracking-[0.15em] uppercase font-semibold group hover:text-[#F5F5DC]/80 transition-colors"
          >
            Explore All Therapies
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
              east
            </span>
          </Link>
        </div>

        {/* Editorial Service Grid (Warm Cream Panels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5DC] text-[#17251E] p-7 sm:p-8 rounded-sm border border-[#AEB9A9]/40 flex flex-col justify-between group hover:border-[#17251E]/40 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Natural Image Container without dark overlay */}
                <div className="w-full h-48 mb-6 overflow-hidden rounded-sm border border-[#AEB9A9]/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="font-label-caps text-[11px] text-[#657A6A] tracking-[0.2em] uppercase block mb-2 font-bold">
                  {service.num} • Specialty
                </span>
                <h3 className="font-display text-[22px] sm:text-[24px] text-[#17251E] mb-3 font-normal leading-snug">
                  {service.title}
                </h3>
                <p className="font-body-md text-[14px] text-[#1C3329]/90 leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#17251E]/10 flex items-center justify-between">
                <Link
                  href="/book-consultation"
                  className="font-button text-[11px] tracking-[0.15em] uppercase text-[#17251E] font-semibold flex items-center gap-1 hover:text-[#657A6A] transition-colors"
                >
                  Inquire
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

