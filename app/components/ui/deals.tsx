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
    title: "Dry Dates",
    image: "/assets/dates.webp",
    rating: 4.5,
    reviewCount: "1.2k",
    price: "999.99",
    currency: "USD",
  },
  {
    id: 2,
    title: "Diabetic Rice",
    image: "/assets/diabetic.webp",
    rating: 3.5,
    reviewCount: "569",
    price: "45.00",
    currency: "USD",
  },
  {
    id: 3,
    title: "Draft Game",
    image: "/assets/draft.webp",
    rating: 4.0,
    reviewCount: "100",
    price: "32.00",
    originalPrice: "48.00",
    currency: "USD",
  },
  {
    id: 4,
    title: "Dudu Osun Black Soap",
    image: "/assets/dudu.webp",
    rating: 4.8,
    reviewCount: "1.1k",
    price: "299.00",
    currency: "USD",
  },
  {
    id: 5,
    title: "Feet Scrub",
    image: "/assets/scrub.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 6,
    title: "Semovita",
    image: "/assets/semovita.webp",
    rating: 4.5,
    reviewCount: "1.2k",
    price: "999.99",
    currency: "USD",
  },
  {
    id: 7,
    title: "Sorghum Powder",
    image: "/assets/sorghum.webp",
    rating: 3.5,
    reviewCount: "569",
    price: "45.00",
    currency: "USD",
  },
  {
    id: 8,
    title: "Scent Leaf Seed",
    image: "/assets/sent.webp",
    rating: 4.0,
    reviewCount: "100",
    price: "32.00",
    originalPrice: "48.00",
    currency: "USD",
  },
  {
    id: 9,
    title: "Soup Thickner",
    image: "/assets/thickner.webp",
    rating: 4.8,
    reviewCount: "1.1k",
    price: "299.00",
    currency: "USD",
  },
  {
    id: 10,
    title: "Grounded Ogbono",
    image: "/assets/ogbono.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 11,
    title: "Grounded Egusi",
    image: "/assets/egusi.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 12,
    title: "Nutmeg Powder",
    image: "/assets/Nutmeg.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 13,
    title: "Nzu",
    image: "/assets/Nzu.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 14,
    title: "Okpei Soup Spice",
    image: "/assets/okpei.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 15,
    title: "Okra Seed",
    image: "/assets/okra.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 16,
    title: "Onga Shrimp Crevette",
    image: "/assets/onga.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 17,
    title: "Orijin Bitters",
    image: "/assets/orijin.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 18,
    title: "Ovaltine ",
    image: "/assets/ovaltine.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 19,
    title: "Palm Nectar ",
    image: "/assets/palm.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 20,
    title: "Peak Milk Powder ",
    image: "/assets/peakmilk.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 21,
    title: "Pestle",
    image: "/assets/pestle.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "105",
    currency: "USD",
  },
  {
    id: 22,
    title: "Plaintain Flour",
    image: "/assets/flour.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 23,
    title: "Food Warmer",
    image: "/assets/foodwarmer.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 24,
    title: "Ginger Spices",
    image: "/assets/gingers.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 25,
    title: "Gino Peppe & Onion Tomato",
    image: "/assets/gino.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 26,
    title: "Golden Morn",
    image: "/assets/goldenmorn.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 27,
    title: "Grinding Stone",
    image: "/assets/stone.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 28,
    title:"Hand Broom",
    image: "/assets/handbroom.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 29,
    title: "Honey Beans",
    image: "/assets/beans.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 30,
    title: "Mortar",
    image: "/assets/mortar.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 31,
    title: "Tom Tom",
    image: "/assets/tom.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
  },
  {
    id: 32,
    title: "Matchet",
    image: "/assets/matchet.webp",
    rating: 3.5,
    reviewCount: "157",
    price: "190",
    currency: "USD",
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
