import BackToHomePage from "../back to home/page";

export default function ResultsSummary() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-200/60  max-sm:px-14">
      <div className="flex h-fit w-full max-w-170 rounded-2xl bg-white max-sm:flex-col">
        <div className="h-fit rounded-2xl  w-1/2 bg-indigo-600 max-sm:w-full">
          <div className="flex flex-col items-center justify-center gap-5 p-6 text-white">
            <p className="text-2xl text-white/70">Your Result</p>
            <button className="h-45 w-45 rounded-full bg-indigo-700 font-semibold transition-all duration-500 hover:-translate-y-1 hover:bg-indigo-800">
              <p className="text-5xl font-bold">76</p>
              <p className="text-zinc-300">of 100</p>
            </button>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <p className="text-3xl font-semibold">Great!</p>
              <p className="">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col gap-6 max-sm:w-full p-9">
          <p className="text-2xl font-semibold">Summary</p>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between rounded-xl bg-red-200/20 p-3">
              <p className="font-semibold text-red-500">Reaction</p>
              <p>
                <span className="font-semibold">80</span>
                <span className="font-semibold text-zinc-500">/100</span>
              </p>
            </div>
            <div className="flex justify-between rounded-xl bg-yellow-200/20 p-3">
              <p className="font-semibold text-yellow-500">Memory</p>
              <p>
                <span className="font-semibold">92</span>
                <span className="font-semibold text-zinc-500">/100</span>
              </p>
            </div>
            <div className="flex justify-between rounded-xl bg-green-200/20 p-3">
              <p className="font-semibold text-green-500">Verbal</p>
              <p>
                <span className="font-semibold">61</span>
                <span className="font-semibold text-zinc-500">/100</span>
              </p>
            </div>
            <div className="flex justify-between rounded-xl bg-blue-200/20 p-3">
              <p className="font-semibold text-blue-500">Visual</p>
              <p>
                <span className="font-semibold">73</span>
                <span className="font-semibold text-zinc-500">/100</span>
              </p>
            </div>

            <button className="mt-3 cursor-pointer rounded-full bg-gray-700 p-3 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-gray-800">
              Continue
            </button>
          </div>
        </div>
      </div>
      <BackToHomePage></BackToHomePage>
    </div>
  );
}
