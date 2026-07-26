
import {
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Building2,
} from "lucide-react";
import Button from "../button";
import Link from "next/link";

const retailPerks = [
  {
    icon: Truck,
    title: "Free Express Shipping",
    description: "On all retail orders over $50",
  },
  {
    icon: RotateCcw,
    title: "30-Day Easy Returns",
    description: "Hassle-free return policy",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Checkout",
    description: "Encrypted & safe payment options",
  },
  {
    icon: ShoppingBag,
    title: "Curated Collections",
    description: "Handpicked premium products",
  },
];

const wholesalePerks = [
  {
    icon: Truck,
    title: "Freight & Custom Logistics",
    description: "Discounted pallet & container shipping",
  },
  {
    icon: Building2,
    title: "Dedicated Account Lead",
    description: "Direct support for large-scale orders",
  },
  {
    icon: ShieldCheck,
    title: "NET 30 Payment Terms",
    description: "Invoicing options available upon approval",
  },
  {
    icon: ShoppingBag,
    title: "Tiered Bulk Pricing",
    description: "Save up to 40% on unit case packs",
  },
];

export default function RetailTrust() {
  const perks = retailPerks;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10 space-y-6">
      {/* Dynamic Header & Switch Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
        <div>
          <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white bg-(--main) rounded-md">
            Retail Mode
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-2">
            Standard Retail Shopping Benefits
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Viewing consumer pricing and quick order perks
          </p>
        </div>

        {/* Action Button to Switch Modes */}
        <Link href="/wholesale">
          <Button variant="primary" className="w-full">
            Switch to WholeSale Mode
          </Button>
        </Link>
       
      </div>

      {/* Perks Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
        {perks.map((perk, index) => {
          const Icon = perk.icon;
          return (
            <div key={index} className="flex items-start space-x-4 p-2">
              <div className="p-3 bg-(--main) text-white rounded-xl shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  {perk.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {perk.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
