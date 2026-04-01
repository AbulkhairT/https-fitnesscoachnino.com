import type { Metadata } from "next";
import { CTABand } from "@/components/home/CTABand";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSeoIntro } from "@/components/home/HomeSeoIntro";
import { HomeStaffSection } from "@/components/home/HomeStaffSection";
import { LocationContactBlock } from "@/components/home/LocationContactBlock";
import { PhasesSection } from "@/components/home/PhasesSection";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesHomeGrid } from "@/components/home/ServicesHomeGrid";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { VisitExperience } from "@/components/home/VisitExperience";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Chiropractor in Naples, FL | Back Pain, Neck Pain & Injury | A Better Life Chiropractic",
  },
  description: `Chiropractor in Naples, FL for back pain, neck pain, headaches, sciatica, and auto-injury recovery. Dr. Deanna Barbaro. Book online or call ${site.phoneDisplay}. 661 Goodlette Rd N, Ste 108.`,
  keywords: [
    "chiropractor Naples FL",
    "chiropractor near me",
    "back pain chiropractor Naples",
    "neck pain chiropractor Naples",
    "car accident chiropractor Naples",
  ],
  openGraph: {
    title: "Chiropractor in Naples, FL | A Better Life Chiropractic",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HomeHero />
      <HomeSeoIntro />
      <TrustStrip />
      <HomeStaffSection />
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
      <HomeFaq />
      <CTABand variant="strong" />
      <LocationContactBlock />
    </>
  );
}
