import Link from "next/link";
import ScrollReveal from "@/components/effects/ScrollReveal";

export interface ServiceCardData {
  num: string;
  category: string;
  title: string;
  desc: string;
  type: "image" | "video";
  image?: string;
  videoSrc?: string;
}

export default function ServicesBento() {
  const services: ServiceCardData[] = [
    {
      num: "01",
      category: "01 • SPECIALTY",
      title: "BOOSTER SHOTS",
      desc: "Personalized skin booster treatments designed to support hydration, skin quality, radiance and a refreshed, healthy-looking appearance.",
      type: "video",
      videoSrc: "/videos/booster%20shots.mp4",
    },
    {
      num: "02",
      category: "02 • SPECIALTY",
      title: "HIFU",
      desc: "A non-surgical ultrasound-based treatment designed to support firmer-looking skin and a more defined appearance through focused energy delivery.",
      type: "video",
      videoSrc: "/videos/hifu.mp4.mp4",
    },
    {
      num: "03",
      category: "03 • SPECIALTY",
      title: "Laser Hair Removal",
      desc: "An advanced laser-based treatment designed to reduce unwanted hair while supporting smoother-looking skin and long-term hair management.",
      type: "video",
      videoSrc: "/videos/laser-hair-removal.mp4.mp4",
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#657A6A] text-[#F5F5DC] border-b border-[#AEB9A9]/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Section Header with ScrollReveal & Gold Line */}
        <ScrollReveal showGoldLine goldLinePosition="bottom" className="mb-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6">
            <div>
              <p className="font-label-caps text-[11px] sm:text-[12px] text-[#F5F5DC]/90 mb-2 tracking-[0.25em] uppercase font-semibold">
                SPECIALIZED THERAPIES
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] text-[#F5F5DC] font-normal tracking-tight">
                Clinical Specializations
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-[#F5F5DC] font-button text-[12px] sm:text-[13px] tracking-[0.15em] uppercase font-semibold group hover:text-[#C9A227] transition-colors"
            >
              <span>EXPLORE ALL THERAPIES</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                east
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Editorial Service Grid (3 Warm Cream Panels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="up">
              <div
                data-cursor="EXPLORE"
                className="bg-[#F5F5DC] text-[#17251E] p-6 sm:p-8 rounded-sm border border-[#AEB9A9]/40 flex flex-col justify-between group cinematic-card-lift shadow-md h-full cursor-pointer relative"
              >
                <div className="flex flex-col flex-grow">
                  {/* Horizontal Video/Image Frame (Preserves exact aspect ratio) */}
                  <div className="w-full aspect-[16/10] mb-6 overflow-hidden rounded-sm border border-[#17251E]/15 relative bg-[#17251E] shadow-inner cinematic-img-container">
                    {service.type === "video" && service.videoSrc ? (
                      <>
                        <video
                          src={service.videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 pointer-events-none select-none"
                        />
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#17251E]/80 backdrop-blur-sm text-[#F5F5DC] text-[9px] font-label-caps tracking-widest uppercase rounded-xs shadow-md flex items-center gap-1 font-semibold pointer-events-none border border-[#F5F5DC]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                          <span>CLINICAL REEL</span>
                        </div>
                      </>
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    )}
                  </div>

                  {/* Specialty Number & Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-lg text-[#C9A227] font-semibold">
                      {service.num}
                    </span>
                    <span className="font-label-caps text-[10px] text-[#657A6A] tracking-[0.2em] uppercase font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Large Treatment Title */}
                  <h3 className="font-display text-[22px] sm:text-[25px] text-[#17251E] mb-3 font-normal leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-body-md text-[14px] text-[#1C3329]/90 leading-relaxed font-light mb-6 flex-grow">
                    {service.desc}
                  </p>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-[#17251E]/15 flex items-center justify-between">
                  <Link
                    href={`/book-consultation?treatment=${service.title.toLowerCase().replace(/ /g, "-")}`}
                    className="font-button text-[11px] tracking-[0.15em] uppercase text-[#17251E] font-semibold flex items-center gap-2 group-hover:text-[#C9A227] transition-colors"
                  >
                    <span>INQUIRE</span>
                    <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:translate-x-1.5">
                      east
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

