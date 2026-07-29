import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer group max-w-full">
        <span className="md:text-xl text-md font-bold text-[#2C2C2C] tracking-tight truncate max-w-[200px] sm:max-w-none">
          MotherLand International
        </span>
      </div>
    </Link>
  );
}
