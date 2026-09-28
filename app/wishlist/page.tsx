"use client";

import Link from "next/link";
import {
  Trash2,
  ShoppingCart,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { useWishlist } from "@/app/hooks/useWishList";
import { useCart } from "@/app/context/cartContext";
import Title from "@/app/components/title";
import Button from "@/app/components/button";
import ShopNavbar from "../components/ui/shopNavbar";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, isLoading } = useWishlist();
  const { addItem } = useCart();

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">
      {/* ==========================================================
          BACKGROUND DECORATIONS
      ========================================================== */}

      {/* Yellow glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F9C51C]/20
          blur-3xl
        "
      />

      {/* Green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[22%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#00864A]/12
          blur-3xl
        "
      />

      {/* Orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-140px]
          left-[25%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#F47C20]/15
          blur-3xl
        "
      />

      {/* Small yellow decoration */}
      <div
        className="
          pointer-events-none
          absolute
          right-[17%]
          top-[18%]
          hidden
          h-16
          w-16
          rotate-12
          rounded-[30%]
          bg-[#F9C51C]/30
          lg:block
        "
      />

      {/* Green ring */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[4%]
          hidden
          h-28
          w-28
          rounded-full
          border-[16px]
          border-[#00864A]/10
          lg:block
        "
      />

      {/* Orange circle */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[12%]
          right-[8%]
          hidden
          h-20
          w-20
          rounded-full
          bg-[#F47C20]/10
          lg:block
        "
      />

      {/* Large green ring */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-70px]
          top-[40%]
          hidden
          h-44
          w-44
          rounded-full
          border-[20px]
          border-[#00864A]/5
          lg:block
        "
      />

      {/* ==========================================================
          NAVBAR
      ========================================================== */}

      <div className="relative z-50">
        <ShopNavbar />
      </div>

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          pb-20
          pt-[10rem]
          sm:px-6
          md:pt-42
          md:px-8
          lg:px-12
          lg:pb-28
          lg:pt-42
        "
      >
        {/* ========================================================
            PAGE HEADER
        ======================================================== */}

        <div
          className="
            relative
            mb-10
            overflow-hidden
            rounded-[36px]
            border
            border-[#00864A]/10
            bg-white
            px-6
            py-10
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            sm:px-10
            sm:py-12
          "
        >
          {/* Header decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#F9C51C]/20
              blur-2xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-10
              h-36
              w-36
              rounded-full
              bg-[#00864A]/10
              blur-2xl
            "
          />

          <div className="relative z-10 text-center">
            {/* Badge */}

            <div
              className="
                mx-auto
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#00864A]/10
                bg-[#EAF5EC]
                px-4
                py-2
                text-sm
                font-bold
                text-[#00864A]
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F9C51C]
                "
              >
                <Heart className="h-3.5 w-3.5 fill-[#00864A] text-[#00864A]" />
              </span>

              <span>Your Saved Products</span>
            </div>

            {/* Title */}

            <div className="flex justify-center">
              <Title
                text="My Wishlist"
                className="items-center"
              />
            </div>

            {/* Yellow underline */}

            <div className="relative mx-auto mt-3 h-4 w-40">
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-2
                  w-32
                  rounded-full
                  bg-[#F9C51C]
                "
              />

              <div
                className="
                  absolute
                  left-12
                  top-3
                  h-1
                  w-20
                  rounded-full
                  bg-[#F9C51C]/50
                "
              />
            </div>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#52606D]
                sm:text-base
              "
            >
              Keep your favorite African groceries close and add
              them to your basket whenever you're ready.
            </p>

            {/* Wishlist count */}

            {!isLoading && wishlist.length > 0 && (
              <div
                className="
                  mx-auto
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#FFF4D0]
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.08em]
                  text-[#151515]
                "
              >
                <Sparkles className="h-3.5 w-3.5 text-[#F47C20]" />

                {wishlist.length}{" "}
                {wishlist.length === 1
                  ? "Saved Item"
                  : "Saved Items"}
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            LOADING
        ======================================================== */}

        {isLoading ? (
          <div
            className="
              flex
              min-h-[350px]
              items-center
              justify-center
              rounded-[32px]
              border
              border-[#00864A]/10
              bg-white
              shadow-[0_15px_45px_rgba(0,0,0,0.05)]
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF5EC]
                "
              >
                <Heart
                  className="
                    h-6
                    w-6
                    animate-pulse
                    text-[#00864A]
                  "
                />
              </div>

              <p className="text-lg font-bold text-[#151515]">
                Loading your wishlist...
              </p>

              <p className="mt-1 text-sm text-[#52606D]">
                Getting your saved products ready.
              </p>
            </div>
          </div>
        ) : wishlist.length === 0 ? (
          /* ======================================================
             EMPTY WISHLIST
          ====================================================== */

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#00864A]/10
              bg-white
              px-6
              py-16
              text-center
              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              sm:py-20
            "
          >
            {/* Decorative circles */}

            <div
              className="
                pointer-events-none
                absolute
                -left-10
                top-10
                h-28
                w-28
                rounded-full
                bg-[#F9C51C]/15
                blur-2xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                bottom-10
                h-32
                w-32
                rounded-full
                bg-[#F47C20]/10
                blur-2xl
              "
            />

            <div className="relative z-10 flex flex-col items-center">
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F9C51C]/40
                  bg-[#FFF4D0]
                "
              >
                <Heart
                  className="
                    h-10
                    w-10
                    text-[#F47C20]
                  "
                />
              </div>

              <h2
                className="
                  mt-7
                  text-2xl
                  font-black
                  tracking-tight
                  text-[#151515]
                  sm:text-3xl
                "
              >
                Your Wishlist Is Empty
              </h2>

              <p
                className="
                  mt-3
                  max-w-md
                  text-sm
                  leading-7
                  text-[#52606D]
                  sm:text-base
                "
              >
                You haven't saved any products yet. Explore our
                fresh African groceries and save the ones you love.
              </p>

              <Link
                href="/category/seasonings"
                className="mt-7"
              >
                <Button
                  variant="primary"
                  className="
                    !rounded-2xl
                    !px-7
                    !font-bold
                  "
                >
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* ======================================================
             WISHLIST PRODUCTS
          ====================================================== */

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {wishlist.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
              >
                {/* Decorative glow */}

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

                {/* Product Card */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
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
                  {/* ==================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-[220px]
                      overflow-hidden
                      bg-[#F5F5EF]
                    "
                  >
                    <img
                      src={
                        item.image_url ||
                        item.images?.[0] ||
                        "/assets/poundo.jpg"
                      }
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Soft image light */}

                    <div className="pointer-events-none absolute inset-0 bg-white/5" />

                    {/* Wishlist badge */}

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
                        <Heart
                          className="
                            h-3
                            w-3
                            fill-[#00864A]
                            text-[#00864A]
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.08em]
                            text-[#00864A]
                          "
                        >
                          Wishlist
                        </span>
                      </div>
                    </div>

                    {/* Number */}

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

                    {/* Remove */}

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(item.id)}
                      className="
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
                        bg-white
                        text-[#52606D]
                        shadow-md
                        transition-all
                        duration-300
                        hover:bg-red-50
                        hover:text-red-500
                      "
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* ==================================================
                      PRODUCT INFORMATION
                  ================================================== */}

                  <div className="flex flex-1 flex-col p-4">

                    {/* Price */}

                    <div className="flex items-center justify-between gap-2">
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
                          $
                          {Number(
                            item.effective_price || 0
                          ).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#00864A]" />

                        <span
                          className="
                            text-[10px]
                            font-bold
                            text-[#00864A]
                          "
                        >
                          Saved
                        </span>
                      </div>
                    </div>

                    {/* Name */}

                    <Link href={`/product/${item.id}`}>
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
                        {item.name}
                      </h3>
                    </Link>

                    {/* Shop CTA */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        bg-[#F4FAF6]
                        px-3
                        py-2.5
                      "
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                          "
                        >
                          <ShoppingCart
                            className="
                              h-4
                              w-4
                              text-[#00864A]
                            "
                          />
                        </div>

                        <span
                          className="
                            text-[11px]
                            font-black
                            text-[#00864A]
                          "
                        >
                          Add to cart
                        </span>
                      </div>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[#00864A]
                          text-white
                          transition-all
                          duration-300
                          group-hover:bg-[#F9C51C]
                          group-hover:text-[#151515]
                        "
                      >
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Add to Cart */}

                    <Button
                      variant="primary"
                      onClick={() =>
                        addItem(Number(item.id))
                      }
                      className="
                        mt-3
                        w-full
                        !rounded-xl
                        !py-2.5
                        text-xs
                        font-bold
                      "
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart size={16} />
                        Add to Cart
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ==========================================================
          BOTTOM ACCENT
      ========================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-2
          bg-[#F9C51C]
        "
      />
    </main>
  );
}