"use client";

import Link from "next/link";
import { cars } from "../lib/data";
import CarCard from "@/components/CarCard";

type WishlistState = "guest" | "empty" | "filled";

const wishlistState: WishlistState = "empty";
const wishlistCars = cars.slice(0, 4);

export default function Page() {
  const isLoggedIn = wishlistState !== "guest";
  const hasWishlistCars = wishlistState === "filled" && wishlistCars.length > 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
            Wishlist
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Saved Cars, All In One Place
              </h1>
              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
                Keep track of the cars you love and come back when you are ready
                to compare, explore, or decide.
              </p>
            </div>

            <div className="w-full rounded-2xl border border-amber-300/15 bg-amber-300/10 px-5 py-4 text-sm text-amber-100 sm:w-auto">
              <p className="font-semibold uppercase tracking-[0.2em] text-amber-300">
                Status
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {!isLoggedIn ? "Guest" : hasWishlistCars ? wishlistCars.length : "0"}
              </p>
              <p className="text-zinc-300">
                {!isLoggedIn
                  ? "Login required"
                  : hasWishlistCars
                    ? "Cars saved"
                    : "Wishlist is empty"}
              </p>
            </div>
          </div>
        </div>

        {!isLoggedIn && (
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
            <div className="flex min-h-80 flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-zinc-700 bg-zinc-950/60 px-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Guest Access
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Login To View Your Wishlist
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                Save your favorite cars and keep them synced to your profile once
                you sign in.
              </p>
              <Link
                href="/profile"
                className="mt-8 rounded-full bg-amber-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-200"
              >
                Login
              </Link>
            </div>
          </div>
        )}

        {isLoggedIn && !hasWishlistCars && (
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
            <div className="flex min-h-80 flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-zinc-700 bg-zinc-950/60 px-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Empty Wishlist
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Your Wishlist Is Waiting For Your First Pick
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                Explore premium cars, compare models, and save the ones you want
                to revisit later.
              </p>
              <Link
                href="/explore"
                className="mt-8 rounded-full bg-amber-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-200"
              >
                Explore Cars
              </Link>
            </div>
          </div>
        )}

        {isLoggedIn && hasWishlistCars && (
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xl font-bold sm:text-2xl">Saved Cars</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Your current premium shortlist.
                </p>
              </div>
              <Link
                href="/explore"
                className="text-sm font-medium text-amber-300 transition hover:text-amber-200"
              >
                Add more cars
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {wishlistCars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
