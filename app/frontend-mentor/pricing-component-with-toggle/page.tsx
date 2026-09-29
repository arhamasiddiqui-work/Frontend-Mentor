"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen bg-slate-100 px-2 py-20 xl:py-30">
      <div className="flex flex-col items-center justify-center gap-22">
        <div className="flex flex-col items-center gap-5">
          <p className="text-3xl font-bold text-gray-500">Our Pricing</p>
          <div className="flex gap-4 tracking-tight text-gray-500">
            <p>Anually</p>
            <label className="flex cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => setToggle(e.target.checked)}
              />

              <div
                className={cn(
                  "flex h-6 w-12 items-center rounded-xl border border-black/5 bg-slate-300 p-1",
                  {
                    "bg-[#97acf0]": toggle,
                  },
                )}
              >
                <div
                  className={cn("size-4 rounded-full bg-white transition", {
                    "translate-x-6": toggle,
                  })}
                />
              </div>
            </label>

            <p>Monthly</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-0">
          <div className="flex-1">
            <div className="flex flex-col items-center gap-7 rounded-xl bg-white p-7">
              <div className="flex flex-col items-center gap-4">
                <p className="text-2xl font-semibold text-gray-500">Basic</p>
                <p className="px-10 text-6xl font-bold">$19.99</p>
              </div>
              <div className="flex w-full flex-1 flex-col *:py-3">
                <div className="flex items-center justify-center border-t border-black/20">
                  <p className="font-semibold text-gray-500">500 GB Storage</p>
                </div>
                <div className="flex items-center justify-center border-t border-black/20">
                  <p className="font-semibold text-gray-500">2 Users Allowed</p>
                </div>
                <div className="flex items-center justify-center border-t border-b border-black/20">
                  <p className="font-semibold text-gray-500">Send up to 3 GB</p>
                </div>
              </div>
              <button className="w-full flex-1 cursor-pointer rounded-lg border bg-linear-to-l from-[#6971dd] to-[#97acf0] py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-500 hover:border-[#7f86e3] hover:bg-none hover:text-[#7f86e3]">
                learn more
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 rounded-xl bg-[#7f86e3] px-7 py-10 text-white">
            <div className="gap flex flex-col items-center">
              <p className="text-2xl font-semibold">Professional</p>
              <p className="px-10 text-6xl font-bold">$24.99</p>
            </div>
            <div className="flex w-full flex-1 flex-col *:py-3">
              <div className="flex items-center justify-center border-t border-white/50">
                <p>1 TB Storage</p>
              </div>
              <div className="flex items-center justify-center border-t border-white/50">
                <p>1 TB Storage</p>
              </div>{" "}
              <div className="flex items-center justify-center border-t border-b border-white/50">
                <p>1 TB Storage</p>
              </div>
            </div>
            <button className="w-full flex-1 cursor-pointer rounded-lg border bg-white py-3 text-sm font-semibold tracking-wider text-[#7f86e3] uppercase transition-colors duration-500 hover:border-white hover:bg-[#7f86e3] hover:text-white">
              learn more
            </button>
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center gap-7 rounded-xl bg-white p-7">
              <div className="flex flex-col items-center gap-4">
                <p className="text-2xl font-semibold text-gray-500">Master</p>
                <p className="px-10 text-6xl font-bold">$39.99</p>
              </div>
              <div className="flex w-full flex-1 flex-col *:py-3">
                <div className="flex items-center justify-center border-t border-black/20">
                  <p className="font-semibold text-gray-500">2 TB Storage</p>
                </div>
                <div className="flex items-center justify-center border-t border-black/20">
                  <p className="font-semibold text-gray-500">
                    10 Users Allowed
                  </p>
                </div>
                <div className="flex items-center justify-center border-t border-b border-black/20">
                  <p className="font-semibold text-gray-500">
                    Send up to 20 GB
                  </p>
                </div>
              </div>
              <button className="w-full flex-1 cursor-pointer rounded-lg border bg-linear-to-l from-[#6971dd] to-[#97acf0] py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-500 hover:border-[#7f86e3] hover:bg-none hover:text-[#7f86e3]">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
