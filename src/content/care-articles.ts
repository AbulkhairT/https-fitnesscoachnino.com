export type CareArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const careArticles: CareArticle[] = [
  {
    slug: "subluxation",
    title: "Subluxation — misalignment and nerve irritation",
    excerpt:
      "A subluxation is a joint restriction that can affect how your nervous system communicates. Understanding it is the first step toward better function.",
    body: [
      "Chiropractors look for areas where spinal joints do not move optimally. Those restrictions may correlate with pain, stiffness, or broader health complaints.",
      "Adjustments aim to restore motion and reduce nerve interference — always matched to your comfort level and clinical picture.",
    ],
  },
  {
    slug: "arthritis-chiropractic",
    title: "Arthritis & chiropractic",
    excerpt:
      "Osteoarthritis is common. Careful movement and joint-friendly techniques can support comfort alongside your medical team’s guidance.",
    body: [
      "We do not reverse arthritis, but many patients feel better when stuck segments move more freely and surrounding muscles relax.",
      "Your plan may include modifications, home exercises, and pacing so improvements last.",
    ],
  },
  {
    slug: "headaches-neck-pain",
    title: "Headaches & neck pain",
    excerpt:
      "Neck tension and upper cervical mechanics often play a role in headache patterns — especially with screen time and driving.",
    body: [
      "After a thorough history, we assess posture, range of motion, and palpation findings to see if chiropractic is a good fit.",
      "Massage therapy at our office can complement adjustments when muscle tension is a primary driver.",
    ],
  },
  {
    slug: "herniated-discs",
    title: "Herniated discs",
    excerpt:
      "Disc-related symptoms deserve careful evaluation. We explain options clearly and refer when advanced imaging or specialty care is indicated.",
    body: [
      "Not every disc finding on imaging requires aggressive treatment; many people improve with conservative care and time.",
      "If you have progressive weakness, numbness, or bowel/bladder changes, seek urgent medical care — we screen for red flags at every visit.",
    ],
  },
  {
    slug: "fibromyalgia",
    title: "Fibromyalgia",
    excerpt:
      "Chiropractic does not cure fibromyalgia, but gentle care and lifestyle coaching can be one piece of a multidisciplinary plan.",
    body: [
      "We prioritize low-force techniques, pacing, and communication with your other providers.",
      "Goals often include sleep quality, movement tolerance, and stress reduction — not forcing through pain.",
    ],
  },
  {
    slug: "sciatica-leg-pain",
    title: "Sciatica & leg pain",
    excerpt:
      "Radiating leg pain may stem from the low back or peripheral nerves. We work to differentiate and treat conservatively when appropriate.",
    body: [
      "The sciatic nerve is long; irritation can happen at several points. Examination helps narrow the source.",
      "Adjustments, soft-tissue work, and home strategies often combine for steady improvement.",
    ],
  },
  {
    slug: "pregnancy-chiropractic",
    title: "Pregnancy & chiropractic",
    excerpt:
      "Gentle prenatal chiropractic may ease back and pelvic discomfort as your body adapts — with techniques suited to pregnancy.",
    body: [
      "We use positioning and pressure that respect ligament laxity and your obstetric provider’s guidance.",
      "Many patients value having a drug-free option for mechanical pain during a special season of life.",
    ],
  },
  {
    slug: "ovarian-prostate-health",
    title: "Ovarian & prostate health — a chiropractic perspective",
    excerpt:
      "Chiropractic does not treat organs directly; it supports nervous system function and whole-body balance alongside your medical providers.",
    body: [
      "Research and clinical interest continue around how stress, inflammation, and autonomic balance relate to reproductive and pelvic health.",
      "We stay within our scope: spinal and musculoskeletal care, education, and referrals when specialty evaluation is needed.",
    ],
  },
  {
    slug: "autism-chiropractic-approach",
    title: "Autism — the chiropractic approach",
    excerpt:
      "Families sometimes explore gentle chiropractic for comfort, sleep, and sensory regulation — always as part of a broader care team.",
    body: [
      "Techniques are adapted for tolerance and communication style. There is no one-size plan; we move at the child’s pace.",
      "We respect your pediatrician, therapists, and educators as primary partners in your child’s health.",
    ],
  },
];

export function getCareArticle(slug: string): CareArticle | undefined {
  return careArticles.find((a) => a.slug === slug);
}
