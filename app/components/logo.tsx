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
          className="w-14 h-auto md:w-20"
        />
        <div
          className={`flex flex-col items-start font-bold tracking-tight leading-tight ${textColor}`}
        >
          <span className="text-sm md:text-base">
            MotherLand <span className="block md:inline">International</span>
          </span>

          <p className="text-sm md:text-md">Foods LLC</p>
        </div>
      </div>
    </Link>
  );
}
