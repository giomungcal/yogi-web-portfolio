"use client";

import { useNavContext } from "@/app/_context/AppContext";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export function MobileNavTrigger({ className }: Props) {
  const { setIsVisible } = useNavContext();

  return (
    <div
      className={twMerge(
        `kode-mono-bold flex w-full justify-center gap-6 text-sm font-semibold sm:text-lg md:hidden`,
        className,
      )}
    >
      <button
        onClick={() => {
          setIsVisible(true);
        }}
        className="flex h-[38px] w-[140px] select-none items-center justify-center border-2 border-black bg-[#EDCFFF] text-xl sm:w-[190px]"
      >
        <span>NAVIGATE</span>
      </button>
    </div>
  );
}
