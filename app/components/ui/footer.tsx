"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import Logo from "../logo";

// Defined structured navigation dataset for social layout
const socialLinks = [
  {
    id: "twitter",
    icon: <FaTwitter className="w-4 h-4" />,
    href: "#",
    label: "Twitter",
  },
  {
    id: "facebook",
    icon: <FaFacebookF className="w-4 h-4" />,
    href: "#",
    label: "Facebook",
  },
  {
    id: "instagram",
    icon: <FaInstagram className="w-4 h-4" />,
    href: "#",
    label: "Instagram",
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    href: "#",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#fff1e1] text-[#d6cdb7] overflow-hidden py-16 px-4 md:px-12 border-t border-gray-300">
      {/* Decorative Background Graphic matching footer3.PNG */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-10 translate-x-12 translate-y-12">
        <svg
          width="440"
          height="400"
          viewBox="0 0 440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-stone-800"
        >
          <path
            d="M220 0C341.503 0 440 98.4974 440 220C440 341.503 341.503 440 220 440C98.4974 440 0 341.503 0 220"
            stroke="currentColor"
            strokeWidth="70"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Left Column: Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Logo */}
            <Logo />

            {/* Brand Mission Description */}
            <p className="text-[14px] leading-relaxed max-w-sm text-gray-900">
              We specialize in sourcing and providing high-quality, authentic
              African ingredients, pantry staples, and spices that bring the
              unique flavors and culture of home straight to your kitchen.
            </p>

            {/* Newsletter Subscription Block */}
            <div className="space-y-3 pt-2">
              <h4 className="text-(--main) text-lg font-medium tracking-wide">
                Subscribe to Newsletter
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center w-full max-w-md bg-white border border-(--main) p-1.5 rounded-2xl"
              >
                <div className="flex items-center pl-3 flex-1 min-w-0">
                  <Mail className="w-5 h-5 text-[#8c7e6c] shrink-0" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-sm pl-2.5 text-gray-900 placeholder-[#706352] focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black hover:bg-black/80 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Navigation link categories */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Categories Links */}
            <div className="space-y-4">
              <h4 className="text-(--main) text-xl font-medium tracking-wide">
                Categories
              </h4>
              <ul className="space-y-2.5 text-[14px] text-gray-900">
                {[
                  "Seasoning",
                  "Spices",
                  "Food Items",
                  "Grocery",
                  "Beauty",
                  "Frozen Foods",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-(--main) transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-(--main) text-xl font-medium tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2.5 text-[14px] text-gray-900">
                {["Privacy Policy", "Term and Condition", "Refund Policy"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-(--main) transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Help Links */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-(--main) text-xl font-medium tracking-wide">
                Help
              </h4>
              <ul className="space-y-2.5 text-[14px] text-gray-900">
                {/* Added missing wrapping evaluation braces here */}
                {[
                  "How To Order",
                  "Track Order",
                  "Return & Exchanges",
                  "FAQ",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-(--main) transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Social Row */}
        <div className="border-t border-stone-300 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-gray-900 text-center sm:text-left order-2 sm:order-1">
            © 2026 Copyright by Foody. All Right Reserved
          </p>

          {/* Social Pill Links containing React Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="hover:bg-(--main) bg-[#362719] border border-[#332518] text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
