"use client";

import DesktopNav from "@/app/_components/common/DesktopNav";
import { JojoButterflyStamp } from "@/app/_components/common/JojoButterflyStamp";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import ProjectsModal from "@/app/_components/layout/ProjectsModal";
import Wrapper from "@/app/_components/layout/Wrapper";
import { PROJECTS } from "@/app/_constants/projects";
import useBorder from "@/app/_hooks/useBorder";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<number>(0);
  const [modalDisplayed, setIsModalDisplayed] = useState<boolean>(false);

  function handleOpenModal(index: number): void {
    setActiveProjectId(index);
    setIsModalDisplayed(true);
  }

  function handleCloseModal() {
    setIsModalDisplayed(false);
    console.log("Closing");
  }

  useEffect(() => {
    if (modalDisplayed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalDisplayed]);

  return (
    <>
      <Wrapper borderColor={"lightgreen"}>
        <main className="flex h-full w-full justify-center md:justify-around md:p-2">
          <header className="md:mr-6">
            <DesktopNav />
            <motion.img
              src="/assets/images/jolyne-banner.png"
              alt="Jolyne Banner"
              className="absolute left-[-60px] hidden md:bottom-[-55px] md:block md:w-[260px] lg:bottom-[-85px] lg:w-[282px]"
              whileHover={{ scale: [null, 1.1, 1.1] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </header>
          <div className="flex flex-col justify-center md:items-start">
            <LandingTitle />
            <MobileNavTrigger />
            <section className="z-[1] mx-8 my-8 grid grid-cols-2 gap-3 sm:grid-cols-2 md:mx-auto md:my-0 md:h-full md:w-full md:grid-cols-4 md:gap-2 md:pb-4 md:pr-4 md:pt-3 lg:gap-3 lg:pt-0">
              {PROJECTS.map(({ id, name, subtext }, index) => (
                <ProjectTile
                  key={id}
                  id={id}
                  name={name}
                  subtext={subtext}
                  index={index}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </section>
            <MobileNotice className="pb-8" />
          </div>
        </main>
      </Wrapper>
      <AnimatePresence>
        {modalDisplayed && (
          <ProjectsModal
            activeProjectId={activeProjectId}
            setActiveProjectId={setActiveProjectId}
            handleCloseModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function LandingTitle() {
  return (
    <section className="relative mt-8 flex justify-center sm:mt-4 md:mt-0">
      <h1 className="danfo-comb text-[45px] text-[#94BD33] xs:text-[70px] sm:text-[96px] md:mb-[-20px] lg:mb-[-5px] lg:mt-[-15px] lg:text-[123px]">
        PROJECTS
      </h1>
      <JojoButterflyStamp
        fileName="stamp2"
        className="absolute z-[1] hidden w-[50px] rotate-[15deg] transition-all hover:scale-110 md:bottom-[0px] md:right-[-30px] md:block md:w-[60px] lg:w-[70px]"
      />
    </section>
  );
}

type ProjectTileProps = {
  id: number;
  name: string;
  subtext?: string;
  index: number;
  handleOpenModal: (index: number) => void;
};

function ProjectTile({
  id,
  name,
  subtext,
  index,
  handleOpenModal,
}: ProjectTileProps) {
  return (
    <button
      onClick={() => handleOpenModal(index)}
      className="flex min-h-[70px] cursor-pointer flex-col items-center justify-center bg-[#fef5dc] p-4 hover:bg-[#fff0c4] md:max-h-[120px] md:min-h-[100px]"
      style={useBorder({
        borderWidth: "1.2px",
        borderColor: "#E3801C",
        borderDash: "20px",
        borderSpacing: "31px",
      })}
    >
      <span className="kode-mono-bold text-sm leading-4 text-[#DB874B] md:text-base lg:text-lg lg:leading-4">
        {name}
      </span>
      {subtext && (
        <p className="kode-mono-regular text-center text-xs text-[#DB874B] md:text-[9px] lg:text-xs">
          {subtext}
        </p>
      )}
    </button>
  );
}
