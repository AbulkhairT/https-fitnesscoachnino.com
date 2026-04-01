import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProblemSolution() {
  return (
    <SectionShell className="bg-[var(--background)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              {home.problemSolution.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              {home.problemSolution.headline}
            </h2>
            <ul className="mt-8 space-y-4 text-[var(--muted-foreground)]">
              {home.problemSolution.problems.map((p) => (
                <li key={p} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              {home.problemSolution.solutionEyebrow}
            </p>
            <h3 className="font-display mt-4 text-2xl tracking-tight text-[var(--foreground)]">
              {home.problemSolution.solutionHeadline}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted-foreground)]">
              {home.problemSolution.solutionBody}
            </p>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
