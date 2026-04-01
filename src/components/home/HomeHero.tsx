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
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div className="lg:grid lg:min-h-[min(88vh,820px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-center px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-28 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pt-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            {home.hero.eyebrow}
          </p>
          <h1 className="font-display mt-8 max-w-[14ch] text-[2.125rem] font-medium leading-[1.07] tracking-tight text-[var(--foreground)] sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] lg:leading-[1.04]">
            {home.hero.headline}
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-[var(--muted-foreground)] sm:max-w-lg sm:text-[17px] sm:leading-relaxed">
            {home.hero.subhead}
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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

        <div className="relative min-h-[min(64vw,380px)] bg-[var(--surface-2)]/40 lg:min-h-0">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={idx !== i}
            >
              <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 lg:pl-8">
                <Image
                  src={src}
                  alt={`${site.name} — Naples chiropractic office`}
                  fill
                  priority={idx === 0}
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  quality={92}
                />
              </div>
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-[var(--surface)]/[0.08] lg:w-2/5"
            aria-hidden
          />
          {heroSlides.length > 1 ? (
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1 lg:left-10 lg:translate-x-0">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-0.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-[var(--foreground)]/70" : "w-1 bg-[var(--foreground)]/15"
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
