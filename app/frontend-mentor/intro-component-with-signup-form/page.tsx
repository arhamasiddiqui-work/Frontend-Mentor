"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-400/90 text-white *:*:p-5">
      <div className="flex max-w-6xl flex-col gap-2 rounded bg-black/5 p-3 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
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
          <div className="flex flex-col gap-4">
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
                <input
                  className="rounded border-2 border-zinc-400 px-4 py-2 text-black"
                  type="text"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="rounded border-2 border-zinc-400 px-4 py-2 text-black"
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <input
                  className="rounded border-2 border-zinc-400 px-4 py-2 text-black"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="rounded border-2 border-zinc-400 px-4 py-2 text-black"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="rounded bg-green-500 p-2 font-semibold uppercase shadow-md transition-colors duration-300 hover:bg-green-500/80"
                  onClick={() => {
                    if (
                      name === "" ||
                      email === "" ||
                      password === "" ||
                      lastname === ""
                    ) {
                      toast.error("Please fill in the required fields");
                      return;
                    }

                    toast.success("You have successfully signed up");
                    setName("");
                    setEmail("");
                    setPassword("");
                    setLastname("");
                  }}
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
    </div>
  );
}
