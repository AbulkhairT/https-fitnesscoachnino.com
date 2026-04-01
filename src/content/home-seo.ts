/**
 * Homepage SEO: intro copy, FAQ (visible + schema), service area.
 */

export const homeSeo = {
  /** Opening paragraph — primary local + intent keywords, human-readable */
  intro: `A Better Life Chiropractic is a chiropractor in Naples, FL, focused on back pain, neck pain, headaches, sciatica symptoms, and recovery after car accidents — without making medication your only strategy. Dr. Deanna Barbaro provides exam-first care at 661 Goodlette Road North, Suite 108, with therapeutic massage available on-site when appropriate.`,
  serving:
    "Serving Naples, North Naples, Golden Gate, Pelican Bay, Park Shore, and nearby Collier County. Searching “chiropractor near me” in the 34102 area? We are on Goodlette Road with convenient parking and clear office hours.",
} as const;

export type FaqItem = { question: string; answer: string };

export const homeFaq: FaqItem[] = [
  {
    question: "Do you accept new patients at your Naples office?",
    answer:
      "Yes. New patients can request an appointment online or call (239) 263-3369. We offer a new patient web offer — ask when you book. Downloadable intake forms are on our website to save time before your visit.",
  },
  {
    question: "What does a chiropractor in Naples, FL treat?",
    answer:
      "We commonly help people with back pain, neck pain, headaches, sciatica-type leg pain, stiffness after auto accidents, and everyday strain from work or activity. Your first visit includes history and exam so recommendations match your case.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "For many people, conservative chiropractic care is appropriate and well-tolerated. We review your health history and exam findings, explain options, and refer or co-manage when something falls outside our scope.",
  },
  {
    question: "Do you treat car accident or whiplash injuries?",
    answer:
      "Yes. We evaluate common auto-injury presentations and provide structured care. PIP-related intake forms are available as PDFs on our New patient forms page.",
  },
  {
    question: "Where is the office located?",
    answer:
      "661 Goodlette Road North, Suite 108, Naples, FL 34102. You can open directions from our Contact page or call (239) 263-3369 for help finding us.",
  },
  {
    question: "Do you offer massage therapy?",
    answer:
      "Yes. Licensed therapeutic massage (MM#13986) complements chiropractic care when it fits your condition. Ask during your visit or read more on our Massage therapy page.",
  },
];
