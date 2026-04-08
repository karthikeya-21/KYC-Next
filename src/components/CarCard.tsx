import Image from "next/image";
import Link from "next/link";
import { Car } from "@/app/lib/data";

interface CarCardProps {
  car: Car;
}

export default function CarCard({car}:CarCardProps) {
  return (
    <div className="h-full">
      <Link href={`/CarDetail/${car._id}`} className="block h-full">
        <div className="card h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-3 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-zinc-900/90">
          <div className="relative h-44 w-full overflow-hidden rounded-[1.1rem] sm:h-52">
            <Image
              fill
              className="object-cover transition duration-500 hover:scale-105"
              src={car.image}
              alt={car.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute left-3 top-3 rounded-full border border-amber-300/25 bg-black/40 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur sm:left-4 sm:top-4">
              {car.year}
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:p-4">
            <div className="min-w-0">
              <p className="truncate font-sans text-base font-bold text-white sm:text-lg">
                {car.name}
              </p>
              <span className="text-sm text-zinc-400">
                {car.brand} . {car.year}
              </span>
              <p className="mt-2 text-sm text-amber-300">Rating {car.rating}</p>
            </div>
            <div className="text-left sm:shrink-0 sm:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Price
              </p>
              <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                {car.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
