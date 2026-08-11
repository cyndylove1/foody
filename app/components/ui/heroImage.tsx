"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Define your image list
const heroImages = [
  { src: "/assets/woman3.png", alt: "Hero Image 1" },
  { src: "/assets/man.png", alt: "Hero Image 2" },
  { src: "/assets/woman1.png", alt: "Hero Image 3" },
];

export default function HeroImage() {
  return (
    <div className="lg:col-span-6 w-full min-w-0 h-full relative flex justify-center items-center select-none my-6 lg:my-0">
      {/* Circle Sizing Container - Scaled for extra small (xs) and mobile screens */}
      <div className="relative w-[260px] h-[260px] min-[380px]:w-[300px] min-[380px]:h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] aspect-square flex-shrink-0">
        {/* Circle Image Wrapper with overflow-hidden ONLY for the Swiper images */}
        <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={image.src} className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 460px"
                  className="object-cover"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 20% Off Floating Badge (Scaled down on small screens) */}
        <div className="absolute top-[2%] right-[-10px] min-[380px]:right-[-12px] sm:top-[5%] sm:right-[-4%] z-20 bg-[var(--main,#000)] text-white font-extrabold p-2.5 min-[380px]:p-3 sm:p-4 rounded-full shadow-lg flex flex-col items-center justify-center aspect-square transform rotate-12 scale-75 min-[380px]:scale-90 sm:scale-100 border-2 sm:border-4 border-white">
          <span className="text-base min-[380px]:text-lg sm:text-xl leading-none">
            20%
          </span>
          <span className="text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-none mt-0.5">
            Off
          </span>
        </div>

        {/* Overlaid Info Feature Box Card (Responsive position & sizing) */}
        <div className="absolute -bottom-8 min-[380px]:-bottom-6 left-[-15px] min-[380px]:left-[-10px] sm:left-[10px] z-20 bg-white/85 backdrop-blur-md rounded-2xl p-3 min-[380px]:p-4 sm:p-5 shadow-xl border border-white/60 w-[190px] min-[380px]:w-[210px] sm:w-[240px] space-y-2.5 min-[380px]:space-y-3 sm:space-y-4">
          {/* Fast Delivery */}
          <div className="flex items-start gap-2 min-[380px]:gap-2.5 sm:gap-3">
            <div className="mt-0.5 text-[#2C2C2C] shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
              <h3 className="text-[11px] min-[380px]:text-xs font-bold text-[#2C2C2C]">
                Fast Delivery
              </h3>
              <p className="text-[9px] min-[380px]:text-[10px] text-[#6A6A6A] font-medium leading-normal mt-0.5">
                Promise To Deliver Within 30 Mins
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full" />

          {/* Pick Up */}
          <div className="flex items-start gap-2 min-[380px]:gap-2.5 sm:gap-3">
            <div className="mt-0.5 text-[#2C2C2C] shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
              <h3 className="text-[11px] min-[380px]:text-xs font-bold text-[#2C2C2C]">
                Pick Up
              </h3>
              <p className="text-[9px] min-[380px]:text-[10px] text-[#6A6A6A] font-medium leading-normal mt-0.5">
                Pickup Delivery At Your Doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
