import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — Naples, FL chiropractor.`,
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Contact</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Call, book online, or visit us on Goodlette Road. We will do our best
          to accommodate your schedule.
        </p>
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                Phone
              </h2>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-2 block text-2xl font-semibold text-[var(--foreground)]"
              >
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                Address
              </h2>
              <p className="mt-2 text-lg">{fullAddress()}</p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[var(--accent-strong)]"
              >
                Open in Maps →
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                Hours
              </h2>
              <ul className="mt-3 space-y-2">
                {site.hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-8 text-sm">
                    <span className="text-[var(--muted-foreground)]">{h.label}</span>
                    <span>{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/appointment"
              className="inline-flex rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
            >
              Request appointment
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <iframe
              title="Map — A Better Life Chiropractic"
              src={site.mapEmbedUrl}
              className="aspect-[4/5] min-h-[280px] w-full sm:aspect-video sm:min-h-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
