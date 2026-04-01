"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { home } from "@/content/home";
import { heroDesktopSlides, heroMobileImage } from "@/lib/images";
import { site } from "@/lib/site";
import { HeroPromoCard } from "@/components/home/HeroPromoCard";

export function HomeHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (heroDesktopSlides.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % heroDesktopSlides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-14 sm:pt-14 sm:pb-16 lg:py-24">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-14">
          {/* Copy + CTAs + desktop promo */}
          <div className="flex min-w-0 flex-col justify-center gap-8 lg:max-w-xl">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                {home.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-[var(--foreground)]">
                <span className="block text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)] sm:text-sm">
                  {home.hero.h1Keyword}
                </span>
                <span className="font-display mt-4 block text-[2.125rem] font-medium leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-[3rem] lg:leading-[1.04]">
                  {home.hero.headline}
                </span>
              </h1>
              <p className="mt-7 max-w-lg text-[15px] leading-[1.65] text-[var(--muted-foreground)] sm:text-[17px] sm:leading-relaxed">
                {home.hero.subhead}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
            <HeroPromoCard className="hidden lg:block" />
          </div>

          {/* Desktop: wide carousel */}
          <div className="relative hidden h-[min(520px,70vh)] w-full min-h-[400px] overflow-hidden rounded-2xl bg-[var(--surface-2)] shadow-[0_1px_3px_rgba(0,0,0,0.06)] lg:block">
            {heroDesktopSlides.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={idx !== i}
              >
                <Image
                  src={src}
                  alt={`${site.name} — Naples, FL chiropractic`}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0, 45vw"
                  quality={90}
                />
              </div>
            ))}
            {heroDesktopSlides.length > 1 ? (
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {heroDesktopSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`h-0.5 rounded-full transition-all ${
                      idx === i ? "w-6 bg-white/90 shadow-sm" : "w-1 bg-white/40"
                    }`}
                    aria-label={`Photo ${idx + 1}`}
                    onClick={() => setI(idx)}
                  />
                ))}
              </div>
            ) : null}
          </div>

          {/* Mobile: portrait art direction — single image, centered subject */}
          <div className="w-full shrink-0 lg:hidden">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[min(100%,300px)] overflow-hidden rounded-2xl bg-[var(--surface-2)] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <Image
                src={heroMobileImage.src}
                alt={heroMobileImage.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(300px, 100vw), 0"
                quality={92}
              />
            </div>
          </div>

          <HeroPromoCard className="lg:hidden" />
        </div>
      </div>
    </section>
  );
}
