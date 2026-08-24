import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackToHomePage from "../back to home/page";

export default function SocialLinksProfile() {
  return (
    <div className="flex h-screen items-center justify-center bg-black/75 text-white">
      <div className="h-fit w-80 rounded-xl bg-neutral-900 transition-transform duration-300 hover:-translate-y-2">
        <div className="flex flex-col items-center justify-center gap-3 p-5">
          <Avatar className="h-15 w-15">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>NPC</AvatarFallback>
          </Avatar>
          <div>
            <p className="flex items-center justify-center text-xl font-semibold">
              Alex William
            </p>
            <p className="text-sm text-lime-300">London, United Kingdom</p>
          </div>
          <p className="text-mauve-300">&quot;Front-end developer&quot;</p>
          <button className="h-full w-full rounded-lg bg-neutral-700 p-2 font-semibold">
            Github
          </button>
          <button className="h-full w-full rounded-lg bg-neutral-700 p-2 font-semibold">
            Frontend Mentor
          </button>
          <button className="h-full w-full rounded-lg bg-neutral-700 p-2 font-semibold">
            LinkedIn
          </button>
          <button className="h-full w-full rounded-lg bg-neutral-700 p-2 font-semibold">
            Twitter
          </button>
          <button className="h-full w-full rounded-lg bg-neutral-700 p-2 font-semibold">
            Instagram
          </button>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
