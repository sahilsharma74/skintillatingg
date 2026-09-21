import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Koregaon Park",
  description: "Get in touch with Dr. Akshaya Jain's clinic in Koregaon Park, Pune. Find our location, clinic timings, and contact details.",
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
