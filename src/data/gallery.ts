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
    subtitle: "Dr. Akshaya Jain Sunset Window Reflection",
    image: "/images/gallery/Screenshot 2026-08-30 183431.png",
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
    subtitle: "Skintillatingg Practice • Main Atrium & Glass Branding",
    image: "/images/gallery/Screenshot 2026-08-30 182111.png",
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
    subtitle: "Rotary Vocational Excellence & Womanhood Awards",
    image: "/images/gallery/Screenshot 2026-08-30 182159.png",
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
    subtitle: "Warm Aesthetics & Frosted Glass Architecture",
    image: "/images/gallery/Screenshot 2026-08-30 182243.png",
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
    subtitle: "Private Therapeutic Suite",
    image: "/images/gallery/Screenshot 2026-08-30 182504.png",
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
    subtitle: "Ergonomic Treatment Suite Bed & Mirror Arrays",
    image: "/images/gallery/Screenshot 2026-08-30 182409.png",
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
    subtitle: "Clinical Countertops & Precision Product Arrays",
    image: "/images/gallery/Screenshot 2026-08-30 182533.png",
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
    subtitle: "Where medical precision meets architectural serenity",
    image: "/images/gallery/Screenshot 2026-08-30 182243.png",
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
    subtitle: "Operating High-Precision Laser & Modality Systems",
    image: "/images/gallery/Screenshot 2026-08-30 182952.png",
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
    subtitle: "Dr. Akshaya Jain Office & Academic Credentials",
    image: "/images/gallery/Screenshot 2026-08-30 182435.png",
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
    subtitle: "Non-Invasive Dermal Resurfacing & Safety Protocols",
    image: "/images/gallery/Screenshot 2026-08-30 182650.png",
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
    subtitle: "High-Resolution Tissue & Dermal Analysis",
    image: "/images/gallery/Screenshot 2026-08-30 183323.png",
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
    subtitle: "Pre-Treatment Chilling & Skin Soothing Gel",
    image: "/images/gallery/Screenshot 2026-08-30 182623.png",
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
    subtitle: "Cellular-Level Active Delivery Systems",
    image: "/images/gallery/Screenshot 2026-08-30 183347.png",
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
    subtitle: "Certificated medical-grade technology operated by trained specialists",
    image: "/images/gallery/Screenshot 2026-08-30 182650.png",
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
    subtitle: "Dr. Akshaya Jain Demonstrating Live Patient Technique",
    image: "/images/gallery/Screenshot 2026-08-30 182930.png",
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
    subtitle: "Live Clinical Demonstration with Celebrity Client",
    image: "/images/gallery/Screenshot 2026-08-30 183404.png",
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
    subtitle: "Supervised Practitioner Training at CIATN Academy",
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
    subtitle: "Laser Application for Pigmentation & Texture",
    image: "/images/gallery/Screenshot 2026-08-30 183140.png",
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
    subtitle: "Dr. Akshaya Jain with Actor Sourabh Gokhale",
    image: "/images/gallery/Screenshot 2026-08-30 183116.png",
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
    subtitle: "Doctor Practitioner Fellowship Cohort",
    image: "/images/gallery/Screenshot 2026-08-30 182435.png",
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
    subtitle: "Rotary Vocational Excellence & Womanhood Awards",
    image: "/images/gallery/Screenshot 2026-08-30 182159.png",
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
    subtitle: "Where medical precision meets architectural serenity",
    image: "/images/gallery/Screenshot 2026-08-30 182243.png",
    aspect: "full",
    objectPosition: "top center",
    gridSpan: "col-span-12 h-[380px] md:h-[560px]",
    description: "SKINTILLATINGG • WHERE SCIENCE MEETS THE ART OF BEAUTY"
  }
];

