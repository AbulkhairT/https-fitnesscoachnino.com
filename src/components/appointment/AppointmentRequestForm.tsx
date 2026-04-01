"use client";

import { useState, useTransition } from "react";
import { submitAppointmentRequest } from "@/app/appointment/actions";
import { site } from "@/lib/site";

const TIME_OPTIONS = [
  { value: "", label: "Select time" },
  { value: "8:30 AM", label: "8:30 AM" },
  { value: "9:00 AM", label: "9:00 AM" },
  { value: "9:30 AM", label: "9:30 AM" },
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM" },
  { value: "3:30 PM", label: "3:30 PM" },
  { value: "4:00 PM", label: "4:00 PM" },
  { value: "4:30 PM", label: "4:30 PM" },
  { value: "5:00 PM", label: "5:00 PM" },
  { value: "5:30 PM", label: "5:30 PM" },
  { value: "6:00 PM", label: "6:00 PM" },
];

function buildMailtoBody(parts: Record<string, string>): string {
  return [
    `Name: ${parts.name}`,
    `Email: ${parts.email}`,
    `Phone: ${parts.phone}`,
    `Preferred date: ${parts.date}`,
    `Preferred time: ${parts.time}`,
    "",
    parts.notes ? `Notes:\n${parts.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function AppointmentRequestForm() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{
    emailed: boolean;
    mailtoHref?: string;
  } | null>(null);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8 lg:p-10">
      {done ? (
        <div className="space-y-4 text-center sm:text-left">
          <p className="font-display text-2xl text-[var(--foreground)]">Thank you</p>
          <p className="text-[var(--muted-foreground)]">
            {done.emailed
              ? "We received your request and will contact you to confirm your appointment."
              : "Your details are ready to send. If email did not open automatically, use the button below or call us to complete your request."}
          </p>
          {!done.emailed && done.mailtoHref ? (
            <a
              href={done.mailtoHref}
              className="inline-flex rounded-full bg-[var(--cta)] px-6 py-3 text-sm font-semibold text-[var(--cta-foreground)]"
            >
              Send request by email
            </a>
          ) : null}
          <p className="text-sm text-[var(--muted-foreground)]">
            Your appointment is fully booked only after you receive confirmation
            from our office. Questions?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--accent-strong)]">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      ) : (
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") ?? "").trim();
            const email = String(fd.get("email") ?? "").trim();
            const phone = String(fd.get("phone") ?? "").trim();
            const date = String(fd.get("date") ?? "").trim();
            const time = String(fd.get("time") ?? "").trim();
            const notes = String(fd.get("notes") ?? "").trim();

            startTransition(async () => {
              const result = await submitAppointmentRequest(fd);
              if (!result.ok) {
                setError(result.error);
                return;
              }
              const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
                `Appointment request — ${name || "Patient"}`,
              )}&body=${encodeURIComponent(
                buildMailtoBody({ name, email, phone, date, time, notes }),
              )}`;
              setDone({ emailed: result.emailed, mailtoHref });
            });
          }}
        >
          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
              {error}
            </p>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5">
              <div>
                <label htmlFor="appt-name" className="block text-sm font-medium">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="appt-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name (required)"
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="appt-email" className="block text-sm font-medium">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="appt-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter email (required)"
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="appt-phone" className="block text-sm font-medium">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(239) 263-3369 (required)"
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="appt-date" className="block text-sm font-medium">
                  Date <span className="text-red-600">*</span>
                </label>
                <input
                  id="appt-date"
                  name="date"
                  type="date"
                  required
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="appt-time" className="block text-sm font-medium">
                  Time <span className="text-red-600">*</span>
                </label>
                <select
                  id="appt-time"
                  name="time"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2"
                >
                  {TIME_OPTIONS.map((o) => (
                    <option key={o.value || "empty"} value={o.value} disabled={o.value === ""}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="appt-notes" className="block text-sm font-medium">
                Notes
              </label>
              <textarea
                id="appt-notes"
                name="notes"
                rows={14}
                placeholder="Notes to the doctor"
                className="mt-2 min-h-[280px] w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none ring-[var(--accent)] focus:ring-2 lg:min-h-[340px]"
              />
            </div>
          </div>

          <p className="text-xs text-[var(--muted-foreground)]">
            Please do not submit any Protected Health Information (PHI) through this form.
          </p>

          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-[var(--cta)] px-10 py-3.5 text-sm font-semibold uppercase tracking-wide text-[var(--cta-foreground)] transition hover:bg-[var(--cta-hover)] disabled:opacity-60"
          >
            {pending ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
