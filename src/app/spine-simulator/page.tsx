import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "3D spine simulator",
  description: "Interactive spine education tool.",
};

export default function SpineSimulatorPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">3D spine simulator</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Explore spinal anatomy with the interactive tool hosted on our
          original site — useful for visual learners and curious patients.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <iframe
            title="3D spine simulator"
            src={site.external.spineSimulator}
            className="min-h-[720px] w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-6 text-sm text-[var(--muted-foreground)]">
          If the embed is blocked by your browser,{" "}
          <a
            href={site.external.spineSimulator}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--accent-strong)]"
          >
            open the simulator in a new tab
          </a>
          .
        </p>
        <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-[var(--accent-strong)]">
          ← Contact
        </Link>
      </Container>
    </div>
  );
}
