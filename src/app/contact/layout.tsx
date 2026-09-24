import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Skintillatingg Clinic",
  description: "Get in touch with Dr. Akshaya Jain's clinic at Opp. to Clover Infotech, Pune. Find our location, clinic timings, and contact details.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
