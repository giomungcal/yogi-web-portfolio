import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import * as motion from "framer-motion/client";
import React from "react";

export default function MyPath() {
  return (
    <Wrapper borderColor="gray" className="overflow-visible lg:max-w-[950px]">
      <main className="flex h-full w-full flex-col items-start justify-between gap-y-6 overflow-visible p-12 md:flex-row md:items-end md:gap-y-0 md:p-4">
        <div className="flex h-full flex-col items-start justify-between overflow-visible md:w-[19%]">
          <header className="-ml-2 -mt-2">
            <DesktopNav />
          </header>
          <LandingTitle />
        </div>
        <MobileNavTrigger className="w-full" />
        <SBRBanner />
        <section className="kode-mono-regular flex h-full flex-col justify-between text-left text-xs md:w-[43%] md:text-right md:text-[10.5px] lg:text-[11px]">
          <SchoolSection />
          <WorkSection />
        </section>
        <MobileNotice className="self-center px-0" />
      </main>
    </Wrapper>
  );
}

function LandingTitle() {
  return (
    <div className="relative">
      <h1 className="danfo-regular my-2 text-8xl leading-[4.5rem] text-[#470842] md:my-0 md:text-6xl md:leading-[3rem]">
        MY
        <br />
        PATH
      </h1>
      <img
        className="absolute right-1 top-0 w-32 transition-all hover:scale-110 md:right-0 md:top-1 md:w-auto"
        src="/assets/images/stamp4.png"
        alt="Jojo Stamp"
      />
    </div>
  );
}

function SBRBanner() {
  return (
    <div className="absolute right-8 top-0 mt-[-5.8rem] hidden w-56 sm:flex md:static md:-mb-12 md:flex md:w-auto md:items-end">
      <motion.img
        src="/assets/images/sbr-banner.png"
        alt="SBR Banner"
        className="z-[1] w-[350px]"
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
      />
    </div>
  );
}

function SchoolSection() {
  return (
    <div className="flex w-full flex-col items-start justify-end md:items-end">
      <h2 className="danfo-comb -mt-1 mb-1 text-6xl text-[#3b1b38] xs:text-7xl md:mb-0 lg:mb-1">
        school
      </h2>
      <div className="flex flex-col gap-y-1">
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
        <p>
          back in 2020, i was working towards a career in front-end development.
          however..{" "}
        </p>
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div className="kode-mono-regular mt-4 flex w-full flex-col items-start justify-end md:mt-0 md:items-end">
      <h2 className="danfo-comb text-6xl text-[#3b1b38] xs:text-7xl">work</h2>

      <div>
        <h3 className="jetbrains-mono-extrabold -mb-1 text-lg">citi</h3>
        <p className="kode-mono-bold text-xs">
          <span className="text-[13px]">mainframe analyst</span> (2020 - 2024)
        </p>
      </div>
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
