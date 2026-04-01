import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `About ${site.name} — family chiropractic in Naples, FL.`,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">About us</h1>
        <p className="mt-8 leading-relaxed text-[var(--muted-foreground)]">
          {site.name} combines modern understanding of anatomy and physiology
          with a holistic view of healing. Our goal is to reduce nerve
          interference from spinal misalignment and support your body’s own
          capacity to recover — without relying on drugs as a first step.
        </p>
        <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">
          We educate patients about chiropractic and natural approaches to common
          problems so you can take an active role in your health and your
          family’s health.
        </p>
        <ul className="mt-10 space-y-4">
          <li>
            <Link href="/about/dr-barbaro" className="font-semibold text-[var(--accent-strong)]">
              Meet the chiropractor →
            </Link>
          </li>
          <li>
            <Link href="/about/staff" className="font-semibold text-[var(--accent-strong)]">
              Meet the staff →
            </Link>
          </li>
          <li>
            <Link href="/about/massage" className="font-semibold text-[var(--accent-strong)]">
              Massage therapy →
            </Link>
          </li>
          <li>
            <Link href="/services" className="font-semibold text-[var(--accent-strong)]">
              Services & techniques →
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
