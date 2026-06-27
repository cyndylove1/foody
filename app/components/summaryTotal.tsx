"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./button";

interface CartItem {
  id: string;
  imageSrc: string;
  name: string;
  quantity: number;
  price: number;
}

interface SummaryTotalsProps {
  cartItems: CartItem[];
}

export default function SummaryTotals({ cartItems }: SummaryTotalsProps) {
  const [coupon, setCoupon] = useState("");

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subTotal > 0 ? 0.7 : 0.0;
  const total = subTotal + tax;

  return (
    <div className="lg:col-span-4 space-y-6 bg-white p-4 rounded-xl">
      {/* Coupon Entry Card */}
      <div className="py-4 px-2 bg-white">
        <label htmlFor="coupon" className="block text-stone-600 text-sm mb-2.5">
          Enter your coupon here
        </label>
        <div className="flex gap-2">
          <input
            id="coupon"
            type="text"
            placeholder="Coupon Number"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="flex-1 border border-stone-300 px-3 py-2 text-sm text-stone-800 focus:outline-none placeholder-stone-300"
          />
          <Button variant="secondary" className="whitespace-nowrap">
            Apply Coupon
          </Button>
        </div>
      </div>

      {/* Checkout Totals Summary Box */}
      <div className="bg-[#fbfbfb] p-5 space-y-4">
        {/* Sub-total */}
        <div className="flex justify-between items-center text-sm font-bold text-stone-900">
          <span>SUB-TOTAL:</span>
          <span>CAD {subTotal.toFixed(2)}</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center text-sm font-bold text-stone-900">
          <span>TAX (VAT):</span>
          <span>CAD {tax.toFixed(2)}</span>
        </div>

        {/* Total Line */}
        <div className="flex justify-between items-center text-base font-bold text-(--main) border-t border-stone-200 pt-3">
          <span>TOTAL:</span>
          <span>CAD {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href="/checkout" className="block w-full">
        <Button variant="primary" className="w-full">
          Secure Checkout
        </Button>
      </Link>
    </div>
  );
}
