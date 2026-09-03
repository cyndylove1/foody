"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoIosList } from "react-icons/io";
import {
  Search,
  Heart,
  Menu as MenuIcon,
  ShoppingCart,
  X,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Logo from "../logo";
import MenuList from "./menuList";
import LoggedInButton from "../LoggedInButton";
import { useAuth } from "@/app/hooks/useAuth";
import { useCart } from "../../context/cartContext";
import { useProfile } from "@/app/hooks/useProfile";
import { useWishlist } from "@/app/hooks/useWishList";
import { useSearch } from "@/app/hooks/useSearchProduts";

export default function ShopNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Search State & Debouncing
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const { itemCount } = useCart();
  const { logout } = useAuth();
  const { data: user } = useProfile();
  const { wishlistCount } = useWishlist();

  // Trigger search with React Query
  const { data: searchResults, isLoading: isSearching } = useSearch(
    { keyword: debouncedQuery, per_page: 5 },
    debouncedQuery.trim().length > 0,
  );

  const showMenuList = pathname.startsWith("/category/");

  // Handle Debounce for live search feedback
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setShowDropdown(false);
    setIsSearchOpen(false);
    router.push(
      `/category/all?keyword=${encodeURIComponent(searchTerm.trim())}`,
    );
  };

  return (
    <>
      <header
        className={`w-full bg-white border-b border-gray-200 px-4 lg:px-8 flex items-center justify-between relative z-40 transition-all duration-200 ${
          isSearchOpen ? "pt-20" : "py-4"
        }`}
      >
        <div className="flex items-center gap-3 select-none shrink-0">
          {showMenuList && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open categories menu"
              className="md:w-12 md:h-12 rounded-full bg-white md:border border-gray-200 flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all md:hidden shadow-xs active:scale-95"
            >
              <IoIosList className="w-6 h-6 stroke-[1.75]" />
            </button>
          )}

          <div className="flex items-center">
            <Logo />
          </div>
        </div>

        {/* Input Search Bar - Desktop */}
        <div
          className="flex-1 max-w-2xl mx-8 hidden md:block relative"
          ref={searchRef}
        >
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full flex items-center"
          >
            <Search className="absolute left-5 md:w-5 md:h-5 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search products name..."
              className="w-full bg-white border border-gray-200 text-stone-800 placeholder-stone-400 text-[15px] pl-13 pr-10 py-3.5 rounded-2xl focus:outline-none focus:border-stone-400/60 transition-all duration-150"
            />
            {isSearching && (
              <Loader2 className="absolute right-4 w-4 h-4 text-stone-400 animate-spin" />
            )}
          </form>

          {/* Live Search Preview Dropdown */}
          {showDropdown && debouncedQuery.trim() !== "" && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl z-50 overflow-hidden max-h-96 overflow-y-auto">
              {isSearching ? (
                <div className="p-4 text-center text-stone-500 text-sm flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Loading
                  products...
                </div>
              ) : searchResults?.data && searchResults.data.length > 0 ? (
                <div className="p-2 space-y-1">
                  {searchResults.data.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-colors"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                        {product.image && (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-stone-800 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs font-bold text-stone-900">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <button
                    onClick={handleSearchSubmit}
                    className="w-full text-center py-2.5 text-xs font-semibold text-(--main) hover:bg-stone-50 rounded-xl transition-colors border-t border-stone-100"
                  >
                    View all results for &quot;{debouncedQuery}&quot;
                  </button>
                </div>
              ) : (
                <div className="p-4 text-center text-stone-500 text-sm">
                  No products found for &quot;{debouncedQuery}&quot;
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 md:space-x-5 shrink-0 relative">
          <Link href="/wishlist">
            <button
              type="button"
              aria-label="View favorites"
              className="w-12 h-12 rounded-full hidden bg-white border border-gray-200 md:flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all active:scale-95 relative"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {mounted && wishlistCount > 0 && (
                <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
          </Link>

          <button
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 md:hidden transition-colors ${
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
              className="md:w-12 md:h-12 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#2C2C2C] hover:text-[#016738] transition-all shadow-xs active:scale-95 relative"
            >
              <ShoppingCart className="w-6 h-6" strokeWidth={2} />
              {mounted && itemCount > 0 && (
                <span className="absolute md:top-2 top-0 md:right-2 right-0 w-4 h-4 bg-[#F5A623] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              className={`md:w-12 md:h-12 w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-800 hover:bg-stone-50 transition-all shadow-xs active:scale-95 ${
                isOpen ? "ring-2 ring-stone-200" : ""
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[1.75]" />
              ) : (
                <MenuIcon className="w-5 h-5 stroke-[1.75]" />
              )}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl border border-stone-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-5 px-6 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {mounted && user ? (
                  <>
                    <div className="flex items-center gap-3 py-1.5">
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
                      href="/user-type"
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
                  href="/category/seasonings"
                  className="text-[15px] text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/wishlist"
                  className="text-[15px] md:hidden text-[#2C2C2C] font-medium py-2.5 hover:text-(--main) transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  WishList
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

        {/* Mobile Search Expanded Overlay Bar */}
        {isSearchOpen && (
          <div className="absolute md:hidden top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-3 shadow-md animate-in slide-in-from-top-2 duration-200 z-50">
            <form onSubmit={handleSearchSubmit} className="relative max-w-3xl">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products name..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-300"
                autoFocus
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </form>
          </div>
        )}
      </header>

      {showMenuList && isSidebarOpen && (
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
