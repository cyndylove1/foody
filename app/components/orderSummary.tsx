"use client";
import { HelpCircle, Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";

interface OrderSummaryProps {
  shippingMethod: "free" | "express";
}

export default function OrderSummary({ shippingMethod }: OrderSummaryProps) {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14">
      <div className="max-w-md mx-auto lg:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
          Your Cart
        </h2>

        {/* Cart Items List Wrapper */}
        <div className="space-y-4 mb-6">
          {/* Product Item 1: Puffed Jacket */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 bg-white border border-gray-100 rounded-[8px] overflow-hidden shrink-0">
                <Image
                  src="/assets/maggi.jpg"
                  alt="Men Top Black Puffed Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">
                  Men Top Black Puffed Jacket
                </h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  Men's Black
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-900 shrink-0">
              $999.00
            </span>
          </div>

          {/* Product Item 2: Women Jacket */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 border border-gray-100 rounded-[8px] overflow-hidden shrink-0">
                <Image
                  src="/assets/bonnet.jpg"
                  alt="pepper"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">
                  Women Jacket
                </h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  Women top
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-900 shrink-0">
              $1200.00
            </span>
          </div>
        </div>

        {/* Discount Code Input Box Wrapper */}
        <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-[10px] items-center mb-6">
          <div className="flex items-center gap-2 pl-2 text-gray-400 flex-1">
            <Tag size={16} className="rotate-90 stroke-[2]" />
            <input
              type="text"
              placeholder="Discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full h-9 bg-transparent text-sm focus:outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          <button
            type="button"
            className="px-4 py-2 text-sm font-bold bg-white text-gray-900 rounded-[8px] border border-transparent hover:bg-gray-50 transition-all cursor-pointer"
          >
            Apply
          </button>
        </div>

        {/* Price Fee Breakdowns Layout */}
        <div className="border-b border-gray-300 pb-4 mb-4 space-y-3 text-sm">
          <div className="flex justify-between items-center text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold text-gray-900">$2199.00</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Shipping</span>
            <span className="font-bold text-gray-900">
              {shippingMethod === "free" ? "$0" : "$9"}
            </span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span className="flex items-center gap-1.5">
              Estimated taxes{" "}
              <HelpCircle size={14} className="text-gray-400 stroke-[2.5]" />
            </span>
            <span className="font-bold text-gray-900">$5.00</span>
          </div>
        </div>

        {/* Dynamic Grand Total Section */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-base font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            ${shippingMethod === "free" ? "2204.00" : "2213.00"}
          </span>
        </div>

        {/* Checkout Button */}
        <Button variant="primary" className="w-full">
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}
