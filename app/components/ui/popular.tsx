import CustomSwiper from "@/app/components/customSwiper";

export default function Popular() {
  const categories = [
    { name: "Peak Milk", image: "/assets/peak.webp" },
    { name: "Custard", image: "/assets/custard.webp" },
    { name: "Noodles", image: "/assets/noodles.webp" },
    { name: "Peanut", image: "/assets/peanut.webp" },
    { name: "Periwinkle", image: "/assets/periwinkle.webp" },
    { name: "Puff", image: "/assets/puff.webp" },
    { name: "Spices", image: "/assets/spices.webp" },
  ];

  const categoryImages = categories.map((c) => c.image);
  const categoryNames = categories.map((c) => c.name);

  return (
    <section className="w-full py-6 mt-14 px-4 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Explore Popular Categories
        </h2>
      </div>

      {/* Popular Categories Swiper */}
      <CustomSwiper
        images={categoryImages}
        text={categoryNames}
        width="150px"
        height="150px"
        rounded="rounded-full"
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
        showNavigation={true}
        loop={false}
      />
    </section>
  );
}
