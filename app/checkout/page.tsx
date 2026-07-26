"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkCircle, IoChevronDown, IoChevronUp } from "react-icons/io5";

import Footer from "../components/ui/footer";
import BreadCrumbs from "../components/breadCrumbs";
import ShippingMethod from "../components/shippingMethod";
import OrderSummary from "../components/orderSummary";
import Logo from "../components/logo";
import PaymentMethod from "../components/ui/paymentMethod";
import CheckoutForm from "../components/ui/checkoutForm";

export default function Checkout() {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [completed, setCompleted] = useState<number[]>([]);

  // Form selections & values
  const [shippingMethod, setShippingMethod] = useState<"free" | "express">(
    "free",
  );
  const [addressData, setAddressData] = useState<any>(null);
  const [deliveryData, setDeliveryData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);

  const steps = [
    { id: 1, title: "CUSTOMER ADDRESS" },
    { id: 2, title: "SHIPPING METHOD" },
    { id: 3, title: "PAYMENT METHODS" },
  ];

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  const completeStep = (id: number, value: any) => {
    if (id === 1) setAddressData(value);
    if (id === 2) setDeliveryData(value);
    if (id === 3) setPaymentData(value);

    if (!completed.includes(id)) {
      setCompleted((prev) => [...prev, id]);
    }

    // Automatically open next step if available
    if (id < 3) {
      setActiveStep(id + 1);
    } else {
      setActiveStep(null);
    }
  };

  const reopenStep = (id: number) => {
    setCompleted((prev) => prev.filter((s) => s !== id));
    setActiveStep(id);
  };

  const productLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "Checkout" },
  ];

  return (
    <>
      <div className="bg-[#fff1e1]/60 min-h-screen">
        <div className="text-[#1a1a1a] antialiased w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 p-4 md:p-10 lg:p-14 border-r border-gray-300 space-y-4">
              <div className="py-2">
                <Logo />
              </div>

              <BreadCrumbs items={productLinks} />

              {/* ACCORDION STEPS */}
              <div className="space-y-4 mt-6">
                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isCompleted = completed.includes(step.id);

                  return (
                    <div
                      key={step.id}
                      className="border border-gray-300 bg-white rounded-[16px] w-full overflow-hidden transition-all duration-200"
                    >
                      {/* HEADER */}
                      <div
                        className={`flex items-center justify-between cursor-pointer p-5 transition-colors select-none ${
                          isCompleted && !isActive
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                        onClick={() => toggleStep(step.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={
                              isCompleted ? "text-(--main)" : "text-gray-300"
                            }
                          >
                            <IoCheckmarkCircle size={24} />
                          </div>
                          <h2 className="text-base font-medium text-gray-800">
                            {step.id}. {step.title}
                          </h2>
                        </div>

                        {/* TOGGLE CHEVRON ICON */}
                        <div className="text-gray-500 hover:text-gray-800 transition-colors">
                          {isActive ? (
                            <IoChevronUp size={20} />
                          ) : (
                            <IoChevronDown size={20} />
                          )}
                        </div>
                      </div>

                      {/* ACTIVE STEP CONTENT WITH SMOOTH ANIMATION */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-gray-200 px-6 py-4">
                              {step.id === 1 && (
                                <CheckoutForm
                                  onSubmit={(value) => completeStep(1, value)}
                                />
                              )}

                              {step.id === 2 && (
                                <ShippingMethod
                                  shippingMethod={shippingMethod}
                                  setShippingMethod={setShippingMethod}
                                  onSubmit={(value) => completeStep(2, value)}
                                />
                              )}

                              {step.id === 3 && (
                                <PaymentMethod
                                  onSubmit={(value) => completeStep(3, value)}
                                />
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* COMPLETED SUMMARY READOUT */}
                      {isCompleted && !isActive && (
                        <div className="px-6 py-4 flex justify-between items-center bg-gray-50/50">
                          <div className="text-sm text-gray-600">
                            {step.id === 1 && addressData && (
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {addressData.firstName} {addressData.lastName}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {addressData.address}
                                </p>
                              </div>
                            )}

                            {step.id === 2 && deliveryData && (
                              <div>
                                <p className="font-semibold text-gray-900 capitalize">
                                  {deliveryData.method} Shipping
                                </p>
                                <p className="text-xs text-gray-500">
                                  ${deliveryData.price}
                                </p>
                              </div>
                            )}

                            {step.id === 3 && paymentData && (
                              <div>
                                <p className="font-semibold text-gray-900">
                                  Card Payment
                                </p>
                              </div>
                            )}
                          </div>

                          <button
                            type="button"
                            className="text-(--main) text-sm font-medium hover:underline"
                            onClick={(e) => {
                              e.stopPropagation();
                              reopenStep(step.id);
                            }}
                          >
                            Change
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN - ORDER SUMMARY */}
            <OrderSummary shippingMethod={shippingMethod} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
