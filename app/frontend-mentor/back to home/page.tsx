import Link from "next/link";

export default function BackToHomePage() {
  return (
    <div className="fixed bottom-5 right-5 mb-3">
      <Link
        href="/"
        className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-sm transition-colors duration-300 hover:bg-black hover:text-white"
      >
        ← Go to Home Page
      </Link>
    </div>
  );
}
