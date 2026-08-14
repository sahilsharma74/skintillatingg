import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import EditorialReelsSection from "@/components/EditorialReelsSection";
import CelebrityTestimonialsSection from "@/components/CelebrityTestimonialsSection";
import EditorialIntro from "@/components/EditorialIntro";
import CelebrityReviewsSection from "@/components/CelebrityReviewsSection";
import SanctuarySection from "@/components/SanctuarySection";
import ServicesBento from "@/components/ServicesBento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsSection />
      <EditorialReelsSection />
      <CelebrityTestimonialsSection />
      <EditorialIntro />
      <CelebrityReviewsSection />
      <SanctuarySection />
      <ServicesBento />
      <Footer />
    </main>
  );
}
