import Link from "next/link";
import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function ServicesHomeGrid() {
  return (
    <SectionShell className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.services.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            {home.services.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted-foreground)]">
            {home.services.intro}
          </p>
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {home.services.cards.map((card) => (
            <li
              key={card.title}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 transition hover:border-[var(--foreground)]/10"
            >
              <h3 className="font-display text-xl text-[var(--foreground)]">{card.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {card.outcome}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
          >
            {home.services.linkLabel} →
          </Link>
        </p>
      </Container>
    </SectionShell>
  );
}
