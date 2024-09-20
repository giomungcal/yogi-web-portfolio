type SocialLinksItem = {
  name: string;
  link: string;
  img: string;
};

export const SOCIAL_LINKS: SocialLinksItem[] = [
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
