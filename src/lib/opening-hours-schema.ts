/** Schema.org OpeningHoursSpecification — matches public office schedule */

export const openingHoursSpecification = [
  { dayOfWeek: "Monday", opens: "08:30", closes: "10:30" },
  { dayOfWeek: "Monday", opens: "15:30", closes: "18:00" },
  { dayOfWeek: "Tuesday", opens: "15:30", closes: "18:00" },
  { dayOfWeek: "Wednesday", opens: "08:30", closes: "10:30" },
  { dayOfWeek: "Wednesday", opens: "15:30", closes: "18:00" },
  { dayOfWeek: "Thursday", opens: "08:30", closes: "10:30" },
  { dayOfWeek: "Thursday", opens: "15:30", closes: "18:00" },
].map((h) => ({
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: h.dayOfWeek,
  opens: h.opens,
  closes: h.closes,
}));
