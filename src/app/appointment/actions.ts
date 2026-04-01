"use server";

import { site } from "@/lib/site";

export type AppointmentSubmitResult =
  | { ok: true; emailed: boolean }
  | { ok: false; error: string };

function requiredString(v: FormDataEntryValue | null): string | null {
  if (v == null) return null;
  const s = String(v).trim();
  return s.length ? s : null;
}

/**
 * Delivers the request by email when Resend is configured (optional).
 * Set RESEND_API_KEY and APPOINTMENT_NOTIFY_EMAIL in production.
 */
export async function submitAppointmentRequest(
  formData: FormData,
): Promise<AppointmentSubmitResult> {
  const name = requiredString(formData.get("name"));
  const email = requiredString(formData.get("email"));
  const phone = requiredString(formData.get("phone"));
  const date = requiredString(formData.get("date"));
  const time = requiredString(formData.get("time"));
  const notes = (requiredString(formData.get("notes")) ?? "").slice(0, 4000);

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (!phone) return { ok: false, error: "Please enter your phone number." };
  if (!date) return { ok: false, error: "Please choose a preferred date." };
  if (!time) return { ok: false, error: "Please choose a preferred time." };

  const lines = [
    `Appointment request — ${site.name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    "",
    notes ? `Notes:\n${notes}` : "Notes: (none)",
  ];
  const text = lines.join("\n");

  const key = process.env.RESEND_API_KEY;
  const notify = process.env.APPOINTMENT_NOTIFY_EMAIL;
  if (key && notify) {
    const from =
      process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [notify],
        reply_to: email,
        subject: `Appointment request — ${name}`,
        text,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error", res.status, err);
      return { ok: false, error: "We could not send your request. Please call the office." };
    }
    return { ok: true, emailed: true };
  }

  return { ok: true, emailed: false };
}
