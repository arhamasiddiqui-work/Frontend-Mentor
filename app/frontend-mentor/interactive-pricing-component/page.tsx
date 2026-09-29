"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [toggle, setToggle] = useState(false);
  const [range, setRange] = useState(0);
  const [afterTrial, setAfterTrial] = useState(false);

  const Submit = () => {
    if (!range) {
      toast.error("Please pick out the following package first");
      return;
    } else {
      toast.success("Your trial has started!");
    }

    setAfterTrial(true);
  };

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <div className="h-120 rounded-bl-[100px] bg-slate-200">
        <div className="flex flex-col items-center justify-center gap-20 px-7 py-25">
          <div className="flex flex-col items-center gap-3">
            <p className="text-5xl font-semibold tracking-tight">
              Simple, traffic-based pricing
            </p>
            <p className="text-lg font-semibold tracking-tight text-gray-500">
              Sign-up for our 30-day trial. No credit card required
            </p>
          </div>
          <div className="max-w-120">
            <div
              className={cn("flex-col flex-wrap gap-10 rounded-xl bg-white", {
                flex: !afterTrial,
                hidden: afterTrial,
              })}
            >
              <div className="flex flex-col gap-9 px-10 py-5">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                    <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      100k pageviews
                    </p>
                    <input
                      type="range"
                      className="w-full flex-1 md:hidden"
                    />
                    <p className="flex items-center">
                      <DollarSign size={35} />
                      <span className="text-5xl font-semibold">{range}</span>
                      &nbsp;
                      <span className="font-semibold text-gray-500">
                        / month
                      </span>
                    </p>
                  </div>

                  <input
                    type="range"
                    min="15"
                    className="hidden w-full flex-1 cursor-pointer appearance-none md:flex [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-teal-200 [&::-webkit-slider-thumb]:-mt-[5px] [&::-webkit-slider-thumb]:-mb-[5px] [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400"

                    onChange={(e) => {
                      setRange(e.target.valueAsNumber);

                      console.log(e.target.valueAsNumber);
                    }}
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <p
                    className={cn("text-gray-500", {
                      "text-green-600": !toggle,
                    })}
                  >
                    Monthly Billing
                  </p>

                  <label className="flex cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={(e) => {
                        setToggle(e.target.checked);
                      }}
                    />

                    <div
                      className={cn("h-6 w-12 rounded-full bg-slate-300 p-1", {
                        "bg-green-300": toggle,
                      })}
                    >
                      <div
                        className={cn(
                          "size-4 rounded-full bg-white transition",
                          {
                            "translate-x-6": toggle,
                          },
                        )}
                      />
                    </div>
                  </label>

                  <p
                    className={cn("text-gray-500", {
                      "text-green-600": toggle,
                    })}
                  >
                    Yearly Billing
                  </p>

                  <div className="rounded-xl bg-orange-100 px-2">
                    <p className="text-sm font-semibold text-orange-600">
                      25% discount
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between gap-7 border-t px-10 py-5 md:flex-row">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Check
                      size={18}
                      className="text-teal-500"
                    />
                    <p className="font-semibold text-black/50">
                      Unlimited websites
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check
                      size={18}
                      className="text-teal-500"
                    />
                    <p className="font-semibold text-black/50">
                      100% data ownership
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check
                      size={18}
                      className="text-teal-500"
                    />
                    <p className="font-semibold text-black/50">Email reports</p>
                  </div>
                </div>
                <Button
                  className="text-md rounded-2xl px-6 py-4 text-white/85"
                  onClick={Submit}
                >
                  Start my trial
                </Button>
              </div>
            </div>

            <div
              className={cn("rounded-xl bg-green-100 px-10 py-6 text-center", {
                flex: afterTrial,
                hidden: !afterTrial,
              })}
            >
              <p className="text-5xl font-semibold text-slate-700">
                <span>Your trial has started successfully at</span>
                &nbsp;
                <span className="font-serif text-6xl font-bold text-emerald-600">
                  ${range}
                </span>
                &nbsp;
                <span className="text-4xl text-slate-500">
                  / {toggle ? "year" : "month"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
