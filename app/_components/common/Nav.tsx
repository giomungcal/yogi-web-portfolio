"use client";

import { useLoaderContext } from "@/app/_context/AppContext";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  currentPage: "home" | "projects" | "techstack" | "interests";
  isMobile: boolean;
  className?: string;
};

const NAV_LINKS = ["home", "projects", "techstack", "interests"];

const NAV_COLORS = [
  "bg-[#F5D1ED]",
  "bg-[#E9F9C6]",
  "bg-[#D3C2FC]",
  "bg-[#FEDFC0]",
];

function Nav({ currentPage, isMobile, className }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return isMobile ? (
    <>
      <MobileNavTrigger className={className} setIsVisible={setIsVisible} />
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
        <DesktopHomeCTAButton isHovered={isHovered} />
      ) : (
        <DesktopHomeNavButton />
      )}
      {NAV_LINKS.map(
        (link, index) =>
          link !== "home" && (
            <DesktopNavButton
              key={index}
              link={link}
              index={index}
              currentPage={currentPage}
            />
          )
      )}
    </nav>
  );
}

export default Nav;

type MobileNavTriggerProps = {
  className: string | undefined;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

function MobileNavTrigger({ className, setIsVisible }: MobileNavTriggerProps) {
  return (
    <div
      className={`${
        className ? className : ""
      } flex w-full md:hidden gap-6 justify-center kode-mono-bold text-sm sm:text-lg font-semibold `}
    >
      <a
        onClick={() => setIsVisible(true)}
        className="w-[190px] h-[38px] bg-[#EDCFFF] border-2 border-black text-xl flex justify-center items-center cursor-pointer select-none"
      >
        <span>NAVIGATE</span>
      </a>
    </div>
  );
}

function MobileNav({
  setIsVisible,
}: {
  setIsVisible: (value: boolean) => void;
}) {
  const { navigateTo } = useLoaderContext();

  const menuVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.5 },
    },
    exit: { y: "-100%", transition: { duration: 1 } },
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
        <a
          key={index}
          onClick={() => {
            setIsVisible(false);
            navigateTo(`${link === "home" ? "/" : `/${link}`}`);
          }}
          className={`cursor-pointer w-full h-full border-4 border-black ${NAV_COLORS[index]} flex justify-center items-center`}
        >
          <span>{link}</span>{" "}
        </a>
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

type DesktopHomeCTAButtonProps = { isHovered: boolean };

function DesktopHomeCTAButton({ isHovered }: DesktopHomeCTAButtonProps) {
  const { navigateTo } = useLoaderContext();

  return (
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
        alt="GoHere Button"
        className="z-50"
      />
    </a>
  );
}

function DesktopHomeNavButton() {
  const { navigateTo } = useLoaderContext();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        navigateTo("/");
      }}
      className="cursor-pointer absolute rotate-[8deg] group-hover:rotate-12 hover:scale-110 transition-all"
    >
      <img src="/assets/images/home-stamp.png" alt="HoverButton" />
    </a>
  );
}

type DesktopNavButtonProps = {
  link: string;
  index: number;
  currentPage: string;
};

function DesktopNavButton({ link, index, currentPage }: DesktopNavButtonProps) {
  const { navigateTo } = useLoaderContext();

  const NAV_TRANSITIONS = [
    "group-hover:translate-x-[135px] z-[10]",
    "group-hover:translate-x-[265px] group-hover:-rotate-12 z-[9]",
    "group-hover:translate-x-[394px] z-[8]",
  ];

  return (
    <a
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
  );
}
