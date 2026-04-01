import Link from "next/link";
import { SITE, telHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function ServiceConditionTemplate({
  h1,
  primaryKeyword,
  problem,
  explain,
  treatment,
  why,
  type,
}) {
  return (
    <article className="border-b border-line bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {type === "service" ? "Service" : "Condition"} · {primaryKeyword}
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          {h1}
        </h1>
        <p className="mt-6 text-sm text-muted">
          Serving {SITE.city}, {SITE.region} and surrounding areas.
        </p>

        <section className="mt-14">
          <h2 className="font-display text-xl font-medium text-ink">
            The problem
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{problem}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium text-ink">
            What this is
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{explain}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium text-ink">
            How we help
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            {treatment}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium text-ink">
            Why {SITE.name}
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">{why}</p>
        </section>

        {type === "condition" && (
          <p className="mt-10 rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
            Medical disclaimer: this page is educational and describes coaching
            approaches. It is not medical advice. Seek a qualified clinician for
            diagnosis or treatment of medical conditions.
          </p>
        )}

        <div className="mt-14 flex flex-wrap gap-3">
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
            Call {SITE.phoneDisplay}
          </a>
        </div>

        <p className="mt-10 text-sm text-muted">
          <Link href="/" className="font-medium text-accent hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </article>
  );
}
