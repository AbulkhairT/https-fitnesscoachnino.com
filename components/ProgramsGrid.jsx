import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTA } from "@/lib/cta";

const programs = [
  {
    slug: "personal-training",
    title: "1:1 coaching",
    outcome:
      "Lean out, build muscle, and train with intent — not guesswork. Life-changing results built on consistency.",
  },
  {
    slug: "corrective-exercise",
    title: "Movement & resilience",
    outcome:
      "Rebuild positions, reduce nagging pain, earn heavier loads safely — injury prevention built in.",
  },
  {
    slug: "sports-performance",
    title: "Performance",
    outcome:
      "Sports performance coaching: speed, power, and durability for athletes who train with purpose.",
  },
  {
    slug: "corporate-wellness",
    title: "Corporate wellness",
    outcome:
      "Stress management (yoga & meditation), team-building bootcamps, and nutrition lunch-and-learns — customized for your team.",
  },
];

export function ProgramsGrid() {
  return (
    <section id="programs" className="border-b border-line bg-surface px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Programs
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
              Personal training & corporate wellness — customized and science-backed.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              {SITE.name} Personal Training & Corporate Wellness Solutions — programs
              tailored to your goals, schedule, and training history.
            </p>
          </div>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            {CTA.primary}
          </a>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {programs.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:border-muted"
            >
              <h3 className="font-display text-xl font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-6 flex-1 text-[15px] leading-relaxed text-muted">
                {s.outcome}
              </p>
              <div className="mt-10 flex items-center justify-between border-t border-line pt-6 text-sm">
                <span className="text-muted">Custom pricing</span>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-semibold text-accent transition group-hover:underline"
                >
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
