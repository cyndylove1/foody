import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import Button from "../button";
import StarRating from "../StarRating";

interface Product {
  id: number;
  title: string;
  image: string;
  rating: number; // 1 to 5
  reviewCount: string;
  price: string;
  originalPrice?: string;
  currency: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Hisbcus Flower",
    image: "/assets/zobo.png",
    rating: 4.5,
    reviewCount: "1.2k",
    price: "999.99",
    currency: "AED",
  },
  {
    id: 2,
    title: "Stockfish",
    image: "/assets/stockfish.png",
    rating: 3.5,
    reviewCount: "569",
    price: "45.00",
    currency: "AED",
  },
  {
    id: 3,
    title: "Spinach",
    image: "/assets/spinach.png",
    rating: 4.0,
    reviewCount: "100",
    price: "32.00",
    originalPrice: "48.00",
    currency: "AED",
  },
  {
    id: 4,
    title: "Smoked Fish",
    image: "/assets/smokedfish.jpg",
    rating: 4.8,
    reviewCount: "1.1k",
    price: "299.00",
    currency: "AED",
  },
  {
    id: 5,
    title: "Poundo Yam",
    image: "/assets/poundo.jpg",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "AED",
  },
  {
    id: 6,
    title: "Melon",
    image: "/assets/melon.jpg",
    rating: 4.5,
    reviewCount: "1.2k",
    price: "999.99",
    currency: "AED",
  },
  {
    id: 7,
    title: "Cow Skin",
    image: "/assets/pomo.jpg",
    rating: 3.5,
    reviewCount: "569",
    price: "45.00",
    currency: "AED",
  },
  {
    id: 8,
    title: "Onions",
    image: "/assets/onions.png",
    rating: 4.0,
    reviewCount: "100",
    price: "32.00",
    originalPrice: "48.00",
    currency: "AED",
  },
  {
    id: 9,
    title: "Openyi",
    image: "/assets/openyi.png",
    rating: 4.8,
    reviewCount: "1.1k",
    price: "299.00",
    currency: "AED",
  },
  {
    id: 10,
    title: "Ogbono",
    image: "/assets/ogbono.png",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "AED",
  },
];



export default function Deals() {
  return (
    <section className="max-w-7xl lg:px-8 md:px-6 mx-auto px-4 py-8 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-4xl text-2xl font-bold text-slate-900 tracking-tight">
          Todays Best Deals For You!
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex border border-gray-300 p-4 rounded-lg flex-col group cursor-pointer">
            {/* Image Box */}
            <div className="relative bg-[#f2f4f8] rounded-xl w-full h-52 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:-translate-y-1">
              {/* Wishlist Heart Icon Button */}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Content Box */}
            <div className="flex flex-col flex-1 justify-between px-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-slate-800 line-clamp-2 leading-relaxed">
                  {product.title}
                </h3>
                <button className="p-2 rounded-full text-gray-400 hover:text-(--main) hover:bg-(--main)/10 bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              {/* Title */}

              {/* Rating */}
              <div className="flex justify-between items-center">
                {" "}
                <div className="flex items-center gap-1 mb-2">
                  <StarRating />
                  <span className="text-[11px] text-slate-400 font-normal">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mt-auto">
                <span className="text-sm font-bold text-slate-900">
                  {product.price}
                </span>
                <span className="text-[10px] font-bold text-slate-900">
                  {product.currency}
                </span>

                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through ml-1">
                    {product.originalPrice}{" "}
                    <span className="text-[9px]">{product.currency}</span>
                  </span>
                )}
              </div>
              <div className="mt-6">
                <Button
                  variant="primary"
                  className="flex w-full items-center justify-center gap-3"
                >
                  <span>
                    <ShoppingCart size={20} />
                  </span>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
