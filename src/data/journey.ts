export interface Milestone {
  year: string;
  title: string;
  description: string;
  category: string;
}

export interface CredentialItem {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "FOUNDING",
    title: "Establishment of Skintillatingg Clinic",
    description:
      "Dr. Akshaya Jain founded Skintillatingg Cosmo • Tricho • Therapeutic Clinic with a singular vision: uniting clinical dermatological rigour with bespoke aesthetic care.",
    category: "Clinical Vision",
  },
  {
    year: "EXCELLENCE",
    title: "National Clinical Recognition",
    description:
      "Honored with 3 National Awards for excellence in non-surgical facial aesthetic rejuvenation and evidence-backed dermatological protocols.",
    category: "Awards & Honors",
  },
  {
    year: "SPECIALIZATION",
    title: "Celebrity Hair & Trichology Pioneer",
    description:
      "Expanded specialized trichological treatments, developing proprietary Growth Factor Concentrate (GFC) and scalp mesotherapy protocols trusted by high-profile clients.",
    category: "Trichology Practice",
  },
  {
    year: "SANCTUARY",
    title: "Koregaon Park / Boat Club Road Sanctuary",
    description:
      "Opened the flagship state-of-the-art sanctuary in Pune, featuring FDA-approved laser technology, private consultation suites, and tranquil patient environments.",
    category: "Flagship Clinic",
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    title: "12+ Years Clinical Practice",
    subtitle: "Aesthetic Cosmetology & Trichology",
    description:
      "Over a decade of dedicated clinical experience in advanced skin rejuvenation, laser dermatology, and non-surgical facial enhancement.",
    tag: "Experience",
  },
  {
    title: "10,000+ Transformations",
    subtitle: "High Patient Satisfaction",
    description:
      "Delivered personalized, natural-looking therapeutic results for over 10,000 satisfied patients across India.",
    tag: "Track Record",
  },
  {
    title: "3 National Excellence Awards",
    subtitle: "Clinical Recognition",
    description:
      "Recognized nationally for medical ethics, clinical precision, and innovation in therapeutic dermatology.",
    tag: "Recognition",
  },
  {
    title: "Celebrity Hair Specialist",
    subtitle: "Advanced Trichology Protocols",
    description:
      "Sought after by public figures for discreet, high-efficacy hair density restoration and customized scalp health regimens.",
    tag: "Specialism",
  },
];
