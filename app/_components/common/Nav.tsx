"use client";

import { useLoaderContext } from "@/app/_context/LoaderContext";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  currentPage: "home" | "projects" | "techstack" | "interests";
  isMobile: boolean;
  className?: string;
};

const NAV_LINKS = ["home", "projects", "techstack", "interests"];

const NAV_TRANSITIONS = [
  "group-hover:translate-x-[135px] z-10",
  "group-hover:translate-x-[265px] group-hover:-rotate-12",
  "group-hover:translate-x-[394px]",
];

const NAV_COLORS = [
  "bg-[#F5D1ED]",
  "bg-[#E9F9C6]",
  "bg-[#D3C2FC]",
  "bg-[#FEDFC0]",
];

function Nav({ currentPage, isMobile, className }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { navigateTo } = useLoaderContext();

  return isMobile ? (
    <>
      <div
        className={`${className} flex w-full md:hidden gap-6 justify-center kode-mono-bold text-sm sm:text-lg font-semibold `}
      >
        <a
          onClick={() => setIsVisible(true)}
          className="w-[190px] h-[38px] bg-[#EDCFFF] border-2 border-black text-xl flex justify-center items-center cursor-pointer select-none"
        >
          <span>NAVIGATE</span>
        </a>
      </div>
      <AnimatePresence>
        {isVisible && <MobileNav setIsVisible={setIsVisible} />}
      </AnimatePresence>
    </>
  ) : (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hidden md:block w-[150px] h-[150px] z-50 ${className} group `}
    >
      {currentPage === "home" ? (
        <a
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/");
          }}
          className="cursor-pointer absolute group-hover:rotate-[15deg] transition-all z-50"
        >
          <motion.img
            animate={{ y: isHovered ? 0 : [0, -15, 0, -15, 0] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 3,
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.95],
            }}
            src="/assets/images/gohere-stamp.png"
            alt="HoverButton"
            className="z-50"
          />
        </a>
      ) : (
        <a
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/");
          }}
          className="cursor-pointer absolute rotate-[8deg] group-hover:rotate-12 hover:scale-110 transition-all"
        >
          <img src="/assets/images/home-stamp.png" alt="HoverButton" />
        </a>
      )}
      {NAV_LINKS.map(
        (link, index) =>
          link !== "home" && (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(`/${link}`);
              }}
              className={`cursor-pointer absolute hover:scale-110 transition-all ${
                NAV_TRANSITIONS[index - 1]
              } ${link === currentPage && "z-50"}`}
            >
              <img src={`/assets/images/${link}-stamp.png`} alt={link} />
            </a>
          )
      )}
    </nav>
  );
}

export default Nav;

function MobileNav({
  setIsVisible,
}: {
  setIsVisible: (value: boolean) => void;
}) {
  const menuVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      //   opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: { y: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`md:hidden grid grid-cols-2 justify-center items-center absolute h-full w-full bg-light-purple z-[99] kode-mono-bold text-xl`}
    >
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={`${link === "home" ? "/" : `/${link}`}`}
          onClick={() => {
            setIsVisible(false);
          }}
          className={`w-full h-full border-4 border-black ${NAV_COLORS[index]} flex justify-center items-center`}
        >
          <span>{link}</span>{" "}
        </Link>
      ))}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute w-full h-[60px] flex justify-center items-center bg-[#FEFFEE] border-4 border-black mx-auto "
      >
        close
      </button>
    </motion.div>
  );
}
