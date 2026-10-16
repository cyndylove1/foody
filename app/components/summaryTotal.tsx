"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./button";
import { CartObject } from "../context/cartContext";

interface SummaryTotalsProps {
  cart?: CartObject;
}

export default function SummaryTotals({ cart }: SummaryTotalsProps) {
  const [coupon, setCoupon] = useState("");

  const subTotal = cart?.subtotal ?? 0;
  const tax = cart?.tax ?? 0;
  const total = cart?.total ?? 0;

  return (
    <div className="lg:col-span-4 space-y-6 bg-[#f9f9f9] border border-gray-200 p-4 rounded-xl">
      {/* Coupon Entry Card */}
     

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
 