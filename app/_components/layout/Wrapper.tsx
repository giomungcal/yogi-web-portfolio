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

  const borderStyle = {
    backgroundImage: `
        repeating-linear-gradient(0deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
        repeating-linear-gradient(90deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
        repeating-linear-gradient(180deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
        repeating-linear-gradient(270deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px)
      `,
    backgroundSize: "13px 100%, 100% 13px, 13px 100%, 100% 13px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={borderStyle}
      className={` w-[80%] md:w-[864px] md:h-[450px] bg-[#F8F8F8] md:p-4 drop-shadow-lg overflow-hidden md:overflow-visible`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
