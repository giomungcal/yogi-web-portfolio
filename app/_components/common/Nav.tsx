import Link from "next/link";
import React from "react";

type Props = {
  currentPage: "home" | "projects" | "techstack" | "interests";
  className?: string;
};

function Nav({ currentPage, className }: Props) {
  const NAV_LINKS = ["projects", "techstack", "interests"];

  const NAV_TRANSITIONS = [
    "group-hover:translate-x-[135px] z-10",
    "group-hover:translate-x-[265px] group-hover:-rotate-12",
    "group-hover:translate-x-[394px]",
  ];

  return (
    <div className={`w-[150px] h-[150px] z-50 ${className} group `}>
      {currentPage === "home" ? (
        <Link
          href={`/`}
          className="absolute group-hover:rotate-[15deg] transition-all z-50"
        >
          <img
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
