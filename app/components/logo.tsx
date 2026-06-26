import Link from "next/link";

export default function Logo() {
    return (
      <>
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="md:text-2xl text-xl font-bold text-[#2C2C2C] tracking-tight">
              Foody
            </span>
          </div>
        </Link>
      </>
    );
}