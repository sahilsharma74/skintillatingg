export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  credentials: string[];
  bio: string;
  category: "MEDICAL EXPERTISE" | "CLINICAL TEAM" | "PATIENT EXPERIENCE";
  displayOrder: number;
  objectPosition?: string;
  isFeatured?: boolean;
  status?: "published" | "draft";
}

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-akshaya-jain",
    name: "Dr. Akshaya Jain",
    role: "FOUNDER & CHIEF AESTHETIC MENTOR",
    specialization: "Aesthetic Medicine • Advanced Skin & Hair Solutions",
    image: "/images/dr-akshaya-jain.webp",
    credentials: [
      "13+ Years Clinical Practice",
      "3 National Excellence Awards",
      "Celebrity Hair & GFC Specialist",
    ],
    bio: "With over a decade of experience in aesthetic medicine, Dr. Akshaya Jain has dedicated her practice to advanced skin, hair and body care solutions. Her vision for Skintillatingg is to combine science, technology and artistry to deliver natural, long-lasting results and a transformative experience for every client.",
    category: "MEDICAL EXPERTISE",
    displayOrder: 1,
    objectPosition: "center top",
    isFeatured: true,
    status: "published",
  },
  {
    id: "mrs-amruta-kangle",
    name: "Mrs. Amruta N.C. Kangle",
    role: "FOUNDER & BEAUTY EDUCATION PROFESSIONAL",
    specialization: "Beauty Culture • Aesthetics & Hair Design • Professional Training",
    image: "/images/mom.webp",
    credentials: [
      "Beauty & Aesthetics Educator",
      "Beauty Culture & Hair Design Expert",
      "Professional Training Specialist",
    ],
    bio: "Experienced beauty and aesthetics educator with extensive expertise in beauty culture, aesthetics, beauty therapy, hair design, and professional training.",
    category: "CLINICAL TEAM",
    displayOrder: 2,
    objectPosition: "center 30%",
    status: "published",
  },
  {
    id: "sangita-kabrabam",
    name: "Sangita Kabrabam",
    role: "SENIOR SKIN & HAIR THERAPIST | TRAINER & MENTOR",
    specialization: "Skin & Hair Therapy • Staff Training & Mentorship",
    image: "/images/sangita.webp",
    credentials: [
      "10+ Years Skin & Hair Therapy",
      "Senior Trainer & Mentor",
      "Skincity & Skintillatingg",
    ],
    bio: "With 10 years of experience as a Skin and Hair Therapist, I have worked with reputed organizations such as, Skincity, and Skintillatingg.\n\nI began my career as a therapist and gradually progressed into senior roles, taking on responsibilities as a trainer and guide. For the past three years at Skintillatingg, I have been mentoring and training therapists while contributing my expertise to skin and hair care services.",
    category: "CLINICAL TEAM",
    displayOrder: 3,
    objectPosition: "center 15%",
    status: "published",
  },
];

export const TEAM_MEMBERS = INITIAL_TEAM_MEMBERS;
