import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-5 text-center">
      <h1 className="font-display text-3xl font-medium text-ink">Page not found</h1>
      <p className="mt-4 text-muted">That page does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </div>
  );
}
