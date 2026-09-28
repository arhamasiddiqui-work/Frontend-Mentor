"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const Submit = () => {
    setEmail("");
    setEmailError("");

    if (email === "") {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (email.endsWith("@gmail.com") === false) {
      setEmailError("Please enter valid email address, @gmail.com is missing");
      return;
    }

    if (emailRef.current) {
      emailRef.current.value = "";
    }
    setEmailError("");
    toast.info("This is a demo sign-in UI!");
  };
  const [firstopen, setfirstOpen] = useState(false);
  const [secondopen, setsecondOpen] = useState(false);
  const [thirdopen, setthirdOpen] = useState(false);
  const [fourthopen, setfourthOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-linear-to-tr from-purple-500 to-violet-600 p-6">
      <div className="8 flex flex-col gap-4 rounded-xl border bg-white p-8">
        <div className="flex items-center gap-2">
          <Sparkle className="size-7 fill-purple-500 text-purple-500" />
          <p className="text-4xl font-bold">FAQs</p>
        </div>

        <div className="flex items-center justify-between gap-8 border-t border-b py-5">
          <p className="font-semibold">
            What is Frontend Mentor, and how will it help me?
          </p>

          <Button
            className={cn(
              "flex size-3 shrink-0 rounded-full bg-purple-500 p-3 text-center text-xl font-bold text-white",
              {
                "bg-black text-white": firstopen,
              },
            )}
            variant="default"
            onClick={() => setfirstOpen(!firstopen)}
          >
            {firstopen ? "-" : "+"}
          </Button>
        </div>
        {firstopen && (
          <div className="max-w-md">
            <p className="font-semibold text-black/60">
              Frontend Mentor is a platform where you can practice building
              real-world websites and improve your frontend development
              skills.{" "}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-8 py-1">
          <p className="font-semibold">Is Frontend Mentor Free? </p>
          <Button
            className={cn(
              "flex size-3 shrink-0 rounded-full bg-purple-500 p-3 text-center text-xl font-bold text-white",
              {
                "bg-black text-white": secondopen,
              },
            )}
            variant="default"
            onClick={() => setsecondOpen(!secondopen)}
          >
            {secondopen ? "-" : "+"}
          </Button>
        </div>
        {secondopen && (
          <div className="max-w-md">
            <p className="font-semibold text-black/60">
              Yes, Frontend Mentor offers many free challenges, with additional
              premium challenges and features available through paid plans.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-8 border-t border-b py-5">
          <p className="font-semibold">
            Can I use Frontend Mentor in my portfolio?{" "}
          </p>
          <Button
            className={cn(
              "flex size-3 shrink-0 rounded-full bg-purple-500 p-3 text-center text-xl font-bold text-white",
              {
                "bg-black text-white": thirdopen,
              },
            )}
            variant="default"
            onClick={() => setthirdOpen(!thirdopen)}
          >
            {thirdopen ? "-" : "+"}
          </Button>
        </div>
        {thirdopen && (
          <div className="max-w-md">
            <p className="font-semibold text-black/60">
              Yes! You can showcase your completed Frontend Mentor projects in
              your portfolio to demonstrate your coding and frontend skills.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-8 py-1">
          <p className="font-semibold">
            How can I get help if I&apos;m stuck on a challenge?{" "}
          </p>
          <Button
            className={cn(
              "flex size-3 shrink-0 rounded-full bg-purple-500 p-3 text-center text-xl font-bold text-white",
              {
                "bg-black text-white": fourthopen,
              },
            )}
            variant="default"
            onClick={() => setfourthOpen(!fourthopen)}
          >
            {fourthopen ? "-" : "+"}
          </Button>
        </div>
        {fourthopen && (
          <div className="max-w-md">
            <p className="font-semibold text-black/60">
              You can use the Frontend Mentor community to ask questions, get
              feedback, and learn from other developers.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-5 border-t px-2 py-3">
          <p className="text-center text-2xl font-semibold">
            Sign in to explore more FAQs
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-red-500">{emailError}</p>
            <div className="flex gap-5">
              <Input
                placeholder="Your email address"
                type="email"
                className={cn("p-4", {
                  "border border-red-500 bg-red-100 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                    emailError != "",
                })}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    Submit();
                  }
                }}
                ref={emailRef}
              ></Input>
              <Button
                className="p-4"
                onClick={Submit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
