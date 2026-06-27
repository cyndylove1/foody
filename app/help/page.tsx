"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { faqData } from "../constant";
import Title from "../components/title";

export default function Help() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className=" bg-[#fff1e1]/60">
        <Navbar />
        <Title text=" Help and FAQ"  className="items-center pt-20 pb-10"/>
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
