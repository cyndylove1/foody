"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DivideSquareIcon, Trash2 } from "lucide-react";
import { LuShoppingBasket } from "react-icons/lu";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";
import Footer from "../components/ui/footer";
import Quantity from "../components/quantitiy";
import Link from "next/link";

interface CartItem {
  id: string;
  imageSrc: string;
  name: string;
  quantity: number;
  price: number;
}

export default function Cart() {
  // Mocking the data seen in cart.PNG
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      imageSrc: "/assets/bonnet.jpg", // Replace with your image asset path
      name: "Natural African Bathing Sponge",
      quantity: 1,
      price: 4.99,
    },
  ]);

  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id: string, value: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, value) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subTotal > 0 ? 0.7 : 0.0; // Fixed tax matching image example
  const total = subTotal + tax;

  return (
    <>
      <ShopNavbar />
      <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-[#fff1e1]/60 ] text-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Side: Product Table / List */}
          <div className="lg:col-span-8 overflow-x-auto">
            <table className="w-full border-collapse border border-stone-200 min-w-[600px]">
              <thead>
                <tr className="bg-[#f5f5f5] text-stone-700 text-sm tracking-wide border-b border-stone-200">
                  <th className="py-3 px-4 text-center font-medium border-r border-stone-200 w-32">
                    PRODUCT
                  </th>
                  <th className="py-3 px-6 text-left font-medium border-r border-stone-200">
                    NAME
                  </th>
                  <th className="py-3 px-4 text-center font-medium border-r border-stone-200 w-40">
                    QUANTITY
                  </th>
                  <th className="py-3 px-6 text-right font-medium w-32">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-stone-200 align-middle"
                    >
                      {/* Product Image */}
                      <td className="p-4 border-r border-stone-200 text-center">
                        <div className="relative w-24 h-24 mx-auto bg-stone-100 border border-stone-200 overflow-hidden rounded-md">
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>

                      {/* Product Name */}
                      <td className="p-6 border-r border-stone-200 text-left">
                        <span className="text-stone-400 font-normal text-[15px]">
                          {item.name}
                        </span>
                      </td>

                      {/* Quantity Selector & Trash Button */}
                      <td className="p-4 border-r border-stone-200 text-center">
                        <div className="flex items-center justify-center gap-4 space-x-2">
                          <Quantity className="w-full" />
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="bg-(--main) hover:bg-[#d63f26c] text-white p-2 rounded transition-colors duration-150"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5 stroke-[2.2]" />
                          </button>
                        </div>
                      </td>

                      {/* Total Price */}
                      <td className="p-6 text-right font-normal text-[15px] text-(--main)">
                        CAD {item.price.toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  /* Clean, centered empty state container mapping across the full table width */
                  <tr>
                    <td colSpan={4} className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        {/* Increased basket icon scale */}
                        <LuShoppingBasket className="w-24 h-24 text-stone-300 stroke-[1.5]" />
                        <h2 className="text-gray-500 font-medium text-lg tracking-wide">
                          Your cart is empty.
                        </h2>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Continue Shopping Button */}
            <div className="mt-8">
              <Button variant="secondary">Continue Shopping</Button>
            </div>
          </div>

          {/* Right Side: Coupon & Summary Totals Sidebar */}
          <div className="lg:col-span-4 space-y-6 bg-white p-4 rounded-md">
            {/* Coupon Entry Card */}
            <div className="border border-stone-200 p-5 bg-white">
              <label
                htmlFor="coupon"
                className="block text-stone-600 text-sm mb-2.5"
              >
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
                <Button variant="secondary" className="w-full">
                  Apply Coupon
                </Button>
              </div>
            </div>

            {/* Checkout Totals Summary Box */}
            <div className="border border-stone-200 bg-[#fbfbfb] p-5 space-y-4">
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

            {/* Secure Checkout Button */}
            <Link href="/checkout">
              <Button variant="primary" className="w-full">
                Secure Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
