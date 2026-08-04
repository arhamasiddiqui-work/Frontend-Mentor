"use client";
import LoginDialog from "@/components/login-dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MediumHeader() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const slides = [
    {
      bg: "#dce8c8",
      image: "/medium-1.png",
      badge: "♦️ Member-only story",
      title: "Don't just Set Goals Build Systems",
      author: "Clive Thompson",
      role: "Writer at Wired magazine and author of Coders",
    },

    {
      bg: "#f3d8c5",
      image: "/medium-2.png",
      badge: "♦️ Member-only story",
      title: "AI and the Future of work: What Stays 100% Human?",
      author: "Sam Koppelman",
      role: "Investor and entrepreneur",
    },

    {
      bg: "#d9e8f7",
      image: "/medium-3.png",
      badge: "♦️ Member-only story",
      title: "Why Cities Need More Trees Than Roads",
      author: "Sarah Johnson",
      role: "Urban planner and writer",
    },

    {
      bg: "#f0e3c8",
      image: "/medium-4.png",
      badge: "♦️ Member-only story",
      title: "The Case For Reforesting Our Cities",
      author: "Michael Lee",
      role: "Technology columnist",
    },

    {
      bg: "#d7efd8",
      image: "/medium-5.png",
      badge: "♦️ Member-only story",
      title: "How Can I Stop Focusing on the Bad Things in Life?",
      author: "Emma Wilson",
      role: "Author and editor",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-b border-black p-5">
        <Link
          href="/"
          className="playfair text-3xl font-bold tracking-tighter"
        >
          Medium
        </Link>
        <LoginDialog />
      </div>

      <div className="grid h-160 grid-cols-3">
        <div
          className="col-span-2 py-15 pr-5 pl-10 transition-all duration-700"
          style={{ backgroundColor: slides[current].bg }}
        >
          <p className="font-serif text-6xl">Support human stories</p>
          <p className="">
            Become a member to read without limits or ads, fund great writers,
            and join a global community of people who care about high-quality
            storytelling.
          </p>
          <button className="rounded-full bg-black px-4 py-2 text-white">
            View plans
          </button>
          <button className="rounded-full border border-black/40 px-4 py-2 transition-colors hover:bg-black/10">
            Start writing
          </button>
        </div>

        <div className="relative col-span-1 h-full border-l border-black">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
          />

          <div className=" absolute right-0 bottom-0 left-0 p-10">
            <p className="inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold">
              {slides[current].badge}
            </p>

            <h2 className="max-w-md font-serif text-5xl">
              {slides[current].title}
            </h2>

            <div className="mt-6">
              <p className="font-semibold">{slides[current].author}</p>

              <p className="text-gray-700">{slides[current].role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black">

      </div>
    </div>
  );
}
