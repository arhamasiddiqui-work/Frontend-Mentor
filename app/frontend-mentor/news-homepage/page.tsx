"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen items-center justify-center p-4 md:p-7">
      <div className="mx-auto flex max-w-370 flex-col p-3">
        {/* header */}
        <div className="flex items-center justify-between p-5">
          <div className="p-2">
            <p className="playfair text-5xl font-bold">W.</p>
          </div>
          <div className="hidden items-center gap-6 p-2 font-semibold text-black/70 md:flex">
            <p className="cursor-pointer hover:underline">Home</p>
            <p className="cursor-pointer hover:underline">New</p>
            <p className="cursor-pointer hover:underline">Popular</p>
            <p className="cursor-pointer hover:underline">Trending</p>
            <p className="cursor-pointer hover:underline"> Categories</p>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={30} />
          </button>
        </div>
        {isOpen && (
          <div className="grid grid-cols-3 items-center gap-5 p-2 text-center font-semibold text-black/70 md:hidden">
            <p className="rounded-full bg-amber-200 p-2 transition-colors duration-300 hover:bg-amber-300/80">
              Home
            </p>
            <p className="rounded-full bg-green-200 p-2 transition-colors duration-300 hover:bg-green-300/80">
              New
            </p>
            <p className="rounded-full bg-orange-200 p-2 transition-colors duration-300 hover:bg-orange-300/80">
              Popular
            </p>
            <p className="rounded-full bg-red-200 p-2 transition-colors duration-300 hover:bg-red-300/80">
              Trending
            </p>
            <p className="rounded-full bg-amber-200 p-2 transition-colors duration-300 hover:bg-amber-300/80">
              {" "}
              Categories
            </p>
          </div>
        )}

        <div className="flex flex-col gap-6 p-4 lg:flex-row">
          {/* main 1 */}
          <div className="flex-2">
            {/* big card */}
            <div className="relative h-64">
              <Image
                src="/medium-3.png"
                alt="Medium"
                fill
                className="object-cover"
              />
              <div />
            </div>

            {/* small cards */}
            <div className="flex flex-col justify-between gap-2 p-2 md:flex-row">
              <div className="flex-1 p-2">
                <p className="text-5xl font-bold">
                  The Bright Future of Web 3.0?
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-2">
                <p className="font-semibold text-black/80">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="rounded-lg bg-orange-400 p-2 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-orange-400/80">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* main 2 */}
          <div className="flex-1 rounded-lg bg-slate-900 text-white">
            <div className="flex flex-col gap-6 p-5">
              <p className="text-3xl font-semibold text-amber-400">New</p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">
                  Hydrogen VS Electric Cars
                </p>
                <p className="font-light text-white/70 xl:text-lg">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className="flex flex-col gap-2 border-t border-b border-white/40 pt-5 pb-5">
                <p className="text-xl font-semibold">
                  The Downsides of AI Artistry
                </p>
                <p className="font-light text-white/70 xl:text-lg">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">
                  Is VC Funding Drying Up?
                </p>
                <p className="font-light text-white/70 xl:text-lg">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* main 3 */}
        <div className="mb-10 flex flex-col justify-between gap-3 p-2 *:rounded-lg md:grid md:grid-cols-2 xl:mb-0 xl:flex xl:flex-row">
          <div className="flex flex-1 gap-4 bg-slate-100 p-2">
            <div className="flex-1 bg-[url('/medium-5.png')] bg-cover"></div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-2xl font-bold text-red-500">01</p>
              <p className="text-xl font-semibold">Reviving Retro PCs</p>
              <p className="text-lg font-semibold text-black/60">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 bg-slate-100 p-2">
            <div className="flex-1 bg-[url('/medium-1.png')] bg-cover"></div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-2xl font-bold text-red-500">02</p>
              <p className="text-xl font-semibold">Top 10 Laptops of 2026</p>
              <p className="text-lg font-semibold text-black/60">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 bg-slate-100 p-2">
            <div className="flex-1 bg-[url('/medium-4.png')] bg-cover"></div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-2xl font-bold text-red-500">03</p>
              <p className="text-xl font-semibold">The Growth of Gaming</p>
              <p className="text-lg font-semibold text-black/60">
                How the pandemic has sparked fresh opportunities
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 bg-slate-100 p-2">
            <div className="flex-1 bg-[url('/medium-2.png')] bg-cover"></div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-2xl font-bold text-red-500">04</p>
              <p className="text-xl font-semibold">
                Technology reshapes everyday life
              </p>
              <p className="text-lg font-semibold text-black/60">
                New innovations are changing how we work and connect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
