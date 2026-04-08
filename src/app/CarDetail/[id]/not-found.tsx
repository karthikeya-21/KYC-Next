import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto flex max-w-4xl items-center justify-center py-12">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
            Car Detail
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We Could Not Find That Car
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            The car detail route you opened does not match any car in the current
            collection, or the selected car is no longer available.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/explore"
              className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Back to Explore
            </Link>
            <Link
              href="/wishlist"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-zinc-100 transition hover:border-amber-300/30 hover:bg-white/10"
            >
              Go to Wishlist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
