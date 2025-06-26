import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // You can extend with fixed custom colors here if needed in the future
      // colors: {
      //   brandBlue: "#1e3a8a",
      // },
    },
  },
  plugins: [],
};

export default config;
