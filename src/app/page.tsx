import Image from "next/image";
import Link from "next/link";
import BrandList from "@/components/BrandList";
import LatestList from "@/components/LatestList";
import TopRatedList from "@/components/TopRatedList";
import { brands, latestCars, topRatedCars } from "./lib/data";

export default function Home() {
  return (
    <main className="m-2 space-y-10">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-900 text-white shadow-2xl">
        <div className="grid min-h-[540px] grid-cols-2">
          <div className="flex flex-col justify-center px-10 py-12 lg:px-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Premium Car Discovery
            </p>

            <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight">
              Know Every Detail Before You Choose Your Next Car
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
              Explore premium car insights, specifications, pricing, ratings,
              and brand highlights in one refined experience built for smarter
              decisions.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/explore"
                className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-200"
              >
                Explore Cars
              </Link>

              <Link
                href="/"
                className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Brands
              </Link>
            </div>

            <div className="mt-10 flex gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-zinc-400">Car Models</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-zinc-400">Top Brands</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.8/5</p>
                <p className="text-zinc-400">User Ratings</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
              alt="Luxury car close-up"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />

            <div className="absolute bottom-8 right-8 w-72 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                Featured
              </p>
              <h2 className="mt-3 text-2xl font-semibold">BMW 7 Series</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Luxury, precision, and technology in one premium package.
              </p>

              <div className="mt-5 flex items-center justify-between text-sm text-zinc-200">
                <span>2025</span>
                <span>4.8 Rating</span>
                <span>Petrol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <LatestList cars={latestCars} />
      </section>

      <section>
        <BrandList brands={brands} />
      </section>

      <section>
        <TopRatedList cars={topRatedCars} />
      </section>
    </main>
  );
}
