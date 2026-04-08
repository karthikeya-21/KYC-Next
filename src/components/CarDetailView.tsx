"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Car } from "@/app/lib/data";

interface CarDetailViewProps {
  car: Car;
}

function formatPrice(price: string) {
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return price;
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

export default function CarDetailView({ car }: CarDetailViewProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const specifications = [
    { label: "Fuel", value: car.specifications.fuel },
    { label: "Engine", value: car.specifications.engine },
    { label: "Power", value: car.specifications.power },
    { label: "Drivetrain", value: car.specifications.drivetrain },
    { label: "Acceleration", value: car.specifications.acceleration },
    { label: "Seating", value: car.specifications.seating },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-6 text-white sm:px-6 sm:py-8">
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/explore"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-amber-300/30 hover:bg-white/10 hover:text-white"
          >
            Back to Explore
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:gap-10">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-3 shadow-inner shadow-black/20">
                <div className="relative min-h-[300px] overflow-hidden rounded-[1.3rem] sm:min-h-[420px]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-amber-300/20 bg-black/45 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur">
                    {car.brand}
                  </div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-sm text-zinc-100 backdrop-blur">
                      {car.year}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-sm text-zinc-100 backdrop-blur">
                      Rating {car.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 shadow-inner shadow-black/20 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Specifications
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {specifications.map((specification) => (
                    <div
                      key={specification.label}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        {specification.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-100 sm:text-base">
                        {specification.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 shadow-inner shadow-black/20 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Premium Detail
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {car.name}
                </h1>
                <p className="mt-3 text-base text-zinc-300">
                  {car.brand} . {car.year}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-amber-300/15 bg-amber-300/10 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-300">
                      Price
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {formatPrice(car.price)}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Rating
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {car.rating} / 5
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsWishlisted((currentValue) => !currentValue)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      isWishlisted
                        ? "border border-red-500/25 bg-red-500/10 text-red-200 hover:bg-red-500/15"
                        : "bg-amber-300 text-zinc-950 hover:bg-amber-200"
                    }`}
                  >
                    {isWishlisted
                      ? "Remove From Wishlist"
                      : "Add To Wishlist"}
                  </button>

                  <Link
                    href="/wishlist"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-amber-300/30 hover:bg-white/10 hover:text-white"
                  >
                    View Wishlist
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Quick Summary
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Engine + Power
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-100">
                      {car.specifications.engine} . {car.specifications.power}
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Practicality
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-100">
                      Seating for {car.specifications.seating} with{" "}
                      {car.specifications.drivetrain} capability.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Performance
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-100">
                      0-100 km/h in approximately {car.specifications.acceleration}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
