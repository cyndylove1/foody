"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface StarRatingProps {
  value?: number;
  onChange?: (rating: number) => void;
  size?: number;
  readOnly?: boolean;
}

export default function StarRating({
  value = 0,
  onChange,
  readOnly = true,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: 5 }).map((_, i) => {
        const ratingValue = i + 1;

        const currentHover = hovered !== null ? hovered : 0;
        const isFilled = currentHover
          ? ratingValue <= currentHover
          : ratingValue <= Math.round(value);

        return (
          <FaStar
            key={i}
            onMouseEnter={() => !readOnly && setHovered(ratingValue)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange && onChange(ratingValue)}
            className={`h-[13px] w-[13px] transition-colors ${
              readOnly ? "cursor-default" : "cursor-pointer"
            }`}
            style={{ color: isFilled ? "#F6B01E" : "#F6B01E" }}
          />
        );
      })}
    </div>
  );
}
