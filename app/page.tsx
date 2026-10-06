import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesGrid from "@/components/ServicesGrid";
import MedicalExpertise from "@/components/MedicalExpertise";
import Portfolio from "@/components/Portfolio";
import VideoSection from "@/components/VideoSection";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import QuoteGenerator from "@/components/QuoteGenerator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <MedicalExpertise />
      <Portfolio />
      <VideoSection />
      <Partners />
      {/* <Testimonials /> */}
      <FinalCta />
      {/* <QuoteGenerator /> */}
    </>
  );
}