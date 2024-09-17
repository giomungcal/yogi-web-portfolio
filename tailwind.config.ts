import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#292929",
      blue: "#242A9C",
      purple: "804973",
      green: "#94BD33",

      // Border Colors
      "light-blue": "#B2BFFF",
      "light-purple": "#C286B9",
      "light-green": "#AEDCA0",
      gray: "#C1CDCF",
      gold: "#F5C95E",
      olive: "#CAD40F",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
