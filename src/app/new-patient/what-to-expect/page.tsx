import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What to expect",
  description: `What to expect at ${site.name}.`,
};

export default function WhatToExpectPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/new-patient" className="text-sm text-[var(--accent-strong)]">
          ← New patient center
        </Link>
        <h1 className="font-display mt-6 text-4xl">What to expect</h1>
        <p className="mt-8 text-[var(--muted-foreground)]">
          Visits follow a simple rhythm: listen, examine, explain, and — when
          appropriate — adjust. You will always know why we recommend a
          treatment before it happens.
        </p>
        <p className="mt-6 text-[var(--muted-foreground)]">
          Care typically moves through relief, corrective, and wellness phases.
          Frequency and techniques change as your body responds — we do not use
          a one-size plan for everyone.
        </p>
        <Link href="/new-patient/first-visit" className="mt-10 inline-block font-semibold text-[var(--accent-strong)]">
          Your first visit →
        </Link>
      </Container>
    </div>
  );
}
