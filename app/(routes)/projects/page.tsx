"use client";

import DesktopNav from "@/app/_components/common/DesktopNav";
import { JojoButterflyStamp } from "@/app/_components/common/JojoButterflyStamp";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import { PROJECTS } from "@/app/_constants/projects";
import useBorder from "@/app/_hooks/useBorder";
import * as motion from "framer-motion/client";
import { ButtonHTMLAttributes, ReactNode, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<number>(0);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);

  function handleOpenModal(index: number): void {
    setActiveProjectId(index);
    modalRef.current?.showModal();

    // modalOverlayRef.current?.classList.add("modal-open");
    if (modalOverlayRef.current)
      modalOverlayRef.current.style.display = "block";
  }

  return (
    <>
      <Wrapper borderColor={"lightgreen"}>
        <main className="flex w-full h-full justify-center md:justify-around md:p-2">
          <header className="md:mr-6">
            <DesktopNav />
            <motion.img
              src="/assets/images/jolyne-banner.png"
              alt="Jolyne Banner"
              className="hidden absolute md:block lg:bottom-[-85px] md:bottom-[-55px] left-[-60px] lg:w-[282px] md:w-[260px] "
              whileHover={{ scale: [null, 1.1, 1.1] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </header>
          <div className="flex flex-col justify-center md:items-start">
            <LandingTitle />
            <MobileNavTrigger />
            <section className="md:h-full md:w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 md:gap-2 lg:gap-3 md:pb-4 md:pr-4 md:pt-3 lg:pt-0 mx-8 md:mx-auto my-8 md:my-0 z-50">
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

      <ProjectsModal
        modalRef={modalRef}
        modalOverlayRef={modalOverlayRef}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />
    </>
  );
}

function ProjectsModal({
  modalRef,
  modalOverlayRef,
  activeProjectId,
  setActiveProjectId,
}) {
  const [activeImg, setActiveImg] = useState(0);

  function handleNextImg() {
    PROJECTS[activeProjectId].images.length - 1 !== activeImg
      ? setActiveImg((prev) => prev + 1)
      : setActiveImg(0);
  }

  function handlePrevImg() {
    activeImg !== 0
      ? setActiveImg((prev) => prev - 1)
      : setActiveImg(PROJECTS[activeProjectId].images.length - 1);
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    modalOverlayRef.current.style.display = "none";
    modalRef.current.close();
  }

  return (
    <div
      ref={modalOverlayRef}
      className="modal-overlay hidden fixed top-0 bottom-0 left-0 right-0 bg-black/20"
      onClick={handleOverlayClick}
    >
      <dialog
        ref={modalRef}
        className="w-[80%] md:h-[450px] md:min-w-[700px] lg:max-w-[864px] bg-[#F8F8F8] drop-shadow-lg no-scrollbar overflow-auto"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={useBorder({
            borderWidth: "13px",
            borderColor: "#CAD40F",
            borderDash: "26px",
            borderSpacing: "52px",
          })}
          className=" w-full h-full flex md:flex-row flex-col justify-between p-10 gap-x-6 overflow-hidden"
        >
          <div className="relative md:w-[50%] w-full min-h-[300px] max-h-[400px] bg-black overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={PROJECTS[activeProjectId].images[activeImg]}
              alt="Project Image"
            />
            <div>
              {PROJECTS[activeProjectId].images.length > 1 && (
                <>
                  <Button
                    className="absolute bottom-2 left-2"
                    onClick={handlePrevImg}
                  >
                    prev
                  </Button>
                  <Button
                    className="absolute bottom-2 right-2"
                    onClick={handleNextImg}
                  >
                    next
                  </Button>
                </>
              )}
            </div>
          </div>
          <section className="relative md:w-[50%] h-full flex flex-col justify-between items-start">
            <>
              <div className="w-full flex flex-col items-start gap-y-3 py-4 md:py-0">
                <div className="w-[90%] flex justify-between">
                  <h2 className="danfo-regular text-4xl leading-[1.8rem] xs:text-5xl xs:leading-[2.4rem] sm:text-6xl sm:leading-[3rem] md:text-[3.8rem] lg:text-[4.1rem] text-[#95A331] md:leading-[3.5rem] ">
                    {PROJECTS[activeProjectId].name}
                  </h2>
                </div>

                <h3 className="kode-mono-bold text-[13px] text-black/60 tracking-tight">
                  // made with{" "}
                  {PROJECTS[activeProjectId].techstack.map((p, index) => {
                    return PROJECTS[activeProjectId].techstack.length - 1 !==
                      index
                      ? `${p}, `
                      : `${p}`;
                  })}
                </h3>
                <div className="overflow-auto min-h-12 max-h-32 custom-scrollbar">
                  <p className="jetbrains-mono-medium text-xs">
                    {PROJECTS[activeProjectId].description}
                  </p>
                </div>
              </div>
              <div className="w-full flex sm:flex-row sm:justify-between  items-end flex-col gap-y-2 gap-x-2 md:text-sm lg:text-base">
                <div className="flex gap-x-2 items-end">
                  {PROJECTS[activeProjectId].website && (
                    <Button className="text-white">site</Button>
                  )}
                  {PROJECTS[activeProjectId].github && (
                    <Button className="text-white">github</Button>
                  )}
                </div>
                <div className="flex gap-x-2 items-end">
                  <Button
                    onClick={() => {
                      modalOverlayRef.current.style.display = "none";
                      modalRef.current?.close();
                    }}
                    className="bg-[#FAFF5F] max-w-20"
                  >
                    <span className="text-yellow-900 tracking-tight">
                      close
                    </span>
                  </Button>
                  <Button
                    onClick={() =>
                      setActiveProjectId((prev: number) =>
                        prev !== null
                          ? PROJECTS.length - 1 === prev
                            ? 0
                            : prev + 1
                          : 0
                      )
                    }
                    className="bg-[#FAFF5F] max-w-20"
                  >
                    <span className="text-yellow-900 tracking-tight">next</span>
                  </Button>
                </div>
              </div>
            </>
          </section>
        </div>
      </dialog>
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        " jetbrains-mono-extrabold bg-[#DCF615] border-2 border-black h-10 px-4 select-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function LandingTitle() {
  return (
    <section className="relative flex justify-center  mt-8 sm:mt-4 md:mt-0">
      <h1 className="text-[#94BD33] lg:text-[123px] text-[45px] xs:text-[70px] sm:text-[96px] danfo-comb lg:mt-[-15px] md:mb-[-20px] lg:mb-[-5px]">
        PROJECTS
      </h1>
      <JojoButterflyStamp
        fileName="stamp2"
        className="hidden md:block z-10 w-[50px] md:w-[60px] lg:w-[70px] absolute  md:right-[-30px] md:bottom-[0px] rotate-[15deg] hover:scale-110 transition-all "
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
      className="flex flex-col justify-center items-center cursor-pointer bg-[#FFFBEE] p-4 md:min-h-[100px] md:max-h-[120px] min-h-[70px]"
      style={useBorder({
        borderWidth: "1.2px",
        borderColor: "#E3801C",
        borderDash: "20px",
        borderSpacing: "31px",
      })}
    >
      <span className="kode-mono-bold text-sm md:text-base leading-4 lg:text-lg lg:leading-4 text-[#DB874B] ">
        {name}
      </span>
      {subtext && (
        <p className="kode-mono-regular text-xs md:text-[9px] lg:text-xs text-[#DB874B] text-center">
          {subtext}
        </p>
      )}
    </button>
  );
}
