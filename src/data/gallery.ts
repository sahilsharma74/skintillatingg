export interface GalleryItem {
  id: string;
  number: string;
  category: "CLINIC" | "TRAINING" | "TECHNOLOGY" | "PEOPLE" | "EDUCATION" | "MOMENTS" | "PRECISION" | "SANCTUARY";
  title: string;
  subtitle: string;
  image: string; // Left empty for real images to be added later
  aspect: "portrait" | "landscape" | "square" | "tall-portrait" | "wide-landscape" | "floating";
  colSpanDesktop: string; // Tailwind grid span or layout class for desktop
  colSpanTablet: string;  // Tailwind grid span for tablet
  colSpanMobile: string;  // Tailwind grid span for mobile
  accentColor: string;    // Subtle tonal background for placeholder
  overlapType?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "floating-badge" | "offset-number";
}

export const GALLERY_CATEGORIES = [
  "ALL",
  "CLINIC",
  "TRAINING",
  "TECHNOLOGY",
  "PEOPLE",
  "EDUCATION",
  "MOMENTS",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  // CHAPTER 1: CLINICAL SANCTUARY & ATMOSPHERE
  {
    id: "gallery-01",
    number: "01",
    category: "CLINIC",
    title: "Sanctuary Architecture",
    subtitle: "Koregaon Park Practice • Main Atrium",
    image: "",
    aspect: "tall-portrait",
    colSpanDesktop: "lg:col-span-7",
    colSpanTablet: "md:col-span-6",
    colSpanMobile: "col-span-12",
    accentColor: "#17251E",
    overlapType: "offset-number",
  },
  {
    id: "gallery-02",
    number: "02",
    category: "SANCTUARY",
    title: "Treatment Room Quietude",
    subtitle: "Private Clinical Suite",
    image: "",
    aspect: "landscape",
    colSpanDesktop: "lg:col-span-5",
    colSpanTablet: "md:col-span-6",
    colSpanMobile: "col-span-12",
    accentColor: "#1C3329",
  },
  {
    id: "gallery-03",
    number: "03",
    category: "PRECISION",
    title: "Micro-Aesthetic Details",
    subtitle: "Sterile Preparation & Equipment",
    image: "",
    aspect: "square",
    colSpanDesktop: "lg:col-span-5",
    colSpanTablet: "md:col-span-6",
    colSpanMobile: "col-span-12",
    accentColor: "#252522",
    overlapType: "floating-badge",
  },

  // CINEMATIC BREAK 1
  {
    id: "gallery-04",
    number: "04",
    category: "TECHNOLOGY",
    title: "High-Frequency Laser Modality",
    subtitle: "Advanced Photothermal Systems",
    image: "",
    aspect: "wide-landscape",
    colSpanDesktop: "lg:col-span-12",
    colSpanTablet: "md:col-span-12",
    colSpanMobile: "col-span-12",
    accentColor: "#3F463A",
    overlapType: "bottom-left",
  },

  // CHAPTER 2: EDUCATION & PEOPLE
  {
    id: "gallery-05",
    number: "05",
    category: "TRAINING",
    title: "Hands-on Clinical Mastery",
    subtitle: "CIATN Training Academy Fellowship",
    image: "",
    aspect: "portrait",
    colSpanDesktop: "lg:col-span-4",
    colSpanTablet: "md:col-span-6",
    colSpanMobile: "col-span-12",
    accentColor: "#1C3329",
  },
  {
    id: "gallery-06",
    number: "06",
    category: "PEOPLE",
    title: "Dr. Akshaya Jain in Consultation",
    subtitle: "Personalized Patient Assessment",
    image: "",
    aspect: "tall-portrait",
    colSpanDesktop: "lg:col-span-5",
    colSpanTablet: "md:col-span-6",
    colSpanMobile: "col-span-12",
    accentColor: "#59604F",
    overlapType: "top-right",
  },
  {
    id: "gallery-07",
    number: "07",
    category: "MOMENTS",
    title: "Spontaneous Practice Interaction",
    subtitle: "Medical Faculty & Mentorship",
    image: "",
    aspect: "floating",
    colSpanDesktop: "lg:col-span-3",
    colSpanTablet: "md:col-span-12",
    colSpanMobile: "col-span-12",
    accentColor: "#765F4D",
  },

  // CHAPTER 3: ADVANCED MODALITIES
  {
    id: "gallery-08",
    number: "08",
    category: "TECHNOLOGY",
    title: "Ultrasound Imaging Diagnostics",
    subtitle: "Sub-Dermal Tissue Layer Analysis",
    image: "",
    aspect: "landscape",
    colSpanDesktop: "lg:col-span-8",
    colSpanTablet: "md:col-span-8",
    colSpanMobile: "col-span-12",
    accentColor: "#17251E",
    overlapType: "bottom-right",
  },
  {
    id: "gallery-09",
    number: "09",
    category: "EDUCATION",
    title: "Anatomy & Injection Technique",
    subtitle: "Facial Structural Topography Seminar",
    image: "",
    aspect: "portrait",
    colSpanDesktop: "lg:col-span-4",
    colSpanTablet: "md:col-span-4",
    colSpanMobile: "col-span-12",
    accentColor: "#3F463A",
  },

  // CHAPTER 4: PEOPLE & GRADUATES
  {
    id: "gallery-10",
    number: "10",
    category: "PEOPLE",
    title: "CIATN Graduate Specialists",
    subtitle: "Fellowship Convocation Cohort",
    image: "",
    aspect: "wide-landscape",
    colSpanDesktop: "lg:col-span-7",
    colSpanTablet: "md:col-span-7",
    colSpanMobile: "col-span-12",
    accentColor: "#252522",
  },
  {
    id: "gallery-11",
    number: "11",
    category: "MOMENTS",
    title: "Behind the Scenes Editorial",
    subtitle: "Clinical Documentation & Research",
    image: "",
    aspect: "square",
    colSpanDesktop: "lg:col-span-5",
    colSpanTablet: "md:col-span-5",
    colSpanMobile: "col-span-12",
    accentColor: "#A9674F",
    overlapType: "floating-badge",
  },
];
