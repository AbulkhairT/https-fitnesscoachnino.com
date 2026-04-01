import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New patient center",
  description: `New patients at ${site.name} — what to expect, forms, and offers.`,
};

const links = [
  { href: "/new-patient/what-to-expect", label: "What to expect" },
  { href: "/new-patient/first-visit", label: "Your first visit" },
  { href: "/new-patient/forms", label: "New patient forms" },
  { href: "/new-patient/payment", label: "Payment options" },
  { href: "/new-patient/tour", label: "Virtual office tour" },
  { href: "/special-offer", label: "New patient web offer" },
];

export default function NewPatientPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">New patient center</h1>
        <p className="mt-8 leading-relaxed text-[var(--muted-foreground)]">
          We want your first experience to feel clear and calm. Explore the
          topics below, then call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>{" "}
          or{" "}
          <a
            href={site.external.appointment}
            className="font-medium text-[var(--accent-strong)]"
            target="_blank"
            rel="noreferrer"
          >
            request an appointment online
          </a>
          .
        </p>
        <ul className="mt-12 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 font-medium transition hover:border-[var(--accent)]"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
