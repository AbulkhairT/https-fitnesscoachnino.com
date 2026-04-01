import { site } from "@/lib/site";

/**
 * Live appointment request form from the practice’s original site
 * ([appointment page](https://abetterlifechiropractic.com/appointment)).
 * If the host blocks embedding, the fallback link remains available below.
 */
export function AppointmentEmbed() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
        <iframe
          title="Request an appointment — A Better Life Chiropractic"
          src={site.external.appointment}
          className="min-h-[1100px] w-full border-0 sm:min-h-[1280px]"
          loading="lazy"
          allow="clipboard-write; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="text-center text-sm text-[var(--muted-foreground)]">
        Prefer a new tab?{" "}
        <a
          href={site.external.appointment}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--accent-strong)] underline-offset-4 hover:underline"
        >
          Open the appointment form directly
        </a>
        . Your appointment is confirmed once the office contacts you.
      </p>
    </div>
  );
}
