import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { galleryPhotos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Office gallery — ${site.name}, Naples, FL.`,
};

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Gallery</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Moments from our practice — same photography set featured on our
          original site, presented in a consistent, editorial grid.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryPhotos.map((g) => (
            <figure
              key={g.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-[var(--muted)]"
            >
              <div className="absolute inset-2">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </div>
  );
}
