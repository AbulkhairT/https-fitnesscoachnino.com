const quotes = [
  {
    text: "I stopped restarting every Monday. The plan finally made sense for my life.",
    name: "Alex M. · Naples",
  },
  {
    text: "Sharp coaching. No hype. I’m stronger and my joints feel better than they have in years.",
    name: "Sarah L. · North Naples",
  },
  {
    text: "Our team actually used what we learned — practical, not corporate theater.",
    name: "HR Partner · SWFL",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="border-b border-line bg-surface px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Client word
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Proof over promises
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-2xl border border-line bg-white px-8 py-9"
            >
              <p className="text-[15px] leading-relaxed text-muted">
                “{q.text}”
              </p>
              <footer className="mt-8 text-sm font-medium text-ink">
                {q.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
