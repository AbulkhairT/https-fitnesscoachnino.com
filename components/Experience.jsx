const steps = [
  {
    title: "Intake + assessment",
    body: "We clarify goals, constraints, and training history — then build a baseline you can measure against.",
  },
  {
    title: "The plan",
    body: "Programming is built for your schedule and equipment — not a spreadsheet from the internet.",
  },
  {
    title: "Coached sessions",
    body: "You get instruction, feedback, and adjustments — not a silent rep counter.",
  },
  {
    title: "Review + progression",
    body: "We review what moved, what didn’t, and what’s next. Progress is the product.",
  },
];

export function Experience() {
  return (
    <section className="border-b border-line bg-surface px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          The experience
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          What coaching feels like
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          Calm, structured, and direct. You always know what you’re doing — and
          why it matters this week.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-white px-8 py-9"
            >
              <span className="font-display text-2xl font-medium text-line">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
