import Link from "next/link";
import { SITE, telHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-medium tracking-tight text-ink md:text-xl">
            {SITE.name}
          </span>
          <span className="text-xs font-normal text-muted">
            Coaching · {SITE.city}, {SITE.region}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="/#programs" className="transition hover:text-ink">
            Programs
          </Link>
          <Link href="/#why" className="transition hover:text-ink">
            Why {SITE.leadTrainer.split(" ")[0]}
          </Link>
          <Link href="/#transformations" className="transition hover:text-ink">
            Results
          </Link>
          <Link href="/#reviews" className="transition hover:text-ink">
            Reviews
          </Link>
          <Link href="/blog" className="transition hover:text-ink">
            Journal
          </Link>
          <Link href="/contact" className="transition hover:text-ink">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telHref()}
            className="hidden rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:border-muted hover:bg-white sm:inline-flex"
          >
            {CTA.call}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-hover md:px-5"
          >
            {CTA.primary}
          </a>
        </div>
      </div>
    </header>
  );
}
