import Image from "next/image";
import Link from "next/link";

interface LogoProps{
  textColor?: string;
}
export default function Logo({textColor} :LogoProps) {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer group max-w-full">
        <Image
          src="/assets/logo.png"
          alt="MotherLand Logo"
          width={40}
          height={40}
          className="w-8 h-auto sm:w-10"
        />
        <span className={`md:text-xl text-md font-bold tracking-tight truncate max-w-[200px] sm:max-w-none ${textColor}`}>
          MotherLand 
        </span>
      </div>
    </Link>
  );
}
