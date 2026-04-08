import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="hidden overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-900 p-8 shadow-2xl shadow-black/30 lg:flex lg:min-h-[760px] lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Join Know Your Car
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-white">
              Create Your Premium Garage Identity
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
              Register to save wishlist cars, manage profile details, and keep
              your premium discoveries in one place.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
              Member Benefits
            </p>
            <div className="mt-5 space-y-4 text-sm text-zinc-200">
              <p>Save premium cars to your wishlist instantly.</p>
              <p>Build a profile that tracks your preferences and activity.</p>
              <p>Access car details and comparisons with a personalized flow.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
            Register
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Create Account
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
            Start your premium car journey with a personal account.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Bio
              </label>
              <textarea
                placeholder="Tell us a little about your car interests"
                className="mt-2 min-h-28 w-full rounded-[1rem] border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/40"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-amber-300 transition hover:text-amber-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
