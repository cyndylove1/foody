"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CustomSwiper from "../customSwiper";

const WholeSaleBanner: NextPage = () => {
  const slides = [
    {
      img: "/assets/icefish.jpg",
      title: "Authentic African Ingredients",
      subtitle:
        "Shop premium dried fish, seafood, spices, and pantry essentials for your favorite African dishes.",
    },
    {
      img: "/assets/stockfish.png",
      title: "Fresh & Traditional Flavors",
      subtitle:
        "Find quality stockfish, smoked fish, crayfish, palm oil, and more—all in one place.",
    },
    {
      img: "/assets/beef.png",
      title: "Everything You Need to Cook African Meals",
      subtitle:
        "From fresh meats and vegetables to grains, seasonings, and local delicacies, we've got your kitchen covered.",
    },
  ];
  const slides2 = [
    {
      img: "/assets/banner4.png", // Recommended image: Fresh yams, plantains, or peppers
      title: "Authentic African Foodstuff",
      subtitle:
        "Yams, plantains, fresh peppers, and local produce delivered fresh.",
    },
    {
      img: "/assets/banner5.png", // Recommended image: Grains, cassava flour, garri, or palm oil
      title: "Pantry Staples & Grains",
      subtitle: "Quality Garri, Egusi, Ogbono, Crayfish, and premium Rice.",
    },
    {
      img: "/assets/foodstuff.jpg", // Recommended image: Bulk sacks of rice, beans, or pepper mix
      title: "Wholesale & Bulk Deals",
      subtitle:
        "Save more when you stock up for your home, events, or restaurant.",
    },
  ];
  return (
    <>
      <div className="py-8 px-4 md:px-6 lg:px-8 flex items-center border-b border-gray-300 justify-center ">
        <div className="flex gap-4 max-w-[1200px] w-full">
          {/* Left Vertical Banner */}
          <div className="w-[300px] aspect-[2/3] hidden md:flex rounded-lg overflow-hidden relative shadow-2xl flex-shrink-0 group">
            <div className="w-full h-full">
              <CustomSwiper
                showNavigation={true}
                showPagination={false}
                autoplay={true}
                autoplayDelay={10000}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                  >
                    {/* 1. Background Image */}
                    <img
                      src={slide.img}
                      alt={slide.title || "Wholesale Banner"}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* 2. Dark Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/40 z-10" />

                    {/* 3. Text & Badge Overlay Layered On Top of Swiper Image */}
                    <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                      {/* Top Badge */}
                      <div className="flex items-center justify-between">
                        <span className="bg-red-700/80 text-orange-100 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                          WHOLESALE
                        </span>
                      </div>

                      {/* Bottom Content Area */}
                      <div>
                        <h2 className="text-[30px] leading-[1.1] font-bold text-white mb-3 drop-shadow-md">
                          {slide.title}
                        </h2>

                        <p className="text-gray-200 text-sm uppercase tracking-wider mb-2 font-medium">
                          UP TO{" "}
                          <span className="text-(--color) font-extrabold text-xl mx-1.5 drop-shadow">
                            40%
                          </span>{" "}
                          OFF
                        </p>

                        <div className="w-full h-px bg-white/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </CustomSwiper>
            </div>
          </div>

          {/* Right Horizontal Banner (iPhone 15 Pro Max) */}
          <div className="w-full h-[500px] sm:h-[600px] md:h-auto md:aspect-[2/1] rounded-lg overflow-hidden relative shadow-2xl flex items-center group">
            <div className="w-full h-full">
              <CustomSwiper
                showNavigation={false}
                showPagination={false}
                autoplay={true}
                autoplayDelay={4000}
              >
                {slides2.map((slide, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full rounded-3xl overflow-hidden"
                  >
                    {/* 1. Background Image (w-full h-full object-cover) */}
                    <img
                      src={slide.img}
                      alt={slide.title || "iPhone 15 Pro Max"}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* 2. Dark Gradient Overlay for optimal contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />

                    {/* 3. Main Hero Content (Best Seller Tag, Title, Subtitle, CTA) */}
                    <div className="relative z-20 flex flex-col h-full justify-center p-4 sm:p-12 w-full md:w-2/3 lg:w-1/2">
                      <span className="inline-block bg-(--main) text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 self-start backdrop-blur-md border border-blue-500/20 shadow-sm">
                        Best Seller
                      </span>

                      <h1 className="text-3xl sm:text-5xl lg:text-[60px] leading-[0.95] font-black text-white mb-6 drop-shadow-md">
                        {slide.title || (
                          <>
                            iPhone
                            <br />
                            15 Pro Max
                          </>
                        )}
                      </h1>

                      <p className="text-blue-100/90 text-sm sm:text-lg mb-8 sm:mb-12 max-w-[320px] font-medium drop-shadow">
                        {slide.subtitle}
                      </p>

                      {/* <button className="flex items-center gap-3 bg-white text-black font-semibold pl-6 pr-3 py-3 rounded-full self-start hover:bg-gray-100 transition-all shadow-lg group-button">
                        Shop Now
                        <span className="p-2.5 bg-orange-600 text-white rounded-full transition-colors group-button-hover:bg-orange-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </button> */}
                    </div>

                    {/* 4. Golden Medal/Seal with Price (Positioned top-right over the image) */}
                    <div className="absolute top-[8%] right-[8%] z-20 flex flex-col items-center">
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                        {/* Outer Spiky Gold Seal */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-500 rounded-full z-1 shadow-xl flex items-center justify-center p-1.5"
                          style={{
                            filter: "drop-shadow(0px 8px 10px rgba(0,0,0,0.4))",
                          }}
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-200 blur-[2px]" />

                          <div className="absolute inset-[3px] bg-red-950 rounded-full z-2 p-3 flex flex-col items-center justify-center text-center text-yellow-300 shadow-inner border border-yellow-300">
                            <span className="text-[9px] font-medium leading-tight">
                              FROM
                            </span>
                            <div className="flex items-start text-red-50 mb-px">
                              <span className="text-[16px] sm:text-[20px] font-extrabold -mt-1 tracking-tight">
                                $
                              </span>
                              <span className="text-[26px] sm:text-[34px] leading-none font-extrabold tracking-tighter">
                                1,199
                              </span>
                            </div>
                            <span className="text-[10px] font-bold leading-none tracking-wider">
                              ONLY
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CustomSwiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WholeSaleBanner;
