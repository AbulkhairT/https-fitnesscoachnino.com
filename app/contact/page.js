import { PageShell } from "@/components/PageShell";
import { SITE, telHref, MAPS_QUERY } from "@/lib/site";
import { CTA } from "@/lib/cta";

export const metadata = {
  title: "Contact — Book Your Assessment",
  description: `Contact ${SITE.name} in ${SITE.city}, ${SITE.region}. Call ${SITE.phoneDisplay} or book online.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    MAPS_QUERY
  )}&output=embed`;
  return (
    <PageShell>
      <section className="border-b border-line bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              Book your complimentary assessment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {SITE.name} serves {SITE.areaServed}. Call or book online — we
              respond quickly.
            </p>
            <div className="mt-10 space-y-4 text-[15px]">
              <p>
                <span className="text-muted">Phone · </span>
                <a href={telHref()} className="font-semibold text-ink hover:text-accent">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-muted">Email · </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-ink hover:text-accent"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-muted">
                Location · {SITE.city}, {SITE.region} {SITE.postalCode}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                {CTA.primary}
              </a>
              <a
                href={telHref()}
                className="inline-flex rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink"
              >
                Call now
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
            <iframe
              title="Map — Naples, FL"
              src={mapSrc}
              className="h-[min(420px,70vh)] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
