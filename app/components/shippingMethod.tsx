"use client";

import Button from "./button";
import RadioButton from "./radioButton"; // Adjust import path if needed

interface ShippingMethodProps {
  shippingMethod: "free" | "express";
  setShippingMethod: (method: "free" | "express") => void;
  onSubmit?: (data: { method: "free" | "express"; price: number }) => void;
}

export default function ShippingMethod({
  shippingMethod,
  setShippingMethod,
  onSubmit,
}: ShippingMethodProps) {
  const handleSelectAndSubmit = (method: "free" | "express") => {
    setShippingMethod(method);
  };

  const handleContinue = () => {
    if (onSubmit) {
      onSubmit({
        method: shippingMethod,
        price: shippingMethod === "express" ? 9 : 0,
      });
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Select Shipping Method
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        {/* Free Shipping Box */}
        <div
          onClick={() => handleSelectAndSubmit("free")}
          className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
            shippingMethod === "free"
              ? "border-gray-300 bg-white ring-1 ring-(--main)"
              : "border-gray-300 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex gap-3 items-start">
            <RadioButton
              checked={shippingMethod === "free"}
              onChange={() => handleSelectAndSubmit("free")}
            />
            <div>
              <span className="block text-sm font-bold text-gray-900 leading-none">
                Free Shipping
              </span>
              <span className="block text-xs text-gray-500 mt-1.5">
                7-20 Days
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$0</span>
        </div>

        {/* Express Shipping Box */}
        <div
          onClick={() => handleSelectAndSubmit("express")}
          className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
            shippingMethod === "express"
              ? "border-black bg-white ring-1 ring-(--main)"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex gap-3 items-start">
            <RadioButton
              checked={shippingMethod === "express"}
              onChange={() => handleSelectAndSubmit("express")}
            />
            <div>
              <span className="block text-sm font-bold text-gray-900 leading-none">
                Express Shipping
              </span>
              <span className="block text-xs text-gray-500 mt-1.5">
                1-3 Days
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$9</span>
        </div>
      </div>

      {/* Confirm Step Button */}
      {onSubmit && (
        <div className="flex justify-end py-6">
          <Button variant="primary" onClick={handleContinue}>
            Save & Continue
          </Button>
        </div>
      )}
    </div>
  );
}
