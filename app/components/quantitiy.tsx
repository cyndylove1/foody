"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityProps {
  className?: string;
}

export default function Quantity({ className }: QuantityProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    // CHANGED: Removed `mx-auto` so it naturally aligns left by default
    <div
      className={`flex items-center justify-between border border-gray-200 rounded-xl bg-white p-1 w-full max-w-[140px] select-none ${className}`}
    >
      {/* Symmetrical Control Button: Decrease */}
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center justify-center shrink-0 aspect-square"
        aria-label="Decrease quantity"
      >
        <FaMinus className="w-2.5 h-2.5" />
      </button>

      {/* Balanced Center Display Panel */}
      <span className="text-xs sm:text-sm font-bold text-[#111111] px-1 text-center flex-1 min-w-0">
        {quantity}
      </span>

      {/* Symmetrical Control Button: Increase */}
      <button
        type="button"
        onClick={handleIncrease}
        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center shrink-0 aspect-square"
        aria-label="Increase quantity"
      >
        <FaPlus className="w-2.5 h-2.5" />
      </button>
    </div>
  );
}
