"use client";

import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityProps {
  className?: string;
  value?: number;
  onChange?: (quantity: number) => void;
  disabled?: boolean;
}

export default function Quantity({
  className = "",
  value,
  onChange,
  disabled = false,
}: QuantityProps) {
  const [internalQuantity, setInternalQuantity] = useState<number>(value ?? 1);

  // Sync internal state when controlled value updates from API
  useEffect(() => {
    if (value !== undefined) {
      setInternalQuantity(value);
    }
  }, [value]);

  const isControlled = value !== undefined;
  const currentQuantity = isControlled ? value : internalQuantity;

  const handleUpdate = (nextQuantity: number) => {
    if (nextQuantity < 1 || disabled) return;
    if (!isControlled) {
      setInternalQuantity(nextQuantity);
    }
    onChange?.(nextQuantity);
  };

  return (
    <div
      className={`flex items-center justify-between border border-gray-200 rounded-xl bg-white p-1 w-full max-w-[140px] select-none ${className}`}
    >
      {/* Button Decrease */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleUpdate(currentQuantity - 1);
        }}
        disabled={currentQuantity <= 1 || disabled}
        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center justify-center shrink-0 aspect-square cursor-pointer disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <FaMinus className="w-2.5 h-2.5" />
      </button>

      <span className="text-xs sm:text-sm font-bold text-[#111111] px-1 text-center flex-1 min-w-0">
        {currentQuantity}
      </span>

      {/* Button Increase */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleUpdate(currentQuantity + 1);
        }}
        disabled={disabled}
        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center justify-center shrink-0 aspect-square cursor-pointer disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <FaPlus className="w-2.5 h-2.5" />
      </button>
    </div>
  );
}
