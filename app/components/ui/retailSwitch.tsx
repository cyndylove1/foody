import { ArrowRight, CheckCircle2, Package, BadgePercent } from "lucide-react";
import Button from "../button";
import Link from "next/link";

export default function RetailSwitch() {
  return (
    <section className="relative overflow-hidden border-[2px] border-gray-300 rounded-3xl bg-[#f9f9f9] p-8 lg:mx-8 md:mx-6 mx-4 my-20 text-white">
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-black px-4 py-1 text-sm font-semibold backdrop-blur">
            Upgrade to Wholesale
          </span>

          <h2 className="mt-4 text-3xl font-bold text-black">
            Save More When You Buy in Bulk
          </h2>

          <p className="mt-3 text-black">
            Unlock wholesale pricing, larger quantities, exclusive inventory,
            and priority order fulfillment for your business or family needs.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 backdrop-blur">
              <BadgePercent className="h-5 w-5" />
              <span className="text-sm">Lower Prices</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 backdrop-blur">
              <Package className="h-5 w-5" />
              <span className="text-sm">Bulk Orders</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 backdrop-blur">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm">Exclusive Deals</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start lg:items-end gap-3">
          <Link href="/wholesale">
            <Button variant="secondary" className="flex items-center gap-4">
              Switch to Wholesale
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Button>
          </Link>

          <p className="text-sm text-black">
            Perfect for restaurants, stores, resellers & large families.
          </p>
        </div>
      </div>
    </section>
  );
}
