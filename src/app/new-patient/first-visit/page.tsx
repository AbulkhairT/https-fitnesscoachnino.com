import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your first visit",
  description: `First visit to ${site.name}.`,
};

export default function FirstVisitPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/new-patient" className="text-sm text-[var(--accent-strong)]">
          ← New patient center
        </Link>
        <h1 className="font-display mt-6 text-4xl">Your first visit</h1>
        <p className="mt-8 text-[var(--muted-foreground)]">
          {site.doctor.name} will explain how chiropractic care works and
          complete a thorough evaluation. If our approach fits your needs, we
          outline a personalized plan for your condition and goals.
        </p>
        <p className="mt-6 text-[var(--muted-foreground)]">
          Bring identification, insurance cards if applicable, and any imaging
          reports you already have. Wear comfortable clothing that allows
          movement of the neck and low back.
        </p>
        <Link
          href="/appointment"
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Schedule now
        </Link>
      </Container>
    </div>
  );
}
