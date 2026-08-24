import { Car, CarFront, Gem } from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950/95 text-white max-sm:py-10">
      <div className="flex overflow-hidden rounded-lg max-sm:mb-10 max-sm:flex-col">
        <div className="flex h-full w-75 shrink-0 flex-col gap-7 bg-amber-600/80 p-12">
          <div className="flex w-fit rounded-full bg-amber-600 p-2">
            <CarFront size="35" />
          </div>
          <p className="font-serif text-4xl tracking-tight uppercase">sedans</p>
          <p className="font-light tracking-wide text-white/80">
            Choose a sedan for its affordability and excellent fuel
            economy.Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="mt-9 w-fit cursor-pointer rounded-full bg-white px-3 py-2 text-lg font-semibold tracking-wide text-amber-600/80 transition-colors duration-300 hover:bg-white/80 hover:text-amber-600">
            Learn More →
          </button>
        </div>
        <div className="flex h-full w-75 shrink-0 flex-col gap-7 bg-cyan-600/80 p-12">
          <div className="w-fit rounded-full bg-cyan-600 p-2">
            <Car size="35" />
          </div>
          <p className="font-serif text-4xl tracking-tight uppercase">suvs</p>
          <p className="font-light tracking-wide text-white/70">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="mt-9 w-fit cursor-pointer rounded-full bg-white px-3 py-2 text-lg font-semibold tracking-wide text-cyan-600/70 transition-colors duration-300 hover:bg-white/80 hover:text-cyan-600">
            Learn More →
          </button>
        </div>
        <div className="flex h-full w-75 shrink-0 flex-col gap-7 bg-emerald-700/85 p-12">
          <div className="w-fit rounded-full bg-emerald-700/99 p-2">
            <Gem size="35" />
          </div>
          <p className="font-serif text-4xl tracking-tight uppercase">Luxury</p>
          <p className="font-light tracking-wide text-white/70">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="mt-9 w-fit cursor-pointer rounded-full bg-white px-3 py-2 text-lg font-semibold tracking-wide text-emerald-600/80 transition-colors duration-300 hover:bg-white/80 hover:text-emerald-700">
            Learn More →
          </button>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
