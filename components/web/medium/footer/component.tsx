import Link from "next/link";

export default function Mediumfooter() {
  return (
    <div className="flex items-center justify-between border-t border-black bg-white p-3 text-black">
      <Link
        href="/"
        className="playfair text-3xl font-bold tracking-tighter"
      >
        Medium
      </Link>
      <div className="flex flex-wrap justify-center gap-8 p-5 text-sm text-neutral-800 underline">
        <Link href="/about">About</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/help">Help</Link>
        <Link href="/press">Press</Link>
      </div>
    </div>
  );
}
