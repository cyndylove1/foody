import Image from "next/image";
import Link from "next/link";
import { categories } from "@/app/constant";

export default function Collection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF8E8]
        pt-16
        pb-32
        select-none
      "
    >

      {/* ================= DECORATIVE BACKGROUND ================= */}

      {/* Yellow glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#F9C51C]/25 blur-3xl" />

      {/* Green glow */}
      <div className="absolute top-20 right-[-100px] w-96 h-96 rounded-full bg-[#00864A]/15 blur-3xl" />

      {/* Orange glow */}
      <div className="absolute bottom-20 left-[40%] w-72 h-72 rounded-full bg-[#F47C20]/10 blur-3xl" />

      {/* Small decorative yellow circle */}
      <div className="absolute top-24 right-[15%] w-20 h-20 rounded-full bg-[#F9C51C]/20" />

      {/* Small decorative green circle */}
      <div className="absolute bottom-32 left-[8%] w-14 h-14 rounded-full bg-[#00864A]/10" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-12">

        {/* ================= TITLE ================= */}

        <div className="flex items-end justify-between mb-10">

          <div>

            {/* Small Label */}
            <div className="flex items-center gap-2 mb-3">

              <span className="w-2.5 h-2.5 rounded-full bg-[#F9C51C]" />

              <span className="text-[#00864A] text-sm font-bold uppercase tracking-wider">
                Explore Our Store
              </span>

            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#151515]
                tracking-tight
              "
            >
              Our{" "}

              <span className="text-[#00864A]">
                Categories
              </span>

            </h2>

            {/* Yellow underline */}
            <div className="relative mt-5 h-4 w-36">
                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/60" />
                </div>
          
            

          </div>


          {/* Description */}

          <p
            className="
              hidden
              md:block
              max-w-sm
              text-right
              text-[#5B6470]
              text-sm
              leading-6
            "
          >
            Discover authentic African food ingredients, spices,
            provisions and premium kitchen essentials.
          </p>

        </div>


        {/* ================= CATEGORY GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >

          {categories.map((category, index) => {

            const accentColors = [
              "bg-[#00864A]",
              "bg-[#F47C20]",
              "bg-[#F9C51C] text-[#151515]",
              "bg-[#00864A]",
            ];

            return (

              <Link
                key={category.id}
                href={`/category/utensils`}
                className="
                  group
                  relative
                  h-[390px]
                  md:h-[430px]
                  rounded-[28px]
                  overflow-hidden
                  bg-white
                  border
                  border-white
                  shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* ================= IMAGE ================= */}

                <div className="absolute inset-0 overflow-hidden">

                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    priority={category.priority}
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                </div>


                {/* ================= TOP BADGE ================= */}

                <div className="absolute top-5 left-5 z-20">

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      px-3.5
                      py-1.5
                      rounded-full
                      text-[10px]
                      font-extrabold
                      tracking-wider
                      uppercase
                      text-white
                      shadow-lg
                      ${accentColors[index % accentColors.length]}
                    `}
                  >

                    <span className="w-1.5 h-1.5 rounded-full bg-white" />

                    {category.badge}

                  </span>

                </div>


                {/* ================= BOTTOM INFORMATION CARD ================= */}

                <div
                  className="
                    absolute
                    left-4
                    right-4
                    bottom-4
                    z-20
                    rounded-[20px]
                    bg-white/95
                    backdrop-blur-md
                    p-5
                    shadow-xl
                    border
                    border-white/80
                    transition-all
                    duration-500
                    group-hover:bottom-5
                  "
                >

                  {/* Yellow accent line */}

                  <div className="w-8 h-1 rounded-full bg-[#F9C51C] mb-3" />


                  {/* Category title */}

                  <h3
                    className="
                      text-[#00864A]
                      text-lg
                      md:text-xl
                      font-extrabold
                      tracking-tight
                      leading-tight
                    "
                  >
                    {category.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      text-[#667085]
                      text-xs
                      font-medium
                      leading-5
                      mt-2
                      line-clamp-2
                    "
                  >
                    {category.imageAlt}
                  </p>


                  {/* ================= SHOP BUTTON ================= */}

                  <div className="mt-4">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-[#00864A]
                        text-white
                        text-xs
                        font-bold
                        transition-all
                        duration-300
                        group-hover:bg-[#F47C20]
                      "
                    >

                      {category.buttonText}

                      <span
                        className="
                          text-sm
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </span>

                  </div>

                </div>

              </Link>

            );

          })}

        </div>

      </div>


      {/* =========================================================
          SAME AFRICAN PATTERN AS HERO
          ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {/* ================= AFRICAN DECORATIVE PATTERN ================= */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

      </div>

    </section>
  );
}