import { SITE } from "@/lib/site";

const points = [
  {
    title: "Outcome-based",
    body: "Training is written to a target — not copied from a template. Composition, strength, or performance: we track what matters.",
  },
  {
    title: "Behavior change, not guilt",
    body: "Motivational interviewing helps you build habits that survive travel, kids, and long work weeks.",
  },
  {
    title: "Technical standards",
    body: "You get coached positions, tempo, and loading — so you can train hard without feeling reckless.",
  },
  {
    title: "Local proof",
    body: `${SITE.ratingLabel}. ${SITE.name} has been trusted in SWFL since ${SITE.foundedYear}.`,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="border-b border-line bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Why this coach
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Differentiation is simple: standards, clarity, and follow-through.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-surface px-8 py-9"
            >
              <span className="text-xs font-semibold text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">
                {p.title}
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
