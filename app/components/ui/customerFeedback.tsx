import { comments, ratings } from "@/app/constant";
import { FaStar } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";

export default function CustomerFeedback() {
  const average = 4.3;
  const totalRatings = 26;
  return (
    <div className="border-t border-gray-200 rounded-md bg-[#fff1e1]/60 w-full jakarta leading-[120%]">
      <div className="flex justify-between items-center border-b border-gray-200 p-4">
        <h2 className="text-xl font-bold text-gray-800">Customers Feedback</h2>
        <div className="flex gap-4 font-semibold items-center text-(--color)">
          <h2 className="text-[14px] font-[400]">See all</h2>
          <span>
            <GoChevronRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left: Ratings Summary */}
        <div className="h-full">
          <h2 className="text-[14px] font-light text-gray-500">
            VERIFIED RATINGS (23)
          </h2>
          <div className="text-center w-full p-6 h-full bg-[#F7F7F7] border border-gray-200 rounded-xl overflow-hidden mt-4">
            <div className="bg-white m-[3px] rounded-[12px]  flex flex-col items-center">
              <h1 className="text-2xl py-3 font-[600] text-(--gray-700) mt-1">
                4.3 <span className="text-(--gray-400) font-[400]">/5</span>
              </h1>
              <div className="flex justify-center gap-[6px] mt-1 mx-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(average)
                        ? "text-[#F6B01E] fill-[#F6B01E]"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[14px] font-[400] text-(--gray-700) py-2">
                {totalRatings} verified ratings
              </p>
            </div>
            {/* Ratings*/}
            <div className="my-4 space-y-2 mx-3">
              {ratings.map((r) => (
                <div
                  key={r.stars}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="text-[11px] font-[400] text-(--gray-800)">
                    {r.stars}
                  </span>
                  <FaStar className="w-4 h-4 text-[#F6B01E] fill-[#F6B01E]" />
                  <span className="text-[11px] font-[400] text-(--gray-200)">
                    ({r.count})
                  </span>
                  <progress
                    className="progress custom-progress flex-1 h-2 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-orange-500 rounded-full overflow-hidden"
                    value={(r.count / totalRatings) * 100}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Comments */}
        <div className="w-full">
          <h2 className="text-[14px] font-[400] text-(--gray-900)">
            COMMENTS FROM VERIFIED BUYERS (15)
          </h2>
          <div className="space-y-4 mt-4 pb-6">
            {comments.map((c, idx) => (
              <div key={idx} className="border-b-[1px] border-gray-200 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-[6px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < c.rating
                            ? "text-[#F6B01E] fill-[#F6B01E]"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="w-[10px] text-gray-300">|</span>&nbsp;
                    <span className="text-[11px] font-[400] text-gray-900">
                      {c.date}
                    </span>
                  </div>
                </div>
                <p className="text-[14px] font-[600] text-gray-800">
                  {c.title}
                </p>
                <p className="text-[11px] font-[400] text-gray-700">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
