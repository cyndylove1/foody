"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../button";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
};

const retailProducts: Product[] = [
  {
    id: 1,
    name: "Peak Milk",
    image: "/assets/peak2.jpg",
    price: "₦2,000",
  },
  {
    id: 2,
    name: "Local Pot",
    image: "/assets/localpot.jpg",
    price: "₦1,300",
  },
  {
    id: 3,
    name: "Tin Tomatoes",
    image: "/assets/rica.jpg",
    price: "₦3,500",
  },
  {
    id: 4,
    name: "Checker Custard",
    image: "/assets/checker.webp",
    price: "₦2,500",
  },
];

const wholesaleProducts: Product[] = [
  {
    id: 1,
    name: "Peak Milk (Carton)",
    image: "/assets/peakmilk.webp",
    price: "₦48,000",
  },
  {
    id: 2,
    name: "Indomie Noodles (Carton)",
    image: "/assets/indomie.webp",
    price: "₦32,000",
  },
  {
    id: 3,
    name: "Satchet Tomatoes (Carton)",
    image: "/assets/gino.webp",
    price: "₦58,000",
  },
  {
    id: 4,
    name: "Dudu-Osun black Soap (Carton)",
    image: "/assets/dudu.webp",
    price: "₦250,000",
  },
];

export default function RetailWholesale() {
  const [type, setType] = useState<"retail" | "wholesale">("retail");

  const router = useRouter();
  const products = type === "retail" ? retailProducts : wholesaleProducts;
  const handleViewProduct = () => {
    if (type === "retail") {
      router.push("/retail");
    } else {
      router.push("/wholesale");
    }
  };
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#016738] text-white text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shop Your Way </span>
          </div>
          <h2 className="mt-6 md:text-4xl text-2xl font-bold text-gray-900">
            Buy in Retail or Wholesale
          </h2>

          <p className="mt-5 md:text-lg text-sm text-gray-600">
            Whether you're shopping for your home or buying in bulk for your
            business, MotherLand International Foods, we've got you covered. Switch between Retail and Wholesale
            to explore products tailored to your needs.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="flex rounded-full bg-white p-1 border border-gray-300">
            <button
              onClick={() => setType("retail")}
              className={`rounded-full md:px-8 py-2 px-4 md:py-3 text-sm font-semibold transition-all duration-300 ${
                type === "retail"
                  ? "bg-(--main) text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Retail Shopping
            </button>

            <button
              onClick={() => setType("wholesale")}
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 ${
                type === "wholesale"
                  ? "bg-(--main) text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Wholesale Shopping
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="md:mt-10 mt-14 md:p-8 py-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex rounded-full bg-(--main) px-3 py-1 text-xs font-semibold text-white">
                {type === "retail"
                  ? "For Individuals & Families"
                  : "For Businesses & Resellers"}
              </span>

              <h3 className="mt-4 md:text-3xl text-2xl font-bold text-gray-900">
                {type === "retail"
                  ? "Everything You Need for Daily Living"
                  : "Bulk Shopping Made Easy"}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {type === "retail"
                  ? "Browse a wide range of quality groceries, fresh produce, household essentials, beverages, spices, and everyday food items. Buy only what you need and enjoy competitive prices, quick delivery, and a hassle-free shopping experience."
                  : "Purchase products in larger quantities at discounted wholesale prices. Perfect for supermarkets, restaurants, food vendors, caterers, hotels, and retailers looking to maximize profit while reducing purchasing costs."}
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-(--main)">
                    {type === "retail" ? "1+" : "10+"}
                  </h4>

                  <p className="mt-2 font-medium">
                    {type === "retail"
                      ? "Minimum Quantity"
                      : "Bulk Order Quantity"}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {type === "retail"
                      ? "Purchase individual items without quantity restrictions."
                      : "Buy cartons, bags, and large packs at wholesale rates."}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-(--main)">
                    {type === "retail" ? "Fast" : "Save More"}
                  </h4>

                  <p className="mt-2 font-medium">
                    {type === "retail" ? "Quick Delivery" : "Lower Unit Cost"}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {type === "retail"
                      ? "Get your groceries delivered quickly to your doorstep."
                      : "The more you buy, the more you save on every product."}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-300 bg-white p-5">
                  <h4 className="text-3xl font-bold text-(--main)">
                    {type === "retail" ? "500+" : "1000+"}
                  </h4>

                  <p className="mt-2 font-medium">Products Available</p>

                  <p className="mt-1 text-sm text-gray-500">
                    {type === "retail"
                      ? "Fresh foods, pantry staples, beverages, snacks, and household essentials."
                      : "Wholesale groceries, beverages, cooking ingredients, and packaged foods."}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-(--main)">
                    {type === "retail" ? "100%" : "Best Deals"}
                  </h4>

                  <p className="mt-2 font-medium">
                    {type === "retail" ? "Fresh Products" : "Wholesale Pricing"}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {type === "retail"
                      ? "Quality products sourced from trusted suppliers."
                      : "Enjoy exclusive pricing designed for businesses and resellers."}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                  {type === "retail" ? "Daily Essentials" : "Bulk Discounts"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                  {type === "retail" ? "Fresh Groceries" : "Business Orders"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                  {type === "retail" ? "Doorstep Delivery" : "Reliable Supply"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                  {type === "retail"
                    ? "Affordable Prices"
                    : "Better Profit Margins"}
                </span>
              </div>
            </div>

            {/* Products */}

            <div className="grid md:grid-cols-2 gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl bg-gray-100 p-4 hover:-translate-y-1 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-36 w-full rounded-xl object-cover"
                  />

                  <h4 className="mt-4 font-semibold">{product.name}</h4>

                  <p className="my-2 text-(--main) font-bold">
                    {product.price}
                  </p>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleViewProduct}
                  >
                    View Product
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
