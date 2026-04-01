import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Patient reviews — ${site.name}.`,
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Testimonials</h1>
        <p className="mt-6 text-[var(--muted-foreground)]">
          Reviews from people who trusted our team with their care.
        </p>
        <div className="mt-12 space-y-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <blockquote className="text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-[var(--muted-foreground)]">
                — {t.name}, {t.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </div>
  );
}
