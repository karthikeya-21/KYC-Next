import Link from "next/link";

export default function ExploreNotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Explore
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          We could not find that car page
        </h1>
        <p className="mt-3 text-base text-slate-600">
          The explore route you tried does not exist yet, or the selected car
          data is unavailable.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/explore"
            className="rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Explore
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}
