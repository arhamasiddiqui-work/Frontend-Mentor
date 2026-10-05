"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [activeCard, setActiveCard] = useState(0);

  const testimonials = [
    // testimonial 1 → index 0
    // activeCard = 0 → first testimonial
    {
      description:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      name: " Amira Noor",
      role: "UX Engineer",
      image: "/working-woman.webp",
    },
    // testimonial 2 → index 1
    // activeCard = 1 → second testimonial

    {
      description:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      name: "Zayn khan",
      role: "UX Designer",
      image: "/working-man.jpg",
    },
  ];

  const testimonial = testimonials[activeCard];

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100 px-15 py-20 xl:px-40">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="order-2 max-w-270 flex-1 items-center py-7 md:order-1">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-4xl">&quot;{testimonial.description}&quot;</p>
            </div>
            <div className="flex items-center gap-5 text-2xl">
              <p className="flex-1 font-semibold">{testimonial.name}</p>
              <p className="flex-1 text-gray-700">{testimonial.role}</p>
            </div>
          </div>
        </div>
        <div className="order-1 flex-1">
          <div
            className="h-full max-h-180 min-h-80 max-w-160 rounded-xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${testimonial.image})` }}
          />

          <div className="-mt-6 flex items-center justify-center lg:mr-70 xl:mr-0">
            <div className="flex w-fit items-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
              <button
                className="cursor-pointer"
                onClick={() => {
                  setActiveCard(activeCard === 0 ? 1 : 0);
                }}
              >
                <ArrowLeft />
              </button>

              <button
                className="cursor-pointer"
                onClick={() => {
                  setActiveCard(activeCard === 0 ? 1 : 0);
                }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
