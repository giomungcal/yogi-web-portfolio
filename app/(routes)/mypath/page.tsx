import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import * as motion from "framer-motion/client";
import React from "react";

export default function MyPath() {
  return (
    <Wrapper borderColor="gray" className="lg:max-w-[950px] overflow-visible">
      <main className="flex flex-col w-full gap-y-6 md:gap-y-0 md:flex-row h-full md:p-4 p-12 justify-between items-start md:items-end overflow-visible">
        <div className="flex flex-col md:w-[19%] h-full justify-between items-start overflow-visible">
          <header className="-mt-2 -ml-2">
            <DesktopNav />
          </header>
          <LandingTitle />
        </div>
        <MobileNavTrigger className="w-full" />
        <SBRBanner />
        <section className="flex flex-col justify-between h-full md:w-[43%] text-xs md:text-[10.5px] lg:text-[11px] kode-mono-light md:text-right text-left">
          <SchoolSection />
          <WorkSection />
        </section>
        <MobileNotice className="px-0 self-center" />
      </main>
    </Wrapper>
  );
}

function LandingTitle() {
  return (
    <div className="relative">
      <h1 className="text-[#470842] md:text-6xl text-8xl danfo-regular leading-[4.5rem] md:leading-[3rem] my-2 md:my-0">
        MY
        <br />
        PATH
      </h1>
      <img
        className="absolute md:w-auto md:top-1 md:right-0 w-32 top-0 right-1 hover:scale-110 transition-all"
        src="/assets/images/stamp4.png"
        alt="Jojo Stamp"
      />
    </div>
  );
}

function SBRBanner() {
  return (
    <div className="md:static md:flex md:items-end md:-mb-12 md:w-auto sm:flex hidden absolute top-0 right-8 mt-[-5.8rem] w-56">
      <motion.img
        src="/assets/images/sbr-banner.png"
        alt="SBR Banner"
        className=" w-[350px] z-[1]"
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
      />
    </div>
  );
}

function SchoolSection() {
  return (
    <div className="flex flex-col justify-end md:items-end items-start w-full">
      <h2 className="text-6xl xs:text-7xl danfo-comb text-[#3b1b38] mb-1 md:mb-0 lg:mb-1 -mt-1">
        school
      </h2>
      <div className="flex flex-col gap-y-2">
        <div>
          <h3 className="jetbrains-mono-extrabold text-xs">
            st. paul college, san rafael
          </h3>
          <p>high school, 2011-2015</p>
        </div>

        <div>
          <h3 className="jetbrains-mono-extrabold text-xs">
            pamantasan ng lungsod ng maynila
          </h3>
          <p>
            <span className="kode-mono-bold">bs computer engineering</span>,
            2015-2020
          </p>
        </div>
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div className="flex flex-col justify-end md:items-end items-start kode-mono-regular w-full mt-4 md:mt-0 ">
      <h2 className="text-6xl xs:text-7xl danfo-comb text-[#3b1b38] mb-1 md:mb-0 lg:mb-1">
        work
      </h2>
      <p>
        back in 2020, i was working towards a career in front-end development.
        however..{" "}
      </p>
      <h3 className="jetbrains-mono-extrabold text-lg -mb-1">citi</h3>
      <p className="kode-mono-bold text-xs">
        <span className="text-[13px]">mainframe analyst</span> (2020 - 2024)
      </p>
      <p>
        ..right after graduating, i accepted an offer from citi and began
        working as a mainframe analyst. in 2023, i was promoted to an assistant
        manager position. despite having a great job for 4 years, after much
        consideration, i decided in 2024 to return to my roots and pursue
        development again.
      </p>
    </div>
  );
}
