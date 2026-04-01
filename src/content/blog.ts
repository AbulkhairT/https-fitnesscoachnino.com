export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chiropractic-care-stress-levels",
    title: "How chiropractic care may improve your stress levels",
    date: "2026-03-01",
    excerpt:
      "When tension lives in the spine and surrounding muscles, your nervous system stays on high alert. Gentle, specific care can help your body shift toward ease.",
    body: [
      "Stress is not only mental — it shows up in posture, breathing, and muscle tone. Chiropractic focuses on how your spine moves and how that movement relates to nerve function.",
      "Many patients notice they sleep better, focus more easily, or simply feel less “wound up” as care progresses. Your experience is individual; we listen first, then recommend a plan.",
    ],
  },
  {
    slug: "disc-conditions-chiropractor",
    title: "What disc conditions can a chiropractor help with?",
    date: "2026-03-01",
    excerpt:
      "Disc-related pain varies widely. Here is how conservative chiropractic care fits into an informed, collaborative approach.",
    body: [
      "Bulging or herniated discs can irritate nearby nerves, causing pain, numbness, or weakness. Imaging and history guide whether chiropractic is appropriate for your case.",
      "We emphasize careful technique, clear communication, and coordination with other providers when needed. Surgery is not the first conversation — understanding is.",
    ],
  },
  {
    slug: "regular-adjustments-benefits",
    title: "The benefits of regular chiropractic adjustments",
    date: "2026-02-01",
    excerpt:
      "Consistency builds familiarity between you and your spine — so small issues are caught before they become loud ones.",
    body: [
      "Regular care is not about dependency; it is about maintaining range of motion and reducing cumulative strain from desks, driving, and daily life.",
      "Dr. Barbaro adjusts frequency based on goals — whether you are in pain, in recovery, or optimizing wellness.",
    ],
  },
  {
    slug: "chiropractic-all-ages",
    title: "The benefits of chiropractic care across all ages",
    date: "2026-02-01",
    excerpt:
      "From kids to grandparents, gentle chiropractic can support comfort, posture, and activity at every stage.",
    body: [
      "Techniques and pressure adapt to age, bone density, and health history. Families often appreciate having one trusted office for multiple generations.",
      "If you are curious whether care is right for a child or senior in your household, ask — we are happy to explain what a visit looks like.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
