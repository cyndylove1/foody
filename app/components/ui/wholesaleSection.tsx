import Link from "next/link";
import Button from "../button";

export default function WholesaleSection() {
  return (
    <section className="pt-30 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-300 p-6 sm:p-8 lg:p-10">
          {/* Subtle Top Accent Line */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-(--main)" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading & Context */}
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-lg bg-(--main) px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Wholesale Portal
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-4xl">
                B2B & Bulk Purchasing Active
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-slate-600">
                You are currently viewing bulk inventory rates. Unlock case-pack
                pricing, custom shipping quotes, and direct invoicing options
                for commercial orders.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <span className="block text-lg font-bold text-slate-900">
                    Up to 40%
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Bulk Savings
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <span className="block text-lg font-bold text-slate-900">
                    MOQ 50 Units
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Minimum Orders
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <span className="block text-lg font-bold text-slate-900">
                    NET 30
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Terms Available
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Mode Controls */}
            <div className="flex flex-col items-start justify-center lg:col-span-5 lg:items-end">
              <div className="w-full max-w-sm rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-xs">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Account View Mode
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  Switch store views to compare pricing and minimum order
                  limits.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <Link href="/retail">
                    <Button variant="primary" className="w-full">Switch to Retail Mode</Button>
                  </Link>

                  <span className="text-center text-xs text-slate-500">
                    Currently active:{" "}
                    <strong className="text-slate-900">
                      "Wholesale Portal
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
