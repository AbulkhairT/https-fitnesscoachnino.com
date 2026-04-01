import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemTransformation } from "@/components/ProblemTransformation";
import { InlineCta } from "@/components/InlineCta";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Experience } from "@/components/Experience";
import { TransformationGrid } from "@/components/TransformationGrid";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { faqJsonLd } from "@/lib/faq";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <SiteNav />
      <Hero />
      <TrustBar />
      <ProblemTransformation />
      <InlineCta label="Ready for a plan you can repeat — not another restart?" />
      <ProgramsGrid />
      <InlineCta label="Pick a time. We’ll align the program to your goal and schedule." />
      <WhyChooseUs />
      <Experience />
      <TransformationGrid />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA />
    </>
  );
}
