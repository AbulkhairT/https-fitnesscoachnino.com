import { SITE, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function InlineCta({
  label = "Complimentary assessment · In person or virtual",
}) {
  return (
    <div className="border-b border-line bg-white px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-surface px-8 py-8 sm:flex-row sm:items-center">
        <p className="max-w-md text-sm leading-relaxed text-muted">{label}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            {CTA.primary}
          </a>
          <a
            href={smsHref(
              `Hi — quick question before I ${CTA.primary.toLowerCase()}.`
            )}
            className="inline-flex rounded-full border border-line bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-muted"
          >
            {CTA.message}
          </a>
        </div>
      </div>
    </div>
  );
}
