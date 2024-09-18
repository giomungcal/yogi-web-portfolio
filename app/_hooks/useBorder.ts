type Props = {
  borderWidth: string;
  borderColor: string;
  borderDash: string;
  borderSpacing: string;
};

type ReturnProps = {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
};

const useBorder = ({
  borderWidth,
  borderColor,
  borderDash,
  borderSpacing,
}: Props): ReturnProps => {
  const borderStyleVar = {
    backgroundImage: `
            repeating-linear-gradient(0deg, ${borderColor}, ${borderColor} ${borderDash}, transparent ${borderDash}, transparent ${borderSpacing}, ${borderColor} ${borderSpacing}),
            repeating-linear-gradient(90deg, ${borderColor}, ${borderColor} ${borderDash}, transparent ${borderDash}, transparent ${borderSpacing}, ${borderColor} ${borderSpacing}),
            repeating-linear-gradient(180deg, ${borderColor}, ${borderColor} ${borderDash}, transparent ${borderDash}, transparent ${borderSpacing}, ${borderColor} ${borderSpacing}),
            repeating-linear-gradient(270deg, ${borderColor}, ${borderColor} ${borderDash}, transparent ${borderDash}, transparent ${borderSpacing}, ${borderColor} ${borderSpacing})
          `,
    backgroundSize: `${borderWidth} 100%, 100% ${borderWidth}, ${borderWidth} 100%, 100% ${borderWidth}`,
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };

  //   const borderStyle = {
  //     backgroundImage: `
  //             repeating-linear-gradient(0deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
  //             repeating-linear-gradient(90deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
  //             repeating-linear-gradient(180deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px),
  //             repeating-linear-gradient(270deg, ${COLORS[borderColor]}, ${COLORS[borderColor]} 26px, transparent 26px, transparent 52px, ${COLORS[borderColor]} 52px)
  //           `,
  //     backgroundSize: "13px 100%, 100% 13px, 13px 100%, 100% 13px",
  //     backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
  //     backgroundRepeat: "no-repeat",
  //   };

  return borderStyleVar;
};

export default useBorder;
