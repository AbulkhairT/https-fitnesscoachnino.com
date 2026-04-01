import type { Metadata } from "next";
import { AppointmentRequestForm } from "@/components/appointment/AppointmentRequestForm";
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
          Use this form to request an appointment with us. While we will do our best to
          accommodate your requested day and time, please note — your appointment is not
          fully booked until you get a confirmation from us.
        </p>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          Questions? Call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--accent-strong)]">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-10">
          <AppointmentRequestForm />
        </div>
      </Container>
    </div>
  );
}
