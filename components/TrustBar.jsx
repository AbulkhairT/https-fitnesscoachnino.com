import { SITE } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-b border-line bg-ink px-5 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <blockquote className="border-l-2 border-white/40 pl-6 font-display text-xl font-normal leading-snug text-white/95 md:text-2xl">
          “We don’t sell motivation. We build a system you can repeat.”
        </blockquote>
        <p className="mt-4 pl-6 text-sm text-white/50">
          — {SITE.name}, {SITE.city}
        </p>
        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Proof", v: SITE.ratingLabel },
            { k: "Since", v: `${SITE.foundedYear}` },
            { k: "Focus", v: "Fat loss · Strength · Performance" },
            { k: "Method", v: "Assessment → plan → coached execution" },
          ].map((item) => (
            <div key={item.k} className="bg-ink px-5 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                {item.k}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-white/90">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
