"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import RadioButton from "../../components/radioButton";
import Button from "../../components/button";
import Logo from "../../components/logo";

interface OptionCard {
  id: "retail" | "wholesale";
  title: string;
  bulletIconBg: string;
  bulletIconColor: string;
  imageSrc: string;
  features: string[];
}

export default function UserType() {
  const router = useRouter();

  const [selectedVibe, setSelectedVibe] = useState<
    "retail" | "wholesale" | null
  >(null);

  const cards: OptionCard[] = [
    {
      id: "retail",
      title: "Retail",
      bulletIconBg: "bg-[#F47C20]",
      bulletIconColor: "text-white",
      imageSrc: "/assets/retailer.png",
      features: [
        "Shop single items with no minimums",
        "Fast doorstep delivery options",
        "Instant checkout and easy returns",
      ],
    },
    {
      id: "wholesale",
      title: "Wholesale",
      bulletIconBg: "bg-[#F47C20]",
      bulletIconColor: "text-white",
      imageSrc: "/assets/wholesaler.png",
      features: [
        "Bulk order discounts & tier pricing",
        "Direct supplier and vendor access",
        "Custom invoices and tax support",
      ],
    },
  ];

  const handleContinue = () => {
    if (!selectedVibe) return;

    localStorage.setItem("selected_vibe", selectedVibe);

    router.push("/sign-up");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Yellow glow - top left */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow - top right */}
      <div className="pointer-events-none absolute -right-40 top-[18%] h-[520px] w-[520px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow - bottom */}
      <div className="pointer-events-none absolute bottom-[-140px] left-[28%] h-[450px] w-[450px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Small yellow decorative shape */}
      <div className="pointer-events-none absolute right-[16%] top-[12%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring - left */}
      <div className="pointer-events-none absolute bottom-[20%] left-[5%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle - right */}
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring - right */}
      <div className="pointer-events-none absolute right-[-60px] top-[40%] hidden h-40 w-40 rounded-full border-[18px] border-[#00864A]/5 lg:block" />

      {/* =========================================================
          LOGO
      ========================================================= */}

      <div className="relative z-20 px-6 pt-8 sm:px-10 sm:pt-10 lg:px-14">
        <Logo />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 flex flex-col items-center px-4 pb-16 pt-20 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24">

        {/* Header */}
        <div className="mb-10 max-w-2xl text-center sm:mb-12">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">
              <span className="h-2 w-2 rounded-full bg-[#00864A]" />
            </span>

            <span>Choose Your Shopping Experience</span>
          </div>

          <h1 className="text-4xl font-black tracking-[-0.04em] text-[#151515] sm:text-5xl">
            Retail or{" "}
            <span className="text-[#00864A]">Wholesale?</span>
          </h1>

          {/* Yellow underline */}
          <div className="relative mx-auto mt-5 h-4 w-40">
            <div className="absolute left-0 top-0 h-2 w-32 rounded-full bg-[#F9C51C]" />

            <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
          </div>

          <p className="mt-5 text-base leading-7 text-[#52606D] sm:text-lg">
            We’ll optimize Foody to show you everyday grocery deals or
            exclusive trade discounts. You can switch between them anytime.
          </p>
        </div>

        {/* =========================================================
            OPTION CARDS
        ========================================================= */}

        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">

          {cards.map((card) => {
            const isSelected = selectedVibe === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedVibe(card.id)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[32px] border bg-white p-6 transition-all duration-300 sm:p-8 ${
                  isSelected
                    ? "border-[#00864A] shadow-[0_25px_60px_rgba(0,134,74,0.14)] ring-2 ring-[#00864A]/20"
                    : "border-[#00864A]/10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#00864A]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                }`}
              >

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />
                )}

                {/* Radio */}
                <div className="absolute right-5 top-5 z-10">
                  <RadioButton
                    checked={isSelected}
                    onChange={() => setSelectedVibe(card.id)}
                  />
                </div>

                {/* Illustration */}
                <div className="flex justify-center pt-3">

                  <div
                    className={`flex h-[170px] w-[170px] items-center justify-center rounded-full border p-4 transition-all duration-300 ${
                      isSelected
                        ? "border-[#F9C51C]/50 bg-[#FFF4D0]"
                        : "border-[#00864A]/10 bg-[#EAF5EC]"
                    }`}
                  >
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                </div>

                {/* Title */}
                <div className="mt-6 text-center">

                  <h2
                    className={`text-3xl font-black tracking-tight ${
                      isSelected
                        ? "text-[#00864A]"
                        : "text-[#151515]"
                    }`}
                  >
                    {card.title}
                  </h2>

                  <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-[#F9C51C]" />

                </div>

                {/* Features */}
                <ul className="mt-7 space-y-4">

                  {card.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${card.bulletIconBg} shadow-sm`}
                      >
                        <Sparkles
                          className={`h-4 w-4 ${card.bulletIconColor}`}
                        />
                      </div>

                      <span className="text-sm font-semibold leading-6 text-[#52606D] sm:text-[15px]">
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Card bottom label */}
                <div
                  className={`mt-7 rounded-2xl px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] ${
                    isSelected
                      ? "bg-[#EAF5EC] text-[#00864A]"
                      : "bg-[#FFFDF7] text-[#52606D]"
                  }`}
                >
                  {isSelected
                    ? `Selected • ${card.title}`
                    : `Choose ${card.title}`}
                </div>

              </div>
            );
          })}

        </div>

        {/* =========================================================
            CONTINUE BUTTON
        ========================================================= */}

        <div className="mt-8 w-full max-w-xl">

          <Button
            variant="primary"
            className="w-full !rounded-2xl !font-bold"
            onClick={handleContinue}
            disabled={!selectedVibe}
          >
            {selectedVibe
              ? `Continue to ${
                  selectedVibe === "retail" ? "Retail" : "Wholesale"
                }`
              : "Select your shopping experience"}
          </Button>

        </div>

        {/* Small bottom text */}
        <p className="mt-4 text-center text-xs text-[#52606D]">
          You can change your shopping preference later.
        </p>

      </div>

      {/* Bottom yellow accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

    </main>
  );
}