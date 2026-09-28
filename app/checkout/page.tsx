"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCheckmarkCircle,
  IoChevronDown,
  IoChevronUp,
  IoLocationOutline,
  IoCarOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoLeafOutline,
} from "react-icons/io5";

import Footer from "../components/ui/footer";
import BreadCrumbs from "../components/breadCrumbs";
import ShippingMethod from "../components/ui/shippingMethod";
import OrderSummary from "../components/orderSummary";
import Logo from "../components/logo";
import PaymentMethod from "../components/ui/paymentMethod";
import CheckoutForm from "../components/ui/checkoutForm";
import Navbar from "../components/ui/navbar";

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
    {
      id: 1,
      title: "CUSTOMER ADDRESS",
      subtitle: "Tell us where your order should be delivered.",
      icon: IoLocationOutline,
    },
    {
      id: 2,
      title: "SHIPPING METHOD",
      subtitle: "Choose how you want your groceries delivered.",
      icon: IoCarOutline,
    },
    {
      id: 3,
      title: "PAYMENT METHODS",
      subtitle: "Choose your preferred payment method.",
      icon: IoCardOutline,
    },
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

    // Automatically open next step
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
    // { label: "Categories", href: "/categories" },
    { label: "Checkout" },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#FFFDF7] text-[#151515]">
        <Navbar/>
        {/* =========================================================
            BACKGROUND DECORATIONS
        ========================================================== */}

        {/* Yellow glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/18 blur-3xl" />

        {/* Green glow */}
        <div className="pointer-events-none absolute -right-44 top-[15%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

        {/* Orange glow */}
        <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[420px] w-[420px] rounded-full bg-[#F47C20]/12 blur-3xl" />

        {/* Small yellow decorative shape */}
        <div className="pointer-events-none absolute right-[14%] top-28 hidden h-14 w-14 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

        {/* Green ring */}
        <div className="pointer-events-none absolute bottom-40 left-[4%] hidden h-20 w-20 rounded-full border-[12px] border-[#00864A]/10 lg:block" />

        {/* Orange ring */}
        <div className="pointer-events-none absolute right-[3%] top-[48%] hidden h-36 w-36 rounded-full border-[18px] border-[#F47C20]/10 lg:block" />

        {/* Yellow dot */}
        <div className="pointer-events-none absolute left-[42%] top-[16%] hidden h-4 w-4 rounded-full bg-[#F9C51C] lg:block" />

        {/* =========================================================
            MAIN CHECKOUT CONTAINER
        ========================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 md:px-10 lg:px-12 pt-42 xl:px-14">
          {/* =======================================================
              HEADER
          ======================================================== */}

          <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9C51C]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#00864A] shadow-sm">
                <IoSparklesOutline className="text-[#F47C20]" size={16} />
                Secure Checkout
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                Complete Your{" "}
                <span className="relative inline-block text-[#00864A]">
                  Order
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#F9C51C]" />
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52606D] sm:text-base">
                You&apos;re just a few steps away from getting your favorite
                African groceries delivered fresh to your doorstep.
              </p>
            </div>

            {/* Secure checkout pill */}
            <div className="flex items-center gap-3 self-start rounded-2xl border border-[#00864A]/10 bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.06)] lg:self-auto">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF5EC] text-[#00864A]">
                <IoShieldCheckmarkOutline size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#151515]">
                  Safe & Secure
                </p>
                <p className="text-xs text-[#52606D]">
                  Your information is protected
                </p>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="mb-7">
            <BreadCrumbs items={productLinks} />
          </div>

          {/* =======================================================
              CHECKOUT GRID
          ======================================================== */}

          <div className="grid grid-cols-1 gap-7 xl:grid-cols-12 xl:items-start">
            {/* =====================================================
                LEFT SIDE
            ====================================================== */}

            <section className="xl:col-span-7">
              <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                {/* Top yellow accent */}
                <div className="absolute left-0 right-0 top-0 h-1.5 bg-[#F9C51C]" />

                {/* Internal decorative glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F9C51C]/10 blur-3xl" />

                <div className="relative p-5 sm:p-7 lg:p-9">
                  {/* Section heading */}
                  <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <IoLeafOutline
                          className="text-[#00864A]"
                          size={18}
                        />
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#00864A]">
                          Order Details
                        </span>
                      </div>

                      <h2 className="text-xl font-extrabold text-[#151515] sm:text-2xl">
                        Checkout Information
                      </h2>

                      <p className="mt-1 text-sm text-[#52606D]">
                        Complete each section to continue with your order.
                      </p>
                    </div>

                    <div className="rounded-full bg-[#FFF4D0] px-4 py-2 text-xs font-bold text-[#8A6800]">
                      {completed.length}/3 completed
                    </div>
                  </div>

                  {/* =================================================
                      ACCORDION STEPS
                  ================================================== */}

                  <div className="space-y-4">
                    {steps.map((step) => {
                      const isActive = activeStep === step.id;
                      const isCompleted = completed.includes(step.id);
                      const StepIcon = step.icon;

                      return (
                        <div
                          key={step.id}
                          className={`relative overflow-hidden rounded-[24px] border transition-all duration-300 ${
                            isActive
                              ? "border-[#00864A]/25 bg-[#FFFDF7] shadow-[0_14px_40px_rgba(0,134,74,0.08)]"
                              : isCompleted
                                ? "border-[#00864A]/15 bg-white"
                                : "border-[#E7E7DF] bg-[#FAFAF6]"
                          }`}
                        >
                          {/* Active yellow accent */}
                          {isActive && (
                            <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F9C51C]" />
                          )}

                          {/* =========================================
                              STEP HEADER
                          ========================================== */}

                          <button
                            type="button"
                            onClick={() => toggleStep(step.id)}
                            className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                          >
                            <div className="flex min-w-0 items-center gap-4">
                              {/* Step number / check */}
                              <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all ${
                                  isCompleted
                                    ? "bg-[#00864A] text-white shadow-[0_8px_20px_rgba(0,134,74,0.18)]"
                                    : isActive
                                      ? "bg-[#FFF4D0] text-[#00864A]"
                                      : "bg-[#F1F1EB] text-[#A0A59F]"
                                }`}
                              >
                                {isCompleted ? (
                                  <IoCheckmarkCircle size={25} />
                                ) : (
                                  <StepIcon size={23} />
                                )}
                              </div>

                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#00864A]">
                                    STEP {step.id}
                                  </span>

                                  {isCompleted && (
                                    <span className="rounded-full bg-[#EAF5EC] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#00864A]">
                                      Completed
                                    </span>
                                  )}
                                </div>

                                <h3 className="mt-1 text-sm font-extrabold text-[#151515] sm:text-base">
                                  {step.title}
                                </h3>

                                {!isCompleted && (
                                  <p className="mt-1 hidden text-xs text-[#6B7280] sm:block">
                                    {step.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Chevron */}
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                                isActive
                                  ? "bg-[#EAF5EC] text-[#00864A]"
                                  : "bg-[#F2F2EC] text-[#6B7280]"
                              }`}
                            >
                              {isActive ? (
                                <IoChevronUp size={18} />
                              ) : (
                                <IoChevronDown size={18} />
                              )}
                            </div>
                          </button>

                          {/* =========================================
                              ACTIVE STEP CONTENT
                          ========================================== */}

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="border-t border-[#E7E7DF] px-5 pb-6 pt-5 sm:px-6">
                                  {step.id === 1 && (
                                    <CheckoutForm
                                      onSubmit={(value) =>
                                        completeStep(1, value)
                                      }
                                    />
                                  )}

                                  {step.id === 2 && (
                                    <ShippingMethod
                                      shippingMethod={shippingMethod}
                                      setShippingMethod={setShippingMethod}
                                      onSubmit={(value) =>
                                        completeStep(2, value)
                                      }
                                    />
                                  )}

                                  {step.id === 3 && (
                                    <PaymentMethod
                                      onSubmit={(value) =>
                                        completeStep(3, value)
                                      }
                                    />
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* =========================================
                              COMPLETED SUMMARY
                          ========================================== */}

                          {isCompleted && !isActive && (
                            <div className="border-t border-[#E7E7DF] bg-[#FAFCF8] px-5 py-4 sm:px-6">
                              <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0 text-sm">
                                  {step.id === 1 && addressData && (
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <IoLocationOutline
                                          className="shrink-0 text-[#00864A]"
                                          size={17}
                                        />
                                        <p className="font-bold text-[#151515]">
                                          {addressData.firstName}{" "}
                                          {addressData.lastName}
                                        </p>
                                      </div>

                                      <p className="mt-1 truncate pl-6 text-xs text-[#6B7280]">
                                        {addressData.address}
                                      </p>
                                    </div>
                                  )}

                                  {step.id === 2 && deliveryData && (
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <IoCarOutline
                                          className="shrink-0 text-[#00864A]"
                                          size={17}
                                        />
                                        <p className="font-bold capitalize text-[#151515]">
                                          {deliveryData.method} Shipping
                                        </p>
                                      </div>

                                      <p className="mt-1 pl-6 text-xs text-[#6B7280]">
                                        ${deliveryData.price}
                                      </p>
                                    </div>
                                  )}

                                  {step.id === 3 && paymentData && (
                                    <div className="flex items-center gap-2">
                                      <IoCardOutline
                                        className="text-[#00864A]"
                                        size={17}
                                      />
                                      <p className="font-bold text-[#151515]">
                                        Card Payment
                                      </p>
                                    </div>
                                  )}
                                </div>

                                <button
                                  type="button"
                                  className="shrink-0 rounded-full bg-[#EAF5EC] px-4 py-2 text-xs font-bold text-[#00864A] transition-all hover:bg-[#00864A] hover:text-white"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    reopenStep(step.id);
                                  }}
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom reassurance */}
                  <div className="mt-7 flex items-start gap-3 rounded-[20px] border border-[#F9C51C]/25 bg-[#FFF9E7] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F9C51C]/25 text-[#8A6800]">
                      <IoShieldCheckmarkOutline size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#151515]">
                        Your checkout is protected
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                        We keep your personal and payment information secure
                        throughout the checkout process.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Green bottom accent */}
                <div className="h-1.5 bg-[#00864A]" />
              </div>
            </section>

            {/* =====================================================
                RIGHT SIDE — ORDER SUMMARY
            ====================================================== */}

            <aside className="xl:col-span-5">
              <div className="xl:sticky xl:top-8">
                <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                  {/* Decorative background */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F9C51C]/14 blur-3xl" />

                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#00864A]/10 blur-3xl" />

                  {/* Header */}
                  <div className="relative border-b border-[#EAEAE2] p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#F47C20]" />
                          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#00864A]">
                            Your Basket
                          </span>
                        </div>

                        <h2 className="text-xl font-extrabold text-[#151515] sm:text-2xl">
                          Order Summary
                        </h2>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF4D0] text-[#00864A]">
                        <IoLeafOutline size={22} />
                      </div>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#52606D]">
                      Review your groceries and delivery details before
                      completing your purchase.
                    </p>
                  </div>

                  {/* Existing order summary */}
                  <div className="relative p-5 sm:p-7">
                    <OrderSummary shippingMethod={shippingMethod} />
                  </div>

                  {/* Trust cards */}
                  <div className="border-t border-[#EAEAE2] bg-[#FAFCF8] p-5 sm:p-7">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#00864A]/10 bg-white p-4">
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF5EC] text-[#00864A]">
                          <IoCheckmarkCircle size={19} />
                        </div>

                        <p className="text-xs font-bold text-[#151515]">
                          Fresh Groceries
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-[#6B7280]">
                          Carefully prepared for delivery.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#F9C51C]/20 bg-white p-4">
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4D0] text-[#8A6800]">
                          <IoShieldCheckmarkOutline size={19} />
                        </div>

                        <p className="text-xs font-bold text-[#151515]">
                          Secure Payment
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-[#6B7280]">
                          Your payment details stay protected.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Yellow accent */}
                  <div className="h-1.5 bg-[#F9C51C]" />
                </div>
              </div>
            </aside>
          </div>

          {/* =======================================================
              BOTTOM BRAND MESSAGE
          ======================================================== */}

          <div className="mt-8 rounded-[28px] border border-[#00864A]/10 bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.05)] sm:p-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF5EC] text-[#00864A]">
                  <IoLeafOutline size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#151515]">
                    From our basket to your table
                  </p>

                  <p className="text-xs text-[#6B7280]">
                    Quality African groceries, delivered with care.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#FFF4D0] px-4 py-2 text-xs font-bold text-[#8A6800]">
                <IoSparklesOutline size={15} />
                Thank you for shopping with us
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}