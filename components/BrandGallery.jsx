import Image from "next/image";
import { MEDIA } from "@/lib/media";

export function BrandGallery() {
  return (
    <section className="border-b border-line bg-surface px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          In the gym & on the floor
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink md:text-[2.75rem] md:leading-[1.08]">
          Real coaching. Real environments.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          Photography from Max Flex Fitness — Naples personal training and team
          wellness across Southwest Florida.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {MEDIA.gallery.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-line ring-1 ring-line"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
