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
      className={`hidden md:block w-[150px] h-[150px] z-[50] ${className} group`}
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
      className="cursor-pointer absolute rotate-3 -mt-1 group-hover:rotate-[15deg] transition-all z-50"
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
      className="cursor-pointer absolute rotate-[6deg] mt-[-2.5px] group-hover:rotate-12 hover:scale-110 transition-all"
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
    "group-hover:translate-x-[75px] group-hover:translate-y-[110px] ",
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
      className={`cursor-pointer absolute hover:scale-110 transition-all ${
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
