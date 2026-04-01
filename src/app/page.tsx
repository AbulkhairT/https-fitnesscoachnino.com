import type { Metadata } from "next";
import { CTABand } from "@/components/home/CTABand";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { HomeHero } from "@/components/home/HomeHero";
import { LocationContactBlock } from "@/components/home/LocationContactBlock";
import { PhasesSection } from "@/components/home/PhasesSection";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesHomeGrid } from "@/components/home/ServicesHomeGrid";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { VisitExperience } from "@/components/home/VisitExperience";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ProblemSolution />
      <CTABand variant="default" />
      <ServicesHomeGrid />
      <DoctorIntroSection />
      <CTABand variant="default" />
      <WhyChooseUs />
      <VisitExperience />
      <CTABand variant="default" />
      <PhasesSection />
      <TestimonialsSection />
      <CTABand variant="strong" />
      <LocationContactBlock />
    </>
  );
}
