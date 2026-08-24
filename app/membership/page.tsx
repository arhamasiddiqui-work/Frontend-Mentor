"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MediumHeader from "@/components/web/medium/header/component";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Membership() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const slides = [
    {
      bg: "#F5DDD5",
      image: "/medium-1.png",
      badge: "💸 Member-only story",
      title: "Don't just Set Goals Build Systems",
      author: "Kurtis Pykes",
      role: "Author of Don't Just Set Goals. Build Systems",
    },

    {
      bg: "#F4C7A1",
      image: "/medium-2.png",
      badge: "💸 Member-only story",
      title: "AI and the Future of work: What Stays 100% Human?",
      author: "Cassie Kozyrkov",
      role: "Chief Decision Scientist at Google",
    },

    {
      bg: "#d9e8f7",
      image: "/medium-3.png",
      badge: "💸 Member-only story",
      title: "Why Cities Need More Trees Than Roads",
      author: "Alex Williams",
      role: "Author of Data-Informed UX Design ",
    },
    {
      bg: "#DCE8C8",
      image: "/medium-4.png",
      badge: "💸 Member-only story",
      title: "The Case For Reforesting Our Cities",
      author: "Clive Thompson",
      role: "Writer at wired magazine and author of Coders",
    },

    {
      bg: "#A8C7E8",
      image: "/medium-5.png",
      badge: "💸 Member-only story",
      title: "How Can I Stop Focusing on the Bad Things in Life?",
      author: "Kaki Okumara",
      role: "Author and editor : The art of Balance",
    },
  ];

  return (
    <div>
      <MediumHeader />
      <div className="flex w-full flex-col border-b border-black sm:h-170 sm:flex-row">
        <div
          className="flex min-w-0 flex-col justify-between py-10 pr-5 pl-10 transition-colors duration-700 ease-in-out sm:w-3/5 sm:shrink-0"
          style={{
            backgroundColor: `color-mix(in srgb, ${slides[current].bg} 70%, white)`,
          }}
        >
          <div className="py-15">
            <p className="max-w-3xl font-serif text-[85px] leading-20 md:max-w-xs">
              Support human stories
            </p>
          </div>
          <div className="flex max-w-2xl flex-col gap-10">
            <p className="text-lg font-semibold text-neutral-700">
              Become a member to read without limits or ads, fund great writers,
              and join a global community of people who care about high-quality
              storytelling.
            </p>
            <div className="flex gap-5">
              <button className="rounded-full bg-black px-4 py-2 text-white">
                View plans
              </button>
              <Link
                href={"/write"}
                className="rounded-full border border-black/40 px-4 py-2 transition-colors hover:bg-black/10"
              >
                Start writing
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden border-t border-l border-black sm:w-2/5 sm:shrink-0 md:border-t-0">
          <div className="relative h-116 overflow-hidden">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
            />

            <Image
              src={slides[(current + 1) % slides.length].image}
              alt=""
              fill
              className="object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>

          <div
            className="h-2/4.5 absolute right-0 bottom-0 left-0 flex shrink-0 flex-col gap-7 overflow-hidden p-5 backdrop-blur-md"
            style={{
              background: `linear-gradient(transparent , 
              ${slides[current].bg}  9%)`,
            }}
          >
            <button className="w-fit cursor-pointer rounded-full bg-yellow-400 px-4 py-2 text-sm">
              {slides[current].badge}
            </button>

            <h2 className="font-serif text-3xl">{slides[current].title}</h2>

            <div className="mt-6 flex gap-2">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="grayscale"
                />
                <AvatarFallback>NPC</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <p className="font-semibold">{slides[current].author}</p>

                <p>{slides[current].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
