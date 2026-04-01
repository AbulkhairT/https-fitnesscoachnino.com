import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment options",
  description: `Payment options at ${site.name}.`,
};

export default function PaymentPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/new-patient" className="text-sm text-[var(--accent-strong)]">
          ← New patient center
        </Link>
        <h1 className="font-display mt-6 text-4xl">Payment options</h1>
        <p className="mt-8 text-[var(--muted-foreground)]">
          We accept major payment methods and work with many insurance plans.
          Coverage varies — our team can help you understand benefits before
          treatment when possible.
        </p>
        <p className="mt-6 text-[var(--muted-foreground)]">
          Promotional web offers may exclude insurance billing; see the{" "}
          <Link href="/special-offer" className="font-medium text-[var(--accent-strong)]">
            special offer
          </Link>{" "}
          page for current terms.
        </p>
        <a
          href={`tel:${site.phoneTel}`}
          className="mt-10 inline-flex rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
        >
          Call {site.phoneDisplay}
        </a>
      </Container>
    </div>
  );
}
