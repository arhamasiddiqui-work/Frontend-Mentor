"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { BadgeCheck, Check } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import BackToHomePage from "../back to home/page";
import { toast } from "sonner";

export default function Page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    setEmail("");
    setSuccess(false);

    if (email === "") {
      setEmailError("Please enter your email address");
      return;
    }
    if (email.endsWith("@gmail.com") === false) {
      setEmailError("Please enter valid email address, @gmail.com is missing");
      return;
    }

    setSuccess(true);
    setEmail(email);
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
    <div className="flex h-screen flex-col items-center justify-center bg-[#F1F5F9] p-5">
      {/* !success */}
      <div
        className={cn("max-w-120 items-center rounded-xl bg-white p-6", {
          // class:condition
          hidden: success,
          flex: !success,
        })}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-8 p-4">
            <p className="text-center text-3xl font-semibold">
              Get your Free AI agent now. no credit card required
            </p>
            <Progress
              value={60}
              className="w-full max-w-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-serif">Enter Your Email</p>
            <p className="text-sm text-red-500">{emailError}</p>
            <Input
              type="email"
              placeholder="name@example.com"
              value={email}
              className={cn("px-4 py-5 focus:border-0 focus-visible:ring-2", {
                // class : condition
                "border-red-500 bg-red-100 focus-visible:ring-red-400":
                  emailError != "",
              })}
              onChange={(e) => setEmail(e?.target?.value)}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  submit();
                }
              }}
              ref={emailRef}
            />
          </div>

          <Button type="submit"
            className="flex-1 rounded-lg border-4 border-t border-r border-l border-purple-500 bg-black py-3"
            onClick={submit}
          >
            Continue
          </Button>
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold uppercase">or</p>
          </div>

          <Button type="submit"
            className="flex items-center justify-center gap-2 rounded-lg border border-black/60 bg-white py-5 text-black transition-colors hover:bg-black/10"
            onClick={()=>{  toast.info("Google sign-in is coming soon!");}}
          >
            <Image
              src="/google-logo.png"
              alt="/google-logo.png"
              width={20}
              height={20}
            />
            <p className="font-semibold">Continue with Google</p>
          </Button>

          <p className="text-center text-sm text-black/70">
            <span>By continuing, you agree to our</span>
            &nbsp;
            <span className="font-semibold underline">Terms of Service</span>
            &nbsp;
            <span>and</span>
            &nbsp;
            <span className="font-semibold underline">Privacy Policy</span>
          </p>
        </div>
      </div>

      {/* success  */}
      <div
        className={cn(
          "max-w-120 flex-col gap-4 rounded-xl bg-white px-6 py-2",
          {
            // class : condition
            hidden: !success,
            flex: success,
          },
        )}
      >
        <div className="flex flex-col gap-6 px-6 py-5">
          <div className="flex items-center justify-center border-8 text-center font-semibold">
            <p className="max-w-full text-3xl wrap-break-word md:p-0 px-5 md:text-4xl">
              Congrats {email}! Welcome to Chatbase
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <BadgeCheck
              className="fill-green-500 text-white"
              size={70}
            />
            <p className="text-xl font-semibold">Your Free Plan includes </p>
            <div className="flex max-w-60 flex-col gap-2">
              <div className="flex gap-2">
                <Check />
                <p className="font-sem">50 message credits/mo</p>
              </div>
              <div className="flex gap-2">
                <Check />
                <p>1 chatbot agent</p>
              </div>
              <div className="flex gap-2">
                <Check size={35} />
                <p>400KB of traning data (roughly 400,000 characters)</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-black/55">
            AI agent get deleted after 14 days of inactivity on the free plan.
          </p>
          <Button type="submit"
            className="py-5"
            onClick={dismiss}
          >
            Dismiss message
          </Button>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
