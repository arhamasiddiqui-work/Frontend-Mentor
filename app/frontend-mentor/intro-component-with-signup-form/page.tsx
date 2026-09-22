"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  useEffect(() => {
    alert("Please fill out the form in order to continue.");
  }, []);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    // not required here:
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");

    if (firstName === "") {
      setFirstNameError("Please enter your first name");
      return;
    }
    if (firstName.length < 3 != false) {
      setFirstNameError("Please enter atleast 3 characters in your first name");
      return;
    }

    if (lastName === "") {
      setLastNameError("Please enter your last name");
      return;
    }
    if (lastName.length < 3 != false) {
      setLastNameError("Please enter atleast 3 characters in your last name");
      return;
    }

    if (email === "") {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (email.endsWith("@gmail.com") === false) {
      setEmailError(
        "Please enter a valid email address, @gmail.com is missing",
      );
      return;
    }

    if (password === "") {
      setPasswordError("Please enter a valid password");
      return;
    }
    if (password.length < 8 != false) {
      setPasswordError("Please enter atleast 8 characters in your password");
      return;
    }

    // setFirstName(firstName);
    // setLastName(lastName);
    // setEmail(email);
    // setPassword(password);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");

    if (firstNameRef.current) {
      firstNameRef.current.value = "";
    }

    if (lastNameRef.current) {
      lastNameRef.current.value = "";
    }

    if (emailRef.current) {
      emailRef.current.value = "";
    }

    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
    toast.success("Free Trial Claimed!");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-400/90 text-white">
      <div className="flex max-w-6xl flex-col gap-2 rounded bg-black/5 p-3 md:flex-row">
        <div className="flex flex-1 items-center justify-center p-5">
          <div className="flex flex-col gap-5">
            <p className="text-4xl font-bold">
              Learn to code by watching other
            </p>
            <p className="font-semibold text-white/90">
              See how experienced developers solve problems in real-time
              watching scripted tutorial is great, but understanding how
              developers think is invaluable
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 p-5">
            <div className="animation-duration-[5s] animate-pulse rounded-lg bg-red-800 p-2 shadow-md">
              <div className="flex flex-col items-center justify-center gap-2 text-lg xl:flex-row">
                <p className="font-semibold">Try it free for 7 days</p>
                <p className="font-semibold text-white/80">
                  then $20/month thereafter
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-md">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-red-500">{firstNameError}</p>
                  <input
                    className={cn(
                      "rounded border-2 border-zinc-400 px-4 py-2 text-black",
                      // class : conditon
                      {
                        "border-red-500 bg-red-200": firstNameError != "",
                      },
                    )}
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => {
                      (setFirstName(e.target.value), setFirstNameError(""));
                    }}
                    onKeyUp={(e) => {
                      if (e.code === "Enter") {
                        submit();
                      }
                    }}
                    ref={firstNameRef}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm text-red-500">{lastNameError}</p>
                  <input
                    className={cn(
                      "rounded border-2 border-zinc-400 px-4 py-2 text-black",
                      // class : conditon
                      {
                        "border-red-500 bg-red-200": lastNameError != "",
                      },
                    )}
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => {
                      (setLastName(e.target.value), setLastNameError(""));
                    }}
                    onKeyUp={(e) => {
                      if (e.code === "Enter") {
                        submit();
                      }
                    }}
                    ref={lastNameRef}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm text-red-500">{emailError}</p>
                  <input
                    className={cn(
                      "rounded border-2 border-zinc-400 px-4 py-2 text-black",
                      // class : conditon
                      {
                        "border-red-500 bg-red-200": emailError != "",
                      },
                    )}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      (setEmail(e.target.value), setEmailError(""));
                    }}
                    onKeyUp={(e) => {
                      if (e.code === "Enter") {
                        submit();
                      }
                    }}
                    ref={emailRef}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm text-red-500">{passwordError}</p>
                  <input
                    className={cn(
                      "rounded border-2 border-zinc-400 px-4 py-2 text-black",
                      // class : conditon
                      {
                        "border-red-500 bg-red-200": passwordError != "",
                      },
                    )}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      (setPassword(e.target.value), setPasswordError(""));
                    }}
                    onKeyUp={(e) => {
                      if (e.code === "Enter") {
                        submit();
                      }
                    }}
                    ref={passwordRef}
                  />
                </div>

                <button
                  className="cursor-pointer rounded bg-green-500 p-2 font-semibold uppercase shadow-md transition-colors duration-300 hover:bg-green-500/90"
                  onClick={submit}
                >
                  Claim your free trial
                </button>
                <p className="font-semibold text-black/60">
                  <span>By clicking the button you are agreeing to our</span>
                  &nbsp;
                  <span className="text-red-700 hover:underline">
                    Terms and Services
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
