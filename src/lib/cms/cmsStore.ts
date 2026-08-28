import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data", "cms_storage");

export interface SectionContent {
  id: string;
  name: string;
  title?: string;
  subtitle?: string;
  description?: string;
  label?: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
  videoUrl?: string;
  videoPoster?: string;
  buttonText?: string;
  buttonUrl?: string;
  linkText?: string;
  linkUrl?: string;
  isVisible: boolean;
  order: number;
  extraData?: Record<string, any>;
}

export interface PageData {
  id: string; // 'home', 'journey', 'treatments', 'technology', 'training', 'career', 'team', 'contact', 'book-consultation'
  name: string;
  slug: string;
  status: "Draft" | "Published";
  lastPublished?: string;
  sections: SectionContent[];
}

export interface MediaItem {
  id: string;
  filename: string;
  url: string;
  type: "image" | "video";
  category: "Home" | "Treatments" | "Technology" | "Training" | "Career" | "Team" | "Clinic" | "General";
  size?: number;
  uploadedAt: string;
}

export interface SiteSettings {
  siteTitle: string;
  metaDescription: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  logoUrl: string;
  faviconUrl: string;
  socials: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    youtube?: string;
  };
}

export interface RevertVersion {
  timestamp: string;
  author: string;
  pageId: string;
  data: PageData;
}

// Ensure Storage Directory Exists
function ensureDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// File Paths
const PAGES_FILE = path.join(DATA_DIR, "pages.json");
const MEDIA_FILE = path.join(DATA_DIR, "media.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const REVERT_FILE = path.join(DATA_DIR, "versions.json");

/**
 * Initial Seed Data Generator
 */
function getInitialPagesData(): Record<string, PageData> {
  return {
    home: {
      id: "home",
      name: "Home",
      slug: "/",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Hero Section",
          label: "DR. AKSHAYA JAIN",
          title: "Medical Rejuvenation & Cosmetic Aesthetics",
          description: "Uniting dermatological rigour with bespoke non-surgical aesthetics.",
          image: "/images/hero-bg.jpg",
          buttonText: "BOOK CONSULTATION",
          buttonUrl: "/book-consultation",
          isVisible: true,
          order: 1,
        },
        {
          id: "stats",
          name: "Clinical Statistics",
          title: "Excellence in Numbers",
          description: "13+ Years Practice • 10,000+ Patient Transformations • 3 National Awards",
          isVisible: true,
          order: 2,
        },
        {
          id: "practice_highlights",
          name: "Inside the Clinic Video Reel",
          label: "CLINIC",
          title: "Inside the Skintillatingg Clinic",
          videoUrl: "/videos/inside the skintillatingg clinic.mp4",
          isVisible: true,
          order: 3,
        },
        {
          id: "editorial_intro",
          name: "Editorial Introduction",
          label: "THE SKINTILLATINGG PHILOSOPHY",
          title: "Precision in Practice. Excellence in Every Detail.",
          description: "A sanctuary dedicated to skin health, hair restoration, and non-surgical facial sculpting.",
          isVisible: true,
          order: 4,
        },
        {
          id: "celebrity_reviews",
          name: "Celebrity Reviews & Endorsements",
          title: "Client Testimonials & Press",
          isVisible: true,
          order: 5,
        },
        {
          id: "sanctuary",
          name: "Koregaon Park Sanctuary",
          title: "Flagship Clinic",
          description: "State-of-the-art Pune sanctuary with FDA-approved technology.",
          image: "/images/sanctuary-exterior.jpg",
          isVisible: true,
          order: 6,
        },
        {
          id: "services_bento",
          name: "Specialized Therapies Bento",
          title: "Clinical Services",
          isVisible: true,
          order: 7,
        },
      ],
    },
    journey: {
      id: "journey",
      name: "Our Journey",
      slug: "/journey",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Journey Hero",
          label: "OUR STORY",
          title: "The Skintillatingg Vision",
          description: "Building Pune's premier medical-aesthetic clinic.",
          isVisible: true,
          order: 1,
        },
        {
          id: "philosophy",
          name: "Clinical Philosophy",
          title: "Dermatological Rigour & Natural Results",
          isVisible: true,
          order: 2,
        },
      ],
    },
    treatments: {
      id: "treatments",
      name: "Treatments Catalogue",
      slug: "/treatments",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Catalogue Hero",
          label: "CLINICAL SERVICES",
          title: "Treatment Catalogue",
          description: "Explore evidence-based cosmetic dermatology and specialized hair treatments.",
          isVisible: true,
          order: 1,
        },
      ],
    },
    technology: {
      id: "technology",
      name: "Technology & Equipment",
      slug: "/technology",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Technology Hero",
          label: "CIATN ECOSYSTEM",
          title: "Advanced Clinical Technology",
          description: "FDA-approved laser systems and precision dermal delivery platforms.",
          isVisible: true,
          order: 1,
        },
      ],
    },
    training: {
      id: "training",
      name: "Training & Education",
      slug: "/training",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Training Hero",
          label: "CIATN ACADEMY",
          title: "Clinical Aesthetic Training",
          description: "Hands-on physician and therapist training in aesthetic procedures.",
          image: "/images/rg.avif",
          isVisible: true,
          order: 1,
        },
      ],
    },
    career: {
      id: "career",
      name: "Career & Culture",
      slug: "/career",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Career Hero",
          label: "JOIN OUR PRACTICE",
          title: "Careers at Skintillatingg",
          description: "Join an elite team of dermatologists, therapists, and concierge specialists.",
          isVisible: true,
          order: 1,
        },
      ],
    },
    team: {
      id: "team",
      name: "Team Directory",
      slug: "/team",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Team Hero",
          label: "THE PEOPLE BEHIND THE PRACTICE",
          title: "Meet the Team",
          description: "Experienced professionals united by precision and clinical care.",
          isVisible: true,
          order: 1,
        },
      ],
    },
    contact: {
      id: "contact",
      name: "Contact & Location",
      slug: "/contact",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Contact Hero",
          label: "PRACTICE LOCATION",
          title: "Contact & Appointments",
          description: "Koregaon Park & Boat Club Road Sanctuary, Pune.",
          isVisible: true,
          order: 1,
        },
      ],
    },
    "book-consultation": {
      id: "book-consultation",
      name: "Book Consultation",
      slug: "/book-consultation",
      status: "Published",
      lastPublished: new Date().toISOString(),
      sections: [
        {
          id: "hero",
          name: "Booking Hero",
          label: "PERSONALIZED CARE",
          title: "Schedule Your Consultation",
          description: "Private consultation with Dr. Akshaya Jain or clinical specialist.",
          isVisible: true,
          order: 1,
        },
      ],
    },
  };
}

function getInitialSettingsData(): SiteSettings {
  return {
    siteTitle: "Skintillatingg | Dr. Akshaya Jain Cosmo • Tricho Clinic",
    metaDescription: "Premier aesthetic cosmetology, trichology, and therapeutic skin rejuvenation clinic in Pune led by award-winning Dr. Akshaya Jain.",
    phoneNumber: "8669813636",
    emailAddress: "info@skintillatingg.com",
    address: "Koregaon Park / Boat Club Road, Pune, Maharashtra 411001",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5IT4xEX-nvIObGYulKr08O8x4bOuSASpr56qk65b6U9022MEjcZvRcqb0CKERo1tP4B1J9WA4oRGLCSjAg6KALbhwDgcSsdZNiusRA7HDmBijlJYhhGL8Cr5lPLR85NIlzPf0Hxhh1ssPAdrnx91V4oj2xI8hOWHia1uHuIifMt92W7Q--2makgCx7JZOKjEJ6G95GfbUQ0DxZWIRX_rH7hP00kA1M-teY_CBlB1U6HqgR6kRS-HIBz8h1nOdhilV",
    faviconUrl: "/skintillatingg-favicon.svg",
    socials: {
      instagram: "https://instagram.com/skintillatingg",
      whatsapp: "https://wa.me/918669813636",
    },
  };
}

function getInitialMediaData(): MediaItem[] {
  return [
    {
      id: "m-1",
      filename: "inside the skintillatingg clinic.mp4",
      url: "/videos/inside the skintillatingg clinic.mp4",
      type: "video",
      category: "Clinic",
      uploadedAt: new Date().toISOString(),
    },
    {
      id: "m-2",
      filename: "dr-akshaya-jain.jpg",
      url: "/images/dr-akshaya-jain.jpg",
      type: "image",
      category: "Team",
      uploadedAt: new Date().toISOString(),
    },
    {
      id: "m-3",
      filename: "rg.avif",
      url: "/images/rg.avif",
      type: "image",
      category: "Training",
      uploadedAt: new Date().toISOString(),
    },
    {
      id: "m-4",
      filename: "booster shots.mp4",
      url: "/videos/booster shots.mp4",
      type: "video",
      category: "Treatments",
      uploadedAt: new Date().toISOString(),
    },
  ];
}

/**
 * Read Pages Data
 */
export function getPagesStore(): Record<string, PageData> {
  ensureDirectory();
  if (!fs.existsSync(PAGES_FILE)) {
    const initial = getInitialPagesData();
    fs.writeFileSync(PAGES_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  try {
    const raw = fs.readFileSync(PAGES_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return getInitialPagesData();
  }
}

/**
 * Save Page Draft / Updates
 */
export function savePageData(pageId: string, updatedPage: PageData): void {
  ensureDirectory();
  const pages = getPagesStore();
  pages[pageId] = updatedPage;
  fs.writeFileSync(PAGES_FILE, JSON.stringify(pages, null, 2));
}

/**
 * Publish Page Data
 */
export function publishPageData(pageId: string, author = "Admin"): PageData {
  ensureDirectory();
  const pages = getPagesStore();
  const page = pages[pageId];
  if (!page) throw new Error("Page not found");

  // Save current version for reversion
  saveVersionBackup(pageId, page, author);

  page.status = "Published";
  page.lastPublished = new Date().toISOString();
  pages[pageId] = page;
  fs.writeFileSync(PAGES_FILE, JSON.stringify(pages, null, 2));
  return page;
}

/**
 * Revert Page to Previous Version
 */
export function revertPageVersion(pageId: string): PageData | null {
  ensureDirectory();
  if (!fs.existsSync(REVERT_FILE)) return null;

  try {
    const raw = fs.readFileSync(REVERT_FILE, "utf-8");
    const versions: RevertVersion[] = JSON.parse(raw);
    const lastVersion = versions.filter((v) => v.pageId === pageId).pop();

    if (!lastVersion) return null;

    savePageData(pageId, lastVersion.data);
    return lastVersion.data;
  } catch {
    return null;
  }
}

/**
 * Save Version Backup
 */
function saveVersionBackup(pageId: string, pageData: PageData, author: string) {
  ensureDirectory();
  let versions: RevertVersion[] = [];
  if (fs.existsSync(REVERT_FILE)) {
    try {
      versions = JSON.parse(fs.readFileSync(REVERT_FILE, "utf-8"));
    } catch {}
  }

  versions.push({
    timestamp: new Date().toISOString(),
    author,
    pageId,
    data: JSON.parse(JSON.stringify(pageData)),
  });

  // Keep last 20 versions max
  if (versions.length > 20) {
    versions = versions.slice(-20);
  }

  fs.writeFileSync(REVERT_FILE, JSON.stringify(versions, null, 2));
}

/**
 * Read Media Library Data
 */
export function getMediaStore(): MediaItem[] {
  ensureDirectory();
  if (!fs.existsSync(MEDIA_FILE)) {
    const initial = getInitialMediaData();
    fs.writeFileSync(MEDIA_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(MEDIA_FILE, "utf-8"));
  } catch {
    return getInitialMediaData();
  }
}

/**
 * Add Media Asset
 */
export function addMediaItem(item: MediaItem): void {
  ensureDirectory();
  const media = getMediaStore();
  media.unshift(item);
  fs.writeFileSync(MEDIA_FILE, JSON.stringify(media, null, 2));
}

/**
 * Read Site Settings
 */
export function getSettingsStore(): SiteSettings {
  ensureDirectory();
  if (!fs.existsSync(SETTINGS_FILE)) {
    const initial = getInitialSettingsData();
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf-8"));
  } catch {
    return getInitialSettingsData();
  }
}

/**
 * Update Site Settings
 */
export function updateSettingsStore(settings: SiteSettings): void {
  ensureDirectory();
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
}
