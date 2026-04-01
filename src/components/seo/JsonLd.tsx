import { openingHoursSpecification } from "@/lib/opening-hours-schema";
import { logoUrl } from "@/lib/images";
import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+1${site.phoneTel}`,
    email: site.email,
    image: logoUrl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1473,
      longitude: -81.8012,
    },
    areaServed: [
      { "@type": "City", name: "Naples", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "AdministrativeArea", name: "Collier County" },
    ],
    openingHoursSpecification,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
