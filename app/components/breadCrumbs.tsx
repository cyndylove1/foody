"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
  
}

interface BreadCrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadCrumbs({ items, className }: BreadCrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`breadcrumbs text-[12px] font-[400] py-4 leading-[120%] text-(--gray-600) pt-4 jakarta ${className}`}
    >
      <ul className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={`flex items-center gap-2 ${isLast ? "text-(--main)" : ""}`}
            >
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
