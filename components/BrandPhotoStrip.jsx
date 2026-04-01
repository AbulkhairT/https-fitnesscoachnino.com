import Image from "next/image";
import { MEDIA } from "@/lib/media";

/** Wide banner image from the original site — full-bleed strip */
export function BrandPhotoStrip() {
  return (
    <div className="relative h-44 w-full overflow-hidden md:h-56 lg:h-64">
      <Image
        src={MEDIA.banner}
        alt="Max Flex Fitness — personal training and corporate wellness in Naples, FL"
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231f1e]/30 to-transparent" />
    </div>
  );
}
