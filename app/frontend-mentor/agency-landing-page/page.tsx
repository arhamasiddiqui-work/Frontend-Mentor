"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Camera,
  FileImage,
  Heart,
  Leaf,
  LinkIcon,
  Menu,
  Palette,
  Rocket,
  Sparkles,
  Split,
  Sun,
  SunMoon,
} from "lucide-react";
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
    <div className="flex min-h-screen flex-col *:*:*:*:p-8">
      {/* header */}
      <div className="bg-sky-500 text-white">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <p className="text-2xl font-bold">sunnyside</p>
            <div className="hidden items-center gap-8 font-semibold text-white/94 md:flex">
              <p>About</p>
              <p>Services</p>
              <p>Projects</p>
              <button className="rounded-2xl bg-white px-3 py-2 font-serif text-sm tracking-tight text-black uppercase transition-colors duration-300 hover:bg-white/90">
                Contact
              </button>
            </div>
            <button
              className="flex items-center text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={26} />
            </button>
          </div>
          {isOpen && (
            <div className=" grid grid-cols-2 gap-4 p-5 items-center  font-semibold text-white/94 bg-white/10 md:hidden justify-center text-center">
              <p className="bg-amber-50 text-black rounded-xl uppercase ">About</p>
              <p className="bg-amber-50 text-black rounded-xl uppercase ">Services</p>
              <p className="bg-amber-50 text-black rounded-xl uppercase ">Projects</p>
              <button className="rounded-2xl bg-white  font-serif text-sm tracking-tight text-black uppercase transition-colors duration-300 hover:bg-white/90">
                Contact
              </button>
            </div>
          )}

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <p className="font-serif text-4xl font-bold tracking-wide text-[#FFF7ED] uppercase">
                We are creatives
              </p>
              <SunMoon
                size={120}
                className="animation-duration-[2s] animate-pulse fill-[#FB7185] text-[#FFF7ED]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="flex-1">
        <div className="md:flex-row xl:grid xl:grid-cols-2 xl:grid-rows-2">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 flex flex-1 border-amber-950">
              <div className="flex flex-col gap-4">
                <p className="font-serif text-2xl font-semibold">
                  Transform your brand
                </p>
                <p className="font-semibold text-black/66">
                  We are a full-service creative agency specializing in helping
                  brands grow fast.
                </p>
                <p className="playfair w-fit rounded-full bg-amber-300 px-2 py-1 text-sm font-bold tracking-wide text-black uppercase">
                  Learn more
                </p>
              </div>
            </div>
            <div className="order-1 flex flex-1 items-center justify-center bg-amber-400 md:order-2">
              <Split
                size={140}
                className="fill-amber-600 text-amber-900"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 items-center justify-center bg-rose-400 xl:order-2">
              <Sparkles
                size={140}
                className="fill-rose-600 text-rose-800"
              />
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col gap-4">
                <p className="font-serif text-2xl font-semibold">
                  Stand out to the right audience
                </p>
                <p className="font-semibold text-black/66">
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we&apos;ll
                  build and extend your brand in digital places.
                </p>
                <p className="playfair w-fit rounded-full bg-rose-300 px-2 py-1 text-sm font-bold tracking-wide text-black uppercase">
                  Learn more
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 flex-col border-emerald-500 bg-teal-300">
              <div className="flex flex-col items-center gap-4 text-center">
                <FileImage
                  size={140}
                  className="fill-emerald-600 text-emerald-800"
                />
                <p className="font-serif text-2xl font-semibold">
                  Graphic Design
                </p>
                <p className="font-semibold text-black/70">
                  Great design makes you memorable.We deliver artwork that
                  underscores your brand message and captures potential
                  clients&apos; attention
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col border-emerald-500 bg-sky-300">
              <div className="flex flex-col items-center gap-4 text-center">
                <Camera
                  size={140}
                  className="fill-sky-600 text-sky-900"
                />
                <p className="font-serif text-2xl font-semibold">Photography</p>
                <p className="font-semibold text-black/70">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-fuchsia-200">
            <div className="flex flex-col items-center gap-4 text-center">
              <Palette
                size={140}
                className="fill-violet-800 text-violet-950"
              />
              <p className="font-serif text-2xl font-semibold">
                Visual Identity
              </p>
              <p className="max-w-xl font-semibold text-violet-950/70">
                Build a brand people recognize. We shape distinctive visuals,
                thoughtful design systems, and memorable brand experiences that
                give your business a personality of its own.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50">
          <div className="flex flex-col items-center justify-center p-8">
            <div>
              <p className="font-serif text-xl font-semibold tracking-wider text-black/66 uppercase">
                Client testimonials
              </p>
            </div>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="flex max-w-lg flex-col items-center justify-center gap-5 border-b border-black/20 md:border-none">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/25.png"
                    alt="Girl avatar"
                  />
                  <AvatarFallback>GA</AvatarFallback>
                </Avatar>
                <p className="text-center font-semibold text-black/70">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="playfair text-lg font-bold">Emily R.</p>
                  <p>Marketing Director</p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-center justify-center gap-5 border-b border-black/20 md:border-none">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/24.png"
                    alt="Boy avatar"
                  />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
                <p className="text-center font-semibold text-black/70">
                  Sunnyside&apos;s enthusiasm coupled with their keen interest
                  in our brand&apos;s success made it a satisfying and enjoyable
                  experience.
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="playfair text-lg font-bold">Thomas S.</p>
                  <p>Chief Operating Officer</p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-center justify-center gap-5 border-b border-black/20 md:border-none">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/26.png"
                    alt="Girl avatar"
                  />
                  <AvatarFallback>GA</AvatarFallback>
                </Avatar>
                <p className="text-center font-semibold text-black/70">
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended!
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="playfair text-lg font-bold">Jennie F.</p>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <div className="flex flex-1 items-center justify-center bg-orange-300">
              <Sun
                size={140}
                className="fill-orange-900 text-orange-900"
              />
            </div>

            <div className="flex flex-1 items-center justify-center border-cyan-700 bg-cyan-300">
              <Rocket
                size={140}
                className="fill-cyan-950 text-cyan-950"
              />
            </div>

            <div className="flex flex-1 items-center justify-center bg-lime-300">
              <Leaf
                size={140}
                className="fill-lime-950 text-lime-950"
              />
            </div>

            <div className="flex flex-1 items-center justify-center border-rose-700 bg-rose-300">
              <Heart
                size={140}
                className="fill-rose-950 text-rose-950"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-emerald-200">
        <div className="flex flex-col items-center">
          <div>
            <p className="text-2xl font-bold text-emerald-700">sunnyside</p>
          </div>
          <div className="flex text-emerald-700">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
          <div className="flex gap-3">
            <button className="text-emerald-800">
              <FacebookIcon />
            </button>
            <button className="text-emerald-800">
              <TwitterIcon />
            </button>
            <button className="text-emerald-800">
              <LinkIcon size={20} />
            </button>
          </div>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
