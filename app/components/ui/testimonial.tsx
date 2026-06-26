"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// @ts-ignore
import "swiper/css";

export default function Testimonial() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      text: "The gourmet soup bases are a lifesaver for busy weeknights! They taste exactly like they’ve been simmering all day long. Plus, bundling my grocery order with my favorite clean face oils saves me so much time.",
      name: "Olivia Thompson",
      title: "Verified Buyer & Home Cook",
      avatar: "https://i.pravatar.cc/150?u=olivia",
    },
    {
      text: "Finding one platform that delivers organic kitchen staples alongside high-quality, non-toxic skincare is amazing. The produce arrives incredibly crisp, and the botanical night creams have worked wonders for my skin.",
      name: "James Anderson",
      title: "Health & Wellness Blogger",
      avatar: "https://i.pravatar.cc/150?u=james",
    },
    {
      text: "As a professional chef, I'm picky about my ingredients. The dry herbs and artisanal pantry items here are top-tier. I decided to try their clean beauty line out of curiosity, and now I'm entirely hooked on both sections!",
      name: "Sophia Martinez",
      title: "Culinary Consultant",
      avatar: "https://i.pravatar.cc/150?u=sophia",
    },
    {
      text: "Their meal kits and ready-to-heat soups are packed with rich, authentic flavor. I also appreciate their sustainable grocery packaging and quick delivery. A perfect 10/10 for internal nutrition and external glow.",
      name: "Marcus Vane",
      title: "Loyal Monthly Subscriber",
      avatar: "https://i.pravatar.cc/150?u=marcus",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Background Graphic Overlay */}
      <div className="absolute left-[-5%] top-1/4 h-1/2 w-1/4 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M-100 0C-100 100 -50 200 100 300C250 400 300 500 300 600"
            stroke="currentColor"
            strokeWidth="80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="space-y-2 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              What Our Customers Say
            </h2>
            <div className="w-16 h-[3px] bg-(--main) rounded-full" />
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-(--main) hover:bg-[#d63f26] flex items-center justify-center text-white transition-all active:scale-95 disabled:opacity-50"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-(--main) hover:bg-[#d63f26]  flex items-center justify-center text-white transition-all active:scale-95 disabled:opacity-50"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          onInit={(swiper) => {
            // Link custom buttons to Swiper
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-900 flex flex-col justify-between h-[380px] border-[1px] border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#FFD700] text-[#FFD700]"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover bg-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
