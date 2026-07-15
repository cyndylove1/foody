"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityProps {
  className?: string;
  value?: number;
  onChange?: (quantity: number) => void;
}

export default function Quantity({ className, value, onChange }: QuantityProps) {
  const [internalQuantity, setInternalQuantity] = useState<number>(1);

  const isControlled = value !== undefined;
  const quantity = isControlled ? value : internalQuantity;

  const setQuantity = (next: number) => {
    if (isControlled) {
      onChange?.(next);
    } else {
      setInternalQuantity(next);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div
      className={`flex items-center justify-between border border-gray-200 rounded-xl bg-white p-1 w-full max-w-[140px] select-none ${className}`}
    >
      {/* Button Decrease */}
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center justify-center shrink-0 aspect-square"
        aria-label="Decrease quantity"
      >
        <FaMinus className="w-2.5 h-2.5" />
      </button>

      <span className="text-xs sm:text-sm font-bold text-[#111111] px-1 text-center flex-1 min-w-0">
        {quantity}
      </span>

      {/* Button Increase */}
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
