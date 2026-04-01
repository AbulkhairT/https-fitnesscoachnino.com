import Image from "next/image";
import Link from "next/link";
import { SITE, telHref, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-8 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Naples, FL · Performance coaching
          </p>
          <h1 className="font-display text-[2.35rem] font-medium leading-[1.02] tracking-tight text-ink md:text-5xl lg:text-[3.1rem]">
            Build a lean, strong body — and keep it.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-snug text-ink md:text-xl">
            Coaching that turns training into a repeatable system: composition,
            strength, and confidence — without chaos.
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            {SITE.name} is built for adults who want results that survive busy
            weeks — led by {SITE.leadTrainer}, {SITE.certifications.slice(0, 2).join(" · ")}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-accent px-8 py-3.5 text-[15px] font-semibold text-white shadow-soft transition hover:bg-accent-hover"
            >
              {CTA.primary}
            </a>
            <a
              href={smsHref(
                `Hi — I want to start coaching with ${SITE.name}.`
              )}
              className="inline-flex rounded-full border border-line bg-white px-8 py-3.5 text-[15px] font-semibold text-ink transition hover:border-muted"
            >
              {CTA.message}
            </a>
            <a
              href={telHref()}
              className="inline-flex items-center rounded-full px-5 py-3.5 text-[15px] font-medium text-muted transition hover:text-ink"
            >
              {CTA.call} {SITE.phoneDisplay}
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            <span className="text-ink/80">Value prop · </span>
            Stronger week over week — with a plan that fits your real schedule.
          </p>
          <p className="mt-4 text-sm text-muted">
            Explore{" "}
            <Link
              href="/#programs"
              className="font-medium text-accent hover:underline"
            >
              programs
            </Link>
            ,{" "}
            <Link
              href="/services/personal-training"
              className="font-medium text-accent hover:underline"
            >
              1:1 coaching
            </Link>
            , and{" "}
            <Link
              href="/#transformations"
              className="font-medium text-accent hover:underline"
            >
              results
            </Link>
            .
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85&fit=crop"
                alt="Personal trainer coaching strength training in a professional training facility"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-line bg-surface px-6 py-5">
            <p className="text-sm font-medium text-ink">
              {SITE.leadTrainer} · Master Trainer
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {SITE.ratingLabel}
            </p>
            <p className="mt-3 text-xs text-muted">
              {SITE.certifications.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
