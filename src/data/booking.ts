export interface ConsultationOption {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
}

export const CONSULTATION_OPTIONS: ConsultationOption[] = [
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    category: "Dermatology & Glow",
    description:
      "Targeted laser therapy, chemical peels, and medical facial rejuvenation for hyperpigmentation, acne scars, and skin tone leveling.",
    duration: "45 Min Consultation",
  },
  {
    id: "hair-loss-gfc",
    title: "Hair Loss & GFC",
    category: "Trichology & Scalp",
    description:
      "Trichoscopic scalp diagnostic, Growth Factor Concentrate (GFC) therapy, and customized mesotherapy for hair density restoration.",
    duration: "60 Min Consultation",
  },
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Laser Dermatology",
    description:
      "Painless FDA-approved laser hair reduction protocols for permanent reduction with integrated skin cooling technology.",
    duration: "30 Min Consultation",
  },
  {
    id: "anti-aging-botox",
    title: "Anti-Aging & Botox",
    category: "Facial Aesthetics",
    description:
      "Precision Botox micro-dosing and non-surgical facial contouring for natural expression preservation and fine line softening.",
    duration: "45 Min Consultation",
  },
  {
    id: "intimate-wellness",
    title: "Intimate Wellness",
    category: "Specialized Aesthetics",
    description:
      "Discreet, painless non-surgical intimate rejuvenation and skin tone evening in a private clinical environment.",
    duration: "45 Min Consultation",
  },
  {
    id: "general-consultation",
    title: "General Consultation",
    category: "Comprehensive Care",
    description:
      "In-depth clinical assessment with Dr. Akshaya Jain to evaluate your overall skin and hair health and formulate a bespoke regimen.",
    duration: "45 Min Consultation",
  },
];
