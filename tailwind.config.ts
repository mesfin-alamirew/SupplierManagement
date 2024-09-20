import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        auSky: "#C3EBFA",
        auSkyLight: "#EDF9FD",
        auPurple: "#CFCEFF",
        auPurpleLight: "#F1F0FF",
        auYellow: "#FAE27C",
        auYellowLight: "#FEFCE8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
