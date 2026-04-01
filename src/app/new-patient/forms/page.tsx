import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New patient forms",
  description: `Online forms — ${site.name}.`,
};

export default function FormsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/new-patient" className="text-sm text-[var(--accent-strong)]">
          ← New patient center
        </Link>
        <h1 className="font-display mt-6 text-4xl">New patient forms</h1>
        <p className="mt-8 text-[var(--muted-foreground)]">
          Save time before your visit by completing paperwork on our secure
          host site.
        </p>
        <a
          href={site.external.onlineForms}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Open online forms
        </a>
      </Container>
    </div>
  );
}
