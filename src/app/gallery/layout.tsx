import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinic Gallery & Transformations",
  description: "View our clinic sanctuary and real patient transformations at Skintillatingg, Pune's premier luxury aesthetic clinic.",
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
