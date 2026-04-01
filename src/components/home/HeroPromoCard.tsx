import Link from "next/link";
import { home } from "@/content/home";

export function HeroPromoCard({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]/90 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6 ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
        New patient
      </p>
      <Link
        href="/special-offer"
        className="mt-2 block text-[17px] font-semibold tracking-tight text-[var(--foreground)] underline-offset-4 transition hover:underline"
      >
        {home.hero.ctaTertiary}
      </Link>
      <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted-foreground)]">
        {home.hero.promoTeaser}
      </p>
    </aside>
  );
}
