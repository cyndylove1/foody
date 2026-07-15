"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Quantity from "../quantitiy";
import Button from "../button";
import { useCart } from "../../context/cartContext";

interface ProductColor {
  hex: string;
  name: string;
}

interface BagCardProps {
  id: string | number;
  name: string;
  imageSrc: string;
  originalPrice?: number;
  currentPrice: number;
  colors?: ProductColor[];
}

export default function ProductCard({
  id,
  name,
  imageSrc,
  currentPrice,
}: BagCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(Number(id), quantity);
  };

  return (
    <div className="flex flex-col w-full group bg-gray-50 p-4 overflow-hidden">
      <Link
        href={`/product/${id}`}
        className="relative w-full aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-shadow duration-300 hover:shadow-md overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
            priority
          />
        </div>
      </Link>

      {/*Text Details */}
      <div className="pt-4 px-1 flex flex-col text-left">
        <Link href={`/product/${id}`}>
          <h3 className="text-base font-medium text-[#1c2e24] hover:text-[#335341] transition-colors line-clamp-1 cursor-pointer">
            {name}
          </h3>
        </Link>
        {/* Pricing  */}
        <div className="flex items-center justify-between gap-4 mt-2">
          <span className="text-sm font-bold text-gray-900">
            ${currentPrice}
          </span>
          <Quantity value={quantity} onChange={setQuantity} />
        </div>
      </div>
      <Button variant="primary" className="my-4" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}
