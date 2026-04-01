import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Massage therapy",
  description: `Therapeutic massage at ${site.name}, Naples, FL. ${site.massageLicense}.`,
};

export default function MassagePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Massage therapy</h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Licensed massage · {site.massageLicense}
        </p>
        <p className="mt-8 leading-relaxed text-[var(--muted-foreground)]">
          In harmony with chiropractic, we offer therapeutic massage to ease
          muscle tension, improve circulation, and support the same healing
          process your adjustments are designed to encourage.
        </p>
        <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">
          Sessions are tailored to comfort and clinical goals — whether you are
          preparing for an adjustment, recovering from strain, or simply need
          relief from tight shoulders and low back.
        </p>
        <a
          href={`tel:${site.phoneTel}`}
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Call {site.phoneDisplay} to book
        </a>
      </Container>
    </div>
  );
}
