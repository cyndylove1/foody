"use client";

interface ShippingMethodProps {
  shippingMethod: "free" | "express";
  setShippingMethod: (method: "free" | "express") => void;
}

export default function ShippingMethod({
  shippingMethod,
  setShippingMethod,
}: ShippingMethodProps) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-5">
        Shipping Method
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Free Shipping Box */}
        <div
          onClick={() => setShippingMethod("free")}
          className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
            shippingMethod === "free"
              ? "border-gray-300 bg-white ring-1 ring-(--main)"
              : "border-gray-300 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex gap-3">
            <div
              className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border shrink-0 transition-colors ${
                shippingMethod === "free"
                  ? "border-(--main)"
                  : "border-gray-400"
              }`}
            >
              {shippingMethod === "free" && (
                <div className="w-2.5 h-2.5 rounded-full bg-(--main)" />
              )}
            </div>
            <div>
              <span className="block text-sm font-bold text-gray-900">
                Free Shipping
              </span>
              <span className="block text-xs text-gray-500 mt-1">
                7-20 Days
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$0</span>
        </div>

        {/* Express Shipping Box */}
        <div
          onClick={() => setShippingMethod("express")}
          className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
            shippingMethod === "express"
              ? "border-gray-300 bg-white ring-1 ring-(--main)"
              : "border-gray-300 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex gap-3">
            <div
              className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border shrink-0 transition-colors ${
                shippingMethod === "express"
                  ? "border-(--main)"
                  : "border-gray-400"
              }`}
            >
              {shippingMethod === "express" && (
                <div className="w-2.5 h-2.5 rounded-full bg-(--main)" />
              )}
            </div>
            <div>
              <span className="block text-sm font-bold text-gray-900">
                Express Shipping
              </span>
              <span className="block text-xs text-gray-500 mt-1">1-3 Days</span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$9</span>
        </div>
      </div>
    </div>
  );
}
