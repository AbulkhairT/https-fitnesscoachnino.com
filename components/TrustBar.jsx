import { SITE } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-b border-accent/30 bg-[#231f1e] px-5 py-12 text-white md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <blockquote className="border-l-4 border-accent pl-6 font-display text-xl font-normal leading-snug text-white/95 md:text-2xl">
          “We don’t sell motivation. We build a system you can repeat — in the gym,
          at work, and at home.”
        </blockquote>
        <p className="mt-4 pl-7 text-sm text-white/45">
          — {SITE.name}, {SITE.city}
        </p>
        <p className="mt-8 pl-7 text-sm font-medium text-accent">
          The most qualified and experienced fit-pros in SWFLA
        </p>
        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Recognition", v: SITE.ratingLabel },
            { k: "Serving clients since", v: String(SITE.foundedYear) },
            { k: "Specialties", v: "Sports performance · Injury prevention" },
            { k: "Behavior change", v: "Motivational interviewing (MI)" },
          ].map((item) => (
            <div key={item.k} className="bg-[#231f1e] px-5 py-5">
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
