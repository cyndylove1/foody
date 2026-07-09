"use client";

import { useState, use } from "react";
import Image from "next/image";

import ShopNavbar from "@/app/components/ui/shopNavbar";
import ProductInformation from "@/app/components/ui/productInformation";
import Footer from "@/app/components/ui/footer";
import CustomerFeedback from "@/app/components/ui/customerFeedback";
import BreadCrumbs from "@/app/components/breadCrumbs";
import { useSingleProduct } from "@/app/hooks/useSingleProuduct";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: PageProps) {
  const { id } = use(params);

  const { data, isLoading, isError, error } = useSingleProduct(id);

  const product = data?.data;

  const [selectedImage, setSelectedImage] = useState("");

  const images = [product?.thumbnail, ...(product?.images || [])].filter(
    Boolean,
  );

  const productLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/shop" },
    { label: product?.name || "Loading..." },
  ];

  return (
    <>
      <ShopNavbar />

      <div className="bg-[#fff1e1]/60">
        <BreadCrumbs items={productLinks} className="mx-4 md:mx-12" />

        <div className="p-4 md:p-8 border-y border-gray-300">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Images */}
            <div>
              {isLoading ? (
                <div className="flex items-center justify-center h-[500px] rounded-xl border border-gray-200 bg-white">
                  <p className="text-gray-500 text-lg">Loading image...</p>
                </div>
              ) : isError ? (
                <div className="flex items-center justify-center h-[500px] rounded-xl border border-gray-200 bg-white">
                  <p className="text-red-500">{(error as Error).message}</p>
                </div>
              ) : (
                <>
                  {/* Main Image */}
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src={
                        selectedImage ||
                        product?.thumbnail ||
                        "/placeholder.jpg"
                      }
                      alt={product?.name || "Product"}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnail Images */}
                  {images.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {images.map((img: string, index: number) => (
                        <div
                          key={index}
                          onClick={() => setSelectedImage(img)}
                          className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                            (selectedImage || product?.thumbnail) === img
                              ? "border-orange-500"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            {/* Product Information */}
            <div>
              <ProductInformation product={product} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
      <CustomerFeedback />
      <Footer />
    </>
  );
}
