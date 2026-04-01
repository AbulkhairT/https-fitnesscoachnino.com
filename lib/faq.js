import { SITE } from "@/lib/site";

export const faqItems = [
  {
    q: `Who is ${SITE.name} best for?`,
    a: "Adults who want a leaner, stronger body and the consistency to keep it — without living in the gym or following random programs.",
  },
  {
    q: "Do you coach fat loss and body recomposition?",
    a: "Yes. We build training, recovery, and habits around your schedule so progress is measurable week to week.",
  },
  {
    q: "Can I train online or hybrid?",
    a: "Yes — virtual coaching is available when it fits your goals and equipment access.",
  },
  {
    q: "What if I have pain or old injuries?",
    a: "We coach around limitations and progress load safely. If you need medical care, we coordinate expectations and refer out.",
  },
  {
    q: "How is this different from a gym membership?",
    a: "You get a plan, accountability, and technique coaching — not access alone.",
  },
  {
    q: `Where do you train clients in ${SITE.city}?`,
    a: `We serve ${SITE.areaServed}. Exact training location depends on your program — ask during your intake.`,
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
