import Image from "next/image";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-900">
      <div className="max-sm:p-10">
        <div className="flex h-120 w-220 overflow-hidden rounded-2xl bg-gray-700/40 max-sm:h-auto max-sm:w-auto max-sm:flex-col">
          <div className="flex max-w-120 flex-col gap-10 p-16 text-white max-sm:order-2 max-sm:w-full max-sm:p-8">
            <p className="text-4xl font-semibold">
              <span>Get</span>
              &nbsp;
              <span className="text-gray-400">insights</span>
              &nbsp;
              <span>that help your business grow.</span>
            </p>
            <p className="font-light text-white/50">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency
            </p>
            <div className="mt-15 flex max-w-80 justify-between uppercase">
              <p className="flex flex-col">
                <span className="text-2xl font-semibold">10k+</span>
                <span className="text-sm text-white/50">companies</span>
              </p>
              <p className="flex flex-col">
                <span className="text-2xl font-semibold">314</span>
                <span className="text-sm text-white/50">templates</span>
              </p>
              <p className="flex flex-col">
                <span className="text-2xl font-semibold">12M+</span>
                <span className="text-sm text-white/50">queries</span>
              </p>
            </div>
          </div>
          <div className="order-1 flex max-sm:w-full">
            <Image
              src="/medium-3.png"
              alt="Medium"
              width={500}
              height={500}
              className="object-cover grayscale-80"
            />
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
