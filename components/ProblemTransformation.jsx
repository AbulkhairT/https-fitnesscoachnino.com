import { SITE, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function ProblemTransformation() {
  const struggles = [
    "You lose fat, then regain it — because the plan wasn’t built for your life.",
    "You’re inconsistent — not because you’re lazy, because the program doesn’t fit.",
    "You’re overwhelmed by conflicting advice: cardio, macros, “more volume.”",
    "You want a body that looks athletic — not just “smaller.”",
  ];
  const shifts = [
    "A clear training roadmap tied to your goal (composition, strength, performance).",
    "Accountability that respects your schedule — not shame-based check-ins.",
    "Coaching that adjusts weekly based on feedback, soreness, and progress.",
    "Technique standards so you train hard without breaking down.",
  ];
  return (
    <section className="border-b border-line bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Problem → transformation
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Most people don’t fail from lack of effort. They fail from lack of
          clarity.
        </h2>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface px-8 py-10">
            <h3 className="font-display text-xl font-medium text-ink">
              What keeps people stuck
            </h3>
            <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
              {struggles.map((p) => (
                <li key={p} className="border-t border-line/80 pt-5 first:border-t-0 first:pt-0">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-surface px-8 py-10">
            <h3 className="font-display text-xl font-medium text-ink">
              What changes with coaching
            </h3>
            <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
              {shifts.map((p) => (
                <li key={p} className="border-t border-line/80 pt-5 first:border-t-0 first:pt-0">
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={smsHref(
                `Hi — I’m interested in ${CTA.primary.toLowerCase()} with ${SITE.name}.`
              )}
              className="mt-10 inline-block text-sm font-semibold text-accent hover:underline"
            >
              {CTA.message} {SITE.name} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
