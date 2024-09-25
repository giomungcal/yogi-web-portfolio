"use client";

import { useLoaderContext } from "@/app/_context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FakeLoader = ({}): React.ReactNode => {
  const { isFakeLoading } = useLoaderContext();

  return (
    <AnimatePresence mode="wait">
      {isFakeLoading && (
        <motion.div className="fixed inset-0 z-[60] h-[100vh] overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: isFakeLoading ? "0%" : "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 z-[60] flex h-[50%] w-full items-center border-[17px] border-dashed border-[#FFFFFF] bg-[#F5D1ED]"
          >
            <motion.img
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              src="/assets/images/stamp1.png"
              alt="Jojo Stamp"
              className="z-[60] mx-auto w-[130px] md:w-[170px]"
            />
            <motion.div className="absolute bottom-[-20px] left-[-20px] right-0 w-[120%] border-b-[2px] border-black"></motion.div>
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: isFakeLoading ? "0%" : "100%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-0 flex h-[50%] w-full items-center border-[17px] border-dashed border-[#FFFFFF] bg-[#E7D1F5]"
          >
            <motion.div className="absolute left-[-20px] right-0 top-[-20px] w-[120%] border-b-[2px] border-black"></motion.div>
            <motion.img
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              src="/assets/images/stamp2.png"
              alt="Jojo Stamp"
              className="z-[60] mx-auto w-[130px] md:w-[170px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FakeLoader;
