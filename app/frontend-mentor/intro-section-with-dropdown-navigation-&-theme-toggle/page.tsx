"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AudioLines,
  Bell,
  Bubbles,
  CalendarHeart,
  Circle,
  Clock,
  List,
  Menu,
  MessagesCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOne, setdropDownOne] = useState(false);
  const [dropDownTwo, setdropDownTwo] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    document.querySelector("body")?.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 px-7 py-5 dark:bg-slate-900">
      <div className="flex min-h-screen flex-col gap-3 md:h-screen md:gap-12">
        {/* header PART */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-10">
            <p className="text-4xl font-bold">snap</p>
            <div className="mt-2 hidden gap-12 md:flex">
              <div className="relative">
                <p
                  className={cn(
                    "cursor-pointer font-semibold text-black/65 hover:text-black dark:text-white/80 dark:hover:text-white",
                    {
                      "text-black dark:text-white": dropDownOne,
                    },
                  )}
                  onClick={() => setdropDownOne(!dropDownOne)}
                >
                  {dropDownOne ? "Features ^" : "Features ⌄ "}
                </p>

                {dropDownOne && (
                  <div className="absolute z-50 mt-3 flex -translate-x-13 flex-col gap-2 rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-700/60 dark:*:text-white">
                    <div className="flex items-center gap-2 font-semibold text-black/60">
                      <List
                        size={19}
                        className="text-violet-600"
                      />
                      <p>Todo List</p>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-black/60">
                      <CalendarHeart
                        size={19}
                        className="text-teal-500"
                      />
                      <p>Calender</p>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-black/60">
                      <Bell
                        size={19}
                        className="text-yellow-500"
                      />
                      <p>Reminders</p>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-black/60">
                      <Clock
                        size={19}
                        className="text-fuchsia-700"
                      />
                      <p>Planning</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <p
                  className={cn(
                    "cursor-pointer font-semibold text-black/65 hover:text-black dark:text-white/80 dark:hover:text-white",
                    {
                      "text-black dark:text-white": dropDownTwo,
                    },
                  )}
                  onClick={() => setdropDownTwo(!dropDownTwo)}
                >
                  {dropDownTwo ? "Company ^" : "Company ⌄"}
                </p>

                {dropDownTwo && (
                  <div className="absolute z-45 mt-3 flex w-30 -translate-x-2 flex-col gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black/60 shadow-2xl dark:bg-slate-700/60 dark:text-white">
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Blog</p>
                  </div>
                )}
              </div>

              <p className="cursor-pointer font-semibold text-black/65 hover:text-black dark:text-white/80 dark:hover:text-white">
                Careers
              </p>
              <p className="cursor-pointer font-semibold text-black/65 hover:text-black dark:text-white/80 dark:hover:text-white">
                About
              </p>
            </div>
            <div className="mt-2 ml-3 flex items-center gap-2">
              <p className="text-lg font-semibold">
                {toggle ? "DarkMode" : "LightMode"}
              </p>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={(e) => setToggle(e.target.checked)}
                  onClick={handleToggle}
                />
                <div
                  className={cn(
                    "flex h-6 w-12 items-center rounded-xl bg-slate-300 p-1",
                    {
                      "bg-linear-to-r from-cyan-500 to-blue-500": toggle,
                    },
                  )}
                >
                  <div
                    className={cn("size-4 rounded-full bg-white transition", {
                      "translate-x-6 bg-black": toggle,
                    })}
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <Button
              className="text-md hover cursor-pointer text-black/65 dark:text-white/90"
              variant="link"
            >
              Login
            </Button>
            <Button
              className="text-md h cursor-pointer border-black/60 px-6 py-5 text-black/65 dark:border-white/60 dark:text-white/90"
              variant="outline"
            >
              Register
            </Button>
          </div>

          <Button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>

        {isOpen && (
          <div className="flex flex-col items-center gap-5 rounded-lg bg-slate-100 p-4 shadow-md md:hidden">
            <div className="relative">
              <p
                className={cn(
                  "cursor-pointer font-semibold text-black/65 hover:text-black",
                  {
                    "text-black": dropDownOne,
                  },
                )}
                onClick={() => setdropDownOne(!dropDownOne)}
              >
                {dropDownOne ? "Features ^" : "Features ⌄ "}
              </p>

              {dropDownOne && (
                <div className="absolute z-50 mt-3 flex flex-col gap-2 rounded-xl bg-white p-5 shadow-2xl">
                  <div className="flex items-center gap-2 font-semibold text-black/60">
                    <List
                      size={19}
                      className="text-violet-600"
                    />
                    <p>Todo List</p>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-black/60">
                    <CalendarHeart
                      size={19}
                      className="text-teal-500"
                    />
                    <p>Calender</p>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-black/60">
                    <Bell
                      size={19}
                      className="text-yellow-500"
                    />
                    <p>Reminders</p>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-black/60">
                    <Clock
                      size={19}
                      className="text-fuchsia-700"
                    />
                    <p>Planning</p>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <p
                className={cn(
                  "cursor-pointer font-semibold text-black/65 hover:text-black",
                  {
                    "text-black": dropDownTwo,
                  },
                )}
                onClick={() => setdropDownTwo(!dropDownTwo)}
              >
                {dropDownTwo ? "Company ^" : "Company ⌄"}
              </p>

              {dropDownTwo && (
                <div className="absolute mt-3 flex w-30 flex-col gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black/60 shadow-2xl">
                  <p>History</p>
                  <p>Our Team</p>
                  <p>Blog</p>
                </div>
              )}
            </div>
            <p className="cursor-pointer font-semibold text-black/65 hover:text-black">
              About
            </p>
            <p className="cursor-pointer font-semibold text-black/65 hover:text-black">
              Careers
            </p>
            <div className="flex w-full flex-wrap items-center justify-between">
              <Button
                className="text-md cursor-pointer text-black/65"
                variant="link"
              >
                Login
              </Button>
              <Button
                className="text-md cursor-pointer border-black/60 px-6 py-5 text-black/65 dark:text-black/65"
                variant="outline"
              >
                Register
              </Button>
            </div>
          </div>
        )}

        {/* main PART */}
        <div className="mx-auto flex w-full max-w-420 flex-1 flex-col px-5 py-12 md:flex-row md:gap-10 xl:py-20">
          {/* left PART */}
          <div className="order-2 flex flex-1 flex-col justify-between">
            <div className="flex flex-col gap-9 py-20 md:gap-12">
              <p className="flex flex-col text-6xl font-bold xl:text-7xl">
                <span>Make </span> <span>remote work</span>
              </p>
              <p className="max-w-160 text-2xl font-semibold text-black/65 dark:text-white/65">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <Button className="w-fit cursor-pointer rounded-xl px-7 py-6 text-lg">
                Learn more
              </Button>
            </div>

            <div className="mb-6 flex flex-wrap justify-between gap-5 md:mb-0 dark:*:*:text-white/90">
              <div className="flex items-center gap-1">
                <Circle
                  size={15}
                  className="fill-black/30 text-black/20"
                />
                <p className="text-2xl font-semibold text-black/50">databiz</p>
              </div>
              <div className="flex items-center gap-1">
                <AudioLines
                  size={15}
                  className="text-black/60"
                />
                <p className="text-2xl font-semibold text-black/50">
                  audiophile
                </p>
              </div>
              <div className="flex items-center gap-1">
                <MessagesCircle
                  size={15}
                  className="text-black/60"
                />
                <p className="text-2xl font-semibold text-black/50">meet</p>
              </div>
              <div className="flex items-center gap-1">
                <Bubbles
                  size={15}
                  className="text-black/60"
                />
                <p className="text-2xl font-semibold text-black/50">maker</p>
              </div>
            </div>
          </div>
          {/* right PART */}
          <div className="relative order-1 min-h-80 flex-1 overflow-hidden rounded md:order-2 md:h-full">
            <Image
              src="/remote-work.jpg"
              alt="remote work"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <BackToHomePage />
    </div>
  );
}
