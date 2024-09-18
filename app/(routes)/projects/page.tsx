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
      <div className="flex w-full h-full md:justify-around md:p-2">
        <div className="md:mr-6">
          <Nav isMobile={false} currentPage="projects" />
          <motion.img
            src="/assets/images/jolyne-banner.png"
            alt="Jolyne Banner"
            className="hidden absolute md:block lg:bottom-[-85px] md:bottom-[-55px] left-[-60px] lg:w-[282px] md:w-[260px] "
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
          />
        </div>
        <div className="flex flex-col justify-center md:items-start">
          <div className="relative">
            <h1 className="text-[#94BD33] lg:text-[123px] text-[40px] sm:text-[96px] danfo-comb lg:mt-[-15px] lg:mb-[-5px]">
              PROJECTS
            </h1>
            <img
              src="/assets/images/stamp2.png"
              alt="Jojo Stamp"
              className="z-10 w-[50px] md:w-[60px] lg:w-[70px] absolute md:right-[-30px] md:bottom-[0px] rotate-[15deg] hover:scale-110 transition-all "
            />
          </div>
          {/* <Nav currentPage="projects" /> */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto h-full md:w-full md:-mt-4 gap-3 md:gap-2 lg:gap-3 md:pb-4 md:pr-4 md:pt-3 lg:pt-0 mt-6 mb-8 md:mb-0">
            {PROJECTS.map(({ id, name, subtext }) => (
              <button
                key={id}
                className="flex flex-col justify-center items-center bg-[#FFFBEE] p-4 md:min-h-[100px] md:max-h-[120px] min-h-[80px]"
                style={useBorder({
                  borderWidth: "1.2px",
                  borderColor: "#E3801C",
                  borderDash: "20px",
                  borderSpacing: "31px",
                })}
              >
                <span className="kode-mono-bold text-base leading-4 lg:text-lg lg:leading-4 text-[#DB874B] ">
                  {name}
                </span>
                {subtext && (
                  <p className="kode-mono-regular text-xs md:text-[9px] lg:text-xs text-[#DB874B]">
                    {subtext}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;