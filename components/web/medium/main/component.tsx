import Image from "next/image";

export default function MediumMain() {
  return (
    <div className="flex w-full items-center justify-between gap-10 overflow-hidden py-30">
      <div className="max-w-3xl space-y-10 px-15 lg:ml-10 xl:ml-40">
        <h1 className="playfair text-[110px] leading-23.75 tracking-tight">
          Human stories & ideas
        </h1>

        <p className="text-2xl text-gray-800">
          A place to read, write, and deepen your understanding.
        </p>

        <button className="cursor-pointer rounded-full bg-black px-10 py-2 text-lg font-semibold text-white">
          Start reading
        </button>
      </div>
      <div className="relative h-150 w-160 shrink-0">
        <Image
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="Medium"
          fill
          className="object-contain object-right"
        />
      </div>
    </div>
  );
}
