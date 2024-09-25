"use client";

import { NAV_LINKS } from "@/app/_constants/links";
import { useLoaderContext } from "@/app/_context/AppContext";
import * as motion from "framer-motion/client";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  className?: string;
};

export default function DesktopNav({ className }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { pathname } = useLoaderContext();

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`z-[50] hidden h-[150px] w-[150px] md:block ${className} group`}
    >
      {pathname === "/" ? (
        <DesktopHomeCTAButton isHovered={isHovered} />
      ) : (
        <DesktopHomeNavButton />
      )}
      {NAV_LINKS.map(
        ({ name, href }, index) =>
          name !== "home" && (
            <DesktopNavButton
              key={index}
              href={href}
              name={name}
              index={index}
            />
          ),
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
      className="absolute z-50 -mt-1 rotate-3 cursor-pointer transition-all group-hover:rotate-[15deg]"
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
        className="z-[100]"
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
      className="absolute mt-[-2.5px] rotate-[6deg] cursor-pointer transition-all hover:scale-110 group-hover:rotate-12"
    >
      <img src="/assets/images/home-stamp.png" alt="HoverButton" />
    </a>
  );
}

type DesktopNavButtonProps = {
  href: string;
  name: string;
  index: number;
};

function DesktopNavButton({ href, name, index }: DesktopNavButtonProps) {
  const { navigateTo, pathname } = useLoaderContext();

  const NAV_TRANSITIONS = [
    "group-hover:translate-x-[135px] ",
    "group-hover:translate-x-[265px] group-hover:-rotate-12 ",
    "group-hover:translate-x-[394px] mt-2 -rotate-6",
    "group-hover:translate-x-[524px] group-hover:-rotate-12 ",
  ];

  let zIndexHierarchy = 0;

  if (href === pathname) {
    zIndexHierarchy = 50;
  } else {
    zIndexHierarchy = (NAV_LINKS.length - index) * 10;
  }

  const isTheButtonTheCurrentPage = href === pathname;

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        !isTheButtonTheCurrentPage
          ? navigateTo(href)
          : toast(`this is the ${name} page! ✬`);
      }}
      className={`absolute cursor-pointer transition-all hover:scale-110 ${
        NAV_TRANSITIONS[index - 1]
      }`}
      style={{ zIndex: zIndexHierarchy }}
    >
      <img
        src={`/assets/images/${name.split(" ").join("")}-stamp.png`}
        alt={name}
      />
    </a>
  );
}
