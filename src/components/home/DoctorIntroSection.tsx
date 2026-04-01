import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { doctorPhoto } from "@/lib/images";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function DoctorIntroSection() {
  return (
    <SectionShell className="bg-[var(--surface-2)]/60">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <figure className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="w-full max-w-[400px] rounded-2xl border border-[var(--border)]/80 bg-[var(--surface)] p-3 shadow-sm sm:p-4">
              <Image
                src={doctorPhoto}
                alt={site.doctor.name}
                width={1023}
                height={1023}
                className="h-auto w-full rounded-xl object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </figure>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              {home.doctor.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
              {home.doctor.headline}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--muted-foreground)]">
              {home.doctor.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <Link
              href="/about/dr-barbaro"
              className="mt-10 inline-flex text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
            >
              {home.doctor.linkLabel} →
            </Link>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
