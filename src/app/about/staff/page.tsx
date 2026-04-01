import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the staff",
  description: `The team at ${site.name} in Naples, FL.`,
};

export default function StaffPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Meet the staff</h1>
        <p className="mt-8 leading-relaxed text-[var(--muted-foreground)]">
          Our front desk and clinical team work together to make your visits
          smooth, welcoming, and on time. From your first call to checkout, you
          will meet people who care about getting the details right.
        </p>
        <p className="mt-6 leading-relaxed text-[var(--muted-foreground)]">
          For the latest team photos and bios, visit our{" "}
          <a
            href={`${site.url}/staff`}
            className="font-medium text-[var(--accent-strong)]"
            target="_blank"
            rel="noreferrer"
          >
            original staff page
          </a>{" "}
          while we sync full profiles here — or call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>{" "}
          to say hello.
        </p>
      </Container>
    </div>
  );
}
