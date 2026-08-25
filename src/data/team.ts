export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  credentials: string[];
  bio: string;
  category: "MEDICAL EXPERTISE" | "CLINICAL TEAM" | "PATIENT EXPERIENCE";
  isFeatured?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-akshaya-jain",
    name: "Dr. Akshaya Jain",
    role: "Founder & Lead Aesthetic Physician",
    specialization: "Aesthetic Cosmetology • Trichology • Laser Dermatology",
    image: "/images/dr-akshaya-jain.jpg",
    credentials: [
      "13+ Years Clinical Practice",
      "3 National Excellence Awards",
      "Celebrity Hair & GFC Specialist",
      "10,000+ Patient Transformations",
    ],
    bio: "Dr. Akshaya Jain founded Skintillatingg Cosmo • Tricho • Therapeutic Clinic with a singular vision: uniting clinical dermatological rigour with bespoke aesthetic care. With over 13 years of dedicated clinical practice and 3 national awards, she leads the clinic in advanced non-surgical facial rejuvenation, laser dermatology, and specialized trichology.",
    category: "MEDICAL EXPERTISE",
    isFeatured: true,
  },
  {
    id: "associate-dermatologist-lead",
    name: "Senior Clinical Associate",
    role: "Cosmetology & Laser Practitioner",
    specialization: "Advanced Laser Therapies • Chemical Peels • Facial Aesthetics",
    image: "/images/rg.avif",
    credentials: [
      "Certified Laser Specialist",
      "Advanced Clinical Cosmetology",
    ],
    bio: "Specializing in precision laser skin treatments, customized therapeutic chemical peels, and clinical facial aesthetics under strict dermatological protocols.",
    category: "MEDICAL EXPERTISE",
  },
  {
    id: "lead-clinical-therapist",
    name: "Clinical Dermal Therapist",
    role: "Medi-Facial & Microneedling Specialist",
    specialization: "Hydra-Dermabrasion • Medi-Facials • Skin Barrier Repair",
    image: "/images/celebrity-woman-smiling.jpg",
    credentials: [
      "Certified Dermal Therapist",
      "Skin Barrier Repair Specialist",
    ],
    bio: "Dedicated to non-invasive dermal therapies, barrier repair medi-facials, and providing customized skin health regimens for pre and post-procedure care.",
    category: "CLINICAL TEAM",
  },
  {
    id: "patient-experience-lead",
    name: "Patient Experience Director",
    role: "Clinic Manager & Concierge Lead",
    specialization: "Patient Care Coordination • Discreet Consultation Planning",
    image: "/images/celebrity-woman-outdoor.jpg",
    credentials: [
      "Patient Care Lead",
      "Discreet Concierge Coordination",
    ],
    bio: "Ensuring every client journey from initial consultation to post-treatment follow-up is seamless, comfortable, and tailored to individual expectations.",
    category: "PATIENT EXPERIENCE",
  },
];
