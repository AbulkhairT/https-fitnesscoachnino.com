import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Health articles — ${site.name}.`,
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Articles</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Wellness perspectives in a calm, readable format. For the full
          historical library, you can also visit our{" "}
          <a
            href={site.external.originalBlog}
            className="font-medium text-[var(--accent-strong)]"
            target="_blank"
            rel="noreferrer"
          >
            original blog
          </a>
          .
        </p>
        <ul className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {blogPosts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="block py-8 hover:bg-black/[0.02] sm:px-2"
              >
                <time className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                  {p.date}
                </time>
                <h2 className="font-display mt-2 text-2xl">{p.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
