import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey | Dr. Akshaya Jain",
  description: "Discover the story behind Skintillatingg Clinic and Dr. Akshaya Jain's commitment to clinical excellence and personalized aesthetic care.",
  alternates: {
    canonical: '/journey',
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
