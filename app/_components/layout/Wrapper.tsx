import React from "react";

type Props = {
  children: React.ReactNode;
  borderColor: "light-purple" | "light-green" | "gray" | "gold" | "olive";
};

function Wrapper({ children, borderColor }: Props) {
  const borderStyle = {
    backgroundImage: `
        repeating-linear-gradient(0deg, var(--${borderColor}), var(--${borderColor}) 26px, transparent 26px, transparent 52px, var(--${borderColor}) 52px),
        repeating-linear-gradient(90deg, var(--${borderColor}), var(--${borderColor}) 26px, transparent 26px, transparent 52px, var(--${borderColor}) 52px),
        repeating-linear-gradient(180deg, var(--${borderColor}), var(--${borderColor}) 26px, transparent 26px, transparent 52px, var(--${borderColor}) 52px),
        repeating-linear-gradient(270deg, var(--${borderColor}), var(--${borderColor}) 26px, transparent 26px, transparent 52px, var(--${borderColor}) 52px)
      `,
    backgroundSize: "13px 100%, 100% 13px, 13px 100%, 100% 13px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={borderStyle}
      className={` w-[80%] md:w-[864px] md:h-[450px] bg-[#F8F8F8] md:p-4 drop-shadow-lg `}
    >
      {children}
    </div>
  );
}

export default Wrapper;
