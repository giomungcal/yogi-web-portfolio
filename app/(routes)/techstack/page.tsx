import DesktopNav from "@/app/_components/common/DesktopNav";
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
    <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Wrapper borderColor="teal">
        <main className="flex h-full w-full flex-col justify-center p-6 md:justify-between">
          <div className="flex h-full flex-col md:flex-row">
            <header className="flex h-full flex-col justify-between md:items-start">
              <div className="md:-ml-2 md:-mt-6">
                <DesktopNav />
              </div>
              <LandingTitle />
              <MobileNavTrigger />
            </header>
            <StackSection />
          </div>
          <div>
            <JosukeBanner />
            <h2 className="danfo-comb hidden leading-[4rem] text-[#4B9297] md:block md:text-[70px] lg:text-[86px]">
              & OTHER SKILLS
            </h2>
          </div>
          <MobileNotice />
        </main>
      </Wrapper>
    </div>
  );
}

function LandingTitle() {
  return (
    <section className="danfo-comb flex items-center justify-center py-8 leading-[3rem] xs:leading-[4rem] sm:py-6 md:block md:py-0 lg:leading-[4.5rem]">
      <h1 className="text-center text-[60px] text-[#338DA1] xs:text-[80px] md:text-left lg:text-[96px]">
        TECH
        <br />
        STACK
        <span className="block text-[45px] leading-[2.5rem] text-[#4B9297] xs:leading-[3.5rem] sm:text-[55px] sm:leading-[4rem] md:hidden md:text-[60px]">
          & OTHER SKILLS
        </span>
      </h1>
      <JojoButterflyStamp
        fileName="stamp3"
        className="absolute z-10 mt-[-118px] hidden w-[50px] transition-all hover:scale-110 md:ml-[169px] md:block md:w-[79px] lg:ml-[203px]"
      />
    </section>
  );
}

function StackSection() {
  return (
    <section className="z-[9] grid h-full min-h-[306px] w-full grid-cols-2 grid-rows-4 gap-3 p-4 sm:grid-cols-3 md:gap-2 md:p-0 md:pb-6 md:pl-6 lg:grid-cols-4 lg:grid-rows-3 lg:gap-3 xl:grid-cols-4">
      {TECH_STACK.map(({ title, Icon }, index) => (
        <TooltipProvider key={index} delayDuration={0}>
          <Tooltip>
            <div
              key={index}
              className="group flex min-h-[70px] flex-col items-center justify-center bg-[#E7D6E2]/30 md:min-h-0"
              style={useBorder({
                borderWidth: "1.2px",
                borderColor: "#D982C2",
                borderDash: "15px",
                borderSpacing: "25px",
              })}
            >
              <TooltipTrigger>
                <Icon
                  className={`h-[32px] w-[32px] text-[#b85495] transition-all group-hover:scale-110 group-hover:text-[#dc299d] lg:h-[38px] lg:w-[38px]`}
                />
              </TooltipTrigger>
            </div>
            <TooltipContent className="hidden rounded bg-[#21005D] px-4 py-2 text-sm lg:block">
              <p className="text-white">{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </section>
  );
}

function JosukeBanner() {
  return (
    <motion.img
      src="/assets/images/josuke-banner.png"
      alt="Josuke Banner"
      className="absolute z-[1] hidden md:bottom-[-59px] md:right-[-165px] md:block md:w-[360px] lg:bottom-[-82px] lg:right-[-230px] lg:w-[462px]"
      whileHover={{ scale: [null, 1.06, 1.06] }}
      transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
    />
  );
}
