import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Virtual office tour",
  description: `Office tour — ${site.name}.`,
};

export default function TourPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/new-patient" className="text-sm text-[var(--accent-strong)]">
          ← New patient center
        </Link>
        <h1 className="font-display mt-6 text-4xl">Virtual office tour</h1>
        <p className="mt-8 text-[var(--muted-foreground)]">
          Take a look around our Naples office on the original site’s virtual
          tour, or stop by in person — we are proud of a space that feels
          professional and welcoming.
        </p>
        <a
          href={`${site.url}/chiropractic-office-tour.html`}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Launch tour (original site)
        </a>
      </Container>
    </div>
  );
}
