import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServiceConditionTemplate } from "@/components/ServiceConditionTemplate";
import { servicePages, serviceSlugs } from "@/lib/content";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = servicePages[params.slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${SITE.url}/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }) {
  const data = servicePages[params.slug];
  if (!data) notFound();

  return (
    <PageShell>
      <ServiceConditionTemplate
        type="service"
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
