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
          className={`danfo-regular fixed left-0 top-0 z-[50] flex h-screen w-full flex-col items-start justify-center bg-[#E9F9C6] p-8 text-xl md:hidden`}
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
                  className={`flex cursor-pointer items-center justify-center ${
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
                      className="ml-4 w-10"
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
            className="absolute right-8 top-8 flex items-center justify-center overflow-hidden"
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
              className="mx-auto text-3xl text-[#135D29] sm:text-4xl"
            >
              close
            </motion.a>
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
