import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ClockCheck,
  FilePen,
  Layers,
  LinkIcon,
  Mail,
  MapPin,
  MonitorCloud,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
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
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="mx-auto flex max-w-400 flex-col gap-8">
        {/* header */}
        <div className="flex justify-between border-b p-6 xl:border-none">
          <div className="flex items-center gap-2">
            <Layers />
            <p className="text-3xl font-semibold">Fylo</p>
          </div>
          <div className="flex gap-4 text-white/80">
            <p className="transition-colors duration-300 hover:text-white">
              Features
            </p>
            <p className="transition-colors duration-300 hover:text-white">
              Team
            </p>
            <p className="transition-colors duration-300 hover:text-white">
              Sign in
            </p>
          </div>
        </div>
        {/* main */}
        <div>
          <div>
            <div className="flex flex-col items-center justify-center gap-9 p-9">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                  <Image
                    src="/medium-5.png"
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-lg"
                  ></Image>
                </div>
                <div className="flex max-w-150 flex-col gap-4">
                  <p className="text-center text-2xl font-semibold">
                    All your files in one secure location, accessible anywhere
                  </p>
                  <p className="text-center text-lg">
                    Fylo stores your most important files in one secure
                    location.Access them wherever you need, share and
                    collaborate with friends, family, and co-workers
                  </p>
                  <div className="flex items-center justify-center">
                    <button className="rounded-2xl bg-linear-to-br from-cyan-500 to-blue-500 px-9 py-2 font-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="border-amber-400 p-5">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <MonitorCloud
                      size={50}
                      className="text-teal-500"
                    />
                    <p className="text-lg font-semibold">
                      Access your files, anywhere
                    </p>
                    <p className="text-center text-white/80">
                      The ability to use a smartphone, tablet, or computer to
                      access your account means your files follow you everywhere
                    </p>
                  </div>
                </div>
                <div className="border-amber-800">
                  <div className="flex flex-col items-center justify-center gap-3 p-5">
                    <ShieldCheck
                      size={50}
                      className="text-teal-500"
                    />
                    <p className="text-lg font-semibold">
                      Security you can trust
                    </p>
                    <p className="text-center text-white/80">
                      2-factor authentication and user-controlled encryption are
                      just a couple of the security features we allow to help
                      secure your files
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="border-amber-900">
                  <div className="flex flex-col items-center justify-center gap-3 p-5">
                    <ClockCheck
                      size={50}
                      className="text-teal-500"
                    />
                    <p className="text-lg font-semibold">
                      Real-time collaboration
                    </p>
                    <p className="text-center text-white/80">
                      Securely share files and folders with friends, family and
                      colleagues for live collaboration. No email required! try
                      out now
                    </p>
                  </div>
                </div>
                <div className="border-amber-800">
                  <div className="flex flex-col items-center justify-center gap-3 p-5">
                    <FilePen
                      size={50}
                      className="text-teal-500"
                    />
                    <p className="text-lg font-semibold">
                      Store any type of file
                    </p>
                    <p className="text-center text-white/80">
                      Whether youre sharing holidays photos or work documents,
                      Fylo has you covered allowing for all file types to be
                      securely stored and shared
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-9 p-9 md:flex-row">
              <div>
                <Image
                  src="/medium-3.png"
                  alt="social circle"
                  width={600}
                  height={600}
                  className="rounded-lg"
                ></Image>
              </div>
              {/* <div className=""> */}
              <div className="flex flex-col gap-4 p-2">
                <p className="text-3xl font-semibold">
                  Stay Productive, wherever you are
                </p>
                <p className="text-white/80">
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p className="text-white/80">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email required!
                </p>
                <p className="text-lg text-teal-400 underline transition-colors duration-300 hover:text-teal-300">
                  See how Fylo works →
                </p>
                {/* </div> */}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-9 lg:flex-row">
              <div className="rounded-xl bg-slate-700/40 p-4">
                <div className="flex flex-col gap-4">
                  <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/25.png"
                        alt="Girl avatar"
                      />
                      <AvatarFallback>GA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">Iva Boyd</p>
                      <p className="text-white/90">Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-slate-700/40 p-4">
                <div className="flex flex-col gap-4">
                  <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/24.png"
                        alt="Male avatar"
                      />
                      <AvatarFallback>BA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">Bruce McKenzie</p>
                      <p className="text-white/90">Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-slate-700/40 p-4">
                <div className="flex flex-col gap-4">
                  <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/20.png"
                        alt="Male avatar"
                      />
                      <AvatarFallback>BA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">Satish Patel</p>
                      <p className="text-white/90">Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto flex max-w-150 flex-col rounded-2xl bg-slate-800 p-9 text-center">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-semibold">
                    Get early access today
                  </p>
                  <p>
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                  <button className="flex-1 rounded-2xl bg-white/90 p-2">
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="text-slate-800 outline-0"
                    />
                  </button>
                  <button className="rounded-2xl bg-linear-to-br from-cyan-500 to-blue-500 px-9 py-2 font-semibold">
                    Get Started for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col items-center gap-4 border-t p-7 lg:flex lg:flex-row lg:justify-between xl:border-none">
          <div className="flex items-center gap-2">
            <Layers />
            <p className="text-3xl font-semibold">Fylo</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 lg:flex lg:flex-row lg:justify-between">
            <div className="flex gap-2 p-2">
              <MapPin className="fill-white text-black" />
              <p>Street 10, F-6/2, Islamabad, Pakistan</p>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="flex gap-2">
                <Phone className="fill-white text-black" /> <p>+111-222-333</p>
              </div>
              <div className="flex gap-2">
                <Mail /> <p>example@fylo.com</p>
              </div>
            </div>
            <div className="flex gap-4 p-1">
              <p className="text-white/90 transition-colors duration-300 hover:text-white">
                Contact
              </p>
              <p className="text-white/90 transition-colors duration-300 hover:text-white">
                Terms
              </p>
              <p className="text-white/90 transition-colors duration-300 hover:text-white">
                Privacy
              </p>
            </div>
            <div className="p-2">
              <div className="flex gap-4">
                <button className="rounded-full border p-1 transition-colors duration-300 hover:bg-white/20">
                  <FacebookIcon />
                </button>
                <button className="rounded-full border p-1 transition-colors duration-300 hover:bg-white/20">
                  <TwitterIcon />
                </button>
                <button className="rounded-full border p-1 transition-colors duration-300 hover:bg-white/20">
                  <LinkIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
