"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/images";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[var(--surface-2)]">
      <div className="relative w-full overflow-hidden">
        <div className="relative mx-auto h-[min(100vw,560px)] w-full bg-[#e8ebe9] md:h-[min(72vh,760px)] lg:h-[min(76vh,820px)]">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={idx !== i}
            >
              <div className="absolute inset-3 sm:inset-6 md:inset-8">
                <Image
                  src={src}
                  alt={`${site.name} — Naples chiropractic`}
                  fill
                  priority={idx === 0}
                  className="object-contain object-center"
                  sizes="100vw"
                  quality={90}
                />
              </div>
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.04] via-transparent to-black/[0.12]" />
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-[var(--accent)]" : "w-1.5 bg-[var(--muted-foreground)]/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <Container className="py-10 sm:py-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
            Naples, FL · Chiropractor
          </p>
          <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
            Welcome to {site.shortName}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            {site.tagline}.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted-foreground)]">
            Natural, drug-free support for back pain, neck pain, headaches, and
            everyday wellness — for you and your family.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex rounded-full bg-[var(--cta)] px-7 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
            >
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/appointment"
              className="inline-flex rounded-full border border-[var(--border)] px-7 py-3 text-sm font-semibold"
            >
              Request appointment
            </Link>
            <a
              href="/special-offer"
              className="inline-flex rounded-full border border-transparent px-7 py-3 text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
            >
              New patient offer
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
