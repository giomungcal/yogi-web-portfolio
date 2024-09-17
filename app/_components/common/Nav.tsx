import React from "react";

type Props = {
  isHome?: boolean;
  className?: string;
};

function Nav({ isHome, className }: Props) {
  const NAV_LINKS = ["projects", "tech stack", "interests", "games"];

  return (
    <div className={`z-20 ${className} group `}>
      {isHome && (
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="absolute z-20 group-hover:rotate-12 transition-all"
        >
          <img src="/assets/images/gohere-stamp.png" alt="HoverButton" />
        </a>
      )}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-10 -rotate-12 group-hover:-rotate-3 group-hover:translate-x-[135px] hover:scale-110 transition-all"
      >
        <img src="/assets/images/projects-stamp.png" alt="Projects" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-10 translate-y-4 translate-x-2 group-hover:-rotate-3 group-hover:translate-x-[280px] hover:scale-110 transition-all"
      >
        <img src="/assets/images/techstack-stamp.png" alt="Tech Stack" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-10 rotate-12 group-hover:translate-x-[394px] group-hover:rotate-0 hover:scale-110 transition-all"
      >
        <img src="/assets/images/interests-stamp.png" alt="Interests" />
      </a>
    </div>
  );
}

export default Nav;
