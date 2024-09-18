"use client";

import { useNavContext } from "@/app/_context/AppContext";

export function MobileNavTrigger() {
  const { setIsVisible } = useNavContext();

  return (
    <div
      className={`flex w-full md:hidden gap-6 justify-center kode-mono-bold text-sm sm:text-lg font-semibold `}
    >
      <a
        onClick={() => {
          setIsVisible(true);
        }}
        className="w-[190px] h-[38px] bg-[#EDCFFF] border-2 border-black text-xl flex justify-center items-center cursor-pointer select-none"
      >
        <span>NAVIGATE</span>
      </a>
    </div>
  );
}
