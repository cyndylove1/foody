"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What types of items can I find on Foody?",
    answer:
      "Foody is your one-stop online destination for premium authentic seasonings, traditional soup ingredients (like authentic soup bases and thickeners), everyday grocery essentials, and natural beauty products sourced to keep you feeling vibrant inside and out.",
  },
  {
    id: 2,
    question:
      "Are your seasoning blends and soup ingredients completely authentic?",
    answer:
      "Yes, absolutely! We take pride in sourcing our seasonings, flours, and soup ingredients directly from local producers and trusted suppliers to guarantee the traditional flavors and premium quality your kitchen deserves.",
  },
  {
    id: 3,
    question: "How should I store my Foody grocery purchases?",
    answer:
      "We recommend keeping dry goods, ground seasonings, and flour blends in a cool, dry place away from direct sunlight, ideally inside airtight containers. Fresh ingredients or specialized pastes should be refrigerated immediately upon arrival.",
  },
  {
    id: 4,
    question:
      "Can I bundle grocery items and beauty products in a single delivery?",
    answer:
      "You sure can! You can seamlessly checkout with your favorite kitchen ingredients and personal care beauty essentials in one cart. Everything is carefully packaged together so your groceries and beauty products arrive safely at your doorstep.",
  },
];

export default function Help() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className=" bg-[#fff1e1]/60">
        <Navbar />
        <div className="space-y-2 flex flex-col items-center pt-20 pb-10">
          <h2 className="text-2xl md:text-3xl font-semibold  text-gray-900 tracking-tight text-center">
            Help and FAQ
          </h2>
          <div className="w-16 h-[3px] bg-(--main) rounded-full" />
        </div>
        <div className="py-12 px-4 flex justify-center items-center">
          <div className="w-full w-full max-w-5xl rounded-[24px] p-4 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
            {/* Removed standard divide-y to manage individual item borders dynamically */}
            <div className="flex flex-col">
              {faqData.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`first:pt-0 last:pb-0 py-7 transition-all duration-300 border-b ${
                      isOpen ? "border-gray-300" : "border-gray-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none py-2"
                    >
                      <span className="text-[17px] sm:text-[19px] font-medium text-gray-900 tracking-tight transition-colors duration-200 group-hover:text-gray-600">
                        {item.question}
                      </span>

                      {/* Plus Icon Container Ring */}
                      <div className="w-10 h-10 rounded-full border border-gray-200/80 flex items-center justify-center shrink-0 bg-(--main) shadow-2xs transition-all duration-300 group-hover:border-gray-400">
                        <Plus
                          className={`w-4 h-4 text-white transition-transform duration-300 ${
                            isOpen ? "rotate-45 text-gray-800" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Animated Dropdown Answer Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* 3. Added pb-2 here for safe spacing right above the bottom line */}
                        <p className="text-[15px] leading-relaxed text-gray-500 max-w-4xl pb-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Container Box */}
      </div>
      <Footer />
    </>
  );
}
