"use client";

import Link from "next/link";

// Define the blueprint structure for each breadcrumb segment
interface BreadcrumbItem {
  label: string;
  href?: string; // Optional: if provided, it becomes a clickable Link
}

interface BreadCrumbsProps {
  items: BreadcrumbItem[];
}

export default function BreadCrumbs({ items }: BreadCrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumbs text-[12px] font-[400] leading-[120%] text-(--gray-600) mx-4 md:mx-12 pt-4 jakarta"
    >
      <ul className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={`flex items-center gap-2 ${isLast ? "text-(--main)" : ""}`}
            >
              {/* If it's not the last item and has an href, render a Link wrapper */}
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="hover:underline transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
