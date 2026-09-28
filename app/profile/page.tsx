"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  XCircle,
  LoaderCircle,
  User,
  Mail,
  Phone,
  Store,
  Package,
  ArrowRight,
  Pencil,
  Sparkles,
} from "lucide-react";

import { useProfile } from "../hooks/useProfile";
import { useOrders } from "../hooks/useOrders";
import ShopNavbar from "../components/ui/shopNavbar";
import Button from "../components/button";

export default function Profile() {
  const { data: userDetails } = useProfile();
  const { data: orders = [], isLoading: isLoadingOrders } = useOrders();

  const [showOrders, setShowOrders] = useState(false);

  /*
   * ==========================================================
   * ORDER STATISTICS
   * ==========================================================
   */

  const stats = {
    total: orders.length,

    pending: orders.filter(
      (order) => order.status?.toLowerCase() === "pending"
    ).length,

    completed: orders.filter(
      (order) => order.status?.toLowerCase() === "completed"
    ).length,

    cancelled: orders.filter(
      (order) => order.status?.toLowerCase() === "cancelled"
    ).length,

    processing: orders.filter(
      (order) => order.status?.toLowerCase() === "processing"
    ).length,
  };

  /*
   * ==========================================================
   * STATUS STYLE
   * ==========================================================
   */

  const getStatusStyle = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-[#EAF5EC] text-[#00864A]";

      case "pending":
        return "bg-[#FFF4D0] text-[#9A7000]";

      case "cancelled":
        return "bg-red-50 text-red-600";

      case "processing":
        return "bg-blue-50 text-blue-600";

      default:
        return "bg-[#F5F5F0] text-[#52606D]";
    }
  };

  /*
   * ==========================================================
   * USER NAME
   * ==========================================================
   */

  const firstName = userDetails?.first_name || "User";
  const lastName = userDetails?.last_name || "";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF7]">
      {/* ======================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Yellow glow */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

      {/* Green glow */}
      <div className="pointer-events-none absolute -right-48 top-[15%] h-[560px] w-[560px] rounded-full bg-[#00864A]/12 blur-3xl" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-[25%] h-[500px] w-[500px] rounded-full bg-[#F47C20]/15 blur-3xl" />

      {/* Small yellow decorative shape */}
      <div className="pointer-events-none absolute right-[15%] top-[18%] hidden h-16 w-16 rotate-12 rounded-[30%] bg-[#F9C51C]/30 lg:block" />

      {/* Green ring */}
      <div className="pointer-events-none absolute bottom-[18%] left-[4%] hidden h-28 w-28 rounded-full border-[16px] border-[#00864A]/10 lg:block" />

      {/* Orange circle */}
      <div className="pointer-events-none absolute bottom-[10%] right-[7%] hidden h-20 w-20 rounded-full bg-[#F47C20]/10 lg:block" />

      {/* Large green ring */}
      <div className="pointer-events-none absolute right-[-70px] top-[42%] hidden h-44 w-44 rounded-full border-[20px] border-[#00864A]/5 lg:block" />

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-50">
        <ShopNavbar />
      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 md:px-10 lg:px-12 lg:pb-28 pt-42">
        {/* ====================================================
            PROFILE HERO
        ==================================================== */}

        <div className="relative mb-8 overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.07)]">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F9C51C]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-[#00864A]/10 blur-3xl" />

          <div className="pointer-events-none absolute right-[20%] bottom-8 h-20 w-20 rounded-full bg-[#F47C20]/8" />

          {/* Yellow top accent */}
          <div className="absolute left-0 right-0 top-0 h-2 bg-[#F9C51C]" />

          <div className="relative z-10 flex flex-col items-center px-6 py-12 sm:px-10 sm:py-14">
            {/* Profile avatar */}

            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-[#F9C51C]/30" />

              <div className="absolute -inset-5 rounded-full border border-[#00864A]/10" />

              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#00864A] text-3xl font-black text-white shadow-[0_15px_40px_rgba(0,134,74,0.20)] ring-4 ring-[#F9C51C]/30">
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

              {/* Online/account indicator */}
              <div className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[#F9C51C]">
                <User className="h-3.5 w-3.5 text-[#00864A]" />
              </div>
            </div>

            {/* Badge */}

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#00864A]">
              <Sparkles className="h-3.5 w-3.5" />
              My Account
            </div>

            {/* Heading */}

            <h1 className="mt-4 text-center text-3xl font-black tracking-[-0.04em] text-[#151515] sm:text-4xl">
              Hi, {firstName} {lastName}
            </h1>

            {/* Yellow underline */}

            <div className="relative mx-auto mt-4 h-4 w-32">
              <div className="absolute left-0 top-0 h-2 w-24 rounded-full bg-[#F9C51C]" />
              <div className="absolute left-10 top-3 h-1 w-16 rounded-full bg-[#F9C51C]/50" />
            </div>

            <p className="mt-4 max-w-lg text-center text-sm leading-6 text-[#52606D] sm:text-base">
              Manage your account, view your order activity, and keep your
              grocery shopping details up to date.
            </p>

            {/* Edit profile */}

            <Link href="/edit-profile" className="mt-6">
              <Button
                variant="secondary"
                className="!rounded-xl !border-[#00864A]/20"
              >
                <span className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Edit Profile
                </span>
              </Button>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#00864A]" />
        </div>

        {/* ====================================================
            ORDER OVERVIEW
        ==================================================== */}

        <div className="relative overflow-hidden rounded-[32px] border border-[#00864A]/10 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.06)]">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F9C51C]/10 blur-3xl" />

          {/* Header */}

          <div className="relative z-10 flex flex-col gap-4 border-b border-[#E5E9E6] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5EC]">
                <Package className="h-5 w-5 text-[#00864A]" />
              </div>

              <div>
                <h2 className="text-lg font-black text-[#151515]">
                  Orders Overview
                </h2>

                <p className="mt-0.5 text-xs text-[#52606D]">
                  Your current order activity
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF4D0] px-3 py-2 text-xs font-bold text-[#8A6800]">
              <ShoppingBag className="h-3.5 w-3.5" />
              {stats.total} {stats.total === 1 ? "Order" : "Orders"}
            </div>
          </div>

          {/* ==================================================
              STAT CARDS
          ================================================== */}

          <div className="relative z-10 grid grid-cols-2 gap-3 p-4 sm:grid-cols-5 sm:gap-4 sm:p-6">
            <StatCard
              icon={<ShoppingBag className="h-5 w-5" />}
              value={stats.total}
              label="Total"
              iconBg="bg-[#EAF5EC]"
              iconColor="text-[#00864A]"
            />

            <StatCard
              icon={<Clock3 className="h-5 w-5" />}
              value={stats.pending}
              label="Pending"
              iconBg="bg-[#FFF4D0]"
              iconColor="text-[#F47C20]"
            />

            <StatCard
              icon={<CheckCircle2 className="h-5 w-5" />}
              value={stats.completed}
              label="Completed"
              iconBg="bg-[#EAF5EC]"
              iconColor="text-[#00864A]"
            />

            <StatCard
              icon={<XCircle className="h-5 w-5" />}
              value={stats.cancelled}
              label="Cancelled"
              iconBg="bg-red-50"
              iconColor="text-red-500"
            />

            <StatCard
              icon={<LoaderCircle className="h-5 w-5" />}
              value={stats.processing}
              label="Processing"
              iconBg="bg-blue-50"
              iconColor="text-blue-500"
            />
          </div>

          {/* View Orders */}

          <div className="relative z-10 border-t border-[#E5E9E6] bg-[#FFFDF7]/60 p-5 sm:p-6">
            <Button
              variant="primary"
              className="w-full !rounded-2xl !font-bold"
              onClick={() => setShowOrders((prev) => !prev)}
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" />

                {showOrders ? "Hide Orders" : "View Orders"}

                <ArrowRight
                  className={`h-4 w-4 transition-transform ${
                    showOrders ? "rotate-90" : ""
                  }`}
                />
              </span>
            </Button>
          </div>
        </div>

        {/* ====================================================
            ORDER HISTORY
        ==================================================== */}

        {showOrders && (
          <div className="mt-8">
            {/* Section heading */}

            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#EAF5EC] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#00864A]">
                  <Package className="h-3.5 w-3.5" />
                  Shopping Activity
                </div>

                <h2 className="text-2xl font-black tracking-tight text-[#151515]">
                  Order History
                </h2>

                <p className="mt-1 text-sm text-[#52606D]">
                  A look at your recent grocery orders.
                </p>
              </div>
            </div>

            {/* Loading */}

            {isLoadingOrders ? (
              <div className="rounded-[28px] border border-[#00864A]/10 bg-white p-12 text-center shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF5EC]">
                  <LoaderCircle className="h-7 w-7 animate-spin text-[#00864A]" />
                </div>

                <p className="mt-4 text-sm font-semibold text-[#52606D]">
                  Loading your orders...
                </p>
              </div>
            ) : orders.length === 0 ? (
              /* Empty state */
              <div className="relative overflow-hidden rounded-[28px] border border-[#00864A]/10 bg-white p-12 text-center shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F9C51C]/15 blur-2xl" />

                <div className="relative z-10">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4D0]">
                    <ShoppingBag className="h-8 w-8 text-[#F47C20]" />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#151515]">
                    No Orders Yet
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#52606D]">
                    You haven't placed any orders yet. Once you shop with us,
                    your order history will appear here.
                  </p>

                  <Link href="/" className="mt-6 inline-block">
                    <Button
                      variant="primary"
                      className="!rounded-xl"
                    >
                      Start Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              /* Orders */
              <div className="flex flex-col gap-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="group relative overflow-hidden rounded-[26px] border border-[#E5E9E6] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00864A]/20 hover:shadow-[0_18px_40px_rgba(0,134,74,0.08)]"
                  >
                    {/* Yellow side accent */}

                    <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F9C51C] opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      {/* Order information */}

                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF5EC]">
                          <ShoppingBag className="h-5 w-5 text-[#00864A]" />
                        </div>

                        <div className="min-w-0">
                          <span className="block text-sm font-black text-[#151515]">
                            Order #{order.order_number || order.id}
                          </span>

                          <span className="mt-1 block text-xs text-[#52606D]">
                            {order.created_at
                              ? new Date(
                                  order.created_at
                                ).toLocaleDateString()
                              : "Recent Order"}
                          </span>
                        </div>
                      </div>

                      {/* Order status */}

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          {order.status || "Pending"}
                        </span>

                        {order.total_price !== undefined && (
                          <span className="rounded-xl bg-[#FFF4D0] px-3 py-2 text-sm font-black text-[#151515]">
                            ${Number(order.total_price).toFixed(2)}
                          </span>
                        )}

                        <ArrowRight className="h-4 w-4 text-[#00864A] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ====================================================
            PERSONAL INFORMATION
        ==================================================== */}

        <div className="mt-12">
          {/* Header */}

          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#EAF5EC] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#00864A]">
                <User className="h-3.5 w-3.5" />
                Account Details
              </div>

              <h2 className="text-2xl font-black tracking-tight text-[#151515]">
                Personal Information
              </h2>

              <p className="mt-1 text-sm text-[#52606D]">
                Your personal account details.
              </p>
            </div>

            <Link href="/edit-profile">
              <Button
                variant="secondary"
                className="!rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Edit Details
                </span>
              </Button>
            </Link>
          </div>

          {/* Information card */}

          <div className="relative overflow-hidden rounded-[32px] border border-[#00864A]/10 bg-white p-5 shadow-[0_20px_55px_rgba(0,0,0,0.06)] sm:p-7">
            {/* Decorative glows */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F9C51C]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#00864A]/8 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<User className="h-4 w-4" />}
                label="First Name"
                value={userDetails?.first_name}
              />

              <InfoCard
                icon={<User className="h-4 w-4" />}
                label="Last Name"
                value={userDetails?.last_name}
              />

              <InfoCard
                icon={<Mail className="h-4 w-4" />}
                label="Email Address"
                value={userDetails?.email}
              />

              <InfoCard
                icon={<Phone className="h-4 w-4" />}
                label="Phone Number"
                value={userDetails?.phone}
              />

              <InfoCard
                icon={<Store className="h-4 w-4" />}
                label="Customer Type"
                value={userDetails?.customer_type}
              />

              {/* Account status */}

              <InfoCard
                icon={<CheckCircle2 className="h-4 w-4" />}
                label="Account Status"
                value="Active"
              />
            </div>
          </div>
        </div>

        {/* ====================================================
            ACCOUNT FOOTER CARD
        ==================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-[30px] bg-[#00864A] px-6 py-7 shadow-[0_20px_50px_rgba(0,134,74,0.15)] sm:px-8">
          {/* Decorations */}

          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F9C51C]/20" />

          <div className="pointer-events-none absolute bottom-[-35px] left-[25%] h-24 w-24 rounded-full bg-[#F47C20]/20" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#F9C51C]" />

                <h3 className="font-black text-white">
                  Keep Your Account Updated
                </h3>
              </div>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Make sure your contact details are correct so we can keep you
                updated about your grocery orders and deliveries.
              </p>
            </div>

            <Link href="/edit-profile">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9C51C] px-5 py-3 text-sm font-black text-[#151515] transition-all hover:bg-[#FFD84D]"
              >
                Update Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
    </main>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  icon,
  value,
  label,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00864A]/20 hover:shadow-[0_12px_30px_rgba(0,134,74,0.07)] sm:p-5">
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      <h3 className="mt-3 text-2xl font-black text-[#151515]">
        {value}
      </h3>

      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.08em] text-[#52606D]">
        {label}
      </p>
    </div>
  );
}

/* ============================================================
   INFORMATION CARD
============================================================ */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
}) {
  return (
    <div className="group rounded-2xl border border-[#E5E9E6] bg-[#FFFDF7] p-4 transition-all duration-300 hover:border-[#00864A]/20 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,134,74,0.05)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EC] text-[#00864A] transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.08em] text-[#52606D]">
            {label}
          </p>

          <p className="mt-1 truncate text-sm font-bold text-[#151515]">
            {value || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}