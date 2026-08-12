import Link from "next/link";

export default function MainMediumFooter() {
  return (
    <div className="border-t border-black">
      <div className="text-sm text-neutral-600 flex flex-wrap justify-center gap-8 p-5">
        <Link href="/help">Help</Link>
        <Link href="/status">Status</Link>

        <Link href="/about">About</Link>

        <Link href="/careers">Careers</Link>

        <Link href="/press">Press</Link>
        <Link href="/posts">Blog</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/text-to-speech">Text to Speech </Link>
      </div>
    </div>
  );
}
