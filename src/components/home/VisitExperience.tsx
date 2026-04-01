import Link from "next/link";
import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function VisitExperience() {
  return (
    <SectionShell className="bg-[var(--background)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.experience.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            {home.experience.headline}
          </h2>
        </div>
        <ol className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          {home.experience.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <span
                className="font-display text-4xl tabular-nums text-[var(--border)]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg text-[var(--foreground)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-center">
          <Link
            href="/new-patient/first-visit"
            className="text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
          >
            {home.experience.linkLabel} →
          </Link>
        </p>
      </Container>
    </SectionShell>
  );
}
