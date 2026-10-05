"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="light:text-white size-6 bg-[#1877F2] text-white dark:text-black"
  >
    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-7 rounded-full bg-black p-1 text-white"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-7 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 text-white dark:text-black"
    fill="currentColor"
  >
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-7 rounded-full bg-red-600 p-1 text-white dark:text-black"
    fill="currentColor "
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    document.querySelector("body")?.classList?.toggle("dark");
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col gap-10 px-7 py-13 md:px-15 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex flex-col gap-2 border-b py-3 md:border-none dark:border-white/30">
          <p className="text-3xl font-bold">Social Media Dashboard</p>
          <p className="font-semibold">Total Followers: 23,004</p>
        </div>
        <div className="flex gap-3">
          <p>{toggle ? "Dark Mode" : "Light Mode"}</p>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              onChange={(e) => setToggle(e.target.checked)}
              onClick={handleToggle}
            />

            <div
              className={cn(
                "flex h-6 w-12 items-center rounded-xl bg-gray-400/70 p-1",
                {
                  "bg-linear-to-r from-cyan-500 to-teal-500": toggle,
                },
              )}
            >
              <div
                className={cn("size-4 rounded-full bg-white transition", {
                  "translate-x-6 bg-black": toggle,
                })}
              />
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:grid md:grid-cols-2 lg:flex lg:flex-row">
        <div className="flex-1 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800/90">
          <div className="h-1 bg-linear-to-tr from-cyan-400 to-blue-500" />
          <div className="flex flex-col items-center gap-3 px-12 py-7">
            <div className="flex items-center gap-2">
              <FacebookIcon />
              <p className="font-semibold dark:text-gray-400">@nathanf</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-5xl font-bold">1987</p>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Followers
              </p>
            </div>

            <p className="font-semibold text-green-600">+12 Today</p>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800/90">
          <div className="h-1 bg-linear-to-tr from-sky-400 to-cyan-500" />

          <div className="flex flex-col items-center gap-3 px-12 py-7">
            <div className="flex items-center gap-2">
              <TwitterIcon />
              <p className="font-semibold dark:text-gray-400">@nathanf</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-5xl font-bold">1044</p>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Followers
              </p>
            </div>

            <p className="font-semibold text-green-600">+90 Today</p>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800/90">
          <div className="h-1 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600" />

          <div className="flex flex-col items-center gap-3 px-12 py-7">
            <div className="flex items-center gap-2">
              <InstagramIcon />
              <p className="font-semibold dark:text-gray-400">@nathanf</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-5xl font-bold">11k</p>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Followers
              </p>
            </div>

            <p className="font-semibold text-green-600">+1000 Today</p>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800/90">
          <div className="h-1 bg-linear-to-tr from-red-500 to-red-700" />

          <div className="flex flex-col items-center gap-3 px-12 py-7">
            <div className="flex items-center gap-2">
              <YoutubeIcon />
              <p className="font-semibold dark:text-gray-400">@nathanf</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-5xl font-bold">8239</p>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribers
              </p>
            </div>

            <p className="font-semibold text-red-600">-144 Today</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-3xl font-bold">Overview - Today</p>

        <div className="flex flex-col gap-6 *:gap-4 *:bg-slate-100 *:px-9 *:py-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:*:h-37 xl:*:gap-8 dark:*:bg-slate-800">
          <div className="flex flex-1 flex-col rounded-xl">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Page Views</p>
              <FacebookIcon />
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-4xl font-bold">87</p>
              <p className="font-semibold text-green-600">+3%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Likes</p>
              <FacebookIcon />
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-4xl font-bold">52</p>
              <p className="font-semibold text-red-600">-2%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Likes</p>
              <InstagramIcon />
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-4xl font-bold">5462</p>
              <p className="font-semibold text-green-600">+2257%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Profile Views</p>
              <InstagramIcon />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="text-4xl font-bold">52k</p>
              <p className="font-semibold text-green-600">+1375%</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Retweets</p>
              <TwitterIcon />
            </div>
            <div className="flex items-center justify-between gap-9">
              <p className="text-4xl font-bold">117</p>
              <p className="font-semibold text-green-600">+325%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Likes</p>
              <TwitterIcon />
            </div>
            <div className="flex items-center justify-between gap-10">
              <p className="text-4xl font-bold">507</p>
              <p className="font-semibold text-green-600">+552%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Likes</p>
              <YoutubeIcon />
            </div>
            <div className="flex items-center justify-between gap-10">
              <p className="text-4xl font-bold">107</p>
              <p className="font-semibold text-red-600">-715%</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-xl p-7">
            <div className="flex items-center justify-between">
              <p className="font-semibold dark:text-gray-400">Total Views</p>
              <YoutubeIcon />
            </div>
            <div className="flex items-center justify-between gap-6">
              <p className="text-4xl font-bold">1406</p>
              <p className="font-semibold text-red-600">-12%</p>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
