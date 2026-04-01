import { SITE } from "@/lib/site";

/** Core mission copy from the live site — edited for clarity, same substance */
export function MissionVision() {
  return (
    <section className="border-b border-line bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Mission & vision
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          The most qualified fit-pros in SWFL — led by Master Trainer{" "}
          {SITE.leadTrainer}.
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            We inspire and empower clients to achieve life-changing results: move
            better, feel better, and keep thriving with energy that lasts.
          </p>
          <p>
            Our coaches specialize in sports performance, injury prevention, and
            motivational interviewing — so change sticks when life gets loud.
          </p>
          <p>
            Corporate programs include stress management (yoga and meditation),
            team-building bootcamps, and nutrition lunch-and-learns. Everything
            is customized and built for real schedules — not generic templates.
          </p>
        </div>
      </div>
    </section>
  );
}
