"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function WriteHeader() {
  function handlePublish() {
    toast.success("Story published!");
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-white p-5">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="playfair text-3xl font-bold tracking-tighter"
          >
            Medium
          </Link>
          <p>Draft</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handlePublish}
            className="rounded-full bg-green-700 px-4 py-2 font-semibold hover:bg-green-600"
          >
            Publish
          </Button>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>NPC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      
    </div>
  );
}
