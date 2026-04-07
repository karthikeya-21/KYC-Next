import ProfileCard from "@/components/ProfileCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
            Profile
          </p>
          <div className="mt-4 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage Your Premium Garage Profile
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
              Keep your personal details, preferences, and saved activity in one
              place with the same refined experience across the app.
            </p>
          </div>
        </div>

        <ProfileCard />
      </section>
    </main>
  );
}
