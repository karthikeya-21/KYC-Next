import { Car } from "@/app/lib/data";
import CarCard from "./CarCard";

interface SearchListProps{
    cars:Car[];
}

export default function SearchList({cars}:SearchListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car)=>(
        <CarCard key={car._id} car={car}/>
      ))}
    </div>
  )
}
