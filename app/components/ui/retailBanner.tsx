import Image from "next/image";
import CustomSwiper from "../customSwiper";
import strawberry from "@/public/assets/strawberry.jpg";
import grocery from "@/public/assets/grocery7.jpg";

export default function RetailBanner() {
  const slides = [
    {
      img: "/assets/grocery2.jpg",
      title: "Fresh Organic Produce",
      subtitle: "Sourced directly from certified local farms daily.",
    },
    {
      img: "/assets/grocery4.jpg",
      title: "Eat Fresh. Live Better",
      subtitle:
        "Stock up on premium groceries, healthy foods, and everyday essentials with ease",
    },
    {
      img: "/assets/grocery6.jpg",
      title: "Freshness You Can Trust",
      subtitle:
        "Discover quality groceries at affordable prices with fast and convenient delivery",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl pt-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden shadow-md min-h-[400px] lg:min-h-full flex flex-col justify-between">
            <div className="w-full h-full">
              <CustomSwiper
                showNavigation={true}
                showPagination={true}
                autoplay={true}
                autoplayDelay={4000}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                  >
                    {/* Background Image */}
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="object-cover h-full"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

                    {/* Custom Content Layered On Top */}
                    <div className="absolute bottom-6 left-6 z-20 text-white flex flex-col gap-2">
                      <h2 className="text-2xl font-bold">{slide.title}</h2>
                      <p className="text-sm text-gray-200">{slide.subtitle}</p>
                      {/* <button className="mt-2 w-fit bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                                    Shop Now
                                  </button> */}
                    </div>
                  </div>
                ))}
              </CustomSwiper>
            </div>
          </div>
          {/* Left Column: Stacked Cards (Fresh & Natural) */}
          <div className="lg:col-span-5 flex flex-col gap-4 hidden lg:flex">
            {/* Top Card: Fresh Food */}
            <div className="relative h-48 sm:h-48 rounded-lg overflow-hidden shadow-md group">
              <Image
                src={strawberry}
                alt="Fresh Food Bowl"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-end p-6">
                <div className="text-right pt-10">
                  <div className="flex items-center justify-between">
                    <span className="bg-white text-(--main) text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                      FRESH FOODS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Natural Food */}
            <div className="relative h-48 sm:h-48 rounded-lg overflow-hidden shadow-md bg-white">
              <Image
                src={grocery}
                alt="Fresh Food Bowl"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6">
                <div className="text-white pt-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-(--main) text-white text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                      NATURAL FOODS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
