import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface CategoryCardProps {
  title: string;
  itemCount: string;
  image: string;
  tag?: string;
}

const categories: CategoryCardProps[] = [
  {
    title: "African Fry Pan",
    itemCount: "120+ Items",
    image: "/assets/frypan.jpg",
    tag: "Utensils",
  },
  {
    title: "Aluminum Pot",
    itemCount: "350+ Items",
    image: "/assets/pot.jpg",
  },
  {
    title: "Palm Kernel oil",
    itemCount: "85+ Items",
    image: "/assets/kerneloil.webp",
  },
  {
    title: "Kuli Kuli",
    itemCount: "Up to 50% Off",
    image: "/assets/kuli.webp",
    // tag: "Seasoning",
  },
  {
    title: "Thai Hom Jasmine Rice",
    itemCount: "Up to 50% Off",
    image: "/assets/jasmine.webp",
    tag: "Grains",
  },
  {
    title: "Checker Custard",
    itemCount: "Up to 50% Off",
    image: "/assets/checkers.webp",
    // tag: "Seasoning",
  },
  {
    title: "Ground Crayfish",
    itemCount: "Up to 50% Off",
    image: "/assets/crayfish.webp",
    // tag: "Seasoning",
  },
  {
    title: "De Rica Tomato",
    itemCount: "Up to 50% Off",
    image: "/assets/derice.webp",
    // tag: "Seasoning",
  },
  {
    title: "Ukwa",
    itemCount: "Up to 50% Off",
    image: "/assets/ukwa.webp",
    // tag: "Seasoning",
  },
  {
    title: "Dried Asa Fish",
    itemCount: "Up to 50% Off",
    image: "/assets/dried.webp",
    // tag: "Seasoning",
  },

];

export const RetailSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = 320;
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      {/* Header with Title and Arrow Navigation */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#016738] text-white text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retail Collection</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Explore Our Retail Stores
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-xl">
            Shop directly from our latest stock with instant delivery, exclusive
            retail guarantees, and zero minimum order quantities.
          </p>
        </div>
        <div className="flex items-center gap-3 hidden md:flex">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category Cards Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 pt-10 overflow-x-auto scrollbar-none scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="group relative h-80 w-[250px] sm:w-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
          >
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity group-hover:opacity-90" />

            {/* Optional Tag */}
            {category.tag && (
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                {category.tag}
              </span>
            )}

            {/* Card Content */}
            <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
              <span className="text-xs font-medium text-indigo-200 tracking-wider uppercase">
                {category.itemCount}
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                {category.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mt-3 group-hover:text-white">
                <span>Shop now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailSection;
