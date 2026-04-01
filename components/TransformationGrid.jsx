import { SITE } from "@/lib/site";

/** Outcome stories — illustrative; not individual medical claims */
const outcomes = [
  {
    label: "Fat loss + energy",
    before: "Inconsistent training, weekend “reset” cycles, low energy.",
    after: "Structured training + habits that fit work travel — visible composition change in 12 weeks.",
    metric: "12-week focus block",
  },
  {
    label: "Strength + confidence",
    before: "Strong in the gym, weak in real life — aches from poor patterns.",
    after: "Technique-first strength work with measurable lifts and fewer flare-ups.",
    metric: "Strength + movement quality",
  },
  {
    label: "Performance",
    before: "Training hard without a plan for recovery or progression.",
    after: "Periodized work for speed and durability — fewer setbacks, clearer milestones.",
    metric: "Athletic progression",
  },
];

export function TransformationGrid() {
  return (
    <section
      id="transformations"
      className="border-b border-line bg-white px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Results
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Transformations are built from consistency — not intensity spikes.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          {SITE.name} focuses on outcomes you can repeat: better body composition,
          stronger lifts, better movement, and habits that survive real life.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <article
              key={o.label}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                {o.metric}
              </p>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {o.label}
              </h3>
              <div className="mt-8 space-y-4 text-[14px] leading-relaxed text-muted">
                <p>
                  <span className="font-medium text-ink">Before · </span>
                  {o.before}
                </p>
                <p>
                  <span className="font-medium text-ink">After · </span>
                  {o.after}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-xs leading-relaxed text-muted">
          Individual results vary. Nutrition, sleep, stress, and adherence all
          influence outcomes. We coach the full picture — not a single session.
        </p>
      </div>
    </section>
  );
}
