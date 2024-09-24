"use client";

import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext, useNavContext } from "@/app/_context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

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
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`md:hidden fixed top-0 left-0 flex flex-col justify-center items-start h-screen w-full bg-[#E9F9C6] z-[50] danfo-regular text-xl p-8`}
        >
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-start"
          >
            {NAV_LINKS.map(({ name, href }, index) => (
              <div key={index} className="overflow-hidden">
                <motion.a
                  variants={item}
                  onClick={() => {
                    setIsVisible(false);
                    pathname !== href && navigateTo(href);
                  }}
                  className={`cursor-pointer flex justify-center items-center ${
                    pathname === href ? "text-[#263e17]" : "text-[#456033]"
                  } text-5xl xs:text-6xl`}
                >
                  <span>{name}</span>
                  {pathname === href && (
                    <motion.img
                      animate={{
                        rotate: [-45, 60, -45],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-10 ml-4"
                      src="/assets/images/smiley.png"
                      alt="Smiley - Active Page"
                    />
                  )}
                </motion.a>
              </div>
            ))}
          </motion.div>
          <button
            onClick={() => {
              setIsVisible(false);
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
              className="mx-auto text-3xl sm:text-4xl text-[#135D29] "
            >
              close
            </motion.a>
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
