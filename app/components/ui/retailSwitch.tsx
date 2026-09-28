"use client";

import {
  ArrowRight,
  CheckCircle2,
  Package,
  BadgePercent,
  TrendingDown,
  Store,
} from "lucide-react";
import Button from "../button";
import Link from "next/link";

export default function RetailSwitch() {
  return (
    <section className="relative my-20 overflow-hidden">

      {/* ========================================================= */}
      {/* MAIN CONTAINER — SAME WIDTH/SPACING AS CTA */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-[#FFFDF7]">

          {/* ========================================================= */}
          {/* BACKGROUND DECORATIONS */}
          {/* ========================================================= */}

          {/* Soft yellow glow */}
          <div className="absolute -top-32 right-[25%] h-80 w-80 rounded-full bg-[#F9C51C]/15 blur-3xl" />

          {/* Soft green glow */}
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#00864A]/10 blur-3xl" />

          {/* Orange glow */}
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#F47C20]/10 blur-3xl" />

          {/* Small yellow dots */}
          <div className="absolute left-[8%] top-12 hidden h-4 w-4 rounded-full bg-[#F9C51C] md:block" />

          <div className="absolute left-[11%] top-20 hidden h-2.5 w-2.5 rounded-full bg-[#F47C20]/60 md:block" />

          {/* Decorative green square */}
          <div className="absolute bottom-12 left-[5%] hidden h-14 w-14 rotate-12 rounded-2xl bg-[#00864A]/5 md:block" />

          {/* ========================================================= */}
          {/* MAIN CONTENT */}
          {/* ========================================================= */}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

            {/* ===================================================== */}
            {/* LEFT CONTENT */}
            {/* ===================================================== */}

            <div className="lg:col-span-7 px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F9C51C]/30 bg-[#FFF4D0] px-4 py-2 text-sm font-bold text-[#151515]">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F9C51C]">
                  <Store className="h-4 w-4 text-[#151515]" />
                </span>

                Ready to Buy in Bulk?

              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-3xl text-[38px] font-black leading-[0.98] tracking-[-0.04em] text-[#151515] sm:text-[50px] lg:text-[58px]">

                Turn Bigger Orders Into

                <span className="block text-[#00864A]">
                  Bigger Savings.
                </span>

              </h2>

              {/* Yellow accent */}
              <div className="relative mt-6 h-3 w-40">

                <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />

              </div>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#52606D] sm:text-lg">

                If you are buying for a restaurant, shop, family, reseller, or
                other business needs, our wholesale store gives you access to
                larger quantities and better pricing.

              </p>

              {/* ===================================================== */}
              {/* BENEFITS */}
              {/* ===================================================== */}

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">

                {/* Benefit 1 */}
                <div className="group rounded-[22px] border border-[#00864A]/10 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,134,74,0.12)]">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF5EC]">
                    <BadgePercent className="h-5 w-5 text-[#00864A]" />
                  </div>

                  <p className="mt-3 text-sm font-black text-[#151515]">
                    Better Prices
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#52606D]">
                    Save more on larger orders
                  </p>

                </div>

                {/* Benefit 2 */}
                <div className="group rounded-[22px] border border-[#F9C51C]/20 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(249,197,28,0.14)]">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF4D0]">
                    <Package className="h-5 w-5 text-[#D69E00]" />
                  </div>

                  <p className="mt-3 text-sm font-black text-[#151515]">
                    Bulk Quantities
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#52606D]">
                    Stock up on your essentials
                  </p>

                </div>

                {/* Benefit 3 */}
                <div className="group rounded-[22px] border border-[#F47C20]/15 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(244,124,32,0.12)]">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0E6]">
                    <CheckCircle2 className="h-5 w-5 text-[#F47C20]" />
                  </div>

                  <p className="mt-3 text-sm font-black text-[#151515]">
                    Exclusive Deals
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#52606D]">
                    Wholesale-friendly offers
                  </p>

                </div>

              </div>

              {/* ===================================================== */}
              {/* CTA */}
              {/* ===================================================== */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

                <Link href="/wholesale">
                  <Button
                    variant="primary"
                    className="!flex !items-center !justify-center !gap-3 !bg-[#00864A] !px-7 !py-3 !text-white shadow-lg shadow-[#00864A]/20 hover:!bg-[#006F3D]"
                  >
                    Switch to Wholesale

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>

                <p className="text-sm text-[#52606D]">
                  Perfect for restaurants, stores, resellers & large families.
                </p>

              </div>

            </div>

            {/* ===================================================== */}
            {/* RIGHT VISUAL PANEL */}
            {/* ===================================================== */}

            <div className="relative min-h-[430px] overflow-hidden bg-[#00864A] px-6 py-12 sm:min-h-[480px] sm:px-10 lg:col-span-5 lg:min-h-full lg:px-8">

              {/* ================================================= */}
              {/* PANEL DECORATIONS */}
              {/* ================================================= */}

              {/* Yellow circle */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F9C51C]" />

              {/* Orange circle */}
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#F47C20]/90" />

              {/* Light green ring */}
              <div className="absolute right-[-60px] top-[35%] h-52 w-52 rounded-full border-[18px] border-white/10" />

              {/* Small yellow square */}
              <div className="absolute bottom-[22%] right-[15%] h-5 w-5 rotate-12 rounded-md bg-[#FFD84D]" />

              {/* ================================================= */}
              {/* PANEL CONTENT */}
              {/* ================================================= */}

              <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-center">

                {/* Small label */}
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">

                  <span className="h-2.5 w-2.5 rounded-full bg-[#F9C51C]" />

                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Wholesale Store
                  </span>

                </div>

                {/* Main visual text */}
                <h3 className="max-w-sm text-4xl font-black leading-[1] tracking-[-0.03em] text-white sm:text-5xl">

                  More Goods.

                  <span className="block text-[#FFD84D]">
                    Less Cost.
                  </span>

                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
                  Get more of the African groceries you love while making your
                  money go further.
                </p>

                {/* ================================================= */}
                {/* SAVINGS CARD */}
                {/* ================================================= */}

                <div className="relative mt-8 max-w-sm">

                  <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#52606D]">
                          Wholesale Advantage
                        </p>

                        <p className="mt-1 text-2xl font-black text-[#151515]">
                          Buy More
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4D0]">
                        <TrendingDown className="h-6 w-6 text-[#D69E00]" />
                      </div>

                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gray-100" />

                    {/* Mini stats */}
                    <div className="grid grid-cols-2 gap-3">

                      <div className="rounded-2xl bg-[#EAF5EC] p-3">

                        <p className="text-xs font-bold text-[#00864A]">
                          Bulk Orders
                        </p>

                        <p className="mt-1 text-[11px] text-[#52606D]">
                          Larger quantities
                        </p>

                      </div>

                      <div className="rounded-2xl bg-[#FFF0E6] p-3">

                        <p className="text-xs font-bold text-[#F47C20]">
                          Better Value
                        </p>

                        <p className="mt-1 text-[11px] text-[#52606D]">
                          More savings
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Floating savings badge */}
                  <div className="absolute -right-3 -top-5 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-[5px] border-white bg-[#F9C51C] shadow-xl">

                    <div className="text-center">

                      <p className="text-[9px] font-black uppercase tracking-wide text-[#151515]">
                        Save
                      </p>

                      <p className="text-xl font-black leading-none text-[#151515]">
                        More
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* BOTTOM ACCENT */}
          {/* ========================================================= */}

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

        </div>

      </div>

    </section>
  );
}