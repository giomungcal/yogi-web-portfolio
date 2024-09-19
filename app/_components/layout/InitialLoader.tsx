"use client";

import { useLoaderContext } from "@/app/_context/AppContext";
import useBorder from "@/app/_hooks/useBorder";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const InitialLoader = ({}): React.ReactNode => {
  const { isLoading } = useLoaderContext();

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
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
    },
  };

  const WELCOME_LINEONE = "WELCOME TO";
  const WELCOME_LINETWO = "YOGI'S SPACE";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: "0%" }}
          animate={{
            y: ["0%"],
          }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.455, 0.03, 0.515, 0.955] }}
          className="absolute inset-0 z-[50] overflow-hidden"
        >
          <div
            style={useBorder({
              borderWidth: "13px",
              borderColor: "white",
              borderDash: "26px",
              borderSpacing: "52px",
            })}
            className="w-full h-[100%] bg-[#B2BFFF] absolute top-0 z-[60]  flex flex-col justify-end"
          >
            <motion.div className="danfo-regular md:text-[90px] lg:text-[100px] hidden md:block  ml-12 mb-12">
              <motion.span
                variants={container}
                initial="initial"
                animate="animate"
                className="flex leading-4 text-[#4a475d]"
              >
                {WELCOME_LINEONE.split("").map((l, index) => (
                  <motion.span key={index} variants={item}>
                    {l === " " ? "\u00A0" : l}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                variants={container}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mb-[-34px] flex text-[#543e69]"
              >
                {WELCOME_LINETWO.split("").map((l, index) => (
                  <motion.span key={index} variants={item}>
                    {l === " " ? "\u00A0" : l}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>
            <motion.img
              animate={{
                rotate: [0, 270, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[100px] absolute right-14 bottom-14"
              src="/assets/images/smiley.png"
              alt="Smiley"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
