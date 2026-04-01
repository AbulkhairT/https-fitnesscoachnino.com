"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/content/nav";
import { logoUrl } from "@/lib/images";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--surface)]/80 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-[3.75rem]">
        <Link href="/" className="flex shrink-0 items-center">
          <span className="relative block h-8 w-[140px] sm:h-9 sm:w-[158px]">
            <Image
              src={logoUrl}
              alt={site.name}
              fill
              priority
              sizes="160px"
              className="object-contain object-left"
              unoptimized
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {mainNav.map((item) => {
            if (item.children?.length) {
              const openD = expanded === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={`flex items-center gap-0.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-tight ${
                      pathname.startsWith(item.href ?? item.children[0].href)
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)]"
                    } hover:bg-black/[0.03]`}
                    aria-expanded={openD}
                    onClick={() =>
                      setExpanded(openD ? null : item.label)
                    }
                  >
                    {item.label}
                    <span className="text-[10px] opacity-50" aria-hidden>
                      ▾
                    </span>
                  </button>
                  {openD ? (
                    <div className="absolute right-0 top-full z-50 mt-2 min-w-[15rem] rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-md">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm font-medium text-[var(--accent-strong)] hover:bg-[var(--surface-2)]"
                          onClick={() => setExpanded(null)}
                        >
                          Overview
                        </Link>
                      ) : null}
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                          onClick={() => setExpanded(null)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-tight hover:bg-black/[0.03] ${
                  pathname === item.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] md:inline-flex"
          >
            Call
          </a>
          <Link
            href="/appointment"
            className="inline-flex rounded-full bg-[var(--cta)] px-5 py-2 text-[13px] font-semibold text-[var(--cta-foreground)] shadow-sm hover:bg-[var(--cta-hover)]"
          >
            Book
          </Link>
          <button
            type="button"
            className="rounded-full p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-5 bg-[var(--foreground)]" />
            <span className="my-1 block h-0.5 w-5 bg-[var(--foreground)]" />
            <span className="block h-0.5 w-5 bg-[var(--foreground)]" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`max-h-[80vh] overflow-y-auto border-t border-[var(--border)] lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[var(--border)] py-2">
                <p className="px-3 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                  {item.label}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-[var(--foreground)]"
                    onClick={() => setOpen(false)}
                  >
                    Overview
                  </Link>
                ) : null}
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-3 py-2 text-[var(--foreground)]"
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="rounded-lg px-3 py-3 text-[var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </Container>
      </div>
    </header>
  );
}
