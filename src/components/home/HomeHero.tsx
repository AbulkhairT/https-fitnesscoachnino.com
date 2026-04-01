"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { home } from "@/content/home";
import { heroSlides } from "@/lib/images";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 lg:items-stretch">
          <div className="flex max-w-xl flex-col justify-center lg:max-w-none">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[var(--foreground)]">
              <span className="block text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)] sm:text-sm">
                {home.hero.h1Keyword}
              </span>
              <span className="font-display mt-4 block text-[2.125rem] font-medium leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-[3rem] lg:leading-[1.04]">
                {home.hero.headline}
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-[15px] leading-[1.65] text-[var(--muted-foreground)] sm:text-[17px] sm:leading-relaxed">
              {home.hero.subhead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/appointment"
                className="inline-flex justify-center rounded-full bg-[var(--cta)] px-10 py-4 text-center text-[15px] font-semibold text-[var(--cta-foreground)] transition hover:bg-[var(--cta-hover)]"
              >
                {home.hero.ctaPrimary}
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex justify-center rounded-full border border-[var(--border)] bg-transparent px-10 py-4 text-center text-[15px] font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
              >
                {home.hero.ctaSecondary} · {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-10">
              <Link
                href="/special-offer"
                className="text-[13px] font-medium text-[var(--muted-foreground)] underline-offset-[5px] transition hover:text-[var(--foreground)] hover:underline"
              >
                {home.hero.ctaTertiary}
              </Link>
            </p>
          </div>

          {/* object-contain + generous height so entire slide is visible (no object-cover face crops) */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-[var(--surface-2)] min-h-[min(78vw,420px)] sm:min-h-[460px] lg:min-h-[min(74vh,680px)] lg:max-h-[760px]">
            {heroSlides.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={idx !== i}
              >
                <div className="absolute left-3 right-3 top-3 bottom-14 sm:left-5 sm:right-5 sm:top-5 sm:bottom-16 lg:left-6 lg:right-6 lg:top-6 lg:bottom-20">
                  <Image
                    src={src}
                    alt={`${site.name} chiropractic team and office in Naples, Florida`}
                    fill
                    priority={idx === 0}
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={92}
                  />
                </div>
              </div>
            ))}
            {heroSlides.length > 1 ? (
              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`h-0.5 rounded-full transition-all ${
                      idx === i ? "w-6 bg-[var(--foreground)]/50" : "w-1 bg-[var(--foreground)]/15"
                    }`}
                    aria-label={`Photo ${idx + 1}`}
                    onClick={() => setI(idx)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
