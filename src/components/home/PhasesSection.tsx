import Link from "next/link";
import { home } from "@/content/home";
import { servicePillars } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function PhasesSection() {
  return (
    <SectionShell className="bg-[var(--surface-2)]/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.phases.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            {home.phases.headline}
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {servicePillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {p.summary}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
          >
            How we work — full overview →
          </Link>
        </p>
      </Container>
    </SectionShell>
  );
}
