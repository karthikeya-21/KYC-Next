"use client";

import { useState } from "react";
import { Car, brands, cars } from "../lib/data";
import SearchList from "@/components/SearchList";
import BrandSelector from "@/components/BrandSelector";

export default function Page() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("ALL");
  const [resultCars, setResultCars] = useState<Car[]>(cars);

  function onSearch(search: string): void {
    const trimmedSearch = search.trim();
    setSearchText(search);
    setSelectedBrand("ALL");

    if (trimmedSearch === "" || trimmedSearch === "ALL") {
      setResultCars(cars);
      return;
    }

    const filteredCars = cars.filter((car) => {
      const lowerCaseSearch = trimmedSearch.toLowerCase();

      return (
        car.name.toLowerCase().includes(lowerCaseSearch) ||
        car.brand.toLowerCase().includes(lowerCaseSearch)
      );
    });

    setResultCars(filteredCars);
  }

  function onSelectBrand(brandName: string): void {
    setSelectedBrand(brandName);
    setSearchText(brandName === "ALL" ? "" : brandName);

    if (brandName === "" || brandName === "ALL") {
      setResultCars(cars);
      return;
    }

    setResultCars(
      cars.filter((car) => car.brand.toLowerCase() === brandName.toLowerCase())
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-stone-950 px-4 py-8 text-white">
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Explore Collection
          </p>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Discover Cars With Premium Detail
              </h1>
              <p className="mt-3 text-base leading-7 text-zinc-300">
                Browse by brand, search by model, and explore the latest cars
                in a cleaner premium experience.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-5 py-4 text-sm text-amber-100">
              <p className="font-semibold uppercase tracking-[0.2em] text-amber-300">
                Results
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {resultCars.length}
              </p>
              <p className="text-zinc-300">
                {selectedBrand === "ALL"
                  ? "Cars across all brands"
                  : `${selectedBrand} cars`}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-3 shadow-inner shadow-black/20">
            <input
              className="w-full rounded-[1.2rem] border border-zinc-800 bg-transparent px-5 py-4 text-base text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/50"
              type="text"
              title="Search"
              placeholder="Search for brands and cars"
              value={searchText}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <div className="mt-8">
            <BrandSelector
              brands={brands}
              activeBrand={selectedBrand}
              onSelectBrand={onSelectBrand}
            />
          </div>

          <div className="mt-8 flex items-center justify-between text-sm text-zinc-400">
            <p>
              Search Results {searchText.trim() ? `for "${searchText}"` : ""}
            </p>
            <p>{resultCars.length} matches</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
          {resultCars.length > 0 && <SearchList cars={resultCars} />}

          {resultCars.length === 0 && (
            <div className="flex min-h-64 items-center justify-center rounded-[1.5rem] border border-dashed border-zinc-700 bg-zinc-950/60 px-6 text-center text-zinc-400">
              No cars found for this selection. Try another brand or search term.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
