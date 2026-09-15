import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ShopOption {
  type: "retail" | "wholesale";
  href: string;
  label: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  tags: string[];
}

const shopOptions: ShopOption[] = [
  {
    type: "retail",
    href: "/retail",
    label: "Retail Shopping",
    title: "Everything You Need for Daily Living",
    description:
      "Browse a wide range of quality groceries, fresh produce, household essentials, beverages, spices, and everyday food items. Buy only what you need and enjoy competitive prices, quick delivery, and a hassle-free shopping experience.",
    stats: [
      { value: "1+", label: "Minimum Quantity" },
      { value: "Fast", label: "Quick Delivery" },
      { value: "500+", label: "Products Available" },
      { value: "100%", label: "Fresh Products" },
    ],
    tags: [
      "Daily Essentials",
      "Fresh Groceries",
      "Doorstep Delivery",
      "Affordable Prices",
    ],
  },
  {
    type: "wholesale",
    href: "/wholesale",
    label: "Wholesale Shopping",
    title: "Bulk Shopping Made Easy",
    description:
      "Purchase products in larger quantities at discounted wholesale prices. Perfect for supermarkets, restaurants, food vendors, caterers, hotels, and retailers looking to maximize profit while reducing purchasing costs.",
    stats: [
      { value: "10+", label: "Bulk Order Quantity" },
      { value: "Save More", label: "Lower Unit Cost" },
      { value: "1000+", label: "Products Available" },
      { value: "Best Deals", label: "Wholesale Pricing" },
    ],
    tags: [
      "Bulk Discounts",
      "Business Orders",
      "Reliable Supply",
      "Better Profit Margins",
    ],
  },
];

export default function RetailWholesale() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-12 md:px-6">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Shop Your Way
          </h2>

          <p className="mt-3 text-xl font-semibold text-gray-900">
            Buy in Retail or Wholesale
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-lg">
            Whether you're shopping for your home or buying in bulk for your
            business, MotherLand International Foods has got you covered.
            Pick Retail or Wholesale to explore products tailored to your
            needs.
          </p>
        </div>

        {/* =========================
            RETAIL / WHOLESALE LINK CARDS
        ========================== */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {shopOptions.map((option) => (
            <Link
              key={option.type}
              href={option.href}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all duration-300 hover:border-[var(--main)] hover:shadow-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-[var(--main)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--main)]">
                {option.label}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {option.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {option.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <h4 className="text-2xl font-bold text-[var(--main)]">
                      {stat.value}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {option.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--main)]">
                Shop {option.label.split(" ")[0]}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
