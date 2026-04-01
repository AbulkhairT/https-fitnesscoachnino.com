"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { home } from "@/content/home";
import { heroSlides } from "@/lib/images";
import { site } from "@/lib/site";

export function HomeHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div className="lg:grid lg:min-h-[min(92vh,880px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="flex flex-col justify-center px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-24 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1rem))] lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.hero.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-xl text-[2.35rem] font-medium leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.06]">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-xl sm:leading-snug">
            {home.hero.subhead}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
            {home.hero.supporting}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/appointment"
              className="inline-flex justify-center rounded-full bg-[var(--cta)] px-8 py-3.5 text-center text-sm font-semibold text-[var(--cta-foreground)] transition hover:bg-[var(--cta-hover)]"
            >
              {home.hero.ctaPrimary}
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-8 py-3.5 text-center text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--foreground)]/25"
            >
              {home.hero.ctaSecondary} · {site.phoneDisplay}
            </a>
          </div>
          <Link
            href="/special-offer"
            className="mt-6 inline-flex text-sm font-medium text-[var(--accent-strong)] underline-offset-[6px] transition hover:underline"
          >
            {home.hero.ctaTertiary} →
          </Link>
        </div>

        <div className="relative min-h-[min(72vw,420px)] bg-[var(--surface-2)] lg:min-h-0">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={idx !== i}
            >
              <div className="absolute inset-0 p-5 sm:p-8 lg:p-10 lg:pl-6">
                <Image
                  src={src}
                  alt={`${site.name} — Naples chiropractic office`}
                  fill
                  priority={idx === 0}
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={92}
                />
              </div>
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--surface)]/25 lg:w-1/3"
            aria-hidden
          />
          {heroSlides.length > 1 ? (
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5 lg:left-8 lg:translate-x-0">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-1 rounded-full transition-all ${
                    idx === i ? "w-7 bg-[var(--accent)]" : "w-1 bg-[var(--foreground)]/20"
                  }`}
                  aria-label={`Photo ${idx + 1}`}
                  onClick={() => setI(idx)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
