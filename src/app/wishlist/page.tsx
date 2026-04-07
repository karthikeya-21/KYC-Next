'use client';
import Link from "next/link";
import { Car,cars } from "../lib/data";
import CarCard from "@/components/CarCard";

const wishlist:Car[]|[]=cars;

export default function Page() {
    return (
        <div>
            {wishlist.length==0 && <div className="flex flex-col bg-amber-300 w-full h-screen justify-center items-center " >
                <h2>Your Wishlist is empty</h2>
                <p>Explore Cars here <Link href='/explore'>Explore</Link></p>
                </div>}
           <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-white shadow-xl shadow-black/15 backdrop-blur sm:p-6">
                 <p className="text-xl font-bold sm:text-2xl">Latest Cars</p>
                 <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                   {wishlist.map((car) => (
                     <div key={car._id} className="w-[280px] shrink-0 sm:w-[320px]">
                       <CarCard car={car} />
                     </div>
                   ))}
                 </div>
               </div>
        </div>
    );
}