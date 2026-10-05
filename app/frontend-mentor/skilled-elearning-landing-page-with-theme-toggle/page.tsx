"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  Camera,
  Frame,
  Rabbit,
  Rotate3d,
} from "lucide-react";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    document.querySelector("body")?.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-7 py-9 md:px-15 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-11">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">Skilled</p>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
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
                    "flex h-6 w-12 items-center rounded-xl bg-gray-400 p-1",
                    {
                      "bg-linear-to-t from-pink-500 to-orange-500": toggle,
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
            <Button className="text-md cursor-pointer rounded-2xl p-6">
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-2 md:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-6">
            <h1 className="text-5xl font-bold">
              Maximize skill, minimize budget
            </h1>
            <p className="text-lg font-semibold text-black/56 dark:text-white/80">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <Button className="text-md w-fit cursor-pointer rounded-2xl bg-linear-to-t from-pink-500 to-orange-500 p-6">
              Get Started
            </Button>
          </div>
          <div className="flex-1 rounded-4xl bg-linear-to-t from-pink-500 to-orange-500 p-2">
            <div className="min-h-100 rounded-4xl bg-[url('/working-woman.webp')] bg-cover bg-center" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-7 *:gap-3 *:p-5 md:grid md:grid-cols-2 lg:grid-cols-3 dark:*:bg-slate-800">
          <div className="flex-1 items-center rounded-xl bg-linear-to-t from-pink-500 to-orange-500">
            <p className="py-6 text-3xl font-semibold text-white">
              Check out our most popular courses!
            </p>
          </div>

          <div className="flex flex-1 flex-col items-baseline rounded-xl bg-white">
            <div className="-mt-8 w-fit rounded-full bg-linear-to-t from-pink-500 to-orange-500 p-2">
              <Rabbit className="text-white" />
            </div>
            <p className="text-2xl font-bold">Animation</p>
            <p className="text-black/80 dark:text-white/80">
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience
            </p>
            <Button
              className="text-md cursor-pointer text-pink-600"
              variant="link"
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-baseline rounded-xl bg-white">
            <div className="-mt-8 w-fit rounded-full bg-linear-to-t from-pink-500 to-orange-500 p-2">
              <Frame className="text-white" />
            </div>
            <p className="text-2xl font-bold">Design</p>
            <p className="text-black/80 dark:text-white/80">
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
            <Button
              className="text-md cursor-pointer text-pink-600"
              variant="link"
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-baseline rounded-xl bg-white">
            <div className="-mt-8 w-fit rounded-full bg-linear-to-t from-pink-500 to-orange-500 p-2">
              <Camera className="text-white" />
            </div>
            <p className="text-2xl font-bold">Photography</p>
            <p className="text-black/80 dark:text-white/80">
              Explore critical fundamentals like lighting, composition, and
              post-processing to capture exceptional photos.
            </p>
            <Button
              className="text-md cursor-pointer text-pink-600"
              variant="link"
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-baseline rounded-xl bg-white">
            <div className="-mt-8 w-fit rounded-full bg-linear-to-t from-pink-500 to-orange-500 p-2">
              <Rotate3d className="text-white" />
            </div>
            <p className="text-2xl font-bold">Crypto</p>
            <p className="text-black/80 dark:text-white/80">
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <Button
              className="text-md cursor-pointer text-pink-600"
              variant="link"
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-baseline rounded-xl bg-white">
            <div className="-mt-8 w-fit rounded-full bg-linear-to-t from-pink-500 to-orange-500 p-2">
              <BriefcaseBusiness className="text-white" />
            </div>
            <p className="text-2xl font-bold">Business</p>
            <p className="text-black/80 dark:text-white/80">
              A step-by-step playbook to help you start,scale, and sustain your
              business without outside investment.
            </p>
            <Button
              className="text-md cursor-pointer text-pink-600"
              variant="link"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
