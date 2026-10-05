import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-zinc-300 *:p-10">
      <div className="flex max-w-7xl flex-col gap-5 lg:flex lg:flex-row">
        {/* 1 */}
        <div className="flex flex-2 flex-col gap-5 md:flex md:items-center md:justify-center">
          <div className="flex flex-col gap-5 lg:flex lg:flex-row">
            <div className="rounded-xl bg-purple-800 p-6 text-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/20.png"
                      alt="Girl avatar"
                    />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Patricia Clifford</p>{" "}
                    <p className="font-light">Verified Graduate</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny’s worth.
                </p>
                <p className="text-white/70">
                  &quot;I was an EMT for many years before I joined the
                  bootcamp. I’ve been looking to move into tech for a while and
                  6 months ago, I joined the bootcamp and have spent a few
                  months learning as much as I can. I feel I got every penny’s
                  worth and I am ready for the world of tech.&quot;
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-600 p-6 text-white">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/20.png"
                      alt="Boy avatar"
                    />
                    <AvatarFallback>BA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jonathan Walters</p>{" "}
                    <p>Verified Graduate</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  The team was very supportive and kept me motivated
                </p>
                <p className="text-white/80">
                  &quot;I started as a total newbie with virtually no coding
                  skills. I now work as a mobile engineer for a big company.
                  This was one of the best investments I’ve made in
                  myself.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 xl:flex-row">
            <div className="rounded-xl bg-slate-100 p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/22.png"
                      alt="Girl avatar"
                    />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jeanette Harmon</p>{" "}
                    <p className="font-light">Verified Graduate</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  An overall wonderful and rewarding experience
                </p>
                <p className="font-semibold text-black/70">
                  &quot;Thank you for the wonderful experience! I now have a job
                  I really enjoy, and make a good living while doing something I
                  love.&quot;{" "}
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-neutral-800 p-6 text-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/26.png"
                      alt="Boy avatar"
                    />
                    <AvatarFallback>BA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Patrick Abrams</p>{" "}
                    <p className="font-light">Verified Graduate</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  Awesome teaching support from TAs who did the bootcamp
                  themselves. Getting guidance from them and learning from their
                  experiences was the best thing I ever kept.
                </p>
                <p className="text-white/80">
                  &quot;The staff seem genuinely concerned about my progress
                  which I find really refreshing.The program gave me the
                  confidence necessary to be able to go out in the world and
                  present myself as a capable junior developer. The standard is
                  above the rest. You will get the personal attention you need
                  from an incredible community of smart and amazing
                  people.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex-1 items-center justify-center rounded-xl bg-amber-50 p-6 lg:max-w-86">
          <div className="flex flex-col gap-4 lg:gap-7">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/25.png"
                  alt="Girl avatar"
                />
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Kira Whittle</p>{" "}
                <p className="font-light">Verified Graduate</p>
              </div>
            </div>
            <p className="text-xl font-semibold">
              Such a life-changing experience. Highly recommended!
            </p>
            <p className="font-semibold text-black/70">
              &quot;Before joining the bootcamp, I&apos;ve never written a line
              of code. I needed some structure from professionals who can help
              me learn programming step by step. I was encouraged to enroll by a
              former student of theirs who can only say wonderful things about
              the program. The entire curriculum and staff did not disappoint.
              They were very hands-on and I never had to wait long for
              assistance. The agile team project, in particular, was
              outstanding. It took my learning to the next level in a way that
              no tutorial could ever have. In fact, I&apos;ve often referred to
              it during interviews as an example of my development experience.
              It certainly helped me land a job as a full-stack developer after
              receiving multiple offers. 100% recommend!&quot;
            </p>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
