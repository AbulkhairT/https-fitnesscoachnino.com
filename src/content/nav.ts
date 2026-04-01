import { communityNavChildren } from "@/content/community";

export type NavChild = { label: string; href: string };
export type NavEntry = { label: string; href?: string; children?: NavChild[] };

export const mainNav: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "New patient",
    children: [
      { label: "New patient center", href: "/new-patient" },
      { label: "What to expect", href: "/new-patient/what-to-expect" },
      { label: "Your first visit", href: "/new-patient/first-visit" },
      { label: "New patient forms", href: "/new-patient/forms" },
      { label: "Payment options", href: "/new-patient/payment" },
      { label: "Virtual office tour", href: "/new-patient/tour" },
      { label: "Special web offer", href: "/special-offer" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About us", href: "/about" },
      { label: "Meet the chiropractor", href: "/about/dr-barbaro" },
      { label: "Meet the staff", href: "/about/staff" },
      { label: "Services & techniques", href: "/services" },
      { label: "Massage therapy", href: "/about/massage" },
    ],
  },
  {
    label: "Chiropractic & you",
    href: "/care",
    children: [
      { label: "Subluxation", href: "/care/subluxation" },
      { label: "Arthritis & chiropractic", href: "/care/arthritis-chiropractic" },
      { label: "Headaches & neck pain", href: "/care/headaches-neck-pain" },
      { label: "Herniated discs", href: "/care/herniated-discs" },
      { label: "Fibromyalgia", href: "/care/fibromyalgia" },
      { label: "Sciatica & leg pain", href: "/care/sciatica-leg-pain" },
      { label: "Ovarian & prostate health", href: "/care/ovarian-prostate-health" },
      { label: "Pregnancy & chiropractic", href: "/care/pregnancy-chiropractic" },
      { label: "Autism — chiropractic approach", href: "/care/autism-chiropractic-approach" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  {
    label: "Community",
    href: "/community",
    children: communityNavChildren,
  },
];
