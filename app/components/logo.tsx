import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  textColor?: string;
}
export default function Logo({ textColor }: LogoProps) {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer group max-w-full">
        <Image
          src="/assets/logo.png"
          alt="MotherLand Logo"
          width={64}
          height={64}
          className="w-16 h-auto sm:w-20"
        />
        <div
          className={`flex flex-col md:items-center items-start font-bold tracking-tight leading-tight ${textColor}`}
        >
          <p className="md:text-md text-sm">MotherLand International</p>

          <p className="md:text-md text-sm">Foods LLC</p>
        </div>
      </div>
    </Link>
  );
}
