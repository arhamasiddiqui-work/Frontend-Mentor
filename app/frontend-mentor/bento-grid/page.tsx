import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BadgeCheck,
  MessageCircle,
  MessageCircleHeart,
  Sparkle,
  Star,
} from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="*:*: flex min-h-screen flex-col overflow-hidden bg-zinc-100 p-4 pb-15 *:*:*:*:p-4 *:*:p-4 *:p-4 xl:items-center xl:justify-center">
      <div className="xl:flex- flex flex-col xl:w-full xl:max-w-300 xl:flex-row">
        {/* 1 */}
        <div className="flex flex-col md:flex-row xl:flex-1 xl:flex-col">
          <div className="flex flex-1 flex-col gap-6 md:flex-row xl:flex-col">
            {/* Create */}
            <div className="flex flex-1 flex-col rounded-xl bg-amber-100 p-5">
              <div className="flex flex-col gap-15">
                <p className="text-3xl font-semibold">
                  <span>Create and schedule content</span>
                  <br />
                  <span className="text-purple-600 italic">quicker.</span>
                </p>

                <button className="flex items-center justify-center gap-2 rounded-full bg-yellow-400 p-3 font-semibold text-purple-600 transition-colors duration-400 hover:bg-yellow-500">
                  Create Post
                  <Sparkle
                    color="purple"
                    fill="purple"
                  />
                </button>
              </div>
            </div>

            {/* Write */}
            <div className="flex flex-1 flex-col rounded-xl bg-amber-400 p-5">
              <div className="flex flex-col gap-8">
                <p className="text-3xl font-semibold">
                  Write your content using AI.
                </p>

                <div className="flex h-fit flex-col gap-4 rounded-2xl bg-white p-2">
                  <div className="flex items-center gap-3">
                    <p className="rounded-2xl bg-red-100 p-2 text-sm">
                      Give me a 5 tips to grow my follower on insta!
                    </p>

                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/24.png"
                        alt="Girl avatar"
                      />
                      <AvatarFallback>GA</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
                      <Sparkle
                        size={25}
                        color="purple"
                        fill="purple"
                      />
                    </div>

                    <p className="rounded-2xl bg-orange-100 p-2 text-sm">
                      Certainely! Here are the 5 tips to help you grow your
                      instagram...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col xl:flex-3">
          <div className="md:flex">
            <div className="flex flex-2 flex-col gap-5">
              <div className="flex flex-col rounded-xl bg-violet-500 p-10 text-white">
                <div>
                  <p className="text-4xl font-semibold">
                    <span>Social Media</span>
                    &nbsp;
                    <span className="text-yellow-400">10x</span>
                    <br />
                    <span className="italic">Faster with AI</span>
                  </p>
                  <div className="mt-9 flex flex-col items-center gap-2">
                    <div className="flex gap-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={25}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-lg">Over 4,000 5-star reviews</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex-1 gap-10 rounded-xl bg-white p-5">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-center">
                      <div className="md:flex">
                        <div className="flex items-center gap-4 rounded-full p-4 shadow-md">
                          <div className="rounded-full bg-yellow-400 p-2">
                            <MessageCircleHeart color="purple" />
                          </div>
                          <div className="flex flex-col tracking-tight">
                            <p className="text-lg font-semibold">@YourCo</p>
                            <p className="text-muted-foreground text-sm tracking-tighter">
                              12k followers
                            </p>
                          </div>
                        </div>
                        <div className="flex w-fit items-center gap-2 rounded-full p-4 shadow-md">
                          <div className="rounded-full bg-yellow-400 p-2">
                            <MessageCircle color="purple" />
                          </div>
                          <div className="flex flex-col tracking-tight">
                            <p className="text-lg font-semibold">@YourCo</p>
                            <p className="text-muted-foreground text-sm">
                              8k followers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold">
                        Manage multiple accounts and platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 rounded-xl bg-amber-400 px-5 pt-5">
                  <div className="mb-9">
                    <p className="text-3xl font-semibold">
                      Maintain a consistent posting schedule.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-white">
                    <div className="flex justify-between bg-purple-600 p-2 text-white">
                      <p>August 2024</p>
                      <p>Week1</p>
                    </div>
                    <div className="flex justify-between p-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <BadgeCheck key={i} />
                      ))}
                    </div>
                    <div className="flex justify-between p-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Checkbox
                          key={i}
                          className="size-5 bg-amber-50"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex xl:flex-1">
              <div className="flex-col gap-4 rounded-xl bg-violet-200 p-6">
                <div className="flex flex-col gap-7">
                  <p className="text-3xl font-semibold">
                    Schedule to social media.
                  </p>
                  <div className="h-fit rounded-xl bg-white p-4">
                    <p className="mb-2 font-semibold text-gray-800">
                      Best Time to Post
                    </p>
                    <hr />
                    <div className="flex justify-between p-2 text-gray-600">
                      <div className="flex flex-col justify-between">
                        <p className="rounded-2xl bg-red-200 px-2 text-red-700">
                          Mon
                        </p>
                        <div className="flex flex-col items-center gap-2">
                          <p className="h-15 w-5 rounded-2xl bg-purple-700" />

                          <p>6a</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <p className="rounded-2xl bg-green-200 px-2 text-green-700">
                          Wed
                        </p>
                        <div className="mt-9 flex flex-col items-center gap-2">
                          <p className="h-30 w-5 rounded-2xl bg-purple-700" />
                          <p>12p</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <p className="rounded-2xl bg-blue-300 px-2 text-blue-700">
                          Fri
                        </p>
                        <div className="flex flex-col items-center gap-2">
                          <p className="h-20 w-5 rounded-2xl bg-purple-700" />
                          <p>9p</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <p className="rounded-2xl bg-amber-200 px-2 text-amber-700">
                          Sun
                        </p>
                        <div className="mt-9 flex flex-col items-center gap-2">
                          <p className="h-25 w-5 rounded-2xl bg-purple-700" />
                          <p>12a</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    Optimize post timings to publish content at the perfect time
                    for your audience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="rounded-xl bg-white p-5 md:flex-1 lg:flex-1">
              <div className="flex flex-col gap-4">
                <p className="text-4xl font-semibold">›56%</p>
                <p className="font-serif text-lg">faster audience growth</p>
                <div className="flex gap-2">
                  <Avatar className="h-15 w-15">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/21.png"
                      alt="Girl avatar"
                    />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-15 w-15">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/23.png"
                      alt="Girl avatar"
                    />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-15 w-15">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/21.png"
                      alt="Girl avatar"
                    />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-violet-500 md:flex-1 lg:flex-2">
              <div className="flex min-w-0 flex-col items-center justify-center gap-6 p-6 sm:flex-row sm:items-center sm:gap-6 lg:gap-10 xl:mt-6">
                <div className="flex-1 rounded-xl bg-white p-4">
                  <p className="text-xl font-semibold">Followers Growth</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-2xl font-semibold">20,642</p>

                    <p className="rounded-full bg-green-200 px-2 font-semibold text-green-700">
                      +490%
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-2xl font-semibold tracking-wide text-white">
                    Grow followers with non-stop content⚡
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
