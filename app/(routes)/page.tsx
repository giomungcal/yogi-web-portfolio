import * as motion from "framer-motion/client";
import DesktopNav from "../_components/common/DesktopNav";
import EmptyFillerDiv from "../_components/common/EmptyFillerDiv";
import Footer from "../_components/common/Footer";
import { JojoButterflyStamp } from "../_components/common/JojoButterflyStamp";
import { MobileNavTrigger } from "../_components/common/MobileNavTrigger";
import MobileNotice from "../_components/common/MobileNotice";
import Wrapper from "../_components/layout/Wrapper";

export default function Home() {
  return (
    <Wrapper borderColor={"lightpurple"}>
      <YogiBanner />
      <main className="flex h-full w-full flex-col py-8 md:grid md:grid-cols-3 md:grid-rows-2 md:overflow-hidden md:py-0 md:pr-10">
        <DesktopNav className="ml-8" />
        <MailStamp />
        <LandingTitle />
        <MobileNavTrigger />
        <EmptyFillerDiv />
        <section className="my-6 flex flex-col items-center gap-3 md:col-span-2 md:my-0 md:items-end md:pt-10">
          <LandingBio />
          <Footer />
        </section>
        <JohnnyBanner />
        <GioBanner />
        <MobileNotice />
      </main>
    </Wrapper>
  );
}

function LandingTitle() {
  return (
    <div className="relative flex select-none flex-col items-center justify-center pt-4 md:mt-4 md:items-end md:justify-end md:pl-2 md:pt-0">
      <JojoButterflyStamp
        fileName="stamp1"
        className="absolute top-[55px] z-10 ml-52 w-[50px] rotate-12 transition-all hover:scale-110 md:top-[30px] md:ml-0 md:mr-[-25px] md:w-[79px]"
      />
      <JojoButterflyStamp
        fileName="stamp2"
        className="absolute z-10 mr-56 mt-36 w-[50px] -rotate-12 transition-all hover:scale-110 md:bottom-[-53px] md:mr-48 md:mt-0 md:w-[70px]"
      />
      <h2 className="danfo-regular overflow-hidden text-7xl leading-normal text-blue md:absolute md:top-[6px] md:text-[80px]">
        HI,I'M
      </h2>
      <h1 className="danfo-claw -mb-4 -mt-20 text-[140px] text-[#4B7EEB] md:absolute md:top-[42px] md:mt-0">
        GIO
      </h1>
    </div>
  );
}

function YogiBanner() {
  return (
    <div className="absolute -right-24 top-4 z-10 hidden h-[34px] w-[290px] rotate-[42deg] items-center justify-center overflow-hidden border-[2px] border-black bg-[#B2BFFF] md:flex">
      <p className="roboto-flex flex flex-shrink-0 text-2xl text-[#FFF6F2]">
        YOGI ✰ YOGI ✰ YOGI ✰
      </p>
    </div>
  );
}

function MailStamp() {
  return (
    <div className="hidden md:block">
      <img
        src="/assets/images/mail-stamps.png"
        alt="Mail Stamp"
        width={180}
        height={97}
        className="bottom-0 right-0 translate-x-6 translate-y-8 scale-100 lg:translate-x-14 lg:scale-110"
      />
    </div>
  );
}

function LandingBio() {
  return (
    <p className="kode-mono-regular px-12 text-center text-[13px] md:max-w-[250px] md:px-0 md:text-right md:text-[11.5px] lg:max-w-[360px] lg:text-[13px] lg:leading-5">
      a <span className="kode-mono-bold">front-end developer</span> shifting
      from a career in information security upon realizing where my passion
      really lies. after 4 years, i’ve decided to dive back into web development
      to pursue what my heart truly wants ♡
    </p>
  );
}

function JohnnyBanner() {
  return (
    <motion.img
      src="/assets/images/johnny-banner.png"
      alt="Johnny Banner"
      className="absolute bottom-0 hidden md:left-[-98px] md:top-[90px] md:block md:w-[300px] lg:left-[-158px] lg:top-[5px] lg:w-[350px]"
      whileHover={{ scale: [null, 1.08] }}
      transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
    />
  );
}

function GioBanner() {
  return (
    <motion.img
      src="/assets/images/gio-banner.png"
      alt="Gio banner"
      className="absolute bottom-0 left-[100px] top-[138px] hidden md:block md:w-[330px] lg:top-[118px] lg:w-[368px]"
      whileHover={{ scale: [null, 1.08] }}
      transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
    />
  );
}
