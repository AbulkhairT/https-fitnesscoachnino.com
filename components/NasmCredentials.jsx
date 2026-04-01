import Image from "next/image";
import { MEDIA } from "@/lib/media";

export function NasmCredentials() {
  return (
    <div className="bg-[#231f1e] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          NASM credentials
        </p>
        <div className="mt-8 flex flex-wrap items-start justify-center gap-8 md:gap-12">
          {MEDIA.nasm.map((n) => (
            <div key={n.name} className="flex w-[100px] flex-col items-center text-center">
              <div className="relative h-[72px] w-[72px]">
                <Image
                  src={n.src}
                  alt={n.name}
                  fill
                  className="object-contain"
                  sizes="72px"
                />
              </div>
              <p className="mt-3 text-[11px] font-semibold tracking-wide text-white/90">
                {n.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
