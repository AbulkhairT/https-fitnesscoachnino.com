import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function WhyChooseUs() {
  return (
    <SectionShell className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            {home.whyUs.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            {home.whyUs.headline}
          </h2>
        </div>
        <ul className="mx-auto mt-16 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {home.whyUs.points.map((point) => (
            <li key={point.title} className="py-10 first:pt-8 last:pb-8">
              <h3 className="font-display text-xl text-[var(--foreground)]">{point.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}
