import Link from "next/link";
import { mainNav } from "@/content/nav";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-2)]">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl text-[var(--foreground)]">{site.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
            {site.tagline}. Natural, drug-free support for spine and nervous system health
            in Naples.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
            Visit
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 inline-block text-sm font-semibold text-[var(--accent-strong)]"
          >
            {site.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/special-offer" className="hover:text-[var(--accent-strong)]">
                New patient offer
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:text-[var(--accent-strong)]">
                Request appointment
              </Link>
            </li>
            <li>
              <Link href="/spine-simulator" className="hover:text-[var(--accent-strong)]">
                3D spine simulator
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--accent-strong)]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-[var(--accent-strong)]">
                Community content
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {mainNav
              .filter((n) => n.href && !n.children)
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href!} className="hover:text-[var(--accent-strong)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/about" className="hover:text-[var(--accent-strong)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--accent-strong)]">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-[var(--border)] py-6">
        <Container className="flex flex-col gap-2 text-xs text-[var(--muted-foreground)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            {site.doctor.name} · Chiropractor · Naples, FL {site.address.zip}
          </p>
        </Container>
      </div>
      <div className="bg-[var(--foreground)] py-4 text-center text-xs text-white/90">
        <Container className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <a
            href={site.external.imatrixCopyright}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Copyright © {new Date().getFullYear()} MH Sub I, LLC dba iMatrix.
          </a>
          <span className="hidden text-white/40 sm:inline" aria-hidden>
            |
          </span>
          <a
            href={site.external.adminPortal}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white hover:underline"
          >
            Admin log in
          </a>
        </Container>
      </div>
    </footer>
  );
}
