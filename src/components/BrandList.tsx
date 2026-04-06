import BrandCard from "./BrandCard";
import { Brand } from "@/app/lib/data";

interface BrandListProps{
  brands:Brand[];
}

export default function BrandList({brands}:BrandListProps) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Top Brands</h1>
      </div>
      <div className="flex justify-center items-center gap-3 overflow-x-auto">
        {brands.map((brand)=>(
          <BrandCard key={brand.id} brand={brand}/>
        ))}
      </div>
    </div>
  )
}
