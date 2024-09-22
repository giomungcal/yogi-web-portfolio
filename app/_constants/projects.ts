type ProjectItem = {
  id: number;
  name: string;
  subtext?: string;
  title: string;
  techstack: string[];
  website: boolean;
  github: boolean;
  description: string;
  images: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "this site ★",
    title: "This Site ★",
    techstack: [
      "html",
      "css",
      "react",
      "tailwindcss",
      "nextjs",
      "framer motion",
    ],
    website: true,
    github: true,
    description:
      "A personal portfolio website showcasing various projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills. projects and skills.",
    images: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/250x250",
      "https://via.placeholder.com/500x150",
    ],
  },
  {
    id: 2,
    name: "pinterest clone",
    title: "Pinterest Clone",
    techstack: ["html", "css", "react"],
    website: true,
    github: true,
    description:
      "A clone of Pinterest built with React, mimicking its design and core functionality.",
    images: [
      "https://via.placeholder.com/350x250",
      "https://via.placeholder.com/200x300",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/300x300",
    ],
  },
  {
    id: 3,
    name: "wordle game",
    title: "Wordle Game",
    techstack: ["html", "css", "react"],
    website: true,
    github: true,
    description:
      "A fun Wordle game recreation using React and CSS to handle the UI.",
    images: [
      "https://via.placeholder.com/450x300",
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/350x200",
    ],
  },
  {
    id: 4,
    name: "small projects",
    title: "Small Projects",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
    description:
      "A collection of small projects created to experiment with new features and ideas.",
    images: [
      "https://via.placeholder.com/300x300",
      "https://via.placeholder.com/400x250",
    ],
  },
  {
    id: 5,
    name: "electro knight",
    subtext: "mobile game",
    title: "ElectroKnight Mobile Game",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
    description:
      "An exciting mobile game featuring an electric knight fighting enemies.",
    images: [
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/350x350",
      "https://via.placeholder.com/450x150",
    ],
  },
  {
    id: 6,
    name: "previous portfolio",
    title: "Previous Portfolio",
    techstack: ["html", "css", "react"],
    website: true,
    github: true,
    description:
      "The previous iteration of my portfolio, featuring different projects and a unique design.",
    images: [
      "https://via.placeholder.com/200x300",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/400x400",
      "https://via.placeholder.com/250x250",
    ],
  },
  {
    id: 7,
    name: "figma designs",
    title: "Figma Designs",
    techstack: ["html", "css", "react"],
    website: true,
    github: false,
    description:
      "A set of Figma designs demonstrating creative user interfaces and UX principles.",
    images: ["https://via.placeholder.com/350x200"],
  },
  {
    id: 8,
    name: "school projects",
    title: "School Projects",
    techstack: ["html", "css", "react"],
    website: false,
    github: true,
    description:
      "A variety of projects developed during my time in school, focusing on web development and design.",
    images: [
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/500x250",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/350x350",
    ],
  },
];
