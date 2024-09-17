"use client";

import * as motion from "framer-motion/client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  currentPage: "home" | "projects" | "techstack" | "interests";
  isMobile: boolean;
  className?: string;
};

function Nav({ currentPage, isMobile, className }: Props) {
  const NAV_LINKS = ["projects", "techstack", "interests"];

  const NAV_TRANSITIONS = [
    "group-hover:translate-x-[135px] z-10",
    "group-hover:translate-x-[265px] group-hover:-rotate-12",
    "group-hover:translate-x-[394px]",
  ];

  const [isHovered, setIsHovered] = useState(false);

  return isMobile ? (
    <div
      className={`flex w-full min-w-[100px] md:hidden gap-6 justify-center ${className} kode-mono-regular text-sm sm:text-lg font-semibold`}
    >
      <Link href={`/`}>
        <span>home</span>{" "}
      </Link>
      <Link href={`/projects`}>
        <span>projects</span>{" "}
      </Link>
      <Link href={`/techstack`}>
        <span>techstack</span>
      </Link>
      <Link href={`/interests`}>
        <span>interests</span>
      </Link>
    </div>
  ) : (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hidden md:block w-[150px] h-[150px] z-50 ${className} group `}
    >
      {currentPage === "home" ? (
        <Link
          href={`/`}
          className="absolute group-hover:rotate-[15deg] transition-all z-50"
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
        </Link>
      ) : (
        <Link
          href={`/`}
          className="absolute rotate-[8deg] group-hover:rotate-12 hover:scale-110 transition-all"
        >
          <img src="/assets/images/home-stamp.png" alt="HoverButton" />
        </Link>
      )}
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={`/${link}`}
          className={`absolute hover:scale-110 transition-all ${
            NAV_TRANSITIONS[index]
          } ${link === currentPage && "z-50"}`}
        >
          <img src={`/assets/images/${link}-stamp.png`} alt={link} />
        </Link>
      ))}
    </div>
  );
}

export default Nav;
