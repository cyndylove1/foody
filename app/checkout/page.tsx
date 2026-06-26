"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, HelpCircle, Tag } from "lucide-react";
import Button from "../components/button";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import BreadCrumbs from "../components/breadCrumbs";

export default function Checkout() {
  // Form States
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "",
    phoneNumber: "",
    city: "",
    state: "",
    zipCode: "",
    description: "",
  });

  const [shippingMethod, setShippingMethod] = useState<"free" | "express">(
    "free",
  );
  const [discountCode, setDiscountCode] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, id: value }));
  };
  const productLinks = [
    // { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Spices", href: "/categories/spices" },
    { label: "Checkout" },
  ];

  return (
    <>
      <div className="bg-[#fff1e1]/60">
        <Navbar />
        {/* Breadcrumb Navigation */}
        <BreadCrumbs items={productLinks} />
        <div className="text-[#1a1a1a] antialiased w-full min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            {/* LEFT COLUMN: BREADCRUMBS, SHIPPING ADDRESS & METHOD (7 Columns wide) */}
            <div className="lg:col-span-7 p-4 md:p-10 lg:p-14">
              {/* Form Header */}
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                Shipping Address
              </h2>

              <form className="space-y-5">
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold text-gray-600"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue={formData.firstName}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Last Name*{" "}
                      {/* Intentionally matching the image typo 'Lastt' */}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={formData.lastName}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email & Phone Number Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={formData.email}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phoneNumber"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Phone number*
                    </label>
                    <div className="flex w-full h-12 bg-white border border-gray-200 rounded-[8px] overflow-hidden focus-within:ring-1 focus-within:ring-gray-400 transition-all">
                      <select
                        id="phoneCountry"
                        defaultValue={formData.phoneCountry}
                        className="h-full px-3 text-sm font-medium text-gray-800 bg-transparent border-r border-gray-200 focus:outline-none cursor-pointer appearance-none flex items-center justify-center  bg-[length:1.25rem_1.25rem] bg-[right_0.25rem_center pr-6"
                      >
                        <option value="IND">IND</option>
                        <option value="USA">USA</option>
                        <option value="NGA">NGA</option>
                      </select>
                      <input
                        type="text"
                        id="phoneNumber"
                        defaultValue={formData.phoneNumber}
                        className="flex-1 h-full px-3 text-sm text-gray-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* City, State & Zip Code Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="city"
                      className="text-xs font-semibold text-gray-600"
                    >
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      defaultValue={formData.city}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="state"
                      className="text-xs font-semibold text-gray-600"
                    >
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      defaultValue={formData.state}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="zipCode"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      defaultValue={formData.zipCode}
                      className="w-full h-12 px-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="description"
                    className="text-xs font-semibold text-gray-600"
                  >
                    Description*
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Enter a description..."
                    className="w-full p-3 bg-white border border-gray-200 rounded-[8px] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder-gray-400 resize-none"
                  />
                </div>
              </form>

              {/* Shipping Method Segment */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-5">
                  Shipping Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Free Shipping Box */}
                  <label
                    onClick={() => setShippingMethod("free")}
                    className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
                      shippingMethod === "free"
                        ? "border-(--main) bg-white ring-1 ring-gray-900"
                        : "border-(--main) bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 shrink-0">
                        {shippingMethod === "free" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />
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
                  </label>

                  {/* Express Shipping Box */}
                  <label
                    onClick={() => setShippingMethod("express")}
                    className={`flex items-start justify-between p-4 rounded-[12px] border cursor-pointer transition-all select-none ${
                      shippingMethod === "express"
                        ? "border-(--main) bg-white ring-1 ring-gray-900"
                        : "border-(--main) bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 shrink-0">
                        {shippingMethod === "express" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />
                        )}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-gray-900">
                          Express Shipping
                        </span>
                        <span className="block text-xs text-gray-500 mt-1">
                          1-3 Days
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">$9</span>
                  </label>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: STICKY ORDER SUMMARY PANEL (5 Columns wide) */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 bg-gray-50">
              <div className="max-w-md mx-auto lg:max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                  Your Cart
                </h2>

                {/* Cart Items List Wrapper */}
                <div className="space-y-4 mb-6">
                  {/* Product Item 1: Puffed Jacket */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 bg-white border border-gray-100 rounded-[8px] overflow-hidden shrink-0">
                        <Image
                          src="/assets/maggi.jpg" // Swap with your actual product image path
                          alt="Men Top Black Puffed Jacket"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">
                          Men Top Black Puffed Jacket
                        </h4>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          Men's Black
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 shrink-0">
                      $999.00
                    </span>
                  </div>

                  {/* Product Item 2: Women Jacket */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 border border-gray-100 rounded-[8px] overflow-hidden shrink-0">
                        <Image
                          src="/assets/bonnet.jpg"
                          alt="pepper"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">
                          Women Jacket
                        </h4>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          Women top
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 shrink-0">
                      $1200.00
                    </span>
                  </div>
                </div>

                {/* Discount Code Input Box Wrapper */}
                <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-[10px] items-center mb-6">
                  <div className="flex items-center gap-2 pl-2 text-gray-400 flex-1">
                    <Tag size={16} className="rotate-90 stroke-[2]" />
                    <input
                      type="text"
                      placeholder="Discount code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full h-9 bg-transparent text-sm focus:outline-none text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-bold bg-white text-gray-900 rounded-[8px] border border-transparent hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>

                {/* Price Fee Breakdowns Layout */}
                <div className="border-b border-gray-300 pb-4 mb-4 space-y-3 text-sm">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">$2199.00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold text-gray-900">
                      {shippingMethod === "free" ? "$0" : "$9"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center gap-1.5">
                      Estimated taxes{" "}
                      <HelpCircle
                        size={14}
                        className="text-gray-400 stroke-[2.5]"
                      />
                    </span>
                    <span className="font-bold text-gray-900">$5.00</span>
                  </div>
                </div>

                {/* Dynamic Grand Total Section */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-base font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    ${shippingMethod === "free" ? "2204.00" : "2213.00"}
                  </span>
                </div>

                {/* CTA Final Checkout Button */}
                <Button variant="primary" className="w-full">
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
