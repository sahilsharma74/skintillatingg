export interface GalleryItem {
  id: string;
  sectionId: "visual-journal" | "clinic" | "people" | "technology" | "training" | "treatments" | "moments" | "final-frame";
  sectionNumber: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: "portrait" | "landscape" | "square" | "wide" | "tall" | "full";
  objectPosition: string;
  gridSpan: string; // Tailwind grid span classes for asymmetric layout
  description?: string;
}

export const GALLERY_SECTIONS = [
  { id: "visual-journal", number: "01", label: "01 / VISUAL JOURNAL", title: "Inside Skintillatingg", subtitle: "A visual collection of clinical precision, education, technology, people and moments from the Skintillatingg world." },
  { id: "clinic", number: "02", label: "02 / THE CLINIC", title: "The Clinic", subtitle: "Precision, atmosphere and care." },
  { id: "people", number: "03", label: "03 / THE PEOPLE", title: "The People Behind the Precision", subtitle: "Medical leadership, specialist practitioners, and clinical mentorship." },
  { id: "technology", number: "04", label: "04 / TECHNOLOGY", title: "Technology in Practice", subtitle: "State-of-the-art diagnostic, laser, and photothermal modalities." },
  { id: "training", number: "05", label: "05 / TRAINING", title: "Learn. Practice. Master.", subtitle: "CIATN Fellowship workshops, live clinical demonstrations, and skill development." },
  { id: "treatments", number: "06", label: "06 / TREATMENTS", title: "Precision in Practice", subtitle: "Authentic treatment moments and clinical skin transformations." },
  { id: "moments", number: "07", label: "07 / MOMENTS", title: "Moments at Skintillatingg", subtitle: "Spontaneous practice interactions, celebrity client moments, and lifestyle snapshots." },
  { id: "final-frame", number: "08", label: "08 / FINAL CINEMATIC FRAME", title: "Skintillatingg", subtitle: "Where science meets the art of beauty." },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // SECTION 01: OPENING VISUAL (Large Cinematic Opening)
  {
    id: "gallery-08-final",
    sectionId: "visual-journal",
    sectionNumber: "01",
    category: "EDITORIAL PORTRAIT",
    title: "Behind the Scenes Editorial",
    subtitle: "Dr. Akshaya Jain ",
    image: "/images/gallery/dr-akshaya-jain-editorial.webp",
    aspect: "full",
    objectPosition: "center",
    gridSpan: "col-span-12 h-[450px] md:h-[600px]",
    description: "SKINTILLATINGG • WHERE SCIENCE MEETS THE ART OF BEAUTY"
  },
  {
    id: "gallery-01",
    sectionId: "visual-journal",
    sectionNumber: "01",
    category: "CLINIC & ATRIUM",
    title: "Sanctuary Architecture",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-03.png",
    aspect: "tall",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-8 lg:col-span-8 h-[550px] md:h-[650px]"
  },
  {
    id: "gallery-01b",
    sectionId: "visual-journal",
    sectionNumber: "01",
    category: "HERITAGE & RECOGNITION",
    title: "Accolades of Excellence",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-04.png",
    aspect: "landscape",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-4 lg:col-span-4 h-[260px] md:h-[315px]"
  },

  // SECTION 02: THE CLINIC (Precision, Atmosphere and Care)
  {
    id: "gallery-02a",
    sectionId: "clinic",
    sectionNumber: "02",
    category: "PRACTICE INTERIOR",
    title: "Reception & Atrium Lounge",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-05.png",
    aspect: "wide",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-7 lg:col-span-7 h-[400px] md:h-[480px]"
  },
  {
    id: "gallery-02b",
    sectionId: "clinic",
    sectionNumber: "02",
    category: "CLINICAL SUITE",
    title: "Treatment Room Quietude",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-08.png",
    aspect: "landscape",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-5 lg:col-span-5 h-[400px] md:h-[480px]"
  },
  {
    id: "gallery-02c",
    sectionId: "clinic",
    sectionNumber: "02",
    category: "SANCTUARY",
    title: "Private Consultation Environment",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-06.png",
    aspect: "landscape",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[340px] md:h-[380px]"
  },
  {
    id: "gallery-02d",
    sectionId: "clinic",
    sectionNumber: "02",
    category: "PREPARATION SUITE",
    title: "Sterile Preparation Environment",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-09.png",
    aspect: "square",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[340px] md:h-[380px]"
  },

  // FULL-WIDTH BREAK 1
  {
    id: "gallery-break-1",
    sectionId: "clinic",
    sectionNumber: "02",
    category: "ATMOSPHERE",
    title: "Inside the Skintillatingg Sanctuary",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-05.png",
    aspect: "full",
    objectPosition: "center",
    gridSpan: "col-span-12 h-[320px] md:h-[480px]"
  },

  // SECTION 03: THE PEOPLE (The People Behind the Precision)
  {
    id: "gallery-03a",
    sectionId: "people",
    sectionNumber: "03",
    category: "FOUNDER & MEDICAL DIRECTOR",
    title: "Dr. Akshaya Jain in Practice",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-13.png",
    aspect: "tall",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[480px] md:h-[540px]",
    description: "FOUNDER & MEDICAL DIRECTOR — Guiding clinical precision and patient care."
  },
  {
    id: "gallery-03b",
    sectionId: "people",
    sectionNumber: "03",
    category: "CLINICAL MENTORSHIP",
    title: "Consultation & Mentorship Suite",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-07.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[280px] md:h-[340px]",
    description: "ACADEMIC MENTORSHIP — Training fellow practitioners in clinical mastery."
  },





  // SECTION 04: TECHNOLOGY (Technology in Practice)
  {
    id: "gallery-04a",
    sectionId: "technology",
    sectionNumber: "04",
    category: "PHOTOTHERMAL MODALITY",
    title: "High-Frequency Laser Modality",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-11.png",
    aspect: "wide",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-8 lg:col-span-8 h-[420px] md:h-[500px]"
  },
  {
    id: "gallery-04b",
    sectionId: "technology",
    sectionNumber: "04",
    category: "DIAGNOSTIC EQUIPMENT",
    title: "Diagnostic Sub-Dermal Ultrasound",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-16.png",
    aspect: "landscape",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-4 lg:col-span-4 h-[240px] md:h-[290px]"
  },
  {
    id: "gallery-04c",
    sectionId: "technology",
    sectionNumber: "04",
    category: "COOLING PROTOCOL",
    title: "Sub-Zero Dermal Preparation",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-10.png",
    aspect: "landscape",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[320px] md:h-[360px]"
  },
  {
    id: "gallery-04d",
    sectionId: "technology",
    sectionNumber: "04",
    category: "MICRO-PRECISION",
    title: "Scalp Micro-Injection Detail",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-17.png",
    aspect: "square",
    objectPosition: "center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[320px] md:h-[360px]"
  },


  // FULL-WIDTH BREAK 2
  {
    id: "gallery-break-2",
    sectionId: "technology",
    sectionNumber: "04",
    category: "PRECISION",
    title: "Medical Innovation & Advanced Modalities",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-11.png",
    aspect: "full",
    objectPosition: "center",
    gridSpan: "col-span-12 h-[340px] md:h-[480px]"
  },

  // SECTION 05: TRAINING & EDUCATION (Learn. Practice. Master.)
  {
    id: "gallery-05a",
    sectionId: "training",
    sectionNumber: "05",
    category: "FELLOWSHIP DEMONSTRATION",
    title: "Hands-on Clinical Mastery",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-12.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[380px] md:h-[460px]"
  },

  {
    id: "gallery-05c",
    sectionId: "training",
    sectionNumber: "05",
    category: "TRICHOLOGY SEMINAR",
    title: "Hair Restoration Procedure Seminar",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-18.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[380px] md:h-[460px]"
  },
  {
    id: "gallery-05d",
    sectionId: "training",
    sectionNumber: "05",
    category: "CIATN FACULTY",
    title: "Faculty Mentorship & Practical Guidance",
    subtitle: "",
    image: "/images/TECHNOLOGY TRAINING CAREER/faculty-mentorship.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-7 h-[360px] md:h-[420px]"
  },


  // SECTION 06: TREATMENTS (Precision in Practice)

  {
    id: "gallery-06c",
    sectionId: "treatments",
    sectionNumber: "06",
    category: "LASER TREATMENT",
    title: "Targeted Photothermal Procedure",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-15.png",
    aspect: "square",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-4 lg:col-span-4 h-[320px] md:h-[380px]"
  },


  // SECTION 07: MOMENTS (Moments at Skintillatingg)
  {
    id: "gallery-07a",
    sectionId: "moments",
    sectionNumber: "07",
    category: "CELEBRITY CONSULTATION",
    title: "Spontaneous Practice Interaction",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-14.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-4 h-[400px] md:h-[460px]"
  },
  {
    id: "gallery-07b",
    sectionId: "moments",
    sectionNumber: "07",
    category: "GRADUATE ACADEMY",
    title: "CIATN Graduate Specialists",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-07.png",
    aspect: "landscape",
    objectPosition: "top center",
    gridSpan: "col-span-12 md:col-span-4 h-[400px] md:h-[460px]"
  },
  {
    id: "gallery-07c",
    sectionId: "moments",
    sectionNumber: "07",
    category: "ACCOLADES",
    title: "Accolades of Excellence",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-04.png",
    aspect: "landscape",
    objectPosition: "top left",
    gridSpan: "col-span-12 md:col-span-4 h-[400px] md:h-[460px]"
  },

  // SECTION 08: FINAL CINEMATIC FRAME
  {
    id: "gallery-break-1",
    sectionId: "final-frame",
    sectionNumber: "08",
    category: "FINAL CINEMATIC FRAME",
    title: "Inside the Skintillatingg Sanctuary",
    subtitle: "",
    image: "/images/gallery/gallery-gallery-05.png",
    aspect: "full",
    objectPosition: "top center",
    gridSpan: "col-span-12 h-[380px] md:h-[560px]",
    description: "SKINTILLATINGG • WHERE SCIENCE MEETS THE ART OF BEAUTY"
  }
];

