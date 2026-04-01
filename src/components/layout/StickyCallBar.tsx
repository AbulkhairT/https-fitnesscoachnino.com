"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-lg gap-2 px-4">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 py-3 text-center text-sm font-semibold shadow-lg backdrop-blur"
        >
          Call now
        </a>
        <Link
          href="/appointment"
          className="flex-1 rounded-full bg-[var(--cta)] py-3 text-center text-sm font-semibold text-[var(--cta-foreground)] shadow-lg"
        >
          Book online
        </Link>
      </div>
    </div>
  );
}
