import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-fuchsia-50/30 p-20 max-sm:text-center">
      <div className="flex items-center gap-20 max-sm:flex-col max-sm:gap-10">
        <div className="flex max-w-130 shrink-0 flex-col gap-5">
          <h1 className="flex items-center justify-center text-6xl font-bold tracking-tight text-fuchsia-900 max-sm:text-5xl">
            10,000+ of our users love our products.
          </h1>
          <p className="text-xl text-fuchsia-950 max-sm:text-lg">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="ml-auto h-fit w-120 rounded-xl bg-fuchsia-100/60 p-3 shadow-md transition-colors duration-300 hover:bg-fuchsia-100 max-sm:w-full">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="font-semibold text-fuchsia-900">
                Rated 5 Stars in Reviews
              </p>
            </div>
          </div>

          <div className="ml-auto h-fit w-110 rounded-xl bg-fuchsia-100/60 p-3 shadow-md transition-colors duration-300 hover:bg-fuchsia-100 max-sm:w-full">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="font-semibold text-fuchsia-900">
                Rated 5 Stars in Report Guru
              </p>
            </div>
          </div>

          <div className="ml-auto h-fit w-100 rounded-xl bg-fuchsia-100/60 p-3 shadow-md transition-colors duration-300 hover:bg-fuchsia-100">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="font-semibold text-fuchsia-900">
                Rated 5 Stars in BestTech
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 flex w-full flex-col items-center gap-5 max-sm:mt-15 max-sm:w-full md:mt-30 md:flex-row md:items-start lg:mt-40 lg:max-w-6xl">
        <div className="flex max-w-120 flex-col gap-5 rounded-2xl bg-fuchsia-950 p-8 text-white shadow-lg shadow-fuchsia-900">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/22.png"
                alt="male avatar"
              />
              <AvatarFallback>NPC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">Calton Smith</p>
              <p className="text-sm font-semibold text-pink-600">
                Verified Buyer
              </p>
            </div>
          </div>
          <p className="text-[16px] font-semibold">
            &quot; We needed the same printed design as the one we had ordered a
            week prior. Not only did they find the original order, but we also
            received it in time. Excellent! &quot;
          </p>
        </div>

        <div className="flex max-w-120 flex-col gap-5 rounded-2xl bg-fuchsia-950 p-8 text-white shadow-lg shadow-fuchsia-900 md:mt-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/25.png"
                alt="Girl avatar"
              />
              <AvatarFallback>GA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">Irene Roberto</p>
              <p className="text-sm font-semibold text-pink-600">
                Verified Buyer
              </p>
            </div>
          </div>
          <p className="text-[16px] font-semibold">
            &quot; Customer service is always excellent and very quick turn
            around. Completely delighted with the simplicity of the purchase and
            the speed of delivery. &quot;
          </p>
        </div>

        <div className="flex max-w-120 flex-col gap-5 rounded-2xl bg-fuchsia-950 p-8 text-white shadow-lg shadow-fuchsia-900 md:mt-12">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/22.png"
                alt="Girl avatar"
              />
              <AvatarFallback>GA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">Anne Wallace</p>
              <p className="text-sm font-semibold text-pink-600">
                Verified Buyer
              </p>
            </div>
          </div>
          <p className="text-[16px] font-semibold">
            &quot; Put an order with this company and can only praise the for
            the very high standard. Will definitely use them again and recommend
            them to everyone! &quot;
          </p>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
