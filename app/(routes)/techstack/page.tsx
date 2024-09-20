"use client";

import DesktopNav from "@/app/_components/common/DesktopNav";
import { JojoButterflyStamp } from "@/app/_components/common/JojoButterflyStamp";
import Wrapper from "@/app/_components/layout/Wrapper";
import { TECH_STACK } from "@/app/_constants/stack";
import useBorder from "@/app/_hooks/useBorder";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as motion from "framer-motion/client";

export default function TechStack() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center overflow-hidden">
      <Wrapper borderColor="teal">
        <main className="h-full w-full flex flex-col justify-between p-6">
          <div className="flex h-full">
            <header className="h-full flex flex-col justify-between items-start">
              <div className=" -mt-6 -ml-2">
                <DesktopNav />
              </div>
              <section className="danfo-comb leading-[4.5rem]">
                <h1 className="text-[96px] text-[#338DA1] ">
                  TECH
                  <br />
                  STACK
                </h1>
                <JojoButterflyStamp
                  fileName="stamp3"
                  classNames="z-10 w-[50px] md:w-[79px] absolute hover:scale-110 transition-all ml-[203px] mt-[-118px] "
                />
              </section>
            </header>
            <section className="md:h-full md:w-full grid md:grid-rows-3 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-3 md:gap-2 lg:gap-3 pl-6 pb-6 z-[9]">
              {TECH_STACK.map(({ title, link, Icon }, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center bg-[#E7D6E2]/30 group"
                      style={useBorder({
                        borderWidth: "1.2px",
                        borderColor: "#D982C2",
                        borderDash: "15px",
                        borderSpacing: "25px",
                      })}
                    >
                      <TooltipTrigger>
                        <Icon
                          size={38}
                          className={`text-[#b85495] group-hover:text-[#dc299d] group-hover:scale-110 transition-all`}
                        />
                      </TooltipTrigger>
                    </div>
                    <TooltipContent className="bg-[#21005D] text-sm px-4 py-2 rounded">
                      <p className="text-white">{title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </section>
          </div>
          <div className="">
            <h2 className="danfo-comb leading-[4rem] text-[86px] text-[#4B9297] ">
              & OTHER SKILLS
            </h2>
            <motion.img
              src="/assets/images/josuke-banner.png"
              alt="Josuke Banner"
              className="hidden absolute md:block lg:bottom-[-82px] md:bottom-[-35px] right-[-230px] lg:w-[462px] md:w-[360px] z-[1] "
              whileHover={{ scale: [null, 1.06, 1.06] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </div>
        </main>
      </Wrapper>
    </div>
  );
}
