import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        light: "#F0F4EF",
        resumeBlue: "#548AB7",
        dark: "#051923",
        red: "#CE4760",
        bgGray: "#dfdede",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
