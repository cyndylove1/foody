// components/ProductCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Quantity from "../quantitiy";
import Button from "../button";
import { useCart } from "../../context/cartContext";

interface ProductCardProps {
  id: string | number;
  name: string;
  imageSrc: string;
  currentPrice: number;
}

export default function ProductCard({
  id,
  name,
  imageSrc,
  currentPrice,
}: ProductCardProps) {
  const { addItem, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Handle local state update and context sync
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    // Sync directly with the global cart context
    if (typeof updateQuantity === "function") {
      updateQuantity(Number(id), newQuantity);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(Number(id), quantity);
  };

  return (
    <div className="flex flex-col w-full group bg-gray-50 p-4 rounded-xl overflow-hidden border border-gray-100">
      <Link
        href={`/product/${id}`}
        className="relative w-full aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-shadow duration-300 hover:shadow-md overflow-hidden bg-white"
      >
        <div className="relative w-full h-full">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400">
              No Image
            </div>
          )}
        </div>
      </Link>

      <div className="pt-4 px-1 flex flex-col text-left">
        <Link href={`/product/${id}`}>
          <h3 className="text-base font-medium text-[#1c2e24] hover:text-[#335341] transition-colors line-clamp-1 cursor-pointer">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between gap-4 mt-2">
          <span className="text-sm font-bold text-gray-900">
            ${currentPrice}
          </span>
          <Quantity value={quantity} onChange={handleQuantityChange} />
        </div>
      </div>
      <Button variant="primary" className="my-4" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}
