interface ProjectItem {
  id: number;
  name: string;
  title: string;
  techstack: string[];
  website: boolean;
  github: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "this site ★",
    title: "This Site ★",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
  {
    id: 2,
    name: "pinterest clone",
    title: "Pinterest Clone",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
  {
    id: 3,
    name: "wordle game",
    title: "Wordle Game",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
  {
    id: 4,
    name: "small projects",
    title: "Small Projects",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
  {
    id: 5,
    name: "electro knight",
    subtext: "mobile game",
    title: "ElectroKnight Mobile Game",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
  {
    id: 6,
    name: "previous portfolio",
    title: "Previous Portfolio",
    techstack: ["html", "css", "react"],
    website: true,
    github: false,
  },
  {
    id: 7,
    name: "figma designs",
    title: "Figma Designs",
    techstack: ["html", "css", "react"],
    website: false,
    github: false,
  },
  {
    id: 8,
    name: "school projects",
    title: "School Projects",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
  },
];
