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
          ? "border-y border-transparent bg-[var(--foreground)] py-16 text-[var(--surface)] sm:py-20"
          : "border-y border-[var(--border)]/60 bg-[var(--surface-2)]/50 py-14 sm:py-16"
      }
    >
      <Container className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-14">
        <div className="max-w-md">
          <h2
            className={`font-display text-2xl font-medium tracking-tight sm:text-3xl ${
              isStrong ? "text-[var(--surface)]" : "text-[var(--foreground)]"
            }`}
          >
            {copy.headline}
          </h2>
          <p
            className={`mt-4 text-sm leading-relaxed sm:text-[15px] ${
              isStrong ? "text-white/70" : "text-[var(--muted-foreground)]"
            }`}
          >
            {copy.subhead}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:items-center">
          <Link
            href="/appointment"
            className={`inline-flex justify-center rounded-full px-9 py-3.5 text-center text-[15px] font-semibold transition ${
              isStrong
                ? "bg-[var(--surface)] text-[var(--foreground)] hover:bg-white"
                : "bg-[var(--cta)] text-[var(--cta-foreground)] hover:bg-[var(--cta-hover)]"
            }`}
          >
            {home.hero.ctaPrimary}
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className={`inline-flex justify-center rounded-full border px-9 py-3.5 text-center text-[15px] font-semibold transition ${
              isStrong
                ? "border-white/30 text-[var(--surface)] hover:border-white/50 hover:bg-white/10"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-2)]"
            }`}
          >
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
