import * as motion from "framer-motion/client";
import EmptyFillerDiv from "../_components/common/EmptyFillerDiv";
import Nav from "../_components/common/Nav";
import SocialMediaButton from "../_components/common/SocialMediaButton";
import Wrapper from "../_components/layout/Wrapper";

export default function Home() {
  const SOCIAL_LINKS = [
    {
      name: "github",
      link: process.env.GITHUB_URL as string,
      img: "/assets/images/github-square.svg",
    },
    {
      name: "linkedin",
      link: process.env.LINKEDIN_URL as string,
      img: "/assets/images/linked-in.svg",
    },
    {
      name: "behance",
      link: process.env.BEHANCE_URL as string,
      img: "/assets/images/behance.svg",
    },
  ];

  return (
    <>
      <Wrapper borderColor={"lightpurple"}>
        <YogiBanner />
        <section className="w-full h-full flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 md:overflow-hidden ">
          <Nav currentPage="home" isMobile={false} className="ml-8" />
          <MailStamp />
          <LandingTitle />
          <Nav isMobile={true} currentPage="home"></Nav>
          <EmptyFillerDiv />
          <div className="md:col-span-2 flex flex-col md:items-end items-center my-6 md:my-0 md:pt-8 gap-3 md:pr-10">
            <LandingBio />
            <div className="grid grid-cols-3 items-center gap-4">
              {SOCIAL_LINKS.map((l, index) => {
                return <SocialMediaButton key={index} {...l} />;
              })}
            </div>
          </div>
          <JohnnyBanner />
          <GioBanner />
        </section>
        <MobileNotice />
      </Wrapper>
    </>
  );
}

function LandingTitle() {
  return (
    <div className="relative flex flex-col justify-center items-center md:items-end md:justify-end pt-4 md:pt-0 md:mt-4 md:pl-2 md:pr-10">
      <img
        src="/assets/images/stamp1.png"
        alt="Jojo Stamp"
        className="z-10 w-[50px] md:w-[79px] absolute md:right-[10px] top-[55px] md:top-[30px] rotate-12 hover:scale-110 transition-all ml-52 md:ml-0"
      />
      <img
        src="/assets/images/stamp2.png"
        alt="Jojo Stamp"
        className="z-10 w-[50px] md:w-[70px] absolute md:left-[-21px] md:bottom-[-53px] -rotate-12 hover:scale-110 transition-all mr-56 md:ml-0 mt-36 md:mt-0"
      />
      <h2 className="md:absolute text-blue danfo-regular md:top-[6px] md:text-[80px] text-7xl leading-normal overflow-hidden">
        HI,I'M
      </h2>
      <h1 className="md:absolute  -mt-20 -mb-4 md:mt-0  text-[#4B7EEB] text-[140px] danfo-claw md:top-[42px] ">
        GIO
      </h1>
    </div>
  );
}

function YogiBanner() {
  return (
    <div className="hidden md:flex z-10 w-[290px] h-[34px] items-center justify-center bg-[#B2BFFF] absolute -right-24 top-4 rotate-[42deg] border-black border-[2px] overflow-hidden">
      <p className="text-[#FFF6F2] roboto-flex text-2xl flex flex-shrink-0">
        {"YOGI ✰ YOGI ✰ YOGI ✰"}
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
        className="right-0 bottom-0 translate-x-8 translate-y-8 scale-110"
      />
    </div>
  );
}

function LandingBio() {
  return (
    <p className="kode-mono-regular text-center md:text-right text-[13px] md:text-xs lg:text-[13px] md:w-[230px] lg:w-[310px] px-12 md:px-0 lg:leading-5">
      a front-end developer shifting from a career in information security after
      realizing where my passion really lies. i’ve decided to dive back into web
      development, to pursue what my heart truly wants ♡
    </p>
  );
}

function JohnnyBanner() {
  return (
    <motion.img
      src="/assets/images/johnny-banner.png"
      alt="Johnny Banner"
      className="hidden md:block absolute bottom-0 lg:w-[350px] md:w-[300px] lg:top-[5px] md:top-[90px] lg:left-[-158px] md:left-[-98px]"
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
    />
  );
}

function GioBanner() {
  return (
    <motion.img
      src="/assets/images/gio-banner.png"
      alt="Gio banner"
      className="hidden md:block absolute bottom-0 lg:w-[368px] md:w-[330px] top-[128px] left-[110px]"
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.95] }}
    />
  );
}

function MobileNotice() {
  return (
    <p className="block md:hidden text-center text-[12px] mb-8 italic opacity-50 px-8">
      note: use desktop for a better experience
    </p>
  );
}
