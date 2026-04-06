import Image from "next/image"
import { Brand } from "@/app/lib/data"

interface BrandCardProps{
  brand:Brand;
}
export default function BrandCard({brand}:BrandCardProps) {
  return (
    <div>
        <div className="card h-80 w-72 rounded-2xl ">
            <div className="relative h-44 w-full overflow-hidden rounded-xl">
                     {/* image and overlay */}
                     <Image
                       fill
                       //className="object-cover"
                      //  src="https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1997.jpg?width=672&height=454&name=bmw-logo-1997.jpg"
                      src={brand.logo}
                      alt={brand.name}
                     />
            </div>
            <div className="p-5 text-xl font-serif">
                {brand.name}
            </div>
        </div>

    </div>
  )
}
