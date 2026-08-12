import Mediumfooter from "@/components/web/medium/footer/component";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#242424] text-white">
      <div className="flex items-center justify-between border-b border-white p-5">
        <Link
          href="/"
          className="playfair text-3xl font-bold tracking-tighter"
        >
          Medium
        </Link>
        <div>
          <Link
            href="/write"
            className="rounded-full bg-white px-4 py-2 font-semibold text-black"
          >
            Start writing
          </Link>
        </div>
      </div>

      <div className="mt-25 mb-25 flex max-w-3xl flex-col gap-10 pr-10 pl-10">
        <h1 className="playfair max-w-lg text-7xl leading-20">
          Everyone has a story to tell
        </h1>

        <p className=": font-serif text-2xl">
          Medium is a home for human stories and ideas. Here, anyone can share
          knowledge and wisdom with the world—without having to build a mailing
          list or a following first. The internet is noisy and chaotic; Medium
          is quiet yet full of insight. It &apos;s simple, beautiful,
          collaborative, and helps you find the right readers for whatever you
          have to say.
        </p>
        <p className="max-w-2xl rounded-lg bg-neutral-700 p-4 text-3xl">
          &quot;Ultimately, our goal is to deepen our collective understanding
          of the world through the power of writing.&quot;
        </p>
        <p className="font-serif text-2xl">
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we&apos;re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </p>
        <p className="font-serif text-2xl">
          Over 100 million people connect and share their wisdom on Medium every
          month. They&apos;re software developers, amateur novelists, product
          designers, CEOs, and anyone burning with a story they need to get out
          into the world. They write about what they&apos;re working on,
          what&apos;s keeping them up at night, what they&apos;ve lived through,
          and what they&apos;ve learned that the rest of us might want to know
          too.
        </p>
        <p className="font-serif text-2xl">
          Instead of selling ads or selling your data, we&apos;re supported by a
          growing community of over a million Medium members who believe in our
          mission. If you&apos;re new here, start reading. Dive deeper into
          whatever matters to you. Find a post that helps you learn something
          new, or reconsider something familiar—and then write your story.
        </p>
      </div>

      <Link
        href="/write"
        className="flex cursor-pointer items-center justify-between border-t border-white px-10 py-6 font-serif text-4xl transition-colors duration-400 hover:bg-white hover:text-black"
      >
        <p>Start writing</p>
        <ArrowRight />
      </Link>

      <Link
        href="/membership"
        className="flex cursor-pointer items-center justify-between border-t border-white px-10 py-6 font-serif text-4xl transition-colors duration-400 hover:bg-white hover:text-black"
      >
        <p>Become a member</p>
        <ArrowRight />
      </Link>

      <Mediumfooter />
    </div>
  );
}
