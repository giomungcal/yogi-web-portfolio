"use client";

import Nav from "@/app/_components/common/Nav";
import Wrapper from "@/app/_components/layout/Wrapper";
import useBorder from "@/app/_hooks/useBorder";
import { motion } from "framer-motion";

function Projects() {
  const PROJECTS = [
    {
      id: 1,
      name: "this site ★",
      title: "This Site ★",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
    {
      id: 2,
      name: "pinterest clone",
      title: "Pinterest Clone",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
    {
      id: 3,
      name: "wordle game",
      title: "Wordle Game",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
    {
      id: 4,
      name: "small projects",
      title: "Small Projects",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
    {
      id: 5,
      name: "electro knight",
      subtext: "mobile game",
      title: "ElectroKnight Mobile Game",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
    {
      id: 6,
      name: "previous portfolio",
      title: "Previous Portfolio",
      techstack: ["html", "css", "react"],
      website: true,
      github: false,
    },
    {
      id: 7,
      name: "figma designs",
      title: "Figma Designs",
      techstack: ["html", "css", "react"],
      website: false,
      github: false,
    },
    {
      id: 8,
      name: "school projects",
      title: "School Projects",
      techstack: ["html", "css", "react"],
      website: false,
      github: true,
    },
  ];

  // const borderStyleVar  = useBorder();
  // console.log(borderStyleVar);

  return (
    <Wrapper borderColor={"lightgreen"}>
      <div className="flex w-full h-full md:justify-around p-2">
        <div>
          <Nav isMobile={false} currentPage="projects" />
          <motion.img
            src="/assets/images/jolyne-banner.png"
            alt="Jolyne Banner"
            className="hidden absolute md:block bottom-[-85px] left-[-60px] w-[282px]  "
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
          />
        </div>
        <div className="flex flex-col w-[636px] justify-center items-start">
          <h1 className="text-[#94BD33] md:text-[128px] danfo-comb md:mt-[-15px] md:mb-[-5px] ">
            PROJECTS
          </h1>
          <Nav isMobile={true} currentPage="projects" />
          <div className="grid grid-cols-4 h-full w-full -mt-4 gap-3">
            {PROJECTS.map(
              (
                { id, name, subtext, title, techstack, website, github },
                index
              ) => (
                <button
                  key={id}
                  className="flex flex-col justify-center items-center bg-[#FFFBEE] p-4"
                  style={useBorder({
                    borderWidth: "1.5px",
                    borderColor: "#E3801C",
                    borderDash: "20px",
                    borderSpacing: "31px",
                  })}
                >
                  <span className="kode-mono-bold text-lg leading-4 text-[#DB874B] ">
                    {name}
                  </span>
                  {subtext && (
                    <p className="kode-mono-regular text-xs text-[#DB874B]">
                      {subtext}
                    </p>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
