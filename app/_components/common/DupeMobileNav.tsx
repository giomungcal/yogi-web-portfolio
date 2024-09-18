import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext, useNavContext } from "@/app/_context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

export function DupeMobileNav() {
  const NAV_COLORS = [
    "bg-[#F5D1ED]",
    "bg-[#E9F9C6]",
    "bg-[#D3C2FC]",
    "bg-[#FEDFC0]",
  ];

  const { navigateTo } = useLoaderContext();
  const { isVisible, setIsVisible } = useNavContext();

  const menuVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.5 },
    },
    exit: { y: "-100%", transition: { duration: 1 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`md:hidden grid grid-cols-2 justify-center items-center absolute h-full w-full bg-light-purple z-[99] kode-mono-bold text-xl`}
        >
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              onClick={() => {
                setIsVisible(false);
                navigateTo(`${link === "home" ? "/" : `/${link}`}`);
              }}
              className={`cursor-pointer w-full h-full border-4 border-black ${NAV_COLORS[index]} flex justify-center items-center`}
            >
              <span>{link}</span>{" "}
            </a>
          ))}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute w-full h-[60px] flex justify-center items-center bg-[#FEFFEE] border-4 border-black mx-auto "
          >
            close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
