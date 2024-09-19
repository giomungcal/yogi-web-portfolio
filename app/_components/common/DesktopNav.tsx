"use client";

import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext } from "@/app/_context/AppContext";
import * as motion from "framer-motion/client";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  currentPage: "home" | "projects" | "techstack" | "interests";
  className?: string;
};

export default function DesktopNav({ currentPage, className }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
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
        ({ name, href }, index) =>
          name !== "home" && (
            <DesktopNavButton
              key={index}
              link={href}
              name={name}
              index={index}
              currentPage={currentPage}
            />
          )
      )}
    </nav>
  );
}

type DesktopHomeCTAButtonProps = { isHovered: boolean };

function DesktopHomeCTAButton({ isHovered }: DesktopHomeCTAButtonProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
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
      className="cursor-pointer absolute top-4 rotate-[6deg] group-hover:rotate-12 hover:scale-110 transition-all"
    >
      <img src="/assets/images/home-stamp.png" alt="HoverButton" />
    </a>
  );
}

type DesktopNavButtonProps = {
  link: string;
  name: string;
  index: number;
  currentPage: string;
};

function DesktopNavButton({
  link,
  name,
  index,
  currentPage,
}: DesktopNavButtonProps) {
  const { navigateTo } = useLoaderContext();

  const NAV_TRANSITIONS = [
    "group-hover:translate-x-[135px] z-[10]",
    "group-hover:translate-x-[265px] group-hover:-rotate-12 z-[9]",
    "group-hover:translate-x-[394px] z-[8]",
  ];

  const isTheButtonTheCurrentPage = name === currentPage;

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        !isTheButtonTheCurrentPage
          ? navigateTo(link)
          : toast(`this is the ${name} page!`, { icon: "🦋" });
      }}
      className={`cursor-pointer absolute hover:scale-110 transition-all ${
        NAV_TRANSITIONS[index - 1]
      } ${name === currentPage && "z-50"}`}
    >
      <img src={`/assets/images/${name}-stamp.png`} alt={name} />
    </a>
  );
}
