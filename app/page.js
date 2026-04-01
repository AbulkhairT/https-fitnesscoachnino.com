import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { NasmCredentials } from "@/components/NasmCredentials";
import { BrandPhotoStrip } from "@/components/BrandPhotoStrip";
import { ProblemTransformation } from "@/components/ProblemTransformation";
import { InlineCta } from "@/components/InlineCta";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { MissionVision } from "@/components/MissionVision";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Experience } from "@/components/Experience";
import { TransformationGrid } from "@/components/TransformationGrid";
import { Testimonials } from "@/components/Testimonials";
import { VideoFeature } from "@/components/VideoFeature";
import { BrandGallery } from "@/components/BrandGallery";
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
      <NasmCredentials />
      <BrandPhotoStrip />
      <ProblemTransformation />
      <InlineCta label="Schedule your complimentary fitness assessment — in person or virtual." />
      <ProgramsGrid />
      <MissionVision />
      <InlineCta label="Ready to start? Book your complimentary assessment today." />
      <WhyChooseUs />
      <Experience />
      <TransformationGrid />
      <Testimonials />
      <VideoFeature />
      <BrandGallery />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA />
    </>
  );
}
