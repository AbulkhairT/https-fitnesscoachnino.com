/** Max Flex Fitness — public site constants (fitnesscoachnino.com) */
export const SITE = {
  name: "Max Flex Fitness",
  legalName: "Max Flex Fitness, LLC",
  url: "https://fitnesscoachnino.com",
  phoneE164: "+12392874558",
  phoneDisplay: "(239) 287-4558",
  email: "info@maxflexfitness.com",
  bookingUrl: "https://maxflexfitness.as.me/schedule.php",
  city: "Naples",
  region: "FL",
  postalCode: "34119",
  country: "US",
  areaServed: "Naples, Bonita Springs, Estero, and Southwest Florida",
  foundedYear: 2011,
  ratingLabel: "Best of the Best — Top 3 (2023–2025)",
  leadTrainer: "Nino Magaddino",
  certifications: [
    "NASM-CPT",
    "NASM-MT",
    "NASM-CES",
    "NASM-PES",
    "NASM-BCS",
  ],
};

export const MAPS_QUERY = "Naples, FL 34119";

export function telHref() {
  return `tel:${SITE.phoneE164}`;
}

export function smsHref(body = "") {
  const n = SITE.phoneE164.replace(/\D/g, "");
  const q = body ? `?body=${encodeURIComponent(body)}` : "";
  return `sms:${n}${q}`;
}
