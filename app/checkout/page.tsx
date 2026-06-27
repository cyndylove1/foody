"use client";

import { useState } from "react";

import Footer from "../components/ui/footer";
import BreadCrumbs from "../components/breadCrumbs";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ShippingMethod from "../components/shippingMethod";
import OrderSummary from "../components/orderSummary";
import Logo from "../components/logo";

export default function Checkout() {
  const [country, setCountry] = useState("");
  const [shippingMethod, setShippingMethod] = useState<"free" | "express">(
    "free",
  );
  const [city, setCity] = useState("");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const productLinks = [
    // { label: "Home", href: "/" },
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "Checkout" },
  ];
  const countryOptions = [
    { value: "United State", label: "United State" },
    { value: "Nigeria", label: "Nigeria" },
  ];
  const cityOptions = [
    { value: "Oshodi", label: "Oshodi" },
    { value: "Apapa", label: "Apapa" },
  ];
  return (
    <>
      <div className="bg-[#fff1e1]/60">
        <div className="text-[#1a1a1a] antialiased w-full min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 p-4 md:p-10 lg:p-14 border-r border-gray-300">
              <div className="py-6">
              
                <Logo />
              </div>

              <BreadCrumbs items={productLinks} />
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                Shipping Address
              </h2>

              <form className="space-y-5">
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="">
                    <CustomInput
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      placeholder="Enter your First Name"
                      required={true}
                    />
                  </div>
                  <div className="">
                    <CustomInput
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                      placeholder="Enter your Last Name"
                      required={true}
                    />
                  </div>
                </div>

                {/* Email & Phone Number*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <CustomInput
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      required={true}
                    />
                  </div>
                  {/* Phone Number */}
                  <div>
                    <CustomInput
                      label="Phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your Phone number"
                      required={true}
                    />
                  </div>
                </div>

                {/* City, State & Zip Code Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <CustomSelect
                      label="Select City"
                      value={city}
                      options={cityOptions}
                      onChange={(val) => setCity(val)}
                      required={true}
                    />
                  </div>
                  <div>
                    <CustomSelect
                      label="Select Country"
                      value={country}
                      options={countryOptions}
                      onChange={(val) => setCountry(val)}
                      required={true}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Zip Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Enter your Zip Code"
                      // required={true}
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
                    className="w-full p-3 bg-white border-[1px] border-[#d8dadc] rounded-[8px] text-sm text-black hover:border-(--main) focus:outline-none focus:ring-1 focus:ring-(--main) transition-all placeholder-[#6b7280] resize-none"
                  />
                </div>
              </form>

              {/* Shipping Method */}
              <ShippingMethod
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
              />
            </div>

            {/* ORDER SUMMARY */}
            <OrderSummary shippingMethod={shippingMethod} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
