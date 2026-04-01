import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careArticles, getCareArticle } from "@/content/care-articles";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return careArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getCareArticle(slug);
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.excerpt };
}

export default async function CareArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getCareArticle(slug);
  if (!a) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/care" className="text-sm text-[var(--accent-strong)]">
          ← Chiropractic & you
        </Link>
        <h1 className="font-display mt-6 text-4xl sm:text-5xl">{a.title}</h1>
        <p className="mt-6 text-lg text-[var(--muted-foreground)]">{a.excerpt}</p>
        <div className="mt-10 space-y-6 text-[var(--muted-foreground)]">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4 border-t border-[var(--border)] pt-10">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={site.external.appointment}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
          >
            Book appointment
          </a>
        </div>
      </Container>
    </article>
  );
}
