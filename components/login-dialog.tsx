"use client";

import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function LoginDialog() {
  const toastGoogle = () => {
    toast.success("Google login is not available yet!");
  };
  const toastGithub = () => {
    toast.success("Github login is not available yet!");
  };
  return (
    <Dialog>
      <DialogTrigger render={<Button>Get started</Button>}></DialogTrigger>

      <DialogContent className="max-w-md rounded-2xl p-8">
        <div className="flex justify-center">
          <Image
            src="/medium-icon.svg"
            alt="Medium"
            width={80}
            height={80}
          />
        </div>

        <DialogTitle className="text-center text-3xl font-bold">
          Login to your account (●&apos;◡&apos;●)
        </DialogTitle>

        <div className="mt-8 flex flex-col gap-3">
          <button
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-200/40 p-4"
            onClick={() => toastGoogle()}
          >
            <Image
              src="/google-logo.png"
              alt="Google"
              width={30}
              height={30}
            />
            <p className="text-lg font-semibold">Sign in with Google</p>
          </button>

          <button
            className="flex w-full items-center gap-4 rounded-xl border bg-gray-200/40 p-4"
            onClick={() => toastGithub()}
          >
            <Image
              src="/github-logo.png"
              alt="GitHub"
              width={30}
              height={30}
            />
            <p className="text-lg font-semibold">Sign in with GitHub</p>
          </button>
        </div>
        <div className="mt-3 flex justify-center border-t pt-3 font-semibold text-neutral-700">
          <DialogClose>
            <Button>Go Back</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
