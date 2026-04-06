import Image from "next/image";
import { Brand } from "@/app/lib/data";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="h-full">
      <div className="card h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-4 text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-zinc-900/90">
        <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-[1.1rem] bg-white/95 p-6 sm:h-44">
          <Image
            fill
            className="object-contain p-6 sm:p-8"
            src={brand.logo}
            alt={brand.name}
          />
        </div>
        <div className="p-3 sm:p-5">
          <p className="text-lg font-semibold sm:text-xl">{brand.name}</p>
          <p className="mt-1 text-sm text-zinc-400">Explore brand collection</p>
        </div>
      </div>
    </div>
  );
}
