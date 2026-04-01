import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const siteUrl = SITE.url;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — Fitness Coaching & Personal Training in Naples, FL`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium fitness coaching in Naples, FL: fat loss, strength, and performance with clear programming and accountability. Book a complimentary assessment with Max Flex Fitness.",
  keywords: [
    "personal trainer naples fl",
    "fitness coach near me naples",
    "online fitness coach naples",
    "fat loss coach naples",
    "muscle building coach naples",
    "hire a fitness coach naples",
    "fitness transformation coach",
    "corporate wellness naples",
    "sports performance training naples",
    "max flex fitness",
  ],
  openGraph: {
    title: `${SITE.name} — Naples Fitness Coaching & Training`,
    description:
      "Lean, strong, consistent — coaching built for real schedules in Naples, FL. Book your assessment.",
    url: siteUrl,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteUrl}/#business`,
  name: SITE.name,
  description:
    "Personal training and corporate wellness coaching in Naples, Florida.",
  url: siteUrl,
  telephone: SITE.phoneE164,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  areaServed: SITE.areaServed,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "By appointment",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans pb-24 md:pb-0">{children}</body>
    </html>
  );
}
