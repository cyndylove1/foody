import { ArrowRight, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Button from "../button";

export default function WholesaleSwitch() {
  return (
    <section className="relative my-20 overflow-hidden rounded-3xl border-2 border-gray-300 bg-white p-8 lg:mx-8 md:mx-6 mx-4">
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
            Retail Shopping
          </span>

          <h2 className="mt-4 text-3xl font-bold text-black">
            Shop Fresh Groceries with Ease
          </h2>

          <p className="mt-3 text-gray-600">
            Enjoy the convenience of shopping for everyday essentials with no
            minimum order. Find fresh African groceries, pantry staples, and
            household products delivered straight to your door.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 text-white">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm font-medium">Buy Any Quantity</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 text-white">
              <Truck className="h-5 w-5" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-(--main) p-3 text-white">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-medium">
                Fresh & Quality Products
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="max-w-sm rounded-2xl bg-gray-50 p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-black">
            Buying for a Business?
          </h3>

          <p className="mt-3 text-sm text-gray-600">
            If you're shopping for everyday groceries or smaller quantities,
            switch to Retail and enjoy flexible purchasing, fresh products, and
            convenient delivery.
          </p>

          <Link href="/retail" className="mt-6 block">
            <Button
              variant="secondary"
              className="flex w-full items-center justify-center gap-3"
            >
              Switch to Retail
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
