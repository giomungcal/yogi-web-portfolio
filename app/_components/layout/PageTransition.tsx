// "use client";
// // components/PageTransition.tsx
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const PageTransition = ({ children }: { children: React.ReactNode }) => {
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     setIsExiting(false);
//   }, []);

//   const handleAnimationEnd = () => {
//     setIsExiting(false);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {/* <> */}
//       <motion.div
//         key="page-transition"
//         initial={{ y: "-100%" }}
//         animate={{ y: "0%" }}
//         exit={{ y: "100%" }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="w-full h-screen flex justify-center items-center absolute "
//         onAnimationComplete={handleAnimationEnd}
//       >
//         {children}
//       </motion.div>
//       {/* </> */}
//     </AnimatePresence>
//   );
// };

// export default PageTransition;
