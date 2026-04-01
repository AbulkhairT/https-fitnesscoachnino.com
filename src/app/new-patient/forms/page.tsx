import type { Metadata } from "next";
import Link from "next/link";
import { patientFormGroups } from "@/content/patient-forms";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New patient forms",
  description: `Download intake and records forms — ${site.name}, Naples, FL.`,
};

export default function FormsPage() {
  return (
    <div className="py-20 sm:py-28 lg:py-36">
      <Container className="max-w-2xl">
        <Link
          href="/new-patient"
          className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        >
          ← New patient
        </Link>
        <h1 className="font-display mt-10 text-4xl font-medium tracking-tight sm:text-5xl">
          Forms
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
          Download, print, and bring completed forms to your visit — or{" "}
          <Link href="/appointment" className="text-[var(--foreground)] underline underline-offset-4">
            book online
          </Link>{" "}
          and we’ll guide you.
        </p>
        <p className="mt-8 text-sm text-[var(--muted-foreground)]">
          Need Adobe Reader?{" "}
          <a
            href="https://get.adobe.com/reader/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--foreground)] underline underline-offset-4"
          >
            Get it free
          </a>
          .
        </p>

        <div className="mt-20 space-y-16">
          {patientFormGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                {group.title}
              </h2>
              <ul className="mt-8 divide-y divide-[var(--border)] border-t border-[var(--border)]">
                {group.forms.map((f) => (
                  <li key={f.id} className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{f.title}</p>
                      {f.description ? (
                        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{f.description}</p>
                      ) : null}
                    </div>
                    <a
                      href={f.file}
                      download
                      className="shrink-0 rounded-full bg-[var(--cta)] px-6 py-2.5 text-center text-sm font-medium text-[var(--cta-foreground)] transition hover:bg-[var(--cta-hover)]"
                    >
                      Download PDF
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-[var(--border)] pt-12">
          <p className="text-sm text-[var(--muted-foreground)]">
            Questions?{" "}
            <a href={`tel:${site.phoneTel}`} className="text-[var(--foreground)]">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
