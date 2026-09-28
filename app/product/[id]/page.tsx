"use client";

import { useState, use } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Truck,
  ArrowDown,
  PackageCheck,
} from "lucide-react";

import ShopNavbar from "@/app/components/ui/shopNavbar";
import ProductInformation from "@/app/components/ui/productInformation";
import BreadCrumbs from "@/app/components/breadCrumbs";
import { useSingleProduct } from "@/app/hooks/useSingleProuduct";
import { useSingleWholesaleOrRetail } from "@/app/hooks/useWholesale";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: PageProps) {
  const { id } = use(params);

  const searchParams = useSearchParams();

  const productType = searchParams.get("type") as
    | "retail"
    | "wholesale"
    | null;

  /* ==========================================================
     PRODUCT QUERIES
  ========================================================== */

  const defaultSingleQuery = useSingleProduct(id);

  const typeSingleQuery = useSingleWholesaleOrRetail(
    id,
    productType ?? undefined
  );

  const isTypeBased =
    productType === "retail" ||
    productType === "wholesale";

  const activeQuery = isTypeBased
    ? typeSingleQuery
    : defaultSingleQuery;

  const { isLoading, isError, error } = activeQuery;

  const product = isTypeBased
    ? typeSingleQuery.data
    : defaultSingleQuery.data?.data;

  /* ==========================================================
     IMAGE STATE
  ========================================================== */

  const [selectedImage, setSelectedImage] =
    useState<string>("");

  const mainDefaultImage =
    product?.image_url ||
    product?.image ||
    product?.thumbnail ||
    product?.gallery?.[0] ||
    "/assets/poundo.jpg";

  const galleryImages: string[] = Array.from(
    new Set(
      [
        product?.image_url,
        product?.image,
        product?.thumbnail,
        ...(product?.gallery || []),
      ].filter(Boolean)
    )
  );

  const displayThumbnails =
    galleryImages.length > 0
      ? galleryImages
      : ["/assets/poundo.jpg"];

  const currentMainImage =
    selectedImage || mainDefaultImage;

  /* ==========================================================
     BREADCRUMBS
  ========================================================== */

  const productLinks = [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Products",
    //   href: "/category/utensils",
    // },
    {
      label:
        product?.name ||
        product?.title ||
        "Product",
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">

      {/* ======================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Yellow glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
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
          -right-44
          top-[20%]
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
          bottom-[-160px]
          left-[28%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#F47C20]/15
          blur-3xl
        "
      />

      {/* Yellow shape */}

      <div
        className="
          pointer-events-none
          absolute
          right-[16%]
          top-[15%]
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
          right-[7%]
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
          top-[45%]
          hidden
          h-44
          w-44
          rounded-full
          border-[20px]
          border-[#00864A]/5
          lg:block
        "
      />

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-50">
        <ShopNavbar />
      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          pb-20
          pt-28
          md:px-10
          sm:pt-32
          lg:pb-28
          lg:pt-36
        "
      >

        {/* ====================================================
            BREADCRUMBS
        ==================================================== */}

        <div
          className="
            mb-6
            overflow-hidden
            rounded-2xl
            border
            border-[#00864A]/10
            bg-white/90
            px-4
            py-3
            shadow-sm
            backdrop-blur-sm
            sm:px-5
          "
        >
          <BreadCrumbs
            items={productLinks}
            className="!mx-0"
          />
        </div>

        {/* ====================================================
            PRODUCT HEADER BADGE
        ==================================================== */}

        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#00864A]/10
              bg-[#EAF5EC]
              px-4
              py-2
              text-xs
              font-black
              uppercase
              tracking-[0.08em]
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
              <Sparkles
                className="
                  h-3.5
                  w-3.5
                  text-[#00864A]
                "
              />
            </span>

            {productType === "wholesale"
              ? "Wholesale Product"
              : "Fresh Product"}
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              text-[#52606D]
              shadow-sm
              sm:flex
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#00864A]" />
            Quality Product
          </div>
        </div>

        {/* ====================================================
            MAIN PRODUCT CARD
        ==================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#00864A]/10
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.07)]
          "
        >

          {/* Yellow top accent */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-20
              h-2
              bg-[#F9C51C]
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-0
              lg:grid-cols-12
            "
          >

            {/* ==================================================
                LEFT — PRODUCT GALLERY
            ================================================== */}

            <div
              className="
                relative
                lg:col-span-7
                lg:border-r
                lg:border-[#E5E9E6]
              "
            >

              {/* Gallery background decoration */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  bg-[#F9C51C]/15
                  blur-2xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-52
                  w-52
                  rounded-full
                  bg-[#00864A]/10
                  blur-2xl
                "
              />

              <div className="relative p-5 sm:p-7 lg:p-8">

                {/* ==================================================
                    MAIN IMAGE
                ================================================== */}

                {isLoading ? (
                  <div
                    className="
                      flex
                      h-[400px]
                      items-center
                      justify-center
                      rounded-[28px]
                      border
                      border-[#E5E9E6]
                      bg-[#F5F5EF]
                      sm:h-[500px]
                      lg:h-[560px]
                    "
                  >
                    <div className="text-center">
                      <div
                        className="
                          mx-auto
                          mb-4
                          h-12
                          w-12
                          animate-pulse
                          rounded-full
                          bg-[#EAF5EC]
                        "
                      />

                      <p
                        className="
                          text-sm
                          font-bold
                          text-[#52606D]
                        "
                      >
                        Loading product...
                      </p>
                    </div>
                  </div>
                ) : isError ? (
                  <div
                    className="
                      flex
                      h-[400px]
                      items-center
                      justify-center
                      rounded-[28px]
                      border
                      border-red-100
                      bg-red-50
                      p-6
                      text-center
                      sm:h-[500px]
                      lg:h-[560px]
                    "
                  >
                    <div>
                      <p className="text-lg font-black text-red-500">
                        Unable to load product
                      </p>

                      <p className="mt-2 text-sm text-red-400">
                        {(error as Error)?.message ||
                          "Something went wrong."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="
                        relative
                        h-[400px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-[#E5E9E6]
                        bg-[#F5F5EF]
                        sm:h-[500px]
                        lg:h-[560px]
                      "
                    >

                      <Image
                        src={currentMainImage}
                        alt={
                          product?.name ||
                          product?.title ||
                          "Product image"
                        }
                        fill
                        priority
                        sizes="
                          (max-width: 1024px) 100vw,
                          60vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.02]
                        "
                      />

                      {/* Product type badge */}

                      <div className="absolute left-4 top-4">
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/60
                            bg-white
                            px-4
                            py-2
                            shadow-md
                          "
                        >
                          <span className="h-2 w-2 rounded-full bg-[#00864A]" />

                          <span
                            className="
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.08em]
                              text-[#00864A]
                            "
                          >
                            {productType === "wholesale"
                              ? "Wholesale"
                              : "Retail"}
                          </span>
                        </div>
                      </div>

                      {/* Quality badge */}

                      <div className="absolute bottom-4 left-4">
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-4
                            py-2
                            shadow-md
                          "
                        >
                          <Sparkles
                            className="
                              h-3.5
                              w-3.5
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
                    </div>

                    {/* ==================================================
                        THUMBNAILS
                    ================================================== */}

                    <div className="mt-5">

                      <div className="mb-3 flex items-center justify-between">
                        <span
                          className="
                            text-xs
                            font-black
                            uppercase
                            tracking-[0.08em]
                            text-[#52606D]
                          "
                        >
                          Product Images
                        </span>

                        <ArrowDown
                          className="
                            h-4
                            w-4
                            text-[#00864A]
                          "
                        />
                      </div>

                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {displayThumbnails.map(
                          (img: string, index: number) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() =>
                                setSelectedImage(img)
                              }
                              className={`
                                relative
                                h-20
                                w-20
                                shrink-0
                                overflow-hidden
                                rounded-2xl
                                border-2
                                bg-[#F5F5EF]
                                transition-all
                                duration-300
                                sm:h-24
                                sm:w-24
                                ${
                                  currentMainImage === img
                                    ? "border-[#00864A] shadow-[0_8px_20px_rgba(0,134,74,0.15)]"
                                    : "border-[#E5E9E6] hover:border-[#F9C51C]"
                                }
                              `}
                            >
                              <img
                                src={img}
                                alt={`
                                  ${
                                    product?.name ||
                                    product?.title ||
                                    "Product"
                                  } thumbnail ${index + 1}
                                `}
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                  transition-transform
                                  duration-300
                                  hover:scale-105
                                "
                              />

                              {currentMainImage === img && (
                                <div
                                  className="
                                    absolute
                                    bottom-1
                                    right-1
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-[#00864A]
                                    ring-2
                                    ring-white
                                  "
                                />
                              )}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* ==================================================
                    TRUST FEATURES
                ================================================== */}

                {!isLoading && !isError && (
                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-1
                      gap-3
                      sm:grid-cols-3
                    "
                  >

                    <div
                      className="
                        rounded-2xl
                        bg-[#F4FAF6]
                        p-4
                      "
                    >
                      <Truck
                        className="
                          mb-2
                          h-5
                          w-5
                          text-[#00864A]
                        "
                      />

                      <p
                        className="
                          text-xs
                          font-black
                          text-[#151515]
                        "
                      >
                        Fast Delivery
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-5
                          text-[#52606D]
                        "
                      >
                        Delivered to your doorstep.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-[#FFF4D0]
                        p-4
                      "
                    >
                      <PackageCheck
                        className="
                          mb-2
                          h-5
                          w-5
                          text-[#F47C20]
                        "
                      />

                      <p
                        className="
                          text-xs
                          font-black
                          text-[#151515]
                        "
                      >
                        Quality Checked
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-5
                          text-[#52606D]
                        "
                      >
                        Carefully selected products.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-[#FFF0E6]
                        p-4
                      "
                    >
                      <ShieldCheck
                        className="
                          mb-2
                          h-5
                          w-5
                          text-[#F47C20]
                        "
                      />

                      <p
                        className="
                          text-xs
                          font-black
                          text-[#151515]
                        "
                      >
                        Secure Shopping
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-5
                          text-[#52606D]
                        "
                      >
                        Safe and simple checkout.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ==================================================
                RIGHT — PRODUCT INFORMATION
            ================================================== */}

            <div
              className="
                relative
                lg:col-span-5
              "
            >

              {/* Right-side decoration */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-40
                  w-40
                  rounded-full
                  bg-[#F9C51C]/10
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  h-full
                  p-5
                  sm:p-7
                  lg:p-8
                  xl:p-10
                "
              >
                <div
                  className="
                    sticky
                    top-28
                  "
                >
                  <ProductInformation
                    product={product}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            LOWER PRODUCT MESSAGE
        ======================================================== */}

        {!isLoading && !isError && product && (
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
            "
          >

            <div
              className="
                rounded-[26px]
                border
                border-[#00864A]/10
                bg-white
                p-6
                shadow-[0_12px_35px_rgba(0,0,0,0.05)]
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF5EC]
                "
              >
                <Heart
                  className="
                    h-5
                    w-5
                    text-[#00864A]
                  "
                />
              </div>

              <h3
                className="
                  text-base
                  font-black
                  text-[#151515]
                "
              >
                Love this product?
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#52606D]
                "
              >
                Add it to your wishlist so you can easily
                find it again later.
              </p>
            </div>

            <div
              className="
                rounded-[26px]
                border
                border-[#00864A]/10
                bg-[#F4FAF6]
                p-6
                shadow-[0_12px_35px_rgba(0,0,0,0.04)]
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <Truck
                  className="
                    h-5
                    w-5
                    text-[#00864A]
                  "
                />
              </div>

              <h3
                className="
                  text-base
                  font-black
                  text-[#151515]
                "
              >
                Ready for delivery
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#52606D]
                "
              >
                Get your groceries delivered conveniently
                to your doorstep.
              </p>
            </div>

            <div
              className="
                rounded-[26px]
                border
                border-[#F9C51C]/30
                bg-[#FFF4D0]
                p-6
                shadow-[0_12px_35px_rgba(0,0,0,0.04)]
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <Sparkles
                  className="
                    h-5
                    w-5
                    text-[#F47C20]
                  "
                />
              </div>

              <h3
                className="
                  text-base
                  font-black
                  text-[#151515]
                "
              >
                Freshness you can trust
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#52606D]
                "
              >
                Shop quality African groceries selected
                with care.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ==========================================================
          BOTTOM BRAND ACCENT
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