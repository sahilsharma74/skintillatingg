import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Schedule your personalized diagnostic consultation with Dr. Akshaya Jain to curate a bespoke therapeutic plan for your skin and hair.",
  alternates: {
    canonical: '/book-consultation',
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
