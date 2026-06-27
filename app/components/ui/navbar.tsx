"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../logo";
import Link from "next/link";
import Button from "../button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative bg-transparent z-50">
      <div className="px-4 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-[#4A4A4A] text-sm absolute left-1/2 -translate-x-1/2 h-full">
          <Link
            href="/"
            className={`relative py-2 transition-colors hover:text-(--main) ${
              isActive("/") ? "text-(--main) font-semibold" : ""
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-(--main) rounded-full animate-in fade-in duration-200" />
            )}
          </Link>

          <Link
            href="/categories"
            className={`relative py-2 transition-colors hover:text-(--main) ${
              isActive("/categories") ? "text-(--main) font-semibold" : ""
            }`}
          >
            Shop
            {isActive("/categories") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-(--main) rounded-full animate-in fade-in duration-200" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`relative py-2 transition-colors hover:text-(--main) ${
              isActive("/contact") ? "text-(--main) font-semibold" : ""
            }`}
          >
            Contact Us
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-(--main) rounded-full animate-in fade-in duration-200" />
            )}
          </Link>

          <Link
            href="/help"
            className={`relative py-2 transition-colors hover:text-(--main) ${
              isActive("/help") ? "text-(--main) font-semibold" : ""
            }`}
          >
            Help
            {isActive("/help") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-(--main) rounded-full animate-in fade-in duration-200" />
            )}
          </Link>
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Search Toggle Button */}
          <button
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 transition-colors ${
              isSearchOpen
                ? "text-(--main)"
                : "text-[#2C2C2C] hover:text-(--main)"
            }`}
          >
            <Search size={20} strokeWidth={2.5} />
          </button>

          {/* Cart Icon */}
          <Link href="/cart">
            <button
              aria-label="Cart"
              className="p-2 text-[#2C2C2C] hover:text-[#EA4D32] transition-colors relative"
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#F5A623] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button variant="primary">Sign in</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white hover:bg-gray-200 text-black transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2.5} />
            ) : (
              <Menu size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Dynamic Search Input Row */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-3 shadow-md animate-in slide-in-from-top-2 duration-200">
          <div className="relative max-w-3xl">
            <input
              type="text"
              placeholder="Search items, categories, brands..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-300"
              autoFocus
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu Card */}
      {isMenuOpen && (
        <div className="absolute right-6 top-[75px] w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col gap-4 text-left z-50 animate-in fade-in zoom-in-95 duration-150">
          <Link
            href="/sign-up"
            className="text-[15px] font-medium text-[#2C2C2C] hover:text-(--main)"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="text-[15px] font-medium text-[#2C2C2C] hover:text-(--main)"
            onClick={() => setIsMenuOpen(false)}
          >
            Log in
          </Link>

          <hr className="border-gray-100 my-1" />

          <Link
            href="/categories"
            className={`text-[15px] font-medium hover:text-(--main) ${
              isActive("/categories")
                ? "text-(--main) font-semibold"
                : "text-[#2C2C2C]"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`text-[15px] font-medium hover:text-(--main) ${
              isActive("/contact")
                ? "text-(--main) font-semibold"
                : "text-[#2C2C2C]"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
          <Link
            href="/help"
            className={`text-[15px] font-medium hover:text-(--main) ${
              isActive("/help")
                ? "text-(--main) font-semibold"
                : "text-[#2C2C2C]"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Help
          </Link>
        </div>
      )}
    </header>
  );
}
