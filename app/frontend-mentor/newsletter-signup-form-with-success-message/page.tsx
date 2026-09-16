"use client";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { useRef, useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  //   const [subscribed, setSubscribed] = useState(false);

  const submit = () => {
    setEmailError("");
    setSuccess(false);

    if (email === "") {
      setEmailError("Please enter your email address");
      return;
    }
    if (email?.endsWith("@gmail.com") === false) {
      setEmailError("Please enter valid email address, @gmail.com is missing");
      return;
    }

    setSuccess(true);
  };

  const dismiss = () => {
    setEmail("");

    if (emailRef.current) {
      emailRef.current.value = "";
    }

    setSuccess(false);
    setEmailError("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-700 md:p-10">
      <div
        className={cn(
          "max-w-210 flex-1 flex-col gap-5 bg-white p-5 md:flex-row md:rounded-2xl",
          {
            flex: !success,
            hidden: success,
          },
        )}
      >
        <div className="order-2 flex-1 p-4 md:order-1">
          <div className="flex flex-col gap-7">
            <p className="playfair text-5xl font-semibold">Stay updated!</p>
            <p className="font-semibold text-black/70">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 tracking-tight">
                <BadgeCheck
                  size={27}
                  className="fill-red-500 text-white"
                />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex items-center gap-2 tracking-tight">
                <BadgeCheck
                  size={27}
                  className="fill-red-500 text-white"
                />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex items-center gap-2 tracking-tight">
                <BadgeCheck
                  size={27}
                  className="fill-red-500 text-white"
                />
                <p>And much more!</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between">
                <p className="font-serif">Email address</p>
                <p className="text-xs text-red-500">{emailError}</p>
              </div>

              <input
                type="email"
                placeholder="email@company.com"
                className={cn("rounded-lg border border-black/20 px-3 py-1", {
                  // class : condition
                  "border-red-500 bg-red-100 focus-visible:outline-0":
                    emailError != "",
                })}
                onChange={(e) => {
                  setEmail(e?.target?.value);
                }}
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    submit();
                  }
                }}
                ref={emailRef}
              />
            </div>
            <button
              className="rounded-lg bg-slate-800 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-slate-900"
              onClick={submit}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="order-1 min-h-80 flex-1 rounded-2xl bg-[url('/medium-2.png')] bg-cover bg-center p-5" />
      </div>
      {/* )} */}

      <div
        className={cn("max-w-sm flex-1 rounded-2xl bg-white p-7", {
          flex: success,
          hidden: !success,
          // hidden: !false = true
          // hidden: !true = false
        })}
      >
        <div className="flex flex-col gap-4">
          <BadgeCheck
            size={60}
            className="fill-red-500 text-white"
          />
          <p className="text-4xl font-bold">Thanks for subscribing!</p>
          <p className="text-lg tracking-tight text-black/80">
            <span>A confirmation email has been sent to </span>
            &nbsp;
            <span className="font-semibold">{email}.</span>
            &nbsp;
            <span>
              Please open it and click the button inside to confirm your
              subscription.
            </span>
          </p>
          <button
            className="rounded-lg bg-slate-800 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-slate-900"
            onClick={dismiss}
          >
            Dismiss message
          </button>
        </div>
      </div>

      <BackToHomePage />
    </div>
  );
}
