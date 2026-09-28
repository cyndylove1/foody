"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { ShoppingBag, Truck } from "lucide-react";

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
        <div
          className="
            absolute
            -right-6
            md:-right-2
            lg:right-0
            -top-4
            md:top-0
            z-20
            w-20
            h-20
            sm:w-24
            sm:h-24
            lg:w-28
            lg:h-28
            rounded-full
            bg-[#00864A]
            border-4
            sm:border-6
            lg:border-8
            border-white
            shadow-xl
            flex
            flex-col
            items-center
            justify-center
            text-white
            rotate-6
          "
        >
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold">
            20%
          </span>

          <span className="text-[10px] sm:text-xs lg:text-sm font-bold">
            OFF
          </span>
        </div>
        {/* Overlaid Info Feature Box Card (Responsive position & sizing) */}
        <div className="absolute -bottom-8 min-[380px]:-bottom-6 left-[-15px] min-[380px]:left-[-10px] sm:left-[10px] z-20 bg-white/85 backdrop-blur-md rounded-2xl p-3 min-[380px]:p-4 sm:p-5 shadow-xl border border-white/60 w-[190px] min-[380px]:w-[210px] sm:w-[240px] space-y-2.5 min-[380px]:space-y-3 sm:space-y-4">
          {/* Fast Delivery */}
          <div className="flex items-start gap-2 min-[380px]:gap-2.5 sm:gap-3">
            <div className="mt-0.5 text-[#2C2C2C] shrink-0">
               <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D69E00]" />
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
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
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
