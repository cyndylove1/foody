"use client";

import Image from "next/image";
import { LuShoppingBasket } from "react-icons/lu";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";
import Footer from "../components/ui/footer";
import Quantity from "../components/quantitiy";
import { Trash2 } from "lucide-react";
import SummaryTotals from "../components/summaryTotal";
import { useCart } from "../context/cartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, cartItems, isLoading, removeItem, updateQuantity } =
    useCart();

  return (
    <>
      <ShopNavbar />
      <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-[#fff1e1]/60 text-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Product Table */}
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
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="py-16 text-center text-gray-500">
                      Loading your cart...
                    </td>
                  </tr>
                ) : cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => {
                    const itemImage = item.product?.thumbnail || "/poundo.jpg";

                    return (
                      <tr
                        key={item.id}
                        className="border-b border-stone-200 align-middle"
                      >
                        {/* Product Image */}
                        <td className="p-4 border-r border-stone-200 text-center">
                          <div className="relative w-24 h-24 mx-auto bg-stone-100 border border-stone-200 overflow-hidden rounded-md">
                            {/* <Image
                              src={itemImage}
                              alt={item.product?.name ?? ""}
                              fill
                              className="object-cover"
                            /> */}
                          </div>
                        </td>

                        {/* Product Name */}
                        <td className="p-6 border-r border-stone-200 text-left">
                          <span className="text-stone-600 font-normal text-[15px]">
                            {item.product?.name}
                          </span>
                        </td>

                        {/* Quantity & Trash Button */}
                        <td className="p-4 border-r border-stone-200 text-center">
                          <div className="flex items-center justify-center gap-4">
                            <Quantity
                              className="w-full"
                              value={item.quantity}
                              onChange={(quantity) =>
                                updateQuantity(item.id, quantity)
                              }
                            />
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="bg-(--main) hover:bg-[#d63f26] text-white p-2 rounded transition-colors duration-150 cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5 stroke-[2.2]" />
                            </button>
                          </div>
                        </td>

                        {/* Total Price */}
                        <td className="p-6 text-right font-normal text-[15px] text-(--main)">
                          CAD {item.subtotal.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  /* Empty State Layout */
                  <tr>
                    <td colSpan={4} className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
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
            <Link href="/category/seasonings" className="mt-8">
              <Button variant="secondary">Continue Shopping</Button>
            </Link>
          </div>

          {/* Summary Total */}
          <SummaryTotals cart={cart} />
        </div>
      </div>
      <Footer />
    </>
  );
}
