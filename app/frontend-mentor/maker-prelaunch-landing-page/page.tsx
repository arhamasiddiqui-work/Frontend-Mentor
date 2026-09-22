"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@base-ui/react";
import {
  Bubbles,
  Car,
  Check,
  CircleDollarSign,
  DollarSign,
  Flame,
  Mouse,
  Shell,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    setEmail("");

    if (email === "") {
      setEmailError("Please enter valid email address!");
      return;
    }

    if (email.endsWith("@gmail.com") === false) {
      setEmailError("Please enter valid email address, @gmail.com is missing");
      return;
    }

    setEmail(email);
    setEmailError("");

    if (emailRef.current) {
      emailRef.current.value = "";
    }

    if (email !== "") {
      toast.success("You'll be notified soon!");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 p-7">
        {/* logo */}
        <div className="flex items-center gap-2 p-2">
          <Bubbles
            className="text-teal-300"
            size={30}
          />
          <p className="text-2xl font-semibold">maker</p>
        </div>

        {/* hero 1 */}
        <div className="flex flex-1 items-center p-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-4xl font-semibold">
              <span>Get paid for the work you</span>
              &nbsp;
              <span className="text-teal-300">love</span>
              &nbsp;
              <span>to do</span>
            </p>
            <p className="text-white/80">
              The 9-5 grind is so last century. We believe in living life on
              your terms. Whether you&apos;re looking to escape the rat race or
              set up a side hustle, we&apos;ve got you covered.
            </p>
            <Mouse
              className="text-teal-300"
              size={45}
            />
          </div>
        </div>

        {/* hero 2 */}
        <div className="flex flex-1 flex-col justify-between gap-4 md:flex-row ">
          <div className="flex-1 p-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-slate-700 p-3">
                <Flame
                  className="text-teal-300"
                  size={40}
                />
              </div>
              <p className="text-xl font-semibold">Indulge your passions</p>
              <p className="text-sm text-white/80">
                Your passions shouldn&apos;t be just for the weekend. Earn a
                living doing what you love.
              </p>
            </div>
          </div>
          <div className="flex-1 p-3 md:mt-9">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-slate-700 p-3">
                <CircleDollarSign
                  className="text-teal-300"
                  size={40}
                />
              </div>
              <p className="text-xl font-semibold">Gain financial freedom</p>
              <p className="text-sm text-white/80">
                Start making money work for you. There&apos;s nothing quite like
                earning while you sleep.
              </p>
            </div>
          </div>
          <div className="flex-1 p-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-slate-700 p-3">
                <Shell
                  className="text-teal-300"
                  size={40}
                />
              </div>
              <p className="text-xl font-semibold">Choose your lifestyle</p>
              <p className="text-sm text-white/80">
                Own your daily schedule. Fancy a lie-in? Go for it! Take charge
                of your week.
              </p>
            </div>
          </div>
          <div className="flex-1 p-3 md:mt-9">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-slate-700 p-3">
                <Car
                  className="text-teal-300"
                  size={40}
                />
              </div>
              <p className="text-xl font-semibold">Work from anywhere</p>
              <p className="text-sm text-white/80">
                Selling online means not being pinned down. Want to work AND
                travel? Go for it!
              </p>
            </div>
          </div>
        </div>

        {/* hero 3 */}
        <div className="flex flex-1 flex-col items-center gap-6 p-3">
          <div className="flex max-w-lg flex-col gap-3 text-center">
            <p className="text-3xl font-semibold">Our pricing plans </p>
            <p className="text-white/80">
              We only make money when our creators make money. Our plans are
              always affordable, and it&apos; completely free to get started.
            </p>
          </div>

          <div className="flex w-full flex-col justify-between gap-8 p-6 *:rounded-xl *:p-5 md:flex-row lg:gap-15">
            <div className="flex flex-1 flex-col gap-4 bg-gray-700">
              <p className="text-lg font-semibold">Dip your toe</p>
              <p className="text-white/80">
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </p>
              <p className="text-3xl font-semibold">Free</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-teal-400"
                  />
                  <p>Unlimited products</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-teal-400"
                  />
                  <p>Basic analytics</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-teal-400"
                  />
                  <p>Limited marketplace experience</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-teal-400"
                  />
                  <p>10% fee per transaction</p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 bg-teal-400 text-black">
              <p className="text-lg font-semibold">Dive right in</p>
              <p className="text-black/70">
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </p>
              <div className="flex items-center">
                <DollarSign />

                <p className="flex items-center">
                  <span className="text-3xl font-semibold">25.00</span>
                  &nbsp;
                  <span className="text-black/60">/ month</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-gray-700"
                  />
                  <p className="text-black/80">Custom domain</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-gray-700"
                  />
                  <p className="text-black/80">
                    Advanced analytics and reports
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-gray-700"
                  />
                  <p className="text-black/80">High marketplace visibility</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    size={20}
                    className="text-gray-700"
                  />
                  <p className="text-black/80">5% fee per transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* email form */}
        <div className="flex flex-1 flex-col items-center p-5">
          <div className="flex flex-col gap-8">
            <p className="text-3xl font-semibold">
              Get notified when we launch
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-red-400">{emailError}</p>
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <Input
                  className={cn(
                    "flex-1 rounded-lg bg-slate-700 px-3 py-2 focus-visible:outline-none",
                    {
                      // class:condtion
                      "border-2 border-red-400": emailError != "",
                    },
                  )}
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.code === "Enter") {
                      submit();
                    }
                  }}
                  ref={emailRef}
                />
                <Button
                  variant="secondary"
                  className="bg-teal-300 px-2 py-5"
                  onClick={submit}
                >
                  Get notified
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
