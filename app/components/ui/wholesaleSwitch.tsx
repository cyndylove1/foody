"use client";

import { ArrowRight, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Button from "../button";

export default function WholesaleSwitch() {
  return (
    <section className="relative my-20 overflow-hidden">
      {/* ========================================================= */}
      {/* SAME WIDTH / SPACING STRUCTURE AS CTA */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
        {/* ========================================================= */}
        {/* WHOLESALE SWITCH CARD */}
        {/* ========================================================= */}

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-[#FFFDF7]">
          {/* ========================================================= */}
          {/* BACKGROUND DECORATIONS */}
          {/* ========================================================= */}

          {/* Yellow glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F9C51C]/20 blur-3xl" />

          {/* Green glow */}
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#00864A]/10 blur-3xl" />

          {/* Orange glow */}
          <div className="absolute right-[35%] top-0 h-40 w-40 rounded-full bg-[#F47C20]/10 blur-3xl" />

          {/* Decorative yellow circle */}
          <div className="absolute right-[45%] top-10 hidden h-16 w-16 rounded-full bg-[#F9C51C]/20 md:block" />

          {/* Decorative orange shape */}
          <div className="absolute bottom-10 left-[6%] hidden h-16 w-16 rotate-12 rounded-[35%] bg-[#F47C20]/20 md:block" />

          {/* Green ring */}
          <div className="absolute -right-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border-[28px] border-[#00864A]/5 lg:block" />

          {/* ========================================================= */}
          {/* CONTENT */}
          {/* ========================================================= */}

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-12 lg:px-12 lg:py-16">
            {/* ===================================================== */}
            {/* LEFT CONTENT */}
            {/* ===================================================== */}

            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-semibold text-[#00864A]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F9C51C]" />

                Looking for smaller quantities?
              </div>

              {/* Heading */}
              <h2 className="mt-5 text-[38px] font-black leading-[0.98] tracking-[-0.04em] text-[#151515] sm:text-[48px] lg:text-[58px]">
                Need groceries
                <br />

                <span className="text-[#00864A]">
                  for everyday shopping?
                </span>
              </h2>

              {/* Yellow underline */}
              <div className="relative mt-5 h-3 w-36">
                <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                <div className="absolute left-10 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
              </div>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#52606D] sm:text-lg">
                Not buying in bulk? Our retail shop makes it easy to get the
                African groceries you need without minimum quantities. Shop
                your favorite products and have them delivered conveniently to
                your doorstep.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Benefit 1 */}
                <div className="flex items-center gap-3 rounded-2xl border border-[#00864A]/10 bg-white p-3 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EC]">
                    <ShoppingBag className="h-5 w-5 text-[#00864A]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Buy What You Need
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                      No minimum order
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3 rounded-2xl border border-[#F9C51C]/20 bg-white p-3 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D0]">
                    <Truck className="h-5 w-5 text-[#D69E00]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Convenient Delivery
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                      To your doorstep
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3 rounded-2xl border border-[#F47C20]/15 bg-white p-3 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E6]">
                    <ShieldCheck className="h-5 w-5 text-[#F47C20]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Quality Products
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Trusted groceries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* RIGHT RETAIL CARD */}
            {/* ===================================================== */}

            <div className="relative flex min-h-[360px] items-center justify-center lg:col-span-5">
              {/* Large yellow circle */}
              <div className="absolute h-[270px] w-[270px] rounded-full bg-[#F9C51C] opacity-90 sm:h-[330px] sm:w-[330px]" />

              {/* Inner yellow circle */}
              <div className="absolute h-[220px] w-[220px] rounded-full bg-[#FFD84D]/70 sm:h-[275px] sm:w-[275px]" />

              {/* Green ring */}
              <div className="absolute h-[300px] w-[300px] rounded-full border-[14px] border-[#00864A]/10 sm:h-[370px] sm:w-[370px]" />

              {/* Main card */}
              <div className="relative z-10 w-full max-w-[350px] rounded-[32px] border border-white bg-white p-7 shadow-[0_25px_60px_rgba(0,0,0,0.14)] sm:p-8">
                {/* Card top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#00864A]" />

                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#52606D]">
                      Motherland
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF5EC]">
                    <ShoppingBag className="h-5 w-5 text-[#00864A]" />
                  </div>
                </div>

                {/* Card content */}
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00864A]">
                    Retail Shopping
                  </p>

                  <h3 className="mt-2 text-3xl font-black leading-tight text-[#151515] sm:text-4xl">
                    Shop Small.
                    <br />

                    <span className="text-[#00864A]">
                      Shop Fresh.
                    </span>
                  </h3>

                  {/* Yellow divider */}
                  <div className="relative mt-5 h-3 w-28">
                    <div className="absolute left-0 top-0 h-2 w-20 rounded-full bg-[#F9C51C]" />

                    <div className="absolute left-8 top-3 h-1 w-14 rounded-full bg-[#F9C51C]/50" />
                  </div>

                  <p className="mt-6 text-sm leading-6 text-gray-500">
                    Get your favorite African groceries in the quantities you
                    actually need.
                  </p>

                  {/* CTA */}
                  <Link href="/retail" className="mt-6 block">
                    <Button
                      variant="primary"
                      className="!flex !w-full !items-center !justify-center !gap-2 !bg-[#00864A] !text-white shadow-lg shadow-[#00864A]/20 hover:!bg-[#006F3D]"
                    >
                      Shop Retail
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* ================================================= */}
              {/* FLOATING RETAIL BADGE */}
              {/* ================================================= */}

              <div className="absolute right-0 top-4 z-20 sm:right-2">
                <div className="flex h-24 w-24 rotate-6 items-center justify-center rounded-full border-[7px] border-white bg-[#00864A] shadow-xl sm:h-28 sm:w-28">
                  <div className="text-center text-white">
                    <p className="text-[9px] font-bold uppercase tracking-wider">
                      Retail
                    </p>

                    <p className="mt-1 text-xl font-black leading-none sm:text-2xl">
                      100%
                    </p>

                    <p className="mt-1 text-[9px] font-bold uppercase">
                      Flexible
                    </p>
                  </div>
                </div>
              </div>

              {/* Orange decorative shape */}
              <div className="absolute bottom-16 right-4 hidden h-14 w-14 rotate-12 rounded-[35%] bg-[#F47C20] sm:block" />
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