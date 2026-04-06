import CarCard from "./CarCard";

import { Car } from "@/app/lib/data";

interface LatestListProps {
  cars: Car[];
}

export default function LatestList({ cars }: LatestListProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-white shadow-xl shadow-black/15 backdrop-blur sm:p-6">
      <p className="text-xl font-bold sm:text-2xl">Latest Cars</p>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-2 sm:gap-5">
        {cars.map((car) => (
          <div key={car._id} className="w-[280px] shrink-0 sm:w-[320px]">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
}
