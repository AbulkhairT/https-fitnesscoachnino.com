import Link from "next/link";
import { ctaBand, home } from "@/content/home";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

type Variant = "default" | "strong";

export function CTABand({ variant = "default" }: { variant?: Variant }) {
  const copy = ctaBand[variant];
  const isStrong = variant === "strong";

  return (
    <section
      className={
        isStrong
          ? "border-y border-[var(--border)] bg-[var(--foreground)] py-14 text-[var(--surface)] sm:py-16"
          : "border-y border-[var(--border)] bg-[var(--surface-2)]/80 py-12 sm:py-14"
      }
    >
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2
            className={`font-display text-2xl tracking-tight sm:text-3xl ${
              isStrong ? "text-[var(--surface)]" : "text-[var(--foreground)]"
            }`}
          >
            {copy.headline}
          </h2>
          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${
              isStrong ? "text-white/75" : "text-[var(--muted-foreground)]"
            }`}
          >
            {copy.subhead}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:items-center">
          <Link
            href="/appointment"
            className={`inline-flex justify-center rounded-full px-8 py-3.5 text-center text-sm font-semibold transition ${
              isStrong
                ? "bg-[var(--surface)] text-[var(--foreground)] hover:bg-white"
                : "bg-[var(--cta)] text-[var(--cta-foreground)] hover:bg-[var(--cta-hover)]"
            }`}
          >
            {home.hero.ctaPrimary}
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className={`inline-flex justify-center rounded-full border px-8 py-3.5 text-center text-sm font-semibold transition ${
              isStrong
                ? "border-white/35 text-[var(--surface)] hover:border-white/60 hover:bg-white/10"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--foreground)]/20"
            }`}
          >
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
