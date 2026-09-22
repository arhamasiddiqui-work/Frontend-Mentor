"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen flex-col bg-slate-50 text-white">
      {/* header */}
      <div className="flex flex-1 flex-col gap-15 rounded-bl-[65px] bg-red-400 px-6 py-7 md:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8">
            <p className="text-3xl font-bold">Blogr</p>
            <p className="mt-2 font-semibold text-white/80">Product</p>
            <p className="mt-2 font-semibold text-white/80">Company</p>
            <p className="mt-2 font-semibold text-white/80">Connect</p>
          </div>

          <div className="hidden gap-3 md:flex">
            <Button
              variant="link"
              className="text-md text-white"
            >
              Login
            </Button>

            <Button
              variant="secondary"
              className="text-md rounded-2xl px-5 py-4 text-red-500"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile: below md */}
          <div className="mt-2 flex flex-col items-end gap-3 md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Menu size={30} />
            </button>

            {isOpen && (
              <div className="flex flex-col items-end gap-3">
                <Button
                  variant="secondary"
                  className="text-md rounded-2xl px-5 py-4 text-red-500"
                >
                  Login
                </Button>

                <Button
                  variant="secondary"
                  className="text-md rounded-2xl px-5 py-4 text-red-500"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-9">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-4xl font-semibold">
              A modern publishing platform
            </p>
            <p className="text-lg">
              Grow your audience and build your online brand
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Button
              variant="secondary"
              className="text-md rounded-2xl px-4 py-4 text-red-500"
            >
              Start for Free
            </Button>
            <Button
              variant="ghost"
              className="text-md rounded-2xl border border-white px-4 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        {/* main  1*/}
        <div className="flex flex-1 flex-col gap-15 pt-12 pb-13 text-black">
          <div className="flex items-center justify-center">
            <p className="text-3xl font-semibold">Designed for the future</p>
          </div>
          <div className="flex flex-col justify-center gap-10 pl-15 md:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-1/3 flex-col gap-14">
              <div className="flex flex-col gap-3">
                <p className="text-[22px] font-semibold">
                  Introducing an extensible editor
                </p>
                <p className="font-semibold text-black/60">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[22px] font-semibold">
                  Robust content management
                </p>
                <p className="font-semibold text-black/60">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow.With this
                  functionality, you're in full control.
                </p>
              </div>
            </div>
            <div className="relative min-h-75 max-w-2xl flex-2">
              <Image
                src="/car.jpg"
                alt="car-pic"
                fill
                className="absolute rounded-tl-xl rounded-bl-xl object-cover xl:rounded-xl"
              ></Image>
            </div>
          </div>
        </div>
        {/* main 2 */}
        <div className="flex flex-col justify-center gap-11 overflow-hidden rounded-tr-[60px] rounded-bl-[60px] bg-linear-to-br from-slate-900 via-gray-900 to-orange-900 px-10 md:flex-row xl:items-center xl:gap-18">
          <div className="relative min-h-70 max-w-2xl flex-1">
            <Image
              src="/medium-2.png"
              alt="car-pic"
              fill
              className="absolute object-cover"
            ></Image>
          </div>
          <div className="mb-10 flex max-w-xl flex-1 items-center justify-center md:mb-0">
            <div className="flex flex-col items-center gap-3">
              <p className="text-3xl font-semibold">
                State of the Art Infrastructure
              </p>
              <p className="text-white/80">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity.This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
        {/* main 3 */}
        <div className="pt-19 pr-10 pb-19 text-black">
          <div className="flex flex-col justify-center gap-15 md:flex-row lg:items-center">
            <div className="relative min-h-70 max-w-2xl flex-2">
              <Image
                src="/medium-4.png"
                alt="car-pic"
                fill
                className="absolute rounded-r-xl object-cover xl:rounded-xl"
              ></Image>
            </div>
            <div className="flex max-w-2xl flex-1/3 flex-col gap-10 pl-2">
              <div className="flex flex-col gap-3">
                <p className="text-[22px] font-semibold">Free, open, simple</p>
                <p className="font-semibold text-black/60">
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[22px] font-semibold">Powerful tooling </p>
                <p className="font-semibold text-black/60">
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-1 flex-col rounded-tr-[70px] bg-slate-900 px-22 py-9 md:pr-40">
        <div className="flex flex-row justify-between gap-10 max-sm:flex-col">
          <div className="text-center">
            <p className="text-3xl font-semibold">Blogr</p>
          </div>
          <div className="flex flex-col gap-4 max-sm:text-center">
            <p className="font-semibold">Product</p>
            <div className="flex flex-col gap-2">
              <p className="text-white/80">Overview</p>
              <p className="text-white/80">Pricing</p>
              <p className="text-white/80">Marketplace</p>
              <p className="text-white/80">Features</p>
              <p className="text-white/80">Integrations</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-sm:text-center">
            <p className="font-semibold">Company</p>
            <div className="flex flex-col gap-2">
              <p className="text-white/80">About</p>
              <p className="text-white/80">Team</p>
              <p className="text-white/80">Blog</p>
              <p className="text-white/80">Careers</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-sm:text-center">
            <p className="font-semibold">Connect</p>
            <div className="flex flex-col gap-2">
              <p className="text-white/80">Contact</p>
              <p className="text-white/80">Newsletter</p>
              <p className="text-white/80">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
