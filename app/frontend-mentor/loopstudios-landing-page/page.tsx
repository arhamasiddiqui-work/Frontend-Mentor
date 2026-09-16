"use client";

import { LinkIcon, Menu } from "lucide-react";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen flex-col">
      {/* header */}
      <div className="relative bg-linear-to-r from-purple-800 to-red-700 p-8 text-white">
        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">loopstudios</p>
            </div>

            <button
              className="md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Menu size={28} />
            </button>

            <div className="hidden gap-6 md:flex">
              <p className="transition-colors duration-300 hover:text-white/80">
                About
              </p>
              <p className="transition-colors duration-300 hover:text-white/80">
                Careers
              </p>
              <p className="transition-colors duration-300 hover:text-white/80">
                Events
              </p>
              <p className="transition-colors duration-300 hover:text-white/80">
                Products
              </p>
              <p className="transition-colors duration-300 hover:text-white/80">
                Support
              </p>
            </div>
          </div>
          <div className="max-w-80 border p-4">
            <p className="text-4xl font-light tracking-wider uppercase">
              Immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex items-center justify-center gap-8 border bg-linear-to-l from-purple-600 to-red-600 p-2 font-semibold md:hidden">
          <p className="text-white transition-colors duration-300 hover:text-white/80">
            About
          </p>
          <p className="text-white transition-colors duration-300 hover:text-white/80">
            Careers
          </p>
          <p className="text-white transition-colors duration-300 hover:text-white/80">
            Events
          </p>
          <p className="text-white transition-colors duration-300 hover:text-white/80">
            Products
          </p>
          <p className="text-white transition-colors duration-300 hover:text-white/80">
            Support
          </p>
        </div>
      )}

      {/* main */}
      <div className="mx-auto flex w-full max-w-300 flex-1 flex-col gap-3 p-5">
        {/* main 1 part */}
        <div className="flex flex-1 flex-col justify-center gap-5 p-2 md:flex-row md:items-center">
          <div className="min-h-60 flex-1 rounded bg-[url('/car.jpg')] bg-cover bg-center bg-no-repeat md:h-full"></div>
          <div className="flex-1 bg-slate-50 p-2 md:max-w-90">
            <div className="flex flex-col gap-4">
              <p className="text-3xl uppercase">The Leader in Interactive VR</p>
              <p className="font-semibold text-black/70">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>

        {/* main 2 part */}
        <div className="flex flex-1 flex-col gap-4 p-2">
          <div className="flex flex-1 flex-col items-center justify-between gap-3 p-2 md:flex-row">
            <p className="text-2xl uppercase">Our creations</p>
            <button className="border border-black/50 bg-slate-50 px-7 py-2 uppercase transition-colors duration-300 hover:bg-slate-200">
              See all
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-7 p-2">
            {/* first 4 cards */}
            <div className="flex min-h-70 flex-1 flex-col gap-6 md:flex-row">
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-1.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/6" />
                <p className="text-2xl font-semibold text-cyan-600 uppercase">
                  Movie
                </p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-1.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/6" />
                <p className="text-2xl font-semibold text-cyan-600 uppercase">
                  Movie
                </p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-5.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/10" />
                <p className="text-2xl font-bold text-white uppercase">Movie</p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-5.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/10" />
                <p className="text-2xl font-bold text-white uppercase">Movie</p>
              </div>
            </div>

            {/* second 4 cards */}
            <div className="flex min-h-70 flex-1 flex-col gap-6 md:flex-row">
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-5.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/10" />
                <p className="text-2xl font-bold text-white uppercase">Movie</p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-5.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/10" />
                <p className="text-2xl font-bold text-white uppercase">Movie</p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-1.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/6" />
                <p className="text-2xl font-semibold text-cyan-600 uppercase">
                  Movie
                </p>
              </div>
              <div className="relative flex h-full flex-1 items-center justify-center bg-[url('/medium-1.png')] bg-cover bg-center p-3">
                <div className="absolute inset-0 bg-black/6" />
                <p className="text-2xl font-semibold text-cyan-600 uppercase">
                  Movie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-black px-15 py-5 text-white">
        <div className="mb-10 flex flex-col gap-4 md:mb-4">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div>
              <p className="text-2xl font-semibold">loopstudios</p>
            </div>
            <div className="flex gap-5">
              <button className="rounded bg-white p-1 text-black transition-colors duration-300 hover:bg-white/80">
                <FacebookIcon />
              </button>
              <button className="rounded bg-white p-1 text-black transition-colors duration-300 hover:bg-white/80">
                <TwitterIcon />
              </button>
              <button className="rounded bg-white p-1 text-black transition-colors duration-300 hover:bg-white/80">
                <LinkIcon size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <p className="text-white transition-colors duration-300 hover:text-white/80">
                About
              </p>
              <p className="text-white transition-colors duration-300 hover:text-white/80">
                Careers
              </p>
              <p className="text-white transition-colors duration-300 hover:text-white/80">
                Events
              </p>
              <p className="text-white transition-colors duration-300 hover:text-white/80">
                Products
              </p>
              <p className="text-white transition-colors duration-300 hover:text-white/80">
                Support
              </p>
            </div>
            <div>
              <p className="text-white/80">
                ©2025 Loopstudios. All rights reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
