import { ArrowRight, Sparkle } from "lucide-react";
import BackToHomePage from "../back to home/page";



export default function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex-2 border-8 border-rose-100 bg-rose-50/49 *:p-10">
        <div className="flex max-w-2xl flex-col items-center justify-center gap-10">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-rose-50 p-5 shadow-lg">
            <Sparkle
              size={45}
              className="text-rose-300"
            />
            <div className="text-2xl font-semibold tracking-wider text-neutral-700 uppercase">
              <p>~Base</p>
              <p>Apparel~</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 p-10 md:gap-20">
            <p className="flex flex-col text-6xl font-semibold tracking-widest text-neutral-700 uppercase">
              <span className="font-light text-rose-300">We&apos;re</span>

              <span>Coming soon!</span>
            </p>
            <p className="text-lg font-semibold text-neutral-500">
              Hello fellow shopper! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date and get
              exclusive offers.
            </p>
            <div className="flex items-center rounded-2xl border">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-5 outline-none placeholder:text-neutral-600"
              />
              <button className="flex items-center gap-2 rounded-lg bg-rose-200 p-5 font-semibold text-neutral-500 transition-colors hover:bg-rose-300">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 bg-[url('/medium-1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-rose-50/0"></div>
      <BackToHomePage />
    </div>
  );
}
