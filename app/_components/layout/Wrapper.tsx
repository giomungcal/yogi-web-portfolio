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
    gray: "#797A9A",
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
        `my-16 w-[80%] overflow-hidden bg-[#F8F8F8] drop-shadow-lg md:my-0 md:h-[450px] md:min-w-[700px] md:overflow-visible md:p-4 lg:max-w-[864px]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Wrapper;
