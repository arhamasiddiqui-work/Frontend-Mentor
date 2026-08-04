"use client";

import LoginDialog from "@/components/login-dialog";
import Link from "next/link";
import { useState } from "react";

export default function MediumHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black  p-5">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="playfair text-3xl font-bold tracking-tighter"
        >
          Medium
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about">Our story</Link>

          <Link href="/membership">Membership</Link>

          <Link href="/write">Write</Link>

      <LoginDialog />


        </div>

        {/* Mobile button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/about">Our story</Link>

          <Link href="/membership">Membership</Link>

          <Link href="/write">Write</Link>

          <Link
            href="/login"
            className="rounded-full bg-black px-3 py-2 text-center text-white"
          >
            Get started
          </Link>
        </div>
      )}
    </div>
  );
}
