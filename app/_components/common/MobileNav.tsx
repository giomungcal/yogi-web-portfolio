"use client";

import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext, useNavContext } from "@/app/_context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

export function MobileNav() {
  // const NAV_COLORS = [
  //   "bg-[#F5D1ED]",
  //   "bg-[#E9F9C6]",
  //   "bg-[#D3C2FC]",
  //   "bg-[#FEDFC0]",
  // ];

  const { navigateTo } = useLoaderContext();
  const { isVisible, setIsVisible } = useNavContext();

  const menuVariants = {
    initial: { x: "100%" },
    animate: {
      x: "0%",
      transition: { duration: 0.5 },
    },
    exit: { x: "100%", transition: { duration: 1 } },
  };

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    initial: {
      y: 60,
    },
    animate: {
      y: [60, -10, 0],
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: {
      y: [0, -10, 70],
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`md:hidden fixed flex flex-col justify-end items-start h-screen w-full bg-[#E9F9C6] z-[50] danfo-regular text-xl p-8`}
        >
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-start"
          >
            {NAV_LINKS.map((link, index) => (
              <div className="overflow-hidden">
                <motion.a
                  key={index}
                  variants={item}
                  onClick={() => {
                    setIsVisible(false);
                    navigateTo(`${link === "home" ? "/" : `/${link}`}`);
                  }}
                  className={`cursor-pointer flex justify-center items-center text-[#385326] text-5xl xs:text-7xl`}
                >
                  <span>{link}</span>{" "}
                </motion.a>
              </div>
            ))}
          </motion.div>
          <button
            onClick={() => setIsVisible(false)}
            className="overflow-hidden absolute flex top-8 right-8 justify-center items-center "
          >
            <motion.a
              initial={{
                x: 150,
              }}
              animate={{
                opacity: 1,
                x: [150, 0],
                transition: {
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              className="mx-auto text-4xl xs:text-5xl text-[#135D29] "
            >
              close
            </motion.a>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
