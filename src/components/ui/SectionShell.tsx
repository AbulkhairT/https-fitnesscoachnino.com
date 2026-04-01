import type { ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 lg:py-40 ${className}`}>
      {children}
    </section>
  );
}
