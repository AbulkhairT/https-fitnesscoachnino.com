import Link from "next/link";
import { SITE, telHref, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-5 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg font-medium text-ink">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.legalName}. Performance coaching and corporate wellness in{" "}
            {SITE.city}, {SITE.region} — serving {SITE.areaServed}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              {CTA.primary}
            </a>
            <a
              href={smsHref(`Hi — question about coaching with ${SITE.name}.`)}
              className="inline-flex rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink"
            >
              {CTA.message}
            </a>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <a
              href={telHref()}
              className="mt-4 block text-sm font-medium text-ink hover:text-accent"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block text-sm text-muted hover:text-ink"
            >
              {SITE.email}
            </a>
            <p className="mt-4 text-sm text-muted">
              {SITE.city}, {SITE.region} {SITE.postalCode}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </p>
            <Link
              href="/#programs"
              className="mt-4 block text-sm text-muted hover:text-ink"
            >
              Programs
            </Link>
            <Link
              href="/services/personal-training"
              className="mt-2 block text-sm text-muted hover:text-ink"
            >
              One-on-one coaching
            </Link>
            <Link
              href="/blog"
              className="mt-2 block text-sm text-muted hover:text-ink"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              className="mt-2 block text-sm text-muted hover:text-ink"
            >
              Location & map
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {SITE.legalName}
        </span>
        <span className="text-right">
          fitnesscoachnino.com · Local fitness coaching · {SITE.city},{" "}
          {SITE.region}
        </span>
      </div>
    </footer>
  );
}
