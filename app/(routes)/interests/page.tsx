import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import { INTERESTS } from "@/app/_constants/INTERESTS";
import * as motion from "framer-motion/client";
import { twMerge } from "tailwind-merge";

export default function Interests() {
  return (
    <Wrapper borderColor="gold" className="md:h-auto min-h-450px md:my-[20vh]">
      <main className="w-full h-full flex flex-col py-12 md:py-0 justify-center items-center">
        <section className="flex w-full justify-around items-center my-6">
          <header className="hidden md:flex w-[25%]  justify-center md:mt-6">
            <DesktopNav />
          </header>
          <div className="relative md:w-[75%] w-full">
            <h1 className="danfo-comb text-4xl xs:text-6xl sm:text-[84px] lg:text-[100px] text-[#3C3666] text-center">
              INTERESTS
            </h1>
            <img
              className="hidden md:block absolute bottom-0 right-5 w-[45px]"
              src="/assets/images/stamp5.png"
              alt="Coin Stamp"
            />
          </div>
        </section>
        <MobileNavTrigger />
        <div className="flex w-full justify-between my-6">
          <div className="hidden md:block w-[10%]">
            <motion.img
              className="absolute top-[46rem] -left-24 w-[200px]"
              src="/assets/images/gio2-banner.png"
              alt="Gio Banner"
              whileHover={{ scale: [null, 1.05, 1.05] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </div>
          <section className="md:w-[80%] w-full flex flex-col gap-y-12 my-6 md:my-0">
            {INTERESTS.map(({ title, content, media: Media }, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex md:flex-row flex-col w-full gap-x-8 gap-y-6 items-center justify-center",
                  index % 2 !== 1 && "md:text-right"
                )}
              >
                {typeof Media === "string" ? (
                  <img
                    className={twMerge(
                      "w-[55%]",
                      index % 2 === 1 && "md:order-2"
                    )}
                    src={Media}
                    alt=""
                  />
                ) : (
                  <div
                    className={twMerge(
                      "md:w-[65%] w-[70%]",
                      index % 2 === 1 && "md:order-2"
                    )}
                  >
                    {Media}
                  </div>
                )}
                <div className="md:w-[45%] w-[70%] flex flex-col gap-y-3">
                  <h2 className="kode-mono-bold xs:text-5xl text-4xl">
                    {title}
                  </h2>
                  <p className="kode-mono-regular text-sm">{content}</p>
                </div>
              </div>
            ))}
          </section>
          <div className="hidden md:block  w-[10%]">
            <motion.img
              className="absolute top-40 -right-24 w-[200px]"
              src="/assets/images/bucciarati-banner.png"
              alt="Bucciarati Banner"
              whileHover={{ scale: [null, 1.05, 1.05] }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
            />
          </div>
        </div>
        <div className="w-[80%] kode-mono-bold text-base lg:text-2xl flex justify-center my-12">
          <h2 className="text-center">
            ..oh and i love{" "}
            <span className="text-lg lg:text-4xl text-[#F5C95E]">jojo</span>, if
            it wasn’t obvious.{" "}
          </h2>
        </div>
        <MobileNotice />
      </main>
    </Wrapper>
  );
}
