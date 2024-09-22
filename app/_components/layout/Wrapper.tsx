import useBorder from "@/app/_hooks/useBorder";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  borderColor:
    | "lightpurple"
    | "lightgreen"
    | "gray"
    | "gold"
    | "olive"
    | "teal";
  className?: string;
};

function Wrapper({ children, borderColor, className }: Props) {
  const COLORS = {
    lightblue: "#B2BFFF",
    lightpurple: "#C286B9",
    lightgreen: "#AEDCA0",
    gray: "#C1CDCF",
    gold: "#F5C95E",
    olive: "#CAD40F",
    teal: "#92C9BD",
  };

  const borderStyleVar = useBorder({
    borderWidth: "13px",
    borderColor: COLORS[borderColor],
    borderDash: "26px",
    borderSpacing: "52px",
  });

  return (
    <div
      style={borderStyleVar}
      className={twMerge(
        `w-[80%] md:min-w-[700px] lg:max-w-[864px] md:h-[450px] bg-[#F8F8F8] md:p-4 drop-shadow-lg overflow-hidden md:overflow-visible my-16 md:my-0`,
        className
      )}
    >
      {children}
    </div>
    // <div
    //   style={borderStyleVar}
    //   className={`w-[80%] min-h-[450px] bg-[#F8F8F8] md:p-4 drop-shadow-lg overflow-hidden md:overflow-visible my-16 sm:my-0`}
    // >
    //   {children}
    // </div>
  );
}

export default Wrapper;
