"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../logo";
import Link from "next/link";
import Button from "../button";
import LoggedInButton from "../LoggedInButton";
import { useAuth } from "@/app/hooks/useAuth";
import { useCart } from "../../context/cartContext";
import { useProfile } from "@/app/hooks/useProfile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { logout } = useAuth();
  const { itemCount } = useCart();
  const { data: user } = useProfile();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative bg-transparent z-50">
      <div className="px-4 md:px-12 py-5 flex items-center justify-between">
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
            href="/category/seasonings"
            className={`relative py-2 transition-colors hover:text-(--main) ${
              isActive("/category/seasonings") ? "text-(--main) font-semibold" : ""
            }`}
          >
            Shop
            {isActive("/category/seasonings") && (
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
          <Link href="/cart">
            <button
              aria-label="Cart"
              className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#2C2C2C] hover:text-[#EA4D32] transition-all shadow-xs active:scale-95 relative"
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
              {mounted && itemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#F5A623] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </Link>

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && user ? (
              <LoggedInButton />
            ) : mounted && !user ? (
              <>
                <Link href="/login">
                  <Button variant="primary">Sign in</Button>
                </Link>
                <Link href="/user-type">
                  <Button variant="secondary">Sign up</Button>
                </Link>
              </>
            ) : (
              <div className="w-20 h-9" />
            )}
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Search Input Row */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full border-b border-gray-100 px-6 py-3 shadow-md animate-in slide-in-from-top-2 duration-200">
          <div className="relative max-w-3xl">
            <input
              type="text"
              placeholder="Search items, categories, brands..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-300"
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
        <div className="absolute right-6 top-[75px] w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col gap-4 text-left z-50 animate-in fade-in zoom-in-95 duration-150 lg:hidden">
          {mounted && user ? (
            <>
              <div className="flex items-center gap-3 px-1 py-1">
                <LoggedInButton disableDropdown />
                <span className="text-[15px] font-semibold text-stone-800 truncate">
                  Hi, {user.first_name || "User"}
                </span>
              </div>
              <hr className="border-gray-100 my-1" />
            </>
          ) : (
            <>
              <Link
                href="/user-type"
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
            </>
          )}

          <Link
            href="/profile"
            className={`text-[15px] font-medium hover:text-(--main) ${
              isActive("/profile")
                ? "text-(--main) font-semibold"
                : "text-[#2C2C2C]"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            href="/category/seasonings"
            className={`text-[15px] font-medium hover:text-(--main) ${
              isActive("/category/seasonings")
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

          {mounted && user && (
            <>
              <hr className="border-gray-100 my-1" />
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  logout();
                }}
                className="text-[15px] font-medium text-red-500 text-left hover:font-semibold transition-all"
              >
                Log out
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
