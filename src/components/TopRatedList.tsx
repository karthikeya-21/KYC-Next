import CarCard from "./CarCard";
import { Car } from "@/app/lib/data";

interface TopRatedListProps{
  cars:Car[];
}
export default function TopRatedList({cars}:TopRatedListProps) {
  return (
    <div>
      <div>
        <p className="font-bold text-2xl">Top Rated Cars</p>
        </div>
      <div className="flex justify-center items-center gap-3 overflow-x-auto">
        {cars.map((car)=>(
          <CarCard key={car._id} car={car}/>
        ))}
      </div>
    </div>
  )
}
