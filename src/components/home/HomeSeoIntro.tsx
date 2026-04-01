import Link from "next/link";
import { Fragment } from "react";
import { homeSeo } from "@/content/home-seo";
import { Container } from "@/components/ui/Container";

const conditionLinks = [
  { href: "/conditions/back-pain", label: "Back pain" },
  { href: "/conditions/neck-pain", label: "Neck pain" },
  { href: "/conditions/sciatica", label: "Sciatica" },
  { href: "/conditions/migraines-headaches", label: "Headaches & migraines" },
  { href: "/conditions/auto-accident-injury", label: "Auto accident injuries" },
] as const;

export function HomeSeoIntro() {
  return (
    <section className="border-b border-[var(--border)]/70 bg-[var(--background)] py-12 sm:py-16">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-[15px] leading-[1.75] text-[var(--muted-foreground)] sm:text-[17px]">
          {homeSeo.intro}
        </p>
        <nav
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-loose text-[var(--muted-foreground)]"
          aria-label="Conditions we treat"
        >
          {conditionLinks.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 ? <span aria-hidden> · </span> : null}
              <Link
                href={l.href}
                className="font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
              >
                {l.label}
              </Link>
            </Fragment>
          ))}
        </nav>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[var(--muted-foreground)]">
          {homeSeo.serving}{" "}
          <Link href="/appointment" className="font-medium text-[var(--foreground)] underline underline-offset-4">
            Book online
          </Link>{" "}
          or call when you are ready.
        </p>
      </Container>
    </section>
  );
}
