import BrandCard from "./BrandCard";
import { Brand } from "@/app/lib/data";

interface BrandListProps {
  brands: Brand[];
}

export default function BrandList({ brands }: BrandListProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-white shadow-xl shadow-black/15 backdrop-blur sm:p-6">
      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Top Brands</h1>
      </div>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-2 sm:gap-5">
        {brands.map((brand) => (
          <div key={brand.id} className="w-[220px] shrink-0 sm:w-[260px]">
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
    </div>
  );
}
