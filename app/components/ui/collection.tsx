import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { Heart } from "lucide-react";
import { premiumCollectionData } from "@/app/constant";
import Title from "../title";

export default function Collection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white lg:px-12 md:px-6">
      <div>
        {/* Title */}
        <Title text=" Authentic African Kitchen Staples" className="items-center" />
        <p className="pt-6 pb-10 max-w-xl mx-auto text-base md:text-lg text-center text-gray-600 leading-relaxed">
          Bring the genuine taste of home to your kitchen. Explore our
          handpicked collection of premium pantry items, essential spices, and
          classic ingredients delivered fresh for your everyday cooking.
        </p>
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {premiumCollectionData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border border-gray-100 overflow-hidden p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link
              href={`/product/${item.id}`}
              className="relative w-full aspect-[4/3] rounded-2xl bg-[#f9f8f6] overflow-hidden mb-5 flex items-center justify-center group cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-stone-700 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs z-10">
                {item.category}
              </span>
            </Link>
            {/* Price and Heart Icon Row */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-extrabold tracking-tight text-stone-900">
                  ${item.price.toFixed(2)}
                </span>

                <button
                  type="button"
                  className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 bg-gray-50 transition-colors duration-200"
                  aria-label={`Add ${item.name} to favorites`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <Link href={`/product/${item.id}`}>
                <h3 className="text-xl font-bold text-stone-900 mb-2 tracking-tight line-clamp-1 hover:text-orange-600 transition-colors cursor-pointer">
                  {item.name}
                </h3>
              </Link>
              <p className="text-[13px] leading-relaxed text-stone-600 min-h-[56px] mb-6 line-clamp-3">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <Button variant="secondary">Add to Cart</Button>
                <Link href={`/product/${item.id}`} className="w-full">
                  <Button variant="primary" className="w-full">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Button variant="secondary">See More Collections</Button>
      </div>
    </div>
  );
}
