import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Hello world!</h1>

      <div className="">
        <Link href="/medium">Medium</Link>
      </div>
    </div>
  );
}
