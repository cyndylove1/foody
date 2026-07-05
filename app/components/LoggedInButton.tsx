"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useProfile } from "../hooks/useProfile";

interface LoggedInButtonProps {
  disableDropdown?: boolean;
}

export default function LoggedInButton({
  disableDropdown = false,
}: LoggedInButtonProps) {
  const { logout } = useAuth();
  const { data: user } = useProfile();

  // Point avatar directly to the real hook response data profile target
  const avatarUrl = user?.avatar || null;

  const firstLetter = user?.first_name
    ? user.first_name.charAt(0).toUpperCase()
    : "";

  return (
    <div
      role="button"
      tabIndex={0}
      className="dropdown dropdown-bottom flex h-11 w-11 items-center justify-center rounded-full border border-cream-900 bg-cream cursor-pointer"
    >
      {avatarUrl ? (
        <Image
          className="w-full object-cover h-full rounded-full"
          src={avatarUrl}
          width={44}
          height={44}
          alt="profile"
        />
      ) : firstLetter ? (
        <div className="w-full h-full rounded-full bg-(--color) flex items-center justify-center text-white font-bold text-base shadow-sm">
          {firstLetter}
        </div>
      ) : (
        <span>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#6b665f"
          >
            <path
              d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
              fill="#6b665f"
            ></path>
          </svg>
        </span>
      )}

      {/* Dropdown Menu Overlay */}
      {!disableDropdown && (
        <div
          tabIndex={0}
          className="hidden md:block dropdown-content right-0 z-50 mt-2 w-[206px] rounded-[12px] border border-[#E9E9E9] bg-white px-[20px] py-[23px] text-xs font-normal leading-[18px] text-[#1E1E1E] shadow-lg"
        >
          <div className="flex flex-col text-[15px] text-[#2C2C2C] font-medium hover:text-(--main) gap-[20px] border-b border-gray-200 pb-[19px]">
            <Link href="/profile">Profile</Link>
          </div>

          <div className="flex flex-col gap-[20px] pt-[19px]">
            <span
              role="button"
              onClick={logout}
              className="cursor-pointer text-[15px] text-[#2C2C2C] font-medium hover:text-(--main)"
            >
              Log out
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
