import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/home/CTABand";
import { serviceSections } from "@/content/service-details";
import { serviceHighlights, servicePillars } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { servicesPostureImage } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & techniques",
  description: `Chiropractic services, massage, corrective exercise, and screenings — ${site.name}, Naples, FL.`,
};

export default function ServicesPage() {
  return (
    <div className="py-20 sm:py-28 lg:py-32">
      <Container>
        <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Services & techniques
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          At A Better Life Chiropractic, we take great pride in providing the
          finest chiropractic care to each and every patient. Below is an
          overview of the services offered in our Naples office — please call us
          at{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>{" "}
          if you have any questions.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <li
              key={s}
              className="flex gap-3 rounded-xl border border-[var(--border)]/70 bg-[var(--surface)] px-5 py-4 text-sm leading-snug text-[var(--muted-foreground)]"
            >
              <span className="shrink-0 text-[var(--accent)]" aria-hidden>
                ·
              </span>
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <CTABand variant="default" />
        </div>

        <div className="mt-20 space-y-24 lg:space-y-28">
          {serviceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-[var(--border)]/80 pt-20 first:border-t-0 first:pt-0"
            >
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
                <div className="max-w-prose space-y-5 text-[var(--muted-foreground)]">
                  {section.body.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {section.image === "posture" ? (
                  <figure className="mx-auto flex shrink-0 justify-center lg:mx-0 lg:justify-end">
                    <div className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-2)]/50 p-5 sm:p-6">
                      <Image
                        src={servicesPostureImage}
                        alt="Spinal and postural screening illustration"
                        width={480}
                        height={640}
                        className="h-auto w-auto max-h-[min(52vw,420px)] max-w-[min(100%,280px)] object-contain sm:max-h-[460px] sm:max-w-[300px]"
                        sizes="300px"
                      />
                    </div>
                  </figure>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <h2 className="font-display mt-24 border-t border-[var(--border)] pt-16 text-2xl">
          Phases of care
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-[var(--muted-foreground)]">
          Your plan may move through relief, corrective, and wellness phases —
          frequency and focus change as you improve.
        </p>
        <div className="mt-10 space-y-10">
          {servicePillars.map((p) => (
            <section key={p.title}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-2xl text-[var(--muted-foreground)]">{p.summary}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
          >
            Request appointment
          </Link>
          <Link
            href="/about/massage"
            className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
          >
            Massage therapy details
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
