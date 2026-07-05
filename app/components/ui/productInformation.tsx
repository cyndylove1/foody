"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import StarRating from "../StarRating";
import Button from "../button";
import Quantity from "../quantitiy";
import Link from "next/link";

export default function ProductInformation() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "descriptions",
  );

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <>
      <div className="flex flex-col h-full justify-between space-y-6 pt-2">
        {/* Product Name */}
        <div className="space-y-2">
          <h1 className="md:text-4xl text-2xl font-semibold md:text-4xl tracking-tight text-[#111111] leading-[1.1] uppercase">
            Scotch Bonnet Pepper
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Fresh Scotch Bonnet Pepper
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 py-1">
          <span className="text-2xl font-black text-[#111111] tracking-tight">
            $150
          </span>
        </div>
        {/* Quantity*/}
        <div>
          <span className="text-xs font-bold text-[#111111] block pb-4">
            Quantity
          </span>
          <Quantity/>
        </div>

        {/* Social Rating */}
        <div className="flex items-center gap-2 text-xs font-semibold ">
          <StarRating value={4} readOnly />
          <span>(4.8)</span>
          <span className="text-gray-300">|</span>
          <span>1.2K Reviews</span>
          <span className="text-gray-300">|</span>
          <span>1,000 Sold</span>
        </div>

        {/* Product details*/}
        <div className="w-full space-y-3 pt-2">
          {/* description */}
          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden transition-all shadow-2xs">
            <button
              onClick={() => toggleAccordion("descriptions")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Descriptions</span>
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
              {/* Inner element must have min-h-0 for the grid wrapper track calculation to slide smoothly */}
              <div className="min-h-0">
                <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed">
                  Fresh Scotch Bonnet Pepper with a bold, fiery heat and rich
                  fruity flavor. Perfect for soups, stews, sauces, marinades,
                  and a variety of traditional dishes.
                </div>
              </div>
            </div>
          </div>
          {/* specification */}
          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-2xs">
            <button
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
              {/* Inner element must have min-h-0 for the grid wrapper track calculation to slide smoothly */}
              <div className="min-h-0">
                <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed border-t border-gray-50">
                  Product Type: Fresh Pepper <br />
                  Variety: Scotch <br />
                  Bonnet Color: Red, Orange, or Yellow <br />
                  Taste: Hot and Fruity <br />
                  Form: Whole Fresh Pepper <br />
                  Origin: Locally Sourced
                </div>
              </div>
            </div>
          </div>
          {/* features */}
          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-2xs transition-all">
            <button
              onClick={() => toggleAccordion("feature")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Feature</span>
              <div className="text-gray-500 transition-all duration-300">
                {activeAccordion === "feature" ? (
                  <IoChevronUpOutline className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <IoChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out overflow-hidden border-t ${
                activeAccordion === "feature"
                  ? "grid-rows-[1fr] opacity-100 border-gray-50"
                  : "grid-rows-[0fr] opacity-0 border-transparent"
              }`}
            >
              {/* Inner element must have min-h-0 for the grid wrapper track calculation to slide smoothly */}
              <div className="min-h-0">
                <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed border-t border-gray-50">
                  Naturally fresh and flavorful <br />
                  Adds intense heat to meals <br /> Rich in vitamins and
                  antioxidants <br /> Ideal for cooking, blending, and seasoning{" "}
                  <br />
                  Suitable for African and Caribbean recipes <br /> Carefully
                  selected for quality and freshness
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BUTTON  */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full">
          <Button variant="secondary" className="w-full">
            Add To Cart
          </Button>

          <Link href="/checkout" className="w-full">
            <Button variant="primary" className="w-full">
              Checkout Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
