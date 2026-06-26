"use client";

import { useState } from "react";
import StarRating from "../StarRating";
import Button from "../button";
import Quantity from "../quantitiy";
import Link from "next/link";

interface ColorSwatch {
  id: string;
  className: string;
  label: string;
}

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
        {/* Header Typography Context */}
        <div className="space-y-2">
          <h1 className="md:text-4xl text-2xl font-semibold md:text-4xl tracking-tight text-[#111111] leading-[1.1] uppercase">
            Scotch Bonnet Pepper
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Fresh Scotch Bonnet Pepper
          </p>
        </div>

        {/* Pricing & Badges Block */}
        <div className="flex items-center gap-3 py-1">
          <span className="text-2xl font-black text-[#111111] tracking-tight">
            $150
          </span>
        </div>
        {/* --- NEW QUANTITY SELECTOR BLOCK --- */}
        <div>
          <span className="text-xs font-bold text-[#111111] block pb-4">
            Quantity
          </span>
          <Quantity />
        </div>

        {/* Social Proof metrics row */}
        <div className="flex items-center gap-2 text-xs font-semibold ">
          <StarRating value={4} readOnly />
          <span>(4.8)</span>
          <span className="text-gray-300">|</span>
          <span>1.2K Reviews</span>
          <span className="text-gray-300">|</span>
          <span>1,000 Sold</span>
        </div>

        {/* Accordion Specification Panels */}
        <div className="w-full space-y-3 pt-2">
          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden transition-all shadow-2xs">
            <button
              onClick={() => toggleAccordion("descriptions")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Descriptions</span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                  activeAccordion === "descriptions" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {activeAccordion === "descriptions" && (
              <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed border-t border-gray-50">
                Fresh Scotch Bonnet Pepper with a bold, fiery heat and rich
                fruity flavor. Perfect for soups, stews, sauces, marinades, and
                a variety of traditional dishes.
              </div>
            )}
          </div>

          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-2xs">
            <button
              onClick={() => toggleAccordion("specification")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Specification</span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                  activeAccordion === "specification" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeAccordion === "specification" && (
              <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed border-t border-gray-50">
                Product Type: Fresh Pepper <br />
                Variety: Scotch <br />
                Bonnet Color: Red, Orange, or Yellow <br />
                Taste: Hot and Fruity <br />
                Form: Whole Fresh Pepper <br />
                Origin: Locally Sourced
              </div>
            )}
          </div>

          <div className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-2xs">
            <button
              onClick={() => toggleAccordion("feature")}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#111111]"
            >
              <span>Feature</span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                  activeAccordion === "feature" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeAccordion === "feature" && (
              <div className="px-5 pb-5 py-2 text-xs text-gray-400 font-medium leading-relaxed border-t border-gray-50">
                Naturally fresh and flavorful <br />
                Adds intense heat to meals <br /> Rich in vitamins and
                antioxidants <br /> Ideal for cooking, blending, and seasoning{" "}
                <br />
                Suitable for African and Caribbean recipes <br /> Carefully
                selected for quality and freshness
              </div>
            )}
          </div>
        </div>

        {/* TRANSACTION FOOTER BUTTON TRACK */}
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
