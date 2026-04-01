import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServiceConditionTemplate } from "@/components/ServiceConditionTemplate";
import { conditionPages, conditionSlugs } from "@/lib/content";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return conditionSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = conditionPages[params.slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${SITE.url}/conditions/${params.slug}`,
    },
  };
}

export default function ConditionPage({ params }) {
  const data = conditionPages[params.slug];
  if (!data) notFound();

  return (
    <PageShell>
      <ServiceConditionTemplate
        type="condition"
        h1={data.h1}
        primaryKeyword={data.primaryKeyword}
        problem={data.problem}
        explain={data.explain}
        treatment={data.treatment}
        why={data.why}
      />
    </PageShell>
  );
}
