import Image from "next/image";
import Link from "next/link"; 

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Spinach", image: "/assets/spinach.jpg" },
  { id: 2, name: "Frozen Fish", image: "/assets/fish.jpg" },
  { id: 3, name: "Noodles (Indomie)", image: "/assets/indomie.jpg" },
  { id: 4, name: "Black Soap", image: "/assets/dudu.jpg" },
  { id: 5, name: "turning Stick", image: "/assets/stick.jpg" },
  { id: 6, name: "pepper", image: "/assets/pepper.jpg" },
  { id: 7, name: "Egusi (melon)", image: "/assets/egusi.jpg" },
  { id: 8, name: "Ogi (pap)", image: "/assets/pap.jpg" },
];

export default function TrendingProduct() {
  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="space-y-2 flex flex-col items-center py-10">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight text-center">
          Trending Products
        </h2>
        <div className="w-16 h-[3px] bg-(--main) rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`} 
              className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer block"
            >
              <div className="p-4">
                <div className="relative w-full h-[260px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-center text-gray-600 text-lg font-normal min-h-[60px] leading-snug group-hover:text-gray-900 transition-colors">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
