import {
  BrickWallShield,
  Calculator,
  HatGlasses,
  Lightbulb,
} from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-100 p-9 sm:gap-20 md:gap-30">
      <div className="flex max-w-125 flex-col items-center justify-center gap-3">
        <p className="text-4xl font-light">Reliable, efficient delivery</p>
        <p className="text-4xl font-semibold">Powered by Technology</p>
        <p className="text-center">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="flex flex-col gap-6 *:*:mt-4 *:p-6 md:grid md:grid-cols-2 xl:max-w-370 xl:grid-cols-4">
        <div className="flex-1 rounded-xl border-t-3 border-red-600 bg-red-50 shadow-lg xl:translate-y-9">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Team Builder</p>
            <p className="text-sm text-neutral-600">
              Scans our talent network to create the optimal team for your
              project
            </p>
          </div>
          <div className="flex justify-end">
            <div className="rounded-full bg-orange-100 p-2">
              <BrickWallShield
                size={45}
                color="#D4300D"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl border-t-3 border-teal-600 bg-teal-50 shadow-lg xl:-translate-y-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Supervisor</p>
            <p className="text-sm text-neutral-600">
              Monitors activity to identify project roadblocks
            </p>
          </div>
          <div className="flex justify-end">
            <div className="rounded-full bg-teal-100 p-2">
              <HatGlasses
                size={45}
                color="#0D9488"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-xl border-t-3 border-yellow-500 bg-yellow-50 shadow-lg xl:translate-y-9">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Karma</p>
            <p className="text-sm text-neutral-600">
              Regularly evaluates our talent to ensure quality
            </p>
          </div>
          <div className="flex justify-end">
            <div className="rounded-full bg-yellow-100 p-2">
              <Lightbulb
                size={45}
                color="#F59E0B"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-xl border-t-3 border-blue-600 bg-blue-50 shadow-lg xl:-translate-y-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Calculator</p>
            <p className="text-sm text-neutral-600">
              Uses data from past projects to provide better delivery estimates
            </p>
          </div>
          <div className="flex justify-end">
            <div className="rounded-full bg-blue-100 p-2">
              <Calculator
                size={44}
                color="#3B82F6"
              />
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
