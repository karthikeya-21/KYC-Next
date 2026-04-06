import Image from "next/image";
import Link from "next/link";
import { Car } from "@/app/lib/data";

interface CarCardProps{
  car:Car;
}


export default function CarCard({car}:CarCardProps) {

  return (
    <div className="h-full">
      <Link href="/CarDetail" className="block h-full">
      <div className="card h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-3 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-zinc-900/90">
        <div className="relative h-52 w-full overflow-hidden rounded-[1.1rem]">
          {/* image and overlay */}
          <Image
            fill
            className="object-cover transition duration-500 hover:scale-105"
            //  src="https://www.bmwgroup.com/en/company/_jcr_content/main/layoutcontainer_1988/columncontrol/columncontrolparsys/globalimage.coreimg.jpeg/1758537295862/720x720-i5er.jpeg"
            src={car.image}
            alt={car.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-amber-300/25 bg-black/40 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
            {car.year}
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 p-4">
          {/* footer and details */}
          <div className="min-w-0">
            <p className="truncate font-sans text-lg font-bold text-white">{car.name}</p>
            <span className="text-sm text-zinc-400">{car.brand} . {car.year}</span>
            <p className="mt-2 text-sm text-amber-300">Rating {car.rating}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Price</p>
            <p className="mt-1 text-lg font-semibold text-white">{car.price}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
