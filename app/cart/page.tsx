"use client";

import Image from "next/image";
import { LuShoppingBasket } from "react-icons/lu";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";
import Footer from "../components/ui/footer";
import Quantity from "../components/quantitiy";
import { Trash2, ArrowLeft } from "lucide-react";
import SummaryTotals from "../components/summaryTotal";
import { useCart } from "../context/cartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const {
    cart,
    cartItems,
    isLoading,
    isUpdating,
    isRemoving,
    removeItem,
    updateQuantity,
  } = useCart();
  const router = useRouter();

  return (
    <>
      <ShopNavbar />
      <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white text-stone-800">
        {/* Back Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-stone-600 hover:text-[var(--main)] font-medium text-sm transition-colors duration-150 cursor-pointer"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to previous page</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Product Table */}
          <div className="lg:col-span-8 overflow-x-auto">
            <table className="w-full border-collapse border border-stone-200 min-w-[600px]">
              <thead>
                <tr className="bg-[#f9f9f9] text-stone-700 text-sm tracking-wide border-b border-stone-200">
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
                    const itemImage =
                      item.product?.thumbnail ||
                      (item.product as any)?.image_url ||
                      "/poundo.jpg";

                    const unitPrice = Number(
                      item.price ??
                        item.product?.effective_price ??
                        item.product?.price ??
                        0,
                    );

                    const subtotal = Number(
                      item.subtotal ?? unitPrice * item.quantity,
                    );

                    return (
                      <tr
                        key={item.id}
                        className="border-b border-stone-200 align-middle"
                      >
                        {/* Product Image */}
                        <td className="p-4 border-r border-stone-200 text-center">
                          <div className="relative w-24 h-24 mx-auto bg-stone-100 border border-stone-200 overflow-hidden rounded-md">
                            <img
                              src={itemImage}
                              alt={item.product?.name ?? "Product image"}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </td>

                        {/* Product Name & Unit Price */}
                        <td className="p-6 border-r border-stone-200 text-left">
                          <span className="text-stone-800 font-semibold text-[15px] block mb-1">
                            {item.product?.name}
                          </span>
                          <span className="text-xs text-stone-500">
                            Price: {unitPrice.toFixed(2)} $
                          </span>
                        </td>

                        {/* Quantity & Trash Button */}
                        <td className="p-4 border-r border-stone-200 text-center">
                          <div className="flex items-center justify-center gap-3">
                            
                            <Quantity
                              className="w-full"
                              value={item.quantity}
                              disabled={isUpdating || isRemoving}
                              onChange={(newQty) =>
                                updateQuantity(item.id, newQty)
                              }
                            />
                            <button
                              type="button"
                              disabled={isRemoving || isUpdating}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeItem(item.id);
                              }}
                              className="bg-[var(--main)] hover:bg-[#d63f26] text-white p-2.5 rounded transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4 stroke-[2.2]" />
                            </button>
                          </div>
                        </td>

                        {/* Total Price */}
                        <td className="p-6 text-right font-bold text-[15px] text-[var(--main)]">
                          {subtotal.toFixed(2)} $
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  /* Empty State */
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

            {/* Continue Shopping */}
            <div className="py-10">
              <Link href="/category/utensils">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </div>
          </div>

          {/* Summary Total */}
          <SummaryTotals cart={cart} />
        </div>
      </div>
      <Footer />
    </>
  );
}
