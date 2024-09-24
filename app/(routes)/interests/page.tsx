import DesktopNav from "@/app/_components/common/DesktopNav";
import { MobileNavTrigger } from "@/app/_components/common/MobileNavTrigger";
import MobileNotice from "@/app/_components/common/MobileNotice";
import Wrapper from "@/app/_components/layout/Wrapper";
import * as motion from "framer-motion/client";
import { twMerge } from "tailwind-merge";

export default function Interests() {
  interface INTERESTS {
    title: string;
    content: string;
    media: JSX.Element | string;
  }

  const INTERESTS: INTERESTS[] = [
    {
      title: "vlogging",
      content:
        "since i was a kid, taking videos of random things has been something i enjoyed. i almost took up film as a course in college but decided otherwise. now, i return to it as a hobby whenever I travel.",
      media: (
        <iframe
          style={{
            width: "100%",
            height: "210px",
          }}
          src="https://www.youtube.com/embed/4GYHbqslFL4?si=X3TygJ8KdWLlfCeM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      title: "drag & fashion",
      content:
        "i'm a hugeeee fan of everything drag/fashion related. earlier this year, i developed a passion for fashion designing and decided to start studying at a local fashion school on weekends. however, i paused my studies to focus on learning coding.",
      media: "/assets/images/drag-fashion-banner.png",
    },
    {
      title: "gaming",
      content:
        "i'm a big console gamer, having owned a psp in my teen years, a ps4, and recently a ps5. i've played a wide range of games, from chill ones like harvest moon and stardew valley to challenging games like monster hunter and final fantasy, as well as extreme titles like bloodborne, sekiro, elden ring.",
      media: "/assets/images/gaming.png",
    },
    {
      title: "badminton",
      content:
        "a sport that i recently picked up, found that i really enjoyed it and now it's been one of my go to hobbies. kinda regret not starting to play it at an earlier age though.",
      media: "/assets/images/badminton.png",
    },
  ];

  return (
    <Wrapper borderColor="gold" className="md:h-auto min-h-450px md:my-[20vh]">
      <main className="w-full h-full flex flex-col py-12 md:py-0 justify-center items-center">
        <section className="flex w-full justify-around items-center">
          <header className="hidden md:flex w-[25%]  justify-center md:mt-6">
            <DesktopNav />
          </header>
          <h1 className="md:w-[75%] w-full danfo-comb text-4xl xs:text-6xl sm:text-[84px] lg:text-8xl text-[#596184] text-center">
            INTERESTS
          </h1>
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
          <section className="md:w-[80%] w-full flex flex-col gap-y-6 my-6 md:my-0">
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
