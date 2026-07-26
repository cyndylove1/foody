import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ReactNode, useId } from "react";
import { StaticImageData } from "next/image";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

interface CustomSwiperProps {
  images?: (string | StaticImageData)[];
  bulletColor?: string;
  activeBulletColor?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  slidesPerView?: number | "auto";
  breakpoints?: {
    [width: number]: { slidesPerView: number; spaceBetween?: number };
  };
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  height?: string;
  width?: string;
  rounded?: string;
  borderRadius?: string;
  hideText?: boolean;
  text?: string[];
  navClass?: string;
  children?: ReactNode;
}

export default function CustomSwiper({
  images,
  bulletColor,
  activeBulletColor,
  showNavigation,
  showPagination,
  slidesPerView,
  breakpoints,
  loop = true,
  autoplay,
  autoplayDelay,
  spaceBetween = 14,
  height = "100%",
  width = "100%",
  rounded,
  borderRadius,
  hideText,
  text = [],
  navClass,
  children,
}: CustomSwiperProps) {
  const uniqueId = useId().replace(/:/g, "-");
  const nextBtnClass = navClass ? navClass : `custom-next-${uniqueId}`;

  return (
    <div
      className="relative w-full h-full"
      style={
        {
          "--bullet-color": bulletColor,
          "--active-bullet-color": activeBulletColor,
        } as React.CSSProperties
      }
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? {
                nextEl: `.${nextBtnClass}`,
              }
            : undefined
        }
        autoplay={autoplay ? { delay: autoplayDelay } : undefined}
        loop={loop}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        className="w-full h-full"
      >
        {children
          ? (Array.isArray(children) ? children : [children]).map(
              (child, i) => (
                <SwiperSlide key={i} className="h-full">
                  {child}
                </SwiperSlide>
              ),
            )
          : images?.map((img, i) => (
              <SwiperSlide key={i} className="h-full">
                <div className="flex flex-col items-center w-full h-full">
                  <div
                    className={`relative overflow-hidden bg-gray-100/70 flex items-center justify-center ${rounded}`}
                    style={{
                      width,
                      height,
                      borderRadius,
                    }}
                  >
                    <Image
                      src={img}
                      alt={text[i] || `Slide ${i + 1}`}
                      fill
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                  {!hideText && text[i] && (
                    <p className="mt-3 text-center text-gray-800 text-xs md:text-sm font-medium truncate w-full">
                      {text[i]}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      {/* Navigation button */}
      {showNavigation && (
        <div
          className={`${nextBtnClass} absolute bg-white text-(--main) top-1/2 right-0 -translate-y-1/2 z-20 h-[36px] w-[36px] rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:bg-gray-50 transition`}
        >
          <GoChevronRight size={22} />
        </div>
      )}
    </div>
  );
}
