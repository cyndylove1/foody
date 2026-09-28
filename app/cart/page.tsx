"use client";

import Image from "next/image";
import { LuShoppingBasket } from "react-icons/lu";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";
import Footer from "../components/ui/footer";
import Quantity from "../components/quantitiy";
import { Trash2, ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";
import SummaryTotals from "../components/summaryTotal";
import { useCart } from "../context/cartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const {
    cart,
    cartItems,
    isLoading,
    isUpdating,
    isRemoving,
    removeItem,
    updateQuantity,
  } = useCart();

  const router = useRouter();

  return (
    <>
      <ShopNavbar />

      <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">
        {/* =====================================================
            BACKGROUND DECORATIONS
        ====================================================== */}

        {/* Yellow glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/16 blur-3xl" />

        {/* Green glow */}
        <div className="pointer-events-none absolute -right-40 top-[20%] h-[520px] w-[520px] rounded-full bg-[#00864A]/10 blur-3xl" />

        {/* Orange glow */}
        <div className="pointer-events-none absolute bottom-[-180px] left-[30%] h-[500px] w-[500px] rounded-full bg-[#F47C20]/12 blur-3xl" />

        {/* Yellow shape */}
        <div className="pointer-events-none absolute right-[12%] top-[15%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/25 lg:block" />

        {/* Green ring */}
        <div className="pointer-events-none absolute bottom-[18%] left-[3%] hidden h-32 w-32 rounded-full border-[16px] border-[#00864A]/8 lg:block" />

        {/* Orange circle */}
        <div className="pointer-events-none absolute bottom-[10%] right-[7%] hidden h-24 w-24 rounded-full bg-[#F47C20]/10 lg:block" />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-[10rem] md:px-10 md:py-[10rem] lg:px-12 lg:py-42">
          {/* =================================================
              TOP HEADER
          ================================================== */}

          <div className="mb-8">
            <button
              type="button"
              onClick={() => router.back()}
              className="mb-7 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#52606D] transition-colors duration-200 hover:text-[#00864A]"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </button>

            <div className="relative overflow-hidden rounded-[32px] border border-[#00864A]/10 bg-white px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:px-8 sm:py-10 lg:px-10">
              {/* Yellow accent */}
              <div className="absolute left-0 top-0 h-2 w-32 rounded-br-full bg-[#F9C51C]" />

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  {/* Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">
                      <ShoppingBag className="h-3.5 w-3.5 text-[#00864A]" />
                    </span>

                    <span>Your Shopping Basket</span>
                  </div>

                  <h1 className="text-3xl font-black tracking-[-0.04em] text-[#151515] sm:text-4xl lg:text-5xl">
                    Your{" "}
                    <span className="text-[#00864A]">Cart</span>
                  </h1>

                  <div className="relative mt-4 h-4 w-36">
                    <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />
                    <div className="absolute left-10 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#52606D] sm:text-base">
                    Review your groceries, adjust quantities, and get
                    everything ready for checkout.
                  </p>
                </div>

                {/* Cart count */}
                <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-[#FFF4D0] px-5 py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9C51C]">
                    <LuShoppingBasket className="h-5 w-5 text-[#151515]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#52606D]">
                      Items
                    </p>

                    <p className="text-xl font-black text-[#00864A]">
                      {cartItems?.length ?? 0}
                    </p>
                  </div>
                </div>
              </div>

              {/* Green bottom accent */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#00864A]/10" />
            </div>
          </div>

          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12">
            {/* =================================================
                CART ITEMS
            ================================================== */}

            <section className="lg:col-span-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#151515] sm:text-2xl">
                    Cart Items
                  </h2>

                  <p className="mt-1 text-sm text-[#52606D]">
                    Your selected grocery items
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-[#EAF5EC] px-4 py-2 text-xs font-bold text-[#00864A] sm:flex">
                  <Sparkles className="h-4 w-4" />
                  Fresh picks
                </div>
              </div>

              {/* Loading State */}
              {isLoading ? (
                <div className="rounded-[30px] border border-[#00864A]/10 bg-white px-6 py-20 text-center shadow-[0_18px_55px_rgba(0,0,0,0.05)]">
                  <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#EAF5EC] border-t-[#00864A]" />

                  <p className="font-semibold text-[#52606D]">
                    Loading your cart...
                  </p>
                </div>
              ) : cartItems && cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const itemImage =
                      item.product?.thumbnail ||
                      (item.product as any)?.image_url ||
                      "/assets/poundo.jpg";

                    const unitPrice = Number(
                      item.price ??
                        item.product?.effective_price ??
                        item.product?.price ??
                        0,
                    );

                    const subtotal = Number(
                      item.subtotal ?? unitPrice * item.quantity,
                    );

                    return (
                      <article
                        key={item.id}
                        className="group relative overflow-hidden rounded-[28px] border border-[#00864A]/10 bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] sm:p-5"
                      >
                        {/* Yellow top accent */}
                        <div className="absolute left-0 top-0 h-1.5 w-20 rounded-br-full bg-[#F9C51C]" />

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                          {/* Product Image */}
                          <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-[22px] border border-[#00864A]/10 bg-[#FFFDF7] sm:mx-0 sm:h-32 sm:w-32">
                            <Image
                              src={itemImage}
                              alt={item.product?.name ?? "Product image"}
                              fill
                              sizes="128px"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Number badge */}
                            <div className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#F9C51C] text-xs font-black text-[#151515] shadow-sm">
                              {item.quantity}
                            </div>
                          </div>

                          {/* Product Information */}
                          <div className="min-w-0 flex-1">
                            <div className="mb-2 inline-flex rounded-full bg-[#EAF5EC] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00864A]">
                              Grocery item
                            </div>

                            <h3 className="line-clamp-2 text-base font-black text-[#151515] sm:text-lg">
                              {item.product?.name}
                            </h3>

                            <p className="mt-1 text-sm text-[#52606D]">
                              Unit price
                            </p>

                            <p className="mt-1 text-base font-bold text-[#00864A]">
                              {unitPrice.toFixed(2)} $
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                            <div>
                              <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-[#52606D]">
                                Quantity
                              </p>

                              <Quantity
                                className="w-full"
                                value={item.quantity}
                                disabled={isUpdating || isRemoving}
                                onChange={(newQty) =>
                                  updateQuantity(item.id, newQty)
                                }
                              />
                            </div>

                            {/* Remove */}
                            <button
                              type="button"
                              disabled={isRemoving || isUpdating}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeItem(item.id);
                              }}
                              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#FFF0E6] text-[#F47C20] transition-all duration-200 hover:bg-[#F47C20] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4 stroke-[2.2]" />
                            </button>
                          </div>

                          {/* Subtotal */}
                          <div className="border-t border-[#00864A]/10 pt-4 text-left sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 sm:text-right">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#52606D]">
                              Total
                            </p>

                            <div className="mt-2 inline-flex rounded-xl bg-[#FFF4D0] px-3 py-2">
                              <span className="text-base font-black text-[#00864A]">
                                {subtotal.toFixed(2)} $
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                /* =================================================
                   EMPTY CART
                ================================================== */

                <div className="relative overflow-hidden rounded-[32px] border border-[#00864A]/10 bg-white px-6 py-16 text-center shadow-[0_18px_55px_rgba(0,0,0,0.05)] sm:px-10">
                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F9C51C]/20 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF4D0]">
                      <LuShoppingBasket className="h-12 w-12 text-[#00864A] stroke-[1.5]" />
                    </div>

                    <h2 className="mt-6 text-2xl font-black text-[#151515]">
                      Your cart is empty
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#52606D]">
                      Looks like you haven't added any groceries yet.
                      Explore our collection and find something delicious.
                    </p>

                    <div className="mt-7">
                      <Link href="/">
                        <Button
                          variant="primary"
                          className="!rounded-2xl !px-7  !font-bold"
                        >
                          Start Shopping
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Yellow bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
                </div>
              )}

              {/* =================================================
                  CONTINUE SHOPPING
              ================================================== */}

              {cartItems && cartItems.length > 0 && !isLoading && (
                <div className="mt-6 flex flex-col gap-4 rounded-[26px] border border-[#00864A]/10 bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-bold text-[#151515]">
                      Need something else?
                    </p>

                    <p className="mt-1 text-xs text-[#52606D]">
                      Keep exploring our grocery collection.
                    </p>
                  </div>

                  <Link href="/category/utensils">
                    <Button
                      variant="primary"
                      className="w-full !rounded-xl !px-6 sm:w-auto"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              )}
            </section>

            {/* =================================================
                ORDER SUMMARY
            ================================================== */}

            <aside className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-[32px] border border-[#00864A]/10 bg-white shadow-[0_20px_65px_rgba(0,0,0,0.07)]">
                {/* Yellow accent */}
                <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

                <div className="p-5 sm:p-7">
                  <div className="mb-6">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EAF5EC] px-3 py-1.5 text-xs font-bold text-[#00864A]">
                      <span className="h-2 w-2 rounded-full bg-[#F9C51C]" />
                      Order Summary
                    </div>

                    <h2 className="text-2xl font-black text-[#151515]">
                      Your Total
                    </h2>

                    <p className="mt-1 text-sm text-[#52606D]">
                      Review your order before checkout.
                    </p>
                  </div>

                  {/* Existing Summary Component */}
                  <SummaryTotals cart={cart} />
                </div>

                {/* Green bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00864A]" />
              </div>

              {/* Trust card */}
              <div className="mt-5 rounded-[26px] border border-[#00864A]/10 bg-[#EAF5EC] p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00864A]">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="font-black text-[#151515]">
                      Fresh & Reliable
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#52606D]">
                      Your selected groceries are prepared with care for a
                      smooth shopping experience.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom yellow accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
      </main>

      <Footer />
    </>
  );
}