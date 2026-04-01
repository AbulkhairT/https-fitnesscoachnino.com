import { SITE } from "@/lib/site";

export function VideoFeature() {
  const id = SITE.youtubeVideoId;
  return (
    <section className="border-b border-line bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          See the work
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Why clients choose {SITE.name}
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          Watch on YouTube — then book your complimentary assessment.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-ink shadow-soft ring-1 ring-line">
          <div className="relative aspect-video w-full">
            <iframe
              title="Max Flex Fitness — client choice video"
              src={`https://www.youtube.com/embed/${id}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          <a
            href={SITE.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Subscribe on YouTube →
          </a>
        </p>
      </div>
    </section>
  );
}
