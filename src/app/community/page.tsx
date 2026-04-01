import type { Metadata } from "next";
import Link from "next/link";
import { communityHubSections } from "@/content/community";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community content",
  description: `Articles, newsletters, and wellness library — ${site.name}, Naples, FL.`,
};

export default function CommunityPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
          Education & resources
        </p>
        <h1 className="font-display mt-3 text-4xl sm:text-5xl">Community content</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          Browse the same article library as our original site — organized here for quick
          access. Each section opens our hosted articles in a new tab. For shorter reads
          written for this site, see{" "}
          <Link href="/blog" className="font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline">
            Articles
          </Link>{" "}
          and{" "}
          <Link href="/care" className="font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline">
            Chiropractic & you
          </Link>
          .
        </p>

        <div className="mt-16 space-y-20">
          {communityHubSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-[var(--border)] pt-16 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-3xl tracking-tight">{section.title}</h2>
                  <p className="mt-3 max-w-xl text-[var(--muted-foreground)]">{section.intro}</p>
                </div>
                <a
                  href={section.overviewHref}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-sm font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
                >
                  View all in library →
                </a>
              </div>
              <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {section.groups.map((group, gi) => (
                  <div key={gi}>
                    {group.title ? (
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                        {group.title}
                      </h3>
                    ) : null}
                    <ul className={`space-y-2 ${group.title ? "mt-4" : ""}`}>
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-[var(--foreground)] underline-offset-4 hover:text-[var(--accent-strong)] hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
