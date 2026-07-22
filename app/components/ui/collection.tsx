import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { categories } from "@/app/constant";
import Title from "../title";

export default function Collection() {
  return (
    <section className="w-full py-16 px-4 lg:px-12 md:px-6 bg-gray-50 select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title */}
        <Title text="Our Market Collections" className="items-start" />
        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category`}
              className="relative rounded-[24px] overflow-hidden md:h-[420px] h-[300px] group flex flex-col justify-between p-6 shadow-sm border border-gray-100 bg-white cursor-pointer block"
            >
              {/*Image */}
              <Image
                src={category.imageSrc}
                alt={category.imageAlt}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                priority={category.priority}
                className="object-cover absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Top Badge */}
              <div className="relative z-20 self-start">
                <span className="inline-block text-white text-[10px] font-bold tracking-widest bg-(--main) px-2.5 py-0.5 rounded-md uppercase">
                  {category.badge}
                </span>
              </div>

              {/* title*/}
              <div className="relative z-20 space-y-4 mt-auto">
                <h3 className="text-white text-lg font-extrabold tracking-tight leading-snug drop-shadow-sm">
                  {category.title}
                </h3>
                {/* Button*/}
                <Button variant="tertiary">{category.buttonText}</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
