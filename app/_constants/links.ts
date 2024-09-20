interface NavLinkItem {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "techstack", href: "/techstack" },
  { name: "interests", href: "/interests" },
];
