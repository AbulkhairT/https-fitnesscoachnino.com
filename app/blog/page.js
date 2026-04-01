import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Fitness Coaching Journal — Training & Nutrition Topics",
  description: `Fat loss, consistency, performance, and nutrition articles from ${SITE.name} — fitness coaching in Naples, FL.`,
  alternates: { canonical: `${SITE.url}/blog` },
};

const topics = [
  {
    slug: "fat-loss-mistakes-that-stall-progress",
    title: "The fat loss mistakes that stall progress (and how to fix them)",
  },
  {
    slug: "how-to-stay-consistent-with-fitness",
    title: "How to stay consistent when life gets loud",
  },
  {
    slug: "beginner-fitness-guide-naples",
    title: "A beginner’s guide to training smarter — not longer",
  },
  {
    slug: "nutrition-basics-that-actually-move-the-needle",
    title: "Nutrition basics that actually move the needle",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <section className="border-b border-line bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Wellness journal
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            Practical guidance for training and recovery
          </h1>
          <p className="mt-6 text-lg text-muted">
            Long-form articles are coming soon. For now, book a consultation and
            get personalized guidance from our coaches in {SITE.city}.
          </p>
          <ul className="mt-12 space-y-4">
            {topics.map((t) => (
              <li key={t.slug}>
                <span className="text-[15px] text-muted">{t.title}</span>
                <span className="ml-2 text-xs text-muted">· Coming soon</span>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="mt-12 inline-block text-sm font-semibold text-accent hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
