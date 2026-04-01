import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { staffTeamPhoto } from "@/lib/images";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";

export function HomeStaffSection() {
  return (
    <SectionShell className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <figure className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)]/80 bg-[var(--surface-2)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <Image
                src={staffTeamPhoto}
                alt={`${site.name} team — Naples, FL`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </figure>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              {home.staff.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
              {home.staff.headline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)]">
              {home.staff.body}
            </p>
            <Link
              href="/about/staff"
              className="mt-10 inline-flex text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
            >
              {home.staff.linkLabel} →
            </Link>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
