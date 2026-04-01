/**
 * Condition landing pages — one primary keyword per URL (local SEO).
 */

export type ConditionEntry = {
  slug: string;
  /** One main phrase this URL targets */
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  problem: string;
  explanation: string;
  treatment: string;
  whyUs: string;
  localLine: string;
};

export const conditions: ConditionEntry[] = [
  {
    slug: "back-pain",
    primaryKeyword: "back pain chiropractor Naples FL",
    secondaryKeywords: ["lower back pain treatment Naples", "chiropractor for sciatica symptoms"],
    metaTitle: "Back Pain Chiropractor in Naples, FL",
    metaDescription:
      "Chiropractic care for lower and upper back pain in Naples, FL. Exam-first care on Goodlette Road with Dr. Deanna Barbaro. Book a visit or call (239) 263-3369.",
    h1: "Back pain chiropractor in Naples, FL",
    lead:
      "Persistent back pain makes everything harder — work, sleep, even standing in line. If you are in Naples or nearby and want a conservative, drug-free approach, we start with a clear exam and honest recommendations.",
    problem:
      "Back pain often builds slowly: desk posture, lifting, old injuries, or stress held in your muscles. Many people try rest, heat, or medication and still feel tight, achy, or sharp pain with certain movements.",
    explanation:
      "Your spine and surrounding tissues work as a system. When joints do not move well, muscles guard and nerves can become irritated. Chiropractic care focuses on restoring healthier motion and reducing nerve irritation — without masking symptoms as the only plan.",
    treatment:
      "After your history and exam, Dr. Deanna Barbaro explains what we found in plain language. Care may include specific adjustments, guidance on movement, and when appropriate, massage therapy in the same office. We also help you understand what to do between visits.",
    whyUs:
      "Patients tell us they value time to ask questions, a plan that matches their goals, and care that does not feel rushed. We serve Naples from our office on Goodlette Road North.",
    localLine:
      "Serving Naples, North Naples, Golden Gate, and nearby Collier County communities.",
  },
  {
    slug: "neck-pain",
    primaryKeyword: "neck pain chiropractor Naples FL",
    secondaryKeywords: ["stiff neck treatment Naples", "text neck chiropractor"],
    metaTitle: "Neck Pain Chiropractor in Naples, FL",
    metaDescription:
      "Neck pain and stiffness treated with chiropractic care in Naples, FL. Thorough evaluation and personalized plans. Call (239) 263-3369 or request an appointment online.",
    h1: "Neck pain chiropractor in Naples, FL",
    lead:
      "Neck pain, tension at the base of the skull, and trouble turning your head are common — especially if you work at a screen or drive often. We help Naples patients understand the cause and build a sensible path forward.",
    problem:
      "Neck discomfort can feel like aching, pinching, or headaches that start at the neck. It may flare after sleep, long drives, or stress. Ignoring it often means tighter muscles and more limited motion over time.",
    explanation:
      "The cervical spine supports your head and protects nerves that travel to your shoulders and arms. Irritation or restricted motion in this area can refer pain and tension in ways that feel confusing without an exam.",
    treatment:
      "We review posture, range of motion, and relevant orthopedic tests. Care is tailored to your presentation — gentle, specific techniques when appropriate — with education so you know how daily habits help or hurt recovery.",
    whyUs:
      "Our approach is educational and collaborative: you should leave understanding your plan. Licensed massage therapy is available when soft tissue work supports your case.",
    localLine:
      "Convenient for patients in Naples, Park Shore, Pelican Bay, and surrounding areas.",
  },
  {
    slug: "sciatica",
    primaryKeyword: "sciatica chiropractor Naples FL",
    secondaryKeywords: ["leg pain sciatica treatment", "chiropractor for pinched nerve"],
    metaTitle: "Sciatica & Leg Pain Chiropractor in Naples, FL",
    metaDescription:
      "Sciatica and radiating leg pain evaluated by a Naples, FL chiropractor. Conservative care on Goodlette Road. Book online or call (239) 263-3369.",
    h1: "Sciatica chiropractor in Naples, FL",
    lead:
      "Burning, tingling, or shooting pain down the leg can be frightening. We take symptoms seriously, explain what sciatica means in plain terms, and outline whether chiropractic care is appropriate for your situation.",
    problem:
      "Sciatica-type pain often involves irritation of the sciatic nerve or its nerve roots. It can follow a disc issue, stenosis, or muscle entrapment — different causes need different plans.",
    explanation:
      "Not every leg pain is the same. A careful history and exam help us differentiate patterns that respond well to conservative care from those that need referral or imaging discussion.",
    treatment:
      "When indicated, we use specific adjustments, movement advice, and progressive strategies to reduce nerve irritation and improve function. We coordinate with other providers when your case requires it.",
    whyUs:
      "You deserve clarity before treatment begins. We prioritize honest expectations and measurable goals — not open-ended care without a reason.",
    localLine:
      "Serving Naples and nearby communities in Southwest Florida.",
  },
  {
    slug: "migraines-headaches",
    primaryKeyword: "migraine headache chiropractor Naples FL",
    secondaryKeywords: ["tension headache relief Naples", "cervicogenic headache chiropractor"],
    metaTitle: "Headaches & Migraines — Chiropractor in Naples, FL",
    metaDescription:
      "Chiropractic evaluation for headaches and migraines in Naples, FL. Address neck tension and posture contributors. Schedule with A Better Life Chiropractic — (239) 263-3369.",
    h1: "Headache & migraine care with a Naples chiropractor",
    lead:
      "Headaches are not always ‘just stress.’ Neck joints, muscles, and posture can play a role. We evaluate whether your presentation has features that may respond to chiropractic care alongside lifestyle guidance.",
    problem:
      "Frequent headaches disrupt focus, mood, and energy. Many patients have tried OTC medication repeatedly without addressing physical contributors.",
    explanation:
      "Cervicogenic and tension-type headaches can overlap with neck dysfunction. That does not mean every headache is simple — we listen to your pattern (location, duration, triggers) before recommending care.",
    treatment:
      "Care may include gentle adjustments to improve neck motion, soft tissue strategies, and ergonomic recommendations. We set realistic timelines and revisit progress together.",
    whyUs:
      "Dr. Deanna Barbaro takes time to explain findings so you are not left guessing. Massage therapy is available in-office when it supports your recovery.",
    localLine:
      "Naples, FL office on Goodlette Road North — easy access for local residents and workers.",
  },
  {
    slug: "auto-accident-injury",
    primaryKeyword: "car accident chiropractor Naples FL",
    secondaryKeywords: ["whiplash treatment Naples", "PIP chiropractor Florida"],
    metaTitle: "Car Accident & Whiplash Chiropractor in Naples, FL",
    metaDescription:
      "Auto injury and whiplash chiropractic care in Naples, FL. Documentation, exam, and treatment planning. Call (239) 263-3369 or book online — A Better Life Chiropractic.",
    h1: "Car accident chiropractor in Naples, FL",
    lead:
      "After a collision, even ‘minor’ impacts can cause whiplash-type symptoms that show up hours or days later. We document your history, perform an appropriate exam, and help you understand the next conservative steps.",
    problem:
      "Neck pain, headaches, mid-back tightness, and dizziness are common after accidents. Without evaluation, symptoms can become chronic or harder to correlate to the event later.",
    explanation:
      "Chiropractic offices often play a key role early in recovery alongside other providers. We focus on restoring motion, reducing muscle guarding, and monitoring neurological symptoms that require referral.",
    treatment:
      "Your plan is tailored to injury presentation and any insurance or legal documentation needs. We have intake forms for PIP and auto-related cases available as PDF downloads on our site.",
    whyUs:
      "Clear communication, structured visits, and a team mindset — we want you to recover as fully as possible and understand your care along the way.",
    localLine:
      "Serving Naples, Marco Island commuters, and Collier County residents recovering from motor vehicle injuries.",
  },
];

export function getCondition(slug: string): ConditionEntry | undefined {
  return conditions.find((c) => c.slug === slug);
}
