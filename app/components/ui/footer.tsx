"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Leaf } from "lucide-react";
import Logo from "../logo";
import {
  categoryLinks,
  helpLinks,
  legalLinks,
  socialLinks,
} from "@/app/constant";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FFF9E8] text-[#17352A]">
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      {/* Large soft green circle */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#E5F1E3] opacity-70" />

      {/* Yellow circle */}
      <div className="pointer-events-none absolute -left-24 top-[35%] h-48 w-48 rounded-full bg-[#FFF0A8] opacity-60" />

      {/* Small orange circle */}
      <div className="pointer-events-none absolute right-[8%] bottom-[18%] h-24 w-24 rounded-full bg-[#FF8A1F] opacity-15" />

      {/* Decorative leaf */}
      <div className="pointer-events-none absolute left-[5%] top-28 rotate-[-15deg] text-[#69B82E] opacity-20">
        <Leaf size={80} strokeWidth={1.2} />
      </div>

      {/* =========================================================
          NEWSLETTER / CTA CARD
      ========================================================= */}

     {/* =========================================================
    NEWSLETTER / CTA CARD
========================================================= */}

<div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 md:px-10 lg:px-12">
  <div className="relative overflow-hidden rounded-[36px] border border-[#E6D98B] bg-gradient-to-br from-[#FFF8D9] via-[#FFFDF3] to-[#E8F4E8] px-6 py-10 shadow-[0_20px_60px_rgba(0,100,55,0.10)] sm:px-8 md:px-12 md:py-12 lg:px-16 lg:py-14">

    {/* ================= DECORATIVE SHAPES ================= */}

    {/* Large yellow circle */}
    <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#F8C515]/20" />

    {/* Green circle */}
    <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border-[28px] border-[#008C4A]/10" />

    {/* Orange accent */}
    <div className="pointer-events-none absolute right-[42%] top-[-18px] h-14 w-14 rounded-full bg-[#FF7A18]/15" />

    {/* Decorative leaf */}
    <div className="pointer-events-none absolute bottom-5 right-8 rotate-[-20deg] text-[#008C4A]/15">
      <Leaf size={90} strokeWidth={1.2} />
    </div>

    {/* Small decorative dots */}
    <div className="pointer-events-none absolute left-[38%] top-8 hidden md:flex gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#F8C515]" />
      <span className="h-2 w-2 rounded-full bg-[#008C4A]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A18]" />
    </div>

    {/* ================= CONTENT ================= */}

    <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

      {/* ================= LEFT CONTENT ================= */}

      <div>
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#008C4A]/15 bg-white/80 px-4 py-2 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F8C515]" />

          <span className="text-xs font-extrabold uppercase tracking-wider text-[#008C4A]">
            Fresh From Our Store
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-xl text-3xl font-black leading-[1.08] tracking-tight text-[#17352A] sm:text-4xl lg:text-5xl">
          Stay in the loop with{" "}
          <span className="text-[#008C4A]">fresh African finds.</span>
        </h2>

        {/* Yellow underline */}
        <div className="relative mt-5 h-3 w-36">
          <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F8C515]" />
          <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F8C515]/70" />
        </div>

        {/* Description */}
        <p className="mt-7 max-w-xl text-sm leading-7 text-[#53665D] sm:text-base">
          Be the first to hear about new arrivals, exciting grocery finds,
          special offers and delicious inspiration from MotherLand
          International Foods.
        </p>

        {/* Mini benefits */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-[#52645C] sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#008C4A]" />
            New Arrivals
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F8C515]" />
            Special Offers
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A18]" />
            Store Updates
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER FORM ================= */}

      <div className="relative">

        {/* Form heading */}
        <div className="mb-4">
          <p className="text-sm font-extrabold text-[#17352A]">
            Join our community
          </p>

          <p className="mt-1 text-xs text-[#728078]">
            Get useful updates delivered straight to your inbox.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-[24px] border border-white bg-white/90 p-2 shadow-[0_15px_40px_rgba(23,53,42,0.12)] backdrop-blur-sm"
        >
          <div className="flex flex-col gap-2 sm:flex-row">

            {/* Email */}
            <div className="flex min-w-0 flex-1 items-center rounded-[18px] bg-[#F4F8F1] px-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E2F1E5]">
                <Mail className="h-5 w-5 text-[#008C4A]" />
              </div>

              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 w-full bg-transparent px-3 py-4 text-sm text-[#17352A] outline-none placeholder:text-[#91A099]"
                required
              />
            </div>

            {/* Subscribe */}
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-[18px] bg-[#008C4A] px-6 py-4 text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00763E] hover:shadow-lg"
            >
              Subscribe

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </form>

        {/* Privacy text */}
        <div className="mt-4 flex items-center gap-2 text-xs text-[#78867F]">
          <span className="h-2 w-2 rounded-full bg-[#008C4A]" />
          <span>
            No spam. Just fresh products, offers and African goodness.
          </span>
        </div>

        {/* Decorative mini card */}
        <div className="mt-6 hidden items-center gap-3 rounded-2xl border border-[#E5EBDD] bg-white/70 px-4 py-3 shadow-sm sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
            <Leaf className="h-4 w-4 text-[#008C4A]" />
          </div>

          <div>
            <p className="text-xs font-bold text-[#17352A]">
              Authentic African goodness
            </p>

            <p className="text-[11px] text-[#87938D]">
              Delivered straight to your inbox.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="lg:col-span-5">
            <div className="mb-6">
              <Logo textColor="text-[#1a1a1a]" />
            </div>

            <p className="max-w-md text-sm leading-7 text-[#66756D] md:text-[15px]">
              We specialize in sourcing and providing high-quality, authentic
              African ingredients, pantry staples, spices and everyday
              essentials that bring the unique flavors and culture of home
              straight to your kitchen.
            </p>

            {/* Mini feature pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-[#E6F4E9] px-4 py-2 text-xs font-semibold text-[#008C4A]">
                <span className="h-2 w-2 rounded-full bg-[#008C4A]" />
                Authentic Products
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#FFF4C4] px-4 py-2 text-xs font-semibold text-[#8A6A00]">
                <span className="h-2 w-2 rounded-full bg-[#F8C515]" />
                Quality Guaranteed
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#FFF0E5] px-4 py-2 text-xs font-semibold text-[#D96813]">
                <span className="h-2 w-2 rounded-full bg-[#FF7A18]" />
                Fast Delivery
              </div>
            </div>
          </div>

          {/* =====================================================
              CATEGORIES
          ===================================================== */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-extrabold text-[#17352A]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {categoryLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-[#66756D] transition-colors duration-200 hover:text-[#008C4A]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F8C515] opacity-0 transition-all duration-200 group-hover:opacity-100" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              LEGAL
          ===================================================== */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-extrabold text-[#17352A]">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-[#66756D] transition-colors duration-200 hover:text-[#008C4A]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F8C515] opacity-0 transition-all duration-200 group-hover:opacity-100" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              HELP
          ===================================================== */}

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-lg font-extrabold text-[#17352A]">
              Help & Support
            </h3>

            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-[#66756D] transition-colors duration-200 hover:text-[#008C4A]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F8C515] opacity-0 transition-all duration-200 group-hover:opacity-100" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact card */}
            <div className="mt-7 rounded-2xl border border-[#E3E8DF] bg-white/70 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A968F]">
                Need help?
              </p>

              <p className="mt-1 text-sm font-bold text-[#008C4A]">
                Contact our support team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM GREEN BAR
      ========================================================= */}

      <div className="relative overflow-hidden bg-[#006B3C]">
        {/* Yellow top accent */}
        <div className="absolute left-0 top-0 h-1.5 w-full bg-[#F8C515]" />

        {/* Decorative pattern */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] opacity-10">
          <div className="absolute right-[-80px] top-[-100px] h-80 w-80 rounded-full border-[45px] border-white" />

          <div className="absolute right-[80px] bottom-[-100px] h-64 w-64 rounded-full border-[30px] border-[#F8C515]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-7 md:flex-row md:px-8 lg:px-12">
          {/* Copyright */}
          <p className="text-center text-xs text-white/75 md:text-left">
            © 2026 MotherLand International Foods LLC. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F8C515] hover:bg-[#F8C515] hover:text-[#17352A]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}