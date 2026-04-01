import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions, getCondition } from "@/content/conditions";
import { CTABand } from "@/components/home/CTABand";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return { title: "Condition" };
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [c.primaryKeyword, ...c.secondaryKeywords],
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) notFound();

  const other = conditions.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <article className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <nav className="text-sm text-[var(--muted-foreground)]">
            <Link href="/conditions" className="hover:text-[var(--foreground)]">
              Conditions
            </Link>
            <span aria-hidden> / </span>
            <span className="text-[var(--foreground)]">{c.h1}</span>
          </nav>
          <h1 className="font-display mt-8 text-4xl font-medium tracking-tight sm:text-5xl">
            {c.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">{c.lead}</p>

          <div className="mt-14 space-y-12 text-[var(--muted-foreground)]">
            <section>
              <h2 className="font-display text-xl font-medium text-[var(--foreground)]">
                What you might be feeling
              </h2>
              <p className="mt-4 leading-relaxed">{c.problem}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-medium text-[var(--foreground)]">
                What is going on
              </h2>
              <p className="mt-4 leading-relaxed">{c.explanation}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-medium text-[var(--foreground)]">
                How we help
              </h2>
              <p className="mt-4 leading-relaxed">{c.treatment}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-medium text-[var(--foreground)]">
                Why patients choose our Naples office
              </h2>
              <p className="mt-4 leading-relaxed">{c.whyUs}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-medium text-[var(--foreground)]">
                Service area
              </h2>
              <p className="mt-4 leading-relaxed">{c.localLine}</p>
            </section>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[var(--border)] pt-12">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--cta)] px-8 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
            >
              Book appointment
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold"
            >
              Call {site.phoneDisplay}
            </a>
            <Link href="/services" className="rounded-full border border-[var(--border)] px-8 py-3 text-sm font-semibold">
              All services
            </Link>
          </div>

          {other.length ? (
            <div className="mt-20 border-t border-[var(--border)] pt-12">
              <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                Related topics
              </h2>
              <ul className="mt-6 space-y-3">
                {other.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/conditions/${o.slug}`} className="font-medium hover:underline">
                      {o.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>
      <CTABand variant="strong" />
    </>
  );
}
