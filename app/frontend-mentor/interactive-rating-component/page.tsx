"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      toast.success("Your rating has been submitted!");
    }
  }, [value]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-linear-to-br from-gray-200 to-slate-400 p-7">
      {value === 0 && (
        <div className="max-w-98 rounded-2xl bg-linear-to-t from-slate-900 to-slate-700 p-7 text-white">
          <div className="flex flex-col gap-9">
            <div className="w-fit rounded-full bg-slate-600 p-2">
              <Star className="fill-yellow-500 text-yellow-500" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-semibold">How did we do?</p>
              <p className="text-white/70">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="flex w-full gap-5">
                <button
                  className={`w-full rounded-full bg-slate-700 p-3 font-semibold ${rating === 1 ? "bg-yellow-500 text-black" : "bg-slate-700 hover:bg-slate-200 hover:text-black"}`}

                  onClick={() => setRating(1)}
                >
                  1
                </button>

                <button
                  className={`w-full rounded-full bg-slate-700 p-3 font-semibold ${rating === 2 ? "bg-yellow-500 text-black" : "bg-slate-700 hover:bg-slate-200 hover:text-black"}`}
                  onClick={() => setRating(2)}
                >
                  2
                </button>
                <button
                  className={`w-full rounded-full bg-slate-700 p-3 font-semibold ${rating === 3 ? "bg-yellow-500 text-black" : "bg-slate-700 hover:bg-slate-200 hover:text-black"}`}
                  onClick={() => setRating(3)}
                >
                  3
                </button>
                <button
                  className={`w-full rounded-full bg-slate-700 p-3 font-semibold ${rating === 4 ? "bg-yellow-500 text-black" : "bg-slate-700 hover:bg-slate-200 hover:text-black"}`}
                  onClick={() => setRating(4)}
                >
                  4
                </button>
                <button
                  className={`w-full rounded-full bg-slate-700 p-3 font-semibold ${rating === 5 ? "bg-yellow-500 text-black" : "bg-slate-700 hover:bg-slate-200 hover:text-black"}`}
                  onClick={() => setRating(5)}
                >
                  5
                </button>
              </div>
              <button
                className="cursor-pointer rounded-3xl bg-yellow-500/90 p-3 font-semibold tracking-widest text-slate-700 uppercase transition-colors duration-400 hover:bg-yellow-600"
                onClick={() => {
                  setValue(rating);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* for testing its working or not:       
      {/* <p className="text-white">
        rating: {rating} | value: {value}
      </p> */}

      {/* submitted state */}
      {value > 0 && (
        <div className="max-w-98 rounded-2xl bg-linear-to-t from-slate-900 to-slate-700 p-8 text-white">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/medium-2.png"
              alt="Feedback illustration"
              width={150}
              height={150}
              className="rounded-xl object-contain"
            />

            <div className="rounded-3xl bg-slate-600/50 px-4 py-1 shadow-md shadow-yellow-500">
              <p className="text-lg text-yellow-500">
                You selected {rating} out of 5
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <p className="text-2xl font-semibold">Thank You!</p>

              <p className="text-white/70">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don&apos;t hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      )}

      <BackToHomePage />
    </div>
  );
}
