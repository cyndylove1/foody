'use client';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

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
    <div className="flex items-center gap-[10px]">
      {Array.from({ length: 5 }).map((_, i) => {
        const ratingValue = i + 1;
        // If hovered has a value (is a number), we check against that. If it's 0, it falls back to value.
        const currentHover = hovered !== null ? hovered : 0;
        const isFilled = currentHover ? ratingValue <= currentHover : ratingValue <= Math.round(value);

        return (
          <FaStar
            key={i}
            onMouseEnter={() => !readOnly && setHovered(ratingValue)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange && onChange(ratingValue)}
            className={`h-[18px] w-[18px] transition-colors ${
              readOnly ? 'cursor-default' : 'cursor-pointer'
            }`}
            // Using the style prop or explicit fill guarantees the color overrides any parent div text utilities
            style={{ color: isFilled ? '#F6B01E' : '#D1D5DB' }} 
          />
        );
      })}
    </div>
  );
}
