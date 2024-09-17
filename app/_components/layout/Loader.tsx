"use client";

import { useLoaderContext } from "@/app/_context/LoaderContext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Loader = ({}): React.ReactNode => {
  const borderStyle = {
    backgroundImage: `
            repeating-linear-gradient(0deg, white, white 26px, transparent 26px, transparent 52px, white 52px),
            repeating-linear-gradient(90deg, white, white 26px, transparent 26px, transparent 52px, white 52px),
            repeating-linear-gradient(180deg, white, white 26px, transparent 26px, transparent 52px, white 52px),
            repeating-linear-gradient(270deg, white, white 26px, transparent 26px, transparent 52px, white 52px)
          `,
    backgroundSize: "13px 100%, 100% 13px, 13px 100%, 100% 13px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };

  const { isLoading } = useLoaderContext();
  console.log(isLoading);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div className="absolute inset-0 z-[50]">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: isLoading ? "0%" : "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-[50%] border-[17px] border-[#FFFFFF] border-dashed bg-[#F5D1ED] absolute top-0 z-[60] flex items-center"
            // style={borderStyle}
          >
            <motion.img
              animate={{
                scale: [1, 1.03, 1], // Scale up and down for heartbeat effect
              }}
              transition={{
                duration: 1, // Duration of one heartbeat cycle
                ease: "easeInOut",
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Loop the animation
              }}
              src="/assets/images/stamp1.png"
              alt="Jojo Stamp"
              className="z-[60] w-[170px] lg:w-[200px] mx-auto"
            />
            <motion.div className="absolute w-[120%] bottom-[-20px] left-[-20px] right-0 border-b-[2px] border-black"></motion.div>
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: isLoading ? "0%" : "100%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-[50%] border-[17px] border-[#FFFFFF] border-dashed  bg-[#E7D1F5] absolute bottom-0 flex items-center"
            // style={borderStyle}
          >
            <motion.div className="absolute w-[120%] top-[-20px] left-[-20px] right-0 border-b-[2px] border-black"></motion.div>
            <motion.img
              animate={{
                scale: [1, 1.03, 1], // Scale up and down for heartbeat effect
              }}
              transition={{
                duration: 1, // Duration of one heartbeat cycle
                ease: "easeInOut",
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Loop the animation
              }}
              src="/assets/images/stamp2.png"
              alt="Jojo Stamp"
              className="z-[60] w-[170px] lg:w-[200px] mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
