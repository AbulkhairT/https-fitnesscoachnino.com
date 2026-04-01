import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Services & techniques</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          At A Better Life Chiropractic, we take great pride in providing the
          finest chiropractic care to each and every patient. Below is an
          overview of the services offered in our Naples office — please call us
          at{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>{" "}
          if you have any questions.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <li
              key={s}
              className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm"
            >
              <span className="text-[var(--accent)]" aria-hidden>
                ✓
              </span>
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-20 space-y-20">
          {serviceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-[var(--border)] pt-16 first:border-t-0 first:pt-0"
            >
              <h2 className="font-display text-3xl tracking-tight">{section.title}</h2>
              <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="max-w-prose space-y-5 text-[var(--muted-foreground)]">
                  {section.body.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {section.image === "posture" ? (
                  <figure className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
                    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                      <Image
                        src={servicesPostureImage}
                        alt="Spinal and postural screening illustration"
                        width={1023}
                        height={1023}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 400px"
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
