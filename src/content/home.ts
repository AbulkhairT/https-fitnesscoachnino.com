/**
 * Homepage copy — outcome-led, conversion-focused.
 */

export const home = {
  hero: {
    eyebrow: "Naples, Florida",
    /** First line of H1 — primary local keyword */
    h1Keyword: "Chiropractor in Naples, Florida",
    headline: "Relief that lasts — without living on medication.",
    subhead:
      "Back pain, neck tension, headaches, injury recovery. Dr. Deanna Barbaro explains what’s wrong, adjusts with precision, and builds a plan you actually understand.",
    ctaPrimary: "Book your visit",
    ctaSecondary: "Call",
    ctaTertiary: "New patient offer",
  },
  trust: {
    headline: "Why people choose us",
    items: [
      {
        label: "Naples practice",
        detail: "Local, doctor-led care — not a franchise script.",
      },
      {
        label: "Time to listen",
        detail: "Visits built around your story and your exam — not a rushed adjustment line.",
      },
      {
        label: "Whole-person plan",
        detail: "Relief first, then stability and habits that support lasting change.",
      },
    ],
  },
  problemSolution: {
    eyebrow: "The real problem",
    headline: "Pain steals your focus — at work, at home, everywhere.",
    problems: [
      "You’ve tried ignoring it, stretching, maybe meds. It keeps coming back.",
      "You’re tired of guessing whether it’s “just stress” or something that needs real attention.",
    ],
    solutionEyebrow: "What we do",
    solutionHeadline: "Find the cause. Treat it directly. Teach you what to do next.",
    solutionBody:
      "We use a careful exam, clear explanations, and hands-on chiropractic care — plus massage and exercises when they fit — so you’re not just chasing symptoms week after week.",
  },
  services: {
    eyebrow: "What we help with",
    headline: "Care built around outcomes — not buzzwords.",
    intro:
      "Whether you’re healing from a car accident, stuck with chronic tension, or trying to stay active as you age, we meet you where you are.",
    cards: [
      {
        title: "Back & neck pain",
        href: "/conditions/back-pain",
        outcome: "Less stiffness and fewer flare-ups so you can sit, sleep, and move with more ease.",
      },
      {
        title: "Headaches & tension",
        href: "/conditions/migraines-headaches",
        outcome: "Identify contributing patterns and address what your body is holding onto.",
      },
      {
        title: "Injury & auto accidents",
        href: "/conditions/auto-accident-injury",
        outcome: "Structured support through recovery with documentation and a clear path forward.",
      },
      {
        title: "Family & wellness",
        href: "/services",
        outcome: "From kids to parents — care that fits your household and your schedule.",
      },
    ],
    linkLabel: "See all services",
  },
  doctor: {
    eyebrow: "Your chiropractor",
    headline: "Dr. Deanna Barbaro",
    paragraphs: [
      "You deserve a doctor who explains what’s going on in plain language — and respects how your body heals. That’s the standard here.",
      "We combine precise adjustments with education and, when appropriate, massage and home exercises so you’re part of the process, not a passenger.",
    ],
    linkLabel: "Meet Dr. Barbaro",
  },
  whyUs: {
    eyebrow: "Not generic care",
    headline: "What makes this practice different",
    points: [
      {
        title: "Education-first visits",
        text: "You leave knowing what we saw, what we recommend, and why — not confused by jargon.",
      },
      {
        title: "Phases that make sense",
        text: "Relief, correction, and wellness aren’t marketing labels — they’re how we structure progress.",
      },
      {
        title: "Massage on-site",
        text: "Licensed therapeutic massage (MM#13986) complements chiropractic when your case calls for it.",
      },
    ],
  },
  experience: {
    eyebrow: "Your first visit",
    headline: "Calm, thorough, and respectful of your time.",
    steps: [
      {
        title: "Tell your story",
        text: "We listen — what hurts, what makes it worse, and what you want to get back to.",
      },
      {
        title: "Exam & clarity",
        text: "We assess movement and alignment so recommendations aren’t guesswork.",
      },
      {
        title: "A plan you can follow",
        text: "You’ll know the next steps, what to expect, and how we measure improvement.",
      },
    ],
    linkLabel: "New patient details",
  },
  phases: {
    eyebrow: "How care progresses",
    headline: "Three phases — one direction: you, feeling better.",
  },
  testimonials: {
    eyebrow: "Real words",
    headline: "What patients say",
  },
  location: {
    eyebrow: "Visit us",
    headline: "Location & hours",
    subhead: "Easy to reach on Goodlette Road. Call with questions — we’re glad to help.",
    mapCta: "Open in Maps",
  },
} as const;

export const ctaBand = {
  default: {
    headline: "Next step: pick a time.",
    subhead: "Online request or phone — we confirm every appointment personally.",
  },
  strong: {
    headline: "Book now.",
    subhead: "New patients welcome. Ask about the web offer when you call.",
  },
} as const;
