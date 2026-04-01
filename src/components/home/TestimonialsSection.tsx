import Link from "next/link";
import { home } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function TestimonialsSection() {
  return (
    <SectionShell className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.testimonials.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            {home.testimonials.headline}
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-10 sm:p-12"
            >
              <p className="font-display text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl sm:leading-snug">
                “{t.quote}”
              </p>
              <footer className="mt-8 text-sm font-medium text-[var(--muted-foreground)]">
                — {t.name}, {t.place}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
          >
            More patient stories →
          </Link>
        </p>
      </Container>
    </SectionShell>
  );
}
