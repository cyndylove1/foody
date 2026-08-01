import Image from "next/image";

export default function HeroImage() {
  return (
    <>
      <div className="lg:col-span-6 relative flex justify-center items-center select-none">
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full dynamic-dish-shadow">
          <Image
            src="/assets/woman3.png"
            alt="hero-image"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 460px"
            className="object-cover"
          />
          {/* 20% Off Floating Badge */}
          <div className="absolute top-[10%] right-[-5%] bg-(--main) text-white font-extrabold p-4 rounded-full shadow-lg flex flex-col items-center justify-center aspect-square transform rotate-12 scale-90 sm:scale-100 border-4 border-white">
            <span className="text-xl leading-none">20%</span>
            <span className="text-[11px] font-bold uppercase tracking-wider leading-none mt-0.5">
              Off
            </span>
          </div>
        </div>
        {/* Overlaid Info Feature Box Card */}
        <div className="absolute bottom-[-20px] left-[-10px] sm:left-[20px] bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60 max-w-[240px] space-y-4">
          {/*  Fast Delivery */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#2C2C2C]">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#2C2C2C]">
                Fast Delivery
              </h3>
              <p className="text-[10px] text-[#6A6A6A] font-medium leading-normal mt-0.5">
                Promise To Deliver Within 30 Mins
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full" />
          {/* Pick Up */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#2C2C2C]">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#2C2C2C]">Pick Up</h3>
              <p className="text-[10px] text-[#6A6A6A] font-medium leading-normal mt-0.5">
                Pickup Delivery At Your Doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
