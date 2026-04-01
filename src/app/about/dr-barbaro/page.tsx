import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { doctorPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the chiropractor",
  description: `${site.doctor.name} — chiropractor serving Naples, FL.`,
};

export default function DrPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <figure className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[#eef1ef] p-4 sm:p-6">
              <Image
                src={doctorPhoto}
                alt={site.doctor.name}
                width={1023}
                height={1023}
                className="h-auto w-full rounded-xl object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>
          </figure>
          <div>
            <h1 className="font-display text-4xl sm:text-5xl">
              {site.doctor.name}
            </h1>
            <p className="mt-2 text-[var(--muted-foreground)]">{site.doctor.title}</p>
            <div className="mt-8 max-w-none space-y-6 text-[var(--muted-foreground)]">
              <p>
                {site.doctor.name} serves Naples and surrounding communities with
                chiropractic solutions tailored to your needs — from back and
                neck pain to headaches, tension, injury recovery, and wellness
                goals.
              </p>
              <p>
                At your first visit, you will learn how chiropractic care works
                and receive a full evaluation. When our approach is a good fit,
                we customize a plan for your condition and long-term objectives.
              </p>
              <p>
                New to chiropractic? Call{" "}
                <a href={`tel:${site.phoneTel}`} className="font-medium text-[var(--accent-strong)]">
                  {site.phoneDisplay}
                </a>{" "}
                — we are glad to answer questions. Referrals from friends and
                family are always welcome.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
