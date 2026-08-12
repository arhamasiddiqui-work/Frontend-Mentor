"use client";
import LoginDialog from "@/components/login-dialog";
import Link from "next/link";

export default function MediumHeader() {

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

    
    </div>
  );
}
