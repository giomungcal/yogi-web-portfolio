"use client";

import DesktopNav from "@/app/_components/common/DesktopNav";
import Footer from "@/app/_components/common/Footer";
import { JojoButterflyStamp } from "@/app/_components/common/JojoButterflyStamp";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
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
        <main className="h-full w-full flex flex-col md:justify-between justify-center p-6">
          <div className="flex h-full flex-col md:flex-row">
            <header className="h-full flex flex-col justify-between md:items-start">
              <div className=" md:-mt-6 md:-ml-2">
                <DesktopNav />
              </div>
              <section className="danfo-comb lg:leading-[4.5rem] xs:leading-[4rem] leading-[3rem] md:block flex justify-center items-center py-8 sm:py-6 md:py-0">
                <h1 className="lg:text-[96px] xs:text-[80px] text-[60px] text-[#338DA1] text-center md:text-left ">
                  TECH
                  <br />
                  STACK
                  <span className="block md:hidden md:text-[60px] sm:text-[55px] text-[45px]  sm:leading-[4rem] xs:leading-[3.5rem] leading-[2.5rem] text-[#4B9297]">
                    {" "}
                    & OTHER SKILLS
                  </span>
                </h1>
                <JojoButterflyStamp
                  fileName="stamp3"
                  className="hidden md:block z-10 w-[50px] md:w-[79px] absolute hover:scale-110 transition-all lg:ml-[203px] md:ml-[169px] mt-[-118px] "
                />
              </section>
              <MobileNavTrigger />
            </header>
            <section className="h-full w-full min-h-[306px] grid lg:grid-rows-3 grid-rows-4 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-2 lg:gap-3 md:pl-6 md:pb-6 p-4 md:p-0 z-[9]">
              {TECH_STACK.map(({ title, Icon }, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center bg-[#E7D6E2]/30 md:min-h-0 min-h-[70px] group"
                      style={useBorder({
                        borderWidth: "1.2px",
                        borderColor: "#D982C2",
                        borderDash: "15px",
                        borderSpacing: "25px",
                      })}
                    >
                      <TooltipTrigger>
                        <Icon
                          className={`lg:h-[38px] lg:w-[38px] h-[32px] w-[32px] text-[#b85495] group-hover:text-[#dc299d] group-hover:scale-110 transition-all`}
                        />
                      </TooltipTrigger>
                    </div>
                    <TooltipContent className="hidden lg:block bg-[#21005D] text-sm px-4 py-2 rounded">
                      <p className="text-white">{title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </section>
          </div>
          <div className="">
            <h2 className="hidden md:block danfo-comb leading-[4rem] lg:text-[86px] md:text-[70px] text-[#4B9297] ">
              & OTHER SKILLS
            </h2>
            <motion.img
              src="/assets/images/josuke-banner.png"
              alt="Josuke Banner"
              className="hidden z-[1] absolute md:block lg:bottom-[-82px] md:bottom-[-59px] lg:right-[-230px] md:right-[-165px] lg:w-[462px] md:w-[360px]  "
              whileHover={{ scale: [null, 1.06, 1.06] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </div>
          <MobileNotice />
        </main>
      </Wrapper>
    </div>
  );
}
