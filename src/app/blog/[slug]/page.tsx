import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Article" };
  return { title: p.title, description: p.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/blog" className="text-sm text-[var(--accent-strong)]">
          ← Articles
        </Link>
        <time className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
          {p.date}
        </time>
        <h1 className="font-display mt-4 text-4xl sm:text-5xl">{p.title}</h1>
        <p className="mt-6 text-lg text-[var(--muted-foreground)]">{p.excerpt}</p>
        <div className="mt-10 space-y-6 text-[var(--muted-foreground)]">
          {p.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <p className="mt-14 text-sm text-[var(--muted-foreground)]">
          {site.name} · Naples, FL
        </p>
      </Container>
    </article>
  );
}
