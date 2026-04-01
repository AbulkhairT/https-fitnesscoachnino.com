import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { serviceHighlights, servicePillars } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & techniques",
  description: `Chiropractic services at ${site.name} — Naples, FL.`,
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Services & techniques</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted-foreground)]">
          We strive to provide complete care for patients of all ages. Services
          emphasize clear communication, appropriate technique selection, and
          coordination with other providers when needed.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <li
              key={s}
              className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm"
            >
              <span className="text-[var(--accent)]">✓</span>
              {s}
            </li>
          ))}
        </ul>
        <h2 className="font-display mt-16 text-2xl">Care phases</h2>
        <div className="mt-8 space-y-8">
          {servicePillars.map((p) => (
            <section key={p.title} className="border-t border-[var(--border)] pt-8">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-2xl text-[var(--muted-foreground)]">{p.summary}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href={site.external.appointment}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
          >
            Request appointment
          </a>
          <Link href="/about/massage" className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold">
            Massage therapy
          </Link>
        </div>
      </Container>
    </div>
  );
}
