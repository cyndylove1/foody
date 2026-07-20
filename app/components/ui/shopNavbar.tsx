"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoIosList } from "react-icons/io";
import { Search, Heart, Menu as MenuIcon, ShoppingCart, X } from "lucide-react";
import Logo from "../logo";
import MenuList from "./menuList";
import LoggedInButton from "../LoggedInButton";
import { useAuth } from "@/app/hooks/useAuth";
import { useCart } from "../../context/cartContext";
import { useProfile } from "@/app/hooks/useProfile";

export default function ShopNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { itemCount } = useCart();
  const { logout } = useAuth();
  const { data: user } = useProfile();

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full bg-[#fff1e1]/60 border-b border-stone-100 py-4 px-4 md:px-12 flex items-center justify-between relative z-40">
        <div className="flex items-center gap-3 select-none shrink-0">
          {/* Drawer Trigger icon*/}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open categories menu"
            className="w-12 h-12 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all md:hidden shadow-xs active:scale-95"
          >
            <IoIosList className="w-6 h-6 stroke-[1.75]" />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>
        </div>

        {/*Input Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <div className="relative w-full flex items-center">
            <Search className="absolute left-5 w-5 h-5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white border border-stone-200/80 text-stone-800 placeholder-stone-400 text-[15px] pl-13 pr-6 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-all duration-150 shadow-xs"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-5 shrink-0 relative">
          {/* Favorites icon*/}
          <button
            type="button"
            aria-label="View favorites"
            className="w-12 h-12 rounded-full hidden bg-white border border-stone-100 md:flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all shadow-xs active:scale-95"
          >
            <Heart className="w-5 h-5 stroke-[1.75]" />
          </button>
          {/* Search Toggle Button */}
          <button
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 transition-colors md:hidden ${
              isSearchOpen
                ? "text-(--main)"
                : "text-[#2C2C2C] hover:text-(--main)"
            }`}
          >
            <Search size={20} strokeWidth={2.5} />
          </button>

          {/* Cart icon */}
          <Link href="/cart">
            <button
              aria-label="Cart"
              className="w-12 h-12 rounded-full bg-white border border-stone-100 flex items-center justify-center text-[#2C2C2C] hover:text-[#EA4D32] transition-all shadow-xs active:scale-95 relative"
            >
              <ShoppingCart size={20} strokeWidth={2} />
              {mounted && itemCount > 0 && (
                <span className="absolute top-2 right-2 w-4 h-4 bg-[#F5A623] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </Link>

          {/* Side Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              className={`w-12 h-12 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all shadow-xs active:scale-95 ${
                isOpen ? "ring-2 ring-stone-200" : ""
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[1.75]" />
              ) : (
                <MenuIcon className="w-5 h-5 stroke-[1.75]" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl border border-stone-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-5 px-6 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {mounted && user ? (
                  <>
                    <div className="flex items-center gap-3 py-1.5">
                      {/* Disabled dropdown functionality here safely */}
                      <LoggedInButton disableDropdown={true} />
                      <span className="text-[15px] font-semibold text-stone-800 truncate">
                        Hi, {user.first_name || "User"}
                      </span>
                    </div>
                    <hr className="border-t border-gray-200 my-2" />
                  </>
                ) : (
                  <>
                    <Link
                      href="/sign-up"
                      className="text-[17px] text-stone-900 font-normal py-2.5 hover:text-(--main) transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign up
                    </Link>
                    <Link
                      href="/login"
                      className="text-[17px] text-stone-900 font-normal py-2.5 hover:text-(--main) transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Log in
                    </Link>
                    <hr className="border-t border-stone-100 my-2" />
                  </>
                )}

                <Link
                  href="/profile"
                  className="text-[15px] text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/categories"
                  className="text-[15px] text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  className="text-[15px] text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </Link>
                <Link
                  href="/help"
                  className="text-[15px] text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Help
                </Link>

                {mounted && user && (
                  <>
                    <hr className="border-t border-gray-200 my-2" />
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        logout();
                      }}
                      className="text-[17px] font-medium text-red-500 text-left py-2 hover:font-semibold transition-all"
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
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
      </header>

      {/* Category Sidebar*/}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />

          <div className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out animate-in slide-in-from-left">
            <div className="flex items-center justify-between px-4">
              <Logo />
              <div className="flex items-center justify-end p-4 border-b border-stone-100 sticky top-0 bg-white z-10">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 hover:text-black hover:bg-stone-50 transition-colors"
                  aria-label="Close categories menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <MenuList />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
