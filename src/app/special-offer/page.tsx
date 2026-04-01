import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New patient offer",
  description: site.newPatientOffer.detail,
};

export default function SpecialOfferPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">
          {site.newPatientOffer.headline}
        </h1>
        <p className="mt-6 text-2xl font-medium text-[var(--accent-strong)]">
          {site.newPatientOffer.detail}
        </p>
        <p className="mt-8 text-[var(--muted-foreground)]">
          Sign up using the scheduling link or call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--foreground)]">
            {site.phoneDisplay}
          </a>{" "}
          to take advantage of this offer, subject to availability.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {site.newPatientOffer.disclaimer}
        </p>
        <Link
          href="/appointment"
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Request appointment
        </Link>
      </Container>
    </div>
  );
}
