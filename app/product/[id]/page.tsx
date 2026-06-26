"use client";

import { useState, use } from "react"; // Imported 'use' from react
import Image from "next/image";
import maggi from "@/public/assets/bonnet.jpg";
import maggi1 from "@/public/assets/maggi.jpg";
import maggi2 from "@/public/assets/maggi.jpg";
import maggi3 from "@/public/assets/maggi.jpg";
import maggi4 from "@/public/assets/maggi.jpg";
import ShopNavbar from "@/app/components/ui/shopNavbar";
import ProductInformation from "@/app/components/ui/productInformation";
import Footer from "@/app/components/ui/footer";
import CustomerFeedback from "@/app/components/ui/customerFeedback";
import BreadCrumbs from "@/app/components/breadCrumbs";

const images = [maggi, maggi1, maggi2, maggi3, maggi4];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: PageProps) {

  const productLinks = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Spices", href: "/categories/spices" },
    { label: "Scotch Bonnet Pepper" },
  ];
  
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <ShopNavbar />

      <div className=" bg-[#fff1e1]/60">
        <BreadCrumbs items={productLinks} />
        <div className="w-full md:p-8 p-4 rounded-[16px] w-full border-t border-b border-gray-300">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start mb-20">
            {/* LEFT: Images */}
            <div className="">
              <div className="flex flex-col items-center">
                <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200">
                  <Image
                    src={selectedImage}
                    alt="product-image"
                    width={313}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnail images */}
                <div className="flex items-center gap-4 mt-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`w-full h-[60px] rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                        selectedImage === img
                          ? "border-gray-400 "
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="Thumbnail"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <ProductInformation />
            </div>
          </div>
        </div>
      </div>
      <CustomerFeedback />
      <Footer />
    </>
  );
}
