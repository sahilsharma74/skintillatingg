import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Protocols & Treatments",
  description: "Explore our comprehensive range of bespoke clinical protocols, aesthetic therapies, hair restoration, and laser treatments in Pune.",
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
