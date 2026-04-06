import CarCard from './CarCard'

import { Car } from '@/app/lib/data'

interface LatestListProps{
    cars:Car[];
}

export default function LatestList({cars}:LatestListProps) {
  return (
    <div >
      <p className='font-bold text-2xl'>Latest Cars</p>
      <div className='flex items-center justify-center overflow-x-auto gap-3'>

        {cars.map((car)=>(
            <CarCard key={car._id} car={car}/>
        ))}

      </div>
    </div>
  )
}
