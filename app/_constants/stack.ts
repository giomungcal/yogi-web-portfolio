import { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiAdobexd,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

type TechStackItem = {
  title: string;
  Icon: IconType;
  color: string;
};

export const TECH_STACK: TechStackItem[] = [
  {
    title: "HTML",
    Icon: FaHtml5,
    color: "text-[#E34F26]", // HTML color
  },
  {
    title: "CSS",
    Icon: FaCss3Alt,
    color: "text-[#006CB4]", // CSS color
  },
  {
    title: "JavaScript",
    Icon: FaJs,
    color: "text-[#F7DF1E]", // JavaScript color
  },
  {
    title: "TypeScript",
    Icon: SiTypescript, // Use the appropriate TypeScript icon from react-icons
    color: "text-[#007ACC]", // TypeScript color
  },
  {
    title: "Tailwind CSS",
    Icon: SiTailwindcss, // Use the appropriate Tailwind CSS icon from react-icons
    color: "text-[#38B2AC]", // Tailwind CSS color
  },
  {
    title: "React",
    Icon: FaReact,
    color: "text-[#61DAFB]", // React color
  },
  {
    title: "Next.js",
    Icon: SiNextdotjs,
    color: "text-[#000000]", // Next.js color
  },
  {
    title: "Supabase",
    Icon: RiSupabaseFill,
    color: "text-[#31A8FF]", // Photoshop color
  },
  {
    title: "Firebase",
    Icon: IoLogoFirebase,
    color: "text-[#31A8FF]", // Photoshop color
  },
  {
    title: "Adobe XD",
    Icon: SiAdobexd,
    color: "text-[#FF61F6]", // Adobe XD color
  },
  {
    title: "Figma",
    Icon: SiFigma,
    color: "text-[#F24E1E]", // Figma color
  },
  {
    title: "Unity",
    Icon: SiUnity,
    color: "text-[#F24E1E]", // Unity color
  },
];
