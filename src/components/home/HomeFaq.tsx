import { homeFaq } from "@/content/home-seo";
import { Container } from "@/components/ui/Container";

export function HomeFaq() {
  return (
    <section className="border-t border-[var(--border)]/70 bg-[var(--surface)] py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h2 className="font-display text-center text-3xl font-medium tracking-tight sm:text-4xl">
          Common questions
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-[var(--muted-foreground)]">
          Quick answers for local patients. Call (239) 263-3369 anytime you prefer to talk.
        </p>
        <dl className="mt-14 space-y-3">
          {homeFaq.map((item) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-[var(--border)]/80 bg-[var(--background)]"
            >
              <dt className="border-b border-[var(--border)]/60 px-5 py-4 text-sm font-medium text-[var(--foreground)]">
                {item.question}
              </dt>
              <dd className="px-5 py-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
