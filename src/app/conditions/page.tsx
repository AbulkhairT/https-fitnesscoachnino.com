import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/content/conditions";
import { Container } from "@/components/ui/Container";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions we treat",
  description: `Back pain, neck pain, sciatica, headaches, and auto injuries — chiropractic care in Naples, FL. ${site.name}, ${site.phoneDisplay}.`,
};

export default function ConditionsHubPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Conditions we treat
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
          Each page focuses on one problem people search for when they need a{" "}
          <strong className="font-medium text-[var(--foreground)]">chiropractor in Naples, FL</strong>.
          Read the overview, then book or call — we confirm every appointment personally.
        </p>
        <ul className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {conditions.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="block py-8 text-[var(--foreground)] transition hover:bg-black/[0.02] sm:-mx-4 sm:px-4"
              >
                <span className="font-display text-xl font-medium">{c.h1}</span>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{c.lead.slice(0, 140)}…</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-[var(--muted-foreground)]">
          {site.doctor.name} · {fullAddress()} ·{" "}
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--foreground)]">
            {site.phoneDisplay}
          </a>
        </p>
      </Container>
    </div>
  );
}
