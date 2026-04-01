"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export function StickyCallBar() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className="pointer-events-auto mx-auto flex max-w-lg gap-2 px-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 py-3.5 text-center text-sm font-semibold shadow-[0_-4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
          >
            Call now
          </a>
          <Link
            href="/appointment"
            className="flex-1 rounded-full bg-[var(--cta)] py-3.5 text-center text-sm font-semibold text-[var(--cta-foreground)] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
          >
            Book
          </Link>
        </div>
      </div>
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--surface-2)]"
          >
            Call
          </a>
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--cta)] px-5 py-2.5 text-sm font-semibold text-[var(--cta-foreground)] hover:bg-[var(--cta-hover)]"
          >
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
