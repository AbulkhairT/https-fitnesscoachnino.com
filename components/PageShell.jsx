import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export function PageShell({ children }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
