import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { Container } from "@/components/ui/Container";
import { serviceHighlights, servicePillars } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { doctorPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-12">
        <Container>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-[var(--muted-foreground)]">
            {serviceHighlights.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Intrinsic sizing — no forced aspect box (avoids perceived horizontal stretch) */}
            <figure className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px] rounded-2xl border border-[var(--border)] bg-[#eef1ef] p-3 sm:p-4">
                <Image
                  src={doctorPhoto}
                  alt={site.doctor.name}
                  width={1023}
                  height={1023}
                  className="h-auto w-full rounded-xl object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </figure>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                Your chiropractor
              </p>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl">
                {site.doctor.name}
              </h2>
              <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">
                Chiropractic care is about more than making pain disappear — it
                is understanding your body and supporting your nervous system
                through precise, modern care rooted in respect for how you heal.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                Whether you are recovering from an accident, managing chronic
                tension, or pursuing better energy for your family, we take time
                to explain findings and build a plan that fits your goals.
              </p>
              <Link
                href="/about/dr-barbaro"
                className="mt-8 inline-flex text-sm font-semibold text-[var(--accent-strong)]"
              >
                Meet {site.doctor.name} →
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[var(--surface-2)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
              How we work
            </p>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl">
              Three phases of care
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {servicePillars.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
              >
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {p.summary}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--accent-strong)]"
            >
              Explore services →
            </Link>
          </p>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-center text-3xl sm:text-4xl">
            What patients say
          </h2>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10">
            {testimonials.map((t) => (
              <blockquote key={t.name}>
                <p className="text-lg leading-relaxed text-[var(--foreground)]">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-sm font-medium text-[var(--muted-foreground)]">
                  — {t.name}, {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/testimonials" className="text-sm font-semibold text-[var(--accent-strong)]">
              More testimonials →
            </Link>
          </p>
        </Container>
      </section>
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl">Ready to start?</h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Call or request your appointment online today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
            >
              Hours &amp; location
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
