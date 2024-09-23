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
  websiteLink: string | null;
  githubLink: string | null;
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "yogi's space",
    title: "yogi's space",
    techstack: [
      "react",
      "nextjs",
      "tailwind",
      "framer motion",
      "figma",
      "responsive design",
    ],
    website: false,
    github: true,
    description:
      "Welcome to my latest web postfolio — sooo proud of how this came out ★ Designed the whole thing on figma and built everything using NextJS and Framer motion. I learned a ton of things while developing this site — more details on the github page ♥︎",
    images: [
      "https://i.imgur.com/aCxUkT8.gif",
      "https://i.imgur.com/gDRsGqM.gif",
    ],
    websiteLink: null,
    githubLink: "https://github.com/giomungcal/yogi-web-portfolio",
  },
  {
    id: 2,
    name: "pinterest clone",
    title: "Pinterest Clone",
    techstack: [
      "react",
      "nextjs",
      "tailwind",
      "context api",
      "responsive design",
    ],
    website: true,
    github: true,
    description:
      "A clone of Pinterest built with React & NextJS, mimicking its design and core functionality. This is a relatively huge project aimed to apply every React concept I've learned so far. All built from scratch. ",
    images: ["https://i.imgur.com/mzBXo3v.gif"],
    websiteLink: "https://pinterest-clone-yogi.vercel.app/",
    githubLink: "https://github.com/giomungcal/pinterest-clone-yogi",
  },
  {
    id: 3,
    name: "wordle by yogi",
    title: "Wordle Game",
    techstack: ["react", "typescript", "tailwind", "responsive design"],
    website: true,
    github: true,
    description:
      "A wordle game that I created to practice using TypeScript in my development. The words in the list are related to some games that I love.",
    images: ["https://i.imgur.com/vjsyaNh.gif"],
    websiteLink: "https://wordle-yogi.vercel.app/",
    githubLink: "https://github.com/giomungcal/wordle-yogi",
  },
  {
    id: 4,
    name: "small projects",
    title: "Small Projects",
    techstack: ["html", "css", "javascript", "responsive design"],
    website: false,
    github: true,
    description:
      "A collection of projects I've created to really learn coding with Javascript/React - with a design oriented approach. These include a revision of my portfolio (2020), the classic to-do app, a calculator, weather app, and more..",
    images: [
      "https://via.placeholder.com/300x300",
      "https://via.placeholder.com/400x250",
    ],
    websiteLink: null,
    githubLink: "https://github.com/giomungcal/refresher-personal-projects",
  },
  {
    id: 5,
    name: "electro knight",
    subtext: "mobile game",
    title: "ElectroKnight Mobile Game",
    techstack: ["unity", "c#", "photoshop"],
    website: false,
    github: true,
    description:
      "An adventure-based, interactive mobile quiz game that aims to assess the player's knowledge in the fundamentals of electronics related subjects. Includes 5 game modes: Multiple Choice, True or False, Guess the Symbol,  Identify the Resistance, and Word Translation (Filipino-English).",
    images: [
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/350x350",
      "https://via.placeholder.com/450x150",
    ],
    websiteLink: null,
    githubLink: "https://github.com/giomungcal/electro-knight",
  },
  {
    id: 6,
    name: "portfolio iteration",
    title: "Portfolio Iteration",
    techstack: ["html", "css", "react", "adobe xd", "responsive design"],
    website: true,
    github: true,
    description:
      "The previous iterations of my portfolio I've made back in 2020. Not my proudest feat but its good to look back at where i started ♡",
    images: [
      "https://i.imgur.com/jIotgCw.gif",
      "https://i.imgur.com/j694ppa.gif",
    ],
    websiteLink: "https://giomungcal.github.io/gio-webportfolio/",
    githubLink: "https://github.com/giomungcal/gio-webportfolio",
  },
  {
    id: 7,
    name: "UI designs",
    title: "Figma Designs",
    techstack: ["figma", "adobe xd", "photoshop"],
    website: true,
    github: false,
    description:
      "A set of Figma designs demonstrating creative user interfaces and UX principles. See more on my Behance profile on the link.",
    images: [
      "https://i.imgur.com/1LE2DiB.gif",
      "https://i.imgur.com/YT7VGSv.png",
      "https://i.imgur.com/NMLuHgO.png",
      "https://i.imgur.com/9rOwz4S.png",
      "https://i.imgur.com/CKW0Jhe.png",
    ],
    websiteLink: "https://www.behance.net/giomungcal",
    githubLink: null,
  },
  {
    id: 8,
    name: "school projects",
    title: "School Projects",
    techstack: ["html", "css", "javascript"],
    website: false,
    github: true,
    description:
      "A variety of projects developed during my time in school, focusing on web development and design.",
    images: ["https://i.imgur.com/JvBHkZQ.png"],
    websiteLink: null,
    githubLink: "https://github.com/giomungcal/cedula",
  },
];
