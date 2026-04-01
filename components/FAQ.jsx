import { faqItems } from "@/lib/faq";

export function FAQ() {
  return (
    <section className="border-b border-line bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Straight answers
        </h2>
        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-surface">
          {faqItems.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-medium text-ink transition group-open:text-accent">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
