export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "relieve-back-pain-at-home",
    title: "How to relieve back pain at home (and when to see a chiropractor)",
    date: "2026-03-15",
    excerpt:
      "Gentle movement, sleep position, and heat or ice can help — but some patterns need an exam. Here is a practical split between self-care and professional care.",
    body: [
      "Start with short walks and hip-flexor mobility if sitting makes your back feel worse. Avoid aggressive stretching during an acute flare unless a provider has cleared you.",
      "See a chiropractor when pain radiates, numbness or weakness appears, or symptoms do not improve within a reasonable window. An exam clarifies whether conservative care fits your case.",
    ],
  },
  {
    slug: "when-to-see-chiropractor",
    title: "When should you see a chiropractor?",
    date: "2026-03-10",
    excerpt:
      "Persistent pain, limited motion after injury, and headaches tied to neck tension are common reasons patients book — especially when they want a drug-free first step.",
    body: [
      "You do not need to wait until pain is unbearable. Early evaluation often means simpler plans and faster return to work or sport.",
      "If you have fever, major trauma, or progressive neurological symptoms, seek urgent or emergency care first — those scenarios are not routine chiropractic visits.",
    ],
  },
  {
    slug: "sciatica-treatment-explained",
    title: "Sciatica treatment explained (what helps and what to expect)",
    date: "2026-03-05",
    excerpt:
      "Sciatica describes irritation along the sciatic nerve pathway. Treatment depends on the cause — disc-related, stenosis, or muscle entrapment patterns differ.",
    body: [
      "Conservative care may include specific movement, manual therapy, and progressive loading as symptoms allow. Imaging is not always required on day one.",
      "Your chiropractor should explain red flags, expected timelines, and when referral or advanced imaging makes sense.",
    ],
  },
  {
    slug: "chiropractor-vs-physical-therapy",
    title: "Chiropractor vs physical therapy: how they fit together",
    date: "2026-03-01",
    excerpt:
      "Both focus on movement and function. Chiropractic often emphasizes joint-specific adjustments; physical therapy may emphasize exercise dosage — many patients benefit from either or both over time.",
    body: [
      "The best choice depends on your diagnosis, preferences, and insurance. Some people start with chiropractic for pain relief, then add PT for strength — others reverse the order.",
      "Clear communication between providers improves outcomes. Ask your Naples chiropractor if coordination with PT is appropriate for your goals.",
    ],
  },
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
