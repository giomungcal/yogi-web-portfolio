"use client";

import DesktopNav from "@/app/_components/common/DesktopNav";
import Wrapper from "@/app/_components/layout/Wrapper";
import { TECH_STACK } from "@/app/_constants/stack";
import useBorder from "@/app/_hooks/useBorder";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TechStack() {
  return (
    <Wrapper borderColor="gray">
      <main className="h-full w-full flex flex-col justify-between p-6">
        <div className="flex h-full">
          <header className="h-full flex flex-col justify-around items-start">
            <div className=" -mt-4 -ml-2">
              <DesktopNav />
            </div>
            <section className="danfo-comb leading-[4.5rem]">
              <h1 className="text-[96px] text-[#62708D] ">
                TECH
                <br />
                STACK
              </h1>
            </section>
          </header>
          <section className="md:h-full md:w-full grid md:grid-rows-3 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-3 md:gap-2 lg:gap-3 pl-6 pb-6">
            {TECH_STACK.map(({ title, link, Icon }, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center bg-[#9B97CF]/20 group"
                    style={useBorder({
                      borderWidth: "1.2px",
                      borderColor: "#856EAF",
                      borderDash: "15px",
                      borderSpacing: "25px",
                    })}
                  >
                    <TooltipTrigger>
                      <Icon
                        size={38}
                        className={`text-[#62708D] group-hover:text-[#313b51] transition-colors`}
                      />
                    </TooltipTrigger>
                  </div>
                  <TooltipContent className="bg-[#141b28] text-sm px-4 py-2 rounded">
                    <p className="text-white">{title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </section>
        </div>
        <div className="">
          <h2 className="danfo-comb leading-[4rem] text-[86px] text-[#6C6790] ">
            & OTHER SKILLS
          </h2>
        </div>
      </main>
    </Wrapper>
  );
}
