"use client";

import React, { useState } from "react";
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
      bulletIconBg: "bg-[#e07b30]",
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
      bulletIconBg: "bg-[#e07b30]",
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

    // 1. Save the selected vibe to local storage
    localStorage.setItem("selected_vibe", selectedVibe);

    // 2. Redirect to the sign-up flow
    router.push("/sign-up");
  };

  return (
    <section className="w-full bg-[#fff1e1]/60">
      <div className="p-10">
        <Logo />
      </div>

      <div className="py-12 px-4 flex flex-col items-center">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            Retail or Wholesale?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            We’ll optimize Foody to show you everyday grocery deals or exclusive
            trade discounts. Feel free to switch between them anytime!
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
          {cards.map((card) => {
            const isSelected = selectedVibe === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedVibe(card.id)}
                className={`bg-white border border-gray-200 rounded-[28px] p-8 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 relative select-none shadow-sm ${
                  isSelected
                    ? "ring-2 ring-offset-2 ring-(--main) scale-[1.02] shadow-xl border-transparent"
                    : "hover:border-gray-300 hover:shadow-md hover:scale-[1.01]"
                }`}
              >
                {/* TOP ILLUSTRATION ICON CONTAINER */}
                <div className="mb-6 mt-2 flex justify-center">
                  <div className="w-[150px] h-[150px] rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner p-3">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* CARD TITLE */}
                <h3 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-gray-900">
                  {card.title}
                </h3>

                {/* BULLET LIST */}
                <ul className="w-full space-y-4 mb-2">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full ${card.bulletIconBg} flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        <Sparkles
                          className={`w-4 h-4 ${card.bulletIconColor}`}
                        />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* RADIO BUTTON CONTAINER */}
                <div className="absolute top-4 right-4">
                  <RadioButton
                    checked={isSelected}
                    onChange={() => setSelectedVibe(card.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SUBMIT BUTTON CONTAINER */}
        <div className="w-full max-w-xl mt-6">
          <Button
            variant="primary"
            className="w-full"
            onClick={handleContinue}
            disabled={!selectedVibe}
          >
            {selectedVibe
              ? `Continue to ${selectedVibe === "retail" ? "Retail" : "Wholesale"}`
              : "Select your vibe"}
          </Button>
        </div>
      </div>
    </section>
  );
}
