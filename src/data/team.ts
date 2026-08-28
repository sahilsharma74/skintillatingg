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
    image: "/images/dr-akshaya-jain.jpg",
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
    id: "sangita-kabrabam",
    name: "Sangita Kabrabam",
    role: "SENIOR SKIN & HAIR THERAPIST | TRAINER & MENTOR",
    specialization: "Skin & Hair Therapy • Staff Training & Mentorship",
    image: "/images/profile_picture.jpg",
    credentials: [
      "10+ Years Skin & Hair Therapy",
      "Senior Trainer & Mentor",
      "Ex-Kaya, Skincity & Skintillatingg",
    ],
    bio: "With 10 years of experience as a Skin and Hair Therapist, I have worked with reputed organizations such as Kaya, Skincity, and Skintillatingg.\n\nI began my career as a therapist and gradually progressed into senior roles, taking on responsibilities as a trainer and guide. For the past three years at Skintillatingg, I have been mentoring and training therapists while contributing my expertise to skin and hair care services.",
    category: "CLINICAL TEAM",
    displayOrder: 2,
    objectPosition: "center top",
    status: "published",
  },
  {
    id: "team-member-3",
    name: "",
    role: "",
    specialization: "",
    image: "",
    credentials: [],
    bio: "",
    category: "CLINICAL TEAM",
    displayOrder: 3,
    status: "published",
  },
];

export const TEAM_MEMBERS = INITIAL_TEAM_MEMBERS;
