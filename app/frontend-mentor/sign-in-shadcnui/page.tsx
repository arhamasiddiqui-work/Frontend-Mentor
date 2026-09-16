"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

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

    setEmail(email);
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
    <div className="flex h-screen items-center justify-center bg-linear-to-r from-indigo-500 to-purple-500 p-6">
      <div className="flex max-w-md flex-1 flex-col gap-6">
        {/* Part 1 — !success */}
        <Card className={cn({ hidden: success, flex: !success })}>
          <CardHeader>
            <CardTitle className="text-xl">Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <p className="text-red-500">{emailError}</p>
                <Input
                  type="email"
                  placeholder="name@gmail.com"
                  className={cn(
                    "px-4 py-5 focus:border-0 focus-visible:ring-2",
                    {
                      // class : condition
                      "border-red-500 bg-red-100 focus-visible:ring-red-400":
                        emailError != "",
                    },
                  )}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.code === "Enter") {
                      submit();
                    }
                  }}
                  // required
                  ref={emailRef}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full py-5"
              onClick={submit}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full py-5"
              onClick={() => {
                toast.info("Google Login is coming soon!");
              }}
            >
              Login with Google
            </Button>
          </CardFooter>
        </Card>

        {/* Part 2 — success */}
        <Card className={cn({ hidden: !success, flex: success })}>
          <CardHeader className="flex flex-col items-center gap-3">
            <p className="text-2xl font-semibold text-emerald-500">Success</p>

            <CardTitle className="text-center text-xl">
              Congratulations! {email}🎉
            </CardTitle>

            <CardDescription>
              You&apos;ve successfully signed in to your account.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex">
            <Button
              type="button"
              className="flex-1 py-5"
              onClick={dismiss}
            >
              Dismiss
            </Button>
          </CardContent>
        </Card>
      </div>
      <BackToHomePage />
    </div>
  );
}
