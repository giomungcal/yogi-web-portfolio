import { IconType } from "react-icons";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

interface TechStackItem {
  title: string;
  link: string;
  Icon: IconType;
  color: string;
}

export const TECH_STACK: TechStackItem[] = [
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    Icon: FaHtml5,
    color: "text-[#E34F26]", // HTML color
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    Icon: FaCss3,
    color: "text-[#006CB4]", // CSS color
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Icon: FaJs,
    color: "text-[#F7DF1E]", // JavaScript color
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/docs/",
    Icon: SiTypescript, // Use the appropriate TypeScript icon from react-icons
    color: "text-[#007ACC]", // TypeScript color
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/docs",
    Icon: SiTailwindcss, // Use the appropriate Tailwind CSS icon from react-icons
    color: "text-[#38B2AC]", // Tailwind CSS color
  },
  {
    title: "React",
    link: "https://reactjs.org/docs/getting-started.html",
    Icon: FaReact,
    color: "text-[#61DAFB]", // React color
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/docs",
    Icon: SiNextdotjs,
    color: "text-[#000000]", // Next.js color
  },
  {
    title: "Photoshop",
    link: "https://helpx.adobe.com/photoshop/user-guide.html",
    Icon: SiAdobephotoshop,
    color: "text-[#31A8FF]", // Photoshop color
  },
  {
    title: "Adobe XD",
    link: "https://helpx.adobe.com/xd/user-guide.html",
    Icon: SiAdobexd,
    color: "text-[#FF61F6]", // Adobe XD color
  },
  {
    title: "Figma",
    link: "https://help.figma.com/hc/en-us",
    Icon: SiFigma,
    color: "text-[#F24E1E]", // Figma color
  },
  {
    title: "Unity",
    link: "https://docs.unity3d.com/Manual/index.html",
    Icon: SiUnity,
    color: "text-[#F24E1E]", // Unity color
  },
];
