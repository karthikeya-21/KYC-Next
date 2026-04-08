import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
            Login
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome Back
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
            Continue exploring, save cars to your wishlist, and manage your
            profile with one secure login.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Username Or Email
              </label>
              <input
                type="text"
                placeholder="Enter username or email"
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

            <button
              type="submit"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-amber-300 transition hover:text-amber-200"
            >
              Register here
            </Link>
          </p>
        </div>

        <div className="hidden overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-900 p-8 shadow-2xl shadow-black/30 lg:flex lg:min-h-[640px] lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Premium Auto Access
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-white">
              Return To Your Premium Garage Experience
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
              Login to continue where you left off, revisit wishlist cars, and
              manage your personalized auto profile.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
              Why Login
            </p>
            <div className="mt-5 space-y-4 text-sm text-zinc-200">
              <p>Access your saved wishlist and premium preferences.</p>
              <p>Keep your profile details up to date with a seamless flow.</p>
              <p>Continue exploring and comparing cars without starting over.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
