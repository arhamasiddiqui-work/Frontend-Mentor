"use client";
import { AudioWaveform } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex h-screen items-center justify-center bg-emerald-900 bg-cover text-white md:bg-none">
      <div className="flex flex-col gap-10 p-3 md:gap-3">
        <div className="flex flex-col gap-4 p-2 md:flex-row">
          <div className="order-2 flex items-start gap-2 md:order-1">
            <button className="rounded-full bg-emerald-400 p-2">
              <AudioWaveform className="text-slate-800" />
            </button>
            <p className="text-5xl font-semibold">pod</p>
          </div>
          <div className="relative order-1 hidden md:flex">
            <Image
              src="/medium-4.png"
              alt="Medium"
              width={600}
              height={600}
            />
            <div className="absolute inset-0 bg-emerald-900/40" />
          </div>
        </div>

        <div className="flex max-w-148 flex-col gap-5 bg-slate-900 p-6 md:absolute md:bottom-40">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-4xl font-light text-emerald-400 uppercase">
                Publish your podcasts
              </p>
              <p className="text-4xl font-light uppercase">everywhere.</p>
            </div>
            <p className="text-lg font-light text-white/90">
              Upload your audio to Pod with a single click. We&apos;ll then
              distribute your podcast to Spotify, Google Podcasts, Pocket Casts,
              Apple Podcasts, and more!
            </p>
            <div className="flex flex-col justify-between gap-3 rounded-3xl bg-slate-700 px-4 py-2 md:flex-row">
              <input
                type="email"
                className="ml-2 text-white/70 placeholder:font-semibold focus:outline-none"
                placeholder=" Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="cursor-pointer rounded-2xl bg-emerald-400 px-6 py-2 font-semibold text-black/70 transition-colors duration-300 hover:bg-emerald-500"
                onClick={() => {
                  if (!email.endsWith("@gmail.com")) {
                    toast.error("Please enter a valid Email address");
                  } else {
                    toast.success("Email Sent");
                  }
                }}
              >
                Request Access
              </button>
            </div>
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between gap-9 text-lg font-light text-white/80">
              <div className="cursor-pointer hover:underline">
                <p>Spotify</p>
              </div>
              <div className="cursor-pointer hover:underline">
                <p>Apple Podcasts</p>
              </div>
              <div className="cursor-pointer hover:underline">
                <p>Google Podcasts</p>
              </div>
              <div className="cursor-pointer hover:underline">Pocket Casts</div>
            </div>
          </div>

          <div className="absolute hidden shrink-0 gap-3 p-3 md:bottom-80 md:left-115 md:grid md:grid-cols-6">
            {Array.from({ length: 24 }).map((_, i) => (
              <p
                key={i}
                className="size-3 rounded-full bg-emerald-400"
              />
            ))}
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
