"use client";

import { useState, useContext } from "react";
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";
import StarRating from "../StarRating";
import Button from "../button";
import Quantity from "../quantitiy";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext"; // Adjust path to your cart context

interface ProductInformationProps {
  product: any;
  isLoading: boolean;
}

export default function ProductInformation({
  product,
  isLoading,
}: ProductInformationProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "descriptions",
  );
  const [localQuantity, setLocalQuantity] = useState<number>(1);

  // Hook up your global cart state update tools
  const cartContext = useContext(CartContext);

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // State loading placeholders
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 animate-pulse pt-2">
        <div className="h-8 bg-gray-200 w-3/4 rounded-sm" />
        <div className="h-4 bg-gray-200 w-1/4 rounded-sm" />
        <div className="h-10 bg-gray-200 w-1/3 rounded-sm" />
      </div>
    );
  }

  if (!product) {
    return <p className="text-gray-500">Product details missing.</p>;
  }

  // Formatting variables based on your explicit api structure
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(product.effective_price || product.price || 0));

  const handleAddToCart = () => {
    if (!cartContext) return;

    // Pass along localQuantity selections directly to your context mutations
    // Ensure both item entry mappings are bundled
    cartContext.addToCart({
      ...product,
      id: product.id,
      product_id: product.id,
      quantity: localQuantity,
    });
  };

  return (
    <>
      <div className="flex flex-col h-full justify-between space-y-6 pt-2">
        {/* Product Name */}
        <div className="space-y-2">
          <h1 className="md:text-4xl text-2xl font-semibold tracking-tight text-[#111111] leading-[1.1] uppercase">
            {product.name}
          </h1>
          <p className="text-gray-400 text-[15px]">{product.slug}</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 py-1">
          <span className="text-2xl font-black text-[#111111] tracking-tight">
            {formattedPrice}
          </span>
        </div>
        {product.sku && (
          <p className="text-sm font-medium text-[#111111]">
            <span className="text-gray-400">Sku:</span> {product.sku}
          </p>
        )}

        {/* Dynamic Quantity Picker Selection */}
        <div>
          <span className="text-xs font-bold text-[#111111] block pb-4">
            Quantity
          </span>
          <Quantity value={localQuantity} onChange={setLocalQuantity} />
        </div>

        {/* Social Rating */}
        <div className="flex items-center gap-2 text-xs font-semibold ">
          <StarRating value={Number(product.average_rating) || 5} readOnly />
          <span>({product.average_rating || "5.0"})</span>
          <span className="text-gray-300">|</span>
          <span>{product.reviews_count || 0} Reviews</span>
          <span className="text-gray-300">|</span>
          <span>
            {product.stock ? `${product.stock} In Stock` : "Out of Stock"}
          </span>
        </div>

        {/* Accordions */}
        <div className="w-full space-y-3 pt-2">
          {/* Descriptions */}
          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden transition-all shadow-2xs">
            <button
              type="button"
              onClick={() => toggleAccordion("descriptions")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Description</span>
              <div className="text-gray-500 transition-all duration-300">
                {activeAccordion === "descriptions" ? (
                  <IoChevronUpOutline className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <IoChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out overflow-hidden border-t ${
                activeAccordion === "descriptions"
                  ? "grid-rows-[1fr] opacity-100 border-gray-50"
                  : "grid-rows-[0fr] opacity-0 border-transparent"
              }`}
            >
              <div className="min-h-0">
                <div className="px-5 pb-5 py-2 text-xs text-gray-500 font-medium leading-relaxed whitespace-pre-line">
                  {product.description ||
                    product.short_description ||
                    "No description provided."}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.dimensions && (
            <div className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => toggleAccordion("specification")}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
              >
                <span>Specification</span>
                <div className="text-gray-500 transition-all duration-300">
                  {activeAccordion === "specification" ? (
                    <IoChevronUpOutline className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <IoChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden border-t ${
                  activeAccordion === "specification"
                    ? "grid-rows-[1fr] opacity-100 border-gray-50"
                    : "grid-rows-[0fr] opacity-0 border-transparent"
                }`}
              >
                <div className="min-h-0">
                  <div className="px-5 pb-5 py-2 text-xs text-gray-500 font-medium leading-relaxed border-t border-gray-50">
                    Length: {product.dimensions.length} cm <br />
                    Width: {product.dimensions.width} cm <br />
                    Height: {product.dimensions.height} cm <br />
                    Weight: {product.weight || "N/A"} kg
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full">
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.in_stock}
          >
            {product.in_stock ? "Add To Cart" : "Out of Stock"}
          </Button>

          <Link href="/checkout" className="w-full">
            <Button
              variant="primary"
              className="w-full"
              disabled={!product.in_stock}
            >
              Checkout Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
