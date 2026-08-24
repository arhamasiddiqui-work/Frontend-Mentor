import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import BackToHomePage from "../back to home/page";

export default function BlogPreviewCard() {
  return (
    <div className="flex h-screen items-center justify-center bg-orange-300 ">
      <div className="h-107 w-80 rounded-xl bg-black">
        <div className="h-fit w-80 -translate-x-2 -translate-y-2 rounded-xl border border-black bg-white p-4 shadow-2xl transition-transform duration-300">
          <div className="relative h-40">
            <Image
              src="/medium-1.png"
              alt="Medium"
              fill
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="mt-4 flex flex-col gap-2">
              <button className="w-fit cursor-pointer rounded-lg bg-orange-400 px-2 py-1 text-sm font-semibold transition-colors duration-300 hover:bg-orange-400/86">
                Learning
              </button>
              <p className="text-sm text-neutral-900">Published 14 Aug 2026</p>
              <p className="text-xl font-bold">HTML & CSS foundations</p>
              <p className="text-sm font-semibold text-zinc-500">
                These languages are the backbone of every website,defining
                structure,content and presentation.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>NPC</AvatarFallback>
                </Avatar>

                <p className="text-sm font-semibold">Greg Hooper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage/>
    </div>
    
  );
}
