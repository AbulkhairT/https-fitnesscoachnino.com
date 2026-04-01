export const site = {
  name: "A Better Life Chiropractic",
  shortName: "A Better Life Chiropractic",
  tagline: "Move better, hurt less — clear chiropractic care in Naples",
  description:
    "Naples chiropractor helping you recover from pain and injury without relying on medication. Dr. Deanna Barbaro — relief, corrective care, massage, family visits.",
  url: "https://abetterlifechiropractic.com",
  phoneDisplay: "(239) 263-3369",
  phoneTel: "2392633369",
  email: "info@abetterlifechiropractic.com",
  address: {
    line1: "661 Goodlette Road North",
    line2: "Ste 108",
    city: "Naples",
    state: "FL",
    zip: "34102",
  },
  doctor: {
    name: "Dr. Deanna Barbaro",
    title: "Chiropractor",
  },
  massageLicense: "MM#13986",
  hours: [
    { label: "Monday", value: "8:30 AM – 10:30 AM · 3:30 PM – 6:00 PM" },
    { label: "Tuesday", value: "Closed AM · 3:30 PM – 6:00 PM" },
    { label: "Wednesday", value: "8:30 AM – 10:30 AM · 3:30 PM – 6:00 PM" },
    { label: "Thursday", value: "8:30 AM – 10:30 AM · 3:30 PM – 6:00 PM" },
    { label: "Friday", value: "Closed" },
    { label: "Saturday", value: "Closed" },
    { label: "Sunday", value: "Closed" },
  ],
  external: {
    /** Legacy hosted form — prefer in-app /appointment */
    appointment: "https://abetterlifechiropractic.com/appointment",
    onlineForms: "https://abetterlifechiropractic.com/online-forms.html",
    spineSimulator: "https://abetterlifechiropractic.com/3d-spine-simulator",
    originalBlog: "https://abetterlifechiropractic.com/blog",
    /** iMatrix / Chiromatrix site admin (staff only) */
    adminPortal: "https://portal.chiromatrixbase.com",
    imatrixCopyright: "https://www.chiromatrix.com",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=661+Goodlette+Road+North+Ste+108+Naples+FL+34102&hl=en&z=16&output=embed",
  mapLink:
    "https://maps.google.com/?q=661+Goodlette+Road+North+Ste+108+Naples+FL+34102",
  newPatientOffer: {
    headline: "New patient web offer",
    detail: "$207 consultation, examination & X-rays",
    disclaimer:
      "Other services at usual fees. You may refuse or be reimbursed for services within 72 hours of responding to this offer per Florida advertising rules. Insurance billing not applicable to web offer.",
  },
} as const;

export function fullAddress(): string {
  const { line1, line2, city, state, zip } = site.address;
  return `${line1}, ${line2}, ${city}, ${state} ${zip}`;
}
