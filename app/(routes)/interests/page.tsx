import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import { INTERESTS } from "@/app/_constants/interest";
import * as motion from "framer-motion/client";
import { twMerge } from "tailwind-merge";

export default function Interests() {
  return (
    <Wrapper borderColor="gold" className="min-h-450px md:my-[20vh] md:h-auto">
      <main className="flex h-full w-full flex-col items-center justify-center py-12 md:py-0">
        <section className="my-9 flex w-full items-center justify-around">
          <header className="hidden w-[25%] justify-center self-start md:-mt-6 md:flex">
            <DesktopNav />
          </header>
          <LandingTitle />
        </section>
        <MobileNavTrigger />
        <div className="my-6 flex w-full justify-between">
          <GioBanner />
          <InterestsSection />
          <BucciaratiBanner />
        </div>
        <BottomNote />
        <MobileNotice />
      </main>
    </Wrapper>
  );
}

function LandingTitle() {
  return (
    <div className="relative w-full md:w-[75%]">
      <h1 className="danfo-comb text-center text-4xl text-[#3C3666] xs:text-6xl sm:text-[84px] lg:text-[100px]">
        INTERESTS
      </h1>
      <img
        className="absolute bottom-0 right-5 hidden w-[45px] md:block"
        src="/assets/images/stamp5.png"
        alt="Coin Stamp"
      />
    </div>
  );
}

function GioBanner() {
  return (
    <div className="hidden w-[10%] md:block">
      <motion.img
        className="absolute -left-24 top-[46rem] w-[200px]"
        src="/assets/images/gio2-banner.png"
        alt="Gio Banner"
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
      />
    </div>
  );
}

function BucciaratiBanner() {
  return (
    <div className="hidden w-[10%] md:block">
      <motion.img
        className="absolute -right-24 top-40 w-[200px]"
        src="/assets/images/bucciarati-banner.png"
        alt="Bucciarati Banner"
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
      />
    </div>
  );
}

function InterestsSection() {
  return (
    <section className="my-6 flex w-full flex-col gap-y-12 md:my-0 md:w-[80%]">
      {INTERESTS.map(({ title, content, media: Media }, index) => (
        <div
          key={index}
          className={twMerge(
            "flex w-full flex-col items-center justify-center gap-x-8 gap-y-6 md:flex-row",
            index % 2 !== 1 && "md:text-right",
          )}
        >
          {typeof Media === "string" ? (
            <motion.img
              whileHover={{ scale: [null, 1.35, 1.35] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
              className={twMerge("w-[55%]", index % 2 === 1 && "md:order-2")}
              src={Media}
              alt={`${title} Picture`}
            />
          ) : (
            <div
              className={twMerge(
                "w-[70%] md:w-[65%]",
                index % 2 === 1 && "md:order-2",
              )}
            >
              {Media}
            </div>
          )}
          <div className="flex w-[70%] flex-col gap-y-3 md:w-[45%]">
            <h2 className="kode-mono-bold text-4xl xs:text-5xl">{title}</h2>
            <p className="kode-mono-regular text-sm">{content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function BottomNote() {
  return (
    <div className="kode-mono-bold my-12 flex w-[80%] justify-center text-base lg:text-2xl">
      <h2 className="text-center">
        ..oh and i love{" "}
        <span className="text-lg text-[#F5C95E] lg:text-4xl">jojo</span>, if it
        wasn’t obvious.{" "}
      </h2>
    </div>
  );
}
