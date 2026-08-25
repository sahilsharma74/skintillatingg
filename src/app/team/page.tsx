import type { Metadata } from "next";
import TeamPageClient from "@/components/team/TeamPageClient";

export const metadata: Metadata = {
  title: "Team | Skintillatingg",
  description:
    "Meet the medical and clinical team behind Skintillatingg, bringing together aesthetic expertise, advanced technology and personalized care.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
