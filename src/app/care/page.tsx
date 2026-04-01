import type { Metadata } from "next";
import Link from "next/link";
import { careArticles } from "@/content/care-articles";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic & you",
  description: `Conditions and topics — ${site.name}, Naples, FL.`,
};

export default function CareHubPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Chiropractic & you</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Short, clear overviews of common questions we hear in practice. This
          is education, not a substitute for an exam — call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>{" "}
          when you are ready to talk about your case.
        </p>
        <ul className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {careArticles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/care/${a.slug}`}
                className="block py-6 hover:bg-black/[0.02] sm:px-2"
              >
                <h2 className="font-display text-xl">{a.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{a.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
