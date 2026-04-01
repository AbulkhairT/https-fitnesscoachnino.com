import { SITE, smsHref } from "@/lib/site";
import { CTA } from "@/lib/cta";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent py-3.5 text-center text-xs font-semibold leading-tight text-white sm:text-sm"
        >
          {CTA.primary}
        </a>
        <a
          href={smsHref(`Hi — ${CTA.message} about coaching.`)}
          className="rounded-full border border-line py-3.5 text-center text-xs font-semibold leading-tight text-ink sm:text-sm"
        >
          {CTA.message}
        </a>
      </div>
    </div>
  );
}
