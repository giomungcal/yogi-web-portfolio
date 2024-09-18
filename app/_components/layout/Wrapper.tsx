import useBorder from "@/app/_hooks/useBorder";
import React from "react";

type Props = {
  children: React.ReactNode;
  borderColor: "lightpurple" | "lightgreen" | "gray" | "gold" | "olive";
};

function Wrapper({ children, borderColor }: Props) {
  const COLORS = {
    lightblue: "#B2BFFF",
    lightpurple: "#C286B9",
    lightgreen: "#AEDCA0",
    gray: "#C1CDCF",
    gold: "#F5C95E",
    olive: "#CAD40F",
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
      className={` w-[80%] md:w-[864px] md:h-[450px] bg-[#F8F8F8] md:p-4 drop-shadow-lg overflow-hidden md:overflow-visible`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
