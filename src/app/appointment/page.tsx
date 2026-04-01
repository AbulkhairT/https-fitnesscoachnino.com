import type { Metadata } from "next";
import { AppointmentEmbed } from "@/components/appointment/AppointmentEmbed";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment request",
  description: `Request an appointment with ${site.name}, Naples, FL.`,
};

export default function AppointmentPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl">Appointment request</h1>
        <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
          Use the form below to request a time with our office. We will do our
          best to accommodate your preferred day and time — your visit is fully
          booked only after you receive confirmation from us.
        </p>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          Questions? Call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-10">
          <AppointmentEmbed />
        </div>
      </Container>
    </div>
  );
}
