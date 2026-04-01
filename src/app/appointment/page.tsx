import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request appointment",
  description: `Schedule with ${site.name}.`,
};

export default function AppointmentPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Request an appointment</h1>
        <p className="mt-6 text-[var(--muted-foreground)]">
          We use our secure scheduling system to find a time that fits your
          calendar. You will complete the flow on our trusted host site.
        </p>
        <a
          href={site.external.appointment}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-[var(--cta)] px-10 py-4 text-sm font-semibold text-[var(--cta-foreground)]"
        >
          Continue to scheduling
        </a>
        <p className="mt-8 text-sm text-[var(--muted-foreground)]">
          Prefer to talk to a person?{" "}
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>
        </p>
      </Container>
    </div>
  );
}
