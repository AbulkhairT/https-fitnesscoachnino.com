import { SITE, telHref, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function CTASection() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-[2.75rem] md:leading-[1.08]">
          If you’re serious about a real transformation, start here.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          Book your complimentary assessment. We’ll map goals, training
          history, and the fastest path to measurable progress.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-9 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-white/90"
          >
            {CTA.apply}
          </a>
          <a
            href={smsHref(
              `Hi — I'd like to apply for coaching with ${SITE.name}.`
            )}
            className="inline-flex rounded-full border border-white/35 px-9 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
          >
            {CTA.message}
          </a>
          <a
            href={telHref()}
            className="inline-flex rounded-full border border-white/35 px-9 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
          >
            {CTA.call} {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
