import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)] py-10 sm:py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          {home.trust.headline}
        </p>
        <ul className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {home.trust.items.map((item) => (
            <li key={item.label} className="text-center sm:text-left">
              <p className="font-display text-lg text-[var(--foreground)]">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
