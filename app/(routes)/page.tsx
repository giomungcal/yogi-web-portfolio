import * as motion from "framer-motion/client";
import Image from "next/image";
import Nav from "../_components/common/Nav";
import Wrapper from "../_components/layout/Wrapper";

export default function Home() {
  const githubUrl = process.env.GITHUB_URL;
  const linkedinUrl = process.env.LINKEDIN_URL;
  const behanceUrl = process.env.BEHANCE_URL;

  return (
    <Wrapper borderColor={"light-purple"}>
      <img
        src="/assets/images/yogi-banner-final.png"
        alt="Yogi Banner"
        width={234}
        height={31}
        className="z-10 absolute right-0 top-0 -translate-y-16 translate-x-20 overflow-hidden"
      />
      <section className="w-full h-full grid grid-cols-3 grid-rows-2 overflow-hidden">
        <Nav currentPage="home" className="ml-8" />
        <div>
          <img
            src="/assets/images/mail-stamps.png"
            alt="Mail Stamp"
            width={180}
            height={97}
            className="right-0 bottom-0 translate-x-8 translate-y-8 scale-110"
          />
        </div>
        <div className="flex relative flex-col justify-end pl-2">
          <Image
            src="/assets/images/stamp1.png"
            alt="Jojo Stamp"
            width={79}
            height={125}
            className="z-10 absolute right-0 top-0 translate-y-8 md:-translate-x-2 translate-x-6 rotate-12"
          />
          <Image
            src="/assets/images/stamp2.png"
            alt="Jojo Stamp"
            width={75}
            height={120}
            className="z-10 absolute -translate-x-10 translate-y-12 -rotate-12"
          />
          <h2 className="absolute text-blue danfo-regular -translate-y-20 md:text-custom-hi text-7xl leading-normal">
            HI, I'M
          </h2>
          <h2 className="absolute text-light-blue text-custom-gio danfo-claw translate-y-12">
            GIO
          </h2>
        </div>
        <div></div>
        {/* <div></div> */}
        <div className="col-span-2 flex flex-col items-end pt-7 gap-3 pr-8">
          <p className="kode-mono-regular text-right w-[220px] text-xs md:text-sm md:w-[310px]">
            a front-end developer shifting from a career in information security
            after realizing where my passion really lies. i’ve decided to dive
            back into web development, to pursue what my heart truly wants ♡
          </p>
          <div className="grid grid-cols-3 items-center gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github-square.svg" alt="Github" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/linked-in.svg" alt="LinkedIn" />
            </a>{" "}
            <a href={behanceUrl} target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/behance.svg" alt="Behance" />
            </a>{" "}
          </div>
        </div>
        <motion.img
          src="/assets/images/johnny-banner.png"
          alt="Johnny Banner"
          className="absolute bottom-0 w-[350px] top-[5px] left-[-158px]"
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/assets/images/gio-banner.png"
          alt="Gio banner"
          className="absolute bottom-0 w-[368px] top-[128px] left-[110px]"
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
        />
      </section>
    </Wrapper>
  );
}
