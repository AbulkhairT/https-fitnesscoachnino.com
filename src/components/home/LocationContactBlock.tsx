import Link from "next/link";
import { home } from "@/content/home";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function LocationContactBlock() {
  return (
    <SectionShell className="border-t border-[var(--border)] bg-[var(--background)] pb-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              {home.location.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
              {home.location.headline}
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">{home.location.subhead}</p>
            <address className="mt-8 not-italic text-base leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-block text-lg font-semibold text-[var(--accent-strong)]"
            >
              {site.phoneDisplay}
            </a>
            <div className="mt-4">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[var(--foreground)] underline-offset-4 hover:underline"
              >
                {home.location.mapCta} →
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Hours
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-8 border-b border-[var(--border)] border-dashed py-2 last:border-0">
                    <span className="text-[var(--muted-foreground)]">{h.label}</span>
                    <span>{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="inline-flex rounded-full bg-[var(--cta)] px-7 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
              >
                Book appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-[var(--border)] px-7 py-3 text-sm font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <iframe
              title={`Map — ${site.name}`}
              src={site.mapEmbedUrl}
              className="aspect-[4/5] min-h-[280px] w-full sm:aspect-[4/3] sm:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
