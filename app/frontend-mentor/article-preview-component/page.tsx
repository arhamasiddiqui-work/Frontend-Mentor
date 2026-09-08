"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Forward, Link } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Page() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const handleClick = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-rose-100 p-8">
      <div className="flex max-w-195 flex-col overflow-hidden rounded-2xl sm:flex-row">
        <div className="flex-1/2 bg-[url('/medium-1.png')] bg-cover bg-center p-25"></div>
        <div className="flex-2/3 bg-slate-50">
          <div className="flex flex-col gap-8 p-7">
            <h1 className="text-xl font-semibold tracking-wide text-gray-800">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="font-semibold text-gray-500">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/22.png"
                    alt="Girl avatar"
                  />
                  <AvatarFallback>GA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Michelle Appleton</p>
                  <p className="font-light">28 Jun 2026</p>
                </div>
              </div>
              <div className="relative">
                <button
                  className="rounded-full bg-rose-200 p-2 text-rose-500 transition-colors duration-300 hover:bg-rose-300 hover:text-rose-600"
                  onClick={handleClick}
                >
                  <Forward />
                </button>
                {isShareOpen && (
                  <div className="absolute right-0 bottom-full mb-1 rounded-xl bg-slate-600 shadow-md">
                    <div className="flex items-center justify-center gap-2 p-2">
                      <p className="font-semibold tracking-wide text-zinc-100 uppercase">
                        Share
                      </p>
                      <button
                        className="rounded bg-gray-50 p-1"
                        onClick={() => {
                          toast.success("Link Copied!");
                        }}
                      >
                        <FacebookIcon />
                      </button>

                      <button
                        className="rounded bg-gray-50 p-1"
                        onClick={() => {
                          toast.success("Link Copied!");
                        }}
                      >
                        <TwitterIcon />
                      </button>

                      <button
                        className="rounded bg-gray-50 p-0.5"
                        onClick={() => {
                          toast.success("Copied to Clipboard!");
                        }}
                      >
                        <Link />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
