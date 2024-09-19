import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import Wrapper from "@/app/_components/layout/Wrapper";
import { PROJECTS } from "@/app/_constants/projects";
import useBorder from "@/app/_hooks/useBorder";
import * as motion from "framer-motion/client";

function Projects() {
  return (
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
          <section className="relative flex justify-center  mt-8 sm:mt-4 md:mt-0">
            <h1 className="text-[#94BD33] lg:text-[123px] text-[45px] xs:text-[70px] sm:text-[96px] danfo-comb lg:mt-[-15px] md:mb-[-20px] lg:mb-[-5px]">
              PROJECTS
            </h1>
            <img
              src="/assets/images/stamp2.png"
              alt="Jojo Stamp"
              className="hidden md:block z-10 w-[50px] md:w-[60px] lg:w-[70px] absolute  md:right-[-30px] md:bottom-[0px] rotate-[15deg] hover:scale-110 transition-all "
            />
          </section>
          <MobileNavTrigger />
          <section className="md:h-full md:w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 md:gap-2 lg:gap-3 md:pb-4 md:pr-4 md:pt-3 lg:pt-0 mx-8 md:mx-auto my-8 md:my-0">
            {PROJECTS.map(({ id, name, subtext }) => (
              <a
                key={id}
                className="flex flex-col justify-center items-center md:items-start cursor-pointer bg-[#FFFBEE] p-4 md:min-h-[100px] md:max-h-[120px] min-h-[70px]"
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
                  <p className="kode-mono-regular text-xs md:text-[9px] lg:text-xs text-[#DB874B]">
                    {subtext}
                  </p>
                )}
              </a>
            ))}
          </section>
        </div>
      </main>
    </Wrapper>
  );
}

export default Projects;
