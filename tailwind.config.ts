import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Mobile+
      md: "768px", // Tablets
      lg: "1280px", // True desktops
      xl: "1440px", // Big screens
      "2xl": "1600px", // Ultra-wide
    },
  },
  plugins: [],
};

export default config;
