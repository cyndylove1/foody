"use client";

import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "@/app/hooks/useWishList";
import { useCart } from "@/app/context/cartContext";
import Title from "@/app/components/title";
import Button from "@/app/components/button";
import ShopNavbar from "../components/ui/shopNavbar";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, isLoading } = useWishlist();
  const { addItem } = useCart();

  return (
    <>
      {/* Wrapper to elevate Navbar z-index above card stacking contexts */}
      <div className="">
        <ShopNavbar />
      </div>

      {isLoading ? (
        <div className="flex justify-center bg-white items-center py-20">
          <p className="text-lg text-gray-500">Loading your wishlist...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-12 lg:px-12 md:px-6">
          <Title text="My Wishlist" className="items-center" />

          {wishlist.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <Heart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-stone-600 text-lg mb-6">
                Your wishlist is currently empty.
              </p>
              <Link href="/category/seasonings">
                <Button variant="primary">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col border border-gray-100 overflow-hidden p-4 rounded-2xl bg-white shadow-sm relative z-0"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-xs text-stone-400 hover:text-red-500 rounded-full transition-colors shadow-xs"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#f9f8f6] overflow-hidden mb-5 flex items-center justify-center">
                    <img
                      src={item.image_url || item.images?.[0] || "/poundo.jpg"}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-extrabold tracking-tight text-stone-900 mb-4">
                      ${Number(item.effective_price || 0).toFixed(2)}
                    </span>

                    <div className="mt-auto flex gap-3">
                      <Button
                        variant="primary"
                        onClick={() => addItem(Number(item.id))}
                        className="flex-1 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
