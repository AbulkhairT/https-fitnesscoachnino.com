import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)]/70 bg-[var(--surface)] py-16 sm:py-20">
      <Container>
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          {home.trust.headline}
        </p>
        <ul className="mt-14 grid gap-14 sm:grid-cols-3 sm:gap-10 lg:gap-16">
          {home.trust.items.map((item) => (
            <li key={item.label} className="text-center sm:text-left">
              <p className="font-display text-lg font-medium tracking-tight text-[var(--foreground)]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
