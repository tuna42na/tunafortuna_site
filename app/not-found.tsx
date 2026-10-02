import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--paper)] px-5 text-[var(--ink)]">
      <div className="max-w-lg border border-[var(--line)] bg-[var(--surface)] p-8 shadow-sm sm:p-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--gold-dark)]">
          404 · Not found
        </p>
        <h1 className="mb-3 font-serif text-5xl font-normal tracking-tight">
          A missing page.
        </h1>
        <p className="mb-7 text-[var(--muted)]">
          Sorry, the page you are looking for does not exist. (yet...)
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-[var(--gold)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--paper)]">
          Back home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
