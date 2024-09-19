"use client";

import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext, useNavContext } from "@/app/_context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

export function MobileNav() {
  const { navigateTo, pathname } = useLoaderContext();
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
        <motion.nav
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`md:hidden fixed top-0 left-0 flex flex-col justify-end items-start h-screen w-full bg-[#E9F9C6] z-[50] danfo-regular text-xl p-8`}
        >
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-start"
          >
            {NAV_LINKS.map(({ name, href }, index) => (
              <div className="overflow-hidden">
                <motion.a
                  key={index}
                  variants={item}
                  onClick={() => {
                    setIsVisible(false);
                    pathname !== href && navigateTo(href);
                  }}
                  className={`cursor-pointer flex justify-center items-center ${
                    pathname === href ? "text-[#263e17]" : "text-[#456033]"
                  } text-5xl xs:text-7xl`}
                >
                  <span>{name}</span>{" "}
                </motion.a>
              </div>
            ))}
          </motion.div>
          <button
            onClick={() => {
              setIsVisible(false);
              document.body.classList.remove("loading");
            }}
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
