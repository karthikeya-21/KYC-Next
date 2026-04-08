import { notFound } from "next/navigation";
import { cars } from "@/app/lib/data";
import CarDetailView from "@/components/CarDetailView";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = cars.find((item) => item._id === id);

  if (!car) {
    notFound();
  }

  return <CarDetailView car={car} />;
}
