"use client";

import Link from "next/link";
import { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useOrders } from "../hooks/useOrders";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";

export default function Profile() {
  const { data: userDetails } = useProfile();
  const { data: orders = [], isLoading: isLoadingOrders } = useOrders();
  const [showOrders, setShowOrders] = useState(false);

  // Dynamic status counters computed from hook data
  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status?.toLowerCase() === "pending").length,
    completed: orders.filter((o) => o.status?.toLowerCase() === "completed")
      .length,
    cancelled: orders.filter((o) => o.status?.toLowerCase() === "cancelled")
      .length,
    processing: orders.filter((o) => o.status?.toLowerCase() === "processing")
      .length,
  };

  return (
    <>
      <ShopNavbar />
      <div className="bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center gap-6 md:m-auto md:w-[755px] md:px-16 md:py-12 px-4 py-8">
          <div className="flex items-center gap-[25px] self-start w-full">
            <h2 className="text-[20px] font-bold">Profile</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-12 w-full">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="h-[108px] w-[108px] rounded-full bg-(--main) border border-stone-300 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                {userDetails?.avatar ? (
                  <img
                    src={userDetails.avatar}
                    alt="Profile Avatar"
                    className="h-full w-full object-cover"
                  />
                ) : userDetails?.first_name ? (
                  userDetails.first_name.charAt(0).toUpperCase()
                ) : (
                  "U"
                )}
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Hi, {userDetails?.first_name || "User"}{" "}
                {userDetails?.last_name || ""}
              </h3>
            </div>

            {/* Dynamic Orders Overview Card */}
            <div className="rounded-2xl bg-white w-full md:gap-6 md:p-6 flex flex-col gap-4 p-4 border border-stone-200/60 shadow-sm">
              <div className="grid grid-cols-5 items-center justify-center text-center divide-x divide-stone-100">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h1 className="text-xl md:text-[28px] font-extrabold text-stone-900">
                    {stats.total}
                  </h1>
                  <h5 className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                    Total
                  </h5>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h1 className="text-xl md:text-[28px] font-extrabold text-stone-900">
                    {stats.pending}
                  </h1>
                  <h5 className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                    Pending
                  </h5>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h1 className="text-xl md:text-[28px] font-extrabold text-stone-900">
                    {stats.completed}
                  </h1>
                  <h5 className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                    Completed
                  </h5>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h1 className="text-xl md:text-[28px] font-extrabold text-stone-900">
                    {stats.cancelled}
                  </h1>
                  <h5 className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                    Cancelled
                  </h5>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h1 className="text-xl md:text-[28px] font-extrabold text-stone-900">
                    {stats.processing}
                  </h1>
                  <h5 className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                    Processing
                  </h5>
                </div>
              </div>

              <div className="border-t border-stone-100"></div>

              <Button
                variant="primary"
                className="w-full"
                onClick={() => setShowOrders((prev) => !prev)}
              >
                {showOrders ? "Hide Orders" : "View Orders"}
              </Button>
            </div>
          </div>

          {/* Orders History Container */}
          {showOrders && (
            <div className="w-full mt-2 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-stone-900">
                Order History
              </h3>

              {isLoadingOrders ? (
                <div className="rounded-2xl bg-white p-6 border border-stone-200/60 shadow-sm text-center text-stone-500">
                  Loading orders...
                </div>
              ) : orders.length === 0 ? (
                <div className="rounded-2xl bg-white p-6 border border-stone-200/60 shadow-sm text-center text-stone-500">
                  No orders found.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl bg-white p-4 border border-stone-200/60 shadow-sm flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-stone-800 text-sm">
                          Order #{order.order_number || order.id}
                        </span>
                        <span className="text-xs text-stone-500">
                          {order.created_at
                            ? new Date(order.created_at).toLocaleDateString()
                            : "Recent Order"}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold capitalize ${
                            order.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : order.status === "cancelled"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.status}
                        </span>

                        {order.total_price !== undefined && (
                          <span className="font-bold text-stone-900 text-sm">
                            ${order.total_price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Personal Information Header */}
          <div className="flex items-center justify-between w-full mt-4">
            <h3 className="text-lg font-bold text-stone-900">
              Personal Information
            </h3>
            <Link href="/edit-profile">
              <Button variant="secondary">Edit Details</Button>
            </Link>
          </div>

          {/* Personal Details Display */}
          <div className="rounded-2xl bg-white w-full p-6 border border-stone-200/60 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="flex w-1/2 flex-col gap-[6px]">
                  <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    First Name
                  </h5>
                  <h4 className="text-sm font-bold text-stone-800 bg-stone-50/60 px-3 py-2 rounded-xl border border-stone-100">
                    {userDetails?.first_name || "—"}
                  </h4>
                </div>
                <div className="flex w-1/2 flex-col gap-[6px] border-l border-stone-100 pl-6">
                  <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Last Name
                  </h5>
                  <h4 className="text-sm font-bold text-stone-800 bg-stone-50/60 px-3 py-2 rounded-xl border border-stone-100">
                    {userDetails?.last_name || "—"}
                  </h4>
                </div>
              </div>

              <div className="border-t border-stone-100"></div>

              <div className="flex items-center gap-6">
                <div className="flex w-1/3 flex-col gap-[6px]">
                  <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Email
                  </h5>
                  <h4 className="text-sm font-bold text-stone-800 bg-stone-50/60 px-3 py-2 rounded-xl border border-stone-100 truncate">
                    {userDetails?.email || "—"}
                  </h4>
                </div>
                <div className="flex w-1/3 flex-col gap-[6px] border-l border-stone-100 pl-6">
                  <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Phone Number
                  </h5>
                  <h4 className="text-sm font-bold text-stone-800 bg-stone-50/60 px-3 py-2 rounded-xl border border-stone-100">
                    {userDetails?.phone || "—"}
                  </h4>
                </div>
                <div className="flex w-1/3 flex-col gap-[6px] border-l border-stone-100 pl-6">
                  <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Customer Type
                  </h5>
                  <h4 className="text-sm font-bold text-stone-800 bg-stone-50/60 px-3 py-2 rounded-xl border border-stone-100">
                    {userDetails?.customer_type || "—"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
