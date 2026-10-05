import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex flex-col border-8 p-4 *:p-4 xl:min-h-dvh xl:items-center xl:justify-center">
      <div className="flex flex-col border-8 *:*:*:*:*:p-4 *:*:*:*:p-4 *:*:*:p-4 *:*:p-4 *:p-4 xl:w-full xl:max-w-350 xl:flex-row">
        {/* 1 */}
        <div className="flex flex-col border-8 md:flex-row xl:flex-1 xl:flex-col">
          <div className="h-50 bg-pink-200 md:flex-1"></div>
          <div className="h-50 bg-yellow-500 md:flex-1"></div>
        </div>

        {/* 2 */}
        <div className="flex flex-col border-8 xl:flex-3">
          {/* 2-1 */}
          <div className="flex flex-col border-8 lg:flex-row">
            <div className="flex flex-col border-8 lg:flex-2">
              <div className="h-50 bg-purple-500"></div>

              <div className="flex flex-col border-8 md:flex-row">
                <div className="h-50 bg-rose-400 md:flex-1"></div>
                <div className="h-50 bg-indigo-400 md:flex-1"></div>
              </div>
            </div>

            <div className="h-50 bg-purple-200 lg:h-auto lg:flex-1"></div>
          </div>

          {/* 2-2 */}
          <div className="flex flex-col border-8 md:flex-row">
            <div className="h-50 bg-slate-100 md:flex-1 lg:flex-1"></div>
            <div className="h-50 bg-fuchsia-500 md:flex-1 lg:flex-2"></div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
