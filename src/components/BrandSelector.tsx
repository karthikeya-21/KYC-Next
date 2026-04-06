import { Brand } from "@/app/lib/data";
import Image from "next/image";

interface BrandSelectorProps {
  brands: Brand[];
  activeBrand: string;
  onSelectBrand: (brandName: string) => void;
}

export default function BrandSelector({
  brands,
  activeBrand,
  onSelectBrand,
}: BrandSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={() => onSelectBrand("ALL")}
        className={`rounded-full border px-4 py-2.5 text-sm font-medium transition sm:px-5 sm:py-3 ${
          activeBrand === "ALL"
            ? "border-amber-300 bg-amber-300 text-zinc-950 shadow-lg shadow-amber-300/20"
            : "border-zinc-700 bg-zinc-950/70 text-zinc-200 hover:border-amber-300/40 hover:bg-white/5"
        }`}
      >
        ALL
      </button>

      {brands.length > 0 &&
        brands.map((brand) => {
          const isActive = activeBrand === brand.name;

          return (
            <button
              key={brand.id}
              type="button"
              onClick={() => onSelectBrand(brand.name)}
              className={`flex items-center gap-2 rounded-full border px-3 py-2.5 transition sm:gap-3 sm:px-4 sm:py-3 ${
                isActive
                  ? "border-amber-300 bg-amber-300 text-zinc-950 shadow-lg shadow-amber-300/20"
                  : "border-zinc-700 bg-zinc-950/70 text-zinc-200 hover:border-amber-300/40 hover:bg-white/5"
              }`}
            >
              <div className="overflow-hidden rounded-full bg-white/90 p-1">
                <Image alt={brand.name} src={brand.logo} height={24} width={24} className="sm:h-7 sm:w-7" />
              </div>
              <span className="text-sm font-medium">{brand.name}</span>
            </button>
          );
        })}
    </div>
  );
}
