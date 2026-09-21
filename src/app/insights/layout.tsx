import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Insights & Articles",
  description: "Read expert clinical insights, skincare advice, and aesthetic education from Dr. Akshaya Jain.",
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
