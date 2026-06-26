import MenuList from "@/app/components/ui/menuList";
import ProductCard from "@/app/components/ui/productCard";
import { LayoutGrid, List } from "lucide-react";
import Footer from "../components/ui/footer";
import ShopNavbar from "../components/ui/shopNavbar";
import Link from "next/link";

const productsMock = [
  {
    id: "1",
    name: "Scotch Bonnet Pepper",
    imageSrc: "/assets/bonnet.jpg",
    originalPrice: 7.99,
    currentPrice: 5.99,
    colors: [
      { hex: "#dc2626", name: "Red" },
      { hex: "#ea580c", name: "Orange" },
      { hex: "#ca8a04", name: "Yellow" },
    ],
  },
  {
    id: "2",
    name: "Maggi",
    imageSrc: "/assets/maggi.jpg",
    originalPrice: 10.5,
    currentPrice: 8.99,
    colors: [{ hex: "#ca8a04", name: "Gold" }],
  },
  {
    id: "3",
    name: "Poundo Yam Flour",
    imageSrc: "/assets/poundo.jpg",
    originalPrice: 55.0,
    currentPrice: 51.0,
    colors: [{ hex: "#fef08a", name: "Off-White" }],
  },
  {
    id: "4",
    name: "Pap (Ogi)",
    imageSrc: "/assets/pap.jpg",
    originalPrice: 2.5,
    currentPrice: 1.99,
    colors: [{ hex: "#78350f", name: "Brown" }],
  },
];

export default function Category() {
  return (
    <>
      <ShopNavbar />
      <main className="mx-auto px-4 py-8 bg-[#faf8f2] min-h-screen w-full">
        <div className="flex justify-end items-center gap-2 border-b border-gray-200/60 pb-3 mb-6">
          <button
            type="button"
            className="p-1.5 text-gray-800 bg-gray-100 rounded cursor-pointer"
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-1.5 text-gray-300 hover:text-gray-500 rounded cursor-pointer"
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 shrink-0 hidden md:flex">
            <MenuList />
          </div>

          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {productsMock.map((prod) => (
                // 2. Wrap item with a clear unique href matching your folder structure
                <Link
                  href={`/product/${prod.id}`}
                  key={prod.id}
                  className="block transition-transform duration-200 hover:-translate-y-1"
                >
                  <ProductCard
                    id={prod.id}
                    name={prod.name}
                    imageSrc={prod.imageSrc}
                    originalPrice={prod.originalPrice}
                    currentPrice={prod.currentPrice}
                    colors={prod.colors}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
