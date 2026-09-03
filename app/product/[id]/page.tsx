"use client";

import { useState, use } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
  const productType = searchParams.get("type") as "retail" | "wholesale" | null;

  // Existing single product hook (runs when type query param is not retail or wholesale)
  const defaultSingleQuery = useSingleProduct(id);

  // New hook for retail / wholesale items
  const typeSingleQuery = useSingleWholesaleOrRetail(
    id,
    productType ?? undefined
  );

  // Conditionally pick active query & payload
  const isTypeBased = productType === "retail" || productType === "wholesale";
  const activeQuery = isTypeBased ? typeSingleQuery : defaultSingleQuery;

  const { isLoading, isError, error } = activeQuery;
  const product = isTypeBased
    ? typeSingleQuery.data
    : defaultSingleQuery.data?.data;

  const [selectedImage, setSelectedImage] = useState<string>("");

  const mainDefaultImage =
    product?.image_url ||
    product?.image ||
    product?.thumbnail ||
    product?.gallery?.[0] ||
    "/placeholder.jpg";

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
    galleryImages.length > 0 ? galleryImages : ["/placeholder.jpg"];

  const currentMainImage = selectedImage || mainDefaultImage;

  const productLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/category/seasonings" },
    { label: product?.name || product?.title || "Loading..." },
  ];

  return (
    <>
      <ShopNavbar />

      <div className="bg-white">
        <BreadCrumbs items={productLinks} className="mx-4 md:mx-12" />

        <div className="p-4 md:p-8 border-y border-gray-300">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Images */}
            <div>
              {isLoading ? (
                <div className="flex items-center justify-center h-[500px] rounded-xl border border-gray-200 bg-gray-50">
                  <p className="text-gray-500 text-lg">Loading image...</p>
                </div>
              ) : isError ? (
                <div className="flex items-center justify-center h-[500px] rounded-xl border border-gray-200 bg-white">
                  <p className="text-red-500">{(error as Error)?.message}</p>
                </div>
              ) : (
                <>
                  {/* Main Image */}
                  <div className="relative rounded-xl overflow-hidden border border-gray-200 h-[500px] w-full bg-gray-50">
                    <Image
                      src={currentMainImage}
                      alt={product?.name || product?.title || "Product image"}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Thumbnail Images */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {displayThumbnails.map((img: string, index: number) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                          currentMainImage === img
                            ? "border-orange-500"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product?.name || product?.title || "Product"} thumbnail ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right: Product Information */}
            <div>
              <ProductInformation product={product} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}