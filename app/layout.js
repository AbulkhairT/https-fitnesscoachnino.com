import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://massagetherapy-naples.com"),
  title: "Borys Sapar, LMT — Therapeutic Massage in Naples, FL",
  description:
    "Individualized therapeutic massage in Naples, Florida. Specializing in deep tissue, trigger point, lymphatic drainage, neuromuscular, and joint massage. Assessment-driven treatment with measurable results. Text to book: (239) 272-0598.",
  keywords: [
    "therapeutic massage Naples FL",
    "massage therapist Naples Florida",
    "deep tissue massage Naples",
    "lymphatic drainage Naples FL",
    "trigger point massage Naples",
    "neuromuscular massage Naples",
    "sports massage Naples FL",
    "Borys Sapar LMT",
    "Sapar Therapy Naples",
  ],
  authors: [{ name: "Borys Sapar" }],
  openGraph: {
    title: "Borys Sapar, LMT — Therapeutic Massage in Naples, FL",
    description:
      "Assessment-driven therapeutic massage in Naples, FL. Relief for muscle tension, pain, restricted movement, and stress. Text to book.",
    url: "https://massagetherapy-naples.com",
    siteName: "Sapar Therapy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sapar Therapy — Therapeutic Massage in Naples, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borys Sapar, LMT — Therapeutic Massage in Naples, FL",
    description:
      "Assessment-driven therapeutic massage in Naples, FL. Text to book: (239) 272-0598.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://massagetherapy-naples.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://massagetherapy-naples.com",
  name: "Sapar Therapy",
  description:
    "Individualized therapeutic massage practice in Naples, FL. Specializing in deep tissue, trigger point, lymphatic drainage, and neuromuscular massage with functional assessment and measurable results.",
  url: "https://massagetherapy-naples.com",
  telephone: "+12392720598",
  email: "sapartherapy@gmail.com",
  image: "https://massagetherapy-naples.com/og-image.jpg",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "800 Seagate Dr, Unit 201",
    addressLocality: "Naples",
    addressRegion: "FL",
    postalCode: "34103",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1501,
    longitude: -81.7948,
  },
  areaServed: {
    "@type": "City",
    name: "Naples",
  },
  hasMap: "https://maps.google.com/?q=800+Seagate+Dr+Unit+201+Naples+FL+34103",
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Borys Sapar",
    jobTitle: "Licensed Massage Therapist",
    description:
      "International Affiliate Member of APTA, LMT license MA 104946, 10 years of experience in physical and occupational therapy.",
  },
  serviceType: [
    "Therapeutic Massage",
    "Deep Tissue Massage",
    "Lymphatic Drainage Massage",
    "Trigger Point Massage",
    "Neuromuscular Massage",
    "Joint Massage",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Therapeutic Massage",
      price: "140",
      priceCurrency: "USD",
      description: "50-minute customized therapeutic massage session",
    },
    {
      "@type": "Offer",
      name: "Deep Tissue Massage",
      price: "130",
      priceCurrency: "USD",
      description: "50-minute deep tissue massage session",
    },
    {
      "@type": "Offer",
      name: "Lymphatic Drainage",
      price: "120",
      priceCurrency: "USD",
      description: "50-minute lymphatic drainage massage session",
    },
    {
      "@type": "Offer",
      name: "Trigger Point Massage",
      price: "120",
      priceCurrency: "USD",
      description: "50-minute trigger point massage session",
    },
    {
      "@type": "Offer",
      name: "Neuromuscular Massage",
      price: "120",
      priceCurrency: "USD",
      description: "50-minute neuromuscular massage session",
    },
    {
      "@type": "Offer",
      name: "Joint Massage",
      price: "130",
      priceCurrency: "USD",
      description: "50-minute joint massage session",
    },
  ],
  specialOpeningHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      description: "Free consultations for children under 16 and adults 65+",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0e0e0e" }}>
        {children}
      </body>
    </html>
  );
}
