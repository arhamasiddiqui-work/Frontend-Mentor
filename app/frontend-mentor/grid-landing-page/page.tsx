import {
  ArrowRight,
  ArrowUpNarrowWide,
  Circle,
  Menu,
  Plus,
  Sparkle,
} from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-600 text-white *:border-white/60">
      <div className="flex w-full items-center justify-between border-b p-5">
        <div className="flex items-center gap-2">
          <Circle />
          <p className="text-xl">Bridge Collection</p>
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-20 border-b xl:flex-row">
        <div className="flex items-center justify-center lg:flex-1">
          <div className="flex flex-col items-center justify-center gap-5 p-9 md:gap-10">
            <p className="text-5xl xl:text-7xl">A classroom for every child.</p>
            <p className="text-lg text-white/80">
              We fund the schools,train the teachers, and measure what works —
              so every child we reach today becomes a graduate tomorrow
            </p>
          </div>
        </div>
        <div className="grid flex-1 md:grid-cols-2">
          <div className="flex flex-col gap-15 border border-white/60 bg-white/10 p-6 shadow-md xl:border-t-0">
            <div className="flex justify-between">
              <Sparkle className="fill-white" />{" "}
              <p className="text-2xl">2.4M</p>
            </div>
            <div>
              <p className="text-xl">Students reached</p>
              <p className="text-white/80">Across 31 countries since 2011.</p>
            </div>
          </div>
          <div className="flex flex-col gap-15 border border-white/60 bg-white/10 p-6 shadow-md xl:border-t-0">
            <div className="flex justify-between">
              <ArrowUpNarrowWide className="fill-white" />{" "}
              <p className="text-2xl">3.1x</p>
            </div>
            <div>
              <p className="text-xl">Graduation lift</p>
              <p className="text-white/80">
                Partner schools outperform national averages 3x.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-15 border border-white/60 bg-white/10 p-6 shadow-md xl:border-b-0">
            <div className="flex justify-between">
              <Plus className="fill-white" /> <p className="text-2xl">1,284</p>
            </div>
            <div>
              <p className="text-xl">Schools partnered</p>
              <p className="text-white/80">
                In 14 countries, from Kenya to Guatemala.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-15 border border-white/60 bg-white/10 p-6 shadow-md xl:border-b-0">
            <div className="flex justify-between">
              <ArrowRight className="fill-white" />{" "}
              <p className="text-2xl">38K</p>
            </div>
            <div>
              <p className="text-xl">Teachers trained</p>
              <p className="text-white/80">
                Equipped with modern tools & methodology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 border-b p-5">
        <p className="text-xl font-light max-sm:text-lg">
          ©2026 Bridge Collection.
        </p>
        <p className="text-xl font-light max-sm:text-lg">
          Registered charity 67,890
        </p>
      </div>
      <BackToHomePage />
    </div>
  );
}
