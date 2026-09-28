"use client";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "../button";
import { useProducts } from "@/app/hooks/useCollection";
import { useCart } from "../../context/cartContext";
import StarRating from "../StarRating";
import { useWishlist } from "@/app/hooks/useWishList";

export default function Category() {
  // ================================
  // FETCH PRODUCTS
  // ================================

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts();

  const { addItem } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  // ================================
  // NORMALIZE PRODUCTS
  // ================================

  const products =
    data?.pages.flatMap((page: any) => {
      if (Array.isArray(page?.data?.data)) {
        return page.data.data;
      }

      if (Array.isArray(page?.data)) {
        return page.data;
      }

      if (Array.isArray(page)) {
        return page;
      }

      return [];
    }) || [];

  return (
    <section className="relative w-full overflow-hidden bg-[#FFF9E8] py-16 md:py-20 lg:py-24  select-none">

      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      {/* Yellow glow - top left */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl pointer-events-none" />

      {/* Green glow - top right */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-[#00864A]/10 blur-3xl pointer-events-none" />

      {/* Yellow glow - middle left */}
      <div className="absolute top-[35%] -left-20 w-48 h-48 rounded-full bg-[#F9C51C]/15 blur-2xl pointer-events-none" />

      {/* Green glow - bottom left */}
      <div className="absolute bottom-40 left-10 w-28 h-28 rounded-full bg-[#00864A]/10 blur-xl pointer-events-none" />

      {/* Orange glow */}
      <div className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-[#F47C20]/5 blur-3xl pointer-events-none" />

      {/* Decorative yellow circle */}
      <div className="absolute top-16 right-[38%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F9C51C]/20 pointer-events-none" />

      {/* Decorative green circle */}
      <div className="absolute top-0 right-[-90px] w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-[24px] border-[#00864A]/5 pointer-events-none" />

      


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-12">


        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">

          {/* Explore Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00864A]/10 text-[#00864A] text-xs md:text-sm font-extrabold uppercase tracking-wide mb-5">

            <span className="w-2.5 h-2.5 rounded-full bg-[#F9C51C]" />

            Explore Our Store

          </div>


          {/* Main Heading */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-[#151515]">

            Authentic African

            <br />

            <span className="text-[#00864A]">
              Kitchen Staples
            </span>

          </h2>


          {/* Yellow underline */}

          <div className="relative mt-5 h-4 w-36 mx-auto">
                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/60" />
                </div>


          {/* Description */}

          <p className="mt-5 text-sm md:text-base lg:text-lg text-[#5B6470] leading-7 md:leading-8 max-w-2xl mx-auto">

            Bring the genuine taste of home to your kitchen. Explore our
            handpicked category of premium pantry items, essential spices,
            and classic ingredients delivered fresh for your everyday cooking.

          </p>

        </div>


        {/* =========================================================
            LOADING
        ========================================================= */}

        {isLoading ? (

          <div className="flex justify-center items-center py-24">

            <div className="flex flex-col items-center gap-4">

              <div className="w-10 h-10 border-4 border-[#00864A]/20 border-t-[#00864A] rounded-full animate-spin" />

              <p className="text-sm md:text-base text-[#667085] font-medium">
                Loading products...
              </p>

            </div>

          </div>

        ) : isError ? (

          /* =======================================================
             ERROR
          ======================================================= */

          <div className="flex justify-center items-center py-24">

            <div className="bg-white rounded-2xl shadow-sm border border-red-100 px-6 py-5 text-center">

              <p className="text-red-500 font-medium">
                {(error as Error).message}
              </p>

            </div>

          </div>

        ) : (

          <>


            {/* =====================================================
                PRODUCTS GRID
            ===================================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">

              {products.map((item: any, index: number) => {

                // Product URL
                const productType = item.type
                  ? `?type=${item.type}`
                  : "";

                const productUrl =
                  `/product/${item.id}${productType}`;


                // Category URL
                const categorySlug =
                  item.category?.slug;

                const categoryUrl =
                  categorySlug
                    ? `/category/${categorySlug}`
                    : "#";


                // Wishlist state
                const isFavorite =
                  isInWishlist(item.id);


                // Wishlist toggle
                const toggleWishlist = (
                  product: any
                ) => {

                  if (isFavorite) {

                    removeFromWishlist(product.id);

                  } else {

                    addToWishlist(product);

                  }

                };


                // Different badge colors
                const badgeColors = [
                  "bg-[#00864A] text-white",
                  "bg-[#F9C51C] text-[#151515]",
                  "bg-[#00864A] text-white",
                  "bg-[#F47C20] text-white",
                  "bg-[#00864A] text-white",
                  "bg-[#F9C51C] text-[#151515]",
                ];


                return (

                  <div
                    key={item.id}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      overflow-hidden
                      rounded-[22px]
                      bg-[#FFFDF5]
                      border
                      border-white
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      hover:-translate-y-1
                      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-500
                    "
                  >


                    {/* =================================================
                        PRODUCT IMAGE
                    ================================================= */}

                    <div className="
                      relative
                      w-full
                      aspect-[4/3]
                      overflow-hidden
                      bg-[#F4F1E8]
                    ">

                      <Link
                        href={productUrl}
                        className="absolute inset-0"
                      >

                        <img
                          src={
                            item.image_url ||
                            item.images?.[0] ||
                            "/assets/poundo.jpg"
                          }
                          alt={item.name}
                          className="
                            object-cover
                            w-full
                            h-full
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-105
                          "
                        />

                      </Link>


                      {/* =============================================
                          IMAGE SOFT OVERLAY
                      ============================================= */}

                      <div className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-16
                        bg-gradient-to-t
                        from-black/10
                        to-transparent
                        pointer-events-none
                      " />


                      {/* =============================================
                          CATEGORY BADGE
                      ============================================= */}

                      {item.category?.name && (

                        <Link
                          href={categoryUrl}
                          className={`
                            absolute
                            top-3
                            left-3
                            z-10
                            inline-flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            rounded-full
                            text-[10px]
                            md:text-[11px]
                            font-extrabold
                            uppercase
                            tracking-wide
                            shadow-md
                            transition-all
                            duration-300
                            hover:scale-105
                            ${badgeColors[index % badgeColors.length]}
                          `}
                        >

                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />

                          {item.category.name}

                        </Link>

                      )}


                      {/* =============================================
                          WISHLIST BUTTON
                      ============================================= */}

                      <button
                        onClick={() =>
                          toggleWishlist(item)
                        }
                        className={`
                          absolute
                          top-3
                          right-3
                          z-20
                          w-9
                          h-9
                          rounded-full
                          flex
                          items-center
                          justify-center
                          bg-white/95
                          backdrop-blur-sm
                          shadow-md
                          transition-all
                          duration-300
                          hover:scale-110
                          ${
                            isFavorite
                              ? "text-red-500"
                              : "text-[#3D4650]"
                          }
                        `}
                        aria-label="Wishlist toggle"
                      >

                        <Heart
                          className={`
                            w-4.5
                            h-4.5
                            ${
                              isFavorite
                                ? "fill-red-500"
                                : ""
                            }
                          `}
                        />

                      </button>

                    </div>


                    {/* =================================================
                        PRODUCT INFORMATION
                    ================================================= */}

                    <div className="
                      relative
                      flex
                      flex-col
                      flex-1
                      px-4
                      pt-3
                      pb-4
                      md:px-5
                      md:pt-3
                      md:pb-5
                    ">


                      {/* =============================================
                          RATING
                      ============================================= */}

                      <div className="flex items-center gap-2 mb-1">

                        <div className="flex items-center gap-0.5">

                          <StarRating />

                        </div>

                        <span className="text-[11px] text-[#667085] font-medium">
                          ({item.rating || "4.8"})
                        </span>

                      </div>


                      {/* =============================================
                          PRODUCT NAME
                      ============================================= */}

                      <Link href={productUrl}>

                        <h3 className="
                          text-base
                          md:text-[17px]
                          font-extrabold
                          text-[#00864A]
                          leading-tight
                          mb-1.5
                          line-clamp-1
                          hover:text-[#006F3D]
                          transition-colors
                        ">

                          {item.name}

                        </h3>

                      </Link>


                      {/* =============================================
                          DESCRIPTION
                      ============================================= */}

                      <p className="
                        text-[11px]
                        md:text-xs
                        leading-5
                        text-[#667085]
                        line-clamp-2
                        min-h-[40px]
                        max-w-[85%]
                      ">

                        {item.short_description ||
                          "Quality African products selected for your everyday needs."}

                      </p>


                      {/* =============================================
                          PRICE + ADD TO CART
                      ============================================= */}

                      <div className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        mt-3
                      ">


                        {/* Price */}

                        <span className="
                          text-lg
                          md:text-xl
                          font-extrabold
                          tracking-tight
                          text-[#151515]
                        ">

                          $
                          {Number(
                            item.effective_price ||
                            item.price ||
                            0
                          ).toFixed(2)}

                        </span>


                        {/* Add To Cart */}

                        <Button
                          variant="primary"
                          onClick={() =>
                            addItem(item.id)
                          }
                          className="
                            !w-auto
                            !px-4
                            !py-2.5
                            rounded-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-xs
                            font-bold
                            whitespace-nowrap
                            bg-[#00864A]
                            hover:bg-[#006F3D]
                            shadow-md
                            shadow-[#00864A]/15
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                          "
                        >

                          <ShoppingCart size={15} />

                          <span>
                            Add to Cart
                          </span>

                        </Button>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>


            {/* =====================================================
                EMPTY PRODUCTS
            ===================================================== */}

            {products.length === 0 && (

              <div className="flex justify-center py-20">

                <div className="
                  bg-white
                  rounded-3xl
                  border
                  border-[#00864A]/10
                  shadow-sm
                  px-8
                  py-10
                  text-center
                ">

                  <p className="
                    text-lg
                    font-semibold
                    text-[#151515]
                  ">

                    No products available yet.

                  </p>

                  <p className="
                    mt-2
                    text-sm
                    text-[#667085]
                  ">

                    Please check back soon.

                  </p>

                </div>

              </div>

            )}


            {/* =====================================================
                BOTTOM FEATURES PILL
            ===================================================== */}

            <div className="
              flex
              justify-center
              mt-10
              md:mt-12
            ">

              <div className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                px-6
                md:px-8
                py-3
                rounded-full
                bg-white/90
                backdrop-blur-md
                border
                border-[#00864A]/10
                shadow-[0_8px_25px_rgba(0,0,0,0.07)]
              ">


                {/* Authentic */}

                <div className="flex items-center gap-2">

                  <span className="
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-[#00864A]
                  " />

                  <span className="
                    text-[10px]
                    md:text-xs
                    font-semibold
                    text-[#4B5563]
                  ">

                    Authentic African Products

                  </span>

                </div>


                {/* Quality */}

                <div className="flex items-center gap-2">

                  <span className="
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-[#F9C51C]
                  " />

                  <span className="
                    text-[10px]
                    md:text-xs
                    font-semibold
                    text-[#4B5563]
                  ">

                    Quality Guaranteed

                  </span>

                </div>


                {/* Delivery */}

                <div className="flex items-center gap-2">

                  <span className="
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-[#F47C20]
                  " />

                  <span className="
                    text-[10px]
                    md:text-xs
                    font-semibold
                    text-[#4B5563]
                  ">

                    Fast Delivery

                  </span>

                </div>

              </div>

            </div>


            {/* =====================================================
                LOAD MORE
            ===================================================== */}

            <div className="
              flex
              justify-center
              mt-10
              md:mt-12
            ">

              {hasNextPage ? (

                <Button
                  variant="secondary"
                  onClick={() =>
                    fetchNextPage()
                  }
                  disabled={
                    isFetchingNextPage
                  }
                  className="
                    group
                    rounded-full
                    border-2
                    border-[#00864A]
                    bg-white
                    text-[#00864A]
                    font-bold
                    hover:bg-[#00864A]
                    hover:text-white
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >

                  {isFetchingNextPage
                    ? "Loading..."
                    : "See More Collections"}

                  {!isFetchingNextPage && (
                    <span className="
                      ml-2
                      inline-block
                      transition-transform
                      duration-300
                      group-hover:translate-y-1
                    ">
                      ↓
                    </span>
                  )}

                </Button>

              ) : (
    
              <Button
                    variant="secondary"
                    disabled
                    className="
                      rounded-full
                      opacity-60
                    "
                  >

                    No More Products

              </Button>
               

              )}

            </div>

          </>

        )}

      </div>

{/* BOTTOM YELLOW ACCENT */}
      {/* ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

    </section>
  );
}