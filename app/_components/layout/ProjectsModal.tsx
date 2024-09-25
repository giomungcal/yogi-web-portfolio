"use client";

import { PROJECTS } from "@/app/_constants/projects";
import useBorder from "@/app/_hooks/useBorder";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import Button from "../common/Button";
type Props = {
  activeProjectId: number;
  setActiveProjectId: Dispatch<SetStateAction<number>>;
  handleCloseModal: () => void;
};

export default function ProjectsModal({
  activeProjectId,
  setActiveProjectId,
  handleCloseModal,
}: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);
  const [modalScope, modalAnimate] = useAnimate();
  const [imgSrc, setImgSrc] = useState(
    PROJECTS[activeProjectId].images[activeImg],
  );

  async function handleNextProject() {
    // Reset active image
    setActiveImg(0);

    // Animate transitions
    await modalAnimate(
      modalScope.current,
      { y: "100vh" },
      { ease: [0.25, 0.8, 0.5, 1] },
    );

    await setActiveProjectId((prev: number) =>
      prev !== null ? (PROJECTS.length - 1 === prev ? 0 : prev + 1) : 0,
    );

    await modalAnimate(
      modalScope.current,
      { y: "0%" },
      { ease: [0.25, 0.8, 0.5, 1] },
    );
  }

  async function handlePrevProject() {
    setActiveImg(0);

    await modalAnimate(
      modalScope.current,
      { y: "100vh" },
      { ease: [0.25, 0.8, 0.5, 1] },
    );
    await setActiveProjectId((prev: number) =>
      prev !== null ? (prev === 0 ? PROJECTS.length - 1 : prev - 1) : 0,
    );
    await modalAnimate(
      modalScope.current,
      { y: "0%" },
      { ease: [0.25, 0.8, 0.5, 1] },
    );
  }

  useEffect(() => {
    setImgLoading(true);
    setImgSrc(PROJECTS[activeProjectId].images[activeImg]);
  }, [activeProjectId, activeImg]);

  const [imgScope, imgAnimate] = useAnimate();

  async function handleNextImg() {
    await imgAnimate(imgScope.current, { opacity: 0 });
    PROJECTS[activeProjectId].images.length - 1 !== activeImg
      ? await setActiveImg((prev) => prev + 1)
      : await setActiveImg(0);
    await imgAnimate(imgScope.current, { opacity: 1 });
  }

  async function handlePrevImg() {
    await imgAnimate(imgScope.current, { opacity: 0 });
    activeImg !== 0
      ? await setActiveImg((prev) => prev - 1)
      : await setActiveImg(PROJECTS[activeProjectId].images.length - 1);
    await imgAnimate(imgScope.current, { opacity: 1 });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.3 },
      }}
      exit={{
        opacity: 0,
        display: "none",
        transition: { ease: [0.25, 0.8, 0.5, 1], duration: 0.4 },
      }}
      className="fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center bg-black/20 transition-all"
      onClick={handleCloseModal}
    >
      <motion.div
        ref={modalScope}
        initial={{ x: "calc(100vw + 50%)" }}
        animate={{
          x: "0%",
          transition: { ease: [0.25, 0.8, 0.5, 1], duration: 1 },
        }}
        exit={{
          x: "calc(100vw + 50%)",
          transition: { ease: [0.25, 0.8, 0.5, 1], duration: 0.6 },
        }}
        className="custom-scrollbar max-h-[90%] w-[80%] overflow-auto bg-[#F8F8F8] drop-shadow-lg md:h-[450px] md:min-w-[700px] lg:max-w-[1100px]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={useBorder({
            borderWidth: "13px",
            borderColor: "#CAD40F",
            borderDash: "26px",
            borderSpacing: "52px",
          })}
          className="custom-scrollbar flex h-full w-full flex-col justify-between gap-x-6 overflow-hidden p-10 md:flex-row"
        >
          <section className="group relative max-h-[400px] min-h-[300px] w-full overflow-hidden md:w-[50%] lg:w-[60%]">
            <AnimatePresence>
              {true && (
                <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center object-cover p-6 opacity-100">
                  <motion.img
                    animate={{
                      rotate: [0, 270, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-[80px]"
                    src="/assets/images/smiley.png"
                    alt="Smiley"
                  />
                </div>
              )}
            </AnimatePresence>
            <img
              ref={imgScope}
              className={twMerge(
                "absolute inset-0 z-20 h-full w-full object-cover transition-all",
                imgLoading ? "opacity-0" : "opacity-100",
              )}
              src={imgSrc}
              //   Image keeps on loading the previous src img, apparently it needed a key for it to be unique yay
              //  https://stackoverflow.com/questions/50690956/react-img-not-immediately-changing-when-src-changes-how-can-i-fix-this
              key={imgSrc}
              alt={`${PROJECTS[activeProjectId].name} - Image ${activeImg + 1}`}
              onLoad={() => {
                console.log("Img has loaded.");
                setImgLoading(false);
              }}
              onError={() => {
                console.log("Encountered an error loading image.");
              }}
            />
            {PROJECTS[activeProjectId].images.length > 1 && (
              <>
                <Button
                  className="absolute bottom-2 left-2 z-30 lg:opacity-0 lg:group-hover:opacity-80"
                  onClick={handlePrevImg}
                >
                  <MdNavigateBefore />
                </Button>
                <Button
                  className="absolute bottom-2 right-2 z-30 lg:opacity-0 lg:group-hover:opacity-80"
                  onClick={handleNextImg}
                >
                  <MdNavigateNext />
                </Button>
              </>
            )}
          </section>
          <section className="relative flex h-full flex-col items-start justify-between md:w-[50%] lg:w-[40%]">
            <>
              <ModalContent activeProjectId={activeProjectId} />
              <ModalControls
                activeProjectId={activeProjectId}
                handleNextProject={handleNextProject}
                handlePrevProject={handlePrevProject}
                handleCloseModal={handleCloseModal}
              />
            </>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

type ModalProps = {
  activeProjectId: number;
};

function ModalContent({ activeProjectId }: ModalProps) {
  return (
    <div className="flex w-full flex-col items-start gap-y-3 py-4 md:py-0">
      <div className="flex w-[90%] justify-between">
        <h2 className="danfo-regular text-4xl leading-[1.8rem] text-[#95A331] xs:text-5xl xs:leading-[2.4rem] sm:text-6xl sm:leading-[3rem] md:text-[3.8rem] md:leading-[3.5rem] lg:text-[4.1rem]">
          {PROJECTS[activeProjectId].name}
        </h2>
      </div>

      <h3 className="kode-mono-bold text-[13px] tracking-tight text-black/60">
        // made with{" "}
        {PROJECTS[activeProjectId].techstack.map((p, index) => {
          return PROJECTS[activeProjectId].techstack.length - 1 !== index
            ? `${p}, `
            : `${p}`;
        })}
      </h3>
      <div className="custom-scrollbar max-h-32 min-h-12 overflow-auto">
        <p className="jetbrains-mono-medium text-xs">
          {PROJECTS[activeProjectId].description}
        </p>
      </div>
    </div>
  );
}

type ModalControlProps = ModalProps & {
  handleNextProject: () => void;
  handlePrevProject: () => void;
  handleCloseModal: () => void;
};

function ModalControls({
  activeProjectId,
  handleNextProject,
  handlePrevProject,
  handleCloseModal,
}: ModalControlProps) {
  return (
    <div className="flex w-full flex-col items-end gap-x-2 gap-y-2 sm:flex-row sm:justify-between md:items-center md:text-sm lg:text-base">
      <div className="flex gap-x-2">
        {PROJECTS[activeProjectId].website && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                {PROJECTS[activeProjectId].websiteLink && (
                  <a
                    href={PROJECTS[activeProjectId].websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-white">
                      <RiExternalLinkLine size={20} />
                    </Button>{" "}
                  </a>
                )}
              </TooltipTrigger>
              <TooltipContent className="rounded bg-[#435934] px-4 py-2 text-sm">
                <p className="text-white">site</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {PROJECTS[activeProjectId].github && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                {PROJECTS[activeProjectId].githubLink && (
                  <a
                    href={PROJECTS[activeProjectId].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-white">
                      <FiGithub size={20} />
                    </Button>
                  </a>
                )}
              </TooltipTrigger>
              <TooltipContent className="rounded bg-[#435934] px-4 py-2 text-sm">
                <p className="text-white">github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex gap-x-2">
        <Button onClick={handleCloseModal} className="max-w-20 bg-[#e4c4b2]">
          <span className="text-yellow-900 tracking-tight">
            <IoMdClose />
          </span>
        </Button>
        <Button onClick={handlePrevProject} className="max-w-20 bg-[#FAFF5F]">
          <span className="text-yellow-900 tracking-tight">
            <MdNavigateBefore />
          </span>
        </Button>
        <Button onClick={handleNextProject} className="max-w-20 bg-[#FAFF5F]">
          <span className="text-yellow-900 tracking-tight">
            <MdNavigateNext />
          </span>
        </Button>
      </div>
    </div>
  );
}
