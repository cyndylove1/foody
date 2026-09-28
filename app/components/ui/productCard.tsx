"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Star,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import Quantity from "../quantitiy";
import Button from "../button";
import { useCart } from "../../context/cartContext";
import {
  WishlistContext,
  Product,
} from "../../context/wishlistContext";

interface ProductCardProps {
  id: string | number;
  name: string;
  imageSrc: string;
  currentPrice: number;
  index?: number;
  productType?: "retail" | "wholesale";
}

export default function ProductCard({
  id,
  name,
  imageSrc,
  currentPrice,
  index = 0,
  productType = "retail",
}: ProductCardProps) {
  const { addItem, updateQuantity } = useCart();

  const wishlistCtx = useContext(WishlistContext);

  if (!wishlistCtx) {
    throw new Error(
      "ProductCard must be used within a WishlistProvider"
    );
  }

  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
  } = wishlistCtx;

  const [quantity, setQuantity] = useState(1);

  const isFavorite = isInWishlist(id);

  const isWholesale = productType === "wholesale";

  /* ==========================================================
     QUANTITY
  ========================================================== */

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    if (typeof updateQuantity === "function") {
      updateQuantity(Number(id), newQuantity);
    }
  };

  /* ==========================================================
     ADD TO CART
  ========================================================== */

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem(Number(id), quantity);
  };

  /* ==========================================================
     WISHLIST
  ========================================================== */

  const handleToggleWishlist = async (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      await removeFromWishlist(id);
    } else {
      const productPayload: Product = {
        id,
        name,
        image_url: imageSrc,
        effective_price: currentPrice,
      };

      await addToWishlist(productPayload);
    }
  };

  return (
    <div className="group relative w-full">

      {/* ======================================================
          DECORATIVE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-3
          -top-3
          z-0
          h-14
          w-14
          rounded-full
          bg-[#F9C51C]/25
          blur-xl
          transition-all
          duration-500
          group-hover:bg-[#F9C51C]/40
        "
      />

      {/* ======================================================
          CARD
      ====================================================== */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[20px]
          border
          border-[#E5E9E6]
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.06)]
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:shadow-[0_18px_40px_rgba(0,134,74,0.14)]
        "
      >

        {/* ====================================================
            IMAGE SECTION
        ==================================================== */}

        <Link
          href={`/product/${id}`}
          className="
            relative
            block
            h-[205px]
            overflow-hidden
            bg-[#F5F5EF]
          "
        >

          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                25vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-[#F5F5EF]
                text-xs
                font-semibold
                text-[#52606D]
              "
            >
              No Image
            </div>
          )}

          {/* Soft light */}

          <div className="pointer-events-none absolute inset-0 bg-white/5" />

          {/* ==================================================
              RETAIL / WHOLESALE BADGE
          ================================================== */}

          <div className="absolute left-3 top-3">
            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/60
                bg-white
                px-3
                py-1.5
                shadow-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#00864A]" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.08em]
                  text-[#00864A]
                "
              >
                {isWholesale ? "Wholesale" : "Retail"}
              </span>
            </div>
          </div>

          {/* ==================================================
              NUMBER BADGE
          ================================================== */}

          <div
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#F9C51C]
              text-[11px]
              font-black
              text-[#151515]
              shadow-md
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* ==================================================
              WISHLIST BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={handleToggleWishlist}
            aria-label={
              isFavorite
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
            className={`
              absolute
              bottom-3
              right-3
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              shadow-md
              transition-all
              duration-300
              ${
                isFavorite
                  ? "bg-red-50 text-red-500"
                  : "bg-white text-[#52606D] hover:bg-[#EAF5EC] hover:text-[#00864A]"
              }
            `}
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? "fill-red-500" : ""
              }`}
            />
          </button>

          {/* ==================================================
              QUALITY TAG
          ================================================== */}

          <div className="absolute bottom-3 left-3">
            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                bg-white
                px-3
                py-1.5
                shadow-md
              "
            >
              <Star
                className="
                  h-3
                  w-3
                  fill-[#F9C51C]
                  text-[#F9C51C]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  text-[#151515]
                "
              >
                Quality Product
              </span>
            </div>
          </div>
        </Link>

        {/* ====================================================
            PRODUCT INFORMATION
        ==================================================== */}

        <div className="p-4">

          {/* ==================================================
              PRICE + STOCK
          ================================================== */}

          <div className="flex items-center justify-between gap-2">

            {/* PRICE */}

            <div
              className="
                rounded-full
                bg-[#FFF4D0]
                px-3
                py-1.5
              "
            >
              <span
                className="
                  text-sm
                  font-black
                  text-[#151515]
                "
              >
                {isNaN(Number(currentPrice))
                  ? currentPrice
                  : `$${Number(currentPrice).toFixed(2)}`}
              </span>
            </div>

            {/* STOCK */}

            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00864A]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  text-[#00864A]
                "
              >
                In stock
              </span>
            </div>
          </div>

          {/* ==================================================
              PRODUCT NAME
          ================================================== */}

          <Link href={`/product/${id}`}>
            <h3
              className="
                mt-3
                min-h-[42px]
                line-clamp-2
                text-[15px]
                font-black
                leading-[1.25]
                text-[#151515]
                transition-colors
                duration-300
                group-hover:text-[#00864A]
              "
            >
              {name}
            </h3>
          </Link>

          {/* ==================================================
              QUANTITY
          ================================================== */}

          <div className="mt-3 flex items-center justify-between">

            <span
              className="
                text-[11px]
                font-bold
                text-[#52606D]
              "
            >
              Quantity
            </span>

            <Quantity
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>


          {/* ==================================================
              ADD TO CART BUTTON
          ================================================== */}

          <Button
            variant="primary"
            className="
              mt-3
              w-full
              !rounded-xl
              !py-2.5
              text-xs
              font-bold
            "
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

        </div>
      </div>
    </div>
  );
}