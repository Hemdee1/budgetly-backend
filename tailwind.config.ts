import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./emails/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        fullscreen: "900px",
      },
      colors: {
        primary: "#0257EF",
      },
      fontFamily: {
        Manrope: '"Manrope", sans-serif',
      },
    },
  },
  plugins: [],
};
export default config;
